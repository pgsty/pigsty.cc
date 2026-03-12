---
title: "plprofiler"
linkTitle: "plprofiler"
description: "剖析 PL/pgSQL 函数"
weight: 3070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsql/plprofiler">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsql/plprofiler</div>
    <div class="ext-card__desc">https://github.com/bigsql/plprofiler</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plprofiler`**](/ext/e/plprofiler) | `4.2.5` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3070  | [**`plprofiler`**](/ext/e/plprofiler) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pldbgapi`](/ext/e/pldbgapi) [`plpgsql_check`](/ext/e/plpgsql_check) [`plpgsql`](/ext/e/plpgsql) [`pgtap`](/ext/e/pgtap) [`pg_profile`](/ext/e/pg_profile) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_store_plans`](/ext/e/pg_store_plans) [`auto_explain`](/ext/e/auto_explain) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.5` | {{< pgvers "18,17,16,15,14" >}} | `plprofiler` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.5` | {{< pgvers "18,17,16,15,14" >}} | `plprofiler_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plprofiler` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 4 | AVAIL PGDG 4.2.5 4 |
| el8.aarch64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 4 | AVAIL PGDG 4.2.5 4 |
| el9.x86_64 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 4 | AVAIL PGDG 4.2.5 4 |
| el9.aarch64 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 4 | AVAIL PGDG 4.2.5 4 |
| el10.x86_64 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 2 |
| el10.aarch64 | AVAIL PGDG 4.2.5 2 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| d12.x86_64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| d12.aarch64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| d13.x86_64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| d13.aarch64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| u22.x86_64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| u22.aarch64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| u24.x86_64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
| u24.aarch64 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 | AVAIL PGDG 4.2.5 1 |
@ el8.x86_64 18 plprofiler_18 plprofiler_18-4.2.5-5PGDG.rhel8.10.x86_64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/plprofiler_18-4.2.5-5PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 plprofiler_18 plprofiler_18-4.2.5-5PGDG.rhel8.10.aarch64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/plprofiler_18-4.2.5-5PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 plprofiler_18 plprofiler_18-4.2.5-5PGDG.rhel9.7.x86_64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/plprofiler_18-4.2.5-5PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plprofiler_18 plprofiler_18-4.2.5-2PGDG.rhel9.x86_64.rpm pgdg 4.2.5 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/plprofiler_18-4.2.5-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plprofiler_18 plprofiler_18-4.2.5-5PGDG.rhel9.7.aarch64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/plprofiler_18-4.2.5-5PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plprofiler_18 plprofiler_18-4.2.5-2PGDG.rhel9.aarch64.rpm pgdg 4.2.5 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/plprofiler_18-4.2.5-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 plprofiler_18 plprofiler_18-4.2.5-5PGDG.rhel10.1.x86_64.rpm pgdg 4.2.5 7.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/plprofiler_18-4.2.5-5PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plprofiler_18 plprofiler_18-4.2.5-2PGDG.rhel10.x86_64.rpm pgdg 4.2.5 7.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/plprofiler_18-4.2.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 plprofiler_18 plprofiler_18-4.2.5-5PGDG.rhel10.1.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/plprofiler_18-4.2.5-5PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plprofiler_18 plprofiler_18-4.2.5-2PGDG.rhel10.aarch64.rpm pgdg 4.2.5 7.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/plprofiler_18-4.2.5-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg12+1_amd64.deb pgdg 4.2.5 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg12+1_arm64.deb pgdg 4.2.5 44.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg13+1_amd64.deb pgdg 4.2.5 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg13+1_arm64.deb pgdg 4.2.5 44.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb pgdg 4.2.5 46.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb pgdg 4.2.5 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb pgdg 4.2.5 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plprofiler postgresql-18-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb pgdg 4.2.5 44.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-18-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 plprofiler_17 plprofiler_17-4.2.5-5PGDG.rhel8.10.x86_64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/plprofiler_17-4.2.5-5PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plprofiler_17 plprofiler_17-4.2.5-1PGDG.rhel8.x86_64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/plprofiler_17-4.2.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plprofiler_17 plprofiler_17-4.2.5-5PGDG.rhel8.10.aarch64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/plprofiler_17-4.2.5-5PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plprofiler_17 plprofiler_17-4.2.5-1PGDG.rhel8.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/plprofiler_17-4.2.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plprofiler_17 plprofiler_17-4.2.5-5PGDG.rhel9.7.x86_64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/plprofiler_17-4.2.5-5PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plprofiler_17 plprofiler_17-4.2.5-1PGDG.rhel9.x86_64.rpm pgdg 4.2.5 7.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/plprofiler_17-4.2.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plprofiler_17 plprofiler_17-4.2.5-5PGDG.rhel9.7.aarch64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/plprofiler_17-4.2.5-5PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plprofiler_17 plprofiler_17-4.2.5-1PGDG.rhel9.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/plprofiler_17-4.2.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 plprofiler_17 plprofiler_17-4.2.5-5PGDG.rhel10.1.x86_64.rpm pgdg 4.2.5 7.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/plprofiler_17-4.2.5-5PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plprofiler_17 plprofiler_17-4.2.5-2PGDG.rhel10.x86_64.rpm pgdg 4.2.5 7.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/plprofiler_17-4.2.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 plprofiler_17 plprofiler_17-4.2.5-5PGDG.rhel10.1.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/plprofiler_17-4.2.5-5PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg12+1_amd64.deb pgdg 4.2.5 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg12+1_arm64.deb pgdg 4.2.5 44.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg13+1_amd64.deb pgdg 4.2.5 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg13+1_arm64.deb pgdg 4.2.5 44.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb pgdg 4.2.5 52.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb pgdg 4.2.5 51.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb pgdg 4.2.5 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plprofiler postgresql-17-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb pgdg 4.2.5 44.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-17-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 plprofiler_16 plprofiler_16-4.2.5-5PGDG.rhel8.10.x86_64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/plprofiler_16-4.2.5-5PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plprofiler_16 plprofiler_16-4.2.4-1PGDG.rhel8.x86_64.rpm pgdg 4.2.4 6.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/plprofiler_16-4.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plprofiler_16 plprofiler_16-4.2.5-5PGDG.rhel8.10.aarch64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/plprofiler_16-4.2.5-5PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plprofiler_16 plprofiler_16-4.2.4-1PGDG.rhel8.aarch64.rpm pgdg 4.2.4 6.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/plprofiler_16-4.2.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plprofiler_16 plprofiler_16-4.2.5-5PGDG.rhel9.7.x86_64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/plprofiler_16-4.2.5-5PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plprofiler_16 plprofiler_16-4.2.4-1PGDG.rhel9.x86_64.rpm pgdg 4.2.4 6.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/plprofiler_16-4.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 plprofiler_16 plprofiler_16-4.2.5-5PGDG.rhel9.7.aarch64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/plprofiler_16-4.2.5-5PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plprofiler_16 plprofiler_16-4.2.4-1PGDG.rhel9.aarch64.rpm pgdg 4.2.4 6.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/plprofiler_16-4.2.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 plprofiler_16 plprofiler_16-4.2.5-5PGDG.rhel10.1.x86_64.rpm pgdg 4.2.5 7.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/plprofiler_16-4.2.5-5PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plprofiler_16 plprofiler_16-4.2.5-2PGDG.rhel10.x86_64.rpm pgdg 4.2.5 7.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/plprofiler_16-4.2.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 plprofiler_16 plprofiler_16-4.2.5-5PGDG.rhel10.1.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/plprofiler_16-4.2.5-5PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg12+1_amd64.deb pgdg 4.2.5 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg12+1_arm64.deb pgdg 4.2.5 44.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg13+1_amd64.deb pgdg 4.2.5 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg13+1_arm64.deb pgdg 4.2.5 44.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb pgdg 4.2.5 52.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb pgdg 4.2.5 51.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb pgdg 4.2.5 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plprofiler postgresql-16-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb pgdg 4.2.5 44.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-16-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 plprofiler_15 plprofiler_15-4.2.5-5PGDG.rhel8.10.x86_64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plprofiler_15-4.2.5-5PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plprofiler_15 plprofiler_15-4.2.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2.2 6.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plprofiler_15-4.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plprofiler_15 plprofiler_15-4.2.1-1.rhel8.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plprofiler_15-4.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 plprofiler_15 plprofiler_15-4.2-1.rhel8.x86_64.rpm pgdg 4.2 6.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plprofiler_15-4.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 plprofiler_15 plprofiler_15-4.2.5-5PGDG.rhel8.10.aarch64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plprofiler_15-4.2.5-5PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plprofiler_15 plprofiler_15-4.2.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2.2 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plprofiler_15-4.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plprofiler_15 plprofiler_15-4.2.1-1.rhel8.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plprofiler_15-4.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 plprofiler_15 plprofiler_15-4.2-1.rhel8.aarch64.rpm pgdg 4.2 6.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plprofiler_15-4.2-1.rhel8.aarch64.rpm
@ el9.x86_64 15 plprofiler_15 plprofiler_15-4.2.5-5PGDG.rhel9.7.x86_64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plprofiler_15-4.2.5-5PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plprofiler_15 plprofiler_15-4.2.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2.2 6.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plprofiler_15-4.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plprofiler_15 plprofiler_15-4.2.1-1.rhel9.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plprofiler_15-4.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 plprofiler_15 plprofiler_15-4.2-1.rhel9.x86_64.rpm pgdg 4.2 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plprofiler_15-4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 plprofiler_15 plprofiler_15-4.2.5-5PGDG.rhel9.7.aarch64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plprofiler_15-4.2.5-5PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plprofiler_15 plprofiler_15-4.2.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2.2 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plprofiler_15-4.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plprofiler_15 plprofiler_15-4.2.1-1.rhel9.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plprofiler_15-4.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 plprofiler_15 plprofiler_15-4.2-1.rhel9.aarch64.rpm pgdg 4.2 6.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plprofiler_15-4.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 plprofiler_15 plprofiler_15-4.2.5-5PGDG.rhel10.1.x86_64.rpm pgdg 4.2.5 7.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/plprofiler_15-4.2.5-5PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plprofiler_15 plprofiler_15-4.2.5-2PGDG.rhel10.x86_64.rpm pgdg 4.2.5 7.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/plprofiler_15-4.2.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 plprofiler_15 plprofiler_15-4.2.5-5PGDG.rhel10.1.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/plprofiler_15-4.2.5-5PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg12+1_amd64.deb pgdg 4.2.5 45.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg12+1_arm64.deb pgdg 4.2.5 44.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg13+1_amd64.deb pgdg 4.2.5 45.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg13+1_arm64.deb pgdg 4.2.5 44.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb pgdg 4.2.5 52.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb pgdg 4.2.5 51.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb pgdg 4.2.5 45.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plprofiler postgresql-15-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb pgdg 4.2.5 44.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-15-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 plprofiler_14 plprofiler_14-4.2.5-5PGDG.rhel8.10.x86_64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plprofiler_14-4.2.5-5PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plprofiler_14 plprofiler_14-4.2.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2.2 6.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plprofiler_14-4.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plprofiler_14 plprofiler_14-4.2.1-1.rhel8.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plprofiler_14-4.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plprofiler_14 plprofiler_14-4.2-1.rhel8.x86_64.rpm pgdg 4.2 6.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plprofiler_14-4.2-1.rhel8.x86_64.rpm
@ el8.aarch64 14 plprofiler_14 plprofiler_14-4.2.5-5PGDG.rhel8.10.aarch64.rpm pgdg 4.2.5 7.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plprofiler_14-4.2.5-5PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plprofiler_14 plprofiler_14-4.2.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2.2 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plprofiler_14-4.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plprofiler_14 plprofiler_14-4.2.1-1.rhel8.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plprofiler_14-4.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 plprofiler_14 plprofiler_14-4.2-1.rhel8.aarch64.rpm pgdg 4.2 6.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plprofiler_14-4.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 plprofiler_14 plprofiler_14-4.2.5-5PGDG.rhel9.7.x86_64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plprofiler_14-4.2.5-5PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plprofiler_14 plprofiler_14-4.2.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2.2 6.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plprofiler_14-4.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plprofiler_14 plprofiler_14-4.2.1-1.rhel9.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plprofiler_14-4.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 plprofiler_14 plprofiler_14-4.2-1.rhel9.x86_64.rpm pgdg 4.2 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plprofiler_14-4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 plprofiler_14 plprofiler_14-4.2.5-5PGDG.rhel9.7.aarch64.rpm pgdg 4.2.5 6.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plprofiler_14-4.2.5-5PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plprofiler_14 plprofiler_14-4.2.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2.2 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plprofiler_14-4.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plprofiler_14 plprofiler_14-4.2.1-1.rhel9.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plprofiler_14-4.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 plprofiler_14 plprofiler_14-4.2-1.rhel9.aarch64.rpm pgdg 4.2 6.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plprofiler_14-4.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 plprofiler_14 plprofiler_14-4.2.5-5PGDG.rhel10.1.x86_64.rpm pgdg 4.2.5 7.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/plprofiler_14-4.2.5-5PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plprofiler_14 plprofiler_14-4.2.5-2PGDG.rhel10.x86_64.rpm pgdg 4.2.5 7.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/plprofiler_14-4.2.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 plprofiler_14 plprofiler_14-4.2.5-5PGDG.rhel10.1.aarch64.rpm pgdg 4.2.5 7.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/plprofiler_14-4.2.5-5PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg12+1_amd64.deb pgdg 4.2.5 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg12+1_arm64.deb pgdg 4.2.5 44.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg13+1_amd64.deb pgdg 4.2.5 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg13+1_arm64.deb pgdg 4.2.5 44.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb pgdg 4.2.5 50.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb pgdg 4.2.5 49.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb pgdg 4.2.5 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plprofiler postgresql-14-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb pgdg 4.2.5 44.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plprofiler/postgresql-14-plprofiler_4.2.5-4.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `plprofiler` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plprofiler;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plprofiler -v 18  # PG 18
pig ext install -y plprofiler -v 17  # PG 17
pig ext install -y plprofiler -v 16  # PG 16
pig ext install -y plprofiler -v 15  # PG 15
pig ext install -y plprofiler -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plprofiler_18       # PG 18
dnf install -y plprofiler_17       # PG 17
dnf install -y plprofiler_16       # PG 16
dnf install -y plprofiler_15       # PG 15
dnf install -y plprofiler_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plprofiler   # PG 18
apt install -y postgresql-17-plprofiler   # PG 17
apt install -y postgresql-16-plprofiler   # PG 16
apt install -y postgresql-15-plprofiler   # PG 15
apt install -y postgresql-14-plprofiler   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plprofiler;
```



## 用法

> [plprofiler: 用于 PL/pgSQL 函数性能分析的服务端支持](https://github.com/bigsql/plprofiler)

`plprofiler` 是一个 PL/pgSQL 函数性能分析工具，能够识别性能瓶颈并生成交互式火焰图报告。

```sql
CREATE EXTENSION plprofiler;
```

### 配置

在 `postgresql.conf` 中添加：

```
shared_preload_libraries = 'plprofiler'
```

### 命令行工具

`plprofiler` 命令行工具用于控制性能分析并生成报告：

```bash
# 分析特定 SQL 命令
plprofiler run -d mydb --command "SELECT my_function()" --output report.html

