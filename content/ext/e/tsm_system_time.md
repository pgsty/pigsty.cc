---
title: "tsm_system_time"
linkTitle: "tsm_system_time"
description: "接受毫秒数限制的 TABLESAMPLE 方法"
weight: 4890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/tsm-system-time.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/tsm-system-time.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/tsm-system-time.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`tsm_system_time`**](/ext/e/tsm_system_time) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4890  | [**`tsm_system_time`**](/ext/e/tsm_system_time) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`random`](/ext/e/random) [`permuteseq`](/ext/e/permuteseq) [`tsm_system_rows`](/ext/e/tsm_system_rows) [`pg_crash`](/ext/e/pg_crash) [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`pg_hashids`](/ext/e/pg_hashids) |
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
CREATE EXTENSION tsm_system_time;
```



## 用法

> [tsm_system_time: 基于时间的 TABLESAMPLE 采样方法](https://www.postgresql.org/docs/current/tsm-system-time.html)

提供 `SYSTEM_TIME` 表采样方法，在指定时间限制内返回尽可能多的行。

```sql
CREATE EXTENSION tsm_system_time;
```

### TABLESAMPLE 方法

`SYSTEM_TIME(milliseconds float)` -- 读取表的最大时间（毫秒）。

### 示例

```sql
-- 采样 1 秒内可读取的行
SELECT * FROM my_table TABLESAMPLE SYSTEM_TIME(1000);

-- 使用 500 毫秒预算从大表中采样
SELECT count(*) FROM large_table TABLESAMPLE SYSTEM_TIME(500);
```

执行块级采样（非行级）。如果整个表可以在时间限制内读完，则返回所有行。不支持 `REPEATABLE`。
