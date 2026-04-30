---
title: "timescaledb_toolkit"
linkTitle: "timescaledb_toolkit"
description: "超表分析查询，时间序列流式处理，以及其他SQL工具"
weight: 1010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/timescale/timescaledb-toolkit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">timescale/timescaledb-toolkit</div>
    <div class="ext-card__desc">https://github.com/timescale/timescaledb-toolkit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/timescaledb-toolkit-1.22.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">timescaledb-toolkit-1.22.0.tar.gz</div>
    <div class="ext-card__desc">timescaledb-toolkit-1.22.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`timescaledb_toolkit`**](/ext/e/timescaledb_toolkit) | `1.22.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license timescale" href="/ext/license#timescale">Timescale</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1010  | [**`timescaledb_toolkit`**](/ext/e/timescaledb_toolkit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`timescaledb`](/ext/e/timescaledb) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) [`table_version`](/ext/e/table_version) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.22.0` | {{< pgvers "18,17,16,15" >}} | `timescaledb_toolkit` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.22.0` | {{< pgvers "18,17,16,15" >}} | `timescaledb-toolkit_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.22.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-timescaledb-toolkit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.19.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.19.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.19.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.19.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.19.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.22.0 1 | AVAIL PIGSTY 1.19.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 timescaledb-toolkit_18 timescaledb-toolkit_18-1.22.0-1PIGSTY.el8.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-toolkit_18-1.22.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 timescaledb-toolkit_18 timescaledb-toolkit_18-1.22.0-1PIGSTY.el8.aarch64.rpm pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-toolkit_18-1.22.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 timescaledb-toolkit_18 timescaledb-toolkit_18-1.22.0-1PIGSTY.el9.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-toolkit_18-1.22.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 timescaledb-toolkit_18 timescaledb-toolkit_18-1.22.0-1PIGSTY.el9.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-toolkit_18-1.22.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 timescaledb-toolkit_18 timescaledb-toolkit_18-1.22.0-1PIGSTY.el10.x86_64.rpm pigsty 1.22.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-toolkit_18-1.22.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 timescaledb-toolkit_18 timescaledb-toolkit_18-1.22.0-1PIGSTY.el10.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-toolkit_18-1.22.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb pigsty 1.22.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb pigsty 1.22.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-timescaledb-toolkit postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb pigsty 1.22.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-18-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 timescaledb-toolkit_17 timescaledb-toolkit_17-1.22.0-1PIGSTY.el8.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-toolkit_17-1.22.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 timescaledb-toolkit_17 timescaledb-toolkit_17-1.22.0-1PIGSTY.el8.aarch64.rpm pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-toolkit_17-1.22.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 timescaledb-toolkit_17 timescaledb-toolkit_17-1.22.0-1PIGSTY.el9.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-toolkit_17-1.22.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 timescaledb-toolkit_17 timescaledb-toolkit_17-1.22.0-1PIGSTY.el9.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-toolkit_17-1.22.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 timescaledb-toolkit_17 timescaledb-toolkit_17-1.22.0-1PIGSTY.el10.x86_64.rpm pigsty 1.22.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-toolkit_17-1.22.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 timescaledb-toolkit_17 timescaledb-toolkit_17-1.22.0-1PIGSTY.el10.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-toolkit_17-1.22.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb pigsty 1.22.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-timescaledb-toolkit postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb pigsty 1.22.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-17-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 timescaledb-toolkit_16 timescaledb-toolkit_16-1.22.0-1PIGSTY.el8.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-toolkit_16-1.22.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 timescaledb-toolkit_16 timescaledb-toolkit_16-1.22.0-1PIGSTY.el8.aarch64.rpm pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-toolkit_16-1.22.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 timescaledb-toolkit_16 timescaledb-toolkit_16-1.22.0-1PIGSTY.el9.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-toolkit_16-1.22.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 timescaledb-toolkit_16 timescaledb-toolkit_16-1.22.0-1PIGSTY.el9.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-toolkit_16-1.22.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 timescaledb-toolkit_16 timescaledb-toolkit_16-1.22.0-1PIGSTY.el10.x86_64.rpm pigsty 1.22.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-toolkit_16-1.22.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 timescaledb-toolkit_16 timescaledb-toolkit_16-1.22.0-1PIGSTY.el10.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-toolkit_16-1.22.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb pigsty 1.22.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-timescaledb-toolkit postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb pigsty 1.22.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-16-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 timescaledb-toolkit_15 timescaledb-toolkit_15-1.22.0-1PIGSTY.el8.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/timescaledb-toolkit_15-1.22.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 timescaledb-toolkit_15 timescaledb-toolkit_15-1.22.0-1PIGSTY.el8.aarch64.rpm pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/timescaledb-toolkit_15-1.22.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 timescaledb-toolkit_15 timescaledb-toolkit_15-1.22.0-1PIGSTY.el9.x86_64.rpm pigsty 1.22.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/timescaledb-toolkit_15-1.22.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 timescaledb-toolkit_15 timescaledb-toolkit_15-1.22.0-1PIGSTY.el9.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/timescaledb-toolkit_15-1.22.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 timescaledb-toolkit_15 timescaledb-toolkit_15-1.22.0-1PIGSTY.el10.x86_64.rpm pigsty 1.22.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/timescaledb-toolkit_15-1.22.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 timescaledb-toolkit_15 timescaledb-toolkit_15-1.22.0-1PIGSTY.el10.aarch64.rpm pigsty 1.22.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/timescaledb-toolkit_15-1.22.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb pigsty 1.22.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb pigsty 1.22.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb pigsty 1.22.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb pigsty 1.22.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-timescaledb-toolkit postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb pigsty 1.22.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-15-timescaledb-toolkit_1.22.0-1PIGSTY~noble_arm64.deb
