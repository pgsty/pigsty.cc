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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plpgsql_check-2.10.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plpgsql_check-2.10.1.tar.gz</div>
    <div class="ext-card__desc">plpgsql_check-2.10.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpgsql_check`**](/ext/e/plpgsql_check) | `2.10.2` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3060  | [**`plpgsql_check`**](/ext/e/plpgsql_check) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pldbgapi`](/ext/e/pldbgapi) [`plprofiler`](/ext/e/plprofiler) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pgtap`](/ext/e/pgtap) [`auto_explain`](/ext/e/auto_explain) [`plv8`](/ext/e/plv8) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PIGSTY RPM and DEB packages are aligned at 2.10.1 for PostgreSQL 14 through 18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.10.2` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_check` | `plpgsql` |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.10.2` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_check_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.10.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plpgsql-check` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.10.2 12 | AVAIL PGDG 2.10.2 17 | AVAIL PGDG 2.10.2 31 | AVAIL PGDG 2.10.2 39 | AVAIL PGDG 2.10.2 49 |
| el8.aarch64 | AVAIL PGDG 2.10.2 12 | AVAIL PGDG 2.10.2 17 | AVAIL PGDG 2.10.2 31 | AVAIL PGDG 2.10.2 38 | AVAIL PGDG 2.10.2 38 |
| el9.x86_64 | AVAIL PGDG 2.10.2 19 | AVAIL PGDG 2.10.2 24 | AVAIL PGDG 2.10.2 38 | AVAIL PGDG 2.10.2 46 | AVAIL PGDG 2.10.2 53 |
| el9.aarch64 | AVAIL PGDG 2.10.2 19 | AVAIL PGDG 2.10.2 24 | AVAIL PGDG 2.10.2 38 | AVAIL PGDG 2.10.2 45 | AVAIL PGDG 2.10.2 45 |
| el10.x86_64 | AVAIL PGDG 2.10.2 19 | AVAIL PGDG 2.10.2 20 | AVAIL PGDG 2.10.2 20 | AVAIL PGDG 2.10.2 20 | AVAIL PGDG 2.10.2 20 |
| el10.aarch64 | AVAIL PGDG 2.10.2 19 | AVAIL PGDG 2.10.2 20 | AVAIL PGDG 2.10.2 20 | AVAIL PGDG 2.10.2 20 | AVAIL PGDG 2.10.2 20 |
| d12.x86_64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| d12.aarch64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| d13.x86_64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| d13.aarch64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| u22.x86_64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| u22.aarch64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| u24.x86_64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| u24.aarch64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| u26.x86_64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
| u26.aarch64 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 | AVAIL PGDG 2.10.2 4 |
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PIGSTY.el8.x86_64.rpm pigsty 2.10.1 121.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_18-2.10.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PIGSTY.el8.aarch64.rpm pigsty 2.10.1 112.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_18-2.10.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.2 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.10.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PIGSTY.el9.x86_64.rpm pigsty 2.10.1 115.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_18-2.10.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.1 119.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.10.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.3 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.2 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.9.2-1PGDG.rhel9.8.x86_64.rpm
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
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.2 116.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.10.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PIGSTY.el9.aarch64.rpm pigsty 2.10.1 110.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_18-2.10.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.1 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.10.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.3 110.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.2 110.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.9.2-1PGDG.rhel9.8.aarch64.rpm
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
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.2 123.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.10.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PIGSTY.el10.x86_64.rpm pigsty 2.10.1 117.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_18-2.10.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.1 122.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.10.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.3 117.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.2 117.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.9.2-1PGDG.rhel10.2.x86_64.rpm
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
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PIGSTY.el10.aarch64.rpm pigsty 2.10.1 111.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_18-2.10.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.2-1PGDG.rhel10.2.aarch64.rpm
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
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb pgdg 2.10.2 315.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb pgdg 2.10.1 313.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb pigsty 2.10.1 310.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb pgdg 2.10.0 312.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb pgdg 2.10.2 304.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb pgdg 2.10.1 302.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb pigsty 2.10.1 300.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb pgdg 2.10.0 302.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb pgdg 2.10.2 316.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb pgdg 2.10.1 313.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb pigsty 2.10.1 311.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb pgdg 2.10.0 313.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb pgdg 2.10.2 305.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb pgdg 2.10.1 303.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb pigsty 2.10.1 300.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb pgdg 2.10.0 302.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb pgdg 2.10.2 326.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb pgdg 2.10.1 323.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb pigsty 2.10.1 338.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb pgdg 2.10.0 323.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb pgdg 2.10.2 315.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb pgdg 2.10.1 311.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb pigsty 2.10.1 331.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb pgdg 2.10.0 311.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb pgdg 2.10.2 315.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb pgdg 2.10.1 312.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb pigsty 2.10.1 324.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb pgdg 2.10.0 312.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb pgdg 2.10.2 304.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb pgdg 2.10.1 301.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb pigsty 2.10.1 318.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb pgdg 2.10.0 301.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb pgdg 2.10.2 313.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb pgdg 2.10.1 310.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb pigsty 2.10.1 322.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb pgdg 2.10.0 310.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb pgdg 2.10.2 300.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb pgdg 2.10.1 297.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb pigsty 2.10.1 315.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb pgdg 2.10.0 297.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PIGSTY.el8.x86_64.rpm pigsty 2.10.1 121.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_17-2.10.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.9.2-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PIGSTY.el8.aarch64.rpm pigsty 2.10.1 112.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_17-2.10.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.9.2-1PGDG.rhel8.10.aarch64.rpm
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
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.2 120.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.10.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PIGSTY.el9.x86_64.rpm pigsty 2.10.1 115.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_17-2.10.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.1 118.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.10.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.3 115.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.2 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.9.2-1PGDG.rhel9.8.x86_64.rpm
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
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.2 116.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.10.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PIGSTY.el9.aarch64.rpm pigsty 2.10.1 110.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_17-2.10.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.1 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.10.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.3 110.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.2 110.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.9.2-1PGDG.rhel9.8.aarch64.rpm
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
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.2 122.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.10.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PIGSTY.el10.x86_64.rpm pigsty 2.10.1 117.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_17-2.10.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.1 121.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.10.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.3 118.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.2 117.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.9.2-1PGDG.rhel10.2.x86_64.rpm
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
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PIGSTY.el10.aarch64.rpm pigsty 2.10.1 111.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_17-2.10.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.2-1PGDG.rhel10.2.aarch64.rpm
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
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb pgdg 2.10.2 315.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb pgdg 2.10.1 312.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb pigsty 2.10.1 310.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb pgdg 2.10.0 312.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb pgdg 2.10.2 304.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb pgdg 2.10.1 301.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb pigsty 2.10.1 299.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb pgdg 2.10.0 301.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb pgdg 2.10.2 316.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb pgdg 2.10.1 313.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb pigsty 2.10.1 311.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb pgdg 2.10.0 313.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb pgdg 2.10.2 305.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb pgdg 2.10.1 302.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb pigsty 2.10.1 300.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb pgdg 2.10.0 302.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb pgdg 2.10.2 402.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb pgdg 2.10.1 398.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb pigsty 2.10.1 415.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb pgdg 2.10.0 398.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb pgdg 2.10.2 390.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb pgdg 2.10.1 386.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb pigsty 2.10.1 408.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb pgdg 2.10.0 386.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb pgdg 2.10.2 315.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb pgdg 2.10.1 312.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb pigsty 2.10.1 324.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb pgdg 2.10.0 312.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb pgdg 2.10.2 303.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb pgdg 2.10.1 301.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb pigsty 2.10.1 317.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb pgdg 2.10.0 300.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb pgdg 2.10.2 313.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb pgdg 2.10.1 310.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb pigsty 2.10.1 321.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb pgdg 2.10.0 309.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb pgdg 2.10.2 300.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb pgdg 2.10.1 298.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb pigsty 2.10.1 315.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb pgdg 2.10.0 298.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PIGSTY.el8.x86_64.rpm pigsty 2.10.1 121.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_16-2.10.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.9.2-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PIGSTY.el8.aarch64.rpm pigsty 2.10.1 112.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_16-2.10.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.9.2-1PGDG.rhel8.10.aarch64.rpm
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
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.2 120.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.10.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PIGSTY.el9.x86_64.rpm pigsty 2.10.1 115.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_16-2.10.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.1 118.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.10.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.3 116.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.2 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.9.2-1PGDG.rhel9.8.x86_64.rpm
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
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.2 116.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.10.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PIGSTY.el9.aarch64.rpm pigsty 2.10.1 110.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_16-2.10.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.1 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.10.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.3 110.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.2 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.9.2-1PGDG.rhel9.8.aarch64.rpm
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
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.2 122.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.10.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PIGSTY.el10.x86_64.rpm pigsty 2.10.1 117.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_16-2.10.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.1 121.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.10.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.3 118.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.2 117.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.9.2-1PGDG.rhel10.2.x86_64.rpm
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
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PIGSTY.el10.aarch64.rpm pigsty 2.10.1 111.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_16-2.10.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.2-1PGDG.rhel10.2.aarch64.rpm
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
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb pgdg 2.10.2 315.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb pgdg 2.10.1 312.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb pigsty 2.10.1 310.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb pgdg 2.10.0 312.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb pgdg 2.10.2 304.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb pgdg 2.10.1 301.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb pigsty 2.10.1 299.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb pgdg 2.10.0 301.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb pgdg 2.10.2 316.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb pgdg 2.10.1 313.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb pigsty 2.10.1 311.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb pgdg 2.10.0 313.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb pgdg 2.10.2 305.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb pgdg 2.10.1 302.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb pigsty 2.10.1 300.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb pgdg 2.10.0 302.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb pgdg 2.10.2 395.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb pgdg 2.10.1 393.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb pigsty 2.10.1 409.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb pgdg 2.10.0 392.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb pgdg 2.10.2 384.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb pgdg 2.10.1 381.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb pigsty 2.10.1 402.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb pgdg 2.10.0 381.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb pgdg 2.10.2 315.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb pgdg 2.10.1 312.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb pigsty 2.10.1 324.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb pgdg 2.10.0 312.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb pgdg 2.10.2 304.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb pgdg 2.10.1 300.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb pigsty 2.10.1 317.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb pgdg 2.10.0 300.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb pgdg 2.10.2 312.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb pgdg 2.10.1 310.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb pigsty 2.10.1 321.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb pgdg 2.10.0 310.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb pgdg 2.10.2 300.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb pgdg 2.10.1 297.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb pigsty 2.10.1 314.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb pgdg 2.10.0 297.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PIGSTY.el8.x86_64.rpm pigsty 2.10.1 124.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_15-2.10.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.9.2-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PIGSTY.el8.aarch64.rpm pigsty 2.10.1 115.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_15-2.10.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.9.2-1PGDG.rhel8.10.aarch64.rpm
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
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.2 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.10.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PIGSTY.el9.x86_64.rpm pigsty 2.10.1 120.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_15-2.10.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.1 118.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.10.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.3 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.2 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.9.2-1PGDG.rhel9.8.x86_64.rpm
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
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.2 115.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.10.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PIGSTY.el9.aarch64.rpm pigsty 2.10.1 114.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_15-2.10.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.1 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.10.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.3 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.2 110.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.9.2-1PGDG.rhel9.8.aarch64.rpm
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
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.2 122.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.10.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PIGSTY.el10.x86_64.rpm pigsty 2.10.1 122.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_15-2.10.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.1 121.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.10.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.3 118.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.2 117.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.9.2-1PGDG.rhel10.2.x86_64.rpm
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
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PIGSTY.el10.aarch64.rpm pigsty 2.10.1 115.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_15-2.10.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.2-1PGDG.rhel10.2.aarch64.rpm
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
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb pgdg 2.10.2 319.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb pgdg 2.10.1 316.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb pigsty 2.10.1 314.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb pgdg 2.10.0 316.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb pgdg 2.10.2 307.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb pgdg 2.10.1 304.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb pigsty 2.10.1 302.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb pgdg 2.10.0 304.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb pgdg 2.10.2 319.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb pgdg 2.10.1 317.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb pigsty 2.10.1 314.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb pgdg 2.10.0 317.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb pgdg 2.10.2 308.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb pgdg 2.10.1 305.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb pigsty 2.10.1 303.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb pgdg 2.10.0 305.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb pgdg 2.10.2 399.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb pgdg 2.10.1 396.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb pigsty 2.10.1 413.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb pgdg 2.10.0 396.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb pgdg 2.10.2 387.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb pgdg 2.10.1 385.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb pigsty 2.10.1 406.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb pgdg 2.10.0 385.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb pgdg 2.10.2 319.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb pgdg 2.10.1 316.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb pigsty 2.10.1 328.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb pgdg 2.10.0 316.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb pgdg 2.10.2 307.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb pgdg 2.10.1 305.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb pigsty 2.10.1 322.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb pgdg 2.10.0 304.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb pgdg 2.10.2 316.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb pgdg 2.10.1 313.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb pigsty 2.10.1 325.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb pgdg 2.10.0 313.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb pgdg 2.10.2 304.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb pgdg 2.10.1 301.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb pigsty 2.10.1 319.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb pgdg 2.10.0 301.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PIGSTY.el8.x86_64.rpm pigsty 2.10.1 124.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_14-2.10.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_check_14-2.9.2-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PIGSTY.el8.aarch64.rpm pigsty 2.10.1 115.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_14-2.10.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_check_14-2.9.2-1PGDG.rhel8.10.aarch64.rpm
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
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.2 120.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.10.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PIGSTY.el9.x86_64.rpm pigsty 2.10.1 119.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_14-2.10.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.10.1 119.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.10.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.3 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.9.2 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.9.2-1PGDG.rhel9.8.x86_64.rpm
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
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.2 115.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.10.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PIGSTY.el9.aarch64.rpm pigsty 2.10.1 114.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_14-2.10.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PGDG.rhel9.8.aarch64.rpm pgdg 2.10.1 114.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.10.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.3 110.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.9.2 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.9.2-1PGDG.rhel9.8.aarch64.rpm
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
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.2 123.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.10.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PIGSTY.el10.x86_64.rpm pigsty 2.10.1 122.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_14-2.10.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.10.1 121.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.10.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.3 118.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.9.2 117.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.9.2-1PGDG.rhel10.2.x86_64.rpm
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
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PIGSTY.el10.aarch64.rpm pigsty 2.10.1 115.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_14-2.10.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.9.2-1PGDG.rhel10.2.aarch64.rpm
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
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb pgdg 2.10.2 319.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb pgdg 2.10.1 316.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb pigsty 2.10.1 314.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb pgdg 2.10.0 316.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb pgdg 2.10.2 307.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb pgdg 2.10.1 304.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb pigsty 2.10.1 302.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb pgdg 2.10.0 304.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb pgdg 2.10.2 319.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb pgdg 2.10.1 316.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb pigsty 2.10.1 314.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb pgdg 2.10.0 317.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb pgdg 2.10.2 308.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb pgdg 2.10.1 305.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb pigsty 2.10.1 303.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb pgdg 2.10.0 305.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb pgdg 2.10.2 383.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb pgdg 2.10.1 379.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb pigsty 2.10.1 396.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb pgdg 2.10.0 379.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb pgdg 2.10.2 372.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb pgdg 2.10.1 368.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb pigsty 2.10.1 389.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb pgdg 2.10.0 368.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb pgdg 2.10.2 319.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb pgdg 2.10.1 316.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb pigsty 2.10.1 328.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb pgdg 2.10.0 316.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb pgdg 2.10.2 307.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb pgdg 2.10.1 304.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb pigsty 2.10.1 322.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb pgdg 2.10.0 304.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb pgdg 2.10.2 316.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb pgdg 2.10.1 313.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb pigsty 2.10.1 325.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb pgdg 2.10.0 313.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb pgdg 2.10.2 304.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb pgdg 2.10.1 301.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb pigsty 2.10.1 319.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb pgdg 2.10.0 301.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.10.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plpgsql_check` 扩展的 RPM / DEB 包：

