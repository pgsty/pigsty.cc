---
title: "plpgsql_check"
linkTitle: "plpgsql_check"
description: "对 plpgsql 函数进行扩展检查"
weight: 3060
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/okbob/plpgsql_check">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">okbob/plpgsql_check</div>
    <div class="ext-card__desc">https://github.com/okbob/plpgsql_check</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plpgsql_check-2.9.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plpgsql_check-2.9.1.tar.gz</div>
    <div class="ext-card__desc">plpgsql_check-2.9.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpgsql_check`**](/ext/e/plpgsql_check) | `2.9.1` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3060  | [**`plpgsql_check`**](/ext/e/plpgsql_check) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pldbgapi`](/ext/e/pldbgapi) [`plprofiler`](/ext/e/plprofiler) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pgtap`](/ext/e/pgtap) [`auto_explain`](/ext/e/auto_explain) [`plv8`](/ext/e/plv8) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `2.9.1` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_check` | `plpgsql` |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.9.1` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_check_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.9.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plpgsql-check` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.9.1 8 | AVAIL PIGSTY 2.9.1 13 | AVAIL PIGSTY 2.9.1 27 | AVAIL PIGSTY 2.9.1 35 | AVAIL PIGSTY 2.9.1 45 |
| el8.aarch64 | AVAIL PIGSTY 2.9.1 8 | AVAIL PIGSTY 2.9.1 13 | AVAIL PIGSTY 2.9.1 27 | AVAIL PIGSTY 2.9.1 34 | AVAIL PIGSTY 2.9.1 34 |
| el9.x86_64 | AVAIL PIGSTY 2.9.1 15 | AVAIL PIGSTY 2.9.1 20 | AVAIL PIGSTY 2.9.1 34 | AVAIL PIGSTY 2.9.1 42 | AVAIL PIGSTY 2.9.1 49 |
| el9.aarch64 | AVAIL PIGSTY 2.9.1 15 | AVAIL PIGSTY 2.9.1 20 | AVAIL PIGSTY 2.9.1 34 | AVAIL PIGSTY 2.9.1 41 | AVAIL PIGSTY 2.9.1 41 |
| el10.x86_64 | AVAIL PIGSTY 2.9.1 15 | AVAIL PIGSTY 2.9.1 16 | AVAIL PIGSTY 2.9.1 16 | AVAIL PIGSTY 2.9.1 16 | AVAIL PIGSTY 2.9.1 16 |
| el10.aarch64 | AVAIL PIGSTY 2.9.1 15 | AVAIL PIGSTY 2.9.1 16 | AVAIL PIGSTY 2.9.1 16 | AVAIL PIGSTY 2.9.1 16 | AVAIL PIGSTY 2.9.1 16 |
| d12.x86_64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| d12.aarch64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| d13.x86_64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| d13.aarch64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| u22.x86_64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| u22.aarch64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| u24.x86_64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| u24.aarch64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| u26.x86_64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
| u26.aarch64 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 | AVAIL PGDG 2.9.1 4 |
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PIGSTY.el8.x86_64.rpm pigsty 2.9.1 117.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_18-2.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PIGSTY.el8.aarch64.rpm pigsty 2.9.1 108.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_18-2.9.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PIGSTY.el9.x86_64.rpm pigsty 2.9.1 111.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_18-2.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel9.6.x86_64.rpm pgdg 2.9.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.11-1PGDG.rhel9.8.x86_64.rpm pgdg 2.8.11 113.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.10 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.8 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.5 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.4 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PIGSTY.el9.aarch64.rpm pigsty 2.9.1 106.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_18-2.9.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.1 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.9.1 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel9.6.aarch64.rpm pgdg 2.9.1 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.11-1PGDG.rhel9.8.aarch64.rpm pgdg 2.8.11 108.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.10 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.8 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.5 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.4 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PIGSTY.el10.x86_64.rpm pigsty 2.9.1 113.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_18-2.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.1 117.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.9.1 117.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.0.x86_64.rpm pgdg 2.9.1 117.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.11-1PGDG.rhel10.2.x86_64.rpm pgdg 2.8.11 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.10 115.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 114.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.8 115.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.5-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.4 111.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.4-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PIGSTY.el10.aarch64.rpm pigsty 2.9.1 107.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_18-2.9.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb pgdg 2.9.1 303.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb pigsty 2.9.1 301.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb pgdg 2.9.0 299.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 292.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb pgdg 2.9.1 293.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb pigsty 2.9.1 290.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb pgdg 2.9.0 288.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 281.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb pgdg 2.9.1 304.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb pigsty 2.9.1 302.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb pgdg 2.9.0 299.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 293.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb pgdg 2.9.1 293.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb pigsty 2.9.1 291.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb pgdg 2.9.0 289.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 282.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb pgdg 2.9.1 313.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb pigsty 2.9.1 328.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb pgdg 2.9.0 308.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 301.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb pgdg 2.9.1 302.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb pigsty 2.9.1 321.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb pgdg 2.9.0 298.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 291.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb pgdg 2.9.1 303.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb pigsty 2.9.1 314.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb pgdg 2.9.0 298.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 291.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb pgdg 2.9.1 291.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb pigsty 2.9.1 308.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb pgdg 2.9.0 287.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 280.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb pgdg 2.9.1 300.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb pigsty 2.9.1 312.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb pgdg 2.9.0 295.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 290.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb pgdg 2.9.1 288.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb pigsty 2.9.1 305.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb pgdg 2.9.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 278.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PIGSTY.el8.x86_64.rpm pigsty 2.9.1 117.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_17-2.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 114.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PIGSTY.el8.aarch64.rpm pigsty 2.9.1 108.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_17-2.9.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 104.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 97.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PIGSTY.el9.x86_64.rpm pigsty 2.9.1 111.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_17-2.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.1 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel9.6.x86_64.rpm pgdg 2.9.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.11-1PGDG.rhel9.8.x86_64.rpm pgdg 2.8.11 112.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.10 112.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.8 112.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.5 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.4 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel9.x86_64.rpm pgdg 2.8.0 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel9.x86_64.rpm pgdg 2.7.15 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.15-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel9.x86_64.rpm pgdg 2.7.14 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel9.x86_64.rpm pgdg 2.7.12 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel9.x86_64.rpm pgdg 2.7.11 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.11-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PIGSTY.el9.aarch64.rpm pigsty 2.9.1 106.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_17-2.9.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.1 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.9.1 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel9.6.aarch64.rpm pgdg 2.9.1 110.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.11-1PGDG.rhel9.8.aarch64.rpm pgdg 2.8.11 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.10 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.8 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.5 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.4 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel9.aarch64.rpm pgdg 2.8.0 102.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel9.aarch64.rpm pgdg 2.7.15 102.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.15-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel9.aarch64.rpm pgdg 2.7.14 98.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel9.aarch64.rpm pgdg 2.7.12 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel9.aarch64.rpm pgdg 2.7.11 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.11-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PIGSTY.el10.x86_64.rpm pigsty 2.9.1 113.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_17-2.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.1 118.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.9.1 118.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.0.x86_64.rpm pgdg 2.9.1 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.11-1PGDG.rhel10.2.x86_64.rpm pgdg 2.8.11 114.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.10 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.8 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.5-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.4 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.4-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 110.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PIGSTY.el10.aarch64.rpm pigsty 2.9.1 107.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_17-2.9.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 111.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 104.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb pgdg 2.9.1 303.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb pigsty 2.9.1 301.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb pgdg 2.9.0 299.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 292.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb pgdg 2.9.1 292.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb pigsty 2.9.1 290.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb pgdg 2.9.0 288.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 281.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb pgdg 2.9.1 303.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb pigsty 2.9.1 301.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb pgdg 2.9.0 299.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 292.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb pgdg 2.9.1 293.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb pigsty 2.9.1 291.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb pgdg 2.9.0 288.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 282.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb pgdg 2.9.1 385.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb pigsty 2.9.1 402.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb pgdg 2.9.0 380.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 372.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb pgdg 2.9.1 374.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb pigsty 2.9.1 395.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb pgdg 2.9.0 369.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 361.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb pgdg 2.9.1 303.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb pigsty 2.9.1 314.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb pgdg 2.9.0 298.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 291.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb pgdg 2.9.1 291.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb pigsty 2.9.1 308.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb pgdg 2.9.0 287.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 280.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb pgdg 2.9.1 300.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb pigsty 2.9.1 312.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb pgdg 2.9.0 295.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 290.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb pgdg 2.9.1 288.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb pigsty 2.9.1 305.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb pgdg 2.9.0 284.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 278.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PIGSTY.el8.x86_64.rpm pigsty 2.9.1 117.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_16-2.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 119.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 114.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.8-1PGDG.rhel8.x86_64.rpm pgdg 2.7.8 104.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7.7 104.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.6-1PGDG.rhel8.x86_64.rpm pgdg 2.7.6 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.5-1PGDG.rhel8.x86_64.rpm pgdg 2.7.5 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.4-1PGDG.rhel8.x86_64.rpm pgdg 2.7.4 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.2-1PGDG.rhel8.x86_64.rpm pgdg 2.7.2 105.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.1-1PGDG.rhel8.x86_64.rpm pgdg 2.7.1 105.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 104.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.2-1PGDG.rhel8.x86_64.rpm pgdg 2.6.2 102.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 102.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 101.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.4-1PGDG.rhel8.x86_64.rpm pgdg 2.5.4 100.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.1-1PGDG.rhel8.x86_64.rpm pgdg 2.5.1 100.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.0-1PGDG.rhel8.x86_64.rpm pgdg 2.5.0 100.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PIGSTY.el8.aarch64.rpm pigsty 2.9.1 108.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_16-2.9.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 97.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.8-1PGDG.rhel8.aarch64.rpm pgdg 2.7.8 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7.7 96.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.6-1PGDG.rhel8.aarch64.rpm pgdg 2.7.6 96.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.5-1PGDG.rhel8.aarch64.rpm pgdg 2.7.5 95.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.4-1PGDG.rhel8.aarch64.rpm pgdg 2.7.4 95.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.2-1PGDG.rhel8.aarch64.rpm pgdg 2.7.2 98.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.1-1PGDG.rhel8.aarch64.rpm pgdg 2.7.1 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.2-1PGDG.rhel8.aarch64.rpm pgdg 2.6.2 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.0-1PGDG.rhel8.aarch64.rpm pgdg 2.6.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.4-1PGDG.rhel8.aarch64.rpm pgdg 2.5.4 93.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.1-1PGDG.rhel8.aarch64.rpm pgdg 2.5.1 93.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.0-1PGDG.rhel8.aarch64.rpm pgdg 2.5.0 93.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.5.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PIGSTY.el9.x86_64.rpm pigsty 2.9.1 111.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_16-2.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.1 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.9.1 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel9.6.x86_64.rpm pgdg 2.9.1 115.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.11-1PGDG.rhel9.8.x86_64.rpm pgdg 2.8.11 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.10 112.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.8 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.5 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.4 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.0-1PGDG.rhel9.x86_64.rpm pgdg 2.8.0 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.15-1PGDG.rhel9.x86_64.rpm pgdg 2.7.15 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.15-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.14-1PGDG.rhel9.x86_64.rpm pgdg 2.7.14 102.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.12-1PGDG.rhel9.x86_64.rpm pgdg 2.7.12 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.11-1PGDG.rhel9.x86_64.rpm pgdg 2.7.11 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.8-1PGDG.rhel9.x86_64.rpm pgdg 2.7.8 102.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7.7 102.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.6-1PGDG.rhel9.x86_64.rpm pgdg 2.7.6 102.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.5-1PGDG.rhel9.x86_64.rpm pgdg 2.7.5 102.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.4-1PGDG.rhel9.x86_64.rpm pgdg 2.7.4 102.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.2-1PGDG.rhel9.x86_64.rpm pgdg 2.7.2 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.1-1PGDG.rhel9.x86_64.rpm pgdg 2.7.1 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.0-1PGDG.rhel9.x86_64.rpm pgdg 2.7.0 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.2-1PGDG.rhel9.x86_64.rpm pgdg 2.6.2 101.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.1-1PGDG.rhel9.x86_64.rpm pgdg 2.6.1 100.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.0-1PGDG.rhel9.x86_64.rpm pgdg 2.6.0 100.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.4-1PGDG.rhel9.x86_64.rpm pgdg 2.5.4 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.1-1PGDG.rhel9.x86_64.rpm pgdg 2.5.1 99.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.0-1PGDG.rhel9.x86_64.rpm pgdg 2.5.0 99.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PIGSTY.el9.aarch64.rpm pigsty 2.9.1 106.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_16-2.9.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.1 110.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.9.1 110.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel9.6.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.11-1PGDG.rhel9.8.aarch64.rpm pgdg 2.8.11 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.10 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.8 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.5 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.4 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.0-1PGDG.rhel9.aarch64.rpm pgdg 2.8.0 102.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.15-1PGDG.rhel9.aarch64.rpm pgdg 2.7.15 102.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.15-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.14-1PGDG.rhel9.aarch64.rpm pgdg 2.7.14 98.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.12-1PGDG.rhel9.aarch64.rpm pgdg 2.7.12 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.11-1PGDG.rhel9.aarch64.rpm pgdg 2.7.11 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.8-1PGDG.rhel9.aarch64.rpm pgdg 2.7.8 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7.7 97.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.6-1PGDG.rhel9.aarch64.rpm pgdg 2.7.6 97.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.5-1PGDG.rhel9.aarch64.rpm pgdg 2.7.5 97.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.4-1PGDG.rhel9.aarch64.rpm pgdg 2.7.4 97.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.2-1PGDG.rhel9.aarch64.rpm pgdg 2.7.2 100.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.1-1PGDG.rhel9.aarch64.rpm pgdg 2.7.1 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.0-1PGDG.rhel9.aarch64.rpm pgdg 2.7.0 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.2-1PGDG.rhel9.aarch64.rpm pgdg 2.6.2 96.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.1-1PGDG.rhel9.aarch64.rpm pgdg 2.6.1 96.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.0-1PGDG.rhel9.aarch64.rpm pgdg 2.6.0 95.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.4-1PGDG.rhel9.aarch64.rpm pgdg 2.5.4 95.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.5.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.1-1PGDG.rhel9.aarch64.rpm pgdg 2.5.1 94.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.0-1PGDG.rhel9.aarch64.rpm pgdg 2.5.0 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.5.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PIGSTY.el10.x86_64.rpm pigsty 2.9.1 113.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_16-2.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.1 118.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.9.1 118.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.0.x86_64.rpm pgdg 2.9.1 118.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.11-1PGDG.rhel10.2.x86_64.rpm pgdg 2.8.11 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.10 114.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.8 114.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.5-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.4 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.4-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 110.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PIGSTY.el10.aarch64.rpm pigsty 2.9.1 107.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_16-2.9.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 111.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 111.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 104.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb pgdg 2.9.1 303.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb pigsty 2.9.1 301.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb pgdg 2.9.0 298.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 292.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb pgdg 2.9.1 292.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb pigsty 2.9.1 290.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb pgdg 2.9.0 288.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 281.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb pgdg 2.9.1 303.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb pigsty 2.9.1 301.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb pgdg 2.9.0 299.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 292.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb pgdg 2.9.1 293.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb pigsty 2.9.1 291.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb pgdg 2.9.0 289.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 282.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb pgdg 2.9.1 380.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb pigsty 2.9.1 396.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb pgdg 2.9.0 374.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 367.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb pgdg 2.9.1 369.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb pigsty 2.9.1 389.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb pgdg 2.9.0 363.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 356.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb pgdg 2.9.1 302.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb pigsty 2.9.1 314.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb pgdg 2.9.0 298.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 291.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb pgdg 2.9.1 291.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb pigsty 2.9.1 308.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb pgdg 2.9.0 287.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 280.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb pgdg 2.9.1 300.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb pigsty 2.9.1 312.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb pgdg 2.9.0 295.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 290.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb pgdg 2.9.1 288.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb pigsty 2.9.1 305.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb pgdg 2.9.0 283.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 278.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PIGSTY.el8.x86_64.rpm pigsty 2.9.1 120.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_15-2.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 116.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 115.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 114.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.8-1PGDG.rhel8.x86_64.rpm pgdg 2.7.8 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7.7 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.6-1PGDG.rhel8.x86_64.rpm pgdg 2.7.6 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.5-1PGDG.rhel8.x86_64.rpm pgdg 2.7.5 104.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.4-1PGDG.rhel8.x86_64.rpm pgdg 2.7.4 104.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.2-1PGDG.rhel8.x86_64.rpm pgdg 2.7.2 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.1-1PGDG.rhel8.x86_64.rpm pgdg 2.7.1 107.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.2-1PGDG.rhel8.x86_64.rpm pgdg 2.6.2 104.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 103.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.5.4-1PGDG.rhel8.x86_64.rpm pgdg 2.5.4 101.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.5.1-1PGDG.rhel8.x86_64.rpm pgdg 2.5.1 101.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.4-1.rhel8.x86_64.rpm pgdg 2.3.4 98.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.2-1.rhel8.x86_64.rpm pgdg 2.3.2 97.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.1-1.rhel8.x86_64.rpm pgdg 2.3.1 97.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 96.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.6-1.rhel8.x86_64.rpm pgdg 2.2.6 95.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.6-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.5-1.rhel8.x86_64.rpm pgdg 2.2.5 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.4-1.rhel8.x86_64.rpm pgdg 2.2.4 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.3-1.rhel8.x86_64.rpm pgdg 2.2.3 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.2-1.rhel8.x86_64.rpm pgdg 2.2.2 94.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PIGSTY.el8.aarch64.rpm pigsty 2.9.1 111.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_15-2.9.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 106.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 106.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.8-1PGDG.rhel8.aarch64.rpm pgdg 2.7.8 97.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7.7 96.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.6-1PGDG.rhel8.aarch64.rpm pgdg 2.7.6 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.5-1PGDG.rhel8.aarch64.rpm pgdg 2.7.5 96.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.4-1PGDG.rhel8.aarch64.rpm pgdg 2.7.4 96.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.2-1PGDG.rhel8.aarch64.rpm pgdg 2.7.2 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.1-1PGDG.rhel8.aarch64.rpm pgdg 2.7.1 99.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.2-1PGDG.rhel8.aarch64.rpm pgdg 2.6.2 96.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 96.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.0-1PGDG.rhel8.aarch64.rpm pgdg 2.6.0 95.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.5.4-1PGDG.rhel8.aarch64.rpm pgdg 2.5.4 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.5.1-1PGDG.rhel8.aarch64.rpm pgdg 2.5.1 94.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.4-1.rhel8.aarch64.rpm pgdg 2.3.4 91.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.2-1.rhel8.aarch64.rpm pgdg 2.3.2 90.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.1-1.rhel8.aarch64.rpm pgdg 2.3.1 90.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 90.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.6-1.rhel8.aarch64.rpm pgdg 2.2.6 89.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.6-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.5-1.rhel8.aarch64.rpm pgdg 2.2.5 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.4-1.rhel8.aarch64.rpm pgdg 2.2.4 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.3-1.rhel8.aarch64.rpm pgdg 2.2.3 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PIGSTY.el9.x86_64.rpm pigsty 2.9.1 116.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_15-2.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.9.1 115.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel9.6.x86_64.rpm pgdg 2.9.1 115.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.11-1PGDG.rhel9.8.x86_64.rpm pgdg 2.8.11 113.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.10 113.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.8 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 113.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.5 113.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 113.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.4 113.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.0-1PGDG.rhel9.x86_64.rpm pgdg 2.8.0 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.15-1PGDG.rhel9.x86_64.rpm pgdg 2.7.15 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.15-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.14-1PGDG.rhel9.x86_64.rpm pgdg 2.7.14 104.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.12-1PGDG.rhel9.x86_64.rpm pgdg 2.7.12 104.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.11-1PGDG.rhel9.x86_64.rpm pgdg 2.7.11 104.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.8-1PGDG.rhel9.x86_64.rpm pgdg 2.7.8 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7.7 103.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.6-1PGDG.rhel9.x86_64.rpm pgdg 2.7.6 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.5-1PGDG.rhel9.x86_64.rpm pgdg 2.7.5 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.4-1PGDG.rhel9.x86_64.rpm pgdg 2.7.4 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.2-1PGDG.rhel9.x86_64.rpm pgdg 2.7.2 106.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.1-1PGDG.rhel9.x86_64.rpm pgdg 2.7.1 107.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.0-1PGDG.rhel9.x86_64.rpm pgdg 2.7.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.2-1PGDG.rhel9.x86_64.rpm pgdg 2.6.2 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.1-1PGDG.rhel9.x86_64.rpm pgdg 2.6.1 102.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.0-1PGDG.rhel9.x86_64.rpm pgdg 2.6.0 103.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.5.4-1PGDG.rhel9.x86_64.rpm pgdg 2.5.4 100.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.5.1-1PGDG.rhel9.x86_64.rpm pgdg 2.5.1 100.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.4-1.rhel9.x86_64.rpm pgdg 2.3.4 97.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.2-1.rhel9.x86_64.rpm pgdg 2.3.2 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.3.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.1-1.rhel9.x86_64.rpm pgdg 2.3.1 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.3.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.0-1.rhel9.x86_64.rpm pgdg 2.3.0 96.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.6-1.rhel9.x86_64.rpm pgdg 2.2.6 95.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.2.6-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.5-1.rhel9.x86_64.rpm pgdg 2.2.5 95.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.2.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.4-1.rhel9.x86_64.rpm pgdg 2.2.4 95.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.2.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.3-1.rhel9.x86_64.rpm pgdg 2.2.3 95.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.2.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.2-1.rhel9.x86_64.rpm pgdg 2.2.2 94.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.2.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PIGSTY.el9.aarch64.rpm pigsty 2.9.1 111.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_15-2.9.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.1 110.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.9.1 110.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel9.6.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.11-1PGDG.rhel9.8.aarch64.rpm pgdg 2.8.11 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.10 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.8 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.5 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.4 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.0-1PGDG.rhel9.aarch64.rpm pgdg 2.8.0 106.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.15-1PGDG.rhel9.aarch64.rpm pgdg 2.7.15 106.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.15-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.14-1PGDG.rhel9.aarch64.rpm pgdg 2.7.14 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.12-1PGDG.rhel9.aarch64.rpm pgdg 2.7.12 98.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.11-1PGDG.rhel9.aarch64.rpm pgdg 2.7.11 98.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.8-1PGDG.rhel9.aarch64.rpm pgdg 2.7.8 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7.7 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.6-1PGDG.rhel9.aarch64.rpm pgdg 2.7.6 98.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.5-1PGDG.rhel9.aarch64.rpm pgdg 2.7.5 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.4-1PGDG.rhel9.aarch64.rpm pgdg 2.7.4 97.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.2-1PGDG.rhel9.aarch64.rpm pgdg 2.7.2 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.1-1PGDG.rhel9.aarch64.rpm pgdg 2.7.1 101.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.0-1PGDG.rhel9.aarch64.rpm pgdg 2.7.0 99.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.2-1PGDG.rhel9.aarch64.rpm pgdg 2.6.2 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.1-1PGDG.rhel9.aarch64.rpm pgdg 2.6.1 97.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.0-1PGDG.rhel9.aarch64.rpm pgdg 2.6.0 97.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.5.4-1PGDG.rhel9.aarch64.rpm pgdg 2.5.4 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.5.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.5.1-1PGDG.rhel9.aarch64.rpm pgdg 2.5.1 96.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.4-1.rhel9.aarch64.rpm pgdg 2.3.4 93.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.3.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.2-1.rhel9.aarch64.rpm pgdg 2.3.2 92.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.3.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.1-1.rhel9.aarch64.rpm pgdg 2.3.1 92.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.3.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.0-1.rhel9.aarch64.rpm pgdg 2.3.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.6-1.rhel9.aarch64.rpm pgdg 2.2.6 91.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.2.6-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.5-1.rhel9.aarch64.rpm pgdg 2.2.5 91.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.2.5-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.4-1.rhel9.aarch64.rpm pgdg 2.2.4 91.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.2.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.3-1.rhel9.aarch64.rpm pgdg 2.2.3 91.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.2.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PIGSTY.el10.x86_64.rpm pigsty 2.9.1 118.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_15-2.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.1 118.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.9.1 118.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.0.x86_64.rpm pgdg 2.9.1 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.11-1PGDG.rhel10.2.x86_64.rpm pgdg 2.8.11 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.10 114.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.8 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 115.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.5 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.5-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 115.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.4 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.4-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PIGSTY.el10.aarch64.rpm pigsty 2.9.1 112.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_15-2.9.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb pgdg 2.9.1 306.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb pigsty 2.9.1 304.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb pgdg 2.9.0 302.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 295.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb pgdg 2.9.1 295.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb pigsty 2.9.1 293.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb pgdg 2.9.0 290.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 283.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb pgdg 2.9.1 307.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb pigsty 2.9.1 305.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb pgdg 2.9.0 303.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 295.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb pgdg 2.9.1 296.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb pigsty 2.9.1 294.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb pgdg 2.9.0 291.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 284.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb pgdg 2.9.1 384.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb pigsty 2.9.1 400.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb pgdg 2.9.0 379.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 370.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb pgdg 2.9.1 373.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb pigsty 2.9.1 394.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb pgdg 2.9.0 368.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 359.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb pgdg 2.9.1 306.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb pigsty 2.9.1 318.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb pgdg 2.9.0 302.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 295.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb pgdg 2.9.1 296.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb pigsty 2.9.1 312.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb pgdg 2.9.0 291.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 283.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb pgdg 2.9.1 303.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb pigsty 2.9.1 315.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb pgdg 2.9.0 299.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 293.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb pgdg 2.9.1 292.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb pigsty 2.9.1 309.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb pgdg 2.9.0 287.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 281.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PIGSTY.el8.x86_64.rpm pigsty 2.9.1 120.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_14-2.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 116.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 105.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.8-1PGDG.rhel8.x86_64.rpm pgdg 2.7.8 104.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7.7 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.6-1PGDG.rhel8.x86_64.rpm pgdg 2.7.6 104.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.5-1PGDG.rhel8.x86_64.rpm pgdg 2.7.5 104.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.4-1PGDG.rhel8.x86_64.rpm pgdg 2.7.4 104.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.2-1PGDG.rhel8.x86_64.rpm pgdg 2.7.2 107.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.1-1PGDG.rhel8.x86_64.rpm pgdg 2.7.1 107.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 105.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.6.2-1PGDG.rhel8.x86_64.rpm pgdg 2.6.2 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 103.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.5.4-1PGDG.rhel8.x86_64.rpm pgdg 2.5.4 101.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.5.1-1PGDG.rhel8.x86_64.rpm pgdg 2.5.1 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.4-1.rhel8.x86_64.rpm pgdg 2.3.4 98.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.2-1.rhel8.x86_64.rpm pgdg 2.3.2 97.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.1-1.rhel8.x86_64.rpm pgdg 2.3.1 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 96.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.6-1.rhel8.x86_64.rpm pgdg 2.2.6 95.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.2.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.5-1.rhel8.x86_64.rpm pgdg 2.2.5 95.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.2.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.4-1.rhel8.x86_64.rpm pgdg 2.2.4 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.3-1.rhel8.x86_64.rpm pgdg 2.2.3 95.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.2.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.2-1.rhel8.x86_64.rpm pgdg 2.2.2 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.1-1.rhel8.x86_64.rpm pgdg 2.2.1 94.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.10-1.rhel8.x86_64.rpm pgdg 2.1.10 90.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.1.10-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.8-1.rhel8.x86_64.rpm pgdg 2.1.8 89.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.1.8-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.7-1.rhel8.x86_64.rpm pgdg 2.1.7 89.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.1.7-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.5-1.rhel8.x86_64.rpm pgdg 2.1.5 89.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.3-1.rhel8.x86_64.rpm pgdg 2.1.3 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 88.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.0.5-1.rhel8.x86_64.rpm pgdg 2.0.5 87.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.0.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.0.3-1.rhel8.x86_64.rpm pgdg 2.0.3 87.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.0.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-1.17.1-1.rhel8.x86_64.rpm pgdg 1.17.1 83.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-1.17.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PIGSTY.el8.aarch64.rpm pigsty 2.9.1 111.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_14-2.9.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 106.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 106.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 104.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 97.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.8-1PGDG.rhel8.aarch64.rpm pgdg 2.7.8 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7.7 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.6-1PGDG.rhel8.aarch64.rpm pgdg 2.7.6 96.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.5-1PGDG.rhel8.aarch64.rpm pgdg 2.7.5 96.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.4-1PGDG.rhel8.aarch64.rpm pgdg 2.7.4 96.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.2-1PGDG.rhel8.aarch64.rpm pgdg 2.7.2 99.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.1-1PGDG.rhel8.aarch64.rpm pgdg 2.7.1 99.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 98.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.6.2-1PGDG.rhel8.aarch64.rpm pgdg 2.6.2 96.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 95.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.6.0-1PGDG.rhel8.aarch64.rpm pgdg 2.6.0 95.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.5.4-1PGDG.rhel8.aarch64.rpm pgdg 2.5.4 94.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.5.1-1PGDG.rhel8.aarch64.rpm pgdg 2.5.1 94.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.4-1.rhel8.aarch64.rpm pgdg 2.3.4 91.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.2-1.rhel8.aarch64.rpm pgdg 2.3.2 90.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.3.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.1-1.rhel8.aarch64.rpm pgdg 2.3.1 90.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.3.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 90.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.6-1.rhel8.aarch64.rpm pgdg 2.2.6 88.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.2.6-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.5-1.rhel8.aarch64.rpm pgdg 2.2.5 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.2.5-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.4-1.rhel8.aarch64.rpm pgdg 2.2.4 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.2.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.3-1.rhel8.aarch64.rpm pgdg 2.2.3 88.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.2.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PIGSTY.el9.x86_64.rpm pigsty 2.9.1 116.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_14-2.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.1 115.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.9.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel9.6.x86_64.rpm pgdg 2.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.11-1PGDG.rhel9.8.x86_64.rpm pgdg 2.8.11 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.10 112.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.8 112.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 112.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.5 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 2.8.4 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 112.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.0-1PGDG.rhel9.x86_64.rpm pgdg 2.8.0 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.15-1PGDG.rhel9.x86_64.rpm pgdg 2.7.15 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.15-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.14-1PGDG.rhel9.x86_64.rpm pgdg 2.7.14 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.12-1PGDG.rhel9.x86_64.rpm pgdg 2.7.12 103.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.11-1PGDG.rhel9.x86_64.rpm pgdg 2.7.11 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.8-1PGDG.rhel9.x86_64.rpm pgdg 2.7.8 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7.7 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.6-1PGDG.rhel9.x86_64.rpm pgdg 2.7.6 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.5-1PGDG.rhel9.x86_64.rpm pgdg 2.7.5 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.4-1PGDG.rhel9.x86_64.rpm pgdg 2.7.4 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.2-1PGDG.rhel9.x86_64.rpm pgdg 2.7.2 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.1-1PGDG.rhel9.x86_64.rpm pgdg 2.7.1 105.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.7.0-1PGDG.rhel9.x86_64.rpm pgdg 2.7.0 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.6.2-1PGDG.rhel9.x86_64.rpm pgdg 2.6.2 102.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.6.1-1PGDG.rhel9.x86_64.rpm pgdg 2.6.1 101.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.6.0-1PGDG.rhel9.x86_64.rpm pgdg 2.6.0 101.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.5.4-1PGDG.rhel9.x86_64.rpm pgdg 2.5.4 100.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.5.1-1PGDG.rhel9.x86_64.rpm pgdg 2.5.1 100.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.4-1.rhel9.x86_64.rpm pgdg 2.3.4 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.2-1.rhel9.x86_64.rpm pgdg 2.3.2 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.3.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.1-1.rhel9.x86_64.rpm pgdg 2.3.1 96.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.3.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.3.0-1.rhel9.x86_64.rpm pgdg 2.3.0 96.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.6-1.rhel9.x86_64.rpm pgdg 2.2.6 95.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.2.6-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.5-1.rhel9.x86_64.rpm pgdg 2.2.5 95.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.2.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.4-1.rhel9.x86_64.rpm pgdg 2.2.4 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.2.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.3-1.rhel9.x86_64.rpm pgdg 2.2.3 95.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.2.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.2-1.rhel9.x86_64.rpm pgdg 2.2.2 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.2.1-1.rhel9.x86_64.rpm pgdg 2.2.1 94.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.10-1.rhel9.x86_64.rpm pgdg 2.1.10 90.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.1.10-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.8-1.rhel9.x86_64.rpm pgdg 2.1.8 89.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.1.8-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.7-1.rhel9.x86_64.rpm pgdg 2.1.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.1.7-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.5-1.rhel9.x86_64.rpm pgdg 2.1.5 89.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.3-1.rhel9.x86_64.rpm pgdg 2.1.3 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PIGSTY.el9.aarch64.rpm pigsty 2.9.1 110.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_14-2.9.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.1 110.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.9.1 110.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel9.6.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.11-1PGDG.rhel9.8.aarch64.rpm pgdg 2.8.11 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.10 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.8 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.5 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 2.8.4 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.0-1PGDG.rhel9.aarch64.rpm pgdg 2.8.0 106.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.15-1PGDG.rhel9.aarch64.rpm pgdg 2.7.15 106.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.15-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.14-1PGDG.rhel9.aarch64.rpm pgdg 2.7.14 98.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.12-1PGDG.rhel9.aarch64.rpm pgdg 2.7.12 98.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.11-1PGDG.rhel9.aarch64.rpm pgdg 2.7.11 98.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.8-1PGDG.rhel9.aarch64.rpm pgdg 2.7.8 98.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7.7 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.6-1PGDG.rhel9.aarch64.rpm pgdg 2.7.6 97.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.5-1PGDG.rhel9.aarch64.rpm pgdg 2.7.5 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.4-1PGDG.rhel9.aarch64.rpm pgdg 2.7.4 97.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.2-1PGDG.rhel9.aarch64.rpm pgdg 2.7.2 101.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.1-1PGDG.rhel9.aarch64.rpm pgdg 2.7.1 100.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.7.0-1PGDG.rhel9.aarch64.rpm pgdg 2.7.0 99.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.6.2-1PGDG.rhel9.aarch64.rpm pgdg 2.6.2 98.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.6.1-1PGDG.rhel9.aarch64.rpm pgdg 2.6.1 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.6.0-1PGDG.rhel9.aarch64.rpm pgdg 2.6.0 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.5.4-1PGDG.rhel9.aarch64.rpm pgdg 2.5.4 96.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.5.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.5.1-1PGDG.rhel9.aarch64.rpm pgdg 2.5.1 96.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.4-1.rhel9.aarch64.rpm pgdg 2.3.4 93.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.3.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.2-1.rhel9.aarch64.rpm pgdg 2.3.2 92.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.3.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.1-1.rhel9.aarch64.rpm pgdg 2.3.1 92.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.3.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.3.0-1.rhel9.aarch64.rpm pgdg 2.3.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.6-1.rhel9.aarch64.rpm pgdg 2.2.6 91.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.2.6-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.5-1.rhel9.aarch64.rpm pgdg 2.2.5 91.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.2.5-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.4-1.rhel9.aarch64.rpm pgdg 2.2.4 91.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.2.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.2.3-1.rhel9.aarch64.rpm pgdg 2.2.3 90.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.2.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PIGSTY.el10.x86_64.rpm pigsty 2.9.1 118.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_14-2.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.1 117.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.9.1 117.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel10.0.x86_64.rpm pgdg 2.9.1 118.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.9.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.11-1PGDG.rhel10.2.x86_64.rpm pgdg 2.8.11 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.10 114.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel10.0.x86_64.rpm pgdg 2.8.8 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 115.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.5 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.5-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDGrhel10.0.x86_64.rpm pgdg 2.8.4 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.4-1PGDGrhel10.0.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PIGSTY.el10.aarch64.rpm pigsty 2.9.1 112.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_14-2.9.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 108.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb pgdg 2.9.1 306.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb pigsty 2.9.1 304.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb pgdg 2.9.0 302.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 295.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb pgdg 2.9.1 295.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb pigsty 2.9.1 293.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb pgdg 2.9.0 290.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 283.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb pgdg 2.9.1 307.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb pigsty 2.9.1 305.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb pgdg 2.9.0 302.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 296.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb pgdg 2.9.1 296.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb pigsty 2.9.1 294.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb pgdg 2.9.0 291.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 284.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb pgdg 2.9.1 368.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb pigsty 2.9.1 385.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb pgdg 2.9.0 362.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 353.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb pgdg 2.9.1 357.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb pigsty 2.9.1 378.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb pgdg 2.9.0 351.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 343.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb pgdg 2.9.1 306.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb pigsty 2.9.1 318.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb pgdg 2.9.0 302.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 295.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb pgdg 2.9.1 295.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb pigsty 2.9.1 312.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb pgdg 2.9.0 291.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 283.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb pgdg 2.9.1 303.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb pigsty 2.9.1 315.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb pgdg 2.9.0 299.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 293.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb pgdg 2.9.1 292.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb pigsty 2.9.1 309.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb pgdg 2.9.0 287.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.9.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 281.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plpgsql_check` 扩展的 RPM 包：

```bash
pig build pkg plpgsql_check         # 构建 RPM 包
```


## 安装

您可以直接安装 `plpgsql_check` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plpgsql_check;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plpgsql_check -v 18  # PG 18
pig ext install -y plpgsql_check -v 17  # PG 17
pig ext install -y plpgsql_check -v 16  # PG 16
pig ext install -y plpgsql_check -v 15  # PG 15
pig ext install -y plpgsql_check -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plpgsql_check_18       # PG 18
dnf install -y plpgsql_check_17       # PG 17
dnf install -y plpgsql_check_16       # PG 16
dnf install -y plpgsql_check_15       # PG 15
dnf install -y plpgsql_check_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plpgsql-check   # PG 18
apt install -y postgresql-17-plpgsql-check   # PG 17
apt install -y postgresql-16-plpgsql-check   # PG 16
apt install -y postgresql-15-plpgsql-check   # PG 15
apt install -y postgresql-14-plpgsql-check   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'plpgsql_check';
```


