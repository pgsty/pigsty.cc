---
title: "pg_freespacemap"
linkTitle: "pg_freespacemap"
description: "检查自由空间映射的内容（FSM）"
weight: 6950
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgfreespacemap.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgfreespacemap.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgfreespacemap.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_freespacemap`**](/ext/e/pg_freespacemap) | `1.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6950  | [**`pg_freespacemap`**](/ext/e/pg_freespacemap) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_relusage`](/ext/e/pg_relusage) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`amcheck`](/ext/e/amcheck) [`toastinfo`](/ext/e/toastinfo) [`pageinspect`](/ext/e/pageinspect) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pg_freespacemap;
```




## 用法

> [pg_freespacemap: 检查空闲空间映射](https://www.postgresql.org/docs/current/pgfreespacemap.html)

pg_freespacemap 提供函数来检查空闲空间映射（FSM），FSM 追踪关系中每个页面的可用空间。

### 函数

**单个页面的空闲空间：**

```sql
SELECT pg_freespace('my_table'::regclass, 0);  -- 块 0
```

**所有页面的空闲空间：**

```sql
SELECT * FROM pg_freespace('my_table'::regclass);

 blkno | avail
-------+-------
     0 |     0
     1 |     0
     2 |   224
     3 |  3456
     4 |  8160
```

### 示例：表膨胀分析

```sql
-- 有大量空闲空间的页面
SELECT blkno, avail
FROM pg_freespace('my_table'::regclass)
WHERE avail > 1000
ORDER BY avail DESC;

-- 关系中的总空闲空间
SELECT sum(avail) AS total_free_bytes,
       count(*) AS total_pages,
       count(*) FILTER (WHERE avail > 0) AS pages_with_free_space
FROM pg_freespace('my_table'::regclass);
```

### 注意事项

- FSM 值四舍五入到 `BLCKSZ` 的 1/256（通常为 32 字节）
- FSM 不会完全实时更新；值可能滞后于实际空闲空间
- 对于索引，仅追踪完全未使用的页面
- 访问限制为超级用户和 `pg_stat_scan_tables` 成员
