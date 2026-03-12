---
title: "moddatetime"
linkTitle: "moddatetime"
description: "跟踪最后修改时间"
weight: 4883
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-MODDATETIME">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-MODDATETIME</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-MODDATETIME</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`moddatetime`**](/ext/e/moddatetime) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4883  | [**`moddatetime`**](/ext/e/moddatetime) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) [`count_distinct`](/ext/e/count_distinct) [`omnisketch`](/ext/e/omnisketch) [`ddsketch`](/ext/e/ddsketch) [`tdigest`](/ext/e/tdigest) [`first_last_agg`](/ext/e/first_last_agg) |
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
CREATE EXTENSION moddatetime;
```



## 用法

> [moddatetime: 记录修改时间戳](https://www.postgresql.org/docs/current/contrib-spi.html)

提供在行被修改时存储当前时间戳的触发器函数。

```sql
CREATE EXTENSION moddatetime;
```

### 触发器函数

| 函数 | 说明 |
|---|---|
| `moddatetime()` | 在 UPDATE 时将当前时间戳存储到指定列 |

参数：要更新的 `timestamp` 或 `timestamp with time zone` 列名。

### 示例

```sql
CREATE TABLE documents (
  id serial PRIMARY KEY,
  content text,
  modified_at timestamp with time zone
);

CREATE TRIGGER set_modified
  BEFORE UPDATE ON documents
  FOR EACH ROW
  EXECUTE FUNCTION moddatetime('modified_at');

UPDATE documents SET content = 'new content' WHERE id = 1;
-- modified_at 自动设置为当前时间戳
```
