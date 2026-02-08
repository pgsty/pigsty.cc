---
title: OLTP 模板
weight: 20
description: 针对在线事务处理负载优化的 PostgreSQL 配置模板
icon: fa-solid fa-bolt
module: [PGSQL]
categories: [参考]
---


`oltp.yml` 是 Pigsty 的默认配置模板，针对**在线事务处理**（OLTP）负载进行了优化。适用于 4-128 核 CPU 的服务器，特点是高并发连接、低延迟响应、高事务吞吐量。

> 建议同时使用 [**`node_tune`**](/docs/node/param#node_tune) = `oltp` 进行操作系统级别的配套调优。


----------------

## 适用场景

OLTP 模板适用于以下场景：

- **电商系统**：订单处理、库存管理、用户交易
- **社交应用**：用户动态、消息推送、关注关系
- **游戏后端**：玩家数据、排行榜、游戏状态
- **SaaS 应用**：多租户业务系统
- **Web 应用**：常规的 CRUD 操作密集型应用

**特征负载**：
- 大量短事务（毫秒级）
- 高并发连接（数百到数千）
- 读写比例通常在 7:3 到 9:1
- 对延迟敏感，要求快速响应
- 数据一致性要求高

----------------

## 使用方法

[**`oltp.yml`**](/docs/pgsql/template/oltp/) 是默认模板，无需显式指定：

```yaml
pg-oltp:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
  vars:
    pg_cluster: pg-oltp
    # pg_conf: oltp.yml  # PostgreSQL 配置模板（默认值）
    # node_tune: oltp    # 操作系统调优模板（默认值）
```

或显式指定：

```yaml
pg-oltp:
  vars:
    pg_conf: oltp.yml    # PostgreSQL 配置模板
    node_tune: oltp      # 操作系统调优模板
```


----------------

## 参数详解

### 连接管理

```yaml
max_connections: 500/1000   # 取决于是否使用 pgbouncer
superuser_reserved_connections: 10
```

- 当 [`pg_default_service_dest`](/docs/pgsql/param#pg_default_service_dest) 为 `pgbouncer` 时，`max_connections` 设为 500
- 当流量直连 PostgreSQL 时，`max_connections` 设为 1000
- 可通过 [`pg_max_conn`](/docs/pgsql/param#pg_max_conn) 参数覆盖

### 内存配置

OLTP 模板的内存分配策略：

| 参数 | 计算公式 | 说明 |
|:-----|:---------|:-----|
| `shared_buffers` | 内存 × `pg_shared_buffer_ratio` | 默认比例 0.25 |
| `maintenance_work_mem` | shared_buffers × 25% | 用于 VACUUM、CREATE INDEX |
| `work_mem` | 64MB - 1GB | 根据 shared_buffers/max_connections 计算 |
| `effective_cache_size` | 总内存 - shared_buffers | 可用于缓存的预估内存 |
{.full-width}

**work_mem 计算逻辑**：
```
work_mem = min(max(shared_buffers / max_connections, 64MB), 1GB)
```

这确保每个连接有足够的排序/哈希内存，但不会过度分配。

### 并行查询

OLTP 模板对并行查询做了适度限制，以避免并行查询抢占过多资源影响其他事务：

```yaml
max_worker_processes: cpu + 8 (最小16)
max_parallel_workers: 50% × cpu (最小2)
max_parallel_workers_per_gather: 20% × cpu (2-8)
max_parallel_maintenance_workers: 33% × cpu (最小2)
```

同时提高了并行查询的成本估算，让优化器倾向于串行执行：

```yaml
parallel_setup_cost: 2000      # 默认值 1000 的两倍
parallel_tuple_cost: 0.2       # 默认值 0.1 的两倍
min_parallel_table_scan_size: 32MB   # 默认值 8MB 的四倍，倾向于不使用并行扫描
min_parallel_index_scan_size: 2MB    # 默认值 512kB 的四倍，倾向于不使用并行扫描
```

### WAL 配置

```yaml
min_wal_size: 磁盘/20 (最大200GB)
max_wal_size: 磁盘/5 (最大2000GB)
max_slot_wal_keep_size: 磁盘×3/10 (最大3000GB)
wal_buffers: 16MB
wal_writer_delay: 20ms
wal_writer_flush_after: 1MB
commit_delay: 20
commit_siblings: 10
checkpoint_timeout: 15min
checkpoint_completion_target: 0.80
```

这些设置平衡了数据安全性和写入性能。

### Vacuum 配置

```yaml
vacuum_cost_delay: 20ms         # 每轮 vacuum 后休眠
vacuum_cost_limit: 2000         # 每轮 vacuum 的代价上限
autovacuum_max_workers: 3
autovacuum_naptime: 1min
autovacuum_vacuum_scale_factor: 0.08    # 8% 表变化触发 vacuum
autovacuum_analyze_scale_factor: 0.04   # 4% 表变化触发 analyze
autovacuum_freeze_max_age: 1000000000
```

OLTP 模板使用保守的 vacuum 设置，避免 vacuum 操作影响在线事务性能。

### 查询优化

```yaml
random_page_cost: 1.1           # SSD 优化
effective_io_concurrency: 200   # SSD 并发 IO
default_statistics_target: 400  # 统计信息精度
```

这些设置让优化器能够生成更好的查询计划。

### 日志与监控

```yaml
log_min_duration_statement: 100         # 记录超过 100ms 的慢查询
log_statement: ddl                      # 记录 DDL 语句
log_checkpoints: on
log_lock_waits: on
log_temp_files: 1024                    # 记录超过 1MB 的临时文件
log_autovacuum_min_duration: 1s
track_io_timing: on
track_functions: all
track_activity_query_size: 8192
```

### 客户端超时

```yaml
deadlock_timeout: 50ms
idle_in_transaction_session_timeout: 10min
```

10 分钟的空闲事务超时可以防止长时间持有锁的僵尸事务。

### 扩展配置

```yaml
shared_preload_libraries: 'pg_stat_statements, auto_explain'

# auto_explain
auto_explain.log_min_duration: 1s
auto_explain.log_analyze: on
auto_explain.log_verbose: on
auto_explain.log_timing: on
auto_explain.log_nested_statements: true

# pg_stat_statements
pg_stat_statements.max: 10000
pg_stat_statements.track: all
pg_stat_statements.track_utility: off
pg_stat_statements.track_planning: off
```


----------------

## 与其他模板的对比

| 特性 | [**OLTP**](/docs/pgsql/template/oltp/) | [**OLAP**](/docs/pgsql/template/olap/) | [**CRIT**](/docs/pgsql/template/crit/) |
|:-----|:-----|:-----|:-----|
| max_connections | 500-1000 | 500 | 500-1000 |
| work_mem | 64MB-1GB | 64MB-8GB | 64MB-1GB |
| 并行查询 | 适度限制 | 激进启用 | 禁用 |
| vacuum 激进度 | 保守 | 激进 | 保守 |
| 事务超时 | 10min | 禁用 | 1min |
| 慢查询阈值 | 100ms | 1000ms | 100ms |
{.full-width}

### 为什么选择 OLTP 而非 OLAP？

- 您的查询大多数是简单的点查和范围查询
- 事务响应时间要求在毫秒级
- 有大量并发连接
- 不需要执行复杂的分析查询

### 为什么选择 OLTP 而非 CRIT？

- 可以接受极小概率的数据丢失（异步复制）
- 不需要完整的审计日志
- 希望获得更好的写入性能


----------------

## 性能调优建议

### 连接池

对于高并发场景，强烈建议使用 PgBouncer 连接池：

```yaml
pg-oltp:
  vars:
    pg_default_service_dest: pgbouncer  # 默认值
    pgbouncer_poolmode: transaction     # 事务级池化
```

### 只读分离

使用只读从库分担读取负载：

```yaml
pg-oltp:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica }
```

### 监控指标

关注以下监控指标：

- **连接数**：活跃连接数、等待连接数
- **事务率**：TPS、提交/回滚比例
- **响应时间**：查询延迟百分位（p50/p95/p99）
- **锁等待**：锁等待时间、死锁次数
- **复制延迟**：从库延迟时间和字节数


----------------

## 参考资料

- [**`pg_conf`**](/docs/pgsql/param#pg_conf)：PostgreSQL 配置模板选择参数
- [**`node_tune`**](/docs/node/param#node_tune)：操作系统调优模板，应与 `pg_conf` 配套
- [**OLAP 模板**](/docs/pgsql/template/olap/)：分析处理模板对比
- [**CRIT 模板**](/docs/pgsql/template/crit/)：关键业务模板对比
- [**TINY 模板**](/docs/pgsql/template/tiny/)：微型实例模板对比
- [集群配置](/docs/pgsql/config/cluster)：PostgreSQL 集群类型配置
- [高可用](/docs/concept/ha)：高可用架构设计

