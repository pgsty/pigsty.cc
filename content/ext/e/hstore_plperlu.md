---
title: "hstore_plperlu"
linkTitle: "hstore_plperlu"
description: "在 hstore 和 plperlu 之间转换适配类型"
weight: 3273
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

| **相关扩展** | [`plperlu`](/ext/e/plperlu) [`hstore_pllua`](/ext/e/hstore_pllua) [`hstore_plluau`](/ext/e/hstore_plluau) [`hstore_plperl`](/ext/e/hstore_plperl) [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`hstore`](/ext/e/hstore) [`plperl`](/ext/e/plperl) [`plpgsql`](/ext/e/plpgsql) |
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
CREATE EXTENSION hstore_plperlu;
```



## 用法

> [hstore_plperlu: hstore 与不受信 PL/Perl 之间的类型转换](https://www.postgresql.org/docs/current/hstore.html)

为不受信 PL/Perl 提供 `hstore` 类型的转换支持。加载后，`hstore` 值会自动转换为 Perl 哈希，反之亦然。

```sql
CREATE EXTENSION hstore_plperlu;

CREATE FUNCTION hstore_to_json_u(val hstore) RETURNS text
LANGUAGE plperlu TRANSFORM FOR TYPE hstore AS $$
  use JSON;
  # val 现在是一个 Perl 哈希引用
  return encode_json($val);
$$;

CREATE FUNCTION make_hstore_u(key text, value text) RETURNS hstore
LANGUAGE plperlu TRANSFORM FOR TYPE hstore AS $$
  my ($k, $v) = @_;
  return { $k => $v };
$$;

SELECT hstore_to_json_u('a=>1, b=>2'::hstore);
SELECT make_hstore_u('color', 'blue');
```
