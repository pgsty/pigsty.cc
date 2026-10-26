---
title: "duckdb_fdw"
linkTitle: "duckdb_fdw"
description: "DuckDB 外部数据源包装器"
weight: 2470
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/alitrack/duckdb_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">alitrack/duckdb_fdw</div>
    <div class="ext-card__desc">https://github.com/alitrack/duckdb_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/duckdb_fdw-2.0.2.tar.gz duckdb-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">duckdb_fdw-2.0.2.tar.gz duckdb-2.0.0.tar.gz</div>
    <div class="ext-card__desc">duckdb_fdw-2.0.2.tar.gz duckdb-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`duckdb_fdw`**](/ext/e/duckdb_fdw) | `2.0.2` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2470  | [**`duckdb_fdw`**](/ext/e/duckdb_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_ducklake`](/ext/e/pg_ducklake) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_clickhouse`](/ext/e/pg_clickhouse) [`pg_parquet`](/ext/e/pg_parquet) [`pg_lake`](/ext/e/pg_lake) [`aws_s3`](/ext/e/aws_s3) [`file_fdw`](/ext/e/file_fdw) [`pg_bulkload`](/ext/e/pg_bulkload) [`pg_stat_ch`](/ext/e/pg_stat_ch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGSTY 2.0.2 embeds DuckDB 2.0.0 statically, has no pg_duckdb runtime dependency, and conflicts with pg_duckdb for the same PG major. Switching from pg_duckdb requires removing its preload setting and restarting. Current builds support PG15-18; PG14 fails upstream boolVal/makeBoolean API use despite the README claiming PG13-18. Historical PG14 1.4.3 packages remain available.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.2` | {{< pgvers "15,16,17,18" >}} | `duckdb_fdw` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `duckdb_fdw_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-duckdb-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 1.4.3 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 1.4.3 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 1.4.3 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 1.4.3 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 1.4.3 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 2.0.2 2 | AVAIL PIGSTY 1.4.3 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 1.4.3 1 |
@ el8.x86_64 18 duckdb_fdw_18 duckdb_fdw_18-2.0.2-1PGSTY.el8.x86_64.rpm pigsty 2.0.2 21.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_18-2.0.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 duckdb_fdw_18 duckdb_fdw_18-1.4.3-1PIGSTY.el8.x86_64.rpm pigsty 1.4.3 88.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_18-1.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 duckdb_fdw_18 duckdb_fdw_18-2.0.2-1PGSTY.el8.aarch64.rpm pigsty 2.0.2 19.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_18-2.0.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 duckdb_fdw_18 duckdb_fdw_18-1.4.3-1PIGSTY.el8.aarch64.rpm pigsty 1.4.3 82.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_18-1.4.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 duckdb_fdw_18 duckdb_fdw_18-2.0.2-1PGSTY.el9.x86_64.rpm pigsty 2.0.2 19.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_18-2.0.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 duckdb_fdw_18 duckdb_fdw_18-1.4.3-1PIGSTY.el9.x86_64.rpm pigsty 1.4.3 85.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_18-1.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 duckdb_fdw_18 duckdb_fdw_18-2.0.2-1PGSTY.el9.aarch64.rpm pigsty 2.0.2 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_18-2.0.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 duckdb_fdw_18 duckdb_fdw_18-1.4.3-1PIGSTY.el9.aarch64.rpm pigsty 1.4.3 82.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_18-1.4.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 duckdb_fdw_18 duckdb_fdw_18-2.0.2-1PGSTY.el10.x86_64.rpm pigsty 2.0.2 21.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_18-2.0.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 duckdb_fdw_18 duckdb_fdw_18-1.4.3-1PIGSTY.el10.x86_64.rpm pigsty 1.4.3 80.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_18-1.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 duckdb_fdw_18 duckdb_fdw_18-2.0.2-1PGSTY.el10.aarch64.rpm pigsty 2.0.2 19.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_18-2.0.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 duckdb_fdw_18 duckdb_fdw_18-1.4.3-1PIGSTY.el10.aarch64.rpm pigsty 1.4.3 76.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_18-1.4.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb pigsty 2.0.2 18.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb pigsty 2.0.2 17.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb pigsty 2.0.2 20.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb pigsty 2.0.2 19.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb pigsty 2.0.2 16.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb pigsty 2.0.2 15.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb pigsty 2.0.2 19.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb pigsty 2.0.2 18.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb pigsty 2.0.2 20.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-duckdb-fdw postgresql-18-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb pigsty 2.0.2 19.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-18-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-2.0.2-1PGSTY.el8.x86_64.rpm pigsty 2.0.2 21.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_17-2.0.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-1.4.3-1PIGSTY.el8.x86_64.rpm pigsty 1.4.3 88.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_17-1.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-2.0.2-1PGSTY.el8.aarch64.rpm pigsty 2.0.2 19.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_17-2.0.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-1.4.3-1PIGSTY.el8.aarch64.rpm pigsty 1.4.3 82.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_17-1.4.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-2.0.2-1PGSTY.el9.x86_64.rpm pigsty 2.0.2 19.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_17-2.0.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-1.4.3-1PIGSTY.el9.x86_64.rpm pigsty 1.4.3 85.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_17-1.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-2.0.2-1PGSTY.el9.aarch64.rpm pigsty 2.0.2 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_17-2.0.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-1.4.3-1PIGSTY.el9.aarch64.rpm pigsty 1.4.3 82.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_17-1.4.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-2.0.2-1PGSTY.el10.x86_64.rpm pigsty 2.0.2 21.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_17-2.0.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-1.4.3-1PIGSTY.el10.x86_64.rpm pigsty 1.4.3 80.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_17-1.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-2.0.2-1PGSTY.el10.aarch64.rpm pigsty 2.0.2 19.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_17-2.0.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-1.4.3-1PIGSTY.el10.aarch64.rpm pigsty 1.4.3 76.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_17-1.4.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb pigsty 2.0.2 18.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb pigsty 2.0.2 17.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb pigsty 2.0.2 20.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb pigsty 2.0.2 19.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb pigsty 2.0.2 16.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb pigsty 2.0.2 15.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb pigsty 2.0.2 19.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb pigsty 2.0.2 18.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb pigsty 2.0.2 20.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb pigsty 2.0.2 19.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-2.0.2-1PGSTY.el8.x86_64.rpm pigsty 2.0.2 21.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_16-2.0.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-1.4.3-1PIGSTY.el8.x86_64.rpm pigsty 1.4.3 89.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_16-1.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-2.0.2-1PGSTY.el8.aarch64.rpm pigsty 2.0.2 19.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_16-2.0.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-1.4.3-1PIGSTY.el8.aarch64.rpm pigsty 1.4.3 82.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_16-1.4.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-2.0.2-1PGSTY.el9.x86_64.rpm pigsty 2.0.2 19.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_16-2.0.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-1.4.3-1PIGSTY.el9.x86_64.rpm pigsty 1.4.3 85.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_16-1.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-2.0.2-1PGSTY.el9.aarch64.rpm pigsty 2.0.2 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_16-2.0.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-1.4.3-1PIGSTY.el9.aarch64.rpm pigsty 1.4.3 82.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_16-1.4.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-2.0.2-1PGSTY.el10.x86_64.rpm pigsty 2.0.2 21.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_16-2.0.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-1.4.3-1PIGSTY.el10.x86_64.rpm pigsty 1.4.3 79.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_16-1.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-2.0.2-1PGSTY.el10.aarch64.rpm pigsty 2.0.2 19.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_16-2.0.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-1.4.3-1PIGSTY.el10.aarch64.rpm pigsty 1.4.3 76.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_16-1.4.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb pigsty 2.0.2 18.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb pigsty 2.0.2 17.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb pigsty 2.0.2 20.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb pigsty 2.0.2 19.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb pigsty 2.0.2 16.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb pigsty 2.0.2 15.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb pigsty 2.0.2 19.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb pigsty 2.0.2 18.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb pigsty 2.0.2 20.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb pigsty 2.0.2 19.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-2.0.2-1PGSTY.el8.x86_64.rpm pigsty 2.0.2 21.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_15-2.0.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-1.4.3-1PIGSTY.el8.x86_64.rpm pigsty 1.4.3 93.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_15-1.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-2.0.2-1PGSTY.el8.aarch64.rpm pigsty 2.0.2 19.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_15-2.0.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-1.4.3-1PIGSTY.el8.aarch64.rpm pigsty 1.4.3 86.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_15-1.4.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-2.0.2-1PGSTY.el9.x86_64.rpm pigsty 2.0.2 19.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_15-2.0.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-1.4.3-1PIGSTY.el9.x86_64.rpm pigsty 1.4.3 90.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_15-1.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-2.0.2-1PGSTY.el9.aarch64.rpm pigsty 2.0.2 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_15-2.0.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-1.4.3-1PIGSTY.el9.aarch64.rpm pigsty 1.4.3 87.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_15-1.4.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-2.0.2-1PGSTY.el10.x86_64.rpm pigsty 2.0.2 21.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_15-2.0.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-1.4.3-1PIGSTY.el10.x86_64.rpm pigsty 1.4.3 93.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_15-1.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-2.0.2-1PGSTY.el10.aarch64.rpm pigsty 2.0.2 19.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_15-2.0.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-1.4.3-1PIGSTY.el10.aarch64.rpm pigsty 1.4.3 89.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_15-1.4.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb pigsty 2.0.2 18.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb pigsty 2.0.2 17.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb pigsty 2.0.2 20.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb pigsty 2.0.2 19.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb pigsty 2.0.2 16.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb pigsty 2.0.2 15.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb pigsty 2.0.2 19.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb pigsty 2.0.2 18.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb pigsty 2.0.2 20.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb pigsty 2.0.2 19.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_2.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 duckdb_fdw_14 duckdb_fdw_14-1.4.3-1PIGSTY.el8.x86_64.rpm pigsty 1.4.3 93.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/duckdb_fdw_14-1.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 duckdb_fdw_14 duckdb_fdw_14-1.4.3-1PIGSTY.el8.aarch64.rpm pigsty 1.4.3 86.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/duckdb_fdw_14-1.4.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 duckdb_fdw_14 duckdb_fdw_14-1.4.3-1PIGSTY.el9.x86_64.rpm pigsty 1.4.3 90.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/duckdb_fdw_14-1.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 duckdb_fdw_14 duckdb_fdw_14-1.4.3-1PIGSTY.el9.aarch64.rpm pigsty 1.4.3 87.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/duckdb_fdw_14-1.4.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 duckdb_fdw_14 duckdb_fdw_14-1.4.3-1PIGSTY.el10.x86_64.rpm pigsty 1.4.3 93.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/duckdb_fdw_14-1.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 duckdb_fdw_14 duckdb_fdw_14-1.4.3-1PIGSTY.el10.aarch64.rpm pigsty 1.4.3 89.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/duckdb_fdw_14-1.4.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~bookworm_amd64.deb pigsty 1.4.3 213.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~bookworm_arm64.deb pigsty 1.4.3 207.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~trixie_amd64.deb pigsty 1.4.3 215.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~trixie_arm64.deb pigsty 1.4.3 208.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~jammy_amd64.deb pigsty 1.4.3 283.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~jammy_arm64.deb pigsty 1.4.3 279.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~noble_amd64.deb pigsty 1.4.3 225.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~noble_arm64.deb pigsty 1.4.3 222.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~resolute_amd64.deb pigsty 1.4.3 224.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~resolute_arm64.deb pigsty 1.4.3 220.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.4.3-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `duckdb_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg duckdb_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `duckdb_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install duckdb_fdw;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y duckdb_fdw -v 18  # PG 18
pig ext install -y duckdb_fdw -v 17  # PG 17
pig ext install -y duckdb_fdw -v 16  # PG 16
pig ext install -y duckdb_fdw -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y duckdb_fdw_18       # PG 18
dnf install -y duckdb_fdw_17       # PG 17
dnf install -y duckdb_fdw_16       # PG 16
dnf install -y duckdb_fdw_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-duckdb-fdw   # PG 18
apt install -y postgresql-17-duckdb-fdw   # PG 17
apt install -y postgresql-16-duckdb-fdw   # PG 16
apt install -y postgresql-15-duckdb-fdw   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION duckdb_fdw;
```

## 用法

来源：

- [2.0.2 README](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/README.md)
- [2.0.2 控制文件](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/duckdb_fdw.control)
- [2.0.2 SQL 函数与权限](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/duckdb_fdw--2.0.2.sql)
- [服务器、映射与表选项](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/option.c)
- [扫描、写入与诊断函数](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/duckdb_fdw.c)
- [连接与事务处理](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/connection.c)
- [模式导入实现](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/import.c)
- [2.0.1 至 2.0.2 升级脚本](https://github.com/alitrack/duckdb_fdw/blob/4c444d19f80eace50bc09fa3ec766e8ca2cf667d/duckdb_fdw--2.0.1--2.0.2.sql)

`duckdb_fdw` 2.0.2 通过 DuckDB 原生 C API，将 DuckDB 表和数据源映射为 PostgreSQL 外部表。可用于查询 DuckDB 数据库、读取 Parquet，或访问可选的 DuckDB 目录。外部表支持读取和插入，不支持通过 FDW 执行 PostgreSQL UPDATE 和 DELETE。

### 启用并映射 DuckDB 表

以超级用户创建扩展。全新安装无需预加载，也无需重启 PostgreSQL。持久化 DuckDB 文件应放在 PostgreSQL 服务账户可访问的目录中；以下示例假定目录已经存在。

```sql
CREATE EXTENSION duckdb_fdw;
CREATE SERVER duckdb_server
  FOREIGN DATA WRAPPER duckdb_fdw
  OPTIONS (database '/var/lib/postgresql/duckdb/analytics.duckdb');

SELECT duckdb_execute(
  'duckdb_server',
  'CREATE TABLE measurements (sensor_id INTEGER, reading DOUBLE)'
);

CREATE FOREIGN TABLE measurements (
  sensor_id integer,
  reading double precision
) SERVER duckdb_server OPTIONS (table 'measurements');

INSERT INTO measurements VALUES (1, 21.5), (2, 19.8);
SELECT * FROM measurements WHERE reading > 20;

SELECT extversion FROM pg_extension WHERE extname = 'duckdb_fdw';
SELECT duckdb_fdw_version();
```

系统目录查询返回扩展版本；`duckdb_fdw_version()` 虽然使用这个名称，实际返回的是所链接的 DuckDB 引擎版本。无需凭据的本地文件可以不创建用户映射。数据库文件访问使用 PostgreSQL 操作系统账户的权限。

### 导入表与读取 Parquet

```sql
CREATE SCHEMA duckdb_import;
IMPORT FOREIGN SCHEMA main
  FROM SERVER duckdb_server INTO duckdb_import;
```

这里应使用 DuckDB 的模式名，通常是 `main`，而非 PostgreSQL 的 `public`。读取已有 Parquet 文件时，应声明与文件匹配的 PostgreSQL 列类型：

```sql
CREATE FOREIGN TABLE parquet_measurements (
  sensor_id integer,
  reading double precision
) SERVER duckdb_server
  OPTIONS (table '/var/lib/postgresql/duckdb/measurements.parquet');

SELECT * FROM parquet_measurements WHERE sensor_id = 1;
```

### 选项与权限

| 对象 | 用途 |
| --- | --- |
| 服务器 `database` | DuckDB 文件路径，或仅在当前连接内存在的内存数据库 |
| 服务器 `force_readonly` | 以只读方式打开文件库，并拒绝 FDW 写入及辅助函数中的非只读语句 |
| 服务器 `extensions`、`attach_catalogs` | 加载可选 DuckDB 扩展并附加目录 |
| 表 `table` | 映射 DuckDB 表或 Parquet 路径 |
| 列 `column_name` | 将 PostgreSQL 列映射到不同名称的 DuckDB 列 |
| `duckdb_execute(server, statement)` | 执行 DuckDB SQL，返回 void，不返回结果表 |
| `duckdb_create_s3_secret(...)` | 在 DuckDB 连接中创建 S3 密钥对象 |
| `duckdb_fdw_preflight()` | 使用 DuckDB 前检查运行时兼容性 |

只向应用角色授予必需的外部服务器、模式和外部表权限。安装时会撤销 PUBLIC 对任意 SQL 和密钥辅助函数的 EXECUTE 权限；仅应向可信角色授予这些权限。

S3、MotherDuck 和 Quack 凭据应优先存入用户映射。服务器选项可从 PostgreSQL 系统目录中读取，不适合存放秘密。远程数据源还依赖相应 DuckDB 扩展、网络访问和凭据，安装 FDW 本身不代表这些条件已经满足。

### 连接与事务边界

- 默认在事务结束时关闭连接。使用 `database ':memory:'` 时，应在同一个显式事务中完成初始化和查询，否则临时数据库会消失。
- `duckdb_fdw.keep_connection` 默认关闭。开启后会在提交后保留连接，但可写文件连接也会跨事务持有 DuckDB 文件锁，可能阻止其他 PostgreSQL 会话打开该文件。
- 外部表插入跟随最外层 PostgreSQL 事务提交或回滚。保存点回滚不会单独撤销 DuckDB 写入：如果外层事务提交，已中止子事务中的写入仍可能保留。
- DuckDB 不参与 PostgreSQL 两阶段提交。不要使用预备事务，也不要假定 PostgreSQL 与 DuckDB 能在崩溃时保证原子提交。经辅助函数发送的任意 SQL 也不会自动获得 PostgreSQL 的事务语义。

### 兼容性与升级

Pigsty 2.0.2 软件包面向 PostgreSQL 15-18。上游 README 声称支持 PostgreSQL 13-18，范围大于这批软件包。2.0.2 接受 DuckDB 1.5.x 和 2.0.x 运行时，相比 2.0.1 不改变 SQL 函数集合。

运行时保护会阻止在同一后端中加载 `pg_duckdb` 后执行 DuckDB 操作。应将两个扩展放在不同 PostgreSQL 实例中。从预加载 `pg_duckdb` 的配置切换时，需移除其预加载项并重启 PostgreSQL；替换文件不会卸载已有进程中的库。

```sql
SELECT duckdb_fdw_runtime_compatibility_status();
SELECT duckdb_fdw_runtime_fingerprint();
SELECT duckdb_fdw_preflight();
```

安装匹配文件后，使用新的后端会话，并逐库更新：

```sql
ALTER EXTENSION duckdb_fdw UPDATE TO '2.0.2';
```
