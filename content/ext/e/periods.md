---
title: "periods"
linkTitle: "periods"
description: "为 PERIODs 和 SYSTEM VERSIONING 提供标准 SQL 功能"
weight: 1030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/xocolatl/periods">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">xocolatl/periods</div>
    <div class="ext-card__desc">https://github.com/xocolatl/periods</div>
  </a>
  <a class="ext-card ext-card--source" href="periods-1.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">periods-1.2.3.tar.gz</div>
    <div class="ext-card__desc">periods-1.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`periods`**](/ext/e/periods) | `1.2.3` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1030  | [**`periods`**](/ext/e/periods) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`btree_gist`](/ext/e/btree_gist) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timescaledb`](/ext/e/timescaledb) [`timeseries`](/ext/e/timeseries) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`table_version`](/ext/e/table_version) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `periods` | `btree_gist` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `periods_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-periods` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 3 |
| el8.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 3 |
| el9.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 2 |
| el9.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 3 |
| el10.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 |
| el10.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 |
| d12.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| d12.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| d13.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| d13.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u22.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u22.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u24.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u24.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
@ el8.x86_64 18 periods_18 periods_18-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/periods_18-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 periods_18 periods_18-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/periods_18-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 periods_18 periods_18-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/periods_18-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 periods_18 periods_18-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/periods_18-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 periods_18 periods_18-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/periods_18-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 periods_18 periods_18-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/periods_18-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 47.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 45.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 periods_17 periods_17-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/periods_17-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 periods_17 periods_17-1.2.2-3PGDG.rhel8.x86_64.rpm pgdg 1.2.2 44.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/periods_17-1.2.2-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 periods_17 periods_17-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/periods_17-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 periods_17 periods_17-1.2.2-3PGDG.rhel8.aarch64.rpm pgdg 1.2.2 44.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/periods_17-1.2.2-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 periods_17 periods_17-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/periods_17-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 periods_17 periods_17-1.2.2-3PGDG.rhel9.x86_64.rpm pgdg 1.2.2 42.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/periods_17-1.2.2-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 periods_17 periods_17-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/periods_17-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 periods_17 periods_17-1.2.2-3PGDG.rhel9.aarch64.rpm pgdg 1.2.2 42.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/periods_17-1.2.2-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 periods_17 periods_17-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/periods_17-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 periods_17 periods_17-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/periods_17-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 periods_17 periods_17-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/periods_17-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 periods_17 periods_17-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/periods_17-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 47.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 50.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 periods_16 periods_16-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/periods_16-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 periods_16 periods_16-1.2.2-1.rhel8.1.x86_64.rpm pgdg 1.2.2 44.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/periods_16-1.2.2-1.rhel8.1.x86_64.rpm
@ el8.aarch64 16 periods_16 periods_16-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/periods_16-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 periods_16 periods_16-1.2.2-1.rhel8.1.aarch64.rpm pgdg 1.2.2 43.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/periods_16-1.2.2-1.rhel8.1.aarch64.rpm
@ el9.x86_64 16 periods_16 periods_16-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/periods_16-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 periods_16 periods_16-1.2.2-1.rhel9.1.x86_64.rpm pgdg 1.2.2 42.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/periods_16-1.2.2-1.rhel9.1.x86_64.rpm
@ el9.aarch64 16 periods_16 periods_16-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/periods_16-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 periods_16 periods_16-1.2.2-1.rhel9.1.aarch64.rpm pgdg 1.2.2 41.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/periods_16-1.2.2-1.rhel9.1.aarch64.rpm
@ el10.x86_64 16 periods_16 periods_16-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/periods_16-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 periods_16 periods_16-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/periods_16-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 periods_16 periods_16-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/periods_16-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 periods_16 periods_16-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/periods_16-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 47.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 49.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 periods_15 periods_15-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/periods_15-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 periods_15 periods_15-1.2.2-1.rhel8.x86_64.rpm pgdg 1.2.2 44.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/periods_15-1.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 periods_15 periods_15-1.2-2.rhel8.x86_64.rpm pgdg 1.2 60.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/periods_15-1.2-2.rhel8.x86_64.rpm
@ el8.aarch64 15 periods_15 periods_15-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/periods_15-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 periods_15 periods_15-1.2.2-1.rhel8.aarch64.rpm pgdg 1.2.2 43.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/periods_15-1.2.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 periods_15 periods_15-1.2-2.rhel8.aarch64.rpm pgdg 1.2 60.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/periods_15-1.2-2.rhel8.aarch64.rpm
@ el9.x86_64 15 periods_15 periods_15-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/periods_15-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 periods_15 periods_15-1.2.2-1.rhel9.x86_64.rpm pgdg 1.2.2 42.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/periods_15-1.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 periods_15 periods_15-1.2-2.rhel9.x86_64.rpm pgdg 1.2 59.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/periods_15-1.2-2.rhel9.x86_64.rpm
@ el9.aarch64 15 periods_15 periods_15-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/periods_15-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 periods_15 periods_15-1.2.2-1.rhel9.aarch64.rpm pgdg 1.2.2 41.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/periods_15-1.2.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 periods_15 periods_15-1.2-2.rhel9.aarch64.rpm pgdg 1.2 59.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/periods_15-1.2-2.rhel9.aarch64.rpm
@ el10.x86_64 15 periods_15 periods_15-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/periods_15-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 periods_15 periods_15-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/periods_15-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 periods_15 periods_15-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/periods_15-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 periods_15 periods_15-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/periods_15-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 49.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 periods_14 periods_14-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/periods_14-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 periods_14 periods_14-1.2.2-1.rhel8.x86_64.rpm pgdg 1.2.2 44.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/periods_14-1.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 periods_14 periods_14-1.2-2.rhel8.x86_64.rpm pgdg 1.2 61.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/periods_14-1.2-2.rhel8.x86_64.rpm
@ el8.aarch64 14 periods_14 periods_14-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/periods_14-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 periods_14 periods_14-1.2.2-1.rhel8.aarch64.rpm pgdg 1.2.2 43.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/periods_14-1.2.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 periods_14 periods_14-1.2-2.rhel8.aarch64.rpm pgdg 1.2 60.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/periods_14-1.2-2.rhel8.aarch64.rpm
@ el9.x86_64 14 periods_14 periods_14-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/periods_14-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 periods_14 periods_14-1.2.2-1.rhel9.x86_64.rpm pgdg 1.2.2 42.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/periods_14-1.2.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 periods_14 periods_14-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/periods_14-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 periods_14 periods_14-1.2.2-1.rhel9.aarch64.rpm pgdg 1.2.2 41.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/periods_14-1.2.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 periods_14 periods_14-1.2-2.rhel9.aarch64.rpm pgdg 1.2 59.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/periods_14-1.2-2.rhel9.aarch64.rpm
@ el10.x86_64 14 periods_14 periods_14-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/periods_14-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 periods_14 periods_14-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/periods_14-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 periods_14 periods_14-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/periods_14-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 periods_14 periods_14-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/periods_14-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 49.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `periods` 扩展的 RPM 包：

```bash
pig build pkg periods         # 构建 RPM 包
```


## 安装

您可以直接安装 `periods` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install periods;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y periods -v 18  # PG 18
pig ext install -y periods -v 17  # PG 17
pig ext install -y periods -v 16  # PG 16
pig ext install -y periods -v 15  # PG 15
pig ext install -y periods -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y periods_18       # PG 18
dnf install -y periods_17       # PG 17
dnf install -y periods_16       # PG 16
dnf install -y periods_15       # PG 15
dnf install -y periods_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-periods   # PG 18
apt install -y postgresql-17-periods   # PG 17
apt install -y postgresql-16-periods   # PG 16
apt install -y postgresql-15-periods   # PG 15
apt install -y postgresql-14-periods   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION periods CASCADE;  -- 依赖: btree_gist
```
