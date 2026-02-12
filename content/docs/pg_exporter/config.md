---
title: 配置参考
weight: 5630
icon: fa-solid fa-code
description: PG Exporter 的配置选项与采集器定义
categories: [参考]
---

PG Exporter 使用强大而灵活的配置系统，允许您定义自定义指标、控制采集行为并优化性能。本指南涵盖了从基础设置到高级自定义的所有配置方面。


--------

## 指标采集器

PG Exporter 使用声明式的 YAML 配置系统，为指标采集提供极大的灵活性和控制能力。本指南涵盖了为您的特定监控需求配置 PG Exporter 的所有方面。


--------

## 配置概述

PG Exporter 的配置以 **采集器** 为核心 —— 每个采集器是一个独立的指标查询及其关联元数据。配置可以是：

- 单一的 YAML 文件（`pg_exporter.yml`）
- 包含多个 YAML 文件的目录（按字母顺序合并）
- 通过命令行或环境变量指定的自定义路径


--------

## 配置加载

PG Exporter 按以下顺序搜索配置：

1. 命令行参数：`--config=/path/to/config`
2. 环境变量：`PG_EXPORTER_CONFIG=/path/to/config`
3. 当前目录：`./pg_exporter.yml`
4. 系统配置文件：`/etc/pg_exporter.yml`
5. 系统配置目录：`/etc/pg_exporter/`

目录模式说明：

- 仅加载该目录下的 `.yml` / `.yaml` 文件（非递归）
- 按文件名字典序合并；同名采集器以后加载者覆盖先前定义
- 如果目录中有 YAML 文件但全部解析失败，导出器会直接返回错误而不是静默忽略


--------

## 采集器结构

每个采集器是 YAML 配置中的一个顶级对象，具有唯一名称和多种属性：

```yaml
collector_branch_name:           # 此采集器的唯一标识符
  name: metric_namespace         # 指标前缀（默认为分支名称）
  desc: "采集器描述"             # 人类可读的描述
  query: |                       # 要执行的 SQL 查询
    SELECT column1, column2
    FROM table

  # 执行控制
  ttl: 10                        # 缓存生存时间（秒）
  timeout: 0.1                   # 查询超时（秒）
  fatal: false                   # 如果为 true，失败将导致整个抓取失败
  skip: false                    # 如果为 true，禁用此采集器

  # 版本兼容性
  min_version: 100000            # 最小 PostgreSQL 版本（包含）
  max_version: 999999            # 最大 PostgreSQL 版本（不包含）

  # 执行标签
  tags: [cluster, primary]       # 执行条件

  # 谓词查询（可选）
  predicate_queries:
    - name: "check_function"
      predicate_query: |
        SELECT EXISTS (...)

  # 指标定义
  metrics:
    - column_name:
        usage: GAUGE             # GAUGE、COUNTER、LABEL 或 DISCARD
        rename: metric_name      # 可选：重命名指标
        description: "帮助文本"   # 指标描述
        default: 0               # NULL 时的默认值
        scale: 1000              # 值的缩放因子
```

配置校验约束（`v1.2.0`）：

- 每个 `metrics` 列表项必须且只能定义一个列映射
- 每个采集器至少要有一个 `GAUGE` 或 `COUNTER` 列
- `usage` 仅支持 `GAUGE` / `COUNTER` / `LABEL` / `DISCARD`
- 指标名、标签名会在加载阶段进行 Prometheus 规则校验，非法配置会直接报错


--------

## 核心配置元素

### 采集器分支名称

顶级键在整个配置中唯一标识一个采集器：

```yaml
pg_stat_database:  # 必须唯一
  name: pg_db      # 实际的指标命名空间
```

### 查询定义

检索指标的 SQL 查询：

```yaml
query: |
  SELECT
    datname,
    numbackends,
    xact_commit,
    xact_rollback,
    blks_read,
    blks_hit
  FROM pg_stat_database
  WHERE datname NOT IN ('template0', 'template1')
```

### 指标类型

查询结果中的每一列必须映射到一个指标类型：

| 用途        | 描述               | 示例    |
|-----------|------------------|-------|
| `GAUGE`   | 可上下波动的瞬时值        | 当前连接数 |
| `COUNTER` | 只增不减的累计值         | 总事务数  |
| `LABEL`   | 用作 Prometheus 标签 | 数据库名称 |
| `DISCARD` | 忽略此列             | 内部值   |
{.full-width}

### 缓存控制（TTL）

`ttl` 参数控制结果缓存：

```yaml
# 快速查询 - 最小缓存
pg_stat_activity:
  ttl: 1  # 缓存 1 秒

# 昂贵查询 - 较长缓存
pg_table_bloat:
  ttl: 3600  # 缓存 1 小时
```

最佳实践：
- 将 TTL 设置为小于您的抓取间隔
- 对昂贵的查询使用较长的 TTL
- TTL 为 0 表示禁用缓存