**创建扩展**：

```sql
CREATE EXTENSION plpgsql_check CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：[official README](https://github.com/okbob/plpgsql_check)、[v2.9.1 release notes](https://github.com/okbob/plpgsql_check/releases/tag/v2.9.1)、[local package metadata](../db/extension.csv)。

`plpgsql_check` 是面向 PL/pgSQL 的检查器、linter、性能分析器、跟踪器和覆盖率工具。它可以在开发阶段发现许多错误，而不是等到运行时才失败。

```sql
CREATE EXTENSION plpgsql_check;
```

### 检查函数

```sql
SELECT * FROM plpgsql_check_function('my_function()');
SELECT * FROM plpgsql_check_function('my_function(int, text)');
SELECT * FROM plpgsql_check_function('my_function()', fatal_errors := false);
```

返回表的变体适合生成结构化报告：

```sql
SELECT *
FROM plpgsql_check_function_tb('my_function()');
```

### 输出格式

```sql
SELECT * FROM plpgsql_check_function('fx()', format := 'text');
SELECT * FROM plpgsql_check_function('fx()', format := 'json');
SELECT * FROM plpgsql_check_function('fx()', format := 'xml');
```

### 检查触发器函数

```sql
SELECT * FROM plpgsql_check_function('my_trigger_func()', 'my_table');

