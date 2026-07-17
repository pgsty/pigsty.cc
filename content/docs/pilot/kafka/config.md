---
title: 集群配置
weight: 5042
description: 规划 Kafka dynamic KRaft 拓扑、身份、网络、存储、安全与声明式资源。
icon: fa-solid fa-code
module: [KAFKA]
categories: [参考]
---


KAFKA 模块使用 15 项持久公开参数表达集群意图，其余拓扑、监听器、存储子目录、复制安全、授权与 Exporter 放置由角色统一推导。首次部署建议先完成 [快速上手](/docs/pilot/kafka/start)；完整字段见 [参数参考](/docs/pilot/kafka/param)。

{{% alert title="先规划，后格式化" color="warning" %}}
`kafka_seq` 会写入 KRaft `node.id`；新集群的随机 Cluster ID、初始 Controller Identity、安全模式与初始复制策略会写入 Bootstrap Manifest。存储格式化后，不要随意修改身份、安全模式或 Controller 集合。角色会验证现场与 Manifest 并在冲突时失败关闭，不会自动覆盖或重新格式化数据。
{{% /alert %}}


--------

## 部署前检查

填写清单前至少确认：

- 目标主机已由 [`NODE`](/docs/node) 纳管，软件仓库可用，`inventory_hostname` 可被所有 Kafka 成员与客户端直接路由
- 一次操作将用 `-l` 精确选择同一 `kafka_cluster` 的全部成员，而不是单节点、部分成员或多个集群
- `kafka_seq` 在集群内唯一，Controller 为奇数，Broker 数量、故障域与容量目标匹配
- `9092`、`9093`、`9308`、`9404` 互不冲突，Infra 节点可以访问两个指标端口
- `kafka_data` 对应专用文件系统，并已按保留时间、写入峰值、复制流量、恢复时间与增长余量规划
- 生产使用 `kafka_security: scram`；节点与管理端时间同步，Pigsty CA 可用，应用密码来自 Vault 等秘密来源
- Topic 的 Partition、副本、`min.insync.replicas`、保留策略，以及客户端 `acks`、重试与消费恢复策略已经评审
- 扩缩容、Partition Reassignment、升级、备份、恢复与 Controller 成员变更有独立运行手册


--------

## 角色与拓扑

