---
title: "pageinspect"
linkTitle: "pageinspect"
description: "检查数据库页面二进制内容"
weight: 6900
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pageinspect.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pageinspect.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pageinspect.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pageinspect`**](/ext/e/pageinspect) | `1.12` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6900  | [**`pageinspect`**](/ext/e/pageinspect) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`amcheck`](/ext/e/amcheck) [`pagevis`](/ext/e/pagevis) [`pg_visibility`](/ext/e/pg_visibility) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pgdd`](/ext/e/pgdd) [`pg_orphaned`](/ext/e/pg_orphaned) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.12</span> | <span class="ext-badge ext-badge--avail">1.12</span> | <span class="ext-badge ext-badge--avail">1.12</span> | <span class="ext-badge ext-badge--avail">1.12</span> | <span class="ext-badge ext-badge--avail">1.12</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pageinspect;
```




## 用法

> [pageinspect: 底层页面检查函数](https://www.postgresql.org/docs/current/pageinspect.html)

pageinspect 提供函数在底层检查数据库页面内容。适用于调试和教学目的。仅限超级用户使用。

### 通用函数

```sql
-- 读取原始页面（主分支）
SELECT get_raw_page('my_table', 0);

-- 从指定分支读取（main、fsm、vm、init）
SELECT get_raw_page('my_table', 'fsm', 0);

-- 页头信息
SELECT * FROM page_header(get_raw_page('my_table', 0));
-- 返回：lsn、checksum、flags、lower、upper、special、pagesize、version、prune_xid

-- 计算页面校验和
SELECT page_checksum(get_raw_page('my_table', 0), 0);
```

### 堆函数

```sql
-- 堆页面上的行指针和元组数据
SELECT * FROM heap_page_items(get_raw_page('my_table', 0));

-- 按属性拆分的元组数据
SELECT * FROM heap_page_item_attrs(get_raw_page('my_table', 0), 'my_table'::regclass);

-- 解码元组 infomask 标志
SELECT t_ctid, raw_flags, combined_flags
FROM heap_page_items(get_raw_page('my_table', 0)),
     LATERAL heap_tuple_infomask_flags(t_infomask, t_infomask2)
WHERE t_infomask IS NOT NULL;
```

### B-Tree 索引函数

```sql
-- 索引元页面
SELECT * FROM bt_metap('my_index');

-- 页面级统计
SELECT * FROM bt_page_stats('my_index', 1);

-- 多页面统计
SELECT * FROM bt_multi_page_stats('my_index', 1, 10);

-- 页面条目（索引条目）
SELECT itemoffset, ctid, itemlen, data FROM bt_page_items('my_index', 1);
```

### BRIN 索引函数

```sql
SELECT brin_page_type(get_raw_page('brin_idx', 0));
SELECT * FROM brin_metapage_info(get_raw_page('brin_idx', 0));
SELECT * FROM brin_revmap_data(get_raw_page('brin_idx', 2));
SELECT * FROM brin_page_items(get_raw_page('brin_idx', 5), 'brin_idx');
```

### GIN 索引函数

```sql
SELECT * FROM gin_metapage_info(get_raw_page('gin_idx', 0));
SELECT * FROM gin_page_opaque_info(get_raw_page('gin_idx', 2));
SELECT * FROM gin_leafpage_items(get_raw_page('gin_idx', 2));
```

### GiST 索引函数

```sql
SELECT * FROM gist_page_opaque_info(get_raw_page('gist_idx', 2));
SELECT * FROM gist_page_items(get_raw_page('gist_idx', 0), 'gist_idx');
SELECT * FROM gist_page_items_bytea(get_raw_page('gist_idx', 0));
```

### Hash 索引函数

```sql
SELECT hash_page_type(get_raw_page('hash_idx', 0));
SELECT * FROM hash_page_stats(get_raw_page('hash_idx', 1));
SELECT * FROM hash_page_items(get_raw_page('hash_idx', 1));
SELECT * FROM hash_bitmap_info('hash_idx', 2052);
SELECT * FROM hash_metapage_info(get_raw_page('hash_idx', 0));
```