```bash
pig build pkg plpgsql_check         # 构建 RPM / DEB 包
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

来源：

- [plpgsql_check 2.10.1 README](https://github.com/okbob/plpgsql_check/blob/v2.10.1/README.md)
- [plpgsql_check 2.10.1 release](https://github.com/okbob/plpgsql_check/releases/tag/v2.10.1)
- [plpgsql_check 2.10.1 control file](https://github.com/okbob/plpgsql_check/blob/v2.10.1/plpgsql_check.control)
- [plpgsql_check 2.9.2 to 2.10.1 changes](https://github.com/okbob/plpgsql_check/compare/v2.9.2...v2.10.1)

`plpgsql_check` 是一个 PL/pgSQL 检查器、语法检查工具、性能分析器、跟踪器和覆盖率工具。它使用 PostgreSQL 自身的解析器和执行器基础设施来分析 PL/pgSQL 函数体，因此许多问题可以在开发或 CI 阶段被发现而不会在运行时才出现。

2.10.1 版本安装的是 SQL 扩展 `2.10`。支持 PostgreSQL 14-18；上游源代码还包含对后续 PostgreSQL 开发分支的兼容性工作。

```sql
CREATE EXTENSION IF NOT EXISTS plpgsql_check;
```

### 检查一个函数

```sql
SELECT *
FROM plpgsql_check_function('public.refresh_totals()');

