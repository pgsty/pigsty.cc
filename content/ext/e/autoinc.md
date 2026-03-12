---
title: "autoinc"
linkTitle: "autoinc"
description: "用于自动递增字段的函数"
weight: 4881
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-AUTOINC">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-AUTOINC</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-AUTOINC</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`autoinc`**](/ext/e/autoinc) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4881  | [**`autoinc`**](/ext/e/autoinc) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
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
CREATE EXTENSION autoinc;
```



## 用法

> [autoinc: 自增触发器函数](https://www.postgresql.org/docs/current/contrib-spi.html)

提供使用序列自增指定列的触发器函数。

```sql
CREATE EXTENSION autoinc;
```

### 触发器函数

| 函数 | 说明 |
|---|---|
| `autoinc()` | 在插入时（以及可选的更新时）使用序列自增列值 |

参数为（列名, 序列名）的配对。仅当初始值为零或 NULL 时才会替换该值。

### 示例

```sql
CREATE SEQUENCE next_id;
CREATE TABLE ids (id int4, idesc text);

CREATE TRIGGER ids_autoinc
  BEFORE INSERT ON ids
  FOR EACH ROW
  EXECUTE FUNCTION autoinc('id', 'next_id');

INSERT INTO ids (idesc) VALUES ('first');  -- id 自动从 next_id 序列分配

-- 多个自增列
CREATE TRIGGER multi_autoinc
  BEFORE INSERT ON my_table
  FOR EACH ROW
  EXECUTE FUNCTION autoinc('col1', 'seq1', 'col2', 'seq2');
```
