---
title: "jsonb_plperl"
linkTitle: "jsonb_plperl"
description: "在 jsonb 和 plperl 之间转换"
weight: 3263
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
| [**`plperl`**](/ext/e/plperl) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3260  | [**`plperl`**](/ext/e/plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3261  | [**`bool_plperl`**](/ext/e/bool_plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3262  | [**`hstore_plperl`**](/ext/e/hstore_plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3263  | [**`jsonb_plperl`**](/ext/e/jsonb_plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plperl`](/ext/e/plperl) [`jsquery`](/ext/e/jsquery) [`jsonb_plperlu`](/ext/e/jsonb_plperlu) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`plperlu`](/ext/e/plperlu) [`plpgsql`](/ext/e/plpgsql) |
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
CREATE EXTENSION jsonb_plperl;
```



## 用法

> [jsonb_plperl: jsonb 与 PL/Perl 之间的类型转换](https://www.postgresql.org/docs/current/datatype-json.html)

为 PL/Perl 提供 `jsonb` 类型的转换支持。加载后，`jsonb` 值会自动转换为 Perl 数据结构（哈希、数组、标量），反之亦然。

```sql
CREATE EXTENSION jsonb_plperl;

CREATE FUNCTION jsonb_keys_sorted(val jsonb) RETURNS text
LANGUAGE plperl TRANSFORM FOR TYPE jsonb AS $$
  # val 现在是一个 Perl 哈希/数组引用
  return join(', ', sort keys %$val);
$$;

CREATE FUNCTION build_jsonb(name text, age integer) RETURNS jsonb
LANGUAGE plperl TRANSFORM FOR TYPE jsonb AS $$
  my ($name, $age) = @_;
  return { name => $name, age => $age };
$$;

SELECT jsonb_keys_sorted('{"b": 2, "a": 1, "c": 3}'::jsonb);
SELECT build_jsonb('Alice', 30);
```