SELECT *
FROM plpgsql_check_function('public.refresh_totals(int, text)', fatal_errors := false);
```

返回表的变体更容易过滤、存储或用于 CI 输出：

```sql
SELECT functionid, lineno, statement, sqlstate, message, level
FROM plpgsql_check_function_tb('public.refresh_totals()');
```

输出格式包括文本、JSON 和 XML：

```sql
SELECT * FROM plpgsql_check_function('fx()', format := 'text');
SELECT * FROM plpgsql_check_function('fx()', format := 'json');
SELECT * FROM plpgsql_check_function('fx()', format := 'xml');
```

### 触发函数

触发函数需要它们操作的关系：

```sql
SELECT *
FROM plpgsql_check_function('public.audit_trigger()', 'public.accounts');

SELECT *
FROM plpgsql_check_function(
  'public.audit_trigger()',
  'public.accounts',
  newtable := 'new_rows',
  oldtable := 'old_rows'
);
```

### 警告级别

```sql
SELECT *
FROM plpgsql_check_function(
  'fx()',
  extra_warnings         := true,
  performance_warnings   := true,
  security_warnings      := true,
  compatibility_warnings := true
);
```

- `extra_warnings` 包括缺少返回值、死代码、遮蔽变量和未使用的参数。
- `performance_warnings` 包括隐式转换、类型修饰符以及可能阻止索引使用的模式。
- `security_warnings` 包括动态 SQL 和 SQL 注入风险检查。
- `compatibility_warnings` 报告过时或版本敏感的 PL/pgSQL 模式。

### 批量检查

```sql
SELECT n.nspname, p.proname, c.*
FROM pg_catalog.pg_namespace n
JOIN pg_catalog.pg_proc p ON p.pronamespace = n.oid
JOIN pg_catalog.pg_language l ON l.oid = p.prolang
CROSS JOIN LATERAL plpgsql_check_function_tb(p.oid) AS c
WHERE l.lanname = 'plpgsql'
  AND n.nspname NOT IN ('pg_catalog', 'information_schema');
