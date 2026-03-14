---
title: "pg_duckdb"
linkTitle: "pg_duckdb"
description: "在PostgreSQL中的嵌入式DuckDB扩展"
weight: 2430
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/duckdb/pg_duckdb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">duckdb/pg_duckdb</div>
    <div class="ext-card__desc">https://github.com/duckdb/pg_duckdb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_duckdb-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_duckdb-1.1.1.tar.gz</div>
    <div class="ext-card__desc">pg_duckdb-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_duckdb`**](/ext/e/pg_duckdb) | `1.1.1` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2430  | [**`pg_duckdb`**](/ext/e/pg_duckdb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`pg_mooncake`](/ext/e/pg_mooncake) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_analytics`](/ext/e/pg_analytics) [`pg_parquet`](/ext/e/pg_parquet) [`columnar`](/ext/e/columnar) [`citus`](/ext/e/citus) [`citus_columnar`](/ext/e/citus_columnar) [`orioledb`](/ext/e/orioledb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_mooncake`](/ext/e/pg_mooncake) |
{.ext-table .ext-table--rel}


> conflict with duckdb_fdw


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_duckdb` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_duckdb_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-duckdb` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 pg_duckdb_18 pg_duckdb_18-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 15.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_18-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_duckdb_18 pg_duckdb_18-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_18-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_duckdb_18 pg_duckdb_18-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_18-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_duckdb_18 pg_duckdb_18-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 14.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_18-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_duckdb_18 pg_duckdb_18-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 15.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_18-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_duckdb_18 pg_duckdb_18-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 13.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_18-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 13.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 14.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 15.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 14.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 14.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_duckdb_17 pg_duckdb_17-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 15.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_17-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_duckdb_17 pg_duckdb_17-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_17-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_duckdb_17 pg_duckdb_17-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_17-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_duckdb_17 pg_duckdb_17-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 14.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_17-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_duckdb_17 pg_duckdb_17-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 15.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_17-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_duckdb_17 pg_duckdb_17-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 13.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_17-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 13.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 14.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 16.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 14.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 15.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 14.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_duckdb_16 pg_duckdb_16-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 15.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_16-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_duckdb_16 pg_duckdb_16-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_16-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_duckdb_16 pg_duckdb_16-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_16-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_duckdb_16 pg_duckdb_16-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 14.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_16-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_duckdb_16 pg_duckdb_16-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 15.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_16-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_duckdb_16 pg_duckdb_16-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 13.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_16-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 13.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 14.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 16.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 14.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 14.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_duckdb_15 pg_duckdb_15-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 15.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_15-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_duckdb_15 pg_duckdb_15-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_15-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_duckdb_15 pg_duckdb_15-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_15-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_duckdb_15 pg_duckdb_15-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 14.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_15-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_duckdb_15 pg_duckdb_15-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 15.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_15-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_duckdb_15 pg_duckdb_15-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 13.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_15-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 13.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 14.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 16.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 14.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 14.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_duckdb_14 pg_duckdb_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 15.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_duckdb_14 pg_duckdb_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_duckdb_14 pg_duckdb_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 15.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_duckdb_14 pg_duckdb_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 14.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_duckdb_14 pg_duckdb_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 15.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_duckdb_14 pg_duckdb_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 13.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 13.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 14.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 16.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 14.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 15.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-duckdb postgresql-14-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 14.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-14-pg-duckdb_1.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_duckdb` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_duckdb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_duckdb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_duckdb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_duckdb -v 18  # PG 18
pig ext install -y pg_duckdb -v 17  # PG 17
pig ext install -y pg_duckdb -v 16  # PG 16
pig ext install -y pg_duckdb -v 15  # PG 15
pig ext install -y pg_duckdb -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_duckdb_18       # PG 18
dnf install -y pg_duckdb_17       # PG 17
dnf install -y pg_duckdb_16       # PG 16
dnf install -y pg_duckdb_15       # PG 15
dnf install -y pg_duckdb_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-duckdb   # PG 18
apt install -y postgresql-17-pg-duckdb   # PG 17
apt install -y postgresql-16-pg-duckdb   # PG 16
apt install -y postgresql-15-pg-duckdb   # PG 15
apt install -y postgresql-14-pg-duckdb   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_duckdb';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_duckdb;
```



## 用法

[pg_duckdb 文档](https://github.com/duckdb/pg_duckdb/tree/main/docs)

| 主题                                                                                                   | 说明                                                       |
|:-------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
| [**函数**](https://github.com/duckdb/pg_duckdb/blob/main/docs/functions.md)                            | 所有可用函数的完整参考                                      |
| [**语法指南与注意事项**](https://github.com/duckdb/pg_duckdb/blob/main/docs/gotchas_and_syntax.md)      | 常见 SQL 模式与注意事项速查                                 |
| [**类型**](https://github.com/duckdb/pg_duckdb/blob/main/docs/types.md)                                | 支持的数据类型与类型映射                                    |
| [**扩展**](https://github.com/duckdb/pg_duckdb/blob/main/docs/extensions.md)                           | DuckDB 扩展的安装与使用                                     |
| [**配置**](https://github.com/duckdb/pg_duckdb/blob/main/docs/settings.md)                             | 配置选项与参数                                              |
| [**事务**](https://github.com/duckdb/pg_duckdb/blob/main/docs/transactions.md)                         | 事务行为与限制                                              |



### 快速上手

使用 pig 安装 pg_duckdb：

```bash
pig repo set
pig install pg_duckdb
```

编辑 `postgresql.conf`，然后重启使配置生效

```ini
shared_preload_libraries = 'pg_duckdb'
duckdb.allow_community_extensions = true
```


### 加速查询

通过 DuckDB 可以直接查询现有的 PostgreSQL 表，无需做任何修改：

```sql
-- pgbench -is 1000  # 使用 pgbench 初始化一些测试数据
CREATE EXTENSION pg_duckdb;

-- 默认行为，使用 PostgreSQL 原生引擎
SET duckdb.force_execution = false;
EXPLAIN ANALYZE SELECT count(*) FROM pgbench_accounts;

-- 现在查询将由 pg_duckdb 执行
SET duckdb.force_execution = true;
EXPLAIN ANALYZE SELECT count(*) FROM pgbench_accounts;
```

在本地笔记本电脑的 4 核虚拟机上，查询耗时从 8 秒降至 4 秒：

```
postgres@el9:5432/postgres=# SET duckdb.force_execution = true;
EXPLAIN ANALYZE SELECT count(*) FROM pgbench_accounts;
SET
Time: 0.206 ms
                                              QUERY PLAN
------------------------------------------------------------------------------------------------------
 Custom Scan (DuckDBScan)  (cost=0.00..0.00 rows=0 width=0) (actual time=0.001..0.001 rows=0 loops=1)
   DuckDB Execution Plan:

 ┌─────────────────────────────────────┐
 │┌───────────────────────────────────┐│
 ││    Query Profiling Information    ││
 │└───────────────────────────────────┘│
 └─────────────────────────────────────┘
 EXPLAIN ANALYZE  SELECT count(*) AS count FROM pgduckdb.public.pgbench_accounts
 ┌────────────────────────────────────────────────┐
 │┌──────────────────────────────────────────────┐│
 ││               Total Time: 3.89s              ││
 │└──────────────────────────────────────────────┘│
 └────────────────────────────────────────────────┘
 ┌───────────────────────────┐
 │           QUERY           │
 └─────────────┬─────────────┘
 ┌─────────────┴─────────────┐
 │      EXPLAIN_ANALYZE      │
 │    ────────────────────   │
 │           0 rows          │
 │          (0.00s)          │
 └─────────────┬─────────────┘
 ┌─────────────┴─────────────┐
 │    UNGROUPED_AGGREGATE    │
 │    ────────────────────   │
 │        Aggregates:        │
 │        count_star()       │
 │                           │
 │           1 row           │
 │          (0.00s)          │
 └─────────────┬─────────────┘
 ┌─────────────┴─────────────┐
 │         TABLE_SCAN        │
 │    ────────────────────   │
 │           Table:          │
 │      pgbench_accounts     │
 │                           │
 │      100,000,000 rows     │
 │          (3.88s)          │
 └───────────────────────────┘
```



### 数据湖

以下示例演示如何使用本地 MinIO 实例操作数据湖：

```sql
SELECT duckdb.create_simple_secret(
    type := 'S3', key_id := 's3user_data', secret := 'S3User.Data',
    endpoint := 'https://sss.pigsty:9000', url_style := 'path'
);
```
