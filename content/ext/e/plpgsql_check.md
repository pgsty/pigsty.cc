---
title: "plpgsql_check"
linkTitle: "plpgsql_check"
description: "PL/pgSQL 函数的附加校验、性能分析与诊断工具"
weight: 3060
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/okbob/plpgsql_check">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">okbob/plpgsql_check</div>
    <div class="ext-card__desc">https://github.com/okbob/plpgsql_check</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plpgsql_check-2.11.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plpgsql_check-2.11.0.tar.gz</div>
    <div class="ext-card__desc">plpgsql_check-2.11.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpgsql_check`**](/ext/e/plpgsql_check) | `2.11` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3060  | [**`plpgsql_check`**](/ext/e/plpgsql_check) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pldbgapi`](/ext/e/pldbgapi) [`plprofiler`](/ext/e/plprofiler) [`pglinter`](/ext/e/pglinter) [`pg_stat_plans`](/ext/e/pg_stat_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_store_plans`](/ext/e/pg_store_plans) [`hypopg`](/ext/e/hypopg) [`index_advisor`](/ext/e/index_advisor) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pkg 2.10.16; SQL 2.10; upstream PG14-20 includes development branches; packages PG14-18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.11` | {{< pgvers "19,18,17,16,15" >}} | `plpgsql_check` | `plpgsql` |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.11.0` | {{< pgvers "19,18,17,16,15" >}} | `plpgsql_check_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.10.16` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-plpgsql-check` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 2.11.0 21 | AVAIL PGDG 2.11.0 26 | AVAIL PGDG 2.11.0 40 | AVAIL PGDG 2.11.0 48 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 2.11.0 22 | AVAIL PGDG 2.11.0 27 | AVAIL PGDG 2.11.0 41 | AVAIL PGDG 2.11.0 48 |
| el9.x86_64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 |
| el9.aarch64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 |
| el10.x86_64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 | AVAIL PGDG 2.11.0 3 |
| el10.aarch64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 30 | AVAIL PGDG 2.11.0 31 | AVAIL PGDG 2.11.0 31 | AVAIL PGDG 2.11.0 31 |
| d12.x86_64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| d12.aarch64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| d13.x86_64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| d13.aarch64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| u22.x86_64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| u22.aarch64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| u24.x86_64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| u24.aarch64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| u26.x86_64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
| u26.aarch64 | AVAIL PGDG 2.10.16 3 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 | AVAIL PGDG 2.10.16 4 |
@ el9.x86_64 19 plpgsql_check_19 plpgsql_check_19-2.11.0-1PGDG.rhel9.9.x86_64.rpm pgdg 2.11.0 134.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/plpgsql_check_19-2.11.0-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 19 plpgsql_check_19 plpgsql_check_19-2.10.16-2PGDG.rhel9.9.x86_64.rpm pgdg 2.10.16 126.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/plpgsql_check_19-2.10.16-2PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 19 plpgsql_check_19 plpgsql_check_19-2.11.0-1PGDG.rhel9.9.aarch64.rpm pgdg 2.11.0 128.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/plpgsql_check_19-2.11.0-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 19 plpgsql_check_19 plpgsql_check_19-2.10.16-2PGDG.rhel9.9.aarch64.rpm pgdg 2.10.16 121.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/plpgsql_check_19-2.10.16-2PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 19 plpgsql_check_19 plpgsql_check_19-2.11.0-1PGDG.rhel10.3.x86_64.rpm pgdg 2.11.0 136.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/plpgsql_check_19-2.11.0-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 19 plpgsql_check_19 plpgsql_check_19-2.10.16-2PGDG.rhel10.3.x86_64.rpm pgdg 2.10.16 129.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/plpgsql_check_19-2.10.16-2PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 19 plpgsql_check_19 plpgsql_check_19-2.11.0-1PGDG.rhel10.3.aarch64.rpm pgdg 2.11.0 130.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/plpgsql_check_19-2.11.0-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 19 plpgsql_check_19 plpgsql_check_19-2.10.16-2PGDG.rhel10.3.aarch64.rpm pgdg 2.10.16 123.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/plpgsql_check_19-2.10.16-2PGDG.rhel10.3.aarch64.rpm
@ d12.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb pgdg 2.10.16 329.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb
@ d12.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb pgdg 2.10.16 329.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb
@ d12.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb pgdg 2.10.15 329.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb pgdg 2.10.16 316.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb
@ d12.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb pgdg 2.10.16 316.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb
@ d12.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb pgdg 2.10.15 316.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb pgdg 2.10.16 330.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb
@ d13.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb pgdg 2.10.16 330.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb
@ d13.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb pgdg 2.10.15 330.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb pgdg 2.10.16 318.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb
@ d13.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb pgdg 2.10.16 317.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb
@ d13.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb pgdg 2.10.15 317.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb pgdg 2.10.16 340.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb pgdg 2.10.16 340.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb pgdg 2.10.15 340.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb pgdg 2.10.16 327.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb pgdg 2.10.16 326.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb pgdg 2.10.15 327.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb pgdg 2.10.16 329.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb pgdg 2.10.16 328.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb pgdg 2.10.15 329.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb pgdg 2.10.16 316.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb pgdg 2.10.16 316.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb pgdg 2.10.15 315.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb pgdg 2.10.16 326.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb pgdg 2.10.16 326.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb pgdg 2.10.15 326.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb pgdg 2.10.16 313.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb pgdg 2.10.16 313.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 19 postgresql-19-plpgsql-check postgresql-19-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb pgdg 2.10.15 313.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-19-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.11.0 139.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.16-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGSTY.el8.x86_64.rpm pigsty 2.10.16 346.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_18-2.10.16-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.14-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.14 131.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.13-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.13 130.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.13-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.12-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.12 130.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.11-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.11 129.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.4 126.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.3 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 113.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_check_18-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.11.0 129.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 123.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.16-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGSTY.el8.aarch64.rpm pigsty 2.10.16 334.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_18-2.10.16-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.14-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.14 121.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.13-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.13 120.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.13-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.12-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.12 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.11-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.11 120.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.7-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.7 117.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.4 117.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.3 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel9.9.x86_64.rpm pgdg 2.11.0 133.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.11.0-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel9.9.x86_64.rpm pgdg 2.10.16 126.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_check_18-2.10.16-2PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGSTY.el9.x86_64.rpm pigsty 2.10.16 348.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_18-2.10.16-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel9.9.aarch64.rpm pgdg 2.11.0 128.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.11.0-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel9.9.aarch64.rpm pgdg 2.10.16 121.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_check_18-2.10.16-2PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGSTY.el9.aarch64.rpm pigsty 2.10.16 340.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_18-2.10.16-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel10.3.x86_64.rpm pgdg 2.11.0 136.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.11.0-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel10.3.x86_64.rpm pgdg 2.10.16 129.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_check_18-2.10.16-2PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGSTY.el10.x86_64.rpm pigsty 2.10.16 350.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_18-2.10.16-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel10.3.aarch64.rpm pgdg 2.11.0 130.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.11.0-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.11.0 130.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel10.3.aarch64.rpm pgdg 2.10.16 123.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.16-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-2PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 123.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.16-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGSTY.el10.aarch64.rpm pigsty 2.10.16 342.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_18-2.10.16-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.16-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 122.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.15-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.15 122.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.12-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.12 121.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.11 120.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.7-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.7 118.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.4 117.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.3 117.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 109.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 109.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 109.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 plpgsql_check_18 plpgsql_check_18-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_check_18-2.8.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb pgdg 2.10.16 329.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb pgdg 2.10.16 329.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb pigsty 2.10.16 326.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb pgdg 2.10.15 329.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb pgdg 2.10.16 317.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb pgdg 2.10.16 316.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb pigsty 2.10.16 315.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb pgdg 2.10.15 316.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb pgdg 2.10.16 329.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb pgdg 2.10.16 329.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb pigsty 2.10.16 327.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb pgdg 2.10.15 329.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb pgdg 2.10.16 318.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb pgdg 2.10.16 318.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb pigsty 2.10.16 316.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb pgdg 2.10.15 317.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb pgdg 2.10.16 339.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb pgdg 2.10.16 339.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb pigsty 2.10.16 356.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb pgdg 2.10.15 339.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb pgdg 2.10.16 327.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb pgdg 2.10.16 326.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb pigsty 2.10.16 347.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb pgdg 2.10.15 327.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb pgdg 2.10.16 328.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb pgdg 2.10.16 328.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb pigsty 2.10.16 341.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb pgdg 2.10.15 328.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb pgdg 2.10.16 316.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb pgdg 2.10.16 316.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb pigsty 2.10.16 334.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb pgdg 2.10.15 316.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb pgdg 2.10.16 325.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb pgdg 2.10.16 326.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb pigsty 2.10.16 338.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb pgdg 2.10.15 326.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb pgdg 2.10.16 313.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb pgdg 2.10.16 314.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb pigsty 2.10.16 332.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-check postgresql-18-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb pgdg 2.10.15 313.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-18-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.11.0 139.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.16-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGSTY.el8.x86_64.rpm pigsty 2.10.16 346.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_17-2.10.16-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.14-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.14 131.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.13-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.13 130.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.13-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.12-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.12 129.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.11-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.11 129.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.4 126.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.3 125.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 114.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 105.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_check_17-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.11.0 129.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.16-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGSTY.el8.aarch64.rpm pigsty 2.10.16 334.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_17-2.10.16-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.14-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.14 121.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.13-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.13 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.13-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.12-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.12 120.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.11-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.11 119.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.7-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.7 117.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.3 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 104.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 103.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 103.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 97.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_check_17-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel9.9.x86_64.rpm pgdg 2.11.0 134.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.11.0-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel9.9.x86_64.rpm pgdg 2.10.16 126.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_check_17-2.10.16-2PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGSTY.el9.x86_64.rpm pigsty 2.10.16 347.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_17-2.10.16-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel9.9.aarch64.rpm pgdg 2.11.0 128.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.11.0-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel9.9.aarch64.rpm pgdg 2.10.16 121.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_check_17-2.10.16-2PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGSTY.el9.aarch64.rpm pigsty 2.10.16 340.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_17-2.10.16-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel10.3.x86_64.rpm pgdg 2.11.0 137.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.11.0-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel10.3.x86_64.rpm pgdg 2.10.16 129.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_check_17-2.10.16-2PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGSTY.el10.x86_64.rpm pigsty 2.10.16 349.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_17-2.10.16-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel10.3.aarch64.rpm pgdg 2.11.0 129.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.11.0-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.11.0 129.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel10.3.aarch64.rpm pgdg 2.10.16 123.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.16-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-2PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 123.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.16-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGSTY.el10.aarch64.rpm pigsty 2.10.16 342.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_17-2.10.16-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.16-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.15-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.15 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.12-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.12 121.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.11 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.7-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.7 118.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.4 117.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.3 117.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 plpgsql_check_17 plpgsql_check_17-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 104.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_check_17-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb pgdg 2.10.16 328.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb pgdg 2.10.16 328.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb pigsty 2.10.16 326.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb pgdg 2.10.15 328.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb pgdg 2.10.16 316.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb pgdg 2.10.16 316.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb pigsty 2.10.16 314.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb pgdg 2.10.15 316.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb pgdg 2.10.16 329.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb pgdg 2.10.16 329.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb pigsty 2.10.16 327.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb pgdg 2.10.15 329.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb pgdg 2.10.16 318.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb pgdg 2.10.16 317.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb pigsty 2.10.16 315.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb pgdg 2.10.15 317.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb pgdg 2.10.16 418.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb pgdg 2.10.16 417.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb pigsty 2.10.16 436.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb pgdg 2.10.15 417.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb pgdg 2.10.16 405.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb pgdg 2.10.16 405.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb pigsty 2.10.16 428.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb pgdg 2.10.15 405.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb pgdg 2.10.16 328.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb pgdg 2.10.16 328.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb pigsty 2.10.16 341.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb pgdg 2.10.15 328.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb pgdg 2.10.16 316.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb pgdg 2.10.16 316.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb pigsty 2.10.16 334.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb pgdg 2.10.15 316.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb pgdg 2.10.16 326.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb pgdg 2.10.16 326.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb pigsty 2.10.16 338.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb pgdg 2.10.15 325.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb pgdg 2.10.16 312.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb pgdg 2.10.16 312.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb pigsty 2.10.16 332.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-check postgresql-17-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb pgdg 2.10.15 312.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-17-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.11.0 139.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.16-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGSTY.el8.x86_64.rpm pigsty 2.10.16 346.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_16-2.10.16-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.14-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.14 131.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.13-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.13 130.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.13-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.12-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.12 129.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.11-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.11 129.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.4 126.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.3 125.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 119.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 114.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 114.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 113.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 113.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 105.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.8-1PGDG.rhel8.x86_64.rpm pgdg 2.7.8 104.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7.7 104.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.6-1PGDG.rhel8.x86_64.rpm pgdg 2.7.6 103.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.5-1PGDG.rhel8.x86_64.rpm pgdg 2.7.5 103.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.4-1PGDG.rhel8.x86_64.rpm pgdg 2.7.4 103.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.2-1PGDG.rhel8.x86_64.rpm pgdg 2.7.2 105.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.1-1PGDG.rhel8.x86_64.rpm pgdg 2.7.1 105.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 104.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.2-1PGDG.rhel8.x86_64.rpm pgdg 2.6.2 102.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 102.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 101.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.4-1PGDG.rhel8.x86_64.rpm pgdg 2.5.4 100.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.1-1PGDG.rhel8.x86_64.rpm pgdg 2.5.1 100.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.5.0-1PGDG.rhel8.x86_64.rpm pgdg 2.5.0 100.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_check_16-2.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.11.0 129.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.16-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGSTY.el8.aarch64.rpm pigsty 2.10.16 334.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_16-2.10.16-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.14-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.14 121.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.13-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.13 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.13-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.12-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.12 120.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.11-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.11 119.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.7-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.7 117.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.3 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 105.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 105.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 103.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 103.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 97.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.8-1PGDG.rhel8.aarch64.rpm pgdg 2.7.8 96.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7.7 96.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.6-1PGDG.rhel8.aarch64.rpm pgdg 2.7.6 96.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.5-1PGDG.rhel8.aarch64.rpm pgdg 2.7.5 95.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.4-1PGDG.rhel8.aarch64.rpm pgdg 2.7.4 95.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.2-1PGDG.rhel8.aarch64.rpm pgdg 2.7.2 98.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.1-1PGDG.rhel8.aarch64.rpm pgdg 2.7.1 98.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 96.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.2-1PGDG.rhel8.aarch64.rpm pgdg 2.6.2 95.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 94.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.6.0-1PGDG.rhel8.aarch64.rpm pgdg 2.6.0 94.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.4-1PGDG.rhel8.aarch64.rpm pgdg 2.5.4 93.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.1-1PGDG.rhel8.aarch64.rpm pgdg 2.5.1 93.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.5.0-1PGDG.rhel8.aarch64.rpm pgdg 2.5.0 93.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_check_16-2.5.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel9.9.x86_64.rpm pgdg 2.11.0 134.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.11.0-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel9.9.x86_64.rpm pgdg 2.10.16 126.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_check_16-2.10.16-2PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGSTY.el9.x86_64.rpm pigsty 2.10.16 347.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_16-2.10.16-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel9.9.aarch64.rpm pgdg 2.11.0 128.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.11.0-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel9.9.aarch64.rpm pgdg 2.10.16 121.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_check_16-2.10.16-2PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGSTY.el9.aarch64.rpm pigsty 2.10.16 340.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_16-2.10.16-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel10.3.x86_64.rpm pgdg 2.11.0 137.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.11.0-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel10.3.x86_64.rpm pgdg 2.10.16 129.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_check_16-2.10.16-2PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGSTY.el10.x86_64.rpm pigsty 2.10.16 349.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_16-2.10.16-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel10.3.aarch64.rpm pgdg 2.11.0 129.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.11.0-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.11.0 129.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel10.3.aarch64.rpm pgdg 2.10.16 123.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.16-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-2PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 123.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.16-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGSTY.el10.aarch64.rpm pigsty 2.10.16 342.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_16-2.10.16-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.16-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.15-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.15 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.12-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.12 121.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.11 120.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.7-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.7 118.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.4 117.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.3 117.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 105.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 plpgsql_check_16 plpgsql_check_16-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 104.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_check_16-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb pgdg 2.10.16 329.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb pgdg 2.10.16 328.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb pigsty 2.10.16 326.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb pgdg 2.10.15 328.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb pgdg 2.10.16 316.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb pgdg 2.10.16 316.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb pigsty 2.10.16 314.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb pgdg 2.10.15 316.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb pgdg 2.10.16 329.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb pgdg 2.10.16 329.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb pigsty 2.10.16 327.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb pgdg 2.10.15 329.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb pgdg 2.10.16 317.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb pgdg 2.10.16 317.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb pigsty 2.10.16 315.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb pgdg 2.10.15 317.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb pgdg 2.10.16 411.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb pgdg 2.10.16 411.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb pigsty 2.10.16 430.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb pgdg 2.10.15 411.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb pgdg 2.10.16 399.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb pgdg 2.10.16 399.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb pigsty 2.10.16 421.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb pgdg 2.10.15 399.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb pgdg 2.10.16 328.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb pgdg 2.10.16 328.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb pigsty 2.10.16 341.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb pgdg 2.10.15 328.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb pgdg 2.10.16 316.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb pgdg 2.10.16 316.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb pigsty 2.10.16 344.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb pgdg 2.10.15 316.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb pgdg 2.10.16 326.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb pgdg 2.10.16 325.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb pigsty 2.10.16 338.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb pgdg 2.10.15 326.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb pgdg 2.10.16 313.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb pgdg 2.10.16 313.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb pigsty 2.10.16 331.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-check postgresql-16-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb pgdg 2.10.15 312.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-16-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.11.0 139.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.16-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGSTY.el8.x86_64.rpm pigsty 2.10.16 348.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plpgsql_check_15-2.10.16-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.16 132.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.14-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.14 131.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.13-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.13 130.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.13-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.12-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.12 130.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.11-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.11 129.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.4 126.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.3 126.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.2 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.10.1 124.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.10.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.3 120.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.2 120.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.9.1 120.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.10 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.8 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.5 116.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.8.4 115.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel8.x86_64.rpm pgdg 2.8.3 115.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel8.x86_64.rpm pgdg 2.8.2 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.8.0-1PGDG.rhel8.x86_64.rpm pgdg 2.8.0 114.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.15-1PGDG.rhel8.x86_64.rpm pgdg 2.7.15 113.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.15-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.14-1PGDG.rhel8.x86_64.rpm pgdg 2.7.14 106.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.12-1PGDG.rhel8.x86_64.rpm pgdg 2.7.12 105.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.11-1PGDG.rhel8.x86_64.rpm pgdg 2.7.11 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.8-1PGDG.rhel8.x86_64.rpm pgdg 2.7.8 105.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7.7 104.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.6-1PGDG.rhel8.x86_64.rpm pgdg 2.7.6 104.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.5-1PGDG.rhel8.x86_64.rpm pgdg 2.7.5 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.4-1PGDG.rhel8.x86_64.rpm pgdg 2.7.4 104.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.2-1PGDG.rhel8.x86_64.rpm pgdg 2.7.2 107.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.1-1PGDG.rhel8.x86_64.rpm pgdg 2.7.1 107.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 105.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.2-1PGDG.rhel8.x86_64.rpm pgdg 2.6.2 104.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 103.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 103.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.5.4-1PGDG.rhel8.x86_64.rpm pgdg 2.5.4 101.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.5.1-1PGDG.rhel8.x86_64.rpm pgdg 2.5.1 101.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.4-1.rhel8.x86_64.rpm pgdg 2.3.4 98.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.2-1.rhel8.x86_64.rpm pgdg 2.3.2 97.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.1-1.rhel8.x86_64.rpm pgdg 2.3.1 97.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 96.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.6-1.rhel8.x86_64.rpm pgdg 2.2.6 95.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.6-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.5-1.rhel8.x86_64.rpm pgdg 2.2.5 95.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.4-1.rhel8.x86_64.rpm pgdg 2.2.4 95.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.3-1.rhel8.x86_64.rpm pgdg 2.2.3 95.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.2.2-1.rhel8.x86_64.rpm pgdg 2.2.2 94.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_check_15-2.2.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.11.0 128.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.16-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGSTY.el8.aarch64.rpm pigsty 2.10.16 336.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plpgsql_check_15-2.10.16-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.16 122.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.14-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.14 121.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.13-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.13 120.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.13-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.12-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.12 120.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.11-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.11 119.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.7-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.7 117.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.3 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.2 116.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.10.1 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.10.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.3 111.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.2 111.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.9.1 111.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.10 108.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.8 107.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.5 106.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.8.4 106.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel8.aarch64.rpm pgdg 2.8.3 106.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel8.aarch64.rpm pgdg 2.8.2 106.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.0-1PGDG.rhel8.aarch64.rpm pgdg 2.8.0 104.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.15-1PGDG.rhel8.aarch64.rpm pgdg 2.7.15 104.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.15-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.14-1PGDG.rhel8.aarch64.rpm pgdg 2.7.14 98.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.12-1PGDG.rhel8.aarch64.rpm pgdg 2.7.12 97.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.11-1PGDG.rhel8.aarch64.rpm pgdg 2.7.11 97.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.8-1PGDG.rhel8.aarch64.rpm pgdg 2.7.8 97.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7.7 96.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.6-1PGDG.rhel8.aarch64.rpm pgdg 2.7.6 96.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.5-1PGDG.rhel8.aarch64.rpm pgdg 2.7.5 96.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.4-1PGDG.rhel8.aarch64.rpm pgdg 2.7.4 96.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.2-1PGDG.rhel8.aarch64.rpm pgdg 2.7.2 99.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.1-1PGDG.rhel8.aarch64.rpm pgdg 2.7.1 99.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 98.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.2-1PGDG.rhel8.aarch64.rpm pgdg 2.6.2 96.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 96.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.6.0-1PGDG.rhel8.aarch64.rpm pgdg 2.6.0 95.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.5.4-1PGDG.rhel8.aarch64.rpm pgdg 2.5.4 94.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.5.1-1PGDG.rhel8.aarch64.rpm pgdg 2.5.1 94.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.4-1.rhel8.aarch64.rpm pgdg 2.3.4 91.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.2-1.rhel8.aarch64.rpm pgdg 2.3.2 90.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.1-1.rhel8.aarch64.rpm pgdg 2.3.1 90.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 90.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.6-1.rhel8.aarch64.rpm pgdg 2.2.6 89.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.6-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.5-1.rhel8.aarch64.rpm pgdg 2.2.5 88.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.4-1.rhel8.aarch64.rpm pgdg 2.2.4 88.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.2.3-1.rhel8.aarch64.rpm pgdg 2.2.3 88.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_check_15-2.2.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel9.9.x86_64.rpm pgdg 2.11.0 133.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.11.0-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel9.9.x86_64.rpm pgdg 2.10.16 126.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_check_15-2.10.16-2PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGSTY.el9.x86_64.rpm pigsty 2.10.16 351.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plpgsql_check_15-2.10.16-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel9.9.aarch64.rpm pgdg 2.11.0 128.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.11.0-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel9.9.aarch64.rpm pgdg 2.10.16 121.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_check_15-2.10.16-2PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGSTY.el9.aarch64.rpm pigsty 2.10.16 343.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plpgsql_check_15-2.10.16-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel10.3.x86_64.rpm pgdg 2.11.0 136.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.11.0-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel10.3.x86_64.rpm pgdg 2.10.16 129.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_check_15-2.10.16-2PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGSTY.el10.x86_64.rpm pigsty 2.10.16 353.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plpgsql_check_15-2.10.16-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel10.3.aarch64.rpm pgdg 2.11.0 129.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.11.0-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.11.0 129.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel10.3.aarch64.rpm pgdg 2.10.16 123.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.16-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-2PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 123.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.16-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGSTY.el10.aarch64.rpm pigsty 2.10.16 345.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plpgsql_check_15-2.10.16-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.16-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.16 122.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.15-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.15 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.12-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.12 121.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.11 120.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.7-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.7 118.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.4 117.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.3 117.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.2 117.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.10.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.10.1 115.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.10.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.3 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.2 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.2.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 2.9.1 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.11-1PGDG.rhel10.2.aarch64.rpm pgdg 2.8.11 108.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.10-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.10 108.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.10-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.1.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.8-1PGDG.rhel10.0.aarch64.rpm pgdg 2.8.8 108.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.5-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.5-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.5 108.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.5-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.1.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.4-1PGDGrhel10.0.aarch64.rpm pgdg 2.8.4 108.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.4-1PGDGrhel10.0.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.3-1PGDG.rhel10.aarch64.rpm pgdg 2.8.3 108.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.2-1PGDG.rhel10.aarch64.rpm pgdg 2.8.2 108.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 plpgsql_check_15 plpgsql_check_15-2.8.1-1PGDG.rhel10.aarch64.rpm pgdg 2.8.1 107.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_check_15-2.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb pgdg 2.10.16 331.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb pgdg 2.10.16 332.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb pigsty 2.10.16 329.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb pgdg 2.10.15 331.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb pgdg 2.10.16 319.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb pgdg 2.10.16 319.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb pigsty 2.10.16 401.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb pgdg 2.10.15 319.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb pgdg 2.10.16 332.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb pgdg 2.10.16 332.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb pigsty 2.10.16 330.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb pgdg 2.10.15 332.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb pgdg 2.10.16 320.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb pgdg 2.10.16 320.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb pigsty 2.10.16 319.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb pgdg 2.10.15 320.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb pgdg 2.10.16 415.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb pgdg 2.10.16 415.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb pigsty 2.10.16 434.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb pgdg 2.10.15 414.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb pgdg 2.10.16 402.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb pgdg 2.10.16 402.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb pigsty 2.10.16 425.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb pgdg 2.10.15 403.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb pgdg 2.10.16 331.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb pgdg 2.10.16 331.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb pigsty 2.10.16 345.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb pgdg 2.10.15 331.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb pgdg 2.10.16 320.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb pgdg 2.10.16 319.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb pigsty 2.10.16 338.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb pgdg 2.10.15 319.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb pgdg 2.10.16 329.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb pgdg 2.10.16 329.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb pigsty 2.10.16 342.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb pgdg 2.10.15 329.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb pgdg 2.10.16 316.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb pgdg 2.10.16 316.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb pigsty 2.10.16 335.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.16-1PGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-check postgresql-15-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb pgdg 2.10.15 316.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plpgsql-check/postgresql-15-plpgsql-check_2.10.15-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plpgsql_check` 扩展的 RPM / DEB 包：

```bash
pig build pkg plpgsql_check         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plpgsql_check` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install plpgsql_check;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y plpgsql_check -v 19  # PG 19
pig ext install -y plpgsql_check -v 18  # PG 18
pig ext install -y plpgsql_check -v 17  # PG 17
pig ext install -y plpgsql_check -v 16  # PG 16
pig ext install -y plpgsql_check -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y plpgsql_check_19       # PG 19
dnf install -y plpgsql_check_18       # PG 18
dnf install -y plpgsql_check_17       # PG 17
dnf install -y plpgsql_check_16       # PG 16
dnf install -y plpgsql_check_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-plpgsql-check   # PG 19
apt install -y postgresql-18-plpgsql-check   # PG 18
apt install -y postgresql-17-plpgsql-check   # PG 17
apt install -y postgresql-16-plpgsql-check   # PG 16
apt install -y postgresql-15-plpgsql-check   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION plpgsql_check CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：

- [当前版本资料](https://api.pgxn.org/src/plpgsql_check/plpgsql_check-2.11.0/README.md)
- [当前版本资料](https://api.pgxn.org/src/plpgsql_check/plpgsql_check-2.11.0/plpgsql_check.control)
- [安装 SQL](https://api.pgxn.org/src/plpgsql_check/plpgsql_check-2.11.0/plpgsql_check--2.11.sql)

- [README.md](https://github.com/okbob/plpgsql_check/blob/9a5c0ec4babebd5eb8e0db104c54f7ddb43fcc07/README.md)
- [Control](https://github.com/okbob/plpgsql_check/blob/9a5c0ec4babebd5eb8e0db104c54f7ddb43fcc07/plpgsql_check.control)
- [Release](https://github.com/okbob/plpgsql_check/releases/tag/v2.10.16)
- [Changes](https://github.com/okbob/plpgsql_check/compare/2.10.15...v2.10.16)

`plpgsql_check` 是面向 PL/pgSQL 的检查器、代码规范检查器、性能分析器、跟踪器和覆盖率工具。它利用 PostgreSQL 自身的解析器和执行器基础设施分析 PL/pgSQL 函数体，因此许多原本只会在运行时出现的问题，可以在开发或 CI 阶段被发现。

当前上游发行版 2.11.0 安装 SQL 扩展版本 `2.11`。README 覆盖 PostgreSQL 14–20，其中包含开发版本；这不代表对应二进制软件包已经可用。

```sql
CREATE EXTENSION IF NOT EXISTS plpgsql_check;
```

### 检查函数

```sql
SELECT *
FROM plpgsql_check_function('public.refresh_totals()');

SELECT *
FROM plpgsql_check_function('public.refresh_totals(int, text)', fatal_errors := false);
```

返回表的变体更容易筛选、存储或用于 CI 输出：

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

### 触发器函数

检查触发器函数时，需要指定其操作的关系：

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

- `extra_warnings` 覆盖缺少返回值、死代码、变量遮蔽和未使用参数。
- `performance_warnings` 覆盖隐式类型转换、类型修饰符以及可能妨碍索引使用的模式。
- `security_warnings` 包括动态 SQL 和 SQL 注入风险检查。
- `compatibility_warnings` 报告过时或对版本敏感的 PL/pgSQL 模式。

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

可以在迁移流水线中使用这一模式，在发布前发现依赖项变化、列被删除、不安全的类型转换以及 PL/pgSQL 错误。

### 被动检查

被动模式会在函数启动时执行检查。它适用于开发和预生产环境，但会增加开销。

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

### 性能分析器

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

要共享性能分析器统计信息并确保可靠的早期初始化，请在 `plpgsql_check` 之前预加载 `plpgsql`：

```ini
shared_preload_libraries = 'plpgsql,plpgsql_check'
```

如果未共享预加载，性能分析器数据仅限当前活动会话。

### 跟踪器与覆盖率

跟踪功能会在进入和退出函数及语句时发出通知，并可能暴露变量值。它默认禁用，必须通过由超级用户控制的设置启用。

```sql
SET plpgsql_check.enable_tracer = on;
SELECT plpgsql_check_tracer(true, 'terse');

SELECT * FROM plpgsql_coverage_statements('public.refresh_totals()');
SELECT * FROM plpgsql_coverage_branches('public.refresh_totals()');
```

### 编译指示

在函数内使用编译指示调用来描述动态 SQL、临时表、推断出的记录类型或局部检查设置：

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

版本 2.10 新增了 `plpgsql_make_pragma(regprocedure)`，它会规划临时表创建但不实际执行，并返回可提供给检查器的表编译指示。发行版 2.10.2 将其扩展至更多 `CREATE TABLE` 语句形式：

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

- `plpgsql_check` 依赖 `plpgsql`。
- 主动检查不强制要求预加载，但共享性能分析器存储以及可靠的跟踪器/性能分析器初始化需要预加载。
- 跟踪器输出可能包含函数参数和局部变量值；不要在敏感的生产工作负载中广泛启用。
- 检查器无法完美理解所有动态 SQL 字符串。请使用编译指示记录预期的动态对象，以减少误报。
- 发行版 2.10.2 和 2.10.3 修复了分析复合参数时可能发生的崩溃，以及为带多态参数的函数生成覆盖率或性能分析报告时可能发生的崩溃。版本 2.10.16 保留这些先前的修复，并修正了更多误报。

发行包 META 将许可证标为 BSD，但随包 LICENSE 文件使用 MIT 正文；目录以随包许可证文件为准。

### 2.10.16 的变化

性能分析报告中的动态 SQL 查询标识默认关闭，仅在需要时启用 `plpgsql_check.profiler_show_dynquery_query_id`。本版还改善格式字符串与多态类型检查，并修复执行计划保留及重试过程中的泄漏。分支覆盖率会区分 IF/ELSIF 条件求值失败与真正进入隐式 ELSE 分支。

```sql
SET plpgsql_check.profiler_show_dynquery_query_id = on;
```

该历史补丁的 SQL 版本仍为 `2.10`，仅该补丁不要求执行扩展迁移。应重新连接使用旧库的会话；共享预加载的实例需要重启。修改运行中的服务器前应先演练升级。

### 2.10.16 修正

源码发行版 2.10.16 保持 SQL 扩展版本 2.10，修复被动检查模式下访问复合类型变量元组描述符的问题。这是上游库更新，不代表相应二进制包已发布。


### 2.11.0 升级

当前分发版本 2.11.0 使用 SQL 扩展版本 `2.11`。新增纯表达式中标签使用的警告，以及赋值给 SEARCH_PATH 的安全检查，并修正若干误报。发行包提供安装 SQL，但没有 `ALTER EXTENSION UPDATE` 迁移脚本。从 `2.10` 迁移时，应检查依赖对象并演练扩展重建；不能假定存在原地升级路径，也不能盲目使用 `DROP ... CASCADE`。替换库后，重新连接加载过旧库的会话；共享预加载实例需要重启。
