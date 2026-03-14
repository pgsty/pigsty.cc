---
title: "plperl"
linkTitle: "plperl"
description: "PL/Perl 存储过程语言"
weight: 3260
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
| 3260  | [**`plperl`**](/ext/e/plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3261  | [**`bool_plperl`**](/ext/e/bool_plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3262  | [**`hstore_plperl`**](/ext/e/hstore_plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3263  | [**`jsonb_plperl`**](/ext/e/jsonb_plperl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plperl`](/ext/e/plperl) [`plperlu`](/ext/e/plperlu) [`bool_plperlu`](/ext/e/bool_plperlu) [`jsonb_plperlu`](/ext/e/jsonb_plperlu) [`hstore_plperlu`](/ext/e/hstore_plperlu) [`plpgsql`](/ext/e/plpgsql) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`bool_plperl`](/ext/e/bool_plperl) [`hstore_plperl`](/ext/e/hstore_plperl) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`plperl`](/ext/e/plperl) [`sparql`](/ext/e/sparql) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION plperl;
```



## 用法

> [plperl: PL/Perl 受信过程语言](https://www.postgresql.org/docs/current/plperl.html)

PL/Perl 允许使用 Perl 编写 PostgreSQL 函数。作为受信语言，它在受限环境中运行，无法访问文件系统或外部模块。

```sql
CREATE EXTENSION plperl;

-- 简单标量函数
CREATE FUNCTION perl_hello(text) RETURNS text
LANGUAGE plperl AS $$
  my ($name) = @_;
  return "Hello, $name!";
$$;

SELECT perl_hello('world');

-- 使用 Perl 正则表达式处理文本
CREATE FUNCTION clean_whitespace(text) RETURNS text
LANGUAGE plperl AS $$
  my ($str) = @_;
  $str =~ s/^\s+|\s+$//g;   # 去除首尾空白
  $str =~ s/\s+/ /g;         # 合并内部空白
  return $str;
$$;

-- 返回复合类型
CREATE TYPE name_parts AS (first_name text, last_name text);

CREATE FUNCTION split_name(text) RETURNS name_parts
LANGUAGE plperl AS $$
  my ($full) = @_;
  my ($first, $last) = split(/\s+/, $full, 2);
  return { first_name => $first, last_name => $last };
$$;

-- 集合返回函数
CREATE FUNCTION perl_generate_series(integer, integer) RETURNS SETOF integer
LANGUAGE plperl AS $$
  my ($start, $stop) = @_;
  for my $i ($start .. $stop) {
    return_next($i);
  }
  return undef;
$$;

-- 触发器函数
CREATE FUNCTION perl_audit_trigger() RETURNS trigger
LANGUAGE plperl AS $$
  $_TD->{new}{modified_at} = localtime();
  return "MODIFY";
$$;
```

数据库访问使用 `spi_exec_query`：

```sql
CREATE FUNCTION perl_row_count(text) RETURNS integer
LANGUAGE plperl AS $$
  my ($table) = @_;
  my $rv = spi_exec_query("SELECT count(*) AS cnt FROM $table");
  return $rv->{rows}[0]{cnt};
$$;
```
