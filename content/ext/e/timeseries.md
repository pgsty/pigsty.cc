---
title: "timeseries"
linkTitle: "timeseries"
description: "时序数据API封装"
weight: 1020
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ChuckHend/pg_timeseries">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ChuckHend/pg_timeseries</div>
    <div class="ext-card__desc">https://github.com/ChuckHend/pg_timeseries</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_timeseries-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_timeseries-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_timeseries-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_timeseries`**](/ext/e/timeseries) | `0.2.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1020  | [**`timeseries`**](/ext/e/timeseries) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) [`timescaledb`](/ext/e/timescaledb) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`table_version`](/ext/e/table_version) [`pg_task`](/ext/e/pg_task) [`pg_later`](/ext/e/pg_later) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_timeseries` | `pg_cron`, `pg_partman` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_timeseries_$v` | `pg_cron_$v`, `pg_partman_$v` |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-timeseries` | `postgresql-$v-cron`, `postgresql-$v-partman` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
@ el8.x86_64 18 pg_timeseries_18 pg_timeseries_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_timeseries_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_timeseries_18 pg_timeseries_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_timeseries_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_timeseries_18 pg_timeseries_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 27.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_timeseries_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_timeseries_18 pg_timeseries_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_timeseries_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_timeseries_18 pg_timeseries_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_timeseries_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_timeseries_18 pg_timeseries_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_timeseries_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-timeseries postgresql-18-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-18-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_timeseries_17 pg_timeseries_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_timeseries_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_timeseries_17 pg_timeseries_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_timeseries_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_timeseries_17 pg_timeseries_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 27.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_timeseries_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_timeseries_17 pg_timeseries_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_timeseries_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_timeseries_17 pg_timeseries_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_timeseries_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_timeseries_17 pg_timeseries_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_timeseries_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-timeseries postgresql-17-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-17-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_timeseries_16 pg_timeseries_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_timeseries_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_timeseries_16 pg_timeseries_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_timeseries_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_timeseries_16 pg_timeseries_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 27.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_timeseries_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_timeseries_16 pg_timeseries_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_timeseries_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_timeseries_16 pg_timeseries_16-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_timeseries_16-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_timeseries_16 pg_timeseries_16-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_timeseries_16-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-timeseries postgresql-16-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-16-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_timeseries_15 pg_timeseries_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_timeseries_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_timeseries_15 pg_timeseries_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_timeseries_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_timeseries_15 pg_timeseries_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 27.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_timeseries_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_timeseries_15 pg_timeseries_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_timeseries_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_timeseries_15 pg_timeseries_15-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_timeseries_15-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_timeseries_15 pg_timeseries_15-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_timeseries_15-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-timeseries postgresql-15-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-15-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_timeseries_14 pg_timeseries_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_timeseries_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_timeseries_14 pg_timeseries_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_timeseries_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_timeseries_14 pg_timeseries_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 27.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_timeseries_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_timeseries_14 pg_timeseries_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_timeseries_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_timeseries_14 pg_timeseries_14-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_timeseries_14-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_timeseries_14 pg_timeseries_14-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_timeseries_14-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-timeseries postgresql-14-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-timeseries/postgresql-14-pg-timeseries_0.2.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_timeseries` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_timeseries         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_timeseries` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_timeseries;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_timeseries -v 18  # PG 18
pig ext install -y pg_timeseries -v 17  # PG 17
pig ext install -y pg_timeseries -v 16  # PG 16
pig ext install -y pg_timeseries -v 15  # PG 15
pig ext install -y pg_timeseries -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_timeseries_18       # PG 18
dnf install -y pg_timeseries_17       # PG 17
dnf install -y pg_timeseries_16       # PG 16
dnf install -y pg_timeseries_15       # PG 15
dnf install -y pg_timeseries_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-timeseries   # PG 18
apt install -y postgresql-17-pg-timeseries   # PG 17
apt install -y postgresql-16-pg-timeseries   # PG 16
apt install -y postgresql-15-pg-timeseries   # PG 15
apt install -y postgresql-14-pg-timeseries   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION timeseries CASCADE;  -- 依赖: pg_cron, pg_partman
```



## 用法

> [pg_timeseries: 时间序列便捷 API](https://github.com/ChuckHend/pg_timeseries)

本扩展为时间序列表的创建、维护和使用提供了一致的用户体验。

### 快速开始

假设你已经有一张分区表，只需调用 `enable_ts_table` 函数即可启用时间序列功能：

```sql
CREATE EXTENSION timeseries CASCADE;

SELECT enable_ts_table('sensor_readings');
```

这一调用会自动完成以下操作：

  * 使用 PostgreSQL 原生分区功能将表重构为一系列分区
  * 每个分区覆盖一段时间范围（默认一周）
  * 自动为未来创建新分区（默认提前一个月）
  * 每小时运行一次维护任务，创建缺失的分区和未来所需的分区


## 使用表

### 索引

时间序列表本质上就是标准的 PostgreSQL 分区表，所有 PostgreSQL 的现有功能都能正常使用。

传统 B-Tree 索引适用于时间序列数据，但在某些查询场景下（通常是返回大量结果的查询），BRIN 索引可能表现更优。如果每个分区不超过一百万条记录，建议先用 B-Tree。

### 分区大小

扩展提供了 `ts_part_info` 视图，可方便查看各分区的数据大小、索引大小和总大小。一般建议每个分区能容纳在可用内存的约四分之一以内。

### 数据保留

调用 `set_ts_retention_policy` 设置保留策略，超出保留窗口的分区每小时会被自动删除。使用 `clear_ts_retention_policy` 恢复默认行为（无限保留）。

### 压缩

调用 `set_ts_compression_policy` 可对超过指定时间间隔的分区使用列式存储进行压缩。压缩功能依赖 citus 和 citus_columnar 扩展：

```sql
CREATE EXTENSION citus;
CREATE EXTENSION citus_columnar;
```


## 分析辅助函数

### `first` 和 `last`

按一个维度分组，但按另一个维度取首条/末条记录：

```sql
SELECT machine_id,
       last(cpu_util, recorded_at)
FROM events
GROUP BY machine_id;
```

### `date_bin_table`

自动将时间序列值对齐到指定步长，并为无数据的时间段补充 NULL 行：

```sql
SELECT * FROM date_bin_table(NULL::target_table, '1 hour', '[2024-02-01 00:00, 2024-02-02 15:00]');
```

输出结果与直接查表相比有三点不同：

  * 按时间升序排列
  * 时间列的值对齐到指定步长
  * 无数据的时间段会补充 NULL 行

### `make_view_incremental`

将普通视图转换为自动保持更新的增量物化视图，无需手动 `REFRESH`。该功能基于 pg_ivm 实现：

```sql
CREATE EXTENSION pg_ivm;
```


## 依赖

* [pg_cron](https://github.com/citusdata/pg_cron)
* [pg_partman](https://github.com/pgpartman/pg_partman)

### 可选依赖

* [pg_ivm](https://github.com/sraoss/pg_ivm) — 增量物化视图
* [Citus & Citus Columnar](https://github.com/citusdata/citus) — 压缩功能
