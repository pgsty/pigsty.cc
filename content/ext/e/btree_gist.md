---
title: "btree_gist"
linkTitle: "btree_gist"
description: "用GiST索引常见数据类型"
weight: 4940
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/btree-gist.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/btree-gist.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/btree-gist.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`btree_gist`**](/ext/e/btree_gist) | `1.7` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4940  | [**`btree_gist`**](/ext/e/btree_gist) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`btree_gin`](/ext/e/btree_gin) [`unaccent`](/ext/e/unaccent) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`pg_trgm`](/ext/e/pg_trgm) [`prefix`](/ext/e/prefix) [`citext`](/ext/e/citext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`emaj`](/ext/e/emaj) [`omni_auth`](/ext/e/omni_auth) [`periods`](/ext/e/periods) [`pgautofailover`](/ext/e/pgautofailover) [`powa`](/ext/e/powa) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION btree_gist;
```



## 用法

> [btree_gist: B 树等价的 GiST 操作符类](https://www.postgresql.org/docs/current/btree-gist.html)

为通常仅支持 B 树索引的数据类型提供 GiST 索引操作符类。支持将等值运算与范围运算结合使用的排除约束。

```sql
CREATE EXTENSION btree_gist;
```

### 支持的数据类型

`int2`、`int4`、`int8`、`float4`、`float8`、`numeric`、`timestamp with time zone`、`timestamp without time zone`、`time with time zone`、`time without time zone`、`date`、`interval`、`oid`、`money`、`char`、`varchar`、`text`、`bytea`、`bit`、`varbit`、`macaddr`、`macaddr8`、`inet`、`cidr`、`uuid`、`bool` 以及所有 `enum` 类型。

### 距离运算符

为数值和时间类型提供 `<->` 运算符，用于最近邻搜索。

### 示例

```sql
-- 整数列上的 GiST 索引
CREATE INDEX idx ON test USING GIST (a);
SELECT * FROM test WHERE a < 10;

-- 最近邻搜索
SELECT *, a <-> 42 AS dist FROM test ORDER BY a <-> 42 LIMIT 10;

-- 排除约束：每个笼子只能放一种动物
CREATE TABLE zoo (
  cage   integer,
  animal text,
  EXCLUDE USING GIST (cage WITH =, animal WITH <>)
);

INSERT INTO zoo VALUES (1, 'lion');    -- OK
INSERT INTO zoo VALUES (1, 'tiger');   -- ERROR: 冲突的键值
INSERT INTO zoo VALUES (2, 'tiger');   -- OK

-- 每个房间不重叠时间范围的排除约束
CREATE TABLE reservations (
  room int,
  during tsrange,
  EXCLUDE USING GIST (room WITH =, during WITH &&)
);
```
