---
title: "bool_plperlu"
linkTitle: "bool_plperlu"
description: "在 bool 和 plperlu 之间转换"
weight: 3271
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/plperl.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/plperl.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/plperl.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plperlu`**](/ext/e/plperlu) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3270  | [**`plperlu`**](/ext/e/plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3271  | [**`bool_plperlu`**](/ext/e/bool_plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3272  | [**`jsonb_plperlu`**](/ext/e/jsonb_plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3273  | [**`hstore_plperlu`**](/ext/e/hstore_plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plperlu`](/ext/e/plperlu) [`plperl`](/ext/e/plperl) [`bool_plperl`](/ext/e/bool_plperl) [`plpgsql`](/ext/e/plpgsql) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) |
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
CREATE EXTENSION bool_plperlu;
```



## 用法

> [bool_plperlu: bool 与不受信 PL/Perl 之间的类型转换](https://www.postgresql.org/docs/current/plperl.html)

为不受信 PL/Perl 提供 `bool` 类型的转换支持。加载后，PostgreSQL 的 `boolean` 值会自动转换为 Perl 原生布尔表示（而非字符串），反之亦然。

```sql
CREATE EXTENSION bool_plperlu;

CREATE FUNCTION check_flag_u(val boolean) RETURNS text
LANGUAGE plperlu TRANSFORM FOR TYPE boolean AS $$
  # val 是 Perl 原生布尔值（1 或 undef），而非字符串
  if ($_[0]) {
    return "flag is set";
  }
  return "flag is not set";
$$;

SELECT check_flag_u(true);   -- flag is set
SELECT check_flag_u(false);  -- flag is not set
```
