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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_clickhouse-0.1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_clickhouse-0.1.5.tar.gz</div>
    <div class="ext-card__desc">pg_clickhouse-0.1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | `0.1.5` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2460  | [**`pg_clickhouse`**](/ext/e/pg_clickhouse) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`citus`](/ext/e/citus) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) [`clickhouse_fdw`](/ext/e/clickhouse_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`dblink`](/ext/e/dblink) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> with submodule


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_clickhouse_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-clickhouse` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
@ el8.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 705.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_18-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 629.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_18-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 712.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_18-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 682.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_18-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 736.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_18-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_clickhouse_18 pg_clickhouse_18-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 700.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_18-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 820.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 759.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 824.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 763.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 889.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 862.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 902.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-clickhouse postgresql-18-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 870.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-18-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 705.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_17-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 629.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_17-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 712.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_17-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 682.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_17-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 736.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_17-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_clickhouse_17 pg_clickhouse_17-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 700.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_17-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 820.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 758.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 823.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 763.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 938.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 910.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 902.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-clickhouse postgresql-17-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 870.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-17-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 705.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_16-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 629.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_16-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 712.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_16-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 682.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_16-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 736.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_16-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_clickhouse_16 pg_clickhouse_16-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 700.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_16-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 820.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 758.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 823.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 763.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 935.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 907.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 901.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-clickhouse postgresql-16-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 870.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-16-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 708.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_15-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 631.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_15-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 715.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_15-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 684.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_15-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 740.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_15-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_clickhouse_15 pg_clickhouse_15-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 703.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_15-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 821.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 759.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 825.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 764.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 937.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 909.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 904.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-clickhouse postgresql-15-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 871.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-15-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 708.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_clickhouse_14-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 631.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_clickhouse_14-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 715.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_clickhouse_14-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 684.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_clickhouse_14-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 740.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_clickhouse_14-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_clickhouse_14 pg_clickhouse_14-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 703.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_clickhouse_14-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 821.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 759.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 825.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 764.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 937.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 908.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 903.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-clickhouse postgresql-14-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 871.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-clickhouse/postgresql-14-clickhouse_0.1.5-1PIGSTY~noble_arm64.deb
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

`pg_clickhouse` 允许直接从 PostgreSQL 对 ClickHouse 执行分析查询，无需重写 SQL。支持 PostgreSQL 13+ 和 ClickHouse v23+。

### 创建扩展

```sql
CREATE EXTENSION pg_clickhouse;
```

或安装到指定 schema：

```sql
CREATE SCHEMA env;
CREATE EXTENSION pg_clickhouse SCHEMA env;
```

### 查询下推

该扩展自动将分析查询下推到 ClickHouse 执行，带来显著的性能提升。例如 TPC-H 基准测试显示：

- 查询 1：268ms（标准 PostgreSQL 为 4,693ms）
- 查询 6：53ms（标准 PostgreSQL 为 764ms）

当查询下推激活时，ClickHouse 直接处理执行，避免了复杂分析工作负载的数据传输开销。
