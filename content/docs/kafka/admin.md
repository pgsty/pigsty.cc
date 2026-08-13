---
title: 日常管理
weight: 4904
description: Kafka 集群的状态检查、Topic 与用户管理、配置变更、扩容缩容、故障节点替换与安全轮换。
icon: fa-solid fa-wrench
module: [KAFKA]
categories: [任务]
aliases: [/docs/pilot/kafka/admin]
---


KAFKA 模块把 Kafka 安装在 `/opt/kafka`，使用 Systemd 管理服务，并把持久意图保存在 `pigsty.yml`。节点上的生成文件不应手工修改。

以下 Kafka CLI 示例都使用角色生成的 `/etc/kafka/admin.properties`。即使当前是 `plaintext` 也建议始终保留 `--command-config`：切换到 `scram` 管理通道时命令结构不变。将 `<broker>:9092` 替换为可达的 `inventory_hostname` 与端口。

{{% alert title="Console 工具的 --command-config 需要 Kafka 4.2+ CLI" color="info" %}}
[KIP-1147](https://cwiki.apache.org/confluence/display/KAFKA/KIP-1147:+Improve+consistency+of+command-line+arguments) 从 Kafka 4.2 起把所有 CLI 的配置文件参数统一为 `--command-config`、键值参数统一为 `--command-property`。节点上 `/opt/kafka/bin` 的 CLI 由 Pigsty 仓库提供（当前载荷 4.3.x），可直接使用；若从 4.1 或更早的外部 CLI 执行，Console Producer/Consumer 仍须使用旧名 `--producer.config` / `--consumer.config`。管理类工具（`kafka-topics.sh`、`kafka-configs.sh`、`kafka-acls.sh`、`kafka-consumer-groups.sh`、`kafka-metadata-quorum.sh` 等）一直使用 `--command-config`，不受影响。
{{% /alert %}}


--------

## 速查手册

| 操作                                    | 命令                                | 说明                               |
|:--------------------------------------|:----------------------------------|:---------------------------------|
| [**创建集群**](/docs/kafka/start)         | `./kafka.yml -l <cls>`            | 创建或收敛 Kafka 集群，裸跑处理全部集群          |
| [**扩容集群**](#扩容集群)                     | `./kafka.yml -l <cls>`            | 声明新成员后收敛：Broker 准入，Controller 加入 |
| [**缩容集群**](#缩容集群)                     | `./kafka-rm.yml -l <ip>`          | 退役成员：摘除 Voter 条目与 Broker 注册      |
| [**销毁集群**](/docs/kafka/playbook#集群下线) | `./kafka-rm.yml -l <cls>`         | 下线整个集群，默认删除数据                    |
| [**替换故障节点**](#替换故障节点)                 | 退役 → 纳管 → 重入                      | 三条命令补换死节点，自动继承副本分配               |
| [**配置集群**](#配置集群)                     | `./kafka.yml -l <cls>`            | 修改清单后在门禁保护下滚动生效                  |
| [**管理 Topic**](#管理-topic)             | `./kafka.yml -l <cls>`            | 声明式创建 Topic、扩分区、改配置              |
| [**管理用户**](#管理用户与权限)                  | `./kafka.yml -l <cls>`            | 声明式收敛用户、ACL 与 Quota              |
| [**轮换密钥证书**](#轮换密钥与证书)                | `./kafka.yml -e kafka_rotate_...` | 受保护的内部凭据 / 证书轮换                  |
{.full-width}

集群定义与参数详见 [**集群配置**](/docs/kafka/config)，剧本语义详见 [**预置剧本**](/docs/kafka/playbook)，监控排障详见 [**监控告警**](/docs/kafka/monitor)。


--------

## 状态检查

在任意 Kafka 节点检查服务与最近日志：

```bash
systemctl status kafka
systemctl is-enabled kafka
journalctl -u kafka --since '-30 min' --no-pager
```

协议 Exporter 只在 `kafka_seq` 最小的至多两个 Broker-capable 节点运行。被选择的节点再检查：

```bash
systemctl status kafka_exporter
journalctl -u kafka_exporter --since '-30 min' --no-pager
```

检查监听器与指标端点：

```bash
ss -lntp | grep -E ':9092|:9093|:9308|:9404'
curl -fsS http://<kafka-ip>:9404/metrics | grep -E '^(jmx_scrape_error|kafka_server_raft_state|kafka_server_broker_messages_in_total)'
curl -fsS http://<exporter-ip>:9308/metrics | grep -E '^(kafka_brokers|kafka_topic_partitions)'
```

`kafka_up` 与 `kafka_exporter_up` 是 VictoriaMetrics 侧的记录指标，不一定出现在原始端点。JMX 端点应包含 `jmx_scrape_error 0.0`、JVM 指标和与节点角色匹配的 `kafka_` 指标。


--------

## 健康检查

角色的生命周期门禁不依赖 JMX，而是通过同一管理通道检查动态 Quorum、不可用 Partition、副本不足与 Under Min ISR：

```bash
sudo -u kafka /usr/local/bin/pigsty-kafka-health cluster \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties
```

返回 JSON 中 `healthy: true` 才表示该门禁通过。它适合只读诊断，但不能替代业务端到端验证。

该脚本还内置解析回归自检（`pigsty-kafka-health selftest`），每次剧本运行都会在安装后自动执行；若自检失败说明健康谓词本身不可信，应停止变更并排查。


--------

## KRaft 仲裁状态

从任一可用 Broker 查询动态 Quorum：

```bash
/opt/kafka/bin/kafka-metadata-quorum.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  describe --status
```

重点检查：

- `LeaderId` 存在且对应预期 Controller；
- `CurrentVoters` 与预期成员一致（加入中的新节点会先出现在 `CurrentObservers`）；
- `MaxFollowerLag` 与 `MaxFollowerLagTimeMs` 没有持续增长；
- Dashboard 中恰好有一个 Active Controller。

如需确认动态 Quorum（KIP-853）特性级别，可用 `/opt/kafka/bin/kafka-features.sh ... describe` 查看 `kraft.version`。

查看 Controller 复制状态：

```bash
/opt/kafka/bin/kafka-metadata-quorum.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  describe --replication
```

如果没有 Leader、成员长期落后或 Voter 集合与预期不一致，应先停止其他变更，保留日志、Manifest 与 `meta.properties` 证据再分析。死掉的 Voter 用 [缩容](#缩容集群) 或 [替换故障节点](#替换故障节点) 流程摘除；不要手工改写 quorum 状态。


--------

## 管理 Topic

生产 Topic 应优先在 `pigsty.yml` 的 [`kafka_topics`](/docs/kafka/param#kafka_topics) 中声明：

```yaml
kafka_topics:
  - name: orders
    partitions: 12
    replication_factor: 3
    config:
      min.insync.replicas: 2
      retention.ms: 604800000
```

修改声明后运行剧本收敛：

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

角色会幂等创建 Topic、只增加 Partition，并只修改声明的配置键。RF 变化会失败并要求显式 Partition Reassignment；从清单中移除条目不会删除 Topic。

只读查看 Topic：

```bash
/opt/kafka/bin/kafka-topics.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --list

/opt/kafka/bin/kafka-topics.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --describe --topic orders
```

临时或外部管理的 Topic 可以使用 Kafka CLI 创建，但不会自动写回 `pigsty.yml`。不要让声明式与手工管理同时拥有同一个 Topic。Topic 删除是业务数据删除动作，必须走独立审批、精确名称确认和恢复方案，本文不提供通用删除命令。


--------

## 管理用户与权限

`kafka_security: scram` 时，应用身份应通过 [`kafka_users`](/docs/kafka/param#kafka_users) 管理：

```yaml
kafka_users:
  - name: order-service
    password: "{{ vault_kafka_order_password }}"
    acls:
      - resource: topic
        name: orders
        operations: [Read, Write, Describe]
      - resource: group
        name: order-worker
        operations: [Read]
    quota:
      producer_byte_rate: 10485760
      consumer_byte_rate: 20971520
```

完整剧本会幂等收敛密码、该用户的 ACL 集合与显式给出的 Quota 字段。密码不要以明文提交到仓库或输出到日志。移除用户条目不会自动删除 Principal/凭据；删除或彻底撤权需要独立受审流程。


--------

## 验证消息读写

使用测试 Topic 做端到端验证。Console Producer/Consumer 使用同一客户端配置文件：

```bash
/opt/kafka/bin/kafka-console-producer.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --topic ops-smoke
```

在另一个终端消费：

```bash
/opt/kafka/bin/kafka-console-consumer.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --topic ops-smoke \
  --from-beginning \
  --group ops-smoke-check
```

生产验收应从真实客户端网络执行，覆盖 DNS/`advertised.listeners`、证书校验、ACL、生产者 ACK、消费提交与端到端延迟，而不只验证 Broker 本机路径。


--------

## 管理 Consumer Group

列出和查看 Consumer Group：

```bash
/opt/kafka/bin/kafka-consumer-groups.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --list

/opt/kafka/bin/kafka-consumer-groups.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --describe --group order-worker
```

Lag 要结合消费速率与业务 SLO 判断：短暂积压可能是批处理行为，持续增长且消费速率低于生产速率才表示无法追平。重置 Offset 可能造成重复消费或跳过消息，必须有独立审批、精确 Group/Topic 确认与回放方案。


--------

## 配置集群

修改 `pigsty.yml` 后以完整集群为目标执行：

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

角色根据现场健康和静态指纹自动选择路径：

- 集群不健康或停止：只启动已停止的 Controller，恢复并追平 Quorum 后再启动 Broker；若同时存在静态变化，仍在线成员随后进入严格滚动；
- 存在待加入的 Controller-capable 节点：逐个以 Observer 追平后 `add-controller` 提升为 Voter；
- 健康集群新增纯 Broker：逐个格式化、启动并确认注册；
- 健康集群存在静态变化：严格逐节点滚动，每节点重启前后执行 Controller 零 Lag/最近追平、Quorum、Offline Partition、Under Min ISR 与 ISR 追平门禁；
- 没有静态变化：不重启 Kafka。

不要用 `-t kafka_config` 绕过完整状态机。动态 Topic/User/ACL/Quota 收敛位于 `kafka_provision` 资源收敛阶段，静态变化是否重启由角色决定。


--------

## 扩容集群

健康集群可以直接在清单中声明新成员：`kafka_role: broker`、`combined` 或 `controller` 都可以。为新节点分配从未使用过的 `kafka_seq`（一台主机同一时间只能属于一个 Kafka 集群），确保节点已被 Pigsty [**纳管**](/docs/node/admin#添加节点)，然后仍以完整集群为目标：

```bash
./node.yml  --check -l 10.10.10.14    # 纳管新节点
./kafka.yml --check -l kf-main        # 先空跑
./kafka.yml -l kf-main                # 逐个准入 / 加入新成员
```

角色按成员类型自动选择路径，每次只处理一个新节点：

- **纯 Broker**：格式化、启动，并验证 Broker 已注册且未 Fenced（`admit`）；
- **Combined / Controller**：以 `--no-initial-controllers` 全新格式化、以 Observer 身份启动并追平元数据，再通过 `add-controller` 提升为 Voter，最后验证其已进入 Voter 集合且集群完整健康（`join`）。

运行结束时的 `quorum-join-hosts` / `broker-admission-hosts` 摘要会列出本次实际处理的节点。两点提醒：

- 新增 Controller-capable 节点会改变所有成员的 `controller.quorum.bootstrap.servers`，因此存量节点会随之执行一轮门禁保护下的严格滚动，属于预期行为；
- 扩出偶数个 Controller 时角色会打印警告：偶数 Quorum 不提升容错能力，请尽量保持奇数。

新 Broker 加入不会迁移已有 Partition。必须另外生成、评审并监控 `kafka-reassign-partitions.sh` 计划，控制磁盘/网络负载并准备回退。"服务已注册"不等于"扩容完成"。

复制策略也不会随 Broker 数自动放大。尤其是 Kafka 4.3 的
`default.replication.factor` 不能动态修改：由 1 Broker 扩到 3 Broker 后，它仍为初建的
RF=1，未来未显式指定 RF 的 Topic 也仍按 RF=1 创建。应先完成既有 Partition
Reassignment，再规划 Controller 高可用或维护窗口，最后让新的静态默认值通过完整集群
安全滚动生效；不能为了改默认值绕过停机门禁。


--------

## 缩容集群

用 `kafka-rm.yml` 选择集群的 **真子集** 即为成员退役（选择整个集群则是 [**集群下线**](/docs/kafka/playbook#集群下线)）。退役会通过一台幸存成员，自动从现场元数据中摘除该节点：

```bash
./kafka-rm.yml -l 10.10.10.13 --check  # 先以完全相同的成员目标预演
./kafka-rm.yml -l 10.10.10.13     # 退役单个成员：摘除 Voter 条目、注销 Broker、清理本机
```

执行内容依次为：注销监控 Target → 停止服务 → `remove-controller` 摘除 KRaft Voter 条目（若该成员是 Voter；多成员退役时严格串行）→ `kafka-cluster.sh unregister` 注销 Broker → 清理本机配置与数据（受 `kafka_rm_data` 控制）。Broker 注销步骤容忍失败，以便重入与处理已失联成员；只有在核对现场 Quorum、Broker 注册、副本健康以及目标本机状态后，才从 `pigsty.yml` 删除该成员条目。

退役前请自行确认：剩余 Controller 仍构成多数派、保持奇数个 Controller、剩余 Broker 数不低于现有 Topic 的最大 RF。如果被退役 Broker 上仍有 Partition 副本，角色会打印警告：这些 Partition 将保持副本不足，直到同 `kafka_seq` 的替换节点重新加入（自动继承副本分配并补数据），或你显式执行 Reassignment 将副本迁走。**计划内缩容应当先 Reassignment 排空、再退役**。


--------

## 替换故障节点

节点永久损坏（磁盘丢失、机器报废）时，保持其 IP 与 `kafka_seq` 不变，三步完成补换：

```bash
./kafka-rm.yml -l 10.10.10.13     # ① 退役死者：摘除 Voter 条目与 Broker 注册（节点不可达也能执行）
./node.yml     -l 10.10.10.13     # ② 纳管替换机器（修复或换新，保持 IP）
./kafka.yml    -l kf-main         # ③ 重新加入：格式化、追平、准入/提升，自动继承原副本分配并补数据
```

第 ① 步的所有元数据操作都委派给幸存成员执行，因此对已经无法连接的死节点同样有效；它还会一并清理监控 Target，避免死节点持续触发 `KafkaDown` 告警。第 ③ 步中，同 `kafka_seq` 的 Broker 会自动继承原 Partition 分配并从副本重新同步数据，无需手工 Reassignment。

如果跳过第 ① 步直接重装节点并重跑 `kafka.yml`，角色会在配置阶段快速失败，并在报错中给出残留 Voter 条目的 Directory ID 与确切的 `kafka-rm.yml` 命令——按提示执行后重跑即可。加入流程可安全重入：任一步骤被中断后，重跑 `kafka.yml` 会从现场状态继续。


--------

## 变更地址与端口

角色固定使用 `inventory_hostname` 作为 Broker advertised address 与 Controller bootstrap address。修改清单地址、`kafka_port` 或 `kafka_controller_port` 会影响客户端元数据、Broker 通信或 Quorum，属于静态高风险变更；必须同步检查 DNS、证书 SAN、路由、防火墙、Bootstrap 地址、监控 Target 与所有成员。


--------

## 轮换密钥与证书

已格式化且健康的 `scram` 集群支持两种互斥的受保护动作：内部凭据轮换和证书轮换。两者都要求精确完整集群、匹配的 `kafka_rotate_confirm` 确认字符串，并且建议先执行 `--check`。证书由同一 Pigsty CA 重新签发，新旧证书互信，轮换通过严格滚动逐节点生效。

具体命令和失败语义见 [**预置剧本：受保护轮换**](/docs/kafka/playbook#受保护轮换)。安全模式本身是 Bootstrap-only 属性；这些动作不等于支持 `plaintext` 到 `scram` 的在线迁移。


--------

## 数据保护与恢复

Kafka 的数据保护依赖跨故障域副本、正确的 minISR、生产者 ACK 和经过演练的恢复流程。当前角色不提供 Kafka 数据备份、自动 Broker Drain（计划内缩容需先手工 Reassignment）或跨地域灾难恢复。

发生磁盘或节点故障时：

1. 先查看 Kafka Overview/Instance、Quorum、ISR、Offline Partition 与 Under Min ISR；
2. 保存 `journalctl -u kafka`、节点指标、Manifest、`server.properties` 与 `meta.properties` 证据；
3. 确认节点角色、`node.id`、Cluster ID、Directory ID 与剩余副本可用性；
4. 节点确认无法恢复时，按 [**替换故障节点**](#替换故障节点) 三步走：`kafka-rm.yml` 退役 → `node.yml` 纳管 → `kafka.yml` 重入；磁盘尚存、仅服务异常时 **不要** 急于退役或删除 `meta.properties`，先尝试普通收敛拉起；
5. 对 Reassignment、RF 变更等数据搬迁操作仍使用独立评审的运行手册。


--------

## 日志诊断

```bash
journalctl -u kafka -f
journalctl -u kafka_exporter -f
journalctl SYSLOG_IDENTIFIER=kafka --since today
journalctl SYSLOG_IDENTIFIER=kafka_exporter --since today
```

VictoriaLogs/Grafana 查询：

```text
job:syslog unit:kafka
job:syslog app:kafka
job:syslog unit:kafka_exporter
```

常见诊断顺序是：服务日志 → 监听端口 → 管理通道健康 → 动态 Quorum → Broker/Partition/ISR → 客户端地址与证书/ACL → Consumer Lag。详细面板与告警映射见 [**监控告警**](/docs/kafka/monitor)。
