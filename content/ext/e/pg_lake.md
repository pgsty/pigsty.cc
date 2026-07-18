---
title: "pg_lake"
linkTitle: "pg_lake"
description: "Snowflake 开源的 PostgreSQL 数据湖与 Iceberg 集成扩展"
weight: 2560
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Snowflake-Labs/pg_lake">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Snowflake-Labs/pg_lake</div>
    <div class="ext-card__desc">https://github.com/Snowflake-Labs/pg_lake</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_lake-3.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_lake-3.4.0.tar.gz</div>
    <div class="ext-card__desc">pg_lake-3.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_lake`**](/ext/e/pg_lake) | `3.4` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2560  | [**`pg_lake`**](/ext/e/pg_lake) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `lake` |
| 2561  | [**`pg_extension_base`**](/ext/e/pg_extension_base) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `extension_base` |
| 2562  | [**`pg_extension_updater`**](/ext/e/pg_extension_updater) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `extension_updater` |
| 2563  | [**`pg_map`**](/ext/e/pg_map) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `map_type` |
| 2564  | [**`pg_lake_engine`**](/ext/e/pg_lake_engine) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `__lake__internal__nsp__` |
| 2565  | [**`pg_lake_iceberg`**](/ext/e/pg_lake_iceberg) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `lake_iceberg` |
| 2566  | [**`pg_lake_table`**](/ext/e/pg_lake_table) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `__pg_lake_table_writes` |
| 2567  | [**`pg_lake_copy`**](/ext/e/pg_lake_copy) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_lake_copy`](/ext/e/pg_lake_copy) [`pg_lake_table`](/ext/e/pg_lake_table) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_ducklake`](/ext/e/pg_ducklake) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_parquet`](/ext/e/pg_parquet) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Pigsty packages this release for PG16-18. Configure shared_preload_libraries=pg_extension_base and run the matching PG-major pgduck_server process. RPM supports EL9/EL10 only; EL8 is rejected because OpenSSL 3 is required. DEB supports Debian 12/13 and Ubuntu 22.04/24.04/26.04 on amd64/arm64. DuckDB and Avro are private per PG major. Co-installation with pg_duckdb, pg_mooncake, and duckdb_fdw is file-safe, but overlapping hooks and COPY behavior can be preload-order-sensitive.
Extension SQL/control version is 3.4; source and DEB/RPM package version is 3.4.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.4` | {{< pgvers "18,17,16" >}} | `pg_lake` | `pg_lake_copy`, `pg_lake_table` |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.4.0` | {{< pgvers "18,17,16" >}} | `pg_lake_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.4.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-lake` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el9.x86_64 18 pg_lake_18 pg_lake_18-3.4.0-2PIGSTY.el9.x86_64.rpm pigsty 3.4.0 19.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lake_18-3.4.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_lake_18 pg_lake_18-3.4.0-2PIGSTY.el9.aarch64.rpm pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lake_18-3.4.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_lake_18 pg_lake_18-3.4.0-2PIGSTY.el10.x86_64.rpm pigsty 3.4.0 19.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lake_18-3.4.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_lake_18 pg_lake_18-3.4.0-2PIGSTY.el10.aarch64.rpm pigsty 3.4.0 17.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lake_18-3.4.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~bookworm_amd64.deb pigsty 3.4.0 19.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~bookworm_arm64.deb pigsty 3.4.0 16.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~trixie_amd64.deb pigsty 3.4.0 20.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~trixie_arm64.deb pigsty 3.4.0 17.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~jammy_amd64.deb pigsty 3.4.0 19.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~jammy_arm64.deb pigsty 3.4.0 18.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~noble_amd64.deb pigsty 3.4.0 19.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~noble_arm64.deb pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~resolute_amd64.deb pigsty 3.4.0 20.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-lake postgresql-18-pg-lake_3.4.0-2PIGSTY~resolute_arm64.deb pigsty 3.4.0 18.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lake/postgresql-18-pg-lake_3.4.0-2PIGSTY~resolute_arm64.deb
@ el9.x86_64 17 pg_lake_17 pg_lake_17-3.4.0-2PIGSTY.el9.x86_64.rpm pigsty 3.4.0 19.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lake_17-3.4.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_lake_17 pg_lake_17-3.4.0-2PIGSTY.el9.aarch64.rpm pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lake_17-3.4.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_lake_17 pg_lake_17-3.4.0-2PIGSTY.el10.x86_64.rpm pigsty 3.4.0 19.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lake_17-3.4.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_lake_17 pg_lake_17-3.4.0-2PIGSTY.el10.aarch64.rpm pigsty 3.4.0 17.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lake_17-3.4.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~bookworm_amd64.deb pigsty 3.4.0 19.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~bookworm_arm64.deb pigsty 3.4.0 16.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~trixie_amd64.deb pigsty 3.4.0 20.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~trixie_arm64.deb pigsty 3.4.0 17.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~jammy_amd64.deb pigsty 3.4.0 19.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~jammy_arm64.deb pigsty 3.4.0 18.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~noble_amd64.deb pigsty 3.4.0 19.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~noble_arm64.deb pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~resolute_amd64.deb pigsty 3.4.0 20.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-lake postgresql-17-pg-lake_3.4.0-2PIGSTY~resolute_arm64.deb pigsty 3.4.0 18.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lake/postgresql-17-pg-lake_3.4.0-2PIGSTY~resolute_arm64.deb
@ el9.x86_64 16 pg_lake_16 pg_lake_16-3.4.0-2PIGSTY.el9.x86_64.rpm pigsty 3.4.0 19.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lake_16-3.4.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_lake_16 pg_lake_16-3.4.0-2PIGSTY.el9.aarch64.rpm pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lake_16-3.4.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_lake_16 pg_lake_16-3.4.0-2PIGSTY.el10.x86_64.rpm pigsty 3.4.0 19.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lake_16-3.4.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_lake_16 pg_lake_16-3.4.0-2PIGSTY.el10.aarch64.rpm pigsty 3.4.0 17.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lake_16-3.4.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~bookworm_amd64.deb pigsty 3.4.0 19.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~bookworm_arm64.deb pigsty 3.4.0 16.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~trixie_amd64.deb pigsty 3.4.0 19.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~trixie_arm64.deb pigsty 3.4.0 17.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~jammy_amd64.deb pigsty 3.4.0 19.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~jammy_arm64.deb pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~noble_amd64.deb pigsty 3.4.0 19.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~noble_arm64.deb pigsty 3.4.0 18.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~resolute_amd64.deb pigsty 3.4.0 20.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-lake postgresql-16-pg-lake_3.4.0-2PIGSTY~resolute_arm64.deb pigsty 3.4.0 18.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lake/postgresql-16-pg-lake_3.4.0-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_lake` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_lake         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_lake` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_lake;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_lake -v 18  # PG 18
pig ext install -y pg_lake -v 17  # PG 17
pig ext install -y pg_lake -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_lake_18       # PG 18
dnf install -y pg_lake_17       # PG 17
dnf install -y pg_lake_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-lake   # PG 18
apt install -y postgresql-17-pg-lake   # PG 17
apt install -y postgresql-16-pg-lake   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_extension_base';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_lake CASCADE;  -- 依赖: pg_lake_copy, pg_lake_table
```

## 用法

来源：

- [官方扩展控制文件](https://github.com/Snowflake-Labs/pg_lake/blob/44134cc33fb152716e10752d0a345c6e1acb8725/pg_lake/pg_lake.control)
- [官方上游文档](https://github.com/Snowflake-Labs/pg_lake/blob/44134cc33fb152716e10752d0a345c6e1acb8725/docs/README.md)

`pg_lake` — Snowflake 开源的 PostgreSQL 数据湖与 Iceberg 集成扩展

已复核目录快照记录的版本为 `3.4`、类型为 `preload`、实现语言为 `C`。
应先安装并验证声明的扩展依赖：`pg_lake_copy`, `pg_lake_table`。
整理后的兼容版本集合为 `16,17,18`；仍需针对目标服务器确认实际构建。

```sql
CREATE EXTENSION "pg_lake";
SELECT extversion
FROM pg_extension
WHERE extname = 'pg_lake';
```

该上游项目与 `Snowflake` 相关；应根据所链接来源核实当前支持、许可证、打包方式与部署边界。

整理后的生命周期为 `active`。采用前应固定已复核构建并确认维护状态。

投入生产前，应复核所链接的 control/SQL 或服务商文档，验证权限与兼容性，并在目标 PostgreSQL 构建上测试实际 API 和故障行为。
