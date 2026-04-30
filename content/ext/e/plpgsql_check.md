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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plpgsql_check-2.8.11.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plpgsql_check-2.8.11.tar.gz</div>
    <div class="ext-card__desc">plpgsql_check-2.8.11.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpgsql_check`**](/ext/e/plpgsql_check) | `2.8.11` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8.11` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_check` | `plpgsql` |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8.10` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_check_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8.11` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plpgsql-check` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.8.10 6 | AVAIL PGDG 2.8.10 11 | AVAIL PGDG 2.8.10 25 | AVAIL PGDG 2.8.10 33 | AVAIL PGDG 2.8.10 43 |
| el8.aarch64 | AVAIL PGDG 2.8.10 6 | AVAIL PGDG 2.8.10 11 | AVAIL PGDG 2.8.10 25 | AVAIL PGDG 2.8.10 32 | AVAIL PGDG 2.8.10 32 |
| el9.x86_64 | AVAIL PGDG 2.8.10 6 | AVAIL PGDG 2.8.10 11 | AVAIL PGDG 2.8.10 25 | AVAIL PGDG 2.8.10 33 | AVAIL PGDG 2.8.10 40 |
| el9.aarch64 | AVAIL PGDG 2.8.10 6 | AVAIL PGDG 2.8.10 11 | AVAIL PGDG 2.8.10 25 | AVAIL PGDG 2.8.10 32 | AVAIL PGDG 2.8.10 32 |
| el10.x86_64 | AVAIL PGDG 2.8.10 6 | AVAIL PGDG 2.8.10 7 | AVAIL PGDG 2.8.10 7 | AVAIL PGDG 2.8.10 7 | AVAIL PGDG 2.8.10 7 |
| el10.aarch64 | AVAIL PGDG 2.8.10 6 | AVAIL PGDG 2.8.10 7 | AVAIL PGDG 2.8.10 7 | AVAIL PGDG 2.8.10 7 | AVAIL PGDG 2.8.10 7 |
| d12.x86_64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| d12.aarch64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| d13.x86_64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| d13.aarch64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| u22.x86_64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| u22.aarch64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| u24.x86_64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| u24.aarch64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| u26.x86_64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
| u26.aarch64 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 | AVAIL PGDG 2.8.11 1 |
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 114.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 292.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 281.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 293.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 282.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 301.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 291.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 291.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 280.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 290.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 278.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
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
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel9.x86_64.rpm pgdg 2.8.3 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel9.x86_64.rpm pgdg 2.8.2 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel9.x86_64.rpm pgdg 2.8.0 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel9.x86_64.rpm pgdg 2.7.15 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.15-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel9.x86_64.rpm pgdg 2.7.14 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel9.x86_64.rpm pgdg 2.7.12 103.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel9.x86_64.rpm pgdg 2.7.11 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.7.11-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel9.aarch64.rpm pgdg 2.8.3 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel9.aarch64.rpm pgdg 2.8.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel9.aarch64.rpm pgdg 2.8.0 102.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel9.aarch64.rpm pgdg 2.7.15 102.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.15-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel9.aarch64.rpm pgdg 2.7.14 98.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel9.aarch64.rpm pgdg 2.7.12 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel9.aarch64.rpm pgdg 2.7.11 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.7.11-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 111.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 110.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 104.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 292.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 281.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 292.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 282.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 372.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 361.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 291.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 280.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 290.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 278.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
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
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.8.4-1PGDG.rhel9.7.x86_64.rpm
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
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 103.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.8.4-1PGDG.rhel9.7.aarch64.rpm
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
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 111.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 110.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 104.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 292.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 281.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 292.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 282.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 367.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 356.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 291.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 280.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 290.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 278.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
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
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 113.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 113.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.8.4-1PGDG.rhel9.7.x86_64.rpm
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
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.8.4-1PGDG.rhel9.7.aarch64.rpm
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
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 115.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 115.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 295.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 283.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 295.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 284.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 370.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 359.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 295.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 283.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 293.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 281.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
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
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.10 112.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.8 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.5 112.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.8.4 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_check_14-2.8.4-1PGDG.rhel9.7.x86_64.rpm
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
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.10 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.8 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 2.8.4 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_check_14-2.8.4-1PGDG.rhel9.7.aarch64.rpm
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
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.10 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel10.1.x86_64.rpm pgdg 2.8.8 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.5 115.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.5-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDGrhel10.1.x86_64.rpm pgdg 2.8.4 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel10.x86_64.rpm pgdg 2.8.3 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel10.x86_64.rpm pgdg 2.8.2 115.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 plpgsql_check_14 plpgsql_check_14-2.8.1-1PGDG.rhel10.x86_64.rpm pgdg 2.8.1 114.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_check_14-2.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 plpgsql_check_14 plpgsql_check_14-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_check_14-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb pgdg 2.8.11 295.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb pgdg 2.8.11 283.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb pgdg 2.8.11 296.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb pgdg 2.8.11 284.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb pgdg 2.8.11 353.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb pgdg 2.8.11 343.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb pgdg 2.8.11 295.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb pgdg 2.8.11 283.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb pgdg 2.8.11 293.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-check postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb pgdg 2.8.11 281.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-14-plpgsql-check_2.8.11-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `plpgsql_check` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
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

