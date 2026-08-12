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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_clickhouse-0.10.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_clickhouse-0.10.0.tar.gz</div>
    <div class="ext-card__desc">pg_clickhouse-0.10.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | `0.10.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2460  | [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_stat_ch`](/ext/e/pg_stat_ch) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_ducklake`](/ext/e/pg_ducklake) [`pg_lake`](/ext/e/pg_lake) [`hdfs_fdw`](/ext/e/hdfs_fdw) [`kafka_fdw`](/ext/e/kafka_fdw) [`aws_s3`](/ext/e/aws_s3) [`pg_parquet`](/ext/e/pg_parquet) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release v0.10.0, control SQL version 0.10; preloading is optional; no llvmjit subpackage on el9.x86_64 in the 2026-08-12 build.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.10.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.10.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse_$v` | `openssl`, `libcurl`, `libuuid`, `lz4-libs`, `libzstd` |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.10.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-clickhouse` | `libssl3 | libssl3t64`, `libcurl4 | libcurl4t64`, `libuuid1`, `liblz4-1`, `libzstd1` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 |
@ el8.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.10.0-1PIGSTY.el8.x86_64.rpm pigsty 0.10.0 169.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_18-0.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.10.0-1PIGSTY.el8.aarch64.rpm pigsty 0.10.0 167.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_18-0.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.10.0-1PIGSTY.el9.x86_64.rpm pigsty 0.10.0 165.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_18-0.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.10.0-1PIGSTY.el9.aarch64.rpm pigsty 0.10.0 162.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_18-0.10.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.10.0-1PIGSTY.el10.x86_64.rpm pigsty 0.10.0 162.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_18-0.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.10.0-1PIGSTY.el10.aarch64.rpm pigsty 0.10.0 165.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_18-0.10.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 446.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 439.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 447.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 442.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 467.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 468.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 446.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 449.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 444.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 445.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.10.0-1PIGSTY.el8.x86_64.rpm pigsty 0.10.0 169.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_17-0.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.10.0-1PIGSTY.el8.aarch64.rpm pigsty 0.10.0 167.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_17-0.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.10.0-1PIGSTY.el9.x86_64.rpm pigsty 0.10.0 165.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_17-0.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.10.0-1PIGSTY.el9.aarch64.rpm pigsty 0.10.0 162.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_17-0.10.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.10.0-1PIGSTY.el10.x86_64.rpm pigsty 0.10.0 162.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_17-0.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.10.0-1PIGSTY.el10.aarch64.rpm pigsty 0.10.0 164.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_17-0.10.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 446.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 439.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 447.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 442.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 524.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 525.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 446.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 448.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 444.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 445.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.10.0-1PIGSTY.el8.x86_64.rpm pigsty 0.10.0 169.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_16-0.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.10.0-1PIGSTY.el8.aarch64.rpm pigsty 0.10.0 167.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_16-0.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.10.0-1PIGSTY.el9.x86_64.rpm pigsty 0.10.0 165.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_16-0.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.10.0-1PIGSTY.el9.aarch64.rpm pigsty 0.10.0 162.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_16-0.10.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.10.0-1PIGSTY.el10.x86_64.rpm pigsty 0.10.0 162.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_16-0.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.10.0-1PIGSTY.el10.aarch64.rpm pigsty 0.10.0 164.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_16-0.10.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 446.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 439.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 447.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 441.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 519.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 520.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 446.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 448.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 443.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 445.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.10.0-1PIGSTY.el8.x86_64.rpm pigsty 0.10.0 173.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_15-0.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.10.0-1PIGSTY.el8.aarch64.rpm pigsty 0.10.0 170.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_15-0.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.10.0-1PIGSTY.el9.x86_64.rpm pigsty 0.10.0 168.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_15-0.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.10.0-1PIGSTY.el9.aarch64.rpm pigsty 0.10.0 170.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_15-0.10.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.10.0-1PIGSTY.el10.x86_64.rpm pigsty 0.10.0 171.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_15-0.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.10.0-1PIGSTY.el10.aarch64.rpm pigsty 0.10.0 173.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_15-0.10.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 449.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 442.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 450.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 444.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 526.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 526.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 453.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 455.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 450.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 452.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.10.0-1PIGSTY.el8.x86_64.rpm pigsty 0.10.0 173.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_14-0.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.10.0-1PIGSTY.el8.aarch64.rpm pigsty 0.10.0 170.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_14-0.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.10.0-1PIGSTY.el9.x86_64.rpm pigsty 0.10.0 168.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_14-0.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.10.0-1PIGSTY.el9.aarch64.rpm pigsty 0.10.0 170.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_14-0.10.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.10.0-1PIGSTY.el10.x86_64.rpm pigsty 0.10.0 171.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_14-0.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.10.0-1PIGSTY.el10.aarch64.rpm pigsty 0.10.0 173.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_14-0.10.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 449.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 442.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 450.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 445.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 526.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 526.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 453.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 455.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 450.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 452.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.10.0-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

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


**创建扩展**：

```sql
CREATE EXTENSION pg_clickhouse;
```

## 用法

来源：

- [pg_clickhouse v0.10.0 README](https://github.com/ClickHouse/pg_clickhouse/blob/v0.10.0/README.md)
- [pg_clickhouse v0.10.0 参考文档](https://github.com/ClickHouse/pg_clickhouse/blob/v0.10.0/doc/pg_clickhouse.md)
- [pg_clickhouse v0.10.0 教程](https://github.com/ClickHouse/pg_clickhouse/blob/v0.10.0/doc/tutorial.md)
- [pg_clickhouse v0.10.0 变更日志](https://github.com/ClickHouse/pg_clickhouse/blob/v0.10.0/CHANGELOG.md)
- [pg_clickhouse v0.10.0 控制文件](https://github.com/ClickHouse/pg_clickhouse/blob/v0.10.0/pg_clickhouse.control)
- [pg_clickhouse 0.3 至 0.10 升级 SQL](https://github.com/ClickHouse/pg_clickhouse/blob/v0.10.0/sql/pg_clickhouse--0.3--0.10.sql)
- [Pigsty pg_clickhouse 软件包矩阵](https://pgext.cloud/ext/pg_clickhouse)

`pg_clickhouse` 0.10.0 通过 `clickhouse_fdw` 外部数据封装器把 ClickHouse 表暴露给 PostgreSQL。上游面向 PostgreSQL 13 及以上版本与 ClickHouse 23.3 及以上版本；当前 Pigsty 软件包覆盖 PostgreSQL 14–18。正常使用无需预加载；`session_preload_libraries` 与 `shared_preload_libraries` 只是可选的连接启动优化。

### 连接 PostgreSQL 与 ClickHouse

```sql
CREATE EXTENSION pg_clickhouse;

