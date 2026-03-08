---
title: "pg_background"
linkTitle: "pg_background"
description: "在后台运行 SQL 查询"
weight: 1100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vibhorkum/pg_background">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vibhorkum/pg_background</div>
    <div class="ext-card__desc">https://github.com/vibhorkum/pg_background</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_background-1.8.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_background-1.8.tar.gz</div>
    <div class="ext-card__desc">pg_background-1.8.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_background`**](/ext/e/pg_background) | `1.8` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1100  | [**`pg_background`**](/ext/e/pg_background) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_later`](/ext/e/pg_later) [`pgq`](/ext/e/pgq) [`timescaledb`](/ext/e/timescaledb) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.8` | {{< pgvers "18,17,16,15,14" >}} | `pg_background` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.8` | {{< pgvers "18,17,16,15,14" >}} | `pg_background_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.8` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-background` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 4 | AVAIL PGDG 1.6 3 |
| el8.aarch64 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 4 | AVAIL PGDG 1.8 4 | AVAIL PGDG 1.8 5 | AVAIL PGDG 1.8 4 |
| el9.x86_64 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 4 | AVAIL PGDG 1.8 4 | AVAIL PGDG 1.8 5 | AVAIL PGDG 1.8 4 |
| el9.aarch64 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 4 | AVAIL PGDG 1.8 4 | AVAIL PGDG 1.8 5 | AVAIL PGDG 1.8 4 |
| el10.x86_64 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 |
| el10.aarch64 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 | AVAIL PGDG 1.8 3 |
| d12.x86_64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| d12.aarch64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| d13.x86_64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| d13.aarch64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| u22.x86_64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| u22.aarch64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| u24.x86_64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
| u24.aarch64 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 1 |
@ el8.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 22.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 22.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 22.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 22.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel10.x86_64.rpm pgdg 1.5 23.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel10.aarch64.rpm pgdg 1.5 22.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 76.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 82.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 81.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 79.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2 20.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2 19.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel9.x86_64.rpm pgdg 1.2 20.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel9.aarch64.rpm pgdg 1.2 19.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 75.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 19.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 76.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 19.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.0-1.rhel9.x86_64.rpm pgdg 1.0 40.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 19.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.0-1.rhel9.aarch64.rpm pgdg 1.0 39.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 75.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 19.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.0-1.rhel9.aarch64.rpm pgdg 1.0 39.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 76.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 76.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 75.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_background` 扩展的 DEB 包：

```bash
pig build pkg pg_background         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_background` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_background;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_background -v 18  # PG 18
pig ext install -y pg_background -v 17  # PG 17
pig ext install -y pg_background -v 16  # PG 16
pig ext install -y pg_background -v 15  # PG 15
pig ext install -y pg_background -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_background_18       # PG 18
dnf install -y pg_background_17       # PG 17
dnf install -y pg_background_16       # PG 16
dnf install -y pg_background_15       # PG 15
dnf install -y pg_background_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-background   # PG 18
apt install -y postgresql-17-pg-background   # PG 17
apt install -y postgresql-16-pg-background   # PG 16
apt install -y postgresql-15-pg-background   # PG 15
apt install -y postgresql-14-pg-background   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_background;
```
