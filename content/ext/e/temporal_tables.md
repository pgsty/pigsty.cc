---
title: "temporal_tables"
linkTitle: "temporal_tables"
description: "时态表功能支持"
weight: 1040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgxn.org/dist/temporal_tables/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgxn.org/dist/temporal_tables/</div>
    <div class="ext-card__desc">https://pgxn.org/dist/temporal_tables/</div>
  </a>
  <a class="ext-card ext-card--source" href="temporal_tables-1.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">temporal_tables-1.2.2.tar.gz</div>
    <div class="ext-card__desc">temporal_tables-1.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`temporal_tables`**](/ext/e/temporal_tables) | `1.2.2` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1040  | [**`temporal_tables`**](/ext/e/temporal_tables) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timescaledb`](/ext/e/timescaledb) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) [`emaj`](/ext/e/emaj) [`table_version`](/ext/e/table_version) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg17 on el8/9 pgdg repo


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15,14" >}} | `temporal_tables` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15,14" >}} | `temporal_tables_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-temporal-tables` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 |
| el8.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 |
| el9.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PGDG 1.2.2 2 | AVAIL PIGSTY 1.2.2 2 | AVAIL PIGSTY 1.2.2 2 | AVAIL PIGSTY 1.2.2 2 |
| el9.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PGDG 1.2.2 2 | AVAIL PIGSTY 1.2.2 2 | AVAIL PIGSTY 1.2.2 2 | AVAIL PIGSTY 1.2.2 2 |
| el10.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 |
| el10.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 | AVAIL PGDG 1.2.2 2 |
| d12.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
@ el8.x86_64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/temporal_tables_18-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/temporal_tables_18-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/temporal_tables_18-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/temporal_tables_18-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/temporal_tables_18-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/temporal_tables_18-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 26.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 26.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/temporal_tables_17-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/temporal_tables_17-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-4PGDG.rhel9.x86_64.rpm pgdg 1.2.2 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/temporal_tables_17-1.2.2-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/temporal_tables_17-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-4PGDG.rhel9.aarch64.rpm pgdg 1.2.2 23.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/temporal_tables_17-1.2.2-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/temporal_tables_17-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/temporal_tables_17-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/temporal_tables_17-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/temporal_tables_17-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/temporal_tables_17-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 31.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 30.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2.2 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/temporal_tables_16-1.2.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/temporal_tables_16-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2.2 23.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/temporal_tables_16-1.2.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/temporal_tables_16-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/temporal_tables_16-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2.2 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/temporal_tables_16-1.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/temporal_tables_16-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2.2 22.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/temporal_tables_16-1.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/temporal_tables_16-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/temporal_tables_16-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/temporal_tables_16-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/temporal_tables_16-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 31.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 30.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2.2 23.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/temporal_tables_15-1.2.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/temporal_tables_15-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2.2 23.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/temporal_tables_15-1.2.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/temporal_tables_15-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/temporal_tables_15-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2.2 23.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/temporal_tables_15-1.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/temporal_tables_15-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2.2 22.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/temporal_tables_15-1.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/temporal_tables_15-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/temporal_tables_15-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/temporal_tables_15-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/temporal_tables_15-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 31.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 30.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2.2 23.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/temporal_tables_14-1.2.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/temporal_tables_14-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2.2 23.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/temporal_tables_14-1.2.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/temporal_tables_14-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/temporal_tables_14-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2.2 23.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/temporal_tables_14-1.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/temporal_tables_14-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2.2 22.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/temporal_tables_14-1.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/temporal_tables_14-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/temporal_tables_14-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/temporal_tables_14-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/temporal_tables_14-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 29.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 28.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `temporal_tables` 扩展的 RPM / DEB 包：

```bash
pig build pkg temporal_tables         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `temporal_tables` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install temporal_tables;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y temporal_tables -v 18  # PG 18
pig ext install -y temporal_tables -v 17  # PG 17
pig ext install -y temporal_tables -v 16  # PG 16
pig ext install -y temporal_tables -v 15  # PG 15
pig ext install -y temporal_tables -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y temporal_tables_18       # PG 18
dnf install -y temporal_tables_17       # PG 17
dnf install -y temporal_tables_16       # PG 16
dnf install -y temporal_tables_15       # PG 15
dnf install -y temporal_tables_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-temporal-tables   # PG 18
apt install -y postgresql-17-temporal-tables   # PG 17
apt install -y postgresql-16-temporal-tables   # PG 16
apt install -y postgresql-15-temporal-tables   # PG 15
apt install -y postgresql-14-temporal-tables   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION temporal_tables;
```
