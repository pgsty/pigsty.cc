---
title: 指标定义
weight: 5047
description: Kafka JMX、协议 Exporter 与 Recording Rule 指标字典。
icon: fa-solid fa-gauge-high
module: [KAFKA]
categories: [参考]
aliases: [/docs/pilot/kafka/metric]
---


KAFKA 模块使用两类指标源，都注册在同一 `job=kafka` 采集任务下：JMX 目标（带 `role` 标签）采集每个 JVM 的内部状态；协议 Exporter 目标（无 `role` 标签）通过 Kafka 协议采集逻辑集群、Topic、Partition 与 Consumer Group 状态。协议 Exporter 只放在 `kafka_seq` 最小的至多两个 Broker-capable 节点上，单 Broker 集群只运行一个。

JMX 配置采用白名单，只导出 JVM 基线和有界的 Broker、复制、请求路径与 KRaft 指标；高基数的 per-client 与 per-partition JMX MBean 被有意排除，Partition 详情由协议 Exporter 提供。


--------

## 公共标签

| 指标源 | 公共标签 |
|:---|:---|
| JMX 目标（`:9404`） | `job`, `cls`, `ins`, `ip`, `instance`, `role`, `node_id` |
| 协议 Exporter 目标（`:9308`） | `job`, `cls`, `ins`, `ip`, `instance` |
{.full-width}

两类目标的 `job` 都是 `kafka`；是否携带 `role` 标签是区分两类序列的依据。

部分指标还有 `topic`、`partition`、`broker`、`consumergroup`、`request`、`version`、`error`、`quantile`、`state` 或 `operation` 等维度。


--------

## 可用性与抓取指标

| 指标 | 类型 | 含义 |
|:---|:---:|:---|
| `kafka_up` | Gauge/Recording | JMX 目标抓取可用性：`up{job="kafka",role=~".+"}` |
| `kafka_exporter_up` | Gauge/Recording | 协议 Exporter 目标抓取可用性：`up{job="kafka",role=""}` |
| `up` | Gauge | VictoriaMetrics 对原始 Target 的抓取状态 |
| `jmx_scrape_error` | Gauge | JMX Exporter 最近一次抓取是否出错，健康值为 `0` |
| `jmx_scrape_duration_seconds` | Gauge | JMX 抓取耗时 |
| `jmx_scrape_cached_beans` | Gauge | JMX Exporter 缓存的 MBean 数量 |
| `scrape_duration_seconds` | Gauge | VictoriaMetrics 抓取 Exporter 的耗时 |
| `scrape_samples_scraped` | Gauge | 本次抓取的样本数量 |
{.full-width}


--------

## 协议 Exporter 指标

以下指标来自协议 Exporter 目标。同一集群的多个 Exporter 会看到相同的逻辑集群状态，直接做集群聚合时必须按语义去重，不能简单把所有 `ins` 相加。

### Broker 与 Topic

| 指标 | 类型 | 关键维度 | 含义 |
|:---|:---:|:---|:---|
| `kafka_brokers` | Gauge | 集群 | Exporter 发现的 Broker 数量 |
| `kafka_broker_info` | Gauge | `id`, `address` 等 | Broker 信息，以值 `1` 携带标签 |
| `kafka_topic_partitions` | Gauge | `topic` | Topic 的 Partition 数量 |
| `kafka_topic_partition_current_offset` | Gauge | `topic`, `partition` | Partition 当前 Log End Offset |
| `kafka_topic_partition_oldest_offset` | Gauge | `topic`, `partition` | Partition 当前最早可读 Offset |
| `kafka_topic_partition_leader` | Gauge | `topic`, `partition` | 当前 Leader Broker ID；无 Leader 时用于识别异常 |
| `kafka_topic_partition_replicas` | Gauge | `topic`, `partition`, `broker` | 分配给 Partition 的副本集合 |
| `kafka_topic_partition_in_sync_replica` | Gauge | `topic`, `partition`, `broker` | 当前 ISR 成员 |
| `kafka_topic_partition_under_replicated_partition` | Gauge | `topic`, `partition` | Partition 是否处于副本不足状态 |
| `kafka_topic_partition_leader_is_preferred` | Gauge | `topic`, `partition` | 当前 Leader 是否为 Preferred Replica |
{.full-width}

`current_offset - oldest_offset` 可以估计当前可保留的 Offset Span，但 Offset 数量不等于字节数，Compact Topic 也不等于精确消息条数。