@ d12.x86_64 14 postgresql-14-timescaledb-toolkit postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~bookworm_amd64.deb pigsty 1.19.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-timescaledb-toolkit postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~bookworm_arm64.deb pigsty 1.19.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timescaledb-toolkit/postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-timescaledb-toolkit postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~jammy_amd64.deb pigsty 1.19.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-timescaledb-toolkit postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~jammy_arm64.deb pigsty 1.19.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timescaledb-toolkit/postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-timescaledb-toolkit postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~noble_amd64.deb pigsty 1.19.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-timescaledb-toolkit postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~noble_arm64.deb pigsty 1.19.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timescaledb-toolkit/postgresql-14-timescaledb-toolkit_1.19.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `timescaledb_toolkit` 扩展的 RPM / DEB 包：

```bash
pig build pkg timescaledb_toolkit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `timescaledb_toolkit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install timescaledb_toolkit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y timescaledb_toolkit -v 18  # PG 18
pig ext install -y timescaledb_toolkit -v 17  # PG 17
pig ext install -y timescaledb_toolkit -v 16  # PG 16
pig ext install -y timescaledb_toolkit -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y timescaledb-toolkit_18       # PG 18
dnf install -y timescaledb-toolkit_17       # PG 17
dnf install -y timescaledb-toolkit_16       # PG 16
dnf install -y timescaledb-toolkit_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-timescaledb-toolkit   # PG 18
apt install -y postgresql-17-timescaledb-toolkit   # PG 17
apt install -y postgresql-16-timescaledb-toolkit   # PG 16
apt install -y postgresql-15-timescaledb-toolkit   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION timescaledb_toolkit;
```


## 用法

TimescaleDB Toolkit 提供了一系列专用于时序数据分析的函数，采用**两步聚合模式**。大多数函数会先创建中间表示，再通过访问器函数进行查询，从而实现高效复用和多维分析。

### 近似分析

#### HyperLogLog - 基数估算

基于概率的去重计数，支持可配置精度，适用于高基数数据集。

```sql
-- 估算每日独立用户数
SELECT
    date_trunc('day', timestamp) as day,
    distinct_count(hyperloglog(64, user_id)) as unique_users
FROM events
GROUP BY day;

-- 跨分区合并计数
SELECT distinct_count(rollup(hll))
FROM (SELECT hyperloglog(32, session_id) as hll FROM events_2023
      UNION ALL
      SELECT hyperloglog(32, session_id) FROM events_2024) t;
```

#### T-Digest - 分位数近似

高精度百分位估算，针对尾部分位数（P95、P99）进行了优化。

```sql
-- 追踪响应时间百分位
SELECT
    service_name,
    approx_percentile(0.50, tdigest(100, response_time)) as p50,
    approx_percentile(0.95, tdigest(100, response_time)) as p95,
    approx_percentile(0.99, tdigest(100, response_time)) as p99
FROM api_metrics
GROUP BY service_name;

-- 结合连续聚合计算每小时百分位
CREATE MATERIALIZED VIEW hourly_percentiles AS
SELECT
    time_bucket('1 hour', timestamp) as hour,
    tdigest(200, response_time) as digest
FROM requests GROUP BY hour;
```

#### UddSketch - 有界误差分位数

带有最大相对误差保证的分位数估算。

```sql
-- 计算 CPU 利用率百分位，最大误差 1%
SELECT
    host_id,
    approx_percentile(0.95, uddsketch(100, 0.01, cpu_percent)) as p95_cpu,
    error(uddsketch(100, 0.01, cpu_percent)) as actual_error
FROM system_metrics
GROUP BY host_id;
```

### 计数器分析

#### 计数器聚合 - 单调递增指标

处理单调递增的计数器，自动检测重置。

```sql
-- 计算请求速率
SELECT
    time_bucket('5 min', timestamp) as bucket,
    rate(counter_agg(timestamp, request_count)) as requests_per_sec,
    delta(counter_agg(timestamp, request_count)) as total_requests
