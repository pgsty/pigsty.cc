---
title: "pltcl"
linkTitle: "pltcl"
description: "PL/TCL 存储过程语言"
weight: 3240
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pltcl.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pltcl.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pltcl.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pltcl`**](/ext/e/pltcl) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3240  | [**`pltcl`**](/ext/e/pltcl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3250  | [**`pltclu`**](/ext/e/pltclu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) [`pljava`](/ext/e/pljava) |
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
CREATE EXTENSION pltcl;
```



## 用法

> [pltcl: PL/Tcl 受信过程语言](https://www.postgresql.org/docs/current/pltcl.html)

PL/Tcl 允许使用 Tcl 编程语言编写 PostgreSQL 函数。作为受信语言，它限制了对文件系统和其他系统资源的访问。

```sql
CREATE EXTENSION pltcl;

-- 返回问候语的简单函数
CREATE FUNCTION tcl_hello(name text) RETURNS text
LANGUAGE pltcl AS $$
  return "Hello, $1!"
$$;

SELECT tcl_hello('world');

-- 包含条件逻辑的函数
CREATE FUNCTION tcl_max(a integer, b integer) RETURNS integer
LANGUAGE pltcl AS $$
  if {$1 > $2} {return $1}
  return $2
$$;

-- 集合返回函数
CREATE FUNCTION tcl_sequence(count integer) RETURNS SETOF integer
LANGUAGE pltcl AS $$
  for {set i 1} {$i <= $1} {incr i} {
    return_next $i
  }
$$;

-- 触发器函数
CREATE FUNCTION tcl_audit() RETURNS trigger
LANGUAGE pltcl AS $$
  set NEW(modified_at) [clock format [clock seconds] -format "%Y-%m-%d %H:%M:%S"]
  return [array get NEW]
$$;
```

在 PL/Tcl 中通过 `spi_exec` 命令访问数据库：

```sql
CREATE FUNCTION tcl_count_rows(tbl text) RETURNS integer
LANGUAGE pltcl AS $$
  spi_exec "SELECT count(*) AS cnt FROM $1"
  return $cnt
$$;
```
