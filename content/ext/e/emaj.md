---
title: "emaj"
linkTitle: "emaj"
description: "让数据库的子集具有细粒度日志和时间旅行功能"
weight: 1050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dalibo/emaj">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dalibo/emaj</div>
    <div class="ext-card__desc">https://github.com/dalibo/emaj</div>
  </a>
  <a class="ext-card ext-card--source" href="emaj-4.7.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">emaj-4.7.1.tar.gz</div>
    <div class="ext-card__desc">emaj-4.7.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`emaj`**](/ext/e/emaj) | `4.7.1` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1050  | [**`emaj`**](/ext/e/emaj) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `emaj` |
{.ext-table}

| **相关扩展** | [`dblink`](/ext/e/dblink) [`btree_gist`](/ext/e/btree_gist) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timescaledb`](/ext/e/timescaledb) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`table_version`](/ext/e/table_version) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) [`timeseries`](/ext/e/timeseries) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> max_prepared_transactions


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `emaj` | `dblink`, `btree_gist` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `e-maj_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-emaj` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.7.1 1 | AVAIL PGDG 4.7.1 4 | AVAIL PGDG 4.7.1 9 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 10 |
| el8.aarch64 | AVAIL PGDG 4.7.1 1 | AVAIL PGDG 4.7.1 4 | AVAIL PGDG 4.7.1 9 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 10 |
| el9.x86_64 | AVAIL PGDG 4.7.1 1 | AVAIL PGDG 4.7.1 4 | AVAIL PGDG 4.7.1 9 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 10 |
| el9.aarch64 | AVAIL PGDG 4.7.1 1 | AVAIL PGDG 4.7.1 4 | AVAIL PGDG 4.7.1 9 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 10 |
| el10.x86_64 | AVAIL PGDG 4.7.1 1 | AVAIL PGDG 4.7.1 3 | AVAIL PGDG 4.7.1 3 | AVAIL PGDG 4.7.1 3 | AVAIL PGDG 4.7.1 3 |
| el10.aarch64 | AVAIL PGDG 4.7.1 1 | AVAIL PGDG 4.7.1 3 | AVAIL PGDG 4.7.1 3 | AVAIL PGDG 4.7.1 3 | AVAIL PGDG 4.7.1 3 |
| d12.x86_64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| d12.aarch64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| d13.x86_64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| d13.aarch64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| u22.x86_64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| u22.aarch64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| u24.x86_64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
| u24.aarch64 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 | AVAIL PIGSTY 4.7.1 1 |
@ el8.x86_64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~trixie_amd64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~trixie_arm64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~jammy_amd64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~jammy_arm64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~noble_amd64.deb pigsty 4.7.1 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-emaj postgresql-18-emaj_4.7.1-1PIGSTY~noble_arm64.deb pigsty 4.7.1 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-18-emaj_4.7.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~trixie_amd64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~trixie_arm64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~jammy_amd64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~jammy_arm64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~noble_amd64.deb pigsty 4.7.1 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-emaj postgresql-17-emaj_4.7.1-1PIGSTY~noble_arm64.deb pigsty 4.7.1 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-17-emaj_4.7.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.x86_64.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.2.0-1.rhel8.x86_64.rpm pgdg 4.2.0 4.5MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.aarch64.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.2.0-1.rhel8.aarch64.rpm pgdg 4.2.0 4.5MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.x86_64.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.2.0-1.rhel9.x86_64.rpm pgdg 4.2.0 4.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.aarch64.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.2.0-1.rhel9.aarch64.rpm pgdg 4.2.0 4.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~trixie_amd64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~trixie_arm64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~jammy_amd64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~jammy_arm64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~noble_amd64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-emaj postgresql-16-emaj_4.7.1-1PIGSTY~noble_arm64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-16-emaj_4.7.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.x86_64.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.2.0-1.rhel8.x86_64.rpm pgdg 4.2.0 4.5MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.1.0-1.rhel8.x86_64.rpm pgdg 4.1.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.aarch64.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.2.0-1.rhel8.aarch64.rpm pgdg 4.2.0 4.5MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.1.0-1.rhel8.aarch64.rpm pgdg 4.1.0 4.6MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.x86_64.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.2.0-1.rhel9.x86_64.rpm pgdg 4.2.0 4.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.1.0-1.rhel9.x86_64.rpm pgdg 4.1.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.aarch64.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.2.0-1.rhel9.aarch64.rpm pgdg 4.2.0 4.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.1.0-1.rhel9.aarch64.rpm pgdg 4.1.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~trixie_amd64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~trixie_arm64.deb pigsty 4.7.1 213.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~jammy_amd64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~jammy_arm64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~noble_amd64.deb pigsty 4.7.1 194.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-emaj postgresql-15-emaj_4.7.1-1PIGSTY~noble_arm64.deb pigsty 4.7.1 194.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-15-emaj_4.7.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.x86_64.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.2.0-1.rhel8.x86_64.rpm pgdg 4.2.0 4.5MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.1.0-1.rhel8.x86_64.rpm pgdg 4.1.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.aarch64.rpm pgdg 4.3.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.2.0-1.rhel8.aarch64.rpm pgdg 4.2.0 4.5MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.1.0-1.rhel8.aarch64.rpm pgdg 4.1.0 4.6MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.x86_64.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.2.0-1.rhel9.x86_64.rpm pgdg 4.2.0 4.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.1.0-1.rhel9.x86_64.rpm pgdg 4.1.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.aarch64.rpm pgdg 4.3.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.2.0-1.rhel9.aarch64.rpm pgdg 4.2.0 4.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.1.0-1.rhel9.aarch64.rpm pgdg 4.1.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~trixie_amd64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~trixie_arm64.deb pigsty 4.7.1 214.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~jammy_amd64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~jammy_arm64.deb pigsty 4.7.1 193.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~noble_amd64.deb pigsty 4.7.1 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-emaj postgresql-14-emaj_4.7.1-1PIGSTY~noble_arm64.deb pigsty 4.7.1 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/e/emaj/postgresql-14-emaj_4.7.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `emaj` 扩展的 DEB 包：

```bash
pig build pkg emaj         # 构建 DEB 包
```


## 安装

您可以直接安装 `emaj` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install emaj;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y emaj -v 18  # PG 18
pig ext install -y emaj -v 17  # PG 17
pig ext install -y emaj -v 16  # PG 16
pig ext install -y emaj -v 15  # PG 15
pig ext install -y emaj -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y e-maj_18       # PG 18
dnf install -y e-maj_17       # PG 17
dnf install -y e-maj_16       # PG 16
dnf install -y e-maj_15       # PG 15
dnf install -y e-maj_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-emaj   # PG 18
apt install -y postgresql-17-emaj   # PG 17
apt install -y postgresql-16-emaj   # PG 16
apt install -y postgresql-15-emaj   # PG 15
apt install -y postgresql-14-emaj   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION emaj CASCADE;  -- 依赖: dblink, btree_gist
```
