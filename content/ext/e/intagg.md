---
title: "intagg"
linkTitle: "intagg"
description: "整数聚合器和枚举器（过时）"
weight: 4970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/intagg.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/intagg.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/intagg.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`intagg`**](/ext/e/intagg) | `1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4970  | [**`intagg`**](/ext/e/intagg) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) [`count_distinct`](/ext/e/count_distinct) [`omnisketch`](/ext/e/omnisketch) [`ddsketch`](/ext/e/ddsketch) [`tdigest`](/ext/e/tdigest) [`first_last_agg`](/ext/e/first_last_agg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION intagg;
```



## 用法

> [intagg: 整数聚合器和枚举器（已过时）](https://www.postgresql.org/docs/current/intagg.html)

提供整数聚合器和枚举器。这些现在只是内置 `array_agg()` 和 `unnest()` 函数的封装。

```sql
CREATE EXTENSION intagg;
```

### 函数

| 函数 | 说明 |
|---|---|
| `int_array_aggregate(integer)` | 将整数聚合为数组（`array_agg()` 的封装） |
| `int_array_enum(integer[])` | 将数组展开为行（`unnest()` 的封装） |

### 示例

```sql
-- 将整数聚合为数组
SELECT id_left, int_array_aggregate(id_right) AS rights
FROM many_to_many
GROUP BY id_left;

-- 将整数数组展开为行
SELECT int_array_enum(ARRAY[1, 2, 3, 4]);
-- 返回: 1, 2, 3, 4（作为单独的行）
```

注意：此模块已过时。新代码请使用内置的 `array_agg()` 和 `unnest()` 函数。