### 超时控制

防止查询运行时间过长：

```yaml
timeout: 0.1   # 默认 100ms
timeout: 1.0   # 复杂查询使用 1 秒
timeout: -1    # 禁用超时（不推荐）
```

### 版本兼容性

控制哪些 PostgreSQL 版本可以运行此采集器：

```yaml
min_version: 100000  # PostgreSQL 10.0+
max_version: 140000  # 低于 PostgreSQL 14.0
```

版本号使用 PostgreSQL 内部 `server_version_num` 规则：

- `100000` 表示 10.0
- `130200` 表示 13.2
- `160100` 表示 16.1
- `90600` 表示 9.6（Legacy 配置场景）


--------

## 标签系统

标签控制采集器的执行时机和位置：

### 内置标签

| 标签                    | 描述                   |
|-----------------------|----------------------|
| `cluster`             | 每个 PostgreSQL 集群执行一次 |
| `primary` / `master`  | 仅在主服务器上执行            |
| `standby` / `replica` | 仅在从服务器上执行            |
| `pgbouncer`           | 仅用于 pgBouncer 连接     |
{.full-width}

### 前缀标签

| 前缀 | 示例 | 描述 |
|------|------|------|
| `dbname:` | `dbname:postgres` | 仅在特定数据库上执行 |
| `username:` | `username:monitor` | 仅使用特定用户时执行 |
| `extension:` | `extension:pg_stat_statements` | 仅当扩展已安装时执行 |
| `schema:` | `schema:public` | 仅当模式存在时执行 |
| `not:` | `not:slow` | 当导出器没有该标签时执行 |
{.full-width}

### 自定义标签

向导出器传递自定义标签：

```bash
pg_exporter --tag="production,critical"
```

然后在配置中使用：

```yaml
expensive_metrics:
  tags: [critical]  # 仅在有 'critical' 标签时运行
```


--------

## 谓词查询

在执行主查询之前进行条件检查：

```yaml
predicate_queries:
  - name: "检查 pg_stat_statements"
    predicate_query: |
      SELECT EXISTS (
        SELECT 1 FROM pg_extension
        WHERE extname = 'pg_stat_statements'
      )
```

只有当所有谓词返回 `true` 时，主查询才会执行。


--------

## 指标定义

### 基本定义

```yaml
metrics:
  - numbackends:
      usage: GAUGE
      description: "已连接的后端进程数"
```

### 高级选项

```yaml
metrics:
  - checkpoint_write_time:
      usage: COUNTER
      rename: write_time        # 重命名指标
      scale: 0.001              # 将毫秒转换为秒
      default: 0                # NULL 时使用 0
      description: "检查点写入时间（秒）"
```


--------

## 采集器组织

PG Exporter 自带预先组织好的采集器：

| 范围 | 类别 | 描述 |
|------|------|------|
| 0xx | 文档 | 示例和文档 |
| 1xx | 基础 | 服务器信息、设置、元数据 |
| 2xx | 复制 | 复制、槽位、接收器 |
| 3xx | 持久化 | I/O、检查点、WAL |
| 4xx | 活动 | 连接、锁、查询 |
| 5xx | 进度 | Vacuum、索引创建进度 |
| 6xx | 数据库 | 每数据库统计 |
| 7xx | 对象 | 表、索引、函数 |
| 8xx | 可选 | 昂贵/可选指标 |
| 9xx | pgBouncer | 连接池指标 |
| 10xx+ | 扩展 | 扩展特定指标 |
{.full-width}


--------

## 实际示例

### 简单的 Gauge 采集器

```yaml
pg_connections:
  desc: "当前数据库连接"
  query: |
    SELECT
      count(*) as total,
      count(*) FILTER (WHERE state = 'active') as active,
      count(*) FILTER (WHERE state = 'idle') as idle,
      count(*) FILTER (WHERE state = 'idle in transaction') as idle_in_transaction
    FROM pg_stat_activity
    WHERE pid != pg_backend_pid()
  ttl: 1
  metrics:
    - total: {usage: GAUGE, description: "总连接数"}
    - active: {usage: GAUGE, description: "活跃连接数"}
    - idle: {usage: GAUGE, description: "空闲连接数"}
    - idle_in_transaction: {usage: GAUGE, description: "事务中空闲连接数"}
```

### 带标签的 Counter

```yaml
pg_table_stats:
  desc: "表统计信息"
  query: |
    SELECT
      schemaname,
      tablename,
      n_tup_ins,
      n_tup_upd,
      n_tup_del,
      n_live_tup,
      n_dead_tup
    FROM pg_stat_user_tables
  ttl: 10
  metrics:
    - schemaname: {usage: LABEL}
    - tablename: {usage: LABEL}
    - n_tup_ins: {usage: COUNTER, description: "插入的元组数"}
    - n_tup_upd: {usage: COUNTER, description: "更新的元组数"}
    - n_tup_del: {usage: COUNTER, description: "删除的元组数"}
    - n_live_tup: {usage: GAUGE, description: "活跃元组数"}
    - n_dead_tup: {usage: GAUGE, description: "死亡元组数"}
```