CREATE SERVER taxi_srv
FOREIGN DATA WRAPPER clickhouse_fdw
OPTIONS (
  driver 'binary',
  host 'localhost',
  dbname 'taxi',
  compression 'lz4'
);

CREATE USER MAPPING FOR CURRENT_USER
SERVER taxi_srv
OPTIONS (user 'default');

CREATE SCHEMA taxi;
IMPORT FOREIGN SCHEMA taxi FROM SERVER taxi_srv INTO taxi;
```

必填的 `driver` 选项可取 `binary` 或 `http`。常用服务器选项包括 `host`、`port`、`dbname`、`compression`、`secure` 与 `min_tls_version`；用户映射接受 `user` 和 `password`。0.10 版本已弃用并忽略 `fetch_size`，因为两个驱动现在都流式处理相同的 Native 格式。

`IMPORT FOREIGN SCHEMA` 支持 `LIMIT TO (...)` 与 `EXCEPT (...)`。导入的混合大小写标识符会保留引号，引用时必须使用匹配的引号。

### 查询与写入外部表

```sql
EXPLAIN (VERBOSE)
SELECT node_id, count(*)
FROM taxi.logs
GROUP BY node_id;

INSERT INTO taxi.nodes(node_id, name)
VALUES (9, 'west-node');

COPY taxi.nodes(node_id, name) FROM STDIN;
```

`SELECT`、`EXPLAIN`、预备语句、`INSERT` 与 `COPY` 都可作用于外部表。在 0.10 版本中，二进制驱动以有界的 64 MiB 批次刷新写入，因此 `COPY` 已不再只是展开成逐行语句。使用 `EXPLAIN (VERBOSE)` 检查远端 SQL，并确认哪些过滤、连接、聚合与函数发生了下推。

### 直接查询与命令 API

0.10 版本新增了带类型的任意查询与命令接口：

```sql
GRANT EXECUTE ON FUNCTION clickhouse_query(text, text) TO analyst;
GRANT EXECUTE ON PROCEDURE clickhouse_perform(text, text) TO operator;

SELECT *
FROM clickhouse_query(
  'taxi_srv',
  'SELECT region, count() FROM taxi GROUP BY region'
) AS t(region text, n bigint);

CALL clickhouse_perform(
  'taxi_srv',
  'OPTIMIZE TABLE taxi.nodes FINAL'
);

SELECT clickhouse_server_version('taxi_srv');
```

`clickhouse_query(server, sql)` 按调用方提供的列定义返回行，而 `clickhouse_perform(server, sql)` 会丢弃结果。两者都能执行任意远端 SQL，因此 `EXECUTE` 已从 `PUBLIC` 撤销，只应按最小范围授权。`clickhouse_raw_query()` 已弃用，应改用这两个接口。

### 下推与会话设置

0.10 版本扩展了聚合与函数下推，改善了本地分区和外部分区混合场景下的聚合执行，并修复了多处 PostgreSQL NULL 语义差异。子查询下推要求 ClickHouse 25.8 或以上版本；旧服务器会在本地计算这些子查询。

默认的 `pg_clickhouse.session_settings` 保持与 PostgreSQL 兼容的行为，其中包括 `join_use_nulls = 1`、`group_by_use_nulls = 1`、`final = 1` 与 `transform_null_in = 0`。覆盖它时，应保留工作负载所需的设置，尤其是安全下推 `IN` 所必需的 `transform_null_in = 0`。

### 升级与运维边界

```sql
ALTER EXTENSION pg_clickhouse UPDATE TO '0.10';
SELECT pgch_version();
```

扩展 SQL 版本是 `0.10`，而 `pgch_version()` 返回完整的库版本 `0.10.0`。从 SQL 版本 `0.3` 升级的安装，在部署新文件后必须执行 `ALTER EXTENSION`。

把 `pg_clickhouse` 放入 `session_preload_libraries` 时，新会话会自动加载它；放入 `shared_preload_libraries` 时，更换动态库需要重启 PostgreSQL。与需要注册 postmaster 钩子的扩展不同，这两个设置都不是强制要求。

文档化的写入接口仍不包括轻量级 `UPDATE` 与 `DELETE`。应把直接远端 SQL 视为特权操作，使用贴近生产的数据验证 NULL 与类型相关的下推，并在依赖受版本约束的优化前核对 PostgreSQL 和 ClickHouse 版本。
