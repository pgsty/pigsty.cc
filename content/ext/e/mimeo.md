---
title: "mimeo"
linkTitle: "mimeo"
description: "在PostgreSQL实例间进行表级复制"
weight: 9700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/omniti-labs/mimeo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">omniti-labs/mimeo</div>
    <div class="ext-card__desc">https://github.com/omniti-labs/mimeo</div>
  </a>
  <a class="ext-card ext-card--source" href="mimeo-1.5.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">mimeo-1.5.1.tar.gz</div>
    <div class="ext-card__desc">mimeo-1.5.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mimeo`**](/ext/e/mimeo) | `1.5.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9700  | [**`mimeo`**](/ext/e/mimeo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dblink`](/ext/e/dblink) [`pg_jobmon`](/ext/e/pg_jobmon) [`postgres_fdw`](/ext/e/postgres_fdw) [`pglogical`](/ext/e/pglogical) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) [`repmgr`](/ext/e/repmgr) [`pg_fact_loader`](/ext/e/pg_fact_loader) [`pg_failover_slots`](/ext/e/pg_failover_slots) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> name conflict with pg_partman


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.5.1` | {{< pgvers "18,17,16,15,14" >}} | `mimeo` | `dblink` |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.1` | {{< pgvers "18,17,16,15,14" >}} | `mimeo_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-mimeo` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 |
| d12.x86_64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| d12.aarch64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| d13.x86_64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| d13.aarch64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| u22.x86_64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| u22.aarch64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| u24.x86_64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
| u24.aarch64 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 | AVAIL PGDG 1.5.1 1 |
@ el8.x86_64 18 mimeo_18 mimeo_18-1.5.1-1PIGSTY.el8.x86_64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/mimeo_18-1.5.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 mimeo_18 mimeo_18-1.5.1-1PIGSTY.el8.aarch64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/mimeo_18-1.5.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 mimeo_18 mimeo_18-1.5.1-1PIGSTY.el9.x86_64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/mimeo_18-1.5.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 mimeo_18 mimeo_18-1.5.1-1PIGSTY.el9.aarch64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/mimeo_18-1.5.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 mimeo_18 mimeo_18-1.5.1-1PIGSTY.el10.x86_64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/mimeo_18-1.5.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 mimeo_18 mimeo_18-1.5.1-1PIGSTY.el10.aarch64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/mimeo_18-1.5.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-mimeo postgresql-18-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-18-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ el8.x86_64 17 mimeo_17 mimeo_17-1.5.1-1PIGSTY.el8.x86_64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/mimeo_17-1.5.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 mimeo_17 mimeo_17-1.5.1-1PIGSTY.el8.aarch64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/mimeo_17-1.5.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 mimeo_17 mimeo_17-1.5.1-1PIGSTY.el9.x86_64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/mimeo_17-1.5.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 mimeo_17 mimeo_17-1.5.1-1PIGSTY.el9.aarch64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/mimeo_17-1.5.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 mimeo_17 mimeo_17-1.5.1-1PIGSTY.el10.x86_64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/mimeo_17-1.5.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 mimeo_17 mimeo_17-1.5.1-1PIGSTY.el10.aarch64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/mimeo_17-1.5.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-mimeo postgresql-17-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-17-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ el8.x86_64 16 mimeo_16 mimeo_16-1.5.1-1PIGSTY.el8.x86_64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/mimeo_16-1.5.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 mimeo_16 mimeo_16-1.5.1-1PIGSTY.el8.aarch64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/mimeo_16-1.5.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 mimeo_16 mimeo_16-1.5.1-1PIGSTY.el9.x86_64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/mimeo_16-1.5.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 mimeo_16 mimeo_16-1.5.1-1PIGSTY.el9.aarch64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/mimeo_16-1.5.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 mimeo_16 mimeo_16-1.5.1-1PIGSTY.el10.x86_64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/mimeo_16-1.5.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 mimeo_16 mimeo_16-1.5.1-1PIGSTY.el10.aarch64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/mimeo_16-1.5.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-mimeo postgresql-16-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-16-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ el8.x86_64 15 mimeo_15 mimeo_15-1.5.1-1PIGSTY.el8.x86_64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/mimeo_15-1.5.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 mimeo_15 mimeo_15-1.5.1-1PIGSTY.el8.aarch64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/mimeo_15-1.5.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 mimeo_15 mimeo_15-1.5.1-1PIGSTY.el9.x86_64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/mimeo_15-1.5.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 mimeo_15 mimeo_15-1.5.1-1PIGSTY.el9.aarch64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/mimeo_15-1.5.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 mimeo_15 mimeo_15-1.5.1-1PIGSTY.el10.x86_64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/mimeo_15-1.5.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 mimeo_15 mimeo_15-1.5.1-1PIGSTY.el10.aarch64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/mimeo_15-1.5.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u24.x86_64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-mimeo postgresql-15-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-15-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ el8.x86_64 14 mimeo_14 mimeo_14-1.5.1-1PIGSTY.el8.x86_64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/mimeo_14-1.5.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 mimeo_14 mimeo_14-1.5.1-1PIGSTY.el8.aarch64.rpm pigsty 1.5.1 139.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/mimeo_14-1.5.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 mimeo_14 mimeo_14-1.5.1-1PIGSTY.el9.x86_64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/mimeo_14-1.5.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 mimeo_14 mimeo_14-1.5.1-1PIGSTY.el9.aarch64.rpm pigsty 1.5.1 113.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/mimeo_14-1.5.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 mimeo_14 mimeo_14-1.5.1-1PIGSTY.el10.x86_64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/mimeo_14-1.5.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 mimeo_14 mimeo_14-1.5.1-1PIGSTY.el10.aarch64.rpm pigsty 1.5.1 114.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/mimeo_14-1.5.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg12+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg12+1_all.deb
@ d13.x86_64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg13+1_all.deb pgdg 1.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg13+1_all.deb
@ u22.x86_64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u22.aarch64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg22.04+1_all.deb pgdg 1.5.1 108.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg22.04+1_all.deb
@ u24.x86_64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-mimeo postgresql-14-mimeo_1.5.1-20.pgdg24.04+1_all.deb pgdg 1.5.1 107.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mimeo/postgresql-14-mimeo_1.5.1-20.pgdg24.04+1_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `mimeo` 扩展的 RPM 包：

```bash
pig build pkg mimeo         # 构建 RPM 包
```


## 安装

您可以直接安装 `mimeo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install mimeo;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y mimeo -v 18  # PG 18
pig ext install -y mimeo -v 17  # PG 17
pig ext install -y mimeo -v 16  # PG 16
pig ext install -y mimeo -v 15  # PG 15
pig ext install -y mimeo -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y mimeo_18       # PG 18
dnf install -y mimeo_17       # PG 17
dnf install -y mimeo_16       # PG 16
dnf install -y mimeo_15       # PG 15
dnf install -y mimeo_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-mimeo   # PG 18
apt install -y postgresql-17-mimeo   # PG 17
apt install -y postgresql-16-mimeo   # PG 16
apt install -y postgresql-15-mimeo   # PG 15
apt install -y postgresql-14-mimeo   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION mimeo CASCADE;  -- 依赖: dblink
```
