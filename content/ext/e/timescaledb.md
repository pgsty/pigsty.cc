---
title: "timescaledb"
linkTitle: "timescaledb"
description: "时序数据库扩展插件"
weight: 1000
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/timescale/timescaledb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">timescale/timescaledb</div>
    <div class="ext-card__desc">https://github.com/timescale/timescaledb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/timescaledb-2.32.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">timescaledb-2.32.1.tar.gz</div>
    <div class="ext-card__desc">timescaledb-2.32.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`timescaledb`**](/ext/e/timescaledb) | `2.32.1` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license timescale" href="/ext/license#timescale">Timescale</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1000  | [**`timescaledb`**](/ext/e/timescaledb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `timescaledb_information` |
{.ext-table .wide .expand}

| **相关扩展** | [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`pg_stl`](/ext/e/pg_stl) [`pg_partman`](/ext/e/pg_partman) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`citus`](/ext/e/citus) [`pg_cron`](/ext/e/pg_cron) [`pg_ivm`](/ext/e/pg_ivm) [`pg_incremental`](/ext/e/pg_incremental) [`pg_trickle`](/ext/e/pg_trickle) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> TimescaleDB 2.29 removes PostgreSQL 15 support


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.32.1` | {{< pgvers "18,17,16" >}} | `timescaledb` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.32.1` | {{< pgvers "18,17,16,15" >}} | `timescaledb-tsl_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.32.1` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-timescaledb-tsl` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 27 | AVAIL PIGSTY 2.32.1 46 | AVAIL PIGSTY 2.32.1 52 | AVAIL PIGSTY 2.28.3 42 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 3 | AVAIL PIGSTY 2.32.1 3 | AVAIL PIGSTY 2.32.1 3 | AVAIL PIGSTY 2.28.3 1 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 3 | AVAIL PIGSTY 2.32.1 3 | AVAIL PIGSTY 2.32.1 3 | AVAIL PIGSTY 2.28.3 1 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| d12.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| d12.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| d13.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| d13.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| u22.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| u22.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| u24.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| u24.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| u26.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
| u26.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.32.1 1 | AVAIL PIGSTY 2.28.3 1 |
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGSTY.el8.x86_64.rpm pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_18-2.32.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.32.1 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.32.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.32.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.32.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.31.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.31.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.31.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.30.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.30.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.30.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.30.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.30.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.30.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.29.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.29.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.29.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 770.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 769.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 768.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 753.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 750.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 751.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 750.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 749.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 730.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 727.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 726.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 733.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 733.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGSTY.el8.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_18-2.32.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGSTY.el9.x86_64.rpm pigsty 2.32.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_18-2.32.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGDG.rhel9.x86_64.rpm pgdg 2.32.1 1.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.0-1PGDG.rhel9.x86_64.rpm pgdg 2.32.0 1.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.32.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGSTY.el9.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_18-2.32.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGSTY.el10.x86_64.rpm pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_18-2.32.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGDG.rhel10.x86_64.rpm pgdg 2.32.1 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.32.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.0-1PGDG.rhel10.x86_64.rpm pgdg 2.32.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.32.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.32.1-1PGSTY.el10.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_18-2.32.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~bookworm_amd64.deb pigsty 2.32.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~bookworm_arm64.deb pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~trixie_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~trixie_arm64.deb pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~jammy_amd64.deb pigsty 2.32.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~jammy_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~noble_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~noble_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~resolute_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~resolute_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.32.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGSTY.el8.x86_64.rpm pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_17-2.32.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.32.1 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.32.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.32.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.32.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.31.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.31.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.31.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.30.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.30.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.30.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.30.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.30.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.30.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.29.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.29.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.29.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 769.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 769.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 767.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 752.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 749.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 750.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 749.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 748.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 729.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 726.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 726.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 733.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 732.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.1-1PGDG.rhel8.x86_64.rpm pgdg 2.22.1 733.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.22.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.0-1PGDG.rhel8.x86_64.rpm pgdg 2.22.0 730.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.22.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.3-1PGDG.rhel8.x86_64.rpm pgdg 2.21.3 738.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.2-1PGDG.rhel8.x86_64.rpm pgdg 2.21.2 738.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.1-1PGDG.rhel8.x86_64.rpm pgdg 2.21.1 737.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.0-1PGDG.rhel8.x86_64.rpm pgdg 2.21.0 737.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.3-1PGDG.rhel8.x86_64.rpm pgdg 2.20.3 722.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.20.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.2-1PGDG.rhel8.x86_64.rpm pgdg 2.20.2 721.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.20.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.1-1PGDG.rhel8.x86_64.rpm pgdg 2.20.1 720.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.20.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 700.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 698.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 698.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 773.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 746.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 745.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 743.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 686.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 685.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 683.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGSTY.el8.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_17-2.32.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGSTY.el9.x86_64.rpm pigsty 2.32.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_17-2.32.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGDG.rhel9.x86_64.rpm pgdg 2.32.1 1.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.0-1PGDG.rhel9.x86_64.rpm pgdg 2.32.0 1.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.32.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGSTY.el9.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_17-2.32.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGSTY.el10.x86_64.rpm pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_17-2.32.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGDG.rhel10.x86_64.rpm pgdg 2.32.1 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.32.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.0-1PGDG.rhel10.x86_64.rpm pgdg 2.32.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.32.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.32.1-1PGSTY.el10.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_17-2.32.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~bookworm_amd64.deb pigsty 2.32.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~bookworm_arm64.deb pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~trixie_amd64.deb pigsty 2.32.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~trixie_arm64.deb pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~jammy_amd64.deb pigsty 2.32.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~jammy_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~noble_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~noble_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~resolute_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~resolute_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.32.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGSTY.el8.x86_64.rpm pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_16-2.32.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.32.1 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.32.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.32.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.32.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.31.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.31.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.31.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.30.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.30.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.30.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.30.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.30.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.30.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.30.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.29.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.29.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.29.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 769.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 769.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 768.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 753.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 750.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 750.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 749.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 748.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 729.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 726.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 725.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 732.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 731.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.1-1PGDG.rhel8.x86_64.rpm pgdg 2.22.1 732.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.22.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.0-1PGDG.rhel8.x86_64.rpm pgdg 2.22.0 730.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.22.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.3-1PGDG.rhel8.x86_64.rpm pgdg 2.21.3 737.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.2-1PGDG.rhel8.x86_64.rpm pgdg 2.21.2 736.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.1-1PGDG.rhel8.x86_64.rpm pgdg 2.21.1 735.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.0-1PGDG.rhel8.x86_64.rpm pgdg 2.21.0 735.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.3-1PGDG.rhel8.x86_64.rpm pgdg 2.20.3 721.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.20.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.2-1PGDG.rhel8.x86_64.rpm pgdg 2.20.2 720.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.20.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.1-1PGDG.rhel8.x86_64.rpm pgdg 2.20.1 719.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.20.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 699.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 698.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 697.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 772.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 745.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 744.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 742.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 686.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 686.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 683.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.16.0-1PGDG.rhel8.x86_64.rpm pgdg 2.16.0 641.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.16.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.3-1PGDG.rhel8.x86_64.rpm pgdg 2.15.3 638.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.15.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.2-1PGDG.rhel8.x86_64.rpm pgdg 2.15.2 637.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.15.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.0-1PGDG.rhel8.x86_64.rpm pgdg 2.15.0 635.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.15.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.13.1-1PGDG.rhel8.x86_64.rpm pgdg 2.13.1 758.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.13.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.13.0-1PGDG.rhel8.x86_64.rpm pgdg 2.13.0 757.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.13.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGSTY.el8.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_16-2.32.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGSTY.el9.x86_64.rpm pigsty 2.32.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_16-2.32.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGDG.rhel9.x86_64.rpm pgdg 2.32.1 1.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.0-1PGDG.rhel9.x86_64.rpm pgdg 2.32.0 1.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.32.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGSTY.el9.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_16-2.32.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGSTY.el10.x86_64.rpm pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_16-2.32.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGDG.rhel10.x86_64.rpm pgdg 2.32.1 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.32.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.0-1PGDG.rhel10.x86_64.rpm pgdg 2.32.0 1.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.32.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.32.1-1PGSTY.el10.aarch64.rpm pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_16-2.32.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~bookworm_amd64.deb pigsty 2.32.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~bookworm_arm64.deb pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~trixie_amd64.deb pigsty 2.32.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~trixie_arm64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~jammy_amd64.deb pigsty 2.32.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~jammy_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~noble_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~noble_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~resolute_amd64.deb pigsty 2.32.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~resolute_arm64.deb pigsty 2.32.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.32.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el8.x86_64.rpm pigsty 2.28.3 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_15-2.28.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 764.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 763.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 762.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 751.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 748.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 749.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 748.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 747.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 727.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 725.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 724.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 731.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 731.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.1-1PGDG.rhel8.x86_64.rpm pgdg 2.22.1 730.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.22.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.0-1PGDG.rhel8.x86_64.rpm pgdg 2.22.0 728.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.22.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.3-1PGDG.rhel8.x86_64.rpm pgdg 2.21.3 736.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.2-1PGDG.rhel8.x86_64.rpm pgdg 2.21.2 735.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.1-1PGDG.rhel8.x86_64.rpm pgdg 2.21.1 734.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.0-1PGDG.rhel8.x86_64.rpm pgdg 2.21.0 734.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.3-1PGDG.rhel8.x86_64.rpm pgdg 2.20.3 719.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.20.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.2-1PGDG.rhel8.x86_64.rpm pgdg 2.20.2 718.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.20.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.1-1PGDG.rhel8.x86_64.rpm pgdg 2.20.1 718.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.20.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 699.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 697.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 696.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 772.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 744.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 743.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 742.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 686.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 685.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 682.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.16.0-1PGDG.rhel8.x86_64.rpm pgdg 2.16.0 640.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.16.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.3-1PGDG.rhel8.x86_64.rpm pgdg 2.15.3 637.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.15.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.2-1PGDG.rhel8.x86_64.rpm pgdg 2.15.2 637.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.15.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.0-1PGDG.rhel8.x86_64.rpm pgdg 2.15.0 633.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.15.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.13.1-1PGDG.rhel8.x86_64.rpm pgdg 2.13.1 768.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.13.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el8.aarch64.rpm pigsty 2.28.3 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_15-2.28.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el9.x86_64.rpm pigsty 2.28.3 778.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_15-2.28.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el9.aarch64.rpm pigsty 2.28.3 738.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_15-2.28.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el10.x86_64.rpm pigsty 2.28.3 804.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_15-2.28.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el10.aarch64.rpm pigsty 2.28.3 758.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_15-2.28.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~bookworm_amd64.deb pigsty 2.28.3 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~bookworm_arm64.deb pigsty 2.28.3 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~trixie_amd64.deb pigsty 2.28.3 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~trixie_arm64.deb pigsty 2.28.3 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~jammy_amd64.deb pigsty 2.28.3 810.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~jammy_arm64.deb pigsty 2.28.3 778.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~noble_amd64.deb pigsty 2.28.3 800.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~noble_arm64.deb pigsty 2.28.3 777.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~resolute_amd64.deb pigsty 2.28.3 804.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~resolute_arm64.deb pigsty 2.28.3 796.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.28.3-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `timescaledb` 扩展的 RPM / DEB 包：

```bash
pig build pkg timescaledb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `timescaledb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install timescaledb;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y timescaledb -v 18  # PG 18
pig ext install -y timescaledb -v 17  # PG 17
pig ext install -y timescaledb -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y timescaledb-tsl_18       # PG 18
dnf install -y timescaledb-tsl_17       # PG 17
dnf install -y timescaledb-tsl_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-timescaledb-tsl   # PG 18
apt install -y postgresql-17-timescaledb-tsl   # PG 17
apt install -y postgresql-16-timescaledb-tsl   # PG 16
```


