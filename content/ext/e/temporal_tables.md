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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/temporal_tables-1.2.2.tar.gz">
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
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/temporal_tables_18-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/temporal_tables_18-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/temporal_tables_18-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/temporal_tables_18-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/temporal_tables_18-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 temporal_tables_18 temporal_tables_18-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/temporal_tables_18-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 26.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 26.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-temporal-tables postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-18-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/temporal_tables_17-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/temporal_tables_17-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-4PGDG.rhel9.x86_64.rpm pgdg 1.2.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/temporal_tables_17-1.2.2-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/temporal_tables_17-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-4PGDG.rhel9.aarch64.rpm pgdg 1.2.2 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/temporal_tables_17-1.2.2-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/temporal_tables_17-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/temporal_tables_17-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/temporal_tables_17-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/temporal_tables_17-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 temporal_tables_17 temporal_tables_17-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/temporal_tables_17-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 31.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 30.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-temporal-tables postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-17-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2.2 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/temporal_tables_16-1.2.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/temporal_tables_16-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2.2 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/temporal_tables_16-1.2.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/temporal_tables_16-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/temporal_tables_16-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2.2 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/temporal_tables_16-1.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/temporal_tables_16-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2.2 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/temporal_tables_16-1.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/temporal_tables_16-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/temporal_tables_16-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/temporal_tables_16-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 temporal_tables_16 temporal_tables_16-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/temporal_tables_16-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 31.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 30.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-temporal-tables postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-16-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2.2 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/temporal_tables_15-1.2.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/temporal_tables_15-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2.2 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/temporal_tables_15-1.2.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/temporal_tables_15-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/temporal_tables_15-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2.2 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/temporal_tables_15-1.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/temporal_tables_15-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2.2 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/temporal_tables_15-1.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/temporal_tables_15-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/temporal_tables_15-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/temporal_tables_15-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 temporal_tables_15 temporal_tables_15-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/temporal_tables_15-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 31.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 30.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-temporal-tables postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-15-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2.2 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/temporal_tables_14-1.2.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/temporal_tables_14-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2.2 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/temporal_tables_14-1.2.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/temporal_tables_14-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/temporal_tables_14-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2.2 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/temporal_tables_14-1.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/temporal_tables_14-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2.2 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/temporal_tables_14-1.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-5PGDG.rhel10.x86_64.rpm pgdg 1.2.2 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/temporal_tables_14-1.2.2-5PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/temporal_tables_14-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-5PGDG.rhel10.aarch64.rpm pgdg 1.2.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/temporal_tables_14-1.2.2-5PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 temporal_tables_14 temporal_tables_14-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 18.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/temporal_tables_14-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 24.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 24.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 29.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 28.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-temporal-tables postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/temporal-tables/postgresql-14-temporal-tables_1.2.2-1PIGSTY~noble_arm64.deb
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



## 用法

> [temporal_tables: PostgreSQL 系统时段时态表](https://github.com/arkhipov/temporal_tables)

时态表（temporal table）是一种记录行有效时间段的表。系统时段（system period）是由系统自动维护的列（或列对），包含该行在数据库层面有效的时间范围。当你向这样的表中插入行时，系统会自动生成时段的起止值。当你更新或删除系统时段时态表中的行时，旧版本会自动归档到另一张表——即历史表（history table）。

更多用法可参考这篇[优秀教程](http://clarkdave.net/2015/02/historical-records-with-postgresql-and-temporal-tables-and-sql-2011/)。

### 创建系统时段时态表

该扩展使用一个通用触发器函数来维护系统时段时态表的行为：

```
versioning(<system_period_column_name>, <history_table_name>, <adjust>)
```

首先，创建一张表并添加系统时段列：

```sql
CREATE TABLE employees (
  name text NOT NULL PRIMARY KEY,
  department text,
  salary numeric(20, 2)
);

ALTER TABLE employees ADD COLUMN sys_period tstzrange NOT NULL;
```

然后创建历史表：

```sql
CREATE TABLE employees_history (LIKE employees);
```

历史表必须包含与原表同名、同类型的系统时段列。如果两张表都包含某列，则数据类型必须相同。

最后，创建触发器将其与历史表关联：

```sql
CREATE TRIGGER versioning_trigger
BEFORE INSERT OR UPDATE OR DELETE ON employees
FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period',
                                          'employees_history',
                                          true);
```


## 插入数据

向系统时段时态表插入数据与普通表类似：

```sql
INSERT INTO employees (name, department, salary)
VALUES ('Bernard Marx', 'Hatchery and Conditioning Centre', 10000);

INSERT INTO employees (name, department, salary)
VALUES ('Lenina Crowne', 'Hatchery and Conditioning Centre', 7000);
```

`sys_period` 列的起始值表示该行何时变为当前版本，由 `CURRENT_TIMESTAMP` 自动生成。


## 更新数据

当用户更新行时，触发器会将旧行的副本插入历史表。如果单个事务内对同一行进行了多次更新，只会生成一条历史记录：

```sql
UPDATE employees SET salary = 11200 WHERE name = 'Bernard Marx';
```

此时历史表包含之前的版本：

| name         | department                       | salary | sys_period              |
|--------------|----------------------------------|--------|-------------------------|
| Bernard Marx | Hatchery and Conditioning Centre | 10000  | [2006-08-08, 2007-02-27)|

### 更新冲突与时间调整

当多个事务更新同一行时，可能会发生更新冲突。当 `adjust` 参数设为 `true` 时，`sys_period` 的起始值会通过加上一个微小的时间增量（通常为 1 微秒）来避免冲突，否则会抛出 SQLSTATE 22000 错误。


## 删除数据

当用户删除数据时，触发器同样会将行添加到历史表：

```sql
DELETE FROM employees WHERE name = 'Helmholtz Watson';
```


## 高级用法

你可以为版本控制触发器设置自定义系统时间，这在从已记录时间戳的系统构建数据仓库时非常有用：

```sql
SELECT set_system_time('1985-08-08 06:42:00+08');
```

恢复默认行为：

```sql
SELECT set_system_time(NULL);
```

如果在随后被中止的事务中执行，所有更改都会撤销。如果已提交，更改将持续到会话结束。


## 示例与技巧

### 使用继承创建历史表

```sql
CREATE TABLE employees_history (
  name text NOT NULL,
  department text,
  salary numeric(20, 2),
  sys_period tstzrange NOT NULL
);

CREATE TABLE employees (PRIMARY KEY(name)) INHERITS (employees_history);
```

### 历史表清理

历史表会持续增长。以下是几种清理策略：

  1. 定期删除历史表中的旧数据。
  2. 使用分区，并将旧分区从历史表中分离。
  3. 仅保留每行的最近 N 个版本。
  4. 当时态表中的对应行被删除时，同步清理历史记录。
  5. 按业务规则清理符合条件的行。

你也可以将历史表设置到另一个表空间，将其迁移到更廉价的存储上。

### 数据审计

你可以添加触发器来记录修改或删除当前行的用户：

```sql
CREATE FUNCTION employees_modify()
RETURNS TRIGGER AS $$
BEGIN
  NEW.user_modified = SESSION_USER;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER employees_modify
BEFORE INSERT OR UPDATE ON employees
FOR EACH ROW EXECUTE PROCEDURE employees_modify();

CREATE FUNCTION employees_delete()
RETURNS TRIGGER AS $$
BEGIN
  NEW.user_deleted = SESSION_USER;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER employees_delete
BEFORE INSERT ON employees_history
FOR EACH ROW EXECUTE PROCEDURE employees_delete();
```
