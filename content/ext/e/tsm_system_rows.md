---
title: "tsm_system_rows"
linkTitle: "tsm_system_rows"
description: "接受行数限制的 TABLESAMPLE 方法"
weight: 4910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/tsm-system-rows.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/tsm-system-rows.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/tsm-system-rows.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`tsm_system_rows`**](/ext/e/tsm_system_rows) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4910  | [**`tsm_system_rows`**](/ext/e/tsm_system_rows) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`random`](/ext/e/random) [`permuteseq`](/ext/e/permuteseq) [`tsm_system_time`](/ext/e/tsm_system_time) [`pg_crash`](/ext/e/pg_crash) [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`pg_hashids`](/ext/e/pg_hashids) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION tsm_system_rows;
```



## 用法

> [tsm_system_rows: 基于行数的 TABLESAMPLE 采样方法](https://www.postgresql.org/docs/current/tsm-system-rows.html)

提供 `SYSTEM_ROWS` 表采样方法，精确返回指定数量的行。

```sql
CREATE EXTENSION tsm_system_rows;
```

### TABLESAMPLE 方法

`SYSTEM_ROWS(count int)` -- 最大返回行数。

### 示例

```sql
-- 精确采样 100 行
SELECT * FROM my_table TABLESAMPLE SYSTEM_ROWS(100);

-- 快速预览大表中的 10 行
SELECT * FROM large_table TABLESAMPLE SYSTEM_ROWS(10);
```

执行块级采样（小样本可能出现聚集效应）。如果表中行数少于请求数量，则返回所有行。不支持 `REPEATABLE`。
