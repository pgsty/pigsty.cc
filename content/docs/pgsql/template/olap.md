---
title: OLAP 模板
weight: 30
description: 针对在线分析处理负载优化的 PostgreSQL 配置模板
icon: fa-solid fa-chart-line
module: [PGSQL]
categories: [参考]
---


`olap.yml` 是针对**在线分析处理**（OLAP）负载优化的配置模板。适用于 4-128 核 CPU 的服务器，特点是支持大查询、高并行度、宽松的超时设置和激进的 Vacuum 策略。

> 建议同时使用 [**`node_tune`**](/docs/node/param#node_tune) = `olap` 进行操作系统级别的配套调优。


----------------

## 适用场景

OLAP 模板适用于以下场景：

- **数据仓库**：历史数据存储、多维分析
- **BI 报表**：复杂报表查询、仪表盘数据源
- **ETL 处理**：数据抽取、转换、加载
- **数据分析**：Ad-hoc 查询、数据探索
- **HTAP 混合负载**：分析型从库

**特征负载**：
- 复杂查询（秒级到分钟级）
- 低并发连接（数十到数百）
- 读密集型，写入通常是批量操作
- 对吞吐量敏感，可以容忍较高延迟
- 需要扫描大量数据


----------------

## 使用方法

在集群定义中指定 [**`pg_conf`**](/docs/pgsql/param#pg_conf) = `olap.yml`：

```yaml
pg-olap:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
  vars:
    pg_cluster: pg-olap
    pg_conf: olap.yml    # PostgreSQL 分析处理模板
    node_tune: olap      # 操作系统分析处理调优
```

也可以将 [**`olap.yml`**](olap) 模板用于专用的离线从库：

```yaml
pg-mixed:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: offline, pg_conf: olap.yml }  # 离线分析从库
  vars:
    pg_cluster: pg-mixed
    pg_conf: oltp.yml    # 主库和在线从库使用 OLTP 模板
    node_tune: oltp      # 操作系统 OLTP 调优
```


----------------

## 参数详解

### 连接管理

```yaml
max_connections: 500
superuser_reserved_connections: 10
```

OLAP 场景通常不需要大量连接，500 个连接足以应对大多数分析负载。

### 内存配置

OLAP 模板的内存分配策略更为激进：

| 参数 | 计算公式 | 说明 |
|:-----|:---------|:-----|
| `shared_buffers` | 内存 × `pg_shared_buffer_ratio` | 默认比例 0.25 |
| `maintenance_work_mem` | shared_buffers × **50%** | 加速索引创建和 VACUUM |
| `work_mem` | 64MB - **8GB** | 更大的排序/哈希内存 |
| `effective_cache_size` | 总内存 - shared_buffers | 可用于缓存的预估内存 |
{.full-width}

**work_mem 计算逻辑**（与 OLTP 不同）：
```
work_mem = min(max(shared_buffers / max_connections, 64MB), 8GB)
```

更大的 `work_mem` 允许更大的排序和哈希操作在内存中完成，避免磁盘溢出。

### 锁与事务

```yaml
max_locks_per_transaction: 2-4x maxconn   # OLTP 是 1-2x
```

OLAP 查询可能涉及更多表（分区表、大量 JOIN），因此需要更多的锁槽。

### 并行查询

OLAP 模板激进启用并行查询：

```yaml
max_worker_processes: cpu + 12 (最小20)      # OLTP: cpu + 8
max_parallel_workers: 80% × cpu (最小2)      # OLTP: 50%
max_parallel_workers_per_gather: 50% × cpu   # OLTP: 20% (最大8)
max_parallel_maintenance_workers: 33% × cpu
```

并行查询成本保持默认值，让优化器更倾向于选择并行计划：

```yaml
# parallel_setup_cost: 1000    # 默认值，不加倍
# parallel_tuple_cost: 0.1     # 默认值，不加倍
```

同时启用分区智能优化：

```yaml
enable_partitionwise_join: on       # 分区表智能 JOIN
enable_partitionwise_aggregate: on  # 分区表智能聚合
```

### IO 配置（PG17+）

```yaml
io_workers: 50% × cpu (4-32)    # OLTP: 25% (4-16)
```

更多的 IO 工作线程支持并行扫描大表。

### WAL 配置

```yaml
min_wal_size: 磁盘/20 (最大200GB)
max_wal_size: 磁盘/5 (最大2000GB)
max_slot_wal_keep_size: 磁盘×3/10 (最大3000GB)
temp_file_limit: 磁盘/5 (最大2000GB)   # OLTP: 磁盘/20
```

更大的 `temp_file_limit` 允许更大的中间结果溢出到磁盘。

### Vacuum 配置

OLAP 模板使用更激进的 vacuum 设置：

```yaml
vacuum_cost_delay: 10ms         # OLTP: 20ms，更快的 vacuum
vacuum_cost_limit: 10000        # OLTP: 2000，每轮更多工作
autovacuum_max_workers: 3
autovacuum_naptime: 1min
autovacuum_vacuum_scale_factor: 0.08
autovacuum_analyze_scale_factor: 0.04
```

分析型数据库通常有大量批量写入，需要更激进的 vacuum 策略来回收空间。

### 查询优化

```yaml
random_page_cost: 1.1
effective_io_concurrency: 200
default_statistics_target: 1000    # OLTP: 400，更精确的统计信息
```

更高的 `default_statistics_target` 提供更精确的查询计划，对复杂分析查询尤为重要。

### 日志与监控

```yaml
log_min_duration_statement: 1000    # OLTP: 100ms，放宽慢查询阈值
log_statement: ddl
log_checkpoints: on
log_lock_waits: on
log_temp_files: 1024
log_autovacuum_min_duration: 1s
track_io_timing: on
track_cost_delay_timing: on         # PG18+，跟踪 vacuum 代价延迟
track_functions: all
track_activity_query_size: 8192
```

### 客户端超时

```yaml
deadlock_timeout: 50ms
idle_in_transaction_session_timeout: 0   # OLTP: 10min，禁用
```

分析查询可能需要长时间持有事务，因此禁用空闲事务超时。


----------------

## 与 OLTP 模板的主要差异

| 参数 | [**OLAP**](olap) | [**OLTP**](oltp) | 差异原因 |
|:-----|:-----|:-----|:---------|
| max_connections | 500 | 500-1000 | 分析负载连接数少 |
| work_mem 上限 | 8GB | 1GB | 支持更大的内存排序 |
| maintenance_work_mem | 50% buffer | 25% buffer | 加速索引创建 |
| max_locks_per_transaction | 2-4x | 1-2x | 更多表参与查询 |
| max_parallel_workers | 80% cpu | 50% cpu | 激进并行 |
| max_parallel_workers_per_gather | 50% cpu | 20% cpu | 激进并行 |
| parallel_setup_cost | 1000 | 2000 | 默认值，鼓励并行 |
| parallel_tuple_cost | 0.1 | 0.2 | 默认值，鼓励并行 |
| enable_partitionwise_join | on | off | 分区表优化 |
| enable_partitionwise_aggregate | on | off | 分区表优化 |
| vacuum_cost_delay | 10ms | 20ms | 激进 vacuum |
| vacuum_cost_limit | 10000 | 2000 | 激进 vacuum |
| temp_file_limit | 1/5 磁盘 | 1/20 磁盘 | 允许更大临时文件 |
| io_workers | 50% cpu | 25% cpu | 更多并行 IO |
| log_min_duration_statement | 1000ms | 100ms | 放宽慢查询阈值 |
| default_statistics_target | 1000 | 400 | 更精确统计 |
| idle_in_transaction_session_timeout | 禁用 | 10min | 允许长事务 |
{.full-width}


----------------

## 性能调优建议

### 结合 TimescaleDB

OLAP 模板与 TimescaleDB 配合使用效果极佳：

```yaml
pg-timeseries:
  vars:
    pg_conf: olap.yml
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'
    pg_extensions:
      - timescaledb
```

### 结合 pg_duckdb

对于极致的分析性能，可以结合 pg_duckdb：

```yaml
pg-analytics:
  vars:
    pg_conf: olap.yml
    pg_libs: 'pg_duckdb, pg_stat_statements, auto_explain'
```

### 列式存储

考虑使用 Citus 的列式存储或 pg_mooncake：

```yaml
pg_extensions:
  - citus_columnar  # 或 pg_mooncake
```

### 资源隔离

对于混合负载，建议将分析查询隔离到专用从库：

```yaml
pg-mixed:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }               # OLTP 写入
    10.10.10.12: { pg_seq: 2, pg_role: replica }               # OLTP 读取
    10.10.10.13: { pg_seq: 3, pg_role: offline }               # OLAP 分析
  vars:
    pg_cluster: pg-mixed
```

### 监控指标

关注以下监控指标：

- **查询时间**：长查询的执行时间分布
- **并行度**：并行工作进程的使用率
- **临时文件**：临时文件的大小和数量
- **磁盘 IO**：顺序扫描和索引扫描的 IO 量
- **缓存命中率**：shared_buffers 和 OS 缓存的命中率


----------------

## 参考资料

- [**`pg_conf`**](/docs/pgsql/param#pg_conf)：PostgreSQL 配置模板选择参数
- [**`node_tune`**](/docs/node/param#node_tune)：操作系统调优模板，应与 `pg_conf` 配套
- [**OLTP 模板**](oltp)：事务处理模板对比
- [**CRIT 模板**](crit)：关键业务模板对比
- [**TINY 模板**](tiny)：微型实例模板对比
- [离线从库](/docs/pgsql/config/cluster#离线从库)：专用分析实例

