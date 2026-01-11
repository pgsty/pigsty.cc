---
title: 配置扩展
weight: 2206
description: 预加载扩展库与配置扩展参数
icon: fa-solid fa-gears
module: [PGSQL]
categories: [参考]
---

部分扩展需要预加载动态库或配置参数后才能使用，本节介绍如何配置扩展。


--------

## 预加载扩展

大多数扩展安装后可直接使用 `CREATE EXTENSION` 启用，但部分使用 PostgreSQL Hook 机制的扩展需要**预加载**。

预加载通过 `shared_preload_libraries` 参数指定，修改后需**重启数据库**生效。

### 需要预加载的扩展

以下是常见的需要预加载的扩展：

| 扩展 | 说明 |
|:-----|:-----|
| `timescaledb` | 时序数据库扩展，必须放在最前面 |
| `citus` | 分布式数据库扩展，必须放在最前面 |
| `pg_stat_statements` | SQL 语句统计，Pigsty 默认启用 |
| `auto_explain` | 自动记录慢查询执行计划，Pigsty 默认启用 |
| `pg_cron` | 定时任务调度 |
| `pg_net` | 异步 HTTP 请求 |
| `pg_tle` | 可信语言扩展 |
| `pgaudit` | 审计日志 |
| `pg_stat_kcache` | 内核统计信息 |
| `pg_squeeze` | 在线表空间回收 |
| `pgml` | PostgresML 机器学习 |
{.full-width}

完整列表请参阅 [扩展目录](https://pgext.cloud/zh/list)（带 `LOAD` 标记）。

### 预加载顺序

`shared_preload_libraries` 中扩展的加载顺序很重要：

- `timescaledb` 和 `citus` 必须放在**最前面**
- 如果同时使用，`citus` 应在 `timescaledb` 之前
- 统计类扩展应在 `pg_stat_statements` 之后，以使用相同的 query_id

```yaml
pg_libs: 'citus, timescaledb, pg_stat_statements, auto_explain'
```


--------

## 集群初始化时配置

在创建新集群时，使用 [`pg_libs`](/docs/pgsql/param#pg_libs) 参数指定预加载的扩展：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'
    pg_extensions: [ timescaledb, postgis, pgvector ]
```

`pg_libs` 的值将在集群初始化时写入 `shared_preload_libraries`。

### 默认值

[`pg_libs`](/docs/pgsql/param#pg_libs) 的默认值是 `pg_stat_statements, auto_explain`，这两个 Contrib 扩展提供基本的可观测性：

- `pg_stat_statements`：跟踪所有 SQL 语句的执行统计
- `auto_explain`：自动记录慢查询的执行计划


--------

## 已有集群修改配置

对于已初始化的集群，使用 `patronictl` 修改 `shared_preload_libraries`：

```bash
# 添加 timescaledb 到预加载库
pg edit-config pg-meta --force -p shared_preload_libraries='timescaledb, pg_stat_statements, auto_explain'

# 重启集群使配置生效
pg restart pg-meta
```

也可以直接修改 `postgresql.conf` 或使用 `ALTER SYSTEM`：

```sql
ALTER SYSTEM SET shared_preload_libraries = 'timescaledb, pg_stat_statements, auto_explain';
```

修改后需重启 PostgreSQL 服务生效。


--------

## 扩展参数配置

许多扩展有可配置的参数，可以在以下位置设置：

### 集群初始化时

使用 [`pg_parameters`](/docs/pgsql/param#pg_parameters) 参数指定：

```yaml
pg-meta:
  vars:
    pg_cluster: pg-meta
    pg_libs: 'pg_cron, pg_stat_statements, auto_explain'
    pg_parameters:
      cron.database_name: postgres           # pg_cron 使用的数据库
      pg_stat_statements.track: all          # 跟踪所有语句
      auto_explain.log_min_duration: 1000    # 记录超过 1 秒的查询
```

### 运行时修改

使用 `ALTER SYSTEM` 或 `patronictl`：

```sql
-- 修改参数
ALTER SYSTEM SET pg_stat_statements.track = 'all';

-- 重新加载配置
SELECT pg_reload_conf();
```

```bash
# 使用 patronictl 修改
pg edit-config pg-meta --force -p 'pg_stat_statements.track=all'
```


--------

## 注意事项

1. **预加载错误会阻止启动**：如果 `shared_preload_libraries` 中的扩展不存在或加载失败，PostgreSQL 将无法启动。确保扩展已正确安装后再添加预加载。

2. **修改需重启**：`shared_preload_libraries` 的修改需要重启 PostgreSQL 服务才能生效。

3. **部分功能可用**：某些扩展在不预加载的情况下可以部分使用，但完整功能需要预加载。

4. **查看当前配置**：使用以下命令查看当前的预加载库：

```sql
SHOW shared_preload_libraries;
```

