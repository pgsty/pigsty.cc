---
title: "pg_ducklake"
linkTitle: "pg_ducklake"
description: "基于 DuckDB 与 Parquet 的 DuckLake 湖仓一体扩展"
weight: 2490
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/relytcloud/pg_ducklake">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">relytcloud/pg_ducklake</div>
    <div class="ext-card__desc">https://github.com/relytcloud/pg_ducklake</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_ducklake-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_ducklake-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_ducklake-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ducklake`**](/ext/e/pg_ducklake) | `1.0.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2490  | [**`pg_ducklake`**](/ext/e/pg_ducklake) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `ducklake` |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_analytics`](/ext/e/pg_analytics) [`pg_parquet`](/ext/e/pg_parquet) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_ducklake` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_ducklake_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-ducklake` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el9.x86_64 18 pg_ducklake_18 pg_ducklake_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 16.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ducklake_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_ducklake_18 pg_ducklake_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ducklake_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_ducklake_18 pg_ducklake_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ducklake_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_ducklake_18 pg_ducklake_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ducklake_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 11.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 14.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 11.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 11.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 13.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-ducklake postgresql-18-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 12.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-18-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 17 pg_ducklake_17 pg_ducklake_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 16.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ducklake_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_ducklake_17 pg_ducklake_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ducklake_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_ducklake_17 pg_ducklake_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ducklake_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_ducklake_17 pg_ducklake_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ducklake_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 11.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 14.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 11.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 11.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 13.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-ducklake postgresql-17-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 12.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-17-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 16 pg_ducklake_16 pg_ducklake_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 16.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ducklake_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_ducklake_16 pg_ducklake_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ducklake_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_ducklake_16 pg_ducklake_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ducklake_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_ducklake_16 pg_ducklake_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ducklake_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 11.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 14.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 11.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 11.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 13.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-ducklake postgresql-16-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 12.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-16-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 15 pg_ducklake_15 pg_ducklake_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 16.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ducklake_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_ducklake_15 pg_ducklake_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ducklake_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_ducklake_15 pg_ducklake_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ducklake_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_ducklake_15 pg_ducklake_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ducklake_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 11.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 14.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 11.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 11.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 13.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-ducklake postgresql-15-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 12.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-15-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 14 pg_ducklake_14 pg_ducklake_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 16.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ducklake_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_ducklake_14 pg_ducklake_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ducklake_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_ducklake_14 pg_ducklake_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ducklake_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_ducklake_14 pg_ducklake_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ducklake_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 11.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 14.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 11.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 11.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 13.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-ducklake postgresql-14-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 12.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ducklake/postgresql-14-pg-ducklake_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_ducklake` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_ducklake         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_ducklake` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_ducklake;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_ducklake -v 18  # PG 18
pig ext install -y pg_ducklake -v 17  # PG 17
pig ext install -y pg_ducklake -v 16  # PG 16
pig ext install -y pg_ducklake -v 15  # PG 15
pig ext install -y pg_ducklake -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_ducklake_18       # PG 18
dnf install -y pg_ducklake_17       # PG 17
dnf install -y pg_ducklake_16       # PG 16
dnf install -y pg_ducklake_15       # PG 15
dnf install -y pg_ducklake_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-ducklake   # PG 18
apt install -y postgresql-17-pg-ducklake   # PG 17
apt install -y postgresql-16-pg-ducklake   # PG 16
apt install -y postgresql-15-pg-ducklake   # PG 15
apt install -y postgresql-14-pg-ducklake   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_ducklake';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_ducklake;
```




## 用法

来源：[README](https://github.com/relytcloud/pg_ducklake/blob/v1.0.0/README.md)、[v1.0.0 release](https://github.com/relytcloud/pg_ducklake/releases/tag/v1.0.0)、[project docs](https://github.com/relytcloud/pg_ducklake/tree/v1.0.0/pg_ducklake/docs)

`pg_ducklake` 为 PostgreSQL 增加 DuckLake tables。DuckLake metadata 存储在 PostgreSQL 中，表数据以 Parquet 存储并通过 DuckDB 查询，让 PostgreSQL SQL clients 可以访问 snapshots、time travel、partitioning、sort keys 和外部对象存储等 lakehouse 功能。

### 创建 DuckLake 表

```sql
CREATE EXTENSION pg_ducklake;

CREATE TABLE events (
  id int,
  kind text,
  ts timestamptz
) USING ducklake;

INSERT INTO events VALUES
  (1, 'login', now()),
  (2, 'click', now());

SELECT * FROM events ORDER BY id;
```

当数据需要放在默认路径之外时，显式设置 table path：

```sql
CREATE TABLE lake_events (
  id int,
  payload jsonb
) WITH (
  ducklake.table_path = 's3://my-bucket/prefix/'
) USING ducklake;
```

### Time Travel

每次 commit 都会创建 snapshot。在修改前记录 snapshot id，然后查询旧状态：

```sql
SELECT max(snapshot_id) AS before_delete
FROM ducklake.ducklake_snapshot \gset

DELETE FROM events WHERE id = 1;

SELECT * FROM ducklake.time_travel('events'::regclass, :before_delete);
```

### 转换与加载数据

可从已有 PostgreSQL heap tables 或外部 data readers 创建 DuckLake tables：

```sql
CREATE TABLE row_store AS
SELECT i AS id, 'hello pg_ducklake' AS msg
FROM generate_series(1, 10000) AS i;

CREATE TABLE col_store USING ducklake AS
SELECT * FROM row_store;

CREATE TABLE titanic USING ducklake AS
SELECT * FROM ducklake.read_csv('https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv');
```

### Inlining、分区与维护

小批写入默认 inline 到 metadata 中，避免产生大量小 Parquet files。可调整行数限制或显式 flush：

```sql
CALL ducklake.set_option('data_inlining_row_limit', 100);
SELECT * FROM ducklake.flush_inlined_data('events'::regclass);
```

为表设置 partition 和 sort keys，以便 pruning 和 analytics：

```sql
CALL ducklake.set_partition('events'::regclass, 'bucket(4, id)', 'month(ts)');
CREATE INDEX ON events USING ducklake_sorted (id, ts);
```

当自动后台维护不够时，可以按需执行维护：

```sql
SELECT * FROM ducklake.merge_adjacent_files('events'::regclass);
CALL ducklake.set_option('expire_older_than', '7 days');
SELECT * FROM ducklake.expire_snapshots();
SELECT * FROM ducklake.cleanup_old_files();
```

### 外部 DuckDB 访问

DuckDB clients 可以 attach 同一份 DuckLake metadata：

```sql
INSTALL ducklake;
LOAD ducklake;
ATTACH 'ducklake:postgres:dbname=postgres host=localhost' AS my_ducklake
  (METADATA_SCHEMA 'ducklake');

SELECT * FROM my_ducklake.public.events;
```

### 注意事项

- 版本 1.0.0 支持 PostgreSQL 14-18。
- README 列出的源码构建目标包括 Ubuntu 22.04-24.04 和 macOS。
- Cloud credentials 通过 `ducklake_secret` foreign server 和 per-user mappings 存储；应像保护其他数据库 secrets 一样保护这些 catalog objects。
- 对于 incremental heap-to-DuckLake conversion，上游指向单独的 `pg_duckpipe` 项目。
