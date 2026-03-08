---
title: "pldbgapi"
linkTitle: "pldbgapi"
description: "用于调试 PL/pgSQL 函数的服务器端支持"
weight: 3050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/pldebugger">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/pldebugger</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/pldebugger</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pldebugger`**](/ext/e/pldbgapi) | `1.9` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3050  | [**`pldbgapi`**](/ext/e/pldbgapi) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql_check`](/ext/e/plpgsql_check) [`plprofiler`](/ext/e/plprofiler) [`plpgsql`](/ext/e/plpgsql) [`pgtap`](/ext/e/pgtap) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`plv8`](/ext/e/plv8) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9` | {{< pgvers "18,17,16,15,14" >}} | `pldebugger` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9` | {{< pgvers "18,17,16,15,14" >}} | `pldebugger_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pldebugger` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 3 |
| el8.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 |
| el9.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 |
| el9.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 |
| el10.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 |
| el10.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 |
| d12.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| d12.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| d13.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| d13.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| u22.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| u22.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| u24.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
| u24.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.9 1 |
@ el8.x86_64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.9 38.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pldebugger_18-1.9-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.9 37.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pldebugger_18-1.9-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.9 36.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pldebugger_18-1.9-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.9 36.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pldebugger_18-1.9-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.9 37.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pldebugger_18-1.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.9 37.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pldebugger_18-1.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 72.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 71.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 70.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 68.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 38.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pldebugger_17-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pldebugger_17-1.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 37.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pldebugger_17-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 36.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pldebugger_17-1.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pldebugger_17 pldebugger_17-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 37.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pldebugger_17-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pldebugger_17 pldebugger_17-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 36.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pldebugger_17-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 83.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 81.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 70.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 68.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 38.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pldebugger_16-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel8.x86_64.rpm pgdg 1.5 38.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pldebugger_16-1.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pldebugger_16-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel8.aarch64.rpm pgdg 1.5 37.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pldebugger_16-1.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 37.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pldebugger_16-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel9.x86_64.rpm pgdg 1.5 36.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pldebugger_16-1.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 36.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pldebugger_16-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel9.aarch64.rpm pgdg 1.5 35.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pldebugger_16-1.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pldebugger_16 pldebugger_16-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 37.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pldebugger_16-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pldebugger_16 pldebugger_16-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 36.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pldebugger_16-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 69.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 82.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 81.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 70.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 68.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 39.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pldebugger_15-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pldebugger_15 pldebugger_15-1.5-1.rhel8.x86_64.rpm pgdg 1.5 96.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pldebugger_15-1.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 38.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pldebugger_15-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pldebugger_15 pldebugger_15-1.5-1.rhel8.aarch64.rpm pgdg 1.5 95.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pldebugger_15-1.5-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 39.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pldebugger_15-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pldebugger_15 pldebugger_15-1.5-1.rhel9.x86_64.rpm pgdg 1.5 98.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pldebugger_15-1.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 38.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pldebugger_15-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pldebugger_15 pldebugger_15-1.5-1.rhel9.aarch64.rpm pgdg 1.5 97.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pldebugger_15-1.5-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pldebugger_15 pldebugger_15-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 39.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pldebugger_15-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pldebugger_15 pldebugger_15-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 39.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pldebugger_15-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 72.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 71.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 83.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 82.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 71.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 70.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 39.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pldebugger_14-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pldebugger_14 pldebugger_14-1.5-1.rhel8.x86_64.rpm pgdg 1.5 95.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pldebugger_14-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pldebugger_14 pldebugger_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 95.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pldebugger_14-1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pldebugger_14-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pldebugger_14 pldebugger_14-1.5-1.rhel8.aarch64.rpm pgdg 1.5 93.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pldebugger_14-1.5-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 39.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pldebugger_14-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pldebugger_14 pldebugger_14-1.5-1.rhel9.x86_64.rpm pgdg 1.5 96.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pldebugger_14-1.5-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 38.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pldebugger_14-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pldebugger_14 pldebugger_14-1.5-1.rhel9.aarch64.rpm pgdg 1.5 95.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pldebugger_14-1.5-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pldebugger_14 pldebugger_14-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 39.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pldebugger_14-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pldebugger_14 pldebugger_14-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 39.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pldebugger_14-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 82.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 81.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 71.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 70.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pldebugger` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pldebugger;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pldebugger -v 18  # PG 18
pig ext install -y pldebugger -v 17  # PG 17
pig ext install -y pldebugger -v 16  # PG 16
pig ext install -y pldebugger -v 15  # PG 15
pig ext install -y pldebugger -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pldebugger_18       # PG 18
dnf install -y pldebugger_17       # PG 17
dnf install -y pldebugger_16       # PG 16
dnf install -y pldebugger_15       # PG 15
dnf install -y pldebugger_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pldebugger   # PG 18
apt install -y postgresql-17-pldebugger   # PG 17
apt install -y postgresql-16-pldebugger   # PG 16
apt install -y postgresql-15-pldebugger   # PG 15
apt install -y postgresql-14-pldebugger   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pldbgapi;
```
