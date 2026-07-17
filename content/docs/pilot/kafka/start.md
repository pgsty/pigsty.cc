---
title: 快速上手
weight: 5041
description: 从零部署单节点与三节点 Kafka，完成安全接入、参数调整和上线检查。
icon: fa-solid fa-rocket
module: [KAFKA]
categories: [教程]
---


本教程从一个最小单节点集群开始，完成 Topic 创建与消息读写；随后部署一套独立的三节点安全集群，配置应用用户、ACL、Quota 和生产 Topic；最后演示核心参数修改、客户端接入、监控验证与上线检查。

{{% alert title="教程范围" color="info" %}}
这里的“从零开始”是指从尚未部署 Kafka 开始。您需要先有一套可用的 Pigsty 管理节点，并已部署基础 [`INFRA`](/docs/infra) 服务；如果还没有，请先完成 [Pigsty 快速安装](/docs/setup/install)。目标节点需要 SSH/Sudo 权限，并可被 [`NODE`](/docs/node) 模块纳管。
{{% /alert %}}


--------

## 学习路径

| 阶段 | 目标 | 最终结果 |
|:---:|:---|:---|
| 1 | 部署单节点开发集群 | 1 个 combined 节点、PLAINTEXT、RF=1 Topic、CLI 读写 |
| 2 | 部署三节点生产基线 | 3 个 combined 节点、dynamic KRaft、TLS/SCRAM/ACL、RF=3/minISR=2 |
| 3 | 接入应用客户端 | 使用应用 Principal、Pigsty CA 与 SASL_SSL 生产/消费 |
| 4 | 修改核心参数 | 演示 Heap、Broker 参数、Topic Partition/保留和安全滚动 |
| 5 | 上线验收 | 检查 Quorum、ISR、端到端读写、监控、容量与运行手册 |
{.full-width}

{{% alert title="不要把两个示例当作原地升级" color="warning" %}}
下面的 `kf-dev` 与 `kf-main` 是两套独立新集群。不要通过给单节点 `kf-dev` 直接增加两个 combined 节点，把它原地改成三 Controller 集群；dynamic quorum 的 Controller 成员变化必须执行显式格式化、追平和 `add-controller` 流程。需要保留单节点数据时，应设计独立迁移方案。
{{% /alert %}}


--------

## 开始前准备

以下命令默认在 Pigsty 管理节点的项目目录执行：

```bash
cd ~/pigsty
```

开始前确认：

- `pigsty.yml` 是当前环境的配置源，先备份并审阅现有内容；
- Kafka 节点的 `inventory_hostname` 可以被所有 Kafka 成员和客户端直接解析、路由；
- 管理节点与 Kafka 节点时间同步；
- `9092`、`9095`、`9308`、`9404` 没有端口冲突；
- `/data/kafka` 对应专用数据盘或专用目录，且没有混放其他数据；
- 每次 `kafka.yml` 都使用 `-l` 精确选择同一 Kafka 集群的全部成员；
- 真实变更前先执行 `--check`，审阅输出并取得变更批准。

配置清单必须保留 `all.children` 层级。下面的组应合并到现有 `pigsty.yml`，不要用示例覆盖已有的 `all.vars`、`infra`、`etcd`、`pgsql` 等配置。


--------

## 一、部署单节点 Kafka

### 1. 定义集群

将以下 `kf-dev` 组加入 `all.children`。该节点省略 `kafka_role`，因此使用默认 `combined`，同时承担 Broker 与 Controller：

```yaml
all:
  children:
    # 现有 infra、etcd、pgsql 等分组继续保留

    kf-dev:
      hosts:
        10.10.10.10: { kafka_seq: 1 }
      vars:
        kafka_cluster: kf-dev
        kafka_data: /data/kafka
        kafka_security: plaintext
        kafka_topics:
          - name: quickstart.events
            partitions: 1
            replication_factor: 1
            config:
              retention.ms: 86400000   # 1 天，仅用于教程
```

这个配置会得到：

- 一个随机 Cluster ID；
- 一个 dynamic KRaft combined 节点；
- 默认 RF=1、minISR=1；
- 一个名为 `quickstart.events` 的单 Partition Topic；
- JMX Exporter `:9404` 与一个协议 Exporter `:9308`。

`plaintext` 没有传输加密、认证和 ACL，只能用于本机开发或可信隔离网络。


### 2. 纳管节点

如果该主机尚未完成 NODE 初始化，先执行检查模式：

```bash
./node.yml --check -l kf-dev
```

