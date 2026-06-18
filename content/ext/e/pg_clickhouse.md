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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_clickhouse-0.3.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_clickhouse-0.3.2.tar.gz</div>
    <div class="ext-card__desc">pg_clickhouse-0.3.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | `0.3.2` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2460  | [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`citus`](/ext/e/citus) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) [`clickhouse_fdw`](/ext/e/clickhouse_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`dblink`](/ext/e/dblink) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> release 0.3.1; SQL v0.3


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-clickhouse` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 |
| el8.aarch64 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 |
| el9.x86_64 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 |
| el9.aarch64 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 |
| el10.x86_64 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 |
| el10.aarch64 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 | AVAIL PIGSTY 0.3.2 2 |
| d12.x86_64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| u26.x86_64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
| u26.aarch64 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 | AVAIL PIGSTY 0.3.2 1 |
@ el8.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.2-1PIGSTY.el8.x86_64.rpm pigsty 0.3.2 147.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_18-0.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 143.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_18-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.2-1PIGSTY.el8.aarch64.rpm pigsty 0.3.2 146.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_18-0.3.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 142.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_18-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.2-1PIGSTY.el9.x86_64.rpm pigsty 0.3.2 143.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_18-0.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 134.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_18-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.2-1PIGSTY.el9.aarch64.rpm pigsty 0.3.2 142.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_18-0.3.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 138.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_18-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.2-1PIGSTY.el10.x86_64.rpm pigsty 0.3.2 141.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_18-0.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 136.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_18-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.2-1PIGSTY.el10.aarch64.rpm pigsty 0.3.2 144.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_18-0.3.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 141.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_18-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb pigsty 0.3.2 392.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb pigsty 0.3.2 387.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb pigsty 0.3.2 392.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb pigsty 0.3.2 389.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb pigsty 0.3.2 415.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb pigsty 0.3.2 417.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb pigsty 0.3.2 396.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb pigsty 0.3.2 399.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb pigsty 0.3.2 392.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb pigsty 0.3.2 394.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.2-1PIGSTY.el8.x86_64.rpm pigsty 0.3.2 147.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_17-0.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 143.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_17-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.2-1PIGSTY.el8.aarch64.rpm pigsty 0.3.2 146.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_17-0.3.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 142.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_17-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.2-1PIGSTY.el9.x86_64.rpm pigsty 0.3.2 143.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_17-0.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 134.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_17-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.2-1PIGSTY.el9.aarch64.rpm pigsty 0.3.2 141.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_17-0.3.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 138.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_17-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.2-1PIGSTY.el10.x86_64.rpm pigsty 0.3.2 140.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_17-0.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 136.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_17-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.2-1PIGSTY.el10.aarch64.rpm pigsty 0.3.2 144.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_17-0.3.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 140.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_17-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb pigsty 0.3.2 392.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb pigsty 0.3.2 387.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb pigsty 0.3.2 392.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb pigsty 0.3.2 388.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb pigsty 0.3.2 465.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb pigsty 0.3.2 466.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb pigsty 0.3.2 396.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb pigsty 0.3.2 398.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb pigsty 0.3.2 392.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb pigsty 0.3.2 394.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.2-1PIGSTY.el8.x86_64.rpm pigsty 0.3.2 147.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_16-0.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 143.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_16-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.2-1PIGSTY.el8.aarch64.rpm pigsty 0.3.2 146.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_16-0.3.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 142.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_16-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.2-1PIGSTY.el9.x86_64.rpm pigsty 0.3.2 143.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_16-0.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 134.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_16-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.2-1PIGSTY.el9.aarch64.rpm pigsty 0.3.2 141.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_16-0.3.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 138.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_16-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.2-1PIGSTY.el10.x86_64.rpm pigsty 0.3.2 140.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_16-0.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 136.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_16-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.2-1PIGSTY.el10.aarch64.rpm pigsty 0.3.2 144.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_16-0.3.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 140.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_16-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb pigsty 0.3.2 391.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb pigsty 0.3.2 387.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb pigsty 0.3.2 392.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb pigsty 0.3.2 388.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb pigsty 0.3.2 460.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb pigsty 0.3.2 461.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb pigsty 0.3.2 395.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb pigsty 0.3.2 398.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb pigsty 0.3.2 391.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb pigsty 0.3.2 394.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.2-1PIGSTY.el8.x86_64.rpm pigsty 0.3.2 151.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_15-0.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 147.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_15-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.2-1PIGSTY.el8.aarch64.rpm pigsty 0.3.2 150.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_15-0.3.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 146.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_15-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.2-1PIGSTY.el9.x86_64.rpm pigsty 0.3.2 147.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_15-0.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 144.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_15-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.2-1PIGSTY.el9.aarch64.rpm pigsty 0.3.2 150.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_15-0.3.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 147.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_15-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.2-1PIGSTY.el10.x86_64.rpm pigsty 0.3.2 149.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_15-0.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 145.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_15-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.2-1PIGSTY.el10.aarch64.rpm pigsty 0.3.2 153.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_15-0.3.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 149.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_15-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb pigsty 0.3.2 396.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb pigsty 0.3.2 390.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb pigsty 0.3.2 396.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb pigsty 0.3.2 393.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb pigsty 0.3.2 468.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb pigsty 0.3.2 469.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb pigsty 0.3.2 402.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb pigsty 0.3.2 406.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb pigsty 0.3.2 398.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb pigsty 0.3.2 401.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.2-1PIGSTY.el8.x86_64.rpm pigsty 0.3.2 151.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_14-0.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 147.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_14-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.2-1PIGSTY.el8.aarch64.rpm pigsty 0.3.2 149.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_14-0.3.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 146.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_14-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.2-1PIGSTY.el9.x86_64.rpm pigsty 0.3.2 147.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_14-0.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 144.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_14-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.2-1PIGSTY.el9.aarch64.rpm pigsty 0.3.2 150.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_14-0.3.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 147.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_14-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.2-1PIGSTY.el10.x86_64.rpm pigsty 0.3.2 149.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_14-0.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 145.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_14-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.2-1PIGSTY.el10.aarch64.rpm pigsty 0.3.2 153.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_14-0.3.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 149.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_14-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb pigsty 0.3.2 395.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb pigsty 0.3.2 390.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb pigsty 0.3.2 396.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb pigsty 0.3.2 392.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb pigsty 0.3.2 468.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb pigsty 0.3.2 469.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb pigsty 0.3.2 401.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb pigsty 0.3.2 405.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb pigsty 0.3.2 398.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb pigsty 0.3.2 401.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.3.2-1PIGSTY~resolute_arm64.deb
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

来源：[README](https://github.com/ClickHouse/pg_clickhouse/blob/main/README.md)、[reference](https://github.com/ClickHouse/pg_clickhouse/blob/main/doc/pg_clickhouse.md)、[tutorial](https://github.com/ClickHouse/pg_clickhouse/blob/main/doc/tutorial.md)、[v0.3.1 release notes](https://github.com/ClickHouse/pg_clickhouse/releases/tag/v0.3.1)、[changelog](https://github.com/ClickHouse/pg_clickhouse/blob/main/CHANGELOG.md)

`pg_clickhouse` 通过 `clickhouse_fdw` foreign data wrapper，让 PostgreSQL 可以在 ClickHouse 上执行分析查询。上游文档说明支持 PostgreSQL 13+ 与 ClickHouse 23+；Pigsty 打包版本为 0.3.1，覆盖 PostgreSQL 14-18。

### 连接 PostgreSQL 与 ClickHouse

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

上游文档列出的服务器选项：

- `driver`：必填，取值为 `binary` 或 `http`
- `host`
- `port`
- `dbname`
- `fetch_size`：HTTP streaming batch size；`0` 表示禁用 streaming

用户映射选项：

- `user`
- `password`

### 常见操作

```sql
ALTER EXTENSION pg_clickhouse UPDATE;
ALTER EXTENSION pg_clickhouse UPDATE TO '0.3';
SELECT pgch_version();
DROP SERVER taxi_srv CASCADE;
```

`IMPORT FOREIGN SCHEMA` 也支持 `LIMIT TO (...)` 和 `EXCEPT (...)`。reference 提醒：导入的 mixed-case 标识符会在 PostgreSQL 中加双引号，查询时也必须带引号。

### 查询与写入说明

`SELECT`、`EXPLAIN`、prepared statements、`INSERT` 和 `COPY` 都可作用于 `pg_clickhouse` foreign tables。使用 `EXPLAIN (VERBOSE)` 可以查看将发送到 ClickHouse 的远端 SQL。

```sql
EXPLAIN (VERBOSE)
SELECT node_id, count(*)
FROM logs
GROUP BY node_id;

