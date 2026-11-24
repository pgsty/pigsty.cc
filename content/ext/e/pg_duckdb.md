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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_duckdb-1.2.1.tar.gz curl-8.23.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_duckdb-1.2.1.tar.gz curl-8.23.0.tar.gz</div>
    <div class="ext-card__desc">pg_duckdb-1.2.1.tar.gz curl-8.23.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_duckdb`**](/ext/e/pg_duckdb) | `1.2.1` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2430  | [**`pg_duckdb`**](/ext/e/pg_duckdb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `duckdb` |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_ducklake`](/ext/e/pg_ducklake) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_parquet`](/ext/e/pg_parquet) [`pg_lake`](/ext/e/pg_lake) [`pg_clickhouse`](/ext/e/pg_clickhouse) [`aws_s3`](/ext/e/aws_s3) [`file_fdw`](/ext/e/file_fdw) [`pg_bulkload`](/ext/e/pg_bulkload) [`columnar`](/ext/e/columnar) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_mooncake`](/ext/e/pg_mooncake) |
{.ext-table .ext-table--rel}


> DuckDB 2.0.0; preload required; conflicts with duckdb_fdw. pg_mooncake 0.3.0 from the PGSTY fork is compatible; the old 0.2.0 community plugin is not.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "19,18,17,16,15" >}} | `pg_duckdb` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "19,18,17,16,15" >}} | `pg_duckdb_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-duckdb` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
@ el9.x86_64 19 pg_duckdb_19 pg_duckdb_19-1.2.1-1PGSTY.el9.x86_64.rpm pigsty 1.2.1 25.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_19-1.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pg_duckdb_19 pg_duckdb_19-1.2.1-1PGSTY.el9.aarch64.rpm pigsty 1.2.1 23.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_19-1.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pg_duckdb_19 pg_duckdb_19-1.2.1-1PGSTY.el10.x86_64.rpm pigsty 1.2.1 26.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_19-1.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pg_duckdb_19 pg_duckdb_19-1.2.1-1PGSTY.el10.aarch64.rpm pigsty 1.2.1 24.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_19-1.2.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb pigsty 1.2.1 20.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb pigsty 1.2.1 17.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb pigsty 1.2.1 21.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb pigsty 1.2.1 18.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb pigsty 1.2.1 22.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb pigsty 1.2.1 20.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb pigsty 1.2.1 22.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb pigsty 1.2.1 23.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-pg-duckdb postgresql-19-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb pigsty 1.2.1 21.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-19-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pg_duckdb_18 pg_duckdb_18-1.2.0-1PGSTY.el8.x86_64.rpm pigsty 1.2.0 24.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_18-1.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_duckdb_18 pg_duckdb_18-1.2.0-1PGSTY.el8.aarch64.rpm pigsty 1.2.0 21.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_18-1.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_duckdb_18 pg_duckdb_18-1.2.1-1PGSTY.el9.x86_64.rpm pigsty 1.2.1 25.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_18-1.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_duckdb_18 pg_duckdb_18-1.2.1-1PGSTY.el9.aarch64.rpm pigsty 1.2.1 23.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_18-1.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_duckdb_18 pg_duckdb_18-1.2.1-1PGSTY.el10.x86_64.rpm pigsty 1.2.1 26.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_18-1.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_duckdb_18 pg_duckdb_18-1.2.1-1PGSTY.el10.aarch64.rpm pigsty 1.2.1 24.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_18-1.2.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb pigsty 1.2.1 20.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb pigsty 1.2.1 17.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb pigsty 1.2.1 21.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb pigsty 1.2.1 18.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb pigsty 1.2.1 22.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb pigsty 1.2.1 20.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb pigsty 1.2.1 22.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb pigsty 1.2.1 23.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-duckdb postgresql-18-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb pigsty 1.2.1 21.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-18-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_duckdb_17 pg_duckdb_17-1.2.0-1PGSTY.el8.x86_64.rpm pigsty 1.2.0 24.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_17-1.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_duckdb_17 pg_duckdb_17-1.2.0-1PGSTY.el8.aarch64.rpm pigsty 1.2.0 21.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_17-1.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_duckdb_17 pg_duckdb_17-1.2.1-1PGSTY.el9.x86_64.rpm pigsty 1.2.1 25.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_17-1.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_duckdb_17 pg_duckdb_17-1.2.1-1PGSTY.el9.aarch64.rpm pigsty 1.2.1 23.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_17-1.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_duckdb_17 pg_duckdb_17-1.2.1-1PGSTY.el10.x86_64.rpm pigsty 1.2.1 26.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_17-1.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_duckdb_17 pg_duckdb_17-1.2.1-1PGSTY.el10.aarch64.rpm pigsty 1.2.1 24.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_17-1.2.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb pigsty 1.2.1 20.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb pigsty 1.2.1 17.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb pigsty 1.2.1 21.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb pigsty 1.2.1 18.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb pigsty 1.2.1 22.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb pigsty 1.2.1 22.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb pigsty 1.2.1 23.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-duckdb postgresql-17-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb pigsty 1.2.1 21.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-17-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_duckdb_16 pg_duckdb_16-1.2.0-1PGSTY.el8.x86_64.rpm pigsty 1.2.0 24.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_16-1.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_duckdb_16 pg_duckdb_16-1.2.0-1PGSTY.el8.aarch64.rpm pigsty 1.2.0 21.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_16-1.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_duckdb_16 pg_duckdb_16-1.2.1-1PGSTY.el9.x86_64.rpm pigsty 1.2.1 25.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_16-1.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_duckdb_16 pg_duckdb_16-1.2.1-1PGSTY.el9.aarch64.rpm pigsty 1.2.1 23.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_16-1.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_duckdb_16 pg_duckdb_16-1.2.1-1PGSTY.el10.x86_64.rpm pigsty 1.2.1 26.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_16-1.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_duckdb_16 pg_duckdb_16-1.2.1-1PGSTY.el10.aarch64.rpm pigsty 1.2.1 24.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_16-1.2.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb pigsty 1.2.1 20.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb pigsty 1.2.1 17.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb pigsty 1.2.1 21.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb pigsty 1.2.1 18.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb pigsty 1.2.1 22.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb pigsty 1.2.1 22.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb pigsty 1.2.1 23.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-duckdb postgresql-16-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb pigsty 1.2.1 21.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-16-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_duckdb_15 pg_duckdb_15-1.2.0-1PGSTY.el8.x86_64.rpm pigsty 1.2.0 24.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duckdb_15-1.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_duckdb_15 pg_duckdb_15-1.2.0-1PGSTY.el8.aarch64.rpm pigsty 1.2.0 21.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duckdb_15-1.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_duckdb_15 pg_duckdb_15-1.2.1-1PGSTY.el9.x86_64.rpm pigsty 1.2.1 25.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duckdb_15-1.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_duckdb_15 pg_duckdb_15-1.2.1-1PGSTY.el9.aarch64.rpm pigsty 1.2.1 23.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duckdb_15-1.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_duckdb_15 pg_duckdb_15-1.2.1-1PGSTY.el10.x86_64.rpm pigsty 1.2.1 26.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duckdb_15-1.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_duckdb_15 pg_duckdb_15-1.2.1-1PGSTY.el10.aarch64.rpm pigsty 1.2.1 24.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duckdb_15-1.2.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb pigsty 1.2.1 20.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb pigsty 1.2.1 17.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb pigsty 1.2.1 21.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb pigsty 1.2.1 18.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb pigsty 1.2.1 22.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb pigsty 1.2.1 22.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb pigsty 1.2.1 20.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb pigsty 1.2.1 23.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-duckdb postgresql-15-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb pigsty 1.2.1 21.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-duckdb/postgresql-15-pg-duckdb_1.2.1-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_duckdb;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_duckdb -v 19  # PG 19
pig ext install -y pg_duckdb -v 18  # PG 18
pig ext install -y pg_duckdb -v 17  # PG 17
pig ext install -y pg_duckdb -v 16  # PG 16
pig ext install -y pg_duckdb -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_duckdb_19       # PG 19
dnf install -y pg_duckdb_18       # PG 18
dnf install -y pg_duckdb_17       # PG 17
dnf install -y pg_duckdb_16       # PG 16
dnf install -y pg_duckdb_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-duckdb   # PG 19
apt install -y postgresql-18-pg-duckdb   # PG 18
apt install -y postgresql-17-pg-duckdb   # PG 17
apt install -y postgresql-16-pg-duckdb   # PG 16
apt install -y postgresql-15-pg-duckdb   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_duckdb';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_duckdb;
```

## 用法

来源：

- [README.md](https://github.com/duckdb/pg_duckdb/blob/v1.2.1/README.md)
- [pg_duckdb.control](https://github.com/duckdb/pg_duckdb/blob/v1.2.1/pg_duckdb.control)
- [settings.md](https://github.com/duckdb/pg_duckdb/blob/v1.2.1/docs/settings.md)
- [functions.md](https://github.com/duckdb/pg_duckdb/blob/v1.2.1/docs/functions.md)
- [transactions.md](https://github.com/duckdb/pg_duckdb/blob/v1.2.1/docs/transactions.md)
- [gotchas_and_syntax.md](https://github.com/duckdb/pg_duckdb/blob/v1.2.1/docs/gotchas_and_syntax.md)
- [v1.2.1](https://github.com/duckdb/pg_duckdb/releases/tag/v1.2.1)

`pg_duckdb` 将 DuckDB 分析引擎嵌入 PostgreSQL，可查询普通 PostgreSQL 表和外部文件。1.2.1 内嵌 DuckDB 2.0.1，上游列出支持 PostgreSQL 14–18。扩展不可重定位，需要实例预加载。

### 启用并比较查询

将库加入现有设置，然后重启 PostgreSQL：

```ini
shared_preload_libraries = 'pg_duckdb'
```

以超级用户安装，检查分析查询：

```sql
CREATE EXTENSION pg_duckdb;
CREATE TABLE orders (category text, amount numeric);
INSERT INTO orders VALUES ('a', 10), ('a', 20), ('b', 5);
SET duckdb.force_execution = true;
EXPLAIN SELECT category, sum(amount) FROM orders GROUP BY category;
SELECT category, sum(amount) FROM orders GROUP BY category;
SET duckdb.force_execution = false;
```

普通查询默认使用 PostgreSQL，强制执行后才切换；DuckDB 专用函数或远程存储操作会自动选择 DuckDB。应检查计划并以代表性数据测量。`read_parquet`、`read_csv` 和 `read_json` 读取外部数据，`duckdb.create_simple_secret` 配置存储凭据。避免将密钥写入共享 SQL 历史，授权执行前先核验访问边界。

### 权限与配置

`duckdb.postgres_role` 指定可执行 DuckDB、管理密钥并使用 MotherDuck 数据的角色；默认仅超级用户可用。安装时可能创建所配置的角色。成员资格会开放共享的 DuckDB 密钥与数据，应有意授权。本地文件系统访问另外受 PostgreSQL 服务器文件角色与 DuckDB 文件系统设置约束。社区扩展加载由管理员显式选择。

### 事务与兼容性限制

同一事务不能同时写 PostgreSQL 和 DuckDB 表，也不能混用两种引擎的 DDL。应保持 `duckdb.unsafe_allow_mixed_transactions` 关闭，绕过限制可能只提交一侧，破坏一致性。默认也禁止在 PostgreSQL 函数内执行 DuckDB；相应的不安全设置存在已知崩溃风险。

1.2.1 支持嵌套定长数组，改善 numeric 与浮点转换，并修复并行工作进程的内存读取、取消清理和日志/统计中含密钥内容的处理。这些修复不能替代凭据权限控制及类型、查询兼容性检查。安装匹配动态库，遵循预加载重启要求，并在各数据库更新 SQL 扩展后再依赖新行为。
