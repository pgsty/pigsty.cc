---
title: 监控告警
weight: 5046
description: Kafka 指标采集、Grafana Dashboard、日志查询与告警规则。
icon: fa-solid fa-chart-line
module: [KAFKA]
categories: [参考]
aliases: [/docs/pilot/kafka/monitor]
---


Pigsty 为 KAFKA 模块提供指标、日志、Dashboard 与告警一体化的可观测能力。监控同时覆盖 Kafka JVM 内部状态与 Kafka 协议视角，避免只看到进程存活而看不到 Partition、ISR 与 Consumer Lag，也避免只看到集群元数据而看不到 JVM、请求队列与 KRaft Controller 健康。


--------

## 采集架构

KAFKA 模块使用两个互补的 Exporter：

| 采集面 | 服务/方式 | Job | 节点范围 | 主要内容 |
|:---|:---|:---|:---|:---|
| JVM 与 Kafka 内部 | JMX Exporter Java Agent `:9404` | `kafka`（带 `role` 标签） | 所有 Kafka 节点 | JVM、Broker 吞吐、复制、请求路径、KRaft、Controller |
| Kafka 协议视角 | `kafka_exporter :9308` | `kafka`（无 `role` 标签） | `kafka_seq` 最小的至多两个 Broker-capable 节点 | Broker、Topic、Partition、Offset、Consumer Group、Lag |
| 主机资源 | node_exporter | `node` | 纳管节点 | CPU、内存、磁盘、网络、文件系统 |
| 日志 | Journald → Vector → VictoriaLogs | `syslog` | 所有 Kafka 节点 | Kafka 与 Exporter 结构化检索日志 |
{.full-width}

角色在每一个 Infra 节点为每个实例生成一个文件发现目标，JMX 目标与（被选中节点的）协议 Exporter 目标都在同一文件、同一 `kafka` 采集任务下：

```text
/infra/targets/kafka/<kafka_instance>.yml
```

单 Broker 集群只运行一个协议 Exporter；多 Broker 集群最多运行两个。纯 Controller 只注册 JMX 目标；未被选择的 Broker 与纯 Controller 都没有协议 Exporter 目标，这是预期行为。Target 文件每次完整运行按当前放置刷新；实例 Target 的删除由 `kafka-rm.yml` 的注销步骤完成。


--------

## 标签模型

两类目标都注册在同一 `job=kafka` 采集任务下，通过有无 `role` 标签区分。

### JMX 目标

| 标签 | 含义 | 示例 |
|:---|:---|:---|
| `job` | 采集任务 | `kafka` |
| `cls` | Kafka 集群名 | `kf-main` |
| `ins` | Kafka 实例名 | `kf-main-1` |
| `ip` | 清单主机地址 | `10.10.10.11` |
| `instance` | JMX 抓取端点 | `10.10.10.11:9404` |
| `role` | Pigsty Kafka 角色 | `combined`、`broker` 或 `controller` |
| `node_id` | KRaft 节点号 | `1` |
{.full-width}

### 协议 Exporter 目标

协议 Exporter 目标只包含 `cls`、`ins`、`ip` 与 `instance`（`10.10.10.11:9308`），没有 `role`/`node_id` 标签。vmagent 端的记录规则据此区分两类可用性：`kafka_up` 为 `up{job="kafka",role=~".+"}`，`kafka_exporter_up` 为 `up{job="kafka",role=""}`。

Exporter 从 Broker 查询整个 Kafka 集群，因此同一集群的两个 Exporter 可能返回相同 Topic/Partition/Consumer Group 视图。集群级 Recording Rule 会先在 Exporter 实例间去重，再汇总逻辑集群速率。`scram` 模式下，Exporter 连接 Kafka 所需的 TLS/SCRAM 参数由角色自有监控身份自动生成。


--------

## Grafana Dashboard

Pigsty 提供三个互补 Dashboard：

### [Kafka Overview](https://demo.pigsty.cc/ui/d/kafka-overview)

集群与全局总览。`cls=All` 是全部 Kafka 集群的 Overview；选择具体 `cls` 后，同一 Dashboard 就成为该 Kafka Cluster 的总览，而不是另一套独立面板。

主要内容：

- 集群、Broker、Topic、Partition 与 Consumer Group 清单
- Broker 可用性、Exporter 健康与集群工作负载
- Leaderless、Under Replicated、ISR Deficit、Non-Preferred Replica
- Topic Offset 进展、Consumer Commit 进展与总 Lag
- Consumer Group 成员、Lag 排名和 Topic/Group 下钻
- Kafka/Exporter 日志量、Firing Alerts 与日志明细

