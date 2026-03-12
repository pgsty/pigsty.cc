---
title: "pg_stat_statements"
linkTitle: "pg_stat_statements"
description: "跟踪所有执行的 SQL 语句的计划和执行统计信息"
weight: 6990
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgstatstatements.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgstatstatements.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgstatstatements.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_statements`**](/ext/e/pg_stat_statements) | `1.11` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6990  | [**`pg_stat_statements`**](/ext/e/pg_stat_statements) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_track_settings`](/ext/e/pg_track_settings) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`auto_explain`](/ext/e/auto_explain) [`pg_profile`](/ext/e/pg_profile) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.11</span> | <span class="ext-badge ext-badge--avail">1.11</span> | <span class="ext-badge ext-badge--avail">1.11</span> | <span class="ext-badge ext-badge--avail">1.11</span> | <span class="ext-badge ext-badge--avail">1.11</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pg_stat_statements;
```




## 用法

> [pg_stat_statements: 追踪累积查询执行统计](https://www.postgresql.org/docs/current/pgstatstatements.html)

pg_stat_statements 追踪服务器执行的所有 SQL 语句的规划和执行统计信息。

### 查询统计信息

```sql
-- 按总执行时间排序的热点查询
SELECT query, calls, total_exec_time, mean_exec_time, rows
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;

-- 按共享缓冲区读取排序的 I/O 密集型查询
SELECT query, calls, shared_blks_read, shared_blks_hit,
       shared_blk_read_time
FROM pg_stat_statements
ORDER BY shared_blks_read DESC
LIMIT 10;

-- 扩展状态（释放次数、上次重置时间）
SELECT * FROM pg_stat_statements_info;
```

### 关键视图列

| 列名 | 类型 | 描述 |
|--------|------|-------------|
| `queryid` | bigint | 标识规范化查询的哈希值 |
| `query` | text | 代表性查询文本 |
| `calls` | bigint | 执行次数 |
| `total_exec_time` | double precision | 总执行时间（毫秒） |
| `mean_exec_time` | double precision | 平均执行时间（毫秒） |
| `rows` | bigint | 检索/影响的总行数 |
| `shared_blks_hit` | bigint | 共享缓冲区缓存命中数 |
| `shared_blks_read` | bigint | 从磁盘读取的共享块数 |
| `shared_blk_read_time` | double precision | 读取共享块的时间（毫秒） |
| `wal_records` | bigint | 生成的 WAL 记录数 |
| `wal_bytes` | numeric | 生成的 WAL 总量（字节） |
| `plans` | bigint | 规划次数 |
| `total_plan_time` | double precision | 总规划时间（毫秒） |

### 函数

```sql
-- 重置所有统计信息
SELECT pg_stat_statements_reset();

-- 重置特定查询的统计
SELECT pg_stat_statements_reset(0, 0, queryid)
FROM pg_stat_statements
WHERE query LIKE '%my_table%';

-- 仅重置最小/最大值
SELECT pg_stat_statements_reset(0, 0, 0, true);

-- 不带文本查询（更少 I/O）
SELECT * FROM pg_stat_statements(showtext := false);
```

### 配置

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pg_stat_statements.max` | 5000 | 最大追踪语句数（仅在服务器启动时） |
| `pg_stat_statements.track` | `top` | `top`、`all`（嵌套）或 `none` |
| `pg_stat_statements.track_utility` | `on` | 追踪实用命令 |
| `pg_stat_statements.track_planning` | `off` | 追踪规划统计 |
| `pg_stat_statements.save` | `on` | 跨服务器重启持久化 |

需要 `shared_preload_libraries = 'pg_stat_statements'` 和 `compute_query_id = on`。