SELECT * FROM plpgsql_check_function(
  'my_trigger_func()',
  'my_table',
  newtable := 'newtab',
  oldtable := 'oldtab'
);
```

### 警告类别

```sql
SELECT * FROM plpgsql_check_function(
  'fx()',
  extra_warnings := true,
  performance_warnings := true,
  security_warnings := true,
  compatibility_warnings := true
);
```

- `extra_warnings` 覆盖缺少返回、死代码、未使用参数等问题。
- `performance_warnings` 覆盖性能相关检查。
- `security_warnings` 包括 SQL 注入风险等检查。
- `compatibility_warnings` 报告过时或对版本敏感的 PL/pgSQL 模式。

### 批量检查所有函数

```sql
SELECT p.oid, p.proname, plpgsql_check_function(p.oid)
FROM pg_catalog.pg_namespace n
JOIN pg_catalog.pg_proc p ON p.pronamespace = n.oid
JOIN pg_catalog.pg_language l ON p.prolang = l.oid
WHERE l.lanname = 'plpgsql'
  AND p.prorettype <> 'pg_catalog.trigger'::pg_catalog.regtype;
```

### 被动模式

被动模式会在函数启动时检查函数。它适合开发或预生产环境，因为会带来额外开销。

```sql
LOAD 'plpgsql_check';
SET plpgsql_check.mode = 'every_start';
```

常用设置：

```text
plpgsql_check.mode = [ disabled | by_function | fresh_start | every_start ]
plpgsql_check.fatal_errors = [ yes | no ]
plpgsql_check.show_nonperformance_warnings = false
plpgsql_check.show_performance_warnings = false
```

### 性能分析器

```sql
SELECT plpgsql_check_profiler(true);

