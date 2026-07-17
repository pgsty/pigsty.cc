---
title: 日常管理
weight: 5044
description: Kafka 集群健康、声明式资源、消息、Consumer Group 与拓扑变更管理。
icon: fa-solid fa-wrench
module: [KAFKA]
categories: [任务]
---


KAFKA 模块把 Kafka 安装在 `/opt/kafka`，使用 Systemd 管理服务，并把持久意图保存在 `pigsty.yml`。节点上的生成文件不应手工修改。

以下 Kafka CLI 示例都使用角色生成的 `/etc/kafka/admin.properties`。即使当前是 `plaintext`，也建议始终保留 `--command-config`，这样切换到 `scram` 管理通道时命令结构不变。将 `<broker>:9092` 替换为可达的 `inventory_hostname` 与端口。


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

## 角色自有健康检查

角色的生命周期门禁不依赖 JMX，而是通过同一管理通道检查 dynamic quorum、不可用 Partition、副本不足与 Under Min ISR：

```bash
sudo -u kafka /usr/local/bin/pigsty-kafka-health cluster \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties
```

返回 JSON 中 `healthy: true` 才表示该门禁通过。它适合只读诊断，但不能替代业务端到端验证。


--------

## KRaft 仲裁状态

从任一可用 Broker 查询 dynamic quorum：

```bash
/opt/kafka/bin/kafka-metadata-quorum.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  describe --status
```

重点检查：

- `LeaderId` 存在且对应预期 Controller；
- `CurrentVoters` 与现场 dynamic quorum 一致；
- `MaxFollowerLag` 与 `MaxFollowerLagTimeMs` 没有持续增长；
- Dashboard 中恰好有一个 Active Controller。

如需确认 dynamic quorum（KIP-853）特性级别，可用 `/opt/kafka/bin/kafka-features.sh ... describe` 查看 `kraft.version`。

查看 Controller 复制状态：

```bash
/opt/kafka/bin/kafka-metadata-quorum.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  describe --replication
```

如果没有 Leader、成员长期落后或 Voter 集合与预期不一致，应停止拓扑变更，保留日志、Manifest 与 `meta.properties`，再分析网络、节点/Directory Identity 和显式 Controller 成员操作。不要用普通清单重跑强行改写 quorum。


--------

## 声明式 Topic