常用变量：`cls`、`members`、`topic`、`group`、`topk`。


### [Kafka Instance](https://demo.pigsty.cc/ui/d/kafka-instance)

以 `ins` 变量选择一个运行 `kafka_exporter` 的 Broker 实例，从协议视角查看集群元数据与 Consumer 状态，并联动宿主机资源。

主要内容：

- Exporter 可用性、身份、运行时与抓取成本
- Broker Directory、Topic Inventory、Partition Topology
- Leader Distribution、ISR Deficit、Leaderless 与 Non-Preferred
- Topic Offset Span、Append/Commit Progress
- Consumer Group Inventory、Members、Offsets 与 Lag
- 节点 CPU/内存、磁盘 I/O、网络、文件系统与日志

常用变量：`ins`、`cls`、`ip`、`topic`、`consumergroup`、`topk`。


### [Kafka Node](https://demo.pigsty.cc/ui/d/kafka-node)

以 `ins` 变量选择任何 Kafka JVM，包括纯 Controller 节点，查看 JMX、Broker 与 KRaft 内部状态。

主要内容：

- JVM Heap、GC、Thread、Buffer Pool、CPU、FD 与 Uptime
- Broker 消息/网络/复制吞吐和 ISR Churn
- 请求率、错误、P95/P99 延迟、队列与 Handler/Network Idle
- Under Replicated、Under Min ISR、Offline Replica/Log Directory
- KRaft Member State、Metadata Log、传播延迟与 Snapshot
- Active Controller、Fenced Broker、Offline Partition 与事件延迟
- JMX 抓取质量、宿主机压力与 Kafka 日志

常用变量：`cls`、`ins`、`ip`。


--------

## Dashboard 选择

| 问题 | 首选 Dashboard | 下钻方向 |
|:---|:---|:---|
| 哪个集群或 Topic 出现异常？ | Kafka Overview | 选择 `cls`、`topic`、`group` |
| 某个 Consumer Group 为什么积压？ | Kafka Instance | Group → Topic → Partition Offset |
| 某个 Broker 是否过载？ | Kafka Node | 请求路径 → JVM → Node 资源 |
| KRaft Controller 是否健康？ | Kafka Node | KRaft Metadata Plane → Controller Health |
| 是否存在 Leaderless/URP/ISR 问题？ | Kafka Overview | Cluster → Kafka Node |
| Exporter 缺数还是 Kafka 本身异常？ | Instance + Node | 对比 `kafka_exporter_up` 与 `kafka_up` |
{.full-width}


--------

## Recording Rule

Kafka 规则文件位于 `/infra/rules/kafka.yml`。主要记录指标如下：

| 指标 | 含义 |
|:---|:---|
| `kafka:topic:msg_rate1m/5m` | Topic 当前 Offset 的 1/5 分钟正向变化速率 |
| `kafka:ins:msg_rate1m/5m` | 单个 Exporter 视图中的消息追加速率 |
| `kafka:cls:msg_rate1m/5m` | 去重后的集群消息追加速率 |
| `kafka:topic:csg_rate1m/5m` | Consumer Group Commit Offset 的 1/5 分钟正向变化速率 |
| `kafka:ins:csg_rate1m/5m` | 单个 Exporter 视图中的消费提交速率 |
| `kafka:cls:csg_rate1m/5m` | 去重后的集群消费提交速率 |
| `kafka:ins:jvm_heap_used_ratio` | Kafka JVM Heap 使用率 |
| `kafka:ins:jvm_cpu_cores` | Kafka JVM 消耗的 CPU Core 数 |
| `kafka:ins:jvm_gc_time_rate5m` | 5 分钟 GC 时间速率 |
| `kafka:ins:messages_in_rate5m` | Broker 5 分钟消息接收速率 |
| `kafka:ins:bytes_in_rate5m` | Broker 5 分钟客户端入站字节速率 |
| `kafka:ins:bytes_out_rate5m` | Broker 5 分钟客户端出站字节速率 |
{.full-width}

基于 Offset 变化得到的是进展速率，不是客户端请求数。日志截断、Offset 回退或 Exporter 重启可能造成瞬时负变化；规则使用 `clamp_min(..., 0)` 只保留正向进展。


--------

## 告警规则

