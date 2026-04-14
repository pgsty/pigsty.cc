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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_clickhouse-0.1.10.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_clickhouse-0.1.10.tar.gz</div>
    <div class="ext-card__desc">pg_clickhouse-0.1.10.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | `0.1.10` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2460  | [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`citus`](/ext/e/citus) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) [`clickhouse_fdw`](/ext/e/clickhouse_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`dblink`](/ext/e/dblink) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release tag 0.1.10 still ships extension SQL version 0.1; source tarball vendors submodules.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.10` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-clickhouse` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
@ el8.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.10-1PIGSTY.el8.x86_64.rpm pigsty 0.1.10 714.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_18-0.1.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.10-1PIGSTY.el8.aarch64.rpm pigsty 0.1.10 636.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_18-0.1.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.10-1PIGSTY.el9.x86_64.rpm pigsty 0.1.10 720.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_18-0.1.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.10-1PIGSTY.el9.aarch64.rpm pigsty 0.1.10 690.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_18-0.1.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.10-1PIGSTY.el10.x86_64.rpm pigsty 0.1.10 744.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_18-0.1.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.10-1PIGSTY.el10.aarch64.rpm pigsty 0.1.10 707.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_18-0.1.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb pigsty 0.1.10 846.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb pigsty 0.1.10 783.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb pigsty 0.1.10 850.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb pigsty 0.1.10 789.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb pigsty 0.1.10 914.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb pigsty 0.1.10 886.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb pigsty 0.1.10 927.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb pigsty 0.1.10 893.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.10-1PIGSTY.el8.x86_64.rpm pigsty 0.1.10 714.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_17-0.1.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.10-1PIGSTY.el8.aarch64.rpm pigsty 0.1.10 636.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_17-0.1.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.10-1PIGSTY.el9.x86_64.rpm pigsty 0.1.10 720.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_17-0.1.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.10-1PIGSTY.el9.aarch64.rpm pigsty 0.1.10 689.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_17-0.1.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.10-1PIGSTY.el10.x86_64.rpm pigsty 0.1.10 744.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_17-0.1.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.10-1PIGSTY.el10.aarch64.rpm pigsty 0.1.10 707.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_17-0.1.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb pigsty 0.1.10 845.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb pigsty 0.1.10 783.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb pigsty 0.1.10 850.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb pigsty 0.1.10 788.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb pigsty 0.1.10 967.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb pigsty 0.1.10 939.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb pigsty 0.1.10 926.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb pigsty 0.1.10 893.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.10-1PIGSTY.el8.x86_64.rpm pigsty 0.1.10 714.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_16-0.1.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.10-1PIGSTY.el8.aarch64.rpm pigsty 0.1.10 636.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_16-0.1.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.10-1PIGSTY.el9.x86_64.rpm pigsty 0.1.10 720.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_16-0.1.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.10-1PIGSTY.el9.aarch64.rpm pigsty 0.1.10 689.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_16-0.1.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.10-1PIGSTY.el10.x86_64.rpm pigsty 0.1.10 744.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_16-0.1.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.10-1PIGSTY.el10.aarch64.rpm pigsty 0.1.10 707.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_16-0.1.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb pigsty 0.1.10 846.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb pigsty 0.1.10 783.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb pigsty 0.1.10 849.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb pigsty 0.1.10 788.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb pigsty 0.1.10 964.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb pigsty 0.1.10 935.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb pigsty 0.1.10 926.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb pigsty 0.1.10 892.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.10-1PIGSTY.el8.x86_64.rpm pigsty 0.1.10 717.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_15-0.1.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.10-1PIGSTY.el8.aarch64.rpm pigsty 0.1.10 638.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_15-0.1.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.10-1PIGSTY.el9.x86_64.rpm pigsty 0.1.10 723.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_15-0.1.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.10-1PIGSTY.el9.aarch64.rpm pigsty 0.1.10 693.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_15-0.1.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.10-1PIGSTY.el10.x86_64.rpm pigsty 0.1.10 747.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_15-0.1.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.10-1PIGSTY.el10.aarch64.rpm pigsty 0.1.10 710.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_15-0.1.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb pigsty 0.1.10 847.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb pigsty 0.1.10 785.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb pigsty 0.1.10 851.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb pigsty 0.1.10 789.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb pigsty 0.1.10 966.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb pigsty 0.1.10 938.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb pigsty 0.1.10 929.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb pigsty 0.1.10 895.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.10-1PIGSTY.el8.x86_64.rpm pigsty 0.1.10 717.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_14-0.1.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.10-1PIGSTY.el8.aarch64.rpm pigsty 0.1.10 638.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_14-0.1.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.10-1PIGSTY.el9.x86_64.rpm pigsty 0.1.10 723.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_14-0.1.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.10-1PIGSTY.el9.aarch64.rpm pigsty 0.1.10 693.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_14-0.1.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.10-1PIGSTY.el10.x86_64.rpm pigsty 0.1.10 747.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_14-0.1.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.10-1PIGSTY.el10.aarch64.rpm pigsty 0.1.10 710.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_14-0.1.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb pigsty 0.1.10 847.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb pigsty 0.1.10 784.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb pigsty 0.1.10 851.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb pigsty 0.1.10 789.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb pigsty 0.1.10 965.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb pigsty 0.1.10 936.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb pigsty 0.1.10 928.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb pigsty 0.1.10 895.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.10-1PIGSTY~noble_arm64.deb
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