INSERT INTO nodes(node_id, name, region, arch, os)
VALUES (9, 'west-node', 'us-west-2', 'amd64', 'Linux');
```

`COPY` 写入 foreign table 已有文档说明，但上游也指出当前仍通过 `INSERT` 语句实现，因为 FDW batch insertion 仍是未来工作。

### 版本与下推说明

- reference 区分 library version 和 extension version；`pgch_version()` 返回已加载的库版本。
- Release `v0.3.1` 对已有 SQL version `0.3` 而言只是二进制更新；从 `v0.3.0` 升级时不需要执行 `ALTER EXTENSION UPDATE`。
- Release `v0.3.1` 将客户端库替换为 `ClickHouse/clickhouse-c`，支持流式读取 result blocks，并为 `SELECT` 和 `INSERT` 增加矩形多维数组支持。
- Release `v0.3.1` 还为 `pg_re2` 0.3.0 函数增加下推，例如 `re2extractallgroupshorizontal`、`re2extractallgroupsvertical`、`re2regexpquotemeta` 和 `re2splitbyregexp`，并修复 `UInt16` 到 PostgreSQL `int4` 的 cast。
- Release `v0.3.0` 使用 SQL version `0.3`；执行 `ALTER EXTENSION pg_clickhouse UPDATE TO '0.3'` 可应用其 SQL 层权限变更。
- Release `v0.3.0` 增加了 `re2` 函数、`soundex()`、双参数 `levenshtein()`、兼容的 `to_char(timestamp[tz], fmt)`、部分内置函数，以及 JSON/JSONB path operations 的下推。
- ClickHouse `JSON` 映射到 PostgreSQL `jsonb` 或 `json`；binary driver 的 `JSON` 映射要求 ClickHouse 24.10 或更新版本。
- `pg_clickhouse.pushdown_regex` 控制内置 PostgreSQL regex 下推。上游建议：如果正则处理需要直接下推，可以考虑使用 `re2` 扩展。

### 注意事项

- 在 0.3.0 中，`clickhouse_raw_query(text, text)` 不再对 `PUBLIC` 可执行；只应授予确实需要 ad-hoc ClickHouse 查询的角色。
- 上游将它定位为 analytics-first 扩展；轻量级 `DELETE` 和 `UPDATE` 支持仍在 roadmap 上。
- 完整示例请参考官方 tutorial：其中会创建 ClickHouse `taxi` 数据库，通过 `IMPORT FOREIGN SCHEMA` 导入，并查询生成的 foreign tables。