```

在迁移管道中使用此模式来捕获更改依赖关系、删除列、不安全转换和 PL/pgSQL 错误，以确保发布前的安全性。

### 被动检查

被动模式会在函数启动时进行检查。它适用于开发和预生产环境，但会增加开销。

```sql
LOAD 'plpgsql_check';
SET plpgsql_check.mode = 'fresh_start';
```

常用设置：

```text
plpgsql_check.mode = disabled | by_function | fresh_start | every_start
plpgsql_check.fatal_errors = yes | no
plpgsql_check.show_nonperformance_warnings = false
plpgsql_check.show_performance_warnings = false
```

### 分析器

```sql
SELECT plpgsql_check_profiler(true);

SELECT public.refresh_totals();

SELECT lineno, exec_stmts, total_time, avg_time, source
FROM plpgsql_profiler_function_tb('public.refresh_totals()');

SELECT stmtid, parent_stmtid, lineno, exec_stmts, stmtname
FROM plpgsql_profiler_function_statements_tb('public.refresh_totals()');

SELECT * FROM plpgsql_profiler_functions_all();
SELECT plpgsql_profiler_reset_all();
```

为了共享分析器统计信息并可靠地早期初始化，在加载 `plpgsql` 之前预加载 `plpgsql_check`：

```conf
shared_preload_libraries = 'plpgsql,plpgsql_check'
```

如果没有共享预加载，分析器数据将仅限于当前会话。

### 跟踪和覆盖率

跟踪会在函数和语句的入口/出口处发出通知，并可以暴露变量值。默认情况下禁用此功能，必须由超级用户控制设置启用。

```sql
SET plpgsql_check.enable_tracer = on;
SELECT plpgsql_check_tracer(true, 'terse');

