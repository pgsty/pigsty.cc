---
title: "pglogical"
linkTitle: "pglogical"
description: "PostgreSQL逻辑复制：三方扩展实现"
weight: 9500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/2ndQuadrant/pglogical">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">2ndQuadrant/pglogical</div>
    <div class="ext-card__desc">https://github.com/2ndQuadrant/pglogical</div>
  </a>
  <a class="ext-card ext-card--source" href="pglogical-2.4.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglogical-2.4.6.tar.gz</div>
    <div class="ext-card__desc">pglogical-2.4.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglogical`**](/ext/e/pglogical) | `2.4.6` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9500  | [**`pglogical`**](/ext/e/pglogical) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglogical` |
| 9501  | [**`pglogical_origin`**](/ext/e/pglogical_origin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglogical_origin` |
{.ext-table}

| **相关扩展** | [`decoderbufs`](/ext/e/decoderbufs) [`wal2json`](/ext/e/wal2json) [`dblink`](/ext/e/dblink) [`postgres_fdw`](/ext/e/postgres_fdw) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`repmgr`](/ext/e/repmgr) [`kafka_fdw`](/ext/e/kafka_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`pglogical_ticker`](/ext/e/pglogical_ticker) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `pglogical` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `pglogical_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglogical` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 4 |
| el8.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 2 |
| el9.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 3 |
| el9.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 2 |
| el10.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 |
| el10.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 |
| d12.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| d12.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| d13.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| d13.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u22.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u22.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u24.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u24.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
@ el8.x86_64 18 pglogical_18 pglogical_18-2.4.6-1PGDG.rhel8.x86_64.rpm pgdg 2.4.6 154.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pglogical_18-2.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pglogical_18 pglogical_18-2.4.6-1PGDG.rhel8.aarch64.rpm pgdg 2.4.6 148.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pglogical_18-2.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pglogical_18 pglogical_18-2.4.6-1PGDG.rhel9.x86_64.rpm pgdg 2.4.6 146.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pglogical_18-2.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pglogical_18 pglogical_18-2.4.6-1PGDG.rhel9.aarch64.rpm pgdg 2.4.6 143.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pglogical_18-2.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pglogical_18 pglogical_18-2.4.6-1PGDG.rhel10.x86_64.rpm pgdg 2.4.6 148.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pglogical_18-2.4.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pglogical_18 pglogical_18-2.4.6-1PGDG.rhel10.aarch64.rpm pgdg 2.4.6 145.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pglogical_18-2.4.6-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg12+1_amd64.deb pgdg 2.4.6 345.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg12+1_arm64.deb pgdg 2.4.6 336.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg13+1_amd64.deb pgdg 2.4.6 346.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg13+1_arm64.deb pgdg 2.4.6 337.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb pgdg 2.4.6 357.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb pgdg 2.4.6 345.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb pgdg 2.4.6 344.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pglogical postgresql-18-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb pgdg 2.4.6 335.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-18-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pglogical_17 pglogical_17-2.4.5-1PGDG.rhel8.x86_64.rpm pgdg 2.4.5 153.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pglogical_17-2.4.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pglogical_17 pglogical_17-2.4.5-1PGDG.rhel8.aarch64.rpm pgdg 2.4.5 147.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pglogical_17-2.4.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pglogical_17 pglogical_17-2.4.5-1PGDG.rhel9.x86_64.rpm pgdg 2.4.5 146.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pglogical_17-2.4.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pglogical_17 pglogical_17-2.4.5-1PGDG.rhel9.aarch64.rpm pgdg 2.4.5 143.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pglogical_17-2.4.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pglogical_17 pglogical_17-2.4.5-3PGDG.rhel10.x86_64.rpm pgdg 2.4.5 148.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pglogical_17-2.4.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pglogical_17 pglogical_17-2.4.5-3PGDG.rhel10.aarch64.rpm pgdg 2.4.5 144.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pglogical_17-2.4.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg12+1_amd64.deb pgdg 2.4.6 345.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg12+1_arm64.deb pgdg 2.4.6 336.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg13+1_amd64.deb pgdg 2.4.6 346.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg13+1_arm64.deb pgdg 2.4.6 337.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb pgdg 2.4.6 434.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb pgdg 2.4.6 422.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb pgdg 2.4.6 344.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pglogical postgresql-17-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb pgdg 2.4.6 334.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-17-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pglogical_16 pglogical_16-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 152.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pglogical_16-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pglogical_16 pglogical_16-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 145.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pglogical_16-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pglogical_16 pglogical_16-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 146.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pglogical_16-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pglogical_16 pglogical_16-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 143.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pglogical_16-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pglogical_16 pglogical_16-2.4.5-3PGDG.rhel10.x86_64.rpm pgdg 2.4.5 148.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pglogical_16-2.4.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pglogical_16 pglogical_16-2.4.5-3PGDG.rhel10.aarch64.rpm pgdg 2.4.5 144.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pglogical_16-2.4.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg12+1_amd64.deb pgdg 2.4.6 344.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg12+1_arm64.deb pgdg 2.4.6 334.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg13+1_amd64.deb pgdg 2.4.6 345.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg13+1_arm64.deb pgdg 2.4.6 336.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb pgdg 2.4.6 431.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb pgdg 2.4.6 419.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb pgdg 2.4.6 343.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pglogical postgresql-16-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb pgdg 2.4.6 334.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-16-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pglogical_15 pglogical_15-2.4.3-1.rhel8.x86_64.rpm pgdg 2.4.3 153.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pglogical_15-2.4.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pglogical_15 pglogical_15-2.4.2-1.rhel8.x86_64.rpm pgdg 2.4.2 152.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pglogical_15-2.4.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pglogical_15 pglogical_15-2.4.3-1.rhel8.aarch64.rpm pgdg 2.4.3 146.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pglogical_15-2.4.3-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pglogical_15 pglogical_15-2.4.2-1.rhel8.aarch64.rpm pgdg 2.4.2 145.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pglogical_15-2.4.2-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pglogical_15 pglogical_15-2.4.3-1.rhel9.x86_64.rpm pgdg 2.4.3 150.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pglogical_15-2.4.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pglogical_15 pglogical_15-2.4.2-1.rhel9.x86_64.rpm pgdg 2.4.2 150.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pglogical_15-2.4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pglogical_15 pglogical_15-2.4.3-1.rhel9.aarch64.rpm pgdg 2.4.3 146.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pglogical_15-2.4.3-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pglogical_15 pglogical_15-2.4.2-1.rhel9.aarch64.rpm pgdg 2.4.2 146.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pglogical_15-2.4.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pglogical_15 pglogical_15-2.4.5-3PGDG.rhel10.x86_64.rpm pgdg 2.4.5 151.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pglogical_15-2.4.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pglogical_15 pglogical_15-2.4.5-3PGDG.rhel10.aarch64.rpm pgdg 2.4.5 149.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pglogical_15-2.4.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg12+1_amd64.deb pgdg 2.4.6 346.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg12+1_arm64.deb pgdg 2.4.6 335.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg13+1_amd64.deb pgdg 2.4.6 348.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg13+1_arm64.deb pgdg 2.4.6 336.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb pgdg 2.4.6 436.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb pgdg 2.4.6 424.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb pgdg 2.4.6 347.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pglogical postgresql-15-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb pgdg 2.4.6 336.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-15-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pglogical_14 pglogical_14-2.4.3-1.rhel8.x86_64.rpm pgdg 2.4.3 151.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pglogical_14-2.4.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pglogical_14 pglogical_14-2.4.2-1.rhel8.x86_64.rpm pgdg 2.4.2 150.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pglogical_14-2.4.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pglogical_14 pglogical_14-2.4.1-1.rhel8.x86_64.rpm pgdg 2.4.1 150.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pglogical_14-2.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pglogical_14 pglogical_14-2.4.0-1.rhel8.x86_64.rpm pgdg 2.4.0 149.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pglogical_14-2.4.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pglogical_14 pglogical_14-2.4.3-1.rhel8.aarch64.rpm pgdg 2.4.3 145.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pglogical_14-2.4.3-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pglogical_14 pglogical_14-2.4.2-1.rhel8.aarch64.rpm pgdg 2.4.2 144.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pglogical_14-2.4.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pglogical_14 pglogical_14-2.4.3-1.rhel9.x86_64.rpm pgdg 2.4.3 150.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pglogical_14-2.4.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pglogical_14 pglogical_14-2.4.2-1.rhel9.x86_64.rpm pgdg 2.4.2 150.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pglogical_14-2.4.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pglogical_14 pglogical_14-2.4.1-1.rhel9.x86_64.rpm pgdg 2.4.1 149.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pglogical_14-2.4.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pglogical_14 pglogical_14-2.4.3-1.rhel9.aarch64.rpm pgdg 2.4.3 145.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pglogical_14-2.4.3-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pglogical_14 pglogical_14-2.4.2-1.rhel9.aarch64.rpm pgdg 2.4.2 145.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pglogical_14-2.4.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pglogical_14 pglogical_14-2.4.5-3PGDG.rhel10.x86_64.rpm pgdg 2.4.5 151.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pglogical_14-2.4.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pglogical_14 pglogical_14-2.4.5-3PGDG.rhel10.aarch64.rpm pgdg 2.4.5 148.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pglogical_14-2.4.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg12+1_amd64.deb pgdg 2.4.6 347.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg12+1_arm64.deb pgdg 2.4.6 335.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg13+1_amd64.deb pgdg 2.4.6 347.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg13+1_arm64.deb pgdg 2.4.6 336.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb pgdg 2.4.6 434.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb pgdg 2.4.6 423.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb pgdg 2.4.6 347.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pglogical postgresql-14-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb pgdg 2.4.6 336.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pglogical/postgresql-14-pglogical_2.4.6-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pglogical` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pglogical;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pglogical -v 18  # PG 18
pig ext install -y pglogical -v 17  # PG 17
pig ext install -y pglogical -v 16  # PG 16
pig ext install -y pglogical -v 15  # PG 15
pig ext install -y pglogical -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pglogical_18       # PG 18
dnf install -y pglogical_17       # PG 17
dnf install -y pglogical_16       # PG 16
dnf install -y pglogical_15       # PG 15
dnf install -y pglogical_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pglogical   # PG 18
apt install -y postgresql-17-pglogical   # PG 17
apt install -y postgresql-16-pglogical   # PG 16
apt install -y postgresql-15-pglogical   # PG 15
apt install -y postgresql-14-pglogical   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pglogical';
```


**创建扩展**：

```sql
CREATE EXTENSION pglogical;
```



## 用法

> [pglogical: PostgreSQL 逻辑复制](https://github.com/2ndQuadrant/pglogical)

使用发布/订阅模型的 PostgreSQL 逻辑复制系统。无需触发器或外部程序。

### 启用

添加到 `postgresql.conf`：

```ini
wal_level = 'logical'
max_worker_processes = 10
max_replication_slots = 10
max_wal_senders = 10
shared_preload_libraries = 'pglogical'
```

```sql
CREATE EXTENSION pglogical;
```

### 提供者（发布者）设置

```sql
-- 在提供者上创建节点
SELECT pglogical.create_node(
    node_name := 'provider1',
    dsn := 'host=providerhost port=5432 dbname=mydb'
);

-- 将 public 模式中所有表添加到默认复制集
SELECT pglogical.replication_set_add_all_tables('default', ARRAY['public']);

-- 添加 public 模式中所有序列
SELECT pglogical.replication_set_add_all_sequences('default', ARRAY['public']);
```

### 订阅者设置

```sql
-- 在订阅者上创建节点
SELECT pglogical.create_node(
    node_name := 'subscriber1',
    dsn := 'host=subscriberhost port=5432 dbname=mydb'
);

-- 创建到提供者的订阅
SELECT pglogical.create_subscription(
    subscription_name := 'subscription1',
    provider_dsn := 'host=providerhost port=5432 dbname=mydb'
);
```

### 复制集管理

```sql
-- 创建自定义复制集
SELECT pglogical.create_replication_set('my_set');

-- 添加特定表
SELECT pglogical.replication_set_add_table('my_set', 'my_table', true);

-- 移除表
SELECT pglogical.replication_set_remove_table('my_set', 'my_table');
```

### 行和列过滤

```sql
-- 行过滤：仅复制匹配条件的行
SELECT pglogical.replication_set_add_table(
    set_name := 'default',
    relation := 'my_table',
    row_filter := 'id > 1000'
);

-- 列过滤：仅复制特定列
SELECT pglogical.replication_set_add_table(
    set_name := 'default',
    relation := 'my_table',
    columns := '{id, name, updated_at}'
);
```

### 订阅管理

```sql
-- 检查订阅状态
SELECT * FROM pglogical.show_subscription_status();

-- 删除订阅
SELECT pglogical.drop_subscription('subscription1');
```

### 关键特性

- 选择性复制（按表、行过滤、列过滤）
- 不同 PostgreSQL 主版本之间的复制
- 延迟复制
- 订阅者无需超级用户
