---
title: "pg_clickhouse"
linkTitle: "pg_clickhouse"
description: "从PostgreSQL中查询ClickHouse的接口"
weight: 2460
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ClickHouse/pg_clickhouse">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ClickHouse/pg_clickhouse</div>
    <div class="ext-card__desc">https://github.com/ClickHouse/pg_clickhouse</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_clickhouse-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_clickhouse-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_clickhouse-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | `0.2.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2460  | [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`citus`](/ext/e/citus) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) [`clickhouse_fdw`](/ext/e/clickhouse_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`dblink`](/ext/e/dblink) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> release 0.2.0; SQL v0.2


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-clickhouse` | - |
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
| u26.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
@ el8.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 724.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 645.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 729.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 699.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 753.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 717.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 859.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 796.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 863.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 801.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 927.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 900.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 939.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 906.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 934.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 951.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 723.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 644.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 729.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 699.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 753.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 716.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 859.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 796.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 862.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 801.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 981.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 953.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 939.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 906.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 934.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 951.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 723.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 644.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 729.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 699.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 753.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_16-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 716.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_16-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 859.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 795.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 862.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 800.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 978.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 950.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 939.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 906.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 934.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 951.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 727.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 649.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 732.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 702.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 757.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_15-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 720.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_15-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 861.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 797.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 864.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 802.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 980.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 950.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 942.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 909.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 938.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 954.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 727.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 649.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 732.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 702.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 757.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_14-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 720.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_14-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 861.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 798.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 864.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 802.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 979.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 950.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 942.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 909.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 937.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 953.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.2.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_clickhouse` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_clickhouse         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_clickhouse` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_clickhouse;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_clickhouse -v 18  # PG 18
pig ext install -y pg_clickhouse -v 17  # PG 17
pig ext install -y pg_clickhouse -v 16  # PG 16
pig ext install -y pg_clickhouse -v 15  # PG 15
pig ext install -y pg_clickhouse -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_clickhouse_18       # PG 18
dnf install -y pg_clickhouse_17       # PG 17
dnf install -y pg_clickhouse_16       # PG 16
dnf install -y pg_clickhouse_15       # PG 15
dnf install -y pg_clickhouse_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-clickhouse   # PG 18
apt install -y postgresql-17-clickhouse   # PG 17
apt install -y postgresql-16-clickhouse   # PG 16
apt install -y postgresql-15-clickhouse   # PG 15
apt install -y postgresql-14-clickhouse   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_clickhouse';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_clickhouse;
```

## 用法

来源：[README](https://github.com/ClickHouse/pg_clickhouse/blob/master/README.md)，[reference](https://github.com/ClickHouse/pg_clickhouse/blob/master/doc/pg_clickhouse.md)，[tutorial](https://github.com/ClickHouse/pg_clickhouse/blob/master/doc/tutorial.md)，[v0.2.0 release notes](https://github.com/ClickHouse/pg_clickhouse/releases/tag/v0.2.0)

`pg_clickhouse` 通过 `clickhouse_fdw` foreign data wrapper 在 PostgreSQL 中直接执行 ClickHouse 分析查询。上游文档说明它支持 PostgreSQL 13+ 与 ClickHouse 23+。

### 将 PostgreSQL 连接到 ClickHouse

```sql
CREATE EXTENSION pg_clickhouse;

CREATE SERVER taxi_srv
FOREIGN DATA WRAPPER clickhouse_fdw
OPTIONS (driver 'binary', host 'localhost', dbname 'taxi');

CREATE USER MAPPING FOR CURRENT_USER
SERVER taxi_srv
OPTIONS (user 'default');

CREATE SCHEMA taxi;
IMPORT FOREIGN SCHEMA taxi FROM SERVER taxi_srv INTO taxi;
```

上游记录的 server 选项包括：

- `driver`：必填，取值为 `binary` 或 `http`
- `host`
- `port`
- `dbname`
- `fetch_size`：HTTP 流式批大小，`0` 表示禁用流式

user mapping 选项包括：

- `user`
- `password`

### 常见操作

```sql
ALTER EXTENSION pg_clickhouse UPDATE;
ALTER EXTENSION pg_clickhouse UPDATE TO '0.2';
DROP SERVER taxi_srv CASCADE;
```

`IMPORT FOREIGN SCHEMA` 还支持 `LIMIT TO (...)` 与 `EXCEPT (...)`。参考文档特别提醒：导入的 mixed-case 标识符会在 PostgreSQL 中带双引号，查询时也必须显式加引号。

### 版本与下推说明

- 参考文档区分库版本和扩展版本；`pgch_version()` 是在 `v0.2.0` 中加入的。
- 仅补丁级别的发布可能只更新库文件，不需要执行 `ALTER EXTENSION`。
- `v0.2.0` 增加了数组、正则函数、`split_part()`、数组运算符与当前日期/时间表达式的更多下推能力，以及 `pg_clickhouse.pushdown_regex` 设置。

### 注意事项

- 上游将它定位为分析优先的扩展，路线图里更广泛的 DML 支持仍属于后续工作。
- 若需要完整示例，应按官方 tutorial 创建 ClickHouse `taxi` 数据库，通过 `IMPORT FOREIGN SCHEMA` 导入，再查询生成的 foreign tables。