FROM metrics
GROUP BY bucket;

-- 对不完整时间桶进行外推速率计算
SELECT
    extrapolated_rate(
        counter_agg(timestamp, bytes_sent,
                   bounds => time_bucket_range('1 hour', timestamp))
    ) as bytes_per_second
FROM network_stats;
```

#### 仪表聚合 - 波动指标

用于分析上下波动的指标（如温度、内存使用量）。

```sql
-- 温度变化分析
SELECT
    sensor_id,
    delta(gauge_agg(timestamp, temperature)) as temp_delta,
    rate(gauge_agg(timestamp, temperature)) as temp_rate_per_sec
FROM weather_data
GROUP BY sensor_id;
```

### 时间加权分析

#### 时间加权平均

处理不规则采样数据，支持插值方法（LOCF 末次观测值保持、Linear 线性插值）。

```sql
-- 对不规则传感器读数计算加权平均
SELECT
    device_id,
    average(time_weight('LOCF', timestamp, sensor_value)) as weighted_avg,
    average(time_weight('Linear', timestamp, sensor_value)) as linear_avg
FROM iot_readings
GROUP BY device_id;

-- 合并多个时间范围
SELECT average(rollup(tw))
FROM (SELECT time_weight('LOCF', ts, val) as tw FROM readings_2023
      UNION ALL
      SELECT time_weight('LOCF', ts, val) FROM readings_2024) t;
```

### 数据可视化

#### LTTB 降采样

在保持视觉相似性的前提下对时序数据进行降采样，适用于图表展示。

```sql
-- 将 10 万个数据点降采样为 1000 个用于可视化
SELECT time, value
FROM unnest((
    SELECT lttb(timestamp, price, 1000)
    FROM stock_prices
    WHERE symbol = 'AAPL'
));
```

#### ASAP 平滑

通过降噪生成易于阅读的图表，同时保留趋势特征。

```sql
-- 将每日数据平滑为周粒度
SELECT time, value
FROM unnest((
    SELECT asap_smooth(date, daily_sales, 52)
    FROM sales_data
    WHERE date >= '2023-01-01'
));
```

### 统计分析

#### 统计聚合

提供全面的统计分析能力，支持一维和二维回归分析。

```sql
-- 多变量分析
SELECT
    -- 基础统计量
    average(stats_agg(response_time)) as avg_response,
    stddev(stats_agg(response_time)) as response_stddev,

    -- 回归分析
    slope(stats_agg(response_time, request_size)) as size_impact,
    corr(stats_agg(response_time, request_size)) as correlation,
    determination_coeff(stats_agg(response_time, request_size)) as r_squared
FROM performance_data;
```

### Timevector 数据类型

用于时序操作的高效中间表示。

```sql
-- 创建和操作 timevector
CREATE VIEW cpu_series AS
SELECT host_id, timevector(timestamp, cpu_percent) as ts
FROM system_metrics GROUP BY host_id;

-- 对 timevector 进行链式操作
SELECT host_id, unnest(lttb(ts, 100))
FROM cpu_series;
```

## 集成模式

### 连续聚合支持

大多数 Toolkit 函数可与 TimescaleDB 连续聚合无缝配合使用：

```sql
CREATE MATERIALIZED VIEW hourly_analytics AS
SELECT
    time_bucket('1 hour', timestamp) as hour,
    service_name,
    tdigest(100, response_time) as response_digest,
    counter_agg(timestamp, request_count) as request_counter,
    hyperloglog(64, user_id) as unique_users
FROM api_events
GROUP BY hour, service_name;

-- 查询预计算的聚合结果
SELECT
    hour,
    approx_percentile(0.95, response_digest) as p95_response,
    rate(request_counter) as req_per_sec,
    distinct_count(unique_users) as unique_users
FROM hourly_analytics
WHERE hour >= NOW() - INTERVAL '24 hours';
```

### 两步分析模式

存储中间聚合结果，支持多维度分析复用：

```sql
-- 第一步：创建聚合
CREATE TABLE daily_summaries AS
SELECT
    date_trunc('day', timestamp) as day,
    tdigest(200, response_time) as response_digest,
    stats_agg(response_time, request_size) as stats
FROM requests GROUP BY day;

-- 第二步：基于同一份数据进行多维分析
SELECT
    day,
    approx_percentile(0.50, response_digest) as median,
    approx_percentile(0.99, response_digest) as p99,
    average(stats) as avg_response,
    slope(stats) as size_correlation
FROM daily_summaries;
```

所有位于 **experimental** 模式（`toolkit_experimental`）中的函数可能会在版本间发生变化。生产环境中如需 API 稳定性保证，请使用稳定版函数。