生产 Topic 应优先在 `pigsty.yml` 的 [`kafka_topics`](/docs/pilot/kafka/param#kafka_topics) 中声明：

```yaml
kafka_topics:
  - name: orders
    partitions: 12
    replication_factor: 3
    config:
      min.insync.replicas: 2
      retention.ms: 604800000
```

使用完整集群目标收敛：

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

## 声明式用户、ACL 与 Quota

`kafka_security: scram` 时，应用身份应通过 [`kafka_users`](/docs/pilot/kafka/param#kafka_users) 管理：

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

## 消息读写验证

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

## Consumer Group

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

## 持久配置变更

修改 `pigsty.yml` 后始终对完整集群执行：

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

角色根据现场健康和静态指纹自动选择路径：

- 集群不健康或停止：只启动已停止的 Controller，恢复并追平 quorum 后再启动 Broker；若同时存在静态变化，仍在线成员随后进入严格滚动；
- 健康集群新增纯 Broker：逐个格式化、启动并确认注册；
- 健康集群存在静态变化：严格逐节点滚动，每节点重启前后执行 Controller 零 Lag/最近追平、quorum、Offline Partition、Under Min ISR 与 ISR 追平门禁；
- 没有静态变化：不重启 Kafka。

不要用 `-t kafka_config` 绕过完整状态机。动态 Topic/User/ACL/Quota 收敛位于 `kafka_provision` 资源收敛阶段，静态变化是否重启由角色决定。


--------

## 扩容与拓扑变更

### 增加纯 Broker

健康集群可以新增 `kafka_role: broker` 节点。为新节点分配从未冲突的 `kafka_seq`，更新完整 inventory，然后仍以完整集群为目标：

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

角色会将新格式化的纯 Broker 一次准入一个，并验证 Broker 已注册且未 Fenced。不能只 `-l` 新节点；也不能把新的 `combined` 或 `controller` 当作普通 Broker 加入。

新 Broker 加入不会迁移已有 Partition。必须另外生成、评审并监控 `kafka-reassign-partitions.sh` 计划，控制磁盘/网络负载并准备回退。“服务已注册”不等于“扩容完成”。

复制策略也不会随 Broker 数自动放大。尤其是 Kafka 4.3 的
`default.replication.factor` 不能动态修改：由 1 Broker 扩到 3 Broker 后，它仍为初建的
RF=1，未来未显式指定 RF 的 Topic 也仍按 RF=1 创建。应先完成既有 Partition
Reassignment，再规划 Controller 高可用或维护窗口，最后让新的静态默认值通过完整集群
安全滚动生效；不能为了改默认值绕过停机门禁。


### 增加、替换或删除 Controller

集群从一开始就是 dynamic quorum，但 Controller 成员关系仍是显式 Kafka 管理动作：

1. 核对当前 Leader、Voter、Directory ID 与多数派；
2. 针对现有 Cluster ID 显式格式化新 Controller；
3. 启动并确认其追平；
4. 执行并验证 `add-controller`；
5. 删除时执行对应 `remove-controller`，确认新多数派后再退役节点。

普通 inventory 变更不会自动执行这些步骤；角色会拒绝未在初始 Manifest 中登记的未格式化 Controller。该操作应使用 Kafka 官方成员变更流程与经过演练的独立运行手册。


### 修改地址或端口

角色固定使用 `inventory_hostname` 作为 Broker advertised address 与 Controller bootstrap address。修改清单地址、`kafka_port` 或 `kafka_controller_port` 会影响客户端元数据、Broker 通信或 quorum，属于静态高风险变更；必须同步检查 DNS、证书 SAN、路由、防火墙、Bootstrap 地址、监控 Target 与所有成员。


--------

## 安全材料轮换

已格式化且健康的 `scram` 集群支持两种互斥的受保护动作：内部凭据轮换和证书轮换。两者都要求精确完整集群、匹配的 `kafka_rotate_confirm` 确认字符串，并且建议先执行 `--check`。证书由同一 Pigsty CA 重新签发，新旧证书互信，轮换通过严格滚动逐节点生效。

具体命令和失败语义见 [预置剧本：受保护轮换](/docs/pilot/kafka/playbook#受保护轮换)。安全模式本身是 Bootstrap-only 属性；这些动作不等于支持 `plaintext` 到 `scram` 的在线迁移。


--------

## 数据保护与恢复

Kafka 的数据保护依赖跨故障域副本、正确的 minISR、生产者 ACK 和经过演练的恢复流程。当前角色不提供 Kafka 数据备份、自动 Broker Drain、KRaft 恢复编排或跨地域灾难恢复。

发生磁盘或节点故障时：

1. 先查看 Kafka Overview/Node、quorum、ISR、Offline Partition 与 Under Min ISR；
2. 保存 `journalctl -u kafka`、节点指标、Manifest、`server.properties` 与 `meta.properties` 证据；
3. 确认节点角色、`node.id`、Cluster ID、Directory ID 与剩余副本可用性；
4. 在明确恢复/替换方案前，不执行 `kafka-rm.yml`，不删除 `meta.properties`；
5. 对重格式化、身份替换、Reassignment 或 Controller 成员操作使用独立运行手册。


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

常见诊断顺序是：服务日志 → 监听端口 → 管理通道健康 → dynamic quorum → Broker/Partition/ISR → 客户端地址与证书/ACL → Consumer Lag。详细面板与告警映射见 [监控告警](/docs/pilot/kafka/monitor)。