# 实时监控性能分析
plprofiler monitor -d mydb

# 保存性能分析数据以便后续分析
plprofiler save -d mydb --name "my_profile"

# 生成包含火焰图的 HTML 报告
plprofiler report -d mydb --from-data "my_profile" --output report.html

# 列出已保存的性能分析数据集
plprofiler list -d mydb

# 重置性能分析数据
plprofiler reset-data -d mydb

# 导出/导入性能分析数据
plprofiler export -d mydb --from-data "my_profile" > profile.json
plprofiler import -d mydb --into-data "imported" < profile.json
```

### SQL 接口

```sql
-- 为当前会话启用性能分析
SELECT pl_profiler_set_enabled_local(true);

-- 执行待分析的函数
SELECT my_function();

-- 将性能分析数据收集到共享哈希表中
SELECT pl_profiler_collect_data();

-- 禁用性能分析
SELECT pl_profiler_set_enabled_local(false);

-- 全局启用性能分析（适用于所有会话）
SELECT pl_profiler_set_enabled_global(true);

-- 重置本地/共享性能分析数据
SELECT pl_profiler_reset_local();
SELECT pl_profiler_reset_shared();
```

### 报告输出

生成的 HTML 报告包括：

- **交互式火焰图**：展示 PL/pgSQL 代码中花费的时钟时间
- **每函数统计信息**：包含自身时间（总时间减去子函数时间）
- **排名靠前的函数**：按耗时排序（默认：前 10 个）
- 自包含的 HTML，无需外部依赖

### 分析方法

- **直接分析**：在收集数据时运行特定 SQL
- **定时采集**：基于时间间隔的统计收集
- **按用户分析**：通过 `ALTER USER` 为特定数据库用户启用性能分析
- **生产监控**：在生产系统上进行低开销的性能分析
