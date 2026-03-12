---
title: "pltclu"
linkTitle: "pltclu"
description: "PL/TCL 存储过程语言（未受信/高权限）"
weight: 3250
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

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`plperlu`](/ext/e/plperlu) [`plpython3u`](/ext/e/plpython3u) [`plv8`](/ext/e/plv8) [`plluau`](/ext/e/plluau) [`pljava`](/ext/e/pljava) [`pg_tle`](/ext/e/pg_tle) |
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
CREATE EXTENSION pltclu;
```



## 用法

> [pltclu: PL/Tcl 不受信过程语言](https://www.postgresql.org/docs/current/pltcl.html)

PL/Tcl 不受信版本提供完整的 Tcl 功能，包括文件系统访问和外部程序执行。只有超级用户可以使用此语言创建函数。

```sql
CREATE EXTENSION pltclu;

-- 从服务器文件系统读取文件
CREATE FUNCTION read_file(filename text) RETURNS text
LANGUAGE pltclu AS $$
  set fd [open $1 r]
  set content [read $fd]
  close $fd
  return $content
$$;

-- 执行外部命令
CREATE FUNCTION run_command(cmd text) RETURNS text
LANGUAGE pltclu AS $$
  return [exec {*}$1]
$$;

-- 访问环境变量
CREATE FUNCTION get_env(varname text) RETURNS text
LANGUAGE pltclu AS $$
  if {[info exists ::env($1)]} {
    return $::env($1)
  }
  return ""
$$;

SELECT get_env('HOME');
```
