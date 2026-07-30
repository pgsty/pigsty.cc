---
title: "btree_gin"
linkTitle: "btree_gin"
description: "用GIN索引常见数据类型"
weight: 4950
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/btree-gin.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/btree-gin.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/btree-gin.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`btree_gin`**](/ext/e/btree_gin) | `1.3` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4950  | [**`btree_gin`**](/ext/e/btree_gin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`ora_btree_gin`](/ext/e/ora_btree_gin) [`btree_gist`](/ext/e/btree_gist) [`parray_gin`](/ext/e/parray_gin) [`intarray`](/ext/e/intarray) [`rum`](/ext/e/rum) [`bloom`](/ext/e/bloom) [`db2fce`](/ext/e/db2fce) [`orafce`](/ext/e/orafce) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION btree_gin;
```




## 用法

> [btree_gin: B 树等价的 GIN 操作符类](https://www.postgresql.org/docs/current/btree-gin.html)

为通常仅支持 B 树索引的数据类型提供 GIN 索引操作符类。适用于将 GIN 可索引列和 B 树可索引列组合的多列 GIN 索引。

```sql
CREATE EXTENSION btree_gin;
```

### 支持的数据类型

`int2`、`int4`、`int8`、`float4`、`float8`、`numeric`、`timestamp with time zone`、`timestamp without time zone`、`time with time zone`、`time without time zone`、`date`、`interval`、`oid`、`money`、`char`、`varchar`、`text`、`bytea`、`macaddr`、`macaddr8`、`inet`、`cidr`、`uuid`、`bit`、`varbit`、`bool`、`name`、`bpchar` 以及所有 `enum` 类型。

### 示例

```sql
-- 整数列上的 GIN 索引
CREATE INDEX idx ON test USING GIN (a);
SELECT * FROM test WHERE a < 10;

-- 将全文搜索与标量过滤结合的多列 GIN 索引
CREATE INDEX idx ON articles USING GIN (body_tsvector, category);
SELECT * FROM articles
WHERE body_tsvector @@ to_tsquery('PostgreSQL')
  AND category = 'tech';
```

注意：btree_gin 在单列查询时不会优于标准 B 树索引。其主要优势在于将标量列与 GIN 原生列（如 tsvector 或数组）组合到单个多列索引中。
