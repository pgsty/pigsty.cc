---
title: "pgstattuple"
linkTitle: "pgstattuple"
description: "显示元组级统计信息"
weight: 6970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgstattuple.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgstattuple.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgstattuple.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgstattuple`**](/ext/e/pgstattuple) | `1.5` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6970  | [**`pgstattuple`**](/ext/e/pgstattuple) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pageinspect`](/ext/e/pageinspect) [`pg_freespacemap`](/ext/e/pg_freespacemap) [`pg_visibility`](/ext/e/pg_visibility) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_checksums`](/ext/e/pg_checksums) [`pg_catcheck`](/ext/e/pg_catcheck) [`amcheck`](/ext/e/amcheck) [`toastinfo`](/ext/e/toastinfo) |
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
CREATE EXTENSION pgstattuple;
```




## 用法

> [pgstattuple: 元组级别统计](https://www.postgresql.org/docs/current/pgstattuple.html)

pgstattuple 提供函数来获取表和索引的元组级别统计信息，包括死元组计数和空闲空间指标。

### 表统计

```sql
SELECT * FROM pgstattuple('my_table');

 table_len          | 81920
 tuple_count        | 1000
 tuple_len          | 72000
 tuple_percent      | 87.89
 dead_tuple_count   | 50
 dead_tuple_len     | 3600
 dead_tuple_percent | 4.39
 free_space         | 6320
 free_percent       | 7.71
```

**近似（更快）版本**，使用可见性映射和 FSM：

```sql
SELECT * FROM pgstattuple_approx('my_table');
-- 返回：table_len、scanned_percent、approx_tuple_count、approx_tuple_len、
--       dead_tuple_count、dead_tuple_len、approx_free_space 等
```

### B-Tree 索引统计

```sql
SELECT * FROM pgstatindex('my_index');

 version            | 4
 tree_level         | 2
 index_size         | 1327104
 root_block_no      | 3
 internal_pages     | 1
 leaf_pages         | 160
 empty_pages        | 0
 deleted_pages      | 0
 avg_leaf_density   | 89.27
 leaf_fragmentation | 0
```

### GIN 索引统计

```sql
SELECT * FROM pgstatginindex('my_gin_index');
-- 返回：version、pending_pages、pending_tuples
```

### Hash 索引统计

```sql
SELECT * FROM pgstathashindex('my_hash_index');
-- 返回：version、bucket_pages、overflow_pages、bitmap_pages、
--       unused_pages、live_items、dead_tuples、free_percent
```

### 页面计数

```sql
SELECT pg_relpages('my_table');
```

### 访问权限

限制为超级用户和拥有 `pg_stat_scan_tables` 权限的角色。