### Consumer Group

| 指标 | 类型 | 关键维度 | 含义 |
|:---|:---:|:---|:---|
| `kafka_consumergroup_members` | Gauge | `consumergroup` | Group 当前成员数 |
| `kafka_consumergroup_current_offset` | Gauge | `consumergroup`, `topic`, `partition` | Group 已提交 Offset |
| `kafka_consumergroup_current_offset_sum` | Gauge | `consumergroup`, `topic` | 已提交 Offset 汇总 |
| `kafka_consumergroup_lag` | Gauge | `consumergroup`, `topic`, `partition` | Partition 级消费滞后 |
| `kafka_consumergroup_lag_sum` | Gauge | `consumergroup`, `topic` | Group/Topic 消费滞后汇总 |
{.full-width}

没有提交 Offset 的临时消费者、使用外部 Offset 存储的客户端，或尚未消费某 Topic 的 Group，不一定产生这些时间序列。


### Exporter 自身

| 指标 | 类型 | 含义 |
|:---|:---:|:---|
| `kafka_exporter_build_info` | Gauge | Exporter 版本、Revision 与构建信息 |
| `process_*` | Gauge/Counter | Exporter 进程 CPU、内存、FD、启动时间等 |
| `go_*` | Gauge/Counter | Exporter Go Runtime、GC、Goroutine 与内存状态 |
| `promhttp_metric_handler_*` | Counter | `/metrics` 请求处理状态 |
{.full-width}


--------

## JMX：JVM 基线

`excludeJvmMetrics: false` 使 JMX Exporter 暴露标准 JVM/进程指标。Kafka Node Dashboard 主要使用：

| 指标 | 含义 |
|:---|:---|
| `jvm_memory_used_bytes` | 按 Heap/Non-Heap 与 Memory Pool 划分的已用内存 |
| `jvm_memory_committed_bytes` | JVM 已提交内存 |
| `jvm_memory_max_bytes` | JVM 可用最大内存 |
| `jvm_gc_collection_seconds_count` | GC 次数 |
| `jvm_gc_collection_seconds_sum` | GC 累计耗时 |
| `jvm_threads_state` | 按线程状态统计的线程数 |
| `jvm_threads_deadlocked` | 检测到的死锁线程循环数 |
| `jvm_buffer_pool_used_bytes` | Direct/Mapped Buffer Pool 使用量 |
| `process_cpu_seconds_total` | Kafka JVM 累计 CPU 时间 |
| `process_open_fds` / `process_max_fds` | 已打开与最大文件描述符 |
| `process_start_time_seconds` | Kafka JVM 启动时间 |
{.full-width}


--------

## JMX：Broker 流量

| 指标 | 类型 | 含义 |
|:---|:---:|:---|
| `kafka_server_broker_messages_in_total` | Counter | Broker 接收的消息总数 |
| `kafka_server_broker_bytes_in_total` | Counter | Broker 接收的客户端字节总数 |
| `kafka_server_broker_bytes_out_total` | Counter | Broker 发送的客户端字节总数 |
| `kafka_server_broker_replication_bytes_in_total` | Counter | Broker 接收的复制字节总数 |
| `kafka_server_broker_replication_bytes_out_total` | Counter | Broker 发送的复制字节总数 |
| `kafka_server_broker_produce_requests_total` | Counter | Produce 请求总数 |
| `kafka_server_broker_failed_produce_requests_total` | Counter | 失败 Produce 请求总数 |
| `kafka_server_broker_fetch_requests_total` | Counter | Fetch 请求总数 |
| `kafka_server_broker_failed_fetch_requests_total` | Counter | 失败 Fetch 请求总数 |
{.full-width}

这些是 Broker 总量，不包含 Topic 维度，避免 JMX Series 随 Topic 数膨胀。Topic 级 Offset 与进展来自协议 Exporter。


--------

## JMX：复制与存储