> [pg_clickhouse: PostgreSQL 的 ClickHouse 集成](https://github.com/ClickHouse/pg_clickhouse)

`pg_clickhouse` 允许直接从 PostgreSQL 向 ClickHouse 执行分析查询，而无需重写 SQL。它支持 PostgreSQL 13+ 和 ClickHouse v23+。

## 入门

上游建议的起步方式主要有两种：

- 使用已发布的 Docker 镜像 `ghcr.io/clickhouse/pg_clickhouse:18`
- 通过 `make` / `make install` 从源码构建，或从 PGXN 安装

安装完成后启用扩展：

```sql
CREATE EXTENSION pg_clickhouse;
```

也可以安装到指定 schema：

```sql
CREATE SCHEMA ch;
CREATE EXTENSION pg_clickhouse WITH SCHEMA ch;
```

## 连接 ClickHouse

参考文档展示的标准流程如下：

```sql
CREATE SERVER taxi_srv
FOREIGN DATA WRAPPER clickhouse_fdw
OPTIONS (driver 'binary', host 'localhost', dbname 'taxi');

CREATE USER MAPPING FOR CURRENT_USER
SERVER taxi_srv
OPTIONS (user 'default');

CREATE SCHEMA taxi;
IMPORT FOREIGN SCHEMA taxi FROM SERVER taxi_srv INTO taxi;
```

文档中列出的服务器选项包括：

- `driver`，必填，可选 `binary` 或 `http`
- `dbname`
- `fetch_size`
- `host`
- `port`

## 文档重点

README 将 pg_clickhouse 的核心定位为面向分析工作负载的透明下推：

- 教程会带你把 PostgreSQL 连接到 ClickHouse 示例数据库，并查询导入后的表
- 参考文档会说明扩展生命周期命令、外部服务器选项以及扩展暴露的 SQL 对象

项目 README 还给出了 TPC-H 基准示例，说明在什么情况下查询下推能显著缩短耗时。

## 运行说明

参考文档把版本分成两层：

- 库版本，可通过 `pgch_version()` 或 `pg_get_loaded_modules()` 查看
- 扩展版本，由 PostgreSQL 系统目录和扩展升级脚本跟踪

小版本和大版本升级时，可能需要执行 `ALTER EXTENSION pg_clickhouse UPDATE`。