**预加载配置**：

```bash
shared_preload_libraries = 'timescaledb';
```


**创建扩展**：

```sql
CREATE EXTENSION timescaledb;
```

## 用法

来源：

- [Official source](https://github.com/timescale/timescaledb/releases/tag/2.32.1)
- [Official source](https://github.com/timescale/timescaledb/blob/2.32.1/version.config)
- [Official source](https://github.com/timescale/timescaledb/blob/2.32.1/CHANGELOG.md)

- [TimescaleDB v2.30.2 README](https://github.com/timescale/timescaledb/blob/2.30.2/README.md)
- [TimescaleDB 2.29.0 发行说明](https://github.com/timescale/timescaledb/releases/tag/2.29.0)
- [TimescaleDB 2.30.2 发布说明](https://github.com/timescale/timescaledb/releases/tag/2.30.2)
- [2.30.2 版变更日志](https://github.com/timescale/timescaledb/blob/2.30.2/CHANGELOG.md)
- [TimescaleDB v2.30.2 控制文件](https://github.com/timescale/timescaledb/blob/2.30.2/timescaledb.control.in)
- [CREATE TABLE API](https://www.tigerdata.com/docs/reference/timescaledb/hypertables/create_table/)
- [create_hypertable() API](https://www.tigerdata.com/docs/reference/timescaledb/hypertables/create_hypertable/)
- [连续聚合 API](https://www.tigerdata.com/docs/reference/timescaledb/continuous-aggregates/create_materialized_view/)
- [add_columnstore_policy() API](https://www.tigerdata.com/docs/reference/timescaledb/hypercore/add_columnstore_policy/)
- [TimescaleDB GUC](https://www.tigerdata.com/docs/reference/timescaledb/configuration/gucs/)
- [2.32.0 release and compatibility limits](https://github.com/timescale/timescaledb/releases/tag/2.32.0)
- [2.32.0 version declaration](https://github.com/timescale/timescaledb/blob/2.32.0/version.config)
- [2.31 to 2.32 SQL upgrade](https://github.com/timescale/timescaledb/blob/2.32.0/sql/updates/2.31.0--2.32.0.sql)

`timescaledb` 是用于时序与事件分析的 PostgreSQL 扩展。当前文档重点介绍 `CREATE TABLE ... WITH (tsdb.hypertable)`、连续聚合、自动化作业，以及将数据块迁移到列存储的用法。

### 启用扩展

将 `timescaledb` 加入现有预加载列表，重启 PostgreSQL 后再创建扩展。版本 `2.30.2` 支持 PostgreSQL 16、17 和 18。

```ini
shared_preload_libraries = 'timescaledb'
```

### 超表

```sql
CREATE EXTENSION timescaledb;

CREATE TABLE ts_test (
  ts timestamptz NOT NULL,
  id bigint,
  v integer
) WITH (
  tsdb.hypertable,
  tsdb.orderby = 'ts DESC'
);
```

要转换现有 PostgreSQL 表，请使用通用超表 API：

```sql
CREATE TABLE ts_existing (
  ts timestamptz NOT NULL,
  id bigint,
  v integer
);
SELECT create_hypertable('ts_existing', by_range('ts'));
```

- `CREATE TABLE ... WITH (tsdb.hypertable)` 自 TimescaleDB 2.20.0 起已有文档说明，是新建超表的最佳实践。
- 在 TimescaleDB 2.23.0 及更高版本中，系统会自动选择第一个 `TIMESTAMP` 或 `TIMESTAMPTZ` 列作为分区列；如果存在多个候选列而导致选择有歧义，则不会自动选择。
- `create_hypertable()` 仍可用于转换现有表。

### 连续聚合与作业

```sql
CREATE MATERIALIZED VIEW ts_hourly
WITH (timescaledb.continuous) AS
SELECT time_bucket('1 hour', ts) AS bucket,
       count(*) AS cnt,
       avg(v)   AS avg_v
FROM ts_test
GROUP BY bucket;

SELECT add_continuous_aggregate_policy(
  'ts_hourly',
  start_offset => INTERVAL '3 hours',
  end_offset => INTERVAL '1 hour',
  schedule_interval => INTERVAL '1 hour'
);

```

- 连续聚合要求在超表的时间维度上使用 `time_bucket(...)`。
- 连续聚合的 `WITH` 子句支持 `timescaledb.materialized_only`；当前 API 默认值为 `TRUE`，因此除非另行配置，否则不会启用实时聚合。
- TimescaleDB 2.28.0 支持以批次增量执行手工 `refresh_continuous_aggregate()` 调用。可使用 `buckets_per_batch`、`max_batches_per_execution` 和 `refresh_newest_first` 将大型手工刷新拆分为较小的工作单元。
- TimescaleDB 2.28.0 还允许通过 `ALTER MATERIALIZED VIEW ... ADD COLUMN ... GENERATED ALWAYS AS (...) STORED`，向现有连续聚合添加新的生成聚合列；在刷新之前，现有行的该列为 `NULL`。

### 列存储

```sql
CREATE TABLE crypto_ticks (
  "time" timestamptz,
  symbol text,
  price double precision,
  day_volume numeric
) WITH (
  tsdb.hypertable,
  tsdb.segmentby = 'symbol',
  tsdb.orderby = 'time DESC'
);

CALL add_columnstore_policy('crypto_ticks', after => INTERVAL '60 days');
```

- `CREATE TABLE ... WITH (tsdb.hypertable)` 默认启用列存储，除非设置 `tsdb.columnstore = false`。
- `add_columnstore_policy()` 取代了旧的 `add_compression_policy()` API，且要求在 `after` 和 `created_before` 中二选一，不能同时指定。
- 新建列存储数据块默认启用布隆过滤器。现有数据块必须重新压缩，之后才会拥有布隆索引。

### 相关 GUC

```sql
SET timescaledb.enable_direct_compress_insert = on;
SET timescaledb.enable_cagg_rewrites = on;
SET timescaledb.enable_columnar_scan_filter_pushdown = on;
```

`timescaledb.enable_direct_compress_insert` 和 `timescaledb.enable_direct_compress_copy` 可在写入期间启用技术预览版的直接压缩。TimescaleDB 2.27.0 新增了 `timescaledb.enable_cagg_rewrites` 与 `timescaledb.cagg_rewrites_debug_info`，并说明 `timescaledb.enable_columnar_scan_filter_pushdown` 默认启用。

### 版本 2.30.2 与升级

- TimescaleDB 2.29 支持 PostgreSQL 16、17 和 18。PostgreSQL 15 支持止于 2.28 系列，因此在将 PG15 数据库迁移到 2.29 之前，应先升级 PostgreSQL。
- 版本 2.29.0 新增 `compact_chunk()` 以及用于合并小型列存储批次的压实策略，并优化了 DML 数据块排除和小 `LIMIT` 列存储扫描。在现有工作负载上启用压实策略之前，请先审阅发行说明。
- 2.29 系列新增了 `alter_job(..., config_merge => ...)`、直接压缩与无序重压缩控制，以及分层连续聚合的并发刷新策略。
- 2.30 系列新增面向 LIMIT 查询的 `DeferredChunkAppend`，并支持并发压实期间的 DML。2.30.2 修复了数据块合并与压缩查询崩溃、删除模式后遗留压缩块，以及非确定性文本排序规则处理问题。细粒度刷新选项现统一使用 `timescaledb.cagg_granular_refresh_*` 前缀；应核对已有相关配置。
- 控制文件将 `timescaledb` 标记为受信任且不可重定位。服务器库仍须根据打包部署配置进行预加载，并重启 PostgreSQL。

安装匹配的软件包后，使用新的 `psql -X` 连接执行迁移，避免启动命令提前加载旧库。在每个数据库更新并核对 SQL 版本：

```sql
ALTER EXTENSION timescaledb UPDATE TO '2.30.2';
SELECT extversion FROM pg_extension WHERE extname = 'timescaledb';
```

### 2.32.0 升级边界

2.32.0 只兼容至 PostgreSQL 18.6、17.11 和 16.15。上游要求先达到 TimescaleDB 2.32.1，再升级到高于这些版本的 PostgreSQL 次版本；不能据此认为 2.32.0 支持不受限制的 PostgreSQL 次版本升级。安装匹配的扩展文件，并为加载器变化重启 PostgreSQL，随后沿受支持的路径逐库升级扩展。

此版本会在停止或重启后台工作进程前检查数据库所有权，并以数据库所有者运行调度器与遥测任务，应复核该角色权限。它还修复了 `READ COMMITTED` 下并发 `UPDATE`/`DELETE` 跳过行、连续聚合遗漏最后时间桶以及压缩崩溃的问题。自适应整数压缩默认启用。升级会移除内部辅助函数 `bloom1_contains`，应用不应依赖内部接口。

```sql
ALTER EXTENSION timescaledb UPDATE TO '2.32.0';
SELECT extversion FROM pg_extension WHERE extname = 'timescaledb';
```

### 版本 2.32.1

将 PostgreSQL 升级到 16.16、17.12 或 18.7 及后续小版本之前，应先升级 TimescaleDB 到 2.32.1。早期 TimescaleDB 补丁在这些服务器版本上可能导致全部调度任务失败。2.32.1 同时兼容之前的小版本，取代上文 2.32.0 的兼容性限制。

本次修复任务崩溃后的退避以及 `run_job` 内提交，并让分块、索引及连续聚合操作使用相应调用者或所有者，减少不必要的目录所有者身份切换。验证压缩分块上的唯一索引前会检查所有权。升级后应核对应用角色权限和调度任务执行结果。

安装匹配文件，按预加载库维护流程重启，并在各数据库中使用新的 `psql -X` 会话：

```sql
ALTER EXTENSION timescaledb UPDATE TO '2.32.1';
SELECT extversion FROM pg_extension WHERE extname = 'timescaledb';
```
