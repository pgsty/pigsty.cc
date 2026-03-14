---
title: "pg_mooncake"
linkTitle: "pg_mooncake"
description: "PostgreSQL列式存储表"
weight: 2440
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Mooncake-Labs/pg_mooncake">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Mooncake-Labs/pg_mooncake</div>
    <div class="ext-card__desc">https://github.com/Mooncake-Labs/pg_mooncake</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_mooncake-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_mooncake-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_mooncake-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_mooncake`**](/ext/e/pg_mooncake) | `0.2.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2440  | [**`pg_mooncake`**](/ext/e/pg_mooncake) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_analytics`](/ext/e/pg_analytics) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) [`pg_parquet`](/ext/e/pg_parquet) [`orioledb`](/ext/e/orioledb) [`timescaledb`](/ext/e/timescaledb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> unpublished release


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_mooncake` | `pg_duckdb` |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_mooncake_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-mooncake` | - |
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
@ el8.x86_64 18 pg_mooncake_18 pg_mooncake_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mooncake_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_mooncake_18 pg_mooncake_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mooncake_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_mooncake_18 pg_mooncake_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mooncake_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_mooncake_18 pg_mooncake_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mooncake_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_mooncake_18 pg_mooncake_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mooncake_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_mooncake_18 pg_mooncake_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mooncake_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-mooncake postgresql-18-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-18-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_mooncake_17 pg_mooncake_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mooncake_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_mooncake_17 pg_mooncake_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mooncake_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_mooncake_17 pg_mooncake_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mooncake_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_mooncake_17 pg_mooncake_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mooncake_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_mooncake_17 pg_mooncake_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mooncake_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_mooncake_17 pg_mooncake_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mooncake_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 7.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-mooncake postgresql-17-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-17-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_mooncake_16 pg_mooncake_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mooncake_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_mooncake_16 pg_mooncake_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mooncake_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_mooncake_16 pg_mooncake_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mooncake_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_mooncake_16 pg_mooncake_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mooncake_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_mooncake_16 pg_mooncake_16-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mooncake_16-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_mooncake_16 pg_mooncake_16-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mooncake_16-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 7.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-mooncake postgresql-16-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-16-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_mooncake_15 pg_mooncake_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mooncake_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_mooncake_15 pg_mooncake_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mooncake_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_mooncake_15 pg_mooncake_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mooncake_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_mooncake_15 pg_mooncake_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mooncake_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_mooncake_15 pg_mooncake_15-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mooncake_15-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_mooncake_15 pg_mooncake_15-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mooncake_15-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 7.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 9.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-mooncake postgresql-15-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-15-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_mooncake_14 pg_mooncake_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mooncake_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_mooncake_14 pg_mooncake_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mooncake_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_mooncake_14 pg_mooncake_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mooncake_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_mooncake_14 pg_mooncake_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mooncake_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_mooncake_14 pg_mooncake_14-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mooncake_14-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_mooncake_14 pg_mooncake_14-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mooncake_14-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 8.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 7.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 9.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 9.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-mooncake postgresql-14-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mooncake/postgresql-14-pg-mooncake_0.2.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_mooncake` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_mooncake         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_mooncake` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_mooncake;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_mooncake -v 18  # PG 18
pig ext install -y pg_mooncake -v 17  # PG 17
pig ext install -y pg_mooncake -v 16  # PG 16
pig ext install -y pg_mooncake -v 15  # PG 15
pig ext install -y pg_mooncake -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_mooncake_18       # PG 18
dnf install -y pg_mooncake_17       # PG 17
dnf install -y pg_mooncake_16       # PG 16
dnf install -y pg_mooncake_15       # PG 15
dnf install -y pg_mooncake_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-mooncake   # PG 18
apt install -y postgresql-17-pg-mooncake   # PG 17
apt install -y postgresql-16-pg-mooncake   # PG 16
apt install -y postgresql-15-pg-mooncake   # PG 15
apt install -y postgresql-14-pg-mooncake   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_duckdb, pg_mooncake';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_mooncake CASCADE;  -- 依赖: pg_duckdb
```


## 用法

[`pg_mooncake`](https://github.com/Mooncake-Labs/pg_mooncake) 是一个 Postgres 扩展，能够为表创建 Iceberg 格式的列存镜像，设计为 `pg_duckdb` 的子扩展。

pg_mooncake 文档：https://docs.mooncake.dev/


### 快速上手

使用 pig 安装 pg_duckdb 和 pg_mooncake：

```bash
pig repo set
pig install pg_duckdb pg_mooncake
```

编辑 postgresql.conf，然后重启使配置生效

```ini
shared_preload_libraries = 'pg_duckdb,pg_mooncake'
duckdb.allow_community_extensions = true
wal_level = logical
```



### 入门示例

- [教程](https://docs.mooncake.dev/pg/get-started/Hello-world)

```sql
-- 连同 pg_duckdb 一起创建扩展
CREATE EXTENSION pg_mooncake CASCADE;

-- 接下来，创建一张普通的 Postgres 表 trades：
CREATE TABLE trades(
  id bigint PRIMARY KEY,
  symbol text,
  time timestamp,
  price real
);

-- 然后，创建一个列存镜像 trades_iceberg，与 trades 保持同步：
CALL mooncake.create_table('trades_iceberg', 'trades');

-- 现在，向 trades 中插入一些数据：
INSERT INTO trades VALUES
    (1,  'AMD', '2024-06-05 10:00:00', 119),
    (2, 'AMZN', '2024-06-05 10:05:00', 207),
    (3, 'AAPL', '2024-06-05 10:10:00', 203),
    (4, 'AMZN', '2024-06-05 10:15:00', 210);

-- 最后，使用 duckdb 进行查询
EXPLAIN
    SELECT avg(price) FROM trades_iceberg WHERE symbol = 'AMZN';
```

执行计划中将显示 DuckDBScan：

```bash
                         QUERY PLAN
------------------------------------------------------------
 Custom Scan (DuckDBScan)  (cost=0.00..0.00 rows=0 width=0)
   DuckDB Execution Plan:

 ┌───────────────────────────┐
 │    UNGROUPED_AGGREGATE    │
 │    ────────────────────   │
 │    Aggregates: avg(#0)    │
 └─────────────┬─────────────┘
 ┌─────────────┴─────────────┐
 │         PROJECTION        │
 │    ────────────────────   │
 │   CAST(price AS DOUBLE)   │
 │                           │
 │          ~0 rows          │
 └─────────────┬─────────────┘
 ┌─────────────┴─────────────┐
 │       MOONCAKE_SCAN       │
 │    ────────────────────   │
 │   Table: trades_iceberg   │
 │     Projections: price    │
 │                           │
 │          Filters:         │
 │       symbol='AMZN'       │
 │                           │
 │          ~0 rows          │
 └───────────────────────────┘
```
