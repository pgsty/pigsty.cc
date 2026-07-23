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
| el8.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | AVAIL PIGSTY 3.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
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

- [官方 pg_lake README](https://github.com/Snowflake-Labs/pg_lake/blob/44134cc33fb152716e10752d0a345c6e1acb8725/README.md)
- [版本3.4控制文件](https://github.com/Snowflake-Labs/pg_lake/blob/44134cc33fb152716e10752d0a345c6e1acb8725/pg_lake/pg_lake.control)
- [官方构建和启动指南](https://github.com/Snowflake-Labs/pg_lake/blob/44134cc33fb152716e10752d0a345c6e1acb8725/docs/building-from-source.md)
- [官方项目文档索引](https://github.com/Snowflake-Labs/pg_lake/blob/44134cc33fb152716e10752d0a345c6e1acb8725/docs/README.md)

`pg_lake`是Snowflake的PostgreSQL湖库堆栈中的顶级扩展。它安装了查询对象存储文件所需的表、Iceberg、复制、查询引擎、基础扩展和映射组件，从而创建事务性的Iceberg表。这些PostgreSQL扩展协调规划和事务处理，而一个单独的本地`pgduck_server`进程使用DuckDB执行向量化工作。

### 启动堆栈

版本`3.4`支持PostgreSQL 16至18。预加载通用扩展基础设施，重启PostgreSQL，并在数据库主机上启动`pgduck_server`：

```conf
shared_preload_libraries = 'pg_extension_base'
```

```shell
pgduck_server --cache_dir /var/cache/pg_lake
```

在目标数据库中创建完整的依赖树：

```sql
CREATE EXTENSION pg_lake CASCADE;
SELECT lake.version();
```

为`pgduck_server`配置对象存储凭证，然后选择托管的Iceberg位置：

```sql
SET pg_lake_iceberg.default_location_prefix =
    's3://analytics-bucket/warehouse';
```

### 核心工作流

创建和修改事务性的Iceberg表：

```sql
CREATE TABLE measurements (
    station_name text NOT NULL,
    measured_at timestamptz NOT NULL,
    value double precision
) USING iceberg;

INSERT INTO measurements VALUES
    ('Istanbul', now(), 18.5),
    ('Haarlem', now(), 9.3);
```

通过`COPY`导入或导出Parquet、CSV或换行符分隔的JSON文件：

```sql
COPY (SELECT * FROM measurements)
TO 's3://analytics-bucket/export/measurements.parquet';

COPY measurements
FROM 's3://analytics-bucket/import/measurements.parquet';
```

查询文件而不将其加载到PostgreSQL中：

```sql
CREATE FOREIGN TABLE external_events ()
SERVER pg_lake
OPTIONS (path 's3://analytics-bucket/events/*.parquet');

SELECT count(*) FROM external_events;
```

### 组件索引

- `pg_lake`：元扩展和`lake.version()`。
- `pg_lake_table`：数据湖FDW、Iceberg表语法、文件工具和表目录。
- `pg_lake_iceberg`：Iceberg的元数据、快照、清单和目录集成。
- `pg_lake_copy`：对对象存储文件和湖格式的`COPY`拦截。
- `pg_lake_engine`：共享查询重写、类型转换、清理和`pgduck_server`客户端层。
- `pg_extension_base`：预加载和生命周期工作进程基础设施。
- `pg_map`：用于嵌套湖数据的生成PostgreSQL映射类型。

### 运营注意事项

- 对于湖查询，`pgduck_server`是必需的，并且必须具有从PostgreSQL到对象存储的有效凭证和本地套接字连接。
- S3及其兼容凭证由DuckDB的秘密/凭证链解析。仅授予工作负载所需的桶权限。
- Iceberg写入按语句创建Parquet文件。批量插入并定期运行`VACUUM`以避免产生许多小文件。
- 这些PostgreSQL扩展、`pgduck_server`对象存储数据和Iceberg目录形成一个部署单元。单独创建扩展不足以证明外部服务可用，需要分别备份和升级它们。
