---
title: 指标定义
weight: 5016
description: MySQL 模块的标签模型、衍生指标字典与原始指标族。
icon: fa-solid fa-gauge-high
module: [MYSQL]
categories: [参考]
---

MYSQL 模块的指标来自 `mysqld_exporter`（原始指标，`mysql_` 前缀）与 vmalert 衍生规则（`mysql:ins:*` / `mysql:cls:*`）。Dashboard 与告警优先建立在衍生指标之上，本页是衍生指标的完整字典。


--------

## 公共标签

所有指标携带 `job=mysql` 与身份标签 `cls` / `ins` / `ip` / `topology`（取值 `standalone` 或 `innodb_cluster`）。实例级衍生指标保留全部身份标签，集群级指标聚合到 `cls` + `topology`。


--------

## 可用性

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:exporter_up` | Exporter 抓取是否成功（传输层健康） |
| `mysql:ins:up` | MySQL 连接探测是否成功（数据库健康） |
| `mysql:ins:uptime` | 实例运行时长（秒） |
| `mysql:cls:instances` | 集群声明实例数 |
| `mysql:cls:up` | 集群在线实例数 |
| `mysql:cls:health` | 集群健康度：2 健康 / 1 降级可写 / 0 危险 |
{.full-width}

`mysql:cls:health` 对 HA 集群综合仲裁、单主与全员在线状态；对单机取 `2 × mysql:cls:up`。


--------

## 工作负载

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:qps` | 每秒问询数（Questions） |
| `mysql:ins:tps` | 每秒事务数（Commit + Rollback） |
| `mysql:ins:read_qps` / `mysql:ins:write_qps` | 读类 / 写类命令速率 |
| `mysql:ins:row_ops` | InnoDB 行操作速率（读/插/改/删分维度） |
| `mysql:ins:statement_rate` | 性能模式语句执行速率 |
| `mysql:ins:statement_latency` | 语句平均时延（秒） |
| `mysql:ins:rows_examined_per_query` | 平均每查询扫描行数 |
| `mysql:ins:statement_errors` | 语句错误率 |
| `mysql:ins:slow_queries` / `mysql:ins:slow_query_ratio` | 慢查询速率与占比 |
| `mysql:ins:no_index_queries` | 未走索引查询速率 |
{.full-width}


--------

## 连接与会话

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:connections` | 当前连接数（Threads_connected） |
| `mysql:ins:connection_usage` | 连接数 / `max_connections` 使用率 |
| `mysql:ins:connection_rate` | 新建连接速率 |
| `mysql:ins:threads_running` / `mysql:ins:threads_cached` | 活跃 / 缓存线程数 |
| `mysql:ins:aborted_connects` / `mysql:ins:aborted_clients` | 失败握手 / 异常断开速率 |
| `mysql:ins:connection_errors` | 连接错误总速率 |
| `mysql:ins:rx_bytes` / `mysql:ins:tx_bytes` | 网络收 / 发字节率 |
{.full-width}


--------

## 临时表、扫描与缓存

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:tmp_tables` / `mysql:ins:tmp_disk_tables` | 内存 / 磁盘临时表创建速率 |
| `mysql:ins:tmp_disk_ratio` | 磁盘临时表占比 |
| `mysql:ins:full_joins` / `mysql:ins:full_scans` | 无索引连接 / 全表扫描速率 |
| `mysql:ins:sort_merge_passes` | 排序归并趟数（sort_buffer 不足信号） |
| `mysql:ins:table_open_cache_hit_ratio` | 表缓存命中率 |
| `mysql:ins:open_files_usage` | 打开文件数使用率 |
{.full-width}


--------

## InnoDB

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:buffer_pool_hit_ratio` | 缓冲池命中率 |
| `mysql:ins:buffer_pool_usage` / `mysql:ins:buffer_pool_dirty_ratio` | 缓冲池使用率 / 脏页占比 |
| `mysql:ins:buffer_pool_waits` | 缓冲池空闲页等待速率（内存压力信号） |
| `mysql:ins:data_read_bytes` / `mysql:ins:data_write_bytes` | 数据文件读 / 写字节率 |
| `mysql:ins:data_reads` / `mysql:ins:data_writes` / `mysql:ins:data_fsyncs` | 数据文件 IO 与 fsync 速率 |
| `mysql:ins:redo_bytes` | Redo 写入字节率 |
| `mysql:ins:redo_utilization` | Redo 容量使用率（检查点落后度） |
| `mysql:ins:log_waits` | Redo 缓冲等待速率 |
| `mysql:ins:row_lock_waits` / `mysql:ins:row_lock_time` | 行锁等待速率 / 耗时 |
| `mysql:ins:deadlocks` | 死锁速率 |
| `mysql:ins:history_list_length` | Purge 滞后（历史链表长度） |
| `mysql:ins:binlog_bytes` | Binlog 当前磁盘占用总量（字节） |
{.full-width}


--------

## Group Replication

实例级成员状态（取值为 1 或缺失——不满足条件时序列不存在，告警据此用 `unless` 判断）：

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:gr_member` | 本实例处于任意 MGR 成员状态 |
| `mysql:ins:gr_online` | 本实例 ONLINE |
| `mysql:ins:gr_primary` / `mysql:ins:gr_secondary` | 本实例为 ONLINE 主库 / 从库 |
{.full-width}

集群级仲裁与拓扑：

| 指标 | 含义 |
|:---|:---|
| `mysql:cls:gr_online_members` | ONLINE 成员数 |
| `mysql:cls:gr_primary_members` | ONLINE 主库数 |
| `mysql:cls:gr_quorum` | 是否保有多数派（0/1） |
| `mysql:cls:gr_single_primary` | 是否恰好单主（0/1） |
{.full-width}

复制管道（认证与应用）：

| 指标 | 含义 |
|:---|:---|
| `mysql:ins:gr_certifier_queue` / `mysql:ins:gr_applier_queue` | 认证 / 应用队列积压事务数 |
| `mysql:ins:gr_certifier_queue_ratio` / `mysql:ins:gr_applier_queue_ratio` | 队列积压相对流控阈值的占比 |
| `mysql:ins:gr_checked_rate` / `mysql:ins:gr_applied_rate` | 事务认证 / 应用速率 |
| `mysql:ins:gr_conflict_rate` | 认证冲突速率（多写冲突信号，单主下应为 0） |
{.full-width}


--------

## 原始指标族

衍生指标未覆盖的细节可直接查询 Exporter 原始指标，常用族：

| 前缀 | 内容 |
|:---|:---|
| `mysql_up` / `up` | 数据库连接探测 / 抓取状态 |
| `mysql_global_status_*` | `SHOW GLOBAL STATUS` 全量计数器 |
| `mysql_global_variables_*` | 关键系统变量（如 `max_connections`） |
| `mysql_perf_schema_events_statements_*` | 语句摘要（按 digest Top 50） |
| `mysql_perf_schema_table_io_waits_*` / `..._index_io_waits_*` | 表 / 索引 IO 等待 |
| `mysql_perf_schema_replication_group_member_info` | MGR 成员状态（`member_state` / `member_role` 维度） |
| `mysql_perf_schema_transactions_*` / `mysql_perf_schema_conflicts_detected_total` | MGR 认证队列、应用队列与冲突统计 |
| `mysql_binlog_*` | Binlog 文件数与尺寸 |
| `mysql_info_schema_processlist_*` | 会话按状态分布 |
{.full-width}

在 VictoriaMetrics 的 vmui（`/select/vmui`）中以 `mysql_` 前缀浏览即可获得完整清单。