审阅结果并取得批准后再纳管节点：

```bash
./node.yml -l kf-dev
```

已经由 Pigsty 纳管、软件仓库和时间同步均正常的节点可以跳过这一步。NODE 的完整准备与日常管理见 [节点管理](/docs/node/admin)。


### 3. 部署 Kafka

先对完整集群执行检查：

```bash
./kafka.yml --check -l kf-dev
```

确认目标确实只有 `kf-dev` 的完整成员，审阅数据路径、软件包、端口与配置变化后执行：

```bash
./kafka.yml -l kf-dev
```

角色会安装 Java 与 `kafka-stack`、生成随机身份和 Bootstrap Manifest、格式化 KRaft 存储、启动服务、创建 Topic，并注册监控目标。


### 4. 验证服务与 Quorum

登录 Kafka 节点，检查服务：

```bash
systemctl is-active kafka kafka_exporter
journalctl -u kafka --since '-10 min' --no-pager
```

使用角色自有健康检查：

```bash
sudo -u kafka /usr/local/bin/pigsty-kafka-health cluster \
  --bootstrap-server 10.10.10.10:9092 \
  --command-config /etc/kafka/admin.properties
```

返回 JSON 中应有 `"healthy": true`。继续检查 dynamic quorum 与 Topic：

```bash
/opt/kafka/bin/kafka-metadata-quorum.sh \
  --bootstrap-server 10.10.10.10:9092 \
  --command-config /etc/kafka/admin.properties \
  describe --status

/opt/kafka/bin/kafka-topics.sh \
  --bootstrap-server 10.10.10.10:9092 \
  --command-config /etc/kafka/admin.properties \
  --describe --topic quickstart.events
```

应看到有效 `LeaderId`、dynamic `kraft.version`，以及 RF=1、ISR=1 的 `quickstart.events`。


### 5. 生产与消费消息

启动 Console Producer：

```bash
/opt/kafka/bin/kafka-console-producer.sh \
  --bootstrap-server 10.10.10.10:9092 \
  --command-config /etc/kafka/admin.properties \
  --topic quickstart.events
```

输入几行消息后按 `Ctrl-D` 结束。在另一个终端消费：

```bash
/opt/kafka/bin/kafka-console-consumer.sh \
  --bootstrap-server 10.10.10.10:9092 \
  --command-config /etc/kafka/admin.properties \
  --topic quickstart.events \
  --group quickstart.demo \
  --from-beginning
```

到这里，单节点部署、Topic 收敛和消息读写已经完成。进一步的状态检查见 [日常管理](/docs/pilot/kafka/admin)。


--------

## 二、部署三节点生产基线

三节点示例是一套全新的 `kf-main` 集群，使用三个 combined 节点。它可以容忍一个 Controller 故障；业务 Topic 使用 RF=3/minISR=2，并启用 `scram` 生产安全档位。


### 1. 定义安全集群与资源

将以下组加入现有 `all.children`：

```yaml
all:
  children:
    # 现有分组继续保留

    kf-main:
      hosts:
        10.10.10.11: { kafka_seq: 1 }
        10.10.10.12: { kafka_seq: 2 }
        10.10.10.13: { kafka_seq: 3 }
      vars:
        kafka_cluster: kf-main
        kafka_data: /data/kafka
        kafka_heap_opts: '-Xms4G -Xmx4G'
        kafka_security: scram

        kafka_parameters:
          num.partitions: 12
          num.network.threads: 6
          num.io.threads: 16
          log.retention.hours: 168
          log.segment.bytes: 1073741824

        kafka_users:
          - name: quickstart-app
            password: "{{ vault_kafka_quickstart_password }}"
            acls:
              - resource: topic
                name: quickstart.
                pattern: prefixed
                operations: [Read, Write, Describe]
              - resource: group
                name: quickstart.
                pattern: prefixed
                operations: [Read]
              - resource: cluster
                name: kafka-cluster
                operations: [Describe, IdempotentWrite]
            quota:
              producer_byte_rate: 10485760
              consumer_byte_rate: 20971520

        kafka_topics:
          - name: quickstart.events
            partitions: 12
            replication_factor: 3
            config:
              min.insync.replicas: 2
              cleanup.policy: delete
              retention.ms: 604800000
```

`vault_kafka_quickstart_password` 必须由现有的 Ansible Vault、KMS 或其他秘密注入机制提供，至少 12 个字符。不要把真实密码直接提交到 Git、日志或工单。

这个配置的关键语义：

