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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/timescaledb-2.26.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">timescaledb-2.26.2.tar.gz</div>
    <div class="ext-card__desc">timescaledb-2.26.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`timescaledb`**](/ext/e/timescaledb) | `2.26.2` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license timescale" href="/ext/license#timescale">Timescale</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1000  | [**`timescaledb`**](/ext/e/timescaledb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `timescaledb_information` |
{.ext-table}

| **相关扩展** | [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`pg_task`](/ext/e/pg_task) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.26.2` | {{< pgvers "18,17,16,15" >}} | `timescaledb` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.26.2` | {{< pgvers "18,17,16,15" >}} | `timescaledb-tsl_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.26.2` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-timescaledb-tsl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.26.2 9 | AVAIL PIGSTY 2.26.2 28 | AVAIL PIGSTY 2.26.2 34 | AVAIL PIGSTY 2.26.2 33 | AVAIL PIGSTY 2.19.3 35 |
| el8.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| el9.x86_64 | AVAIL PIGSTY 2.26.2 9 | AVAIL PIGSTY 2.26.2 27 | AVAIL PIGSTY 2.26.2 33 | AVAIL PIGSTY 2.26.2 41 | AVAIL PIGSTY 2.19.3 29 |
| el9.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| el10.x86_64 | AVAIL PIGSTY 2.26.2 9 | AVAIL PIGSTY 2.26.2 18 | AVAIL PIGSTY 2.26.2 18 | AVAIL PIGSTY 2.26.2 18 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| d12.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| d13.x86_64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| u22.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| u24.x86_64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
| u24.aarch64 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.26.2 1 | AVAIL PIGSTY 2.19.3 1 |
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PIGSTY.el8.x86_64.rpm pigsty 2.26.2 823.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_18-2.26.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 751.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 750.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 749.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 730.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 727.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 726.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 733.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 733.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PIGSTY.el8.aarch64.rpm pigsty 2.26.2 754.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_18-2.26.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PIGSTY.el9.x86_64.rpm pigsty 2.26.2 750.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_18-2.26.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.2 727.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.1 728.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.0 723.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.2 702.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.1 700.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.25.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.0 699.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel9.x86_64.rpm pgdg 2.23.1 719.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel9.x86_64.rpm pgdg 2.23.0 715.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PIGSTY.el9.aarch64.rpm pigsty 2.26.2 710.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_18-2.26.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PIGSTY.el10.x86_64.rpm pigsty 2.26.2 776.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_18-2.26.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.2 757.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.1 757.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.0 755.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.2 731.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.1 727.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.25.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.0 727.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel10.x86_64.rpm pgdg 2.23.1 743.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel10.x86_64.rpm pgdg 2.23.0 741.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PIGSTY.el10.aarch64.rpm pigsty 2.26.2 725.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_18-2.26.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb pigsty 2.26.2 729.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb pigsty 2.26.2 668.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb pigsty 2.26.2 739.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb pigsty 2.26.2 678.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb pigsty 2.26.2 789.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb pigsty 2.26.2 757.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb pigsty 2.26.2 777.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb pigsty 2.26.2 755.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PIGSTY.el8.x86_64.rpm pigsty 2.26.2 822.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_17-2.26.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 750.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 749.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 748.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 729.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 726.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 726.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 733.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 732.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.1-1PGDG.rhel8.x86_64.rpm pgdg 2.22.1 733.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.22.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.0-1PGDG.rhel8.x86_64.rpm pgdg 2.22.0 730.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.22.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.3-1PGDG.rhel8.x86_64.rpm pgdg 2.21.3 738.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.2-1PGDG.rhel8.x86_64.rpm pgdg 2.21.2 738.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.1-1PGDG.rhel8.x86_64.rpm pgdg 2.21.1 737.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.0-1PGDG.rhel8.x86_64.rpm pgdg 2.21.0 737.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.21.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.3-1PGDG.rhel8.x86_64.rpm pgdg 2.20.3 722.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.20.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.2-1PGDG.rhel8.x86_64.rpm pgdg 2.20.2 721.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.20.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.1-1PGDG.rhel8.x86_64.rpm pgdg 2.20.1 720.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.20.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 700.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 698.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 698.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 773.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 746.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 745.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 743.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 686.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 685.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 683.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PIGSTY.el8.aarch64.rpm pigsty 2.26.2 753.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_17-2.26.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PIGSTY.el9.x86_64.rpm pigsty 2.26.2 745.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_17-2.26.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.2 725.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.26.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.1 726.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.26.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.0 722.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.26.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.2 702.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.25.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.1 700.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.25.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.0 700.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.25.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.1-1PGDG.rhel9.x86_64.rpm pgdg 2.23.1 717.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.23.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.0-1PGDG.rhel9.x86_64.rpm pgdg 2.23.0 715.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.23.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.1-1PGDG.rhel9.x86_64.rpm pgdg 2.22.1 712.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.22.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.0-1PGDG.rhel9.x86_64.rpm pgdg 2.22.0 710.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.22.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.3-1PGDG.rhel9.x86_64.rpm pgdg 2.21.3 718.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.21.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.2-1PGDG.rhel9.x86_64.rpm pgdg 2.21.2 715.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.21.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.1-1PGDG.rhel9.x86_64.rpm pgdg 2.21.1 721.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.21.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.0-1PGDG.rhel9.x86_64.rpm pgdg 2.21.0 719.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.21.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.3-1PGDG.rhel9.x86_64.rpm pgdg 2.20.3 698.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.20.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.2-1PGDG.rhel9.x86_64.rpm pgdg 2.20.2 695.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.20.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.3-1PGDG.rhel9.x86_64.rpm pgdg 2.19.3 660.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.19.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.2-1PGDG.rhel9.x86_64.rpm pgdg 2.19.2 658.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.19.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.1-1PGDG.rhel9.x86_64.rpm pgdg 2.19.1 657.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.19.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.19.0-1PGDG.rhel9.x86_64.rpm pgdg 2.19.0 679.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.19.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.2-1PGDG.rhel9.x86_64.rpm pgdg 2.18.2 659.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.18.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.1-1PGDG.rhel9.x86_64.rpm pgdg 2.18.1 657.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.18.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.18.0-1PGDG.rhel9.x86_64.rpm pgdg 2.18.0 658.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.18.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.2-1PGDG.rhel9.x86_64.rpm pgdg 2.17.2 607.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.17.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.1-1PGDG.rhel9.x86_64.rpm pgdg 2.17.1 607.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.17.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.17.0-1PGDG.rhel9.x86_64.rpm pgdg 2.17.0 606.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.17.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PIGSTY.el9.aarch64.rpm pigsty 2.26.2 709.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_17-2.26.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PIGSTY.el10.x86_64.rpm pigsty 2.26.2 777.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_17-2.26.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.2 756.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.26.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.1 756.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.26.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.0 753.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.26.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.2 731.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.25.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.1 726.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.25.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.25.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.0 727.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.25.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.1-1PGDG.rhel10.x86_64.rpm pgdg 2.23.1 742.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.23.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.23.0-1PGDG.rhel10.x86_64.rpm pgdg 2.23.0 740.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.23.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.1-1PGDG.rhel10.x86_64.rpm pgdg 2.22.1 737.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.22.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.22.0-1PGDG.rhel10.x86_64.rpm pgdg 2.22.0 737.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.22.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.3-1PGDG.rhel10.x86_64.rpm pgdg 2.21.3 741.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.21.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.2-1PGDG.rhel10.x86_64.rpm pgdg 2.21.2 740.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.21.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.1-1PGDG.rhel10.x86_64.rpm pgdg 2.21.1 740.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.21.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.21.0-1PGDG.rhel10.x86_64.rpm pgdg 2.21.0 739.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.21.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.3-1PGDG.rhel10.x86_64.rpm pgdg 2.20.3 723.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.20.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.2-1PGDG.rhel10.x86_64.rpm pgdg 2.20.2 723.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.20.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.20.1-1PGDG.rhel10.x86_64.rpm pgdg 2.20.1 722.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.20.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.2-1PIGSTY.el10.aarch64.rpm pigsty 2.26.2 723.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_17-2.26.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb pigsty 2.26.2 728.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb pigsty 2.26.2 666.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb pigsty 2.26.2 736.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb pigsty 2.26.2 675.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb pigsty 2.26.2 788.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb pigsty 2.26.2 755.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb pigsty 2.26.2 774.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb pigsty 2.26.2 753.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PIGSTY.el8.x86_64.rpm pigsty 2.26.2 822.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_16-2.26.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 750.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 749.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 748.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 729.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 726.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 725.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 732.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 731.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.1-1PGDG.rhel8.x86_64.rpm pgdg 2.22.1 732.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.22.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.0-1PGDG.rhel8.x86_64.rpm pgdg 2.22.0 730.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.22.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.3-1PGDG.rhel8.x86_64.rpm pgdg 2.21.3 737.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.2-1PGDG.rhel8.x86_64.rpm pgdg 2.21.2 736.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.1-1PGDG.rhel8.x86_64.rpm pgdg 2.21.1 735.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.0-1PGDG.rhel8.x86_64.rpm pgdg 2.21.0 735.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.21.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.3-1PGDG.rhel8.x86_64.rpm pgdg 2.20.3 721.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.20.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.2-1PGDG.rhel8.x86_64.rpm pgdg 2.20.2 720.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.20.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.1-1PGDG.rhel8.x86_64.rpm pgdg 2.20.1 719.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.20.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 699.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 698.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 697.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 772.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 745.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 744.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 742.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 686.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 686.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 683.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.16.0-1PGDG.rhel8.x86_64.rpm pgdg 2.16.0 641.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.16.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.3-1PGDG.rhel8.x86_64.rpm pgdg 2.15.3 638.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.15.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.2-1PGDG.rhel8.x86_64.rpm pgdg 2.15.2 637.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.15.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.0-1PGDG.rhel8.x86_64.rpm pgdg 2.15.0 635.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.15.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.13.1-1PGDG.rhel8.x86_64.rpm pgdg 2.13.1 758.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.13.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.13.0-1PGDG.rhel8.x86_64.rpm pgdg 2.13.0 757.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.13.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PIGSTY.el8.aarch64.rpm pigsty 2.26.2 753.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_16-2.26.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PIGSTY.el9.x86_64.rpm pigsty 2.26.2 745.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_16-2.26.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.2 725.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.26.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.1 725.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.26.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.0 723.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.26.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.2 702.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.25.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.1 701.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.25.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.0 700.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.25.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.1-1PGDG.rhel9.x86_64.rpm pgdg 2.23.1 716.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.23.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.0-1PGDG.rhel9.x86_64.rpm pgdg 2.23.0 714.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.23.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.1-1PGDG.rhel9.x86_64.rpm pgdg 2.22.1 712.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.22.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.0-1PGDG.rhel9.x86_64.rpm pgdg 2.22.0 709.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.22.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.3-1PGDG.rhel9.x86_64.rpm pgdg 2.21.3 715.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.21.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.2-1PGDG.rhel9.x86_64.rpm pgdg 2.21.2 713.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.21.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.1-1PGDG.rhel9.x86_64.rpm pgdg 2.21.1 713.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.21.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.0-1PGDG.rhel9.x86_64.rpm pgdg 2.21.0 720.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.21.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.3-1PGDG.rhel9.x86_64.rpm pgdg 2.20.3 695.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.20.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.2-1PGDG.rhel9.x86_64.rpm pgdg 2.20.2 694.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.20.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.3-1PGDG.rhel9.x86_64.rpm pgdg 2.19.3 658.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.19.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.2-1PGDG.rhel9.x86_64.rpm pgdg 2.19.2 657.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.19.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.1-1PGDG.rhel9.x86_64.rpm pgdg 2.19.1 656.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.19.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.19.0-1PGDG.rhel9.x86_64.rpm pgdg 2.19.0 677.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.19.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.2-1PGDG.rhel9.x86_64.rpm pgdg 2.18.2 656.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.18.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.1-1PGDG.rhel9.x86_64.rpm pgdg 2.18.1 655.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.18.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.18.0-1PGDG.rhel9.x86_64.rpm pgdg 2.18.0 653.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.18.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.2-1PGDG.rhel9.x86_64.rpm pgdg 2.17.2 607.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.17.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.1-1PGDG.rhel9.x86_64.rpm pgdg 2.17.1 606.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.17.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.17.0-1PGDG.rhel9.x86_64.rpm pgdg 2.17.0 606.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.17.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.16.0-1PGDG.rhel9.x86_64.rpm pgdg 2.16.0 571.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.16.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.3-1PGDG.rhel9.x86_64.rpm pgdg 2.15.3 565.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.15.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.2-1PGDG.rhel9.x86_64.rpm pgdg 2.15.2 566.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.15.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.15.0-1PGDG.rhel9.x86_64.rpm pgdg 2.15.0 565.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.15.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.13.1-1PGDG.rhel9.x86_64.rpm pgdg 2.13.1 716.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.13.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.13.0-1PGDG.rhel9.x86_64.rpm pgdg 2.13.0 715.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.13.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PIGSTY.el9.aarch64.rpm pigsty 2.26.2 709.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_16-2.26.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PIGSTY.el10.x86_64.rpm pigsty 2.26.2 775.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_16-2.26.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.2 756.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.26.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.1 756.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.26.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.0 756.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.26.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.2 732.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.25.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.1 726.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.25.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.25.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.0 730.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.25.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.1-1PGDG.rhel10.x86_64.rpm pgdg 2.23.1 743.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.23.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.23.0-1PGDG.rhel10.x86_64.rpm pgdg 2.23.0 740.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.23.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.1-1PGDG.rhel10.x86_64.rpm pgdg 2.22.1 737.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.22.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.22.0-1PGDG.rhel10.x86_64.rpm pgdg 2.22.0 737.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.22.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.3-1PGDG.rhel10.x86_64.rpm pgdg 2.21.3 741.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.21.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.2-1PGDG.rhel10.x86_64.rpm pgdg 2.21.2 740.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.21.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.1-1PGDG.rhel10.x86_64.rpm pgdg 2.21.1 739.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.21.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.21.0-1PGDG.rhel10.x86_64.rpm pgdg 2.21.0 739.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.21.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.3-1PGDG.rhel10.x86_64.rpm pgdg 2.20.3 726.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.20.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.2-1PGDG.rhel10.x86_64.rpm pgdg 2.20.2 723.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.20.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.20.1-1PGDG.rhel10.x86_64.rpm pgdg 2.20.1 723.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.20.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.2-1PIGSTY.el10.aarch64.rpm pigsty 2.26.2 725.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_16-2.26.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb pigsty 2.26.2 722.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb pigsty 2.26.2 659.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb pigsty 2.26.2 731.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb pigsty 2.26.2 670.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb pigsty 2.26.2 781.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb pigsty 2.26.2 749.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb pigsty 2.26.2 768.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb pigsty 2.26.2 746.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PIGSTY.el8.x86_64.rpm pigsty 2.26.2 820.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_15-2.26.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 749.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 748.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 747.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 727.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 725.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 724.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 731.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 731.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.1-1PGDG.rhel8.x86_64.rpm pgdg 2.22.1 730.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.22.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.0-1PGDG.rhel8.x86_64.rpm pgdg 2.22.0 728.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.22.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.3-1PGDG.rhel8.x86_64.rpm pgdg 2.21.3 736.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.2-1PGDG.rhel8.x86_64.rpm pgdg 2.21.2 735.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.1-1PGDG.rhel8.x86_64.rpm pgdg 2.21.1 734.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.0-1PGDG.rhel8.x86_64.rpm pgdg 2.21.0 734.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.21.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.3-1PGDG.rhel8.x86_64.rpm pgdg 2.20.3 719.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.20.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.2-1PGDG.rhel8.x86_64.rpm pgdg 2.20.2 718.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.20.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.1-1PGDG.rhel8.x86_64.rpm pgdg 2.20.1 718.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.20.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 699.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 697.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 696.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 772.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 744.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 743.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 742.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 686.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 685.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 682.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.16.0-1PGDG.rhel8.x86_64.rpm pgdg 2.16.0 640.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.16.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.3-1PGDG.rhel8.x86_64.rpm pgdg 2.15.3 637.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.15.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.2-1PGDG.rhel8.x86_64.rpm pgdg 2.15.2 637.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.15.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.0-1PGDG.rhel8.x86_64.rpm pgdg 2.15.0 633.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.15.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.13.1-1PGDG.rhel8.x86_64.rpm pgdg 2.13.1 768.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.13.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PIGSTY.el8.aarch64.rpm pigsty 2.26.2 752.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_15-2.26.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PIGSTY.el9.x86_64.rpm pigsty 2.26.2 745.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_15-2.26.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.2 723.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.26.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.1 722.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.26.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.0 722.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.26.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.2 700.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.25.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.1 695.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.25.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.0 701.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.25.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.1-1PGDG.rhel9.x86_64.rpm pgdg 2.23.1 712.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.23.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.0-1PGDG.rhel9.x86_64.rpm pgdg 2.23.0 712.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.23.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.1-1PGDG.rhel9.x86_64.rpm pgdg 2.22.1 709.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.22.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.0-1PGDG.rhel9.x86_64.rpm pgdg 2.22.0 708.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.22.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.3-1PGDG.rhel9.x86_64.rpm pgdg 2.21.3 713.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.21.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.2-1PGDG.rhel9.x86_64.rpm pgdg 2.21.2 715.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.21.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.1-1PGDG.rhel9.x86_64.rpm pgdg 2.21.1 718.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.21.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.0-1PGDG.rhel9.x86_64.rpm pgdg 2.21.0 717.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.21.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.3-1PGDG.rhel9.x86_64.rpm pgdg 2.20.3 697.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.20.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.2-1PGDG.rhel9.x86_64.rpm pgdg 2.20.2 693.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.20.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.3-1PGDG.rhel9.x86_64.rpm pgdg 2.19.3 657.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.19.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.2-1PGDG.rhel9.x86_64.rpm pgdg 2.19.2 655.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.19.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.1-1PGDG.rhel9.x86_64.rpm pgdg 2.19.1 654.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.19.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.19.0-1PGDG.rhel9.x86_64.rpm pgdg 2.19.0 676.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.19.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.2-1PGDG.rhel9.x86_64.rpm pgdg 2.18.2 655.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.18.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.1-1PGDG.rhel9.x86_64.rpm pgdg 2.18.1 654.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.18.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.18.0-1PGDG.rhel9.x86_64.rpm pgdg 2.18.0 652.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.18.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.2-1PGDG.rhel9.x86_64.rpm pgdg 2.17.2 607.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.17.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.1-1PGDG.rhel9.x86_64.rpm pgdg 2.17.1 607.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.17.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.17.0-1PGDG.rhel9.x86_64.rpm pgdg 2.17.0 606.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.17.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.16.0-1PGDG.rhel9.x86_64.rpm pgdg 2.16.0 570.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.16.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.3-1PGDG.rhel9.x86_64.rpm pgdg 2.15.3 565.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.15.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.15.2-1PGDG.rhel9.x86_64.rpm pgdg 2.15.2 565.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.15.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.13.1-1PGDG.rhel9.x86_64.rpm pgdg 2.13.1 725.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.13.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.13.0-1PGDG.rhel9.x86_64.rpm pgdg 2.13.0 726.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.13.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.12.2-1PGDG.rhel9.x86_64.rpm pgdg 2.12.2 708.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.12.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.12.0-1PGDG.rhel9.x86_64.rpm pgdg 2.12.0 707.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.11.2-1PGDG.rhel9.x86_64.rpm pgdg 2.11.2 677.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.11.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.11.1-1PGDG.rhel9.x86_64.rpm pgdg 2.11.1 675.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.11.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.11.0-1.rhel9.x86_64.rpm pgdg 2.11.0 674.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.11.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.10.2-1.rhel9.x86_64.rpm pgdg 2.10.2 652.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.10.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.9.3-1.rhel9.x86_64.rpm pgdg 2.9.3 643.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.9.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.9.2-1.rhel9.x86_64.rpm pgdg 2.9.2 642.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.9.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.9.1-1.rhel9.x86_64.rpm pgdg 2.9.1 642.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.9.1-1.rhel9.x86_64.rpm
@ el9.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PIGSTY.el9.aarch64.rpm pigsty 2.26.2 705.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_15-2.26.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PIGSTY.el10.x86_64.rpm pigsty 2.26.2 773.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_15-2.26.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.2 755.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.26.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.1 754.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.26.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.0 754.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.26.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.2 731.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.25.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.1 727.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.25.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.25.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.0 724.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.25.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.1-1PGDG.rhel10.x86_64.rpm pgdg 2.23.1 741.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.23.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.23.0-1PGDG.rhel10.x86_64.rpm pgdg 2.23.0 739.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.23.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.1-1PGDG.rhel10.x86_64.rpm pgdg 2.22.1 736.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.22.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.22.0-1PGDG.rhel10.x86_64.rpm pgdg 2.22.0 735.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.22.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.3-1PGDG.rhel10.x86_64.rpm pgdg 2.21.3 741.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.21.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.2-1PGDG.rhel10.x86_64.rpm pgdg 2.21.2 739.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.21.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.1-1PGDG.rhel10.x86_64.rpm pgdg 2.21.1 738.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.21.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.21.0-1PGDG.rhel10.x86_64.rpm pgdg 2.21.0 738.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.21.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.3-1PGDG.rhel10.x86_64.rpm pgdg 2.20.3 724.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.20.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.2-1PGDG.rhel10.x86_64.rpm pgdg 2.20.2 721.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.20.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.20.1-1PGDG.rhel10.x86_64.rpm pgdg 2.20.1 721.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.20.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.2-1PIGSTY.el10.aarch64.rpm pigsty 2.26.2 724.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_15-2.26.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb pigsty 2.26.2 718.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb pigsty 2.26.2 655.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb pigsty 2.26.2 727.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb pigsty 2.26.2 666.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb pigsty 2.26.2 777.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb pigsty 2.26.2 744.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb pigsty 2.26.2 765.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-timescaledb-tsl postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb pigsty 2.26.2 743.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-15-timescaledb-tsl_2.26.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el8.x86_64.rpm pigsty 2.19.3 763.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_14-2.19.3-9PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-1PGDG.rhel8.x86_64.rpm pgdg 2.19.3 693.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.19.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.2-1PGDG.rhel8.x86_64.rpm pgdg 2.19.2 692.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.19.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.1-1PGDG.rhel8.x86_64.rpm pgdg 2.19.1 691.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.19.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.0-1PGDG.rhel8.x86_64.rpm pgdg 2.19.0 766.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.19.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.18.2-1PGDG.rhel8.x86_64.rpm pgdg 2.18.2 739.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.18.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.18.1-1PGDG.rhel8.x86_64.rpm pgdg 2.18.1 738.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.18.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.18.0-1PGDG.rhel8.x86_64.rpm pgdg 2.18.0 736.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.18.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.17.2-1PGDG.rhel8.x86_64.rpm pgdg 2.17.2 680.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.17.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.17.1-1PGDG.rhel8.x86_64.rpm pgdg 2.17.1 679.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.17.0-1PGDG.rhel8.x86_64.rpm pgdg 2.17.0 677.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.17.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.16.0-1PGDG.rhel8.x86_64.rpm pgdg 2.16.0 637.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.16.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.15.3-1PGDG.rhel8.x86_64.rpm pgdg 2.15.3 634.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.15.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.15.2-1PGDG.rhel8.x86_64.rpm pgdg 2.15.2 633.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.15.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.15.0-1PGDG.rhel8.x86_64.rpm pgdg 2.15.0 630.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.15.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.13.1-1PGDG.rhel8.x86_64.rpm pgdg 2.13.1 764.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.13.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.13.0-1PGDG.rhel8.x86_64.rpm pgdg 2.13.0 763.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.13.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.12.2-1PGDG.rhel8.x86_64.rpm pgdg 2.12.2 747.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.12.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.12.0-1PGDG.rhel8.x86_64.rpm pgdg 2.12.0 745.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.11.2-1PGDG.rhel8.x86_64.rpm pgdg 2.11.2 710.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.11.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.11.1-1PGDG.rhel8.x86_64.rpm pgdg 2.11.1 709.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.11.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.11.0-1.rhel8.x86_64.rpm pgdg 2.11.0 707.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.11.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.10.2-1.rhel8.x86_64.rpm pgdg 2.10.2 683.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.10.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.10.0-1.rhel8.x86_64.rpm pgdg 2.10.0 679.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.10.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.9.3-1.rhel8.x86_64.rpm pgdg 2.9.3 676.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.9.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.9.2-1.rhel8.x86_64.rpm pgdg 2.9.2 675.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.9.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.9.1-1.rhel8.x86_64.rpm pgdg 2.9.1 674.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.9.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.8.1-1.rhel8.x86_64.rpm pgdg 2.8.1 644.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.8.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.8.0-1.rhel8.x86_64.rpm pgdg 2.8.0 643.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.8.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.7.2-1.rhel8.x86_64.rpm pgdg 2.7.2 616.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.7.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.6.1-1.rhel8.x86_64.rpm pgdg 2.6.1 594.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.6.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.6.0-1.rhel8.x86_64.rpm pgdg 2.6.0 593.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.6.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.5.2-1.rhel8.x86_64.rpm pgdg 2.5.2 579.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.5.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.5.1-1.rhel8.x86_64.rpm pgdg 2.5.1 619.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.5.0-1.rhel8.x86_64.rpm pgdg 2.5.0 617.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/timescaledb-tsl_14-2.5.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el8.aarch64.rpm pigsty 2.19.3 699.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_14-2.19.3-9PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el9.x86_64.rpm pigsty 2.19.3 670.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_14-2.19.3-9PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-1PGDG.rhel9.x86_64.rpm pgdg 2.19.3 653.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.19.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.2-1PGDG.rhel9.x86_64.rpm pgdg 2.19.2 650.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.19.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.1-1PGDG.rhel9.x86_64.rpm pgdg 2.19.1 650.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.19.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.0-1PGDG.rhel9.x86_64.rpm pgdg 2.19.0 671.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.19.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.18.2-1PGDG.rhel9.x86_64.rpm pgdg 2.18.2 648.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.18.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.18.1-1PGDG.rhel9.x86_64.rpm pgdg 2.18.1 647.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.18.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.18.0-1PGDG.rhel9.x86_64.rpm pgdg 2.18.0 646.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.18.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.17.2-1PGDG.rhel9.x86_64.rpm pgdg 2.17.2 601.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.17.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.17.1-1PGDG.rhel9.x86_64.rpm pgdg 2.17.1 601.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.17.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.17.0-1PGDG.rhel9.x86_64.rpm pgdg 2.17.0 600.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.17.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.16.0-1PGDG.rhel9.x86_64.rpm pgdg 2.16.0 566.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.16.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.15.3-1PGDG.rhel9.x86_64.rpm pgdg 2.15.3 563.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.15.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.15.2-1PGDG.rhel9.x86_64.rpm pgdg 2.15.2 560.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.15.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.13.1-1PGDG.rhel9.x86_64.rpm pgdg 2.13.1 723.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.13.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.13.0-1PGDG.rhel9.x86_64.rpm pgdg 2.13.0 723.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.13.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.12.2-1PGDG.rhel9.x86_64.rpm pgdg 2.12.2 706.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.12.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.12.0-1PGDG.rhel9.x86_64.rpm pgdg 2.12.0 704.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.11.2-1PGDG.rhel9.x86_64.rpm pgdg 2.11.2 675.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.11.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.11.1-1PGDG.rhel9.x86_64.rpm pgdg 2.11.1 674.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.11.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.11.0-1.rhel9.x86_64.rpm pgdg 2.11.0 673.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.11.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.10.2-1.rhel9.x86_64.rpm pgdg 2.10.2 650.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.10.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.10.0-1.rhel9.x86_64.rpm pgdg 2.10.0 646.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.10.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.9.3-1.rhel9.x86_64.rpm pgdg 2.9.3 643.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.9.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.9.2-1.rhel9.x86_64.rpm pgdg 2.9.2 641.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.9.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.9.1-1.rhel9.x86_64.rpm pgdg 2.9.1 641.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.9.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.8.1-1.rhel9.x86_64.rpm pgdg 2.8.1 611.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.8.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.7.2-1.rhel9.x86_64.rpm pgdg 2.7.2 585.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.7.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.7.0-1.rhel9.x86_64.rpm pgdg 2.7.0 578.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/timescaledb-tsl_14-2.7.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el9.aarch64.rpm pigsty 2.19.3 637.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_14-2.19.3-9PIGSTY.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_amd64.deb pigsty 2.19.3 672.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_arm64.deb pigsty 2.19.3 613.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_amd64.deb pigsty 2.19.3 714.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_arm64.deb pigsty 2.19.3 686.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_amd64.deb pigsty 2.19.3 702.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_arm64.deb pigsty 2.19.3 680.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install timescaledb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y timescaledb -v 18  # PG 18
pig ext install -y timescaledb -v 17  # PG 17
pig ext install -y timescaledb -v 16  # PG 16
pig ext install -y timescaledb -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y timescaledb-tsl_18       # PG 18
dnf install -y timescaledb-tsl_17       # PG 17
dnf install -y timescaledb-tsl_16       # PG 16
dnf install -y timescaledb-tsl_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-timescaledb-tsl   # PG 18
apt install -y postgresql-17-timescaledb-tsl   # PG 17
apt install -y postgresql-16-timescaledb-tsl   # PG 16
apt install -y postgresql-15-timescaledb-tsl   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'timescaledb';
```


**创建扩展**：

```sql
CREATE EXTENSION timescaledb;
```


## 用法

创建一张表并将其转换为超表（hypertable）

```sql
DROP TABLE IF EXISTS ts_test;
CREATE TABLE ts_test
(
    ts TIMESTAMPTZ NOT NULL,
    id BIGINT,
    v  INTEGER -- 载荷数据
);
SELECT create_hypertable('ts_test', by_range('ts'));

INSERT INTO ts_test
    SELECT now() + (i || ' seconds')::INTERVAL, i, i % 100
    FROM generate_series(1, 1000000) i;
```

连续聚合示例：

```sql
CREATE MATERIALIZED VIEW ts_hourly
WITH (timescaledb.continuous) AS
  SELECT time_bucket('1 hour', ts) AS bucket,
         count(*) AS cnt,
         avg(v)   AS avg_v
  FROM ts_test
  GROUP BY bucket;

-- 添加刷新策略以保持连续聚合的数据是最新的
SELECT add_continuous_aggregate_policy('ts_hourly',
    start_offset    => INTERVAL '3 hours',
    end_offset      => INTERVAL '1 hour',
    schedule_interval => INTERVAL '1 hour');
```

任务调度示例：

```sql
SELECT add_job('SELECT 1','1h', initial_start => now()::timestamptz);
```

压缩示例：

```sql
ALTER TABLE ts_test SET (
    timescaledb.compress,
    timescaledb.compress_segmentby = 'id',
    timescaledb.compress_orderby = 'ts'
);

-- 添加压缩策略，自动压缩超过 1 天的数据块
SELECT add_compression_policy('ts_test', INTERVAL '1 day');
```