| 告警 | 条件 | 持续时间 | 级别 | 首选下钻 |
|:---|:---|:---:|:---:|:---|
| `KafkaDown` | `up{job="kafka"} < 1` | 1m | CRIT | Kafka Node / `ins` |
| `KafkaExporterDown` | `up{job="kafka_exporter"} < 1` | 1m | CRIT | Kafka Instance / `ins` |
| `KafkaJmxScrapeError` | `jmx_scrape_error > 0` | 3m | WARN | Kafka Node / JMX Collector |
| `KafkaJvmHeapHigh` | Heap 使用率 > 90% | 15m | WARN | Kafka Node / JVM Memory |
| `KafkaJvmDeadlock` | JVM Deadlocked Thread > 0 | 1m | CRIT | Kafka Node / JVM Threads |
| `KafkaRequestHandlerSaturated` | Handler Idle < 10% | 10m | WARN | Kafka Node / Request Path |
| `KafkaUnderReplicatedPartitions` | URP > 0 | 5m | WARN | Kafka Node / Replication |
| `KafkaUnderMinISR` | Under Min ISR > 0 | 1m | CRIT | Kafka Node / Replication |
| `KafkaOfflineLogDirectory` | Offline Log Directory > 0 | 1m | CRIT | Kafka Node / Disk Pressure |
| `KafkaOfflinePartitions` | Controller Offline Partition > 0 | 1m | CRIT | Kafka Node / `cls` |
| `KafkaControllerCountMismatch` | Active Controller 数不等于 1 | 1m | CRIT | Kafka Node / `cls` |
| `KafkaFencedBrokers` | Fenced Broker > 0 | 5m | WARN | Kafka Node / `cls` |
| `KafkaUncleanLeaderElection` | 5 分钟出现不干净 Leader 选举 | 立即 | CRIT | Kafka Node / `cls` |
{.full-width}

不干净 Leader 选举可能意味着数据丢失，应立即保留 Controller/Broker 日志，确认受影响 Topic 与副本，再决定恢复动作。


--------

## 常用 PromQL

检查采集目标：

```promql
kafka_up
kafka_exporter_up
up{job="kafka"}
```

检查某集群复制健康：

```promql
sum by (cls) (kafka_server_replica_manager_under_replicated_partitions{job="kafka"})
sum by (cls) (kafka_server_replica_manager_under_min_isr_partitions{job="kafka"})
max by (cls) (kafka_controller_offline_partition_count{job="kafka"})
```

检查 Consumer Lag：

```promql
topk(20, kafka_consumergroup_lag_sum{cls="kf-main"})
```

检查请求饱和与延迟：

```promql
kafka_server_request_handler_idle_ratio{job="kafka",cls="kf-main"}
max by (ins,request,quantile) (
  kafka_network_request_total_time_seconds{job="kafka",cls="kf-main",quantile=~"0.95|0.99"}
)
```


--------

## 日志查询

Kafka 服务把标准输出与错误写入 Journald，节点 Vector 的 Journald Source 会转发到 VictoriaLogs，统一使用 `job:syslog`。

```text
job:syslog unit:kafka
job:syslog app:kafka
job:syslog unit:kafka_exporter
ip:10.10.10.11 job:syslog (unit:kafka OR app:kafka)
```

Kafka Node Dashboard 的日志面板使用类似查询，并展示时间、级别、Systemd Unit 与消息。诊断时应把日志与同一时间窗口内的 KRaft、ISR、请求队列、GC、磁盘 I/O 和网络指标对齐。


--------

## 验证监控链路

在 Kafka 节点验证原始端点：

```bash
curl -fsS http://<kafka-ip>:9404/metrics | grep '^jmx_scrape_error'
curl -fsS http://127.0.0.1:9308/metrics | grep '^kafka_brokers'
```

在 Infra 节点检查文件发现（每实例一个文件，被选中节点的文件含 JMX 与协议 Exporter 两个目标）：

```bash
ls -l /infra/targets/kafka/
cat /infra/targets/kafka/kf-main-1.yml
```

然后在 VictoriaMetrics 查询 `up{job="kafka"}`（或记录指标 `kafka_up` 与 `kafka_exporter_up`）。自定义 exporter 指标在抓取失败后可能短暂保留旧样本，端点存活应以 Prometheus 原生 `up` 为准。若原始端点正常但记录指标缺失，依次检查文件发现、VictoriaMetrics Target、网络可达性、规则加载与标签；若 JMX HTTP 正常但 `jmx_scrape_error` 为 `1`，检查 Kafka 日志和 `/etc/kafka/jmx_exporter.yml` 的 MBean 匹配情况。

完整指标语义参阅 [指标定义](/docs/kafka/metric)。