- 三个节点全部省略 `kafka_role`，因此一致使用 `combined`；
- 新集群直接 Bootstrap 为 dynamic KRaft；
- `scram` 同时启用节点 TLS、Controller mTLS、SCRAM-SHA-512、ACL 和默认拒绝；
- 三 Broker 初始复制策略自动派生为 RF=3、minISR=2；
- `quickstart.events` 显式创建 12 个 Partition、3 副本；
- `quickstart-app` 可读写 `quickstart.*` Topic、读取 `quickstart.*` Group，并可使用幂等 Producer；
- 最多两个 Broker 运行 `kafka_exporter`，三个 Kafka JVM 都运行 JMX Exporter。

如果三个 Broker 确实位于不同故障域，可以在**全部**节点上分别增加 `kafka_rack: az-a/az-b/az-c`。不要用虚构 Rack 标签制造不存在的容灾保证，详细规则见 [集群配置：Rack](/docs/pilot/kafka/config#存储heap-与-rack)。


### 2. 纳管并部署

如果节点尚未纳管：

```bash
./node.yml --check -l kf-main
./node.yml -l kf-main
```

部署 Kafka 时必须选择全部三个成员：

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

不能只 `-l 10.10.10.11`，也不能一次选择 `kf-dev,kf-main`。角色会拒绝缺失、部分或跨集群 Limit。


### 3. 验证三节点健康

从管理节点检查三个 Kafka 服务：

```bash
ansible kf-main -b -m command -a 'systemctl is-active kafka'
```

在任一 Broker 上执行完整健康检查：

```bash
sudo -u kafka /usr/local/bin/pigsty-kafka-health cluster \
  --bootstrap-server 10.10.10.11:9092 \
  --command-config /etc/kafka/admin.properties
```

查询 quorum 和 Topic：

```bash
/opt/kafka/bin/kafka-metadata-quorum.sh \
  --bootstrap-server 10.10.10.11:9092 \
  --command-config /etc/kafka/admin.properties \
  describe --status

/opt/kafka/bin/kafka-topics.sh \
  --bootstrap-server 10.10.10.11:9092 \
  --command-config /etc/kafka/admin.properties \
  --describe --topic quickstart.events
```

上线前应看到：一个 Active Controller、三个 Current Voters、三个可用 Broker；所有 `quickstart.events` Partition 均有三副本、ISR=3，没有 Offline、Under Replicated 或 Under Min ISR Partition。


--------

## 三、接入应用客户端

### 1. 分发 CA 公钥证书

将管理节点上的公共 CA 证书安全复制到应用主机：

```text
files/pki/ca/ca.crt  ->  /etc/kafka-client/pigsty-ca.crt
```

`ca.crt` 是可以分发的公钥证书。**绝不要复制、暴露或分发 `files/pki/ca/ca.key`。** 应用主机上的 CA 文件建议由 root 管理并设为只读。


### 2. 创建客户端配置

在应用主机创建 `/etc/kafka-client/client.properties`：

```properties
bootstrap.servers=10.10.10.11:9092,10.10.10.12:9092,10.10.10.13:9092

security.protocol=SASL_SSL
sasl.mechanism=SCRAM-SHA-512
sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username="quickstart-app" password="<secret-from-vault>";

ssl.truststore.type=PEM
ssl.truststore.location=/etc/kafka-client/pigsty-ca.crt
ssl.endpoint.identification.algorithm=https
```

Kafka Java 客户端支持 `SASL_SSL` + SCRAM，并支持 PEM Truststore。实际应用应在运行时从 Secret Manager 注入密码，而不是把包含密码的文件提交到仓库。完整字段见 Kafka 4.3 [SASL/SCRAM](https://kafka.apache.org/43/security/authentication-using-sasl/) 与 [Producer 配置](https://kafka.apache.org/43/generated/producer_config.html)。


### 3. 为什么应用应直连多个 Broker

Kafka 客户端本身就是具备集群感知能力的智能客户端。`bootstrap.servers` 只用于取得初始元数据；连接成功后，客户端会根据元数据直接连接各 Partition 的 Leader Broker，并在 Leader 变化后刷新路由。因此生产环境的常规做法是：

- 在 `bootstrap.servers` 中配置至少两个、通常三个位于不同故障域的 Broker 地址；
- 放通应用到**所有 Broker** 的 `9092`，并保证 Broker 宣告的 `inventory_hostname` 可解析、可路由；
- 让 Producer/Consumer 使用 Kafka 客户端自身的重试、元数据刷新、幂等与 Consumer Group 协议；
- 不把 HAProxy、Keepalived VIP、四层 LB 或七层反向代理放在 Kafka 数据面前方。

单个 VIP/LB 不能替代 Kafka 元数据中的 Broker 地址，也不能把一个连接透明转发到正确的 Partition Leader；它还会增加长连接状态、故障定位和容量规划复杂度。若平台必须提供统一的发现入口，可以使用 DNS 名称或 TCP LB 作为**仅用于 bootstrap 的入口**，但 Broker 的 `advertised.listeners` 仍必须返回客户端可直达的每个 Broker 地址，应用也不能只获准访问 LB。

跨 NAT、公网、Kubernetes 或多网络场景通常需要为每个 Broker 设计独立的外部可达地址/端口和额外 Listener。当前模块固定使用清单地址作为 `advertised.listeners`，不支持这类任意 Listener 映射；不要用一个 HAProxy VIP 掩盖地址模型不成立的问题。


### 4. 用应用身份验证读写

在安装了 Kafka 4.3 CLI 的应用主机上执行：

```bash
kafka-console-producer.sh \
  --bootstrap-server 10.10.10.11:9092,10.10.10.12:9092,10.10.10.13:9092 \
  --command-config /etc/kafka-client/client.properties \
  --topic quickstart.events
```

消费时使用 ACL 允许的 Group 前缀：

```bash
kafka-console-consumer.sh \
  --bootstrap-server 10.10.10.11:9092,10.10.10.12:9092,10.10.10.13:9092 \
  --command-config /etc/kafka-client/client.properties \
  --topic quickstart.events \
  --group quickstart.demo \
  --from-beginning
```

生产应用还应显式评审客户端语义：

| 客户端配置 | 建议起点 | 说明 |
|:---|:---|:---|
| `acks` | `all` | 与 RF=3/minISR=2 配合，避免只等待 Leader |
| `enable.idempotence` | `true` | 降低重试导致重复写入的风险，需要 `IdempotentWrite` ACL |
| `group.id` | 独立稳定名称 | 不同业务/消费语义不要复用 Group |
| Offset 提交 | 按业务选择 | 自动提交简单；手动提交更容易绑定业务处理结果 |
| `client.id` | 可识别实例名 | 便于日志、Quota 与客户端诊断 |
{.full-width}

客户端 `acks`、重试、幂等、批量、压缩和 Offset 策略属于应用配置，不应写入 Broker 的 `kafka_parameters`。


--------

## 四、修改核心参数

Kafka 的持久意图始终修改 `pigsty.yml`，不要直接编辑 `/etc/kafka/server.properties`。常见意图对应关系：

| 目标 | 参数 | 行为 |
|:---|:---|:---|
| 调整 JVM Heap | `kafka_heap_opts` | 静态变化，健康集群进入严格单节点滚动 |
| 调整线程、保留、Segment | `kafka_parameters` | 非角色自有 Broker 参数；静态变化需要滚动 |
| 调整 Topic Partition/保留 | `kafka_topics` | 在线资源收敛；Partition 只增不减 |
| 调整应用密码/ACL/Quota | `kafka_users` | 在线资源收敛；密码由秘密系统提供 |
| 声明故障域 | `kafka_rack` | 所有 Broker-capable 节点全有或全无；变化会滚动但不搬迁数据 |
| 选择安全档位 | `kafka_security` | 只能在新集群 Bootstrap 时决定，不能普通重跑在线切换 |
{.full-width}


### 示例：调整 Heap 与 Broker 默认参数

假设压测后决定将 Heap 调整为 6G、提高线程数，并把新 Topic 的默认保留时间改成 72 小时：

```yaml
kf-main:
  vars:
    kafka_cluster: kf-main
    kafka_heap_opts: '-Xms6G -Xmx6G'
    kafka_parameters:
      num.partitions: 12
      num.network.threads: 8
      num.io.threads: 24
      log.retention.hours: 72
      log.segment.bytes: 1073741824
```

不要照抄 6G/8/24；这些值必须由 CPU、内存、连接数、消息大小、Partition 数、磁盘和 Page Cache 压测决定。


### 示例：增加 Partition 并缩短 Topic 保留

把 `quickstart.events` 从 12 个 Partition 增加到 24，并把保留时间改成三天：

```yaml
kafka_topics:
  - name: quickstart.events
    partitions: 24
    replication_factor: 3
    config:
      min.insync.replicas: 2
      cleanup.policy: delete
      retention.ms: 259200000
```

Partition 不能减少。`replication_factor` 与现场不一致时，角色会拒绝普通收敛并要求显式 Partition Reassignment；不会自动搬迁既有副本。


### 应用变更

无论修改静态参数还是动态资源，都运行完整状态机：

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

不要只运行 `-t kafka_config`。角色会自动判断：静态变化执行严格 `serial: 1` 滚动；只修改 Topic/User 等动态资源时不重启 Kafka。

以下键属于角色自身，不能放入 `kafka_parameters`：

```yaml
kafka_parameters:
  min.insync.replicas: 2          # 错误：角色拥有
  default.replication.factor: 3   # 错误：角色拥有
  listeners: ...                  # 错误：角色拥有
```

全部 16 项公开参数、默认值和保留键见 [参数参考](/docs/pilot/kafka/param)。


--------

## 五、上线前关键检查

### 拓扑与数据安全

- 生产至少使用三个 Broker，并使用奇数 Controller；关键/大型集群考虑 3 Controller + N Broker 分离拓扑；
- Topic RF、minISR 与生产者 `acks` 形成一致的故障模型；
- `kafka_rack` 只表达真实故障域，且副本放置已经核验；
- 数据盘容量、吞吐、延迟、保留时间、峰值写入和恢复时间已经压测；
- 新 Broker 加入后有显式 Reassignment 计划，现有 Topic RF 不会自动提高；
- 已明确 Kafka 数据备份/重建、Broker 替换、Controller 成员和灾难恢复流程。


### 安全与网络

- 新生产集群从 Bootstrap 起就使用 `kafka_security: scram`；
- 应用密码由 Vault/KMS/Secret Manager 注入，未进入 Git 或日志；
- 只向客户端分发 CA 公钥证书，不分发 CA 私钥；
- 客户端可以解析并直达所有 Broker 的 `inventory_hostname`；
- `9092/9095` 只向必要主体开放，`9308/9404` 只向监控网络开放；
- 已建立应用 Principal、Topic/Group/Cluster ACL 与 Quota 审核清单；
- 已安排内部凭据和证书的 [受保护轮换](/docs/pilot/kafka/playbook#受保护轮换)。


### 运行与监控

- `/usr/local/bin/pigsty-kafka-health cluster` 返回健康；
- dynamic quorum 只有一个 Leader，所有预期 Controller 都在 Current Voters；
- 没有 Offline、Under Replicated 或 Under Min ISR Partition；
- 使用真实应用网络、真实 Principal 完成生产与消费验证；
- [Kafka Overview](https://demo.pigsty.cc/ui/d/kafka-overview)、[Kafka Instance](https://demo.pigsty.cc/ui/d/kafka-instance) 与 [Kafka Node](https://demo.pigsty.cc/ui/d/kafka-node) 数据正常；
- 告警路由、日志检索、容量阈值、值班责任和回退条件已经确认；
- 升级、Feature Level、Topic 删除、用户删除与危险清理均有独立审批流程。

详细告警与 PromQL 见 [监控告警](/docs/pilot/kafka/monitor)，指标语义见 [指标定义](/docs/pilot/kafka/metric)。


--------

## 文档索引与下一步

建议按以下路径继续阅读：

| 您接下来要做什么 | 对应文档 |
|:---|:---|
| 规划 combined 或 Controller/Broker 分离拓扑、网络、Rack、存储与安全 | [集群配置](/docs/pilot/kafka/config) |
| 查找 16 项公开参数、默认值、Schema 和保留键 | [参数参考](/docs/pilot/kafka/param) |
| 理解 `kafka.yml` 五阶段、严格滚动、轮换与危险清理 | [预置剧本](/docs/pilot/kafka/playbook) |
| 查看 Quorum、Topic、用户、消息、Consumer Group 与扩容操作 | [日常管理](/docs/pilot/kafka/admin) |
| 使用 Dashboard、告警、PromQL 和 VictoriaLogs | [监控告警](/docs/pilot/kafka/monitor) |
| 理解每一项 JMX/Exporter/Recording Rule 指标 | [指标定义](/docs/pilot/kafka/metric) |
| 排查身份冲突、连接、SCRAM、Exporter、Lag 与扩缩容问题 | [常见问题](/docs/pilot/kafka/faq) |
| 回到模块能力、默认端口与边界总览 | [Kafka 模块首页](/docs/pilot/kafka) |
{.full-width}

一条推荐阅读链路是：**快速上手 → 集群配置 → 参数参考 → 预置剧本 → 日常管理 → 监控告警 → 常见问题**。