| 指标 | 类型 | 含义 |
|:---|:---:|:---|
| `kafka_server_replica_manager_under_replicated_partitions` | Gauge | ISR 少于已分配副本的 Partition 数 |
| `kafka_server_replica_manager_under_min_isr_partitions` | Gauge | ISR 低于 `min.insync.replicas` 的 Partition 数 |
| `kafka_server_replica_manager_at_min_isr_partitions` | Gauge | ISR 恰好等于 `min.insync.replicas` 的 Partition 数 |
| `kafka_server_replica_manager_offline_replicas` | Gauge | 当前 Broker 上离线副本数 |
| `kafka_server_replica_manager_partitions` | Gauge | 当前 Broker 承载的副本数 |
| `kafka_server_replica_manager_leaders` | Gauge | 当前 Broker 领导的 Partition 数 |
| `kafka_server_replica_manager_isr_shrinks_total` | Counter | ISR 收缩事件总数 |
| `kafka_server_replica_manager_isr_expands_total` | Counter | ISR 扩张事件总数 |
| `kafka_server_replica_manager_failed_isr_updates_total` | Counter | ISR 更新失败总数 |
| `kafka_server_replica_manager_reassigning_partitions` | Gauge | 正在进行 Reassignment 的 Leader Partition 数 |
| `kafka_server_delayed_operation_purgatory_size` | Gauge | 按 `operation` 划分的延迟操作等待数 |
| `kafka_log_manager_offline_log_directories` | Gauge | Kafka 标记为离线的日志目录数 |
{.full-width}

`Under Replicated` 表示副本没有全部同步；`Under Min ISR` 更严重，表示写入可用性或持久性条件已经低于设置的最小 ISR。`At Min ISR` 虽未越线，但已经没有额外副本余量。


--------

## JMX：请求路径

| 指标 | 类型 | 额外标签 | 含义 |
|:---|:---:|:---|:---|
| `kafka_network_request_total` | Counter | `request`, `version` | 各 Kafka API 请求总数 |
| `kafka_network_request_errors_total` | Counter | `request`, `error` | 各 API/错误码响应错误总数 |
| `kafka_network_request_total_time_seconds` | Gauge | `request`, `version`, `quantile` | API 总耗时 P50/P95/P99 |
| `kafka_network_request_queue_size` | Gauge | － | 等待 Request Handler 的请求数 |
| `kafka_network_response_queue_size` | Gauge | － | 等待 Network Processor 的响应数 |
| `kafka_server_request_handler_idle_ratio` | Gauge | － | Request Handler 平均空闲比例 |
| `kafka_network_processor_idle_ratio` | Gauge | － | Network Processor 平均空闲比例 |
{.full-width}

排查高延迟时，应同时查看请求量、错误码、P95/P99、两个队列、Handler/Processor Idle、GC、CPU、磁盘 I/O 与网络。单独看到低 Idle 不足以判断瓶颈位置。


--------

## JMX：KRaft 与 Broker 元数据

| 指标 | 类型 | 含义 |
|:---|:---:|:---|
| `kafka_server_raft_state` | Gauge | 当前成员的 KRaft 状态，以 `state` 标签表示 |
| `kafka_server_raft_current_leader` | Gauge | 当前 KRaft Leader Node ID，`-1` 表示未知 |
| `kafka_server_raft_current_epoch` | Gauge | 当前 KRaft Epoch |
| `kafka_server_raft_high_watermark` | Gauge | 元数据日志 High Watermark |
| `kafka_server_raft_log_end_offset` | Gauge | 元数据日志 Log End Offset |
| `kafka_server_broker_metadata_last_applied_record_lag_seconds` | Gauge | Broker 应用元数据记录的时间滞后 |
| `kafka_server_broker_metadata_load_errors_total` | Counter | Broker 加载元数据错误总数 |
| `kafka_server_broker_metadata_apply_errors_total` | Counter | Broker 应用元数据镜像错误总数 |
| `kafka_server_metadata_snapshot_bytes` | Gauge | 最近生成或加载的元数据 Snapshot 大小 |
| `kafka_server_metadata_snapshot_age_seconds` | Gauge | 最近元数据 Snapshot 的年龄 |
{.full-width}

`log_end_offset - high_watermark` 可辅助判断元数据提交滞后；还应结合成员角色、当前 Leader、Epoch 和 Controller 事件延迟判断。


--------

## JMX：Controller

这些 MBean 只存在于带 Controller 角色的 Kafka 进程中：