> [plpgsql_check: PL/pgSQL 函数的增强检查器](https://github.com/okbob/plpgsql_check)

`plpgsql_check` 是 PL/pgSQL 函数的代码检查和分析工具，能够在开发阶段而非运行时检测错误。

```sql
CREATE EXTENSION plpgsql_check;
```

### 检查函数

```sql
SELECT * FROM plpgsql_check_function('my_function()');
SELECT * FROM plpgsql_check_function('my_function(int, text)');
SELECT * FROM plpgsql_check_function('my_function()', fatal_errors := false);
```

### 输出格式

```sql
SELECT * FROM plpgsql_check_function('fx()', format := 'text');
SELECT * FROM plpgsql_check_function('fx()', format := 'json');
SELECT * FROM plpgsql_check_function('fx()', format := 'xml');
```

### 检查触发器函数

```sql
-- 触发器函数需要关联的表
SELECT * FROM plpgsql_check_function('my_trigger_func()', 'my_table');

-- 使用过渡表
SELECT * FROM plpgsql_check_function(
  'my_trigger_func()', 'my_table',
  newtable := 'newtab', oldtable := 'oldtab'
);
```

### 警告类别

```sql
SELECT * FROM plpgsql_check_function('fx()',
  extra_warnings := true,         -- 死代码、未使用的参数
  performance_warnings := true,   -- 索引和类型转换问题
  security_warnings := true,      -- SQL 注入检查
  compatibility_warnings := true  -- 过时的模式
);
```

### 批量检查所有函数

```sql
SELECT p.oid, p.proname, plpgsql_check_function(p.oid)
FROM pg_catalog.pg_namespace n
JOIN pg_catalog.pg_proc p ON pronamespace = n.oid
JOIN pg_catalog.pg_language l ON p.prolang = l.oid
WHERE l.lanname = 'plpgsql' AND p.prorettype <> 2279;
```

### 被动模式（执行时检查）

```sql
LOAD 'plpgsql_check';
SET plpgsql_check.mode = 'every_start';  -- 每次执行前检查
```

或在 `postgresql.conf` 中配置：

```
shared_preload_libraries = 'plpgsql,plpgsql_check'
plpgsql_check.mode = 'every_start'
```

### 性能分析器

```sql
-- 启用性能分析
SELECT plpgsql_check_profiler(true);

-- 执行函数以收集数据
SELECT my_function();

-- 查看每行执行时间
SELECT lineno, avg_time, source
FROM plpgsql_profiler_function_tb('my_function()');

-- 每条语句的性能分析
SELECT stmtid, parent_stmtid, lineno, exec_stmts, stmtname
FROM plpgsql_profiler_function_statements_tb('my_function()');

-- 所有函数的统计信息
SELECT * FROM plpgsql_profiler_functions_all();

-- 重置性能分析数据
SELECT plpgsql_profiler_reset_all();
```

### 依赖追踪

```sql
SELECT * FROM plpgsql_show_dependency_tb('my_function(int)');
```

### 覆盖率指标

```sql
SELECT * FROM plpgsql_coverage_statements('my_function()');
SELECT * FROM plpgsql_coverage_branches('my_function()');
```

### Pragma 指令

在函数注释中嵌入检查选项：

```sql
CREATE OR REPLACE FUNCTION fx(anyelement) RETURNS text AS $$
BEGIN
  /* @plpgsql_check_options: anyelementtype = text */
  RETURN $1;
END;
$$ LANGUAGE plpgsql;
```