### 版本特定采集器

```yaml
pg_wal_stats:
  desc: "WAL 统计信息（PG 14+）"
  min_version: 140000
  query: |
    SELECT
      wal_records,
      wal_bytes,
      wal_buffers_full,
      wal_write_time,
      wal_sync_time
    FROM pg_stat_wal
  ttl: 10
  tags: [cluster]
  metrics:
    - wal_records: {usage: COUNTER}
    - wal_bytes: {usage: COUNTER}
    - wal_buffers_full: {usage: COUNTER}
    - wal_write_time: {usage: COUNTER, scale: 0.001}
    - wal_sync_time: {usage: COUNTER, scale: 0.001}
```

### 扩展依赖采集器

```yaml
pg_stat_statements_metrics:
  desc: "查询性能统计"
  tags: [extension:pg_stat_statements]
  query: |
    SELECT
      sum(calls) as total_calls,
      sum(total_exec_time) as total_time,
      sum(mean_exec_time * calls) / sum(calls) as mean_time
    FROM pg_stat_statements
  ttl: 60
  metrics:
    - total_calls: {usage: COUNTER}
    - total_time: {usage: COUNTER, scale: 0.001}
    - mean_time: {usage: GAUGE, scale: 0.001}
```


--------

## 自定义采集器

### 创建自己的指标

1. 在配置目录中创建新的 YAML 文件：

```yaml
# /etc/pg_exporter/custom_metrics.yml
app_metrics:
  desc: "应用特定指标"
  query: |
    SELECT
      (SELECT count(*) FROM users WHERE active = true) as active_users,
      (SELECT count(*) FROM orders WHERE created_at > NOW() - '1 hour'::interval) as recent_orders,
      (SELECT avg(processing_time) FROM jobs WHERE completed_at > NOW() - '5 minutes'::interval) as avg_job_time
  ttl: 30
  metrics:
    - active_users: {usage: GAUGE, description: "当前活跃用户数"}
    - recent_orders: {usage: GAUGE, description: "最近一小时的订单数"}
    - avg_job_time: {usage: GAUGE, description: "平均作业处理时间"}
```

2. 测试您的采集器：

```bash
pg_exporter --explain --config=/etc/pg_exporter/
```

### 条件指标

使用谓词查询实现条件指标：

```yaml
partition_metrics:
  desc: "分区表指标"
  predicate_queries:
    - name: "检查是否使用了分区"
      predicate_query: |
        SELECT EXISTS (
          SELECT 1 FROM pg_class
          WHERE relkind = 'p' LIMIT 1
        )
  query: |
    SELECT
      parent.relname as parent_table,
      count(*) as partition_count,
      sum(pg_relation_size(child.oid)) as total_size
    FROM pg_inherits
    JOIN pg_class parent ON parent.oid = pg_inherits.inhparent
    JOIN pg_class child ON child.oid = pg_inherits.inhrelid
    WHERE parent.relkind = 'p'
    GROUP BY parent.relname
  ttl: 300
  metrics:
    - parent_table: {usage: LABEL}
    - partition_count: {usage: GAUGE}
    - total_size: {usage: GAUGE}
```


--------

## 性能优化

### 查询优化技巧

1. **使用适当的 TTL 值**：
   - 快速查询：1-10 秒
   - 中等查询：10-60 秒
   - 昂贵查询：300-3600 秒

2. **设置合理的超时**：
   - 默认：100ms
   - 复杂查询：500ms-1s
   - 生产环境中不要禁用超时

3. **使用集群级标签**：
   ```yaml
   tags: [cluster]  # 每集群运行一次，而不是每数据库
   ```

4. **禁用昂贵的采集器**：
   ```yaml
   pg_table_bloat:
     skip: true  # 如果不需要则禁用
   ```

### 监控采集器性能

检查采集器执行统计：

```bash
# 查看采集器统计
curl http://localhost:9630/stat

# 检查哪些采集器较慢
curl http://localhost:9630/metrics | grep pg_exporter_collector_duration
```


--------

## 配置故障排查

### 验证配置

```bash
# 干运行 - 显示解析后的配置
pg_exporter --dry-run

# 解释 - 显示计划的查询
pg_exporter --explain
```

### 常见问题

| 问题 | 解决方案 |
|------|----------|
| 指标缺失 | 检查标签和版本兼容性 |
| 抓取缓慢 | 增加 TTL、添加超时、禁用昂贵查询 |
| 内存使用高 | 减少结果集大小，使用 LIMIT |
| 权限错误 | 验证监控用户的查询权限 |
{.full-width}

### 调试日志

启用调试日志进行故障排查：

```bash
pg_exporter --log.level=debug
```