| 指标 | 类型 | 含义 |
|:---|:---:|:---|
| `kafka_controller_active_controller_count` | Gauge | Active Controller 上为 `1`，其他 Controller 为 `0` |
| `kafka_controller_fenced_broker_count` | Gauge | Active Controller 观察到的 Fenced Broker 数 |
| `kafka_controller_active_broker_count` | Gauge | Active Broker 数 |
| `kafka_controller_global_topic_count` | Gauge | Controller 观察到的 Topic 数 |
| `kafka_controller_global_partition_count` | Gauge | Controller 观察到的 Partition 数 |
| `kafka_controller_offline_partition_count` | Gauge | 离线的非内部 Partition 数 |
| `kafka_controller_preferred_replica_imbalance_count` | Gauge | Leader 不是 Preferred Replica 的 Partition 数 |
| `kafka_controller_metadata_errors_total` | Counter | Controller 元数据处理错误总数 |
| `kafka_controller_last_applied_record_lag_seconds` | Gauge | Controller 应用元数据记录的时间滞后 |
| `kafka_controller_timed_out_broker_heartbeats_total` | Counter | Broker Heartbeat 超时总数 |
| `kafka_controller_elections_total` | Counter | 本节点观察到的新 Active Controller 选举总数 |
| `kafka_controller_unclean_leader_elections_total` | Counter | 不干净 Leader 选举总数 |
| `kafka_controller_event_queue_time_seconds` | Gauge | Controller 事件排队 P50/P95/P99 |
| `kafka_controller_event_processing_time_seconds` | Gauge | Controller 事件处理 P50/P95/P99 |
{.full-width}

健康集群应恰好存在一个 Active Controller。`offline_partition_count`、`metadata_errors_total` 与 `unclean_leader_elections_total` 的增加都应优先处理。


--------

## Recording Rule 指标

### Offset 进展

| 指标 | 聚合层级 | 窗口 | 含义 |
|:---|:---:|:---:|:---|
| `kafka:topic:msg_rate1m` | Topic/Exporter | 1m | Current Offset 正向增长速率 |
| `kafka:topic:msg_rate5m` | Topic/Exporter | 5m | Current Offset 正向增长速率 |
| `kafka:ins:msg_rate1m` | Exporter 实例 | 1m | 实例视图消息追加速率 |
| `kafka:ins:msg_rate5m` | Exporter 实例 | 5m | 实例视图消息追加速率 |
| `kafka:cls:msg_rate1m` | 逻辑集群 | 1m | Exporter 间去重后的消息追加速率 |
| `kafka:cls:msg_rate5m` | 逻辑集群 | 5m | Exporter 间去重后的消息追加速率 |
| `kafka:topic:csg_rate1m` | Group/Topic/Exporter | 1m | Commit Offset 正向增长速率 |
| `kafka:topic:csg_rate5m` | Group/Topic/Exporter | 5m | Commit Offset 正向增长速率 |
| `kafka:ins:csg_rate1m` | Exporter 实例 | 1m | 实例视图消费提交速率 |
| `kafka:ins:csg_rate5m` | Exporter 实例 | 5m | 实例视图消费提交速率 |
| `kafka:cls:csg_rate1m` | 逻辑集群 | 1m | Exporter 间去重后的消费提交速率 |
| `kafka:cls:csg_rate5m` | 逻辑集群 | 5m | Exporter 间去重后的消费提交速率 |
{.full-width}

### JVM 与 Broker

| 指标 | 含义 |
|:---|:---|
| `kafka:ins:jvm_heap_used_ratio` | Heap Used / Heap Max |
| `kafka:ins:jvm_cpu_cores` | 5 分钟 JVM CPU Core 消耗 |
| `kafka:ins:jvm_gc_time_rate5m` | 5 分钟 GC 时间速率 |
| `kafka:ins:messages_in_rate5m` | 5 分钟 Broker 消息接收速率 |
| `kafka:ins:bytes_in_rate5m` | 5 分钟 Broker 客户端入站字节速率 |
| `kafka:ins:bytes_out_rate5m` | 5 分钟 Broker 客户端出站字节速率 |
{.full-width}


--------

## 基数与解释注意事项

- 不要把同一 `cls` 的多个 `kafka_exporter` 结果直接求和；它们可能是同一集群视图的副本。
- `kafka_topic_partition_current_offset` 是 Offset，不是精确字节、请求或业务事件数量。
- Consumer Lag 只覆盖 Kafka 中可见且已提交 Offset 的 Group。
- 纯 Controller 缺少 Broker 指标和协议 Exporter 指标属于正常角色差异；未被选择的 Broker 没有协议 Exporter 指标也属于正常放置结果。
- 某个 MBean 在具体 Kafka 版本/角色中不存在时，对应 JMX Series 也不会出现；应结合 `role` 判断。
- per-client/per-partition JMX 指标被白名单排除，以避免不可预测的时间序列基数。

Dashboard 与告警使用方式参阅 [监控告警](/docs/kafka/monitor)。