SELECT my_function();

SELECT lineno, avg_time, source
FROM plpgsql_profiler_function_tb('my_function()');

SELECT stmtid, parent_stmtid, lineno, exec_stmts, stmtname
FROM plpgsql_profiler_function_statements_tb('my_function()');

SELECT * FROM plpgsql_profiler_functions_all();
SELECT plpgsql_profiler_reset_all();
```

若要使用共享性能分析统计，请在 `plpgsql_check` 之前预加载 `plpgsql`：

```text
shared_preload_libraries = 'plpgsql,plpgsql_check'
```

没有共享预加载时，性能分析数据仅限于当前活动会话。

### 跟踪器

跟踪会为函数和语句的进入/退出发出 notice，并可能暴露变量值。它默认关闭，只应通过超级用户控制的设置启用。

```sql
SET plpgsql_check.enable_tracer = on;
SELECT plpgsql_check_tracer(true);
SET plpgsql_check.tracer_verbosity = terse;
```

### 依赖追踪

```sql
SELECT *
FROM plpgsql_show_dependency_tb('my_function(int)');
```

### 覆盖率指标

```sql
SELECT * FROM plpgsql_coverage_statements('my_function()');
SELECT * FROM plpgsql_coverage_branches('my_function()');
```

### Pragma 指令

在函数内部使用 pragma 调用，告诉 `plpgsql_check` 动态 SQL、临时表、推断出的 record 类型，或局部检查设置：

```sql
CREATE OR REPLACE FUNCTION fx(anyelement) RETURNS text AS $$
BEGIN
  PERFORM plpgsql_check_pragma('type: r (id int, processed bool)');
  RETURN $1::text;
END;
$$ LANGUAGE plpgsql;
```

### 注意事项

- Pigsty 将 `plpgsql_check` 2.9.1 作为 PostgreSQL 14-18 的 RPM 打包；DEB 包来自 PGDG。
- 该扩展要求 `plpgsql`。主动检查不强制要求预加载，但共享性能分析存储以及跟踪器/性能分析器的可靠早期初始化需要预加载。
- v2.9.1 修复了被跟踪 inline block 失败时可能发生的崩溃；这个补丁发布没有记录新的面向用户 SQL API。
- 跟踪器可能暴露函数参数或变量值。对 security-definer 函数或敏感数据使用时要格外谨慎。