SELECT * FROM plpgsql_coverage_statements('public.refresh_totals()');
SELECT * FROM plpgsql_coverage_branches('public.refresh_totals()');
```

### 断言

在函数内部使用断言调用来描述动态 SQL、临时表、推断出的记录类型或局部检查设置：

```sql
CREATE OR REPLACE FUNCTION fx(anyelement) RETURNS text AS $$
DECLARE
  r record;
BEGIN
  PERFORM plpgsql_check_pragma('type: r (id int, processed bool)');
  RETURN $1::text;
END;
$$ LANGUAGE plpgsql;
```

版本 2.10 添加了 `plpgsql_make_pragma(regprocedure)`，它会计划 `CREATE TEMP TABLE ... AS SELECT|VALUES|TABLE` 语句而不执行它们，并返回可以提供给检查的表断言。

```sql
SELECT *
FROM plpgsql_check_function(
  'public.refresh_stage()'::regprocedure,
  pragmas => ARRAY(
    SELECT plpgsql_make_pragma('public.refresh_stage()'::regprocedure)
  )
);
```

### 注意事项

- `plpgsql_check` 需要 `plpgsql`。
- 活动检查可选地预加载，但共享分析器存储和稳健的跟踪/分析器初始化需要预加载。
- 跟踪输出可能包括函数参数和局部变量值；不要在敏感生产工作负载中广泛启用它。
- 检查器无法完全理解每个动态 SQL 字符串。使用断言来记录预期的动态对象并减少误报。
- 2.10.1 版本修复了 PostgreSQL 14 中的共享内存 LWLock tranche 注册问题；在预加载分析器/跟踪状态时，请使用此版本而不是初始 2.10.0 构建。
