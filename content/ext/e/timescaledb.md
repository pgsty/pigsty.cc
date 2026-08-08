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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/timescaledb-2.29.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">timescaledb-2.29.1.tar.gz</div>
    <div class="ext-card__desc">timescaledb-2.29.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`timescaledb`**](/ext/e/timescaledb) | `2.29.1` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license timescale" href="/ext/license#timescale">Timescale</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1000  | [**`timescaledb`**](/ext/e/timescaledb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `timescaledb_information` |
{.ext-table}

| **相关扩展** | [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`pg_stl`](/ext/e/pg_stl) [`pg_partman`](/ext/e/pg_partman) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`citus`](/ext/e/citus) [`pg_cron`](/ext/e/pg_cron) [`pg_ivm`](/ext/e/pg_ivm) [`pg_incremental`](/ext/e/pg_incremental) [`pg_trickle`](/ext/e/pg_trickle) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> TimescaleDB 2.29 removes PostgreSQL 15 support


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.1` | {{< pgvers "18,17,16" >}} | `timescaledb` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.1` | {{< pgvers "18,17,16" >}} | `timescaledb-tsl_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.1` | {{< pgvers "18,17,16" >}} | `postgresql-$v-timescaledb-tsl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.29.1 20 | AVAIL PIGSTY 2.29.1 39 | AVAIL PIGSTY 2.29.1 45 | AVAIL PIGSTY 2.28.3 42 | AVAIL PIGSTY 2.19.3 35 |
| el8.aarch64 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| el9.x86_64 | AVAIL PIGSTY 2.29.1 21 | AVAIL PIGSTY 2.29.1 39 | AVAIL PIGSTY 2.29.1 45 | AVAIL PIGSTY 2.28.3 50 | AVAIL PIGSTY 2.19.3 29 |
| el9.aarch64 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| el10.x86_64 | AVAIL PIGSTY 2.29.1 21 | AVAIL PIGSTY 2.29.1 30 | AVAIL PIGSTY 2.29.1 30 | AVAIL PIGSTY 2.28.3 27 | AVAIL PIGSTY 2.19.3 1 |
| el10.aarch64 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.29.1 2 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| d12.x86_64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| d12.aarch64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| d13.x86_64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| d13.aarch64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| u22.x86_64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| u22.aarch64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| u24.x86_64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| u24.aarch64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| u26.x86_64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
| u26.aarch64 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.29.1 1 | AVAIL PIGSTY 2.28.3 1 | AVAIL PIGSTY 2.19.3 1 |
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PIGSTY.el8.x86_64.rpm pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_18-2.29.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PIGSTY.el8.x86_64.rpm pigsty 2.29.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_18-2.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.29.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 770.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 769.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 768.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 753.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 750.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.2 751.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.1 750.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.0 749.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.2 730.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-2PGDG.rhel8.10.x86_64.rpm pgdg 2.25.1 727.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.25.0 726.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel8.x86_64.rpm pgdg 2.23.1 733.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel8.x86_64.rpm pgdg 2.23.0 733.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PIGSTY.el8.aarch64.rpm pigsty 2.29.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_18-2.29.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PIGSTY.el8.aarch64.rpm pigsty 2.29.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_18-2.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PIGSTY.el9.x86_64.rpm pigsty 2.29.1 801.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_18-2.29.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.29.1 783.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.29.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PIGSTY.el9.x86_64.rpm pigsty 2.29.0 800.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_18-2.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.29.0 783.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.29.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.3 766.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.28.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.2 766.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.28.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.1 765.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.28.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.0 765.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.28.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.27.2 745.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.27.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.1 745.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.27.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.0 746.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.27.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.4 729.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.3 728.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.2 727.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.1 728.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.0 723.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.2 702.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.1 700.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.25.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.25.0 699.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel9.x86_64.rpm pgdg 2.23.1 719.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel9.x86_64.rpm pgdg 2.23.0 715.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PIGSTY.el9.aarch64.rpm pigsty 2.29.1 766.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_18-2.29.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PIGSTY.el9.aarch64.rpm pigsty 2.29.0 765.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_18-2.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PIGSTY.el10.x86_64.rpm pigsty 2.29.1 837.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_18-2.29.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.29.1 814.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.29.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PIGSTY.el10.x86_64.rpm pigsty 2.29.0 831.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_18-2.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.29.0 810.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.29.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.3 793.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.28.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.2 795.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.28.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.1 796.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.28.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.28.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.0 792.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.28.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.27.2 778.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.27.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.1 773.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.27.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.27.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.0 770.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.27.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.4-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.4 758.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.3 754.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.2 757.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.1 757.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.26.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.0 755.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.26.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.2 731.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.25.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.1 727.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.25.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.25.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.25.0 727.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.25.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.1-1PGDG.rhel10.x86_64.rpm pgdg 2.23.1 743.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.23.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.23.0-1PGDG.rhel10.x86_64.rpm pgdg 2.23.0 741.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/timescaledb-tsl_18-2.23.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.1-1PIGSTY.el10.aarch64.rpm pigsty 2.29.1 784.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_18-2.29.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 timescaledb-tsl_18 timescaledb-tsl_18-2.29.0-1PIGSTY.el10.aarch64.rpm pigsty 2.29.0 779.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_18-2.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_amd64.deb pigsty 2.29.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_arm64.deb pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~trixie_amd64.deb pigsty 2.29.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~trixie_arm64.deb pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~jammy_amd64.deb pigsty 2.29.1 855.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~jammy_arm64.deb pigsty 2.29.1 826.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~noble_amd64.deb pigsty 2.29.1 843.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~noble_arm64.deb pigsty 2.29.1 821.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~resolute_amd64.deb pigsty 2.29.1 859.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-timescaledb-tsl postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~resolute_arm64.deb pigsty 2.29.1 848.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-18-timescaledb-tsl_2.29.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PIGSTY.el8.x86_64.rpm pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_17-2.29.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PIGSTY.el8.x86_64.rpm pigsty 2.29.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_17-2.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.29.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 769.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 769.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 767.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 752.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 749.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/timescaledb-tsl_17-2.26.3-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PIGSTY.el8.aarch64.rpm pigsty 2.29.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_17-2.29.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PIGSTY.el8.aarch64.rpm pigsty 2.29.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_17-2.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PIGSTY.el9.x86_64.rpm pigsty 2.29.1 801.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_17-2.29.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.29.1 785.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.29.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PIGSTY.el9.x86_64.rpm pigsty 2.29.0 799.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_17-2.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.29.0 776.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.29.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.3 763.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.28.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.2 765.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.28.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.1 765.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.28.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.0 762.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.28.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.27.2 744.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.27.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.1 744.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.27.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.0 742.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.27.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.4 727.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.26.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.3 724.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/timescaledb-tsl_17-2.26.3-1PGDG.rhel9.7.x86_64.rpm
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
@ el9.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PIGSTY.el9.aarch64.rpm pigsty 2.29.1 764.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_17-2.29.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PIGSTY.el9.aarch64.rpm pigsty 2.29.0 765.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_17-2.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PIGSTY.el10.x86_64.rpm pigsty 2.29.1 831.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_17-2.29.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.29.1 812.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.29.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PIGSTY.el10.x86_64.rpm pigsty 2.29.0 828.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_17-2.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.29.0 811.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.29.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.3 793.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.28.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.2 794.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.28.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.1 796.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.28.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.28.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.0 792.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.28.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.27.2 772.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.27.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.1 772.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.27.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.27.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.0 771.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.27.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.4-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.4 759.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.26.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.26.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.3 755.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/timescaledb-tsl_17-2.26.3-1PGDG.rhel10.1.x86_64.rpm
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
@ el10.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.1-1PIGSTY.el10.aarch64.rpm pigsty 2.29.1 784.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_17-2.29.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 timescaledb-tsl_17 timescaledb-tsl_17-2.29.0-1PIGSTY.el10.aarch64.rpm pigsty 2.29.0 779.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_17-2.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_amd64.deb pigsty 2.29.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_arm64.deb pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~trixie_amd64.deb pigsty 2.29.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~trixie_arm64.deb pigsty 2.29.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~jammy_amd64.deb pigsty 2.29.1 851.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~jammy_arm64.deb pigsty 2.29.1 824.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~noble_amd64.deb pigsty 2.29.1 844.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~noble_arm64.deb pigsty 2.29.1 822.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~resolute_amd64.deb pigsty 2.29.1 849.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-timescaledb-tsl postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~resolute_arm64.deb pigsty 2.29.1 841.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-17-timescaledb-tsl_2.29.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PIGSTY.el8.x86_64.rpm pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_16-2.29.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PIGSTY.el8.x86_64.rpm pigsty 2.29.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_16-2.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.29.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.29.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 769.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 769.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 768.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 753.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 750.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/timescaledb-tsl_16-2.26.3-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PIGSTY.el8.aarch64.rpm pigsty 2.29.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_16-2.29.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PIGSTY.el8.aarch64.rpm pigsty 2.29.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_16-2.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PIGSTY.el9.x86_64.rpm pigsty 2.29.1 802.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_16-2.29.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.29.1 782.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.29.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PIGSTY.el9.x86_64.rpm pigsty 2.29.0 796.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_16-2.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.29.0 777.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.29.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.3 762.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.28.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.2 765.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.28.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.1 764.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.28.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.0 762.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.28.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.27.2 743.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.27.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.1 742.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.27.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.0 741.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.27.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.4 728.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.26.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.3 723.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/timescaledb-tsl_16-2.26.3-1PGDG.rhel9.7.x86_64.rpm
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
@ el9.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PIGSTY.el9.aarch64.rpm pigsty 2.29.1 765.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_16-2.29.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PIGSTY.el9.aarch64.rpm pigsty 2.29.0 763.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_16-2.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PIGSTY.el10.x86_64.rpm pigsty 2.29.1 835.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_16-2.29.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.29.1 814.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.29.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PIGSTY.el10.x86_64.rpm pigsty 2.29.0 830.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_16-2.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.29.0 809.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.29.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.3 792.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.28.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.2 794.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.28.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.1 795.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.28.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.28.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.0 792.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.28.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.27.2 772.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.27.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.1 772.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.27.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.27.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.0 769.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.27.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.4-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.4 756.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.26.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.26.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.3 756.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/timescaledb-tsl_16-2.26.3-1PGDG.rhel10.1.x86_64.rpm
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
@ el10.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.1-1PIGSTY.el10.aarch64.rpm pigsty 2.29.1 784.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_16-2.29.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 timescaledb-tsl_16 timescaledb-tsl_16-2.29.0-1PIGSTY.el10.aarch64.rpm pigsty 2.29.0 779.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_16-2.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_amd64.deb pigsty 2.29.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_arm64.deb pigsty 2.29.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~trixie_amd64.deb pigsty 2.29.1 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~trixie_arm64.deb pigsty 2.29.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~jammy_amd64.deb pigsty 2.29.1 848.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~jammy_arm64.deb pigsty 2.29.1 819.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~noble_amd64.deb pigsty 2.29.1 839.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~noble_arm64.deb pigsty 2.29.1 815.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~resolute_amd64.deb pigsty 2.29.1 847.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-timescaledb-tsl postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~resolute_arm64.deb pigsty 2.29.1 833.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-16-timescaledb-tsl_2.29.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el8.x86_64.rpm pigsty 2.28.3 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-tsl_15-2.28.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.3 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.2 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.1 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.28.0 1.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.28.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.2 764.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.27.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.1 763.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.27.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.27.0 762.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.27.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.4 751.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.26.3 748.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/timescaledb-tsl_15-2.26.3-1PGDG.rhel8.10.x86_64.rpm
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
@ el8.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el8.aarch64.rpm pigsty 2.28.3 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-tsl_15-2.28.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el9.x86_64.rpm pigsty 2.28.3 778.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_15-2.28.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.3 758.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.28.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.2 757.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.28.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.1-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.1 760.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.28.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.28.0 756.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.28.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.27.2 735.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.27.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.1 735.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.27.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.27.0 732.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.27.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.4-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.4 725.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.26.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.26.3 722.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/timescaledb-tsl_15-2.26.3-1PGDG.rhel9.7.x86_64.rpm
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
@ el9.aarch64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el9.aarch64.rpm pigsty 2.28.3 738.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_15-2.28.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PIGSTY.el10.x86_64.rpm pigsty 2.28.3 804.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_15-2.28.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.3 784.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.28.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.2 789.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.28.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.1-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.1 786.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.28.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.28.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.28.0 787.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.28.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.27.2 769.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.27.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.1-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.1 766.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.27.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.27.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.27.0 763.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.27.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.4-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.4 758.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.26.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 timescaledb-tsl_15 timescaledb-tsl_15-2.26.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.26.3 755.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/timescaledb-tsl_15-2.26.3-1PGDG.rhel10.1.x86_64.rpm
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
@ el9.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el9.x86_64.rpm pigsty 2.19.3 670.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-tsl_14-2.19.3-9PIGSTY.el9.x86_64.rpm
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
@ el9.aarch64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el9.aarch64.rpm pigsty 2.19.3 637.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-tsl_14-2.19.3-9PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el10.x86_64.rpm pigsty 2.19.3 694.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-tsl_14-2.19.3-9PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 timescaledb-tsl_14 timescaledb-tsl_14-2.19.3-9PIGSTY.el10.aarch64.rpm pigsty 2.19.3 649.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-tsl_14-2.19.3-9PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_amd64.deb pigsty 2.19.3 672.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_arm64.deb pigsty 2.19.3 613.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~trixie_amd64.deb pigsty 2.19.3 679.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~trixie_arm64.deb pigsty 2.19.3 622.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_amd64.deb pigsty 2.19.3 714.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_arm64.deb pigsty 2.19.3 684.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_amd64.deb pigsty 2.19.3 702.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_arm64.deb pigsty 2.19.3 680.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~resolute_amd64.deb pigsty 2.19.3 707.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-timescaledb-tsl postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~resolute_arm64.deb pigsty 2.19.3 692.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/timescaledb-tsl/postgresql-14-timescaledb-tsl_2.19.3-9PIGSTY~resolute_arm64.deb
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
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y timescaledb-tsl_18       # PG 18
dnf install -y timescaledb-tsl_17       # PG 17
dnf install -y timescaledb-tsl_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-timescaledb-tsl   # PG 18
apt install -y postgresql-17-timescaledb-tsl   # PG 17
apt install -y postgresql-16-timescaledb-tsl   # PG 16
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

来源：

- [TimescaleDB v2.29.1 README](https://github.com/timescale/timescaledb/blob/2.29.1/README.md)
- [TimescaleDB 2.29.0 发行说明](https://github.com/timescale/timescaledb/releases/tag/2.29.0)
- [TimescaleDB 2.29.1 安全与缺陷修复版本](https://github.com/timescale/timescaledb/releases/tag/2.29.1)
- [TimescaleDB v2.29.1 控制文件](https://github.com/timescale/timescaledb/blob/2.29.1/timescaledb.control.in)
- [CREATE TABLE API](https://www.tigerdata.com/docs/reference/timescaledb/hypertables/create_table/)
- [create_hypertable() API](https://www.tigerdata.com/docs/reference/timescaledb/hypertables/create_hypertable/)
- [连续聚合 API](https://www.tigerdata.com/docs/reference/timescaledb/continuous-aggregates/create_materialized_view/)
- [add_columnstore_policy() API](https://www.tigerdata.com/docs/reference/timescaledb/hypercore/add_columnstore_policy/)
- [TimescaleDB GUC](https://www.tigerdata.com/docs/reference/timescaledb/configuration/gucs/)

`timescaledb` 是用于时序与事件分析的 PostgreSQL 扩展。当前文档重点介绍 `CREATE TABLE ... WITH (tsdb.hypertable)`、连续聚合、自动化作业，以及将数据块迁移到列存储的用法。

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

SELECT add_job('user_defined_action', '1h');
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

### 版本 2.29.1 与注意事项

- TimescaleDB 2.29 支持 PostgreSQL 16、17 和 18。PostgreSQL 15 支持止于 2.28 系列，因此在将 PG15 数据库迁移到 2.29 之前，应先升级 PostgreSQL。
- 版本 2.29.0 新增 `compact_chunk()` 以及用于合并小型列存储批次的压实策略，并优化了 DML 数据块排除和小 `LIMIT` 列存储扫描。在现有工作负载上启用压实策略之前，请先审阅发行说明。
- 2.29 系列新增了 `alter_job(..., config_merge => ...)`、直接压缩与无序重压缩控制，以及分层连续聚合的并发刷新策略。
- 应使用 2.29.1，而不是 2.29.0。该版本修复了权限检查缺失、畸形压缩数据处理、多个崩溃路径，以及 `compact_chunk` 批次限制验证问题；上游建议所有 2.29.0 安装均进行升级。
- 控制文件将 `timescaledb` 标记为受信任且不可重定位。服务器库仍须根据打包部署配置进行预加载，并重启 PostgreSQL。
