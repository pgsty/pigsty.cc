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
| [**`pldebugger`**](/ext/e/pldbgapi) | `1.10` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license artistic20" href="/ext/license#artistic20">Artistic-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3050  | [**`pldbgapi`**](/ext/e/pldbgapi) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql_check`](/ext/e/plpgsql_check) [`plprofiler`](/ext/e/plprofiler) [`plpgsql`](/ext/e/plpgsql) [`pgtap`](/ext/e/pgtap) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`plv8`](/ext/e/plv8) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.10` | {{< pgvers "18,17,16,15,14" >}} | `pldebugger` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.10` | {{< pgvers "18,17,16,15,14" >}} | `pldebugger_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.10` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pldebugger` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 3 |
| el8.aarch64 | AVAIL PGDG 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 | AVAIL PGDG 1.8 2 |
| el9.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 3 | AVAIL PGDG 1.10 3 | AVAIL PGDG 1.10 3 |
| el9.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 3 | AVAIL PGDG 1.10 3 | AVAIL PGDG 1.10 3 |
| el10.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| el10.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| d12.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| d12.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| d13.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| d13.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| u22.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| u22.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| u24.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| u24.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| u26.x86_64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
| u26.aarch64 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 | AVAIL PGDG 1.10 2 |
@ el8.x86_64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.9 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pldebugger_18-1.9-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.9 37.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pldebugger_18-1.9-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pldebugger_18 pldebugger_18-1.10-1PGDG.rhel9.8.x86_64.rpm pgdg 1.10 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pldebugger_18-1.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.9 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pldebugger_18-1.9-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pldebugger_18 pldebugger_18-1.10-1PGDG.rhel9.8.aarch64.rpm pgdg 1.10 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pldebugger_18-1.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.9 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pldebugger_18-1.9-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pldebugger_18 pldebugger_18-1.10-1PGDG.rhel10.2.x86_64.rpm pgdg 1.10 37.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pldebugger_18-1.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.9 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pldebugger_18-1.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pldebugger_18 pldebugger_18-1.10-1PGDG.rhel10.2.aarch64.rpm pgdg 1.10 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pldebugger_18-1.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pldebugger_18 pldebugger_18-1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.9 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pldebugger_18-1.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg12+1_amd64.deb pgdg 1.10 71.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg12+1_arm64.deb pgdg 1.10 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg13+1_amd64.deb pgdg 1.10 72.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg13+1_arm64.deb pgdg 1.10 70.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg22.04+1_amd64.deb pgdg 1.10 72.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 72.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg22.04+1_arm64.deb pgdg 1.10 71.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 71.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg24.04+1_amd64.deb pgdg 1.10 70.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 70.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg24.04+1_arm64.deb pgdg 1.10 68.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg26.04+1_amd64.deb pgdg 1.10 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg26.04+1_amd64.deb pgdg 1.9 70.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.10-1.pgdg26.04+1_arm64.deb pgdg 1.10 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.10-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pldebugger postgresql-18-pldebugger_1.9-1.pgdg26.04+1_arm64.deb pgdg 1.9 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-18-pldebugger_1.9-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pldebugger_17-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pldebugger_17-1.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pldebugger_17 pldebugger_17-1.10-1PGDG.rhel9.8.x86_64.rpm pgdg 1.10 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pldebugger_17-1.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pldebugger_17-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pldebugger_17 pldebugger_17-1.10-1PGDG.rhel9.8.aarch64.rpm pgdg 1.10 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pldebugger_17-1.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pldebugger_17 pldebugger_17-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pldebugger_17-1.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pldebugger_17 pldebugger_17-1.10-1PGDG.rhel10.2.x86_64.rpm pgdg 1.10 37.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pldebugger_17-1.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pldebugger_17 pldebugger_17-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pldebugger_17-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pldebugger_17 pldebugger_17-1.10-1PGDG.rhel10.2.aarch64.rpm pgdg 1.10 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pldebugger_17-1.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pldebugger_17 pldebugger_17-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pldebugger_17-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg12+1_amd64.deb pgdg 1.10 71.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg12+1_arm64.deb pgdg 1.10 70.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg13+1_amd64.deb pgdg 1.10 71.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg13+1_arm64.deb pgdg 1.10 70.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg22.04+1_amd64.deb pgdg 1.10 83.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 83.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg22.04+1_arm64.deb pgdg 1.10 81.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 81.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg24.04+1_amd64.deb pgdg 1.10 70.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 70.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg24.04+1_arm64.deb pgdg 1.10 68.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg26.04+1_amd64.deb pgdg 1.10 70.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg26.04+1_amd64.deb pgdg 1.9 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.10-1.pgdg26.04+1_arm64.deb pgdg 1.10 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.10-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pldebugger postgresql-17-pldebugger_1.9-1.pgdg26.04+1_arm64.deb pgdg 1.9 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-17-pldebugger_1.9-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pldebugger_16-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel8.x86_64.rpm pgdg 1.5 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pldebugger_16-1.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pldebugger_16-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel8.aarch64.rpm pgdg 1.5 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pldebugger_16-1.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pldebugger_16 pldebugger_16-1.10-1PGDG.rhel9.8.x86_64.rpm pgdg 1.10 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pldebugger_16-1.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pldebugger_16-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel9.x86_64.rpm pgdg 1.5 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pldebugger_16-1.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pldebugger_16 pldebugger_16-1.10-1PGDG.rhel9.8.aarch64.rpm pgdg 1.10 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pldebugger_16-1.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pldebugger_16 pldebugger_16-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pldebugger_16-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pldebugger_16 pldebugger_16-1.5-3PGDG.rhel9.aarch64.rpm pgdg 1.5 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pldebugger_16-1.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pldebugger_16 pldebugger_16-1.10-1PGDG.rhel10.2.x86_64.rpm pgdg 1.10 37.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pldebugger_16-1.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pldebugger_16 pldebugger_16-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pldebugger_16-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pldebugger_16 pldebugger_16-1.10-1PGDG.rhel10.2.aarch64.rpm pgdg 1.10 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pldebugger_16-1.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pldebugger_16 pldebugger_16-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pldebugger_16-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg12+1_amd64.deb pgdg 1.10 71.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg12+1_arm64.deb pgdg 1.10 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 69.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg13+1_amd64.deb pgdg 1.10 71.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg13+1_arm64.deb pgdg 1.10 70.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg22.04+1_amd64.deb pgdg 1.10 82.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 82.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg22.04+1_arm64.deb pgdg 1.10 81.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 81.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg24.04+1_amd64.deb pgdg 1.10 70.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 70.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg24.04+1_arm64.deb pgdg 1.10 68.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 68.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg26.04+1_amd64.deb pgdg 1.10 70.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg26.04+1_amd64.deb pgdg 1.9 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.10-1.pgdg26.04+1_arm64.deb pgdg 1.10 68.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.10-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pldebugger postgresql-16-pldebugger_1.9-1.pgdg26.04+1_arm64.deb pgdg 1.9 68.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-16-pldebugger_1.9-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pldebugger_15-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pldebugger_15 pldebugger_15-1.5-1.rhel8.x86_64.rpm pgdg 1.5 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pldebugger_15-1.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pldebugger_15-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pldebugger_15 pldebugger_15-1.5-1.rhel8.aarch64.rpm pgdg 1.5 95.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pldebugger_15-1.5-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pldebugger_15 pldebugger_15-1.10-1PGDG.rhel9.8.x86_64.rpm pgdg 1.10 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pldebugger_15-1.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pldebugger_15-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pldebugger_15 pldebugger_15-1.5-1.rhel9.x86_64.rpm pgdg 1.5 98.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pldebugger_15-1.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pldebugger_15 pldebugger_15-1.10-1PGDG.rhel9.8.aarch64.rpm pgdg 1.10 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pldebugger_15-1.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pldebugger_15 pldebugger_15-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pldebugger_15-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pldebugger_15 pldebugger_15-1.5-1.rhel9.aarch64.rpm pgdg 1.5 97.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pldebugger_15-1.5-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pldebugger_15 pldebugger_15-1.10-1PGDG.rhel10.2.x86_64.rpm pgdg 1.10 39.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pldebugger_15-1.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pldebugger_15 pldebugger_15-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pldebugger_15-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pldebugger_15 pldebugger_15-1.10-1PGDG.rhel10.2.aarch64.rpm pgdg 1.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pldebugger_15-1.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pldebugger_15 pldebugger_15-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pldebugger_15-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg12+1_amd64.deb pgdg 1.10 71.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg12+1_arm64.deb pgdg 1.10 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg13+1_amd64.deb pgdg 1.10 72.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 72.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg13+1_arm64.deb pgdg 1.10 71.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 71.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg22.04+1_amd64.deb pgdg 1.10 84.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 83.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg22.04+1_arm64.deb pgdg 1.10 82.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 82.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg24.04+1_amd64.deb pgdg 1.10 72.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg24.04+1_arm64.deb pgdg 1.10 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 70.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg26.04+1_amd64.deb pgdg 1.10 71.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg26.04+1_amd64.deb pgdg 1.9 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.10-1.pgdg26.04+1_arm64.deb pgdg 1.10 70.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.10-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pldebugger postgresql-15-pldebugger_1.9-1.pgdg26.04+1_arm64.deb pgdg 1.9 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-15-pldebugger_1.9-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pldebugger_14-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pldebugger_14 pldebugger_14-1.5-1.rhel8.x86_64.rpm pgdg 1.5 95.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pldebugger_14-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pldebugger_14 pldebugger_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 95.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pldebugger_14-1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pldebugger_14-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pldebugger_14 pldebugger_14-1.5-1.rhel8.aarch64.rpm pgdg 1.5 93.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pldebugger_14-1.5-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pldebugger_14 pldebugger_14-1.10-1PGDG.rhel9.8.x86_64.rpm pgdg 1.10 39.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pldebugger_14-1.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pldebugger_14-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pldebugger_14 pldebugger_14-1.5-1.rhel9.x86_64.rpm pgdg 1.5 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pldebugger_14-1.5-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pldebugger_14 pldebugger_14-1.10-1PGDG.rhel9.8.aarch64.rpm pgdg 1.10 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pldebugger_14-1.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pldebugger_14 pldebugger_14-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 38.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pldebugger_14-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pldebugger_14 pldebugger_14-1.5-1.rhel9.aarch64.rpm pgdg 1.5 95.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pldebugger_14-1.5-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pldebugger_14 pldebugger_14-1.10-1PGDG.rhel10.2.x86_64.rpm pgdg 1.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pldebugger_14-1.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pldebugger_14 pldebugger_14-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pldebugger_14-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pldebugger_14 pldebugger_14-1.10-1PGDG.rhel10.2.aarch64.rpm pgdg 1.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pldebugger_14-1.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pldebugger_14 pldebugger_14-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pldebugger_14-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg12+1_amd64.deb pgdg 1.10 71.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg12+1_amd64.deb pgdg 1.9 71.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg12+1_arm64.deb pgdg 1.10 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg12+1_arm64.deb pgdg 1.9 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg13+1_amd64.deb pgdg 1.10 71.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg13+1_amd64.deb pgdg 1.9 71.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg13+1_arm64.deb pgdg 1.10 70.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg13+1_arm64.deb pgdg 1.9 70.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg22.04+1_amd64.deb pgdg 1.10 82.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg22.04+1_amd64.deb pgdg 1.9 82.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg22.04+1_arm64.deb pgdg 1.10 80.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg22.04+1_arm64.deb pgdg 1.9 81.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg24.04+1_amd64.deb pgdg 1.10 71.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg24.04+1_amd64.deb pgdg 1.9 71.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg24.04+1_arm64.deb pgdg 1.10 70.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg24.04+1_arm64.deb pgdg 1.9 70.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg26.04+1_amd64.deb pgdg 1.10 71.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg26.04+1_amd64.deb pgdg 1.9 71.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.10-1.pgdg26.04+1_arm64.deb pgdg 1.10 69.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.10-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pldebugger postgresql-14-pldebugger_1.9-1.pgdg26.04+1_arm64.deb pgdg 1.9 69.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pldebugger/postgresql-14-pldebugger_1.9-1.pgdg26.04+1_arm64.deb
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


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/plugin_debugger';
```


**创建扩展**：

```sql
CREATE EXTENSION pldbgapi;
```




## 用法

来源：[repo README](https://github.com/EnterpriseDB/pldebugger), [v1.10 release](https://github.com/EnterpriseDB/pldebugger/releases/tag/v1.10), [extension control](https://github.com/EnterpriseDB/pldebugger/blob/master/pldbgapi.control)

`pldbgapi` 为 PL/pgSQL 函数提供服务端 API，用于交互式调试。它通常通过 **pgAdmin** 这样的图形客户端使用。

```sql
CREATE EXTENSION pldbgapi;
```

### 使用 pgAdmin 调试

主要使用方式是通过 pgAdmin 图形界面：

- **直接调试**：右键函数并选择“Debug”，即可立即执行并逐步调试。
- **全局断点**：在函数上选择“Set Global Breakpoint”，然后等待另一个会话（例如 Web 应用）调用该函数；调试器会拦截该调用并允许在上下文中调试。

### 调试能力

通过调试客户端连接后，可以：

- 在 PL/pgSQL 函数的指定行上设置断点
- 逐行调试代码（步入、步过、步出）
- 在每一步检查变量及其当前值
- 查看嵌套函数调用的调用栈
- 继续执行到下一个断点

### 架构

调试系统包含三个组件：

1. **图形客户端**（pgAdmin）：显示源码、变量和调用栈
2. **目标后端**：正在执行被调试 PL/pgSQL 代码的会话
3. **调试代理**：通过专用连接协调客户端和目标后端

### 支持语言

调试器适用于 PL/pgSQL 函数和过程。需要在每个需要调试的数据库中创建 `pldbgapi` 扩展。

### 注意事项

- 软件包名是 `pldebugger`，而 SQL 中创建的扩展是 `pldbgapi`；目录跟踪的软件包版本为 `1.10`，覆盖 PostgreSQL 14 到 18。
- v1.10 上游版本是 PostgreSQL 兼容性更新，没有记录新的用户侧 SQL API 或调试流程。
- 上游故障排查说明必须配置 `shared_preload_libraries = '$libdir/plugin_debugger'` 并重启 PostgreSQL。缺失或错误的预加载会阻止全局断点，在某些平台上也会阻止 `pldbgapi` SQL 加载。