[`kafka_role`](/docs/pilot/kafka/param#kafka_role) 只接受三个值：

| 角色 | Kafka `process.roles` | Broker 端口 | Controller 端口 | JMX | kafka_exporter |
|:---|:---|:---:|:---:|:---:|:---:|
| `combined` | `broker,controller` | ✓ | ✓ | ✓ | 可被选择 |
| `broker` | `broker` | ✓ | － | ✓ | 可被选择 |
| `controller` | `controller` | － | ✓ | ✓ | － |
{.full-width}

角色声明必须满足二选一规则：

- 集群所有成员都省略 `kafka_role`，一致使用默认 `combined`；
- 或者所有成员都显式声明 `combined`、`broker`、`controller` 之一。

不允许只在部分节点声明角色。集群必须至少包含一个 Controller-capable 节点和一个 Broker-capable 节点；偶数 Controller 会给出警告，生产通常使用 3 个 Controller。


--------

## 单节点开发集群

单节点同时承担 Broker 与 Controller，无法容忍节点故障，只适合开发、测试与功能验证：

```yaml
kf-dev:
  hosts:
    10.10.10.10: { kafka_seq: 1 }
  vars:
    kafka_cluster: kf-dev
```

角色会从初始 Broker 数量推导 RF=1、minISR=1。不要把单节点拓扑或默认 `plaintext` 安全模式直接用于生产。


--------

## 三节点复合部署

三个节点都承担 Broker 与 Controller，是紧凑的生产起点。省略全部角色字段即可使用默认 `combined`：

```yaml
kf-main:
  hosts:
    10.10.10.11: { kafka_seq: 1 }
    10.10.10.12: { kafka_seq: 2 }
    10.10.10.13: { kafka_seq: 3 }
  vars:
    kafka_cluster: kf-main
    kafka_heap_opts: '-Xms4G -Xmx4G'
    kafka_security: scram
    kafka_parameters:
      num.partitions: 3
      num.network.threads: 6
      num.io.threads: 16
    kafka_topics:
      - name: order.events
        partitions: 12
        replication_factor: 3
        config:
          min.insync.replicas: 2
          cleanup.policy: delete
```

初始三个 Broker 会自动得到 RF=3、minISR=2 的角色自有复制策略，无需也不允许在 `kafka_parameters` 中覆盖内部 Topic RF、`default.replication.factor` 或 `min.insync.replicas`。示例中的 4G Heap 只是写法示意；生产应通过压测平衡 JVM Heap、操作系统 Page Cache 与同机其他进程。


--------

## Controller 与 Broker 分离

关键或较大集群可以把控制面与数据面分离。因为存在显式角色，所有成员都必须声明角色：

```yaml
kf-main:
  hosts:
    10.10.10.11: { kafka_seq: 1, kafka_role: controller }
    10.10.10.12: { kafka_seq: 2, kafka_role: controller }
    10.10.10.13: { kafka_seq: 3, kafka_role: controller }
    10.10.10.21: { kafka_seq: 4, kafka_role: broker }
    10.10.10.22: { kafka_seq: 5, kafka_role: broker }
    10.10.10.23: { kafka_seq: 6, kafka_role: broker }
  vars:
    kafka_cluster: kf-main
    kafka_security: scram
```

纯 Controller 不监听 `9092`，也不运行协议 Exporter；它仍通过 JMX 暴露 KRaft 与 JVM 状态。最多两个 `kafka_exporter` 会放在 `kafka_seq` 最小的 Broker-capable 节点上。


--------

## Dynamic KRaft 与 Bootstrap Manifest

新集群直接使用 dynamic quorum：所有节点渲染 `controller.quorum.bootstrap.servers`，不会生成静态 `controller.quorum.voters`。首次格式化时：

- Cluster ID 随机生成，不由集群名哈希；
- 初始 Controller 的 Directory ID 随机生成并冻结；
- 每个节点显式使用 `--initial-controllers` 或 `--no-initial-controllers` 格式化模式；
- 启动后角色等待 dynamic quorum 选出 Leader，并校验每个初始 Controller 的 Directory ID 都在现场 quorum 中。

Bootstrap-only 事实保存在管理节点缓存：

```text
files/kafka/<kafka_cluster>/manifest.yml
```

同时每个集群成员都保留一份权威副本 `/etc/kafka/manifest.yml`（`scram` 集群还有 `/etc/kafka/secrets.yml`）。Manifest 只记录集群身份、初始 Controller Identity、安全模式和初始 RF/minISR。活集群始终是运行事实权威：

- Manifest 与现场身份或安全模式冲突时，普通剧本失败关闭；
- 旧 Manifest 存在但全部数据盘为空时拒绝复活旧集群；
- 管理节点缓存丢失时，可以从任一成员的节点副本自动恢复，不会重新格式化；
- 管理节点与所有成员都找不到 Manifest 而存储已格式化时，失败关闭并提示先恢复 Manifest；
- 已格式化的 `scram` 集群在管理节点与所有成员都没有 Secret 材料时同样失败关闭。

增加、替换或删除 Controller 不是普通清单操作。新 Controller 必须针对现有集群显式格式化、启动并追平，然后执行 Kafka `add-controller`；删除则需要对应的 `remove-controller` 流程。角色会拒绝把未登记的新 Controller 仅凭 inventory 自动加入 Voter 集合。


--------

## 身份参数

| 身份 | 来源 | 示例 | 约束 |
|:---|:---|:---|:---|
| 集群名 | `kafka_cluster` | `kf-main` | 字母或数字开头，只含字母、数字、下划线和连字符 |
| 节点号 | `kafka_seq` | `1` | 非负整数，同一集群内唯一 |
| 实例名 | 自动生成 | `kf-main-1` | `${kafka_cluster}-${kafka_seq}` |
| 节点角色 | `kafka_role` | `combined` | 三种原生角色之一 |
| KRaft Cluster ID | Bootstrap 随机生成 | 22 字符 Kafka UUID | `kafka_cluster_id` 仅作接管/恢复断言 |
{.full-width}

已格式化节点会从 `${kafka_data}/metadata/meta.properties` 读取 `cluster.id` 与 `node.id`，并与 Manifest 及清单交叉校验；初始 Controller 的 Directory ID 则在启动后与活 quorum 比对。身份不匹配是保护性失败，不应通过删除 `meta.properties` 或清空数据绕过。


--------

## 网络与监听器

角色只公开端口，不公开 bind、advertised address 或 listener map：

| 参数 | 默认值 | 用途 |
|:---|:---|:---|
| [`kafka_port`](/docs/pilot/kafka/param#kafka_port) | `9092` | Broker、客户端与 Broker 间通信 |
| [`kafka_controller_port`](/docs/pilot/kafka/param#kafka_controller_port) | `9093` | KRaft Controller 仲裁 |
| [`kafka_exporter_port`](/docs/pilot/kafka/param#kafka_exporter_port) | `9308` | 协议 Exporter HTTP 指标 |
| [`kafka_jmx_exporter_port`](/docs/pilot/kafka/param#kafka_jmx_exporter_port) | `9404` | JMX Exporter HTTP 指标 |
{.full-width}

固定监听器约定如下：

- Broker listener 绑定 `0.0.0.0`，Controller listener 绑定 `inventory_hostname`；
- Broker 的 `advertised.listeners` 使用 `inventory_hostname`；
- Controller bootstrap 地址也使用 `inventory_hostname`；
- `plaintext`：BROKER 与 CONTROLLER 都使用 PLAINTEXT；
- `scram`：BROKER 使用 SASL_SSL + SCRAM-SHA-512，CONTROLLER 使用双向 TLS。

因此客户端必须能够解析并直达每一个 Broker 的 `inventory_hostname`。当前 v1 不支持 NAT、公网映射、同一 Broker 多客户端网络或任意 raw listener 覆盖；这些场景不能通过 `kafka_parameters` 拼装绕过。

Kafka 的标准接入模型是智能客户端直连 Broker：`bootstrap.servers` 配置多个种子地址，客户端获取集群元数据后直接连接 Partition Leader。HAProxy、Keepalived VIP、云 LB 不应作为常规 Kafka 数据面入口，因为它们不了解 Kafka 元数据和 Partition Leader，且无法免除客户端访问所有 `advertised.listeners` 地址的要求。DNS 或 TCP LB 最多作为可选的 bootstrap 发现入口；即使如此，应用网络仍必须直达全部 Broker。详见[快速上手：接入应用客户端](/docs/pilot/kafka/start#三接入应用客户端)。

最小网络流向：

| 来源 | 目标 | 端口 | 用途 |
|:---|:---|:---:|:---|
| Kafka 客户端、其他 Broker | 所有 Broker | `9092` | Produce、Fetch、元数据与 Broker 间通信 |
| 所有 Kafka 成员 | 所有 Controller | `9093` | KRaft 元数据仲裁 |
| Infra/VictoriaMetrics | 所有 Kafka 节点 | `9404` | JVM/Kafka 指标 |
| Infra/VictoriaMetrics | 被选择的 Exporter 节点 | `9308` | 集群/Topic/Consumer 指标 |
{.full-width}

指标端口为 HTTP，即使 Kafka 使用 `scram`，也应通过防火墙限制在监控网络内。


--------

## 存储、Heap 与 Rack

用户只设置根目录：

```yaml
kafka_data: /data/kafka
```

角色固定派生 Topic 数据目录 `${kafka_data}/data` 与 KRaft 元数据目录 `${kafka_data}/metadata`。`kafka_data` 必须是专用绝对路径，不能是 `/`、`/data`、`/var`、`/etc`、`/opt`、`/usr`、`/home`、`/root` 或 `/pg`。

生产规划至少考虑保留时间、消息峰值、复制流量、Partition/Segment 数、磁盘延迟与吞吐、文件描述符、恢复时间、JVM Heap 与 Page Cache。当前角色只生成一个 `log.dirs`；多盘 JBOD、磁盘替换和自动数据迁移需要独立运行手册。

跨故障域部署可以在所有 Broker-capable 节点上一致声明 [`kafka_rack`](/docs/pilot/kafka/param#kafka_rack)：

```yaml
10.10.10.21: { kafka_seq: 4, kafka_role: broker, kafka_rack: az-a }
10.10.10.22: { kafka_seq: 5, kafka_role: broker, kafka_rack: az-b }
10.10.10.23: { kafka_seq: 6, kafka_role: broker, kafka_rack: az-c }
```

Broker-capable 节点必须全部设置或全部省略 Rack。修改 Rack 会触发安全滚动，但不会自动迁移既有副本。


--------

## 复制策略

首次 Bootstrap 根据初始 Broker 数量派生：

```text
replication_factor = min(3, broker_count)
min_insync_replicas = max(1, replication_factor - 1)
```

初始的未来 Topic 默认 RF、内部 Topic RF 与集群 minISR 都会写入 Manifest 并冻结。扩容后：

- `default.replication.factor` 保持初建值；Kafka 4.3 不允许通过动态 Broker 配置在线修改它；
- 已有内部/业务 Topic 的 RF 不会自动提高；
- 角色不会把“Broker 已加入”报告成“数据已均衡”；
- RF 变化必须使用经过评审的 `kafka-reassign-partitions.sh` 计划；提升静态默认值还需要
  Controller 高可用或明确维护窗口，并通过完整集群安全滚动生效。

生产者 `acks`、幂等、重试、批量和压缩属于客户端策略，不是 Kafka Broker 角色参数。


--------

## `kafka_parameters`

[`kafka_parameters`](/docs/pilot/kafka/param#kafka_parameters) 是唯一的 Broker 参数逃生舱，默认 `{}`，只渲染到 Broker-capable 节点。它适合 `num.partitions`、线程数、Buffer、保留与 Segment 等非角色自有键。

以下模式由角色拥有，禁止覆盖：

```text
process.roles
node.id
controller.quorum.*
listeners
advertised.listeners
listener.security.protocol.map
inter.broker.listener.name
controller.listener.names
log.dirs
metadata.log.dir
min.insync.replicas
default.replication.factor
offsets.topic.replication.factor
transaction.state.log.replication.factor
transaction.state.log.min.isr
share.coordinator.state.topic.replication.factor
share.coordinator.state.topic.min.isr
broker.rack
authorizer.class.name
super.users
allow.everyone.if.no.acl.found
sasl.*
ssl.*
listener.*
```

出现任一保留键时，身份预检会在写文件前直接失败。


--------

## 安全与声明式资源

`kafka_security: scram` 是一个完整生产档位，而不是一组可任意组合的开关。它自动启用：

- Pigsty CA 签发的每节点证书；
- Controller listener 双向 TLS；
- Broker/client 与 Broker 间 SASL_SSL + SCRAM-SHA-512；
- `StandardAuthorizer`、默认拒绝，以及角色自有管理/监控身份；
- 在协议 Exporter 启动前收敛其最小监控 ACL。

应用资源由两个领域对象声明：

```yaml
kafka_security: scram
kafka_users:
  - name: order-service
    password: "{{ vault_kafka_order_password }}"
    acls:
      - resource: topic
        name: order.
        pattern: prefixed
        operations: [Read, Write, Describe]
      - resource: group
        name: order.
        pattern: prefixed
        operations: [Read]
    quota:
      producer_byte_rate: 10485760
      consumer_byte_rate: 20971520
kafka_topics:
  - name: order.events
    partitions: 12
    replication_factor: 3
    config:
      min.insync.replicas: 2
      cleanup.policy: delete
```

资源收敛语义：Topic 创建幂等、Partition 只增加、只更新显式声明的配置；RF 变化会拒绝并提示 Reassignment。声明用户的密码、ACL 与给出的 Quota 字段会幂等收敛。移除 Topic/User 条目不会作为隐式删除流程。

安全模式在 Bootstrap 后不能通过普通剧本切换。内部凭据与证书可以使用 [受保护轮换](/docs/pilot/kafka/playbook#受保护轮换)，但 `plaintext` 到 `scram` 的在线迁移仍需未来的显式状态机。


--------

## 软件包与文件布局

角色通过平台映射安装 `java-runtime` 与 `kafka-stack`。2026-07-16 验证的载荷为 Kafka 4.3.1、`kafka_exporter` 1.9.0、JMX Exporter 1.6.0；实际版本仍以目标平台仓库与已安装包为准。

| 路径 | 用途 |
|:---|:---|
| `/opt/kafka/` | Kafka 程序与 CLI |
| `/etc/kafka/server.properties` | 角色生成的服务配置 |
| `/etc/kafka/admin.properties` | 角色生成的 Broker 管理通道；CLI 应始终使用 |
| `/etc/kafka/controller.properties` | 角色生成的 Controller 管理通道 |
| `/etc/kafka/log4j2.yaml` | Journald 日志配置 |
| `/etc/kafka/jmx_exporter.yml` | 有界 JMX 指标规则 |
| `/etc/kafka/manifest.yml` | 节点上的 Bootstrap Manifest 权威副本 |
| `/etc/kafka/secrets.yml` | `scram` 节点上的内部 Secret 副本 |
| `/etc/kafka/pki/` | `scram` 节点证书、私钥与 Keystore/Truststore |
| `${kafka_data}/data/` | Topic 日志数据 |
| `${kafka_data}/metadata/` | KRaft 元数据与 `meta.properties` |
| `files/kafka/<cluster>/` | 管理节点上的 Manifest/Secret/PKI 缓存 |
{.full-width}

这些文件由角色管理。持久意图应写入 `pigsty.yml`，不要在节点上直接编辑生成文件，也不要把密码、私钥或角色自有 Secret 内容复制到清单、日志或工单。
