---
title: "pg_buffercache"
linkTitle: "pg_buffercache"
description: "检查共享缓冲区缓存"
weight: 6930
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgbuffercache.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgbuffercache.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgbuffercache.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_buffercache`**](/ext/e/pg_buffercache) | `1.5` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6930  | [**`pg_buffercache`**](/ext/e/pg_buffercache) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_repack`](/ext/e/pg_repack) [`pgfincore`](/ext/e/pgfincore) [`pgcozy`](/ext/e/pgcozy) [`pg_prewarm`](/ext/e/pg_prewarm) [`pgmeminfo`](/ext/e/pgmeminfo) [`pg_squeeze`](/ext/e/pg_squeeze) [`old_snapshot`](/ext/e/old_snapshot) [`system_stats`](/ext/e/system_stats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pg_buffercache;
```




## 用法

> [pg_buffercache: 检查共享缓冲区缓存](https://www.postgresql.org/docs/current/pgbuffercache.html)

pg_buffercache 提供视图和函数来实时检查 PostgreSQL 共享缓冲区缓存中存储的内容。

### 视图

**`pg_buffercache`** -- 详细的每个缓冲区信息：

```sql
-- 按缓冲区使用量排名前 10 的关系
SELECT n.nspname, c.relname, count(*) AS buffers
FROM pg_buffercache b
JOIN pg_class c ON b.relfilenode = pg_relation_filenode(c.oid)
  AND b.reldatabase IN (0, (SELECT oid FROM pg_database WHERE datname = current_database()))
JOIN pg_namespace n ON n.oid = c.relnamespace
GROUP BY n.nspname, c.relname
ORDER BY 3 DESC
LIMIT 10;
```

列：`bufferid`、`relfilenode`、`reltablespace`、`reldatabase`、`relforknumber`、`relblocknumber`、`isdirty`、`usagecount`、`pinning_backends`。

### 汇总函数

```sql
-- 快速缓冲区缓存摘要（比视图开销更小）
SELECT * FROM pg_buffercache_summary();
--  buffers_used | buffers_unused | buffers_dirty | buffers_pinned | usagecount_avg

-- 按使用计数的缓冲区分布
SELECT * FROM pg_buffercache_usage_counts();
--  usage_count | buffers | dirty | pinned
```

### 驱逐函数（仅限超级用户，仅用于开发测试）

```sql
-- 按 ID 驱逐单个缓冲区
SELECT * FROM pg_buffercache_evict(42);

-- 驱逐某个关系的所有缓冲区
SELECT * FROM pg_buffercache_evict_relation('my_table'::regclass);

-- 驱逐所有未固定的缓冲区
SELECT * FROM pg_buffercache_evict_all();
```

### NUMA 视图

```sql
-- 共享缓冲区的 NUMA 节点映射
SELECT * FROM pg_buffercache_numa;
-- 返回：bufferid、os_page_num、numa_node
```

### 访问权限

限制为超级用户和拥有 `pg_monitor` 权限的角色。
