---
title: "refint"
linkTitle: "refint"
description: "实现引用完整性的函数"
weight: 4880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-REFINT">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-REFINT</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-REFINT</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`refint`**](/ext/e/refint) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4880  | [**`refint`**](/ext/e/refint) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`permuteseq`](/ext/e/permuteseq) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION refint;
```



## 用法

> [refint: 引用完整性触发器函数](https://www.postgresql.org/docs/current/contrib-spi.html)

提供用于实现引用完整性检查的触发器函数（大部分已被内置外键约束取代）。

```sql
CREATE EXTENSION refint;
```

### 触发器函数

| 函数 | 说明 |
|---|---|
| `check_primary_key()` | 检查引用表 -- 确保被引用行存在 |
| `check_foreign_key()` | 检查被引用表 -- 处理删除/更新时的级联操作 |

### check_primary_key

引用表上的触发器（`AFTER INSERT OR UPDATE`）。参数：引用列名、被引用表名、被引用列名。

```sql
CREATE TRIGGER check_fk
  AFTER INSERT OR UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION check_primary_key('customer_id', 'customers', 'id');
```

### check_foreign_key

被引用表上的触发器（`AFTER DELETE OR UPDATE`）。参数：引用表数量、操作（`cascade`、`restrict` 或 `setnull`）、主键列，然后是引用表和列的配对。

```sql
CREATE TRIGGER check_ref
  AFTER DELETE OR UPDATE ON customers
  FOR EACH ROW
  EXECUTE FUNCTION check_foreign_key(1, 'cascade', 'id', 'orders', 'customer_id');
```
