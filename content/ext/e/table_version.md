---
title: "table_version"
linkTitle: "table_version"
description: "PostgreSQL 版本控制表扩展"
weight: 1060
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/linz/postgresql-tableversion">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">linz/postgresql-tableversion</div>
    <div class="ext-card__desc">https://github.com/linz/postgresql-tableversion</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresql-tableversion-1.11.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresql-tableversion-1.11.1.tar.gz</div>
    <div class="ext-card__desc">postgresql-tableversion-1.11.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`table_version`**](/ext/e/table_version) | `1.11.1` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1060  | [**`table_version`**](/ext/e/table_version) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `table_version` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`pg_cron`](/ext/e/pg_cron) [`timescaledb`](/ext/e/timescaledb) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`pg_task`](/ext/e/pg_task) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.11.1` | {{< pgvers "18,17,16,15,14" >}} | `table_version` | `plpgsql` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.1` | {{< pgvers "18,17,16,15,14" >}} | `table_version_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-table-version` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 3 | AVAIL PIGSTY 1.11.1 3 | AVAIL PIGSTY 1.11.1 3 |
| el8.aarch64 | AVAIL PGDG 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 |
| el9.x86_64 | AVAIL PGDG 1.11.1 2 | AVAIL PIGSTY 1.11.1 3 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 |
| el9.aarch64 | AVAIL PGDG 1.11.1 2 | AVAIL PIGSTY 1.11.1 3 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 | AVAIL PIGSTY 1.11.1 2 |
| el10.x86_64 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 |
| el10.aarch64 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 | AVAIL PGDG 1.11.1 2 |
| d12.x86_64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 | AVAIL PIGSTY 1.11.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 table_version_18 table_version_18-1.11.1-2PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/table_version_18-1.11.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 18 table_version_18 table_version_18-1.11.1-1PIGSTY.el8.x86_64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_version_18-1.11.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 table_version_18 table_version_18-1.11.1-2PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/table_version_18-1.11.1-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 table_version_18 table_version_18-1.11.1-1PIGSTY.el8.aarch64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_version_18-1.11.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 table_version_18 table_version_18-1.11.1-2PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/table_version_18-1.11.1-2PGDG.rhel9.noarch.rpm
@ el9.x86_64 18 table_version_18 table_version_18-1.11.1-1PIGSTY.el9.x86_64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_version_18-1.11.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 table_version_18 table_version_18-1.11.1-2PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/table_version_18-1.11.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 table_version_18 table_version_18-1.11.1-1PIGSTY.el9.aarch64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_version_18-1.11.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 table_version_18 table_version_18-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/table_version_18-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.x86_64 18 table_version_18 table_version_18-1.11.1-1PIGSTY.el10.x86_64.rpm pigsty 1.11.1 31.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_version_18-1.11.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 table_version_18 table_version_18-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/table_version_18-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 table_version_18 table_version_18-1.11.1-1PIGSTY.el10.aarch64.rpm pigsty 1.11.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_version_18-1.11.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~trixie_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~trixie_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~jammy_amd64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~jammy_arm64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~noble_amd64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-table-version postgresql-18-table-version_1.11.1-1PIGSTY~noble_arm64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-18-table-version_1.11.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 table_version_17 table_version_17-1.11.1-1PIGSTY.el8.x86_64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_version_17-1.11.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 table_version_17 table_version_17-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/table_version_17-1.11.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 table_version_17 table_version_17-1.11.1-1PIGSTY.el8.aarch64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_version_17-1.11.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 table_version_17 table_version_17-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/table_version_17-1.11.1-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 table_version_17 table_version_17-1.11.1-1PIGSTY.el9.x86_64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_version_17-1.11.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 table_version_17 table_version_17-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/table_version_17-1.11.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 table_version_17 table_version_17-1.10.3-3PGDG.rhel9.noarch.rpm pgdg 1.10.3 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/table_version_17-1.10.3-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 table_version_17 table_version_17-1.11.1-1PIGSTY.el9.aarch64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_version_17-1.11.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 table_version_17 table_version_17-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/table_version_17-1.11.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 table_version_17 table_version_17-1.10.3-3PGDG.rhel9.noarch.rpm pgdg 1.10.3 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/table_version_17-1.10.3-3PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 table_version_17 table_version_17-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/table_version_17-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 table_version_17 table_version_17-1.11.1-1PIGSTY.el10.x86_64.rpm pigsty 1.11.1 31.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_version_17-1.11.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 table_version_17 table_version_17-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/table_version_17-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 table_version_17 table_version_17-1.11.1-1PIGSTY.el10.aarch64.rpm pigsty 1.11.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_version_17-1.11.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb pigsty 1.11.1 28.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb pigsty 1.11.1 28.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~trixie_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~trixie_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~jammy_amd64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~jammy_arm64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~noble_amd64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-table-version postgresql-17-table-version_1.11.1-1PIGSTY~noble_arm64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-17-table-version_1.11.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 table_version_16 table_version_16-1.11.1-1PIGSTY.el8.x86_64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_version_16-1.11.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 table_version_16 table_version_16-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/table_version_16-1.11.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 table_version_16 table_version_16-1.10.3-3PGDG.rhel8.x86_64.rpm pgdg 1.10.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/table_version_16-1.10.3-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 table_version_16 table_version_16-1.11.1-1PIGSTY.el8.aarch64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_version_16-1.11.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 table_version_16 table_version_16-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/table_version_16-1.11.1-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 table_version_16 table_version_16-1.11.1-1PIGSTY.el9.x86_64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_version_16-1.11.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 table_version_16 table_version_16-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/table_version_16-1.11.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 table_version_16 table_version_16-1.11.1-1PIGSTY.el9.aarch64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_version_16-1.11.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 table_version_16 table_version_16-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/table_version_16-1.11.1-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 table_version_16 table_version_16-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/table_version_16-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 table_version_16 table_version_16-1.11.1-1PIGSTY.el10.x86_64.rpm pigsty 1.11.1 31.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_version_16-1.11.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 table_version_16 table_version_16-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/table_version_16-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 table_version_16 table_version_16-1.11.1-1PIGSTY.el10.aarch64.rpm pigsty 1.11.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_version_16-1.11.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~trixie_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~trixie_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~jammy_amd64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~jammy_arm64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~noble_amd64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-table-version postgresql-16-table-version_1.11.1-1PIGSTY~noble_arm64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-16-table-version_1.11.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 table_version_15 table_version_15-1.11.1-1PIGSTY.el8.x86_64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_version_15-1.11.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 table_version_15 table_version_15-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/table_version_15-1.11.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 table_version_15 table_version_15-1.10.3-1.rhel8.x86_64.rpm pgdg 1.10.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/table_version_15-1.10.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 table_version_15 table_version_15-1.11.1-1PIGSTY.el8.aarch64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_version_15-1.11.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 table_version_15 table_version_15-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/table_version_15-1.11.1-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 table_version_15 table_version_15-1.11.1-1PIGSTY.el9.x86_64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_version_15-1.11.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 table_version_15 table_version_15-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/table_version_15-1.11.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 table_version_15 table_version_15-1.11.1-1PIGSTY.el9.aarch64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_version_15-1.11.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 table_version_15 table_version_15-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/table_version_15-1.11.1-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 table_version_15 table_version_15-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/table_version_15-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 table_version_15 table_version_15-1.11.1-1PIGSTY.el10.x86_64.rpm pigsty 1.11.1 31.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_version_15-1.11.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 table_version_15 table_version_15-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/table_version_15-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 table_version_15 table_version_15-1.11.1-1PIGSTY.el10.aarch64.rpm pigsty 1.11.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_version_15-1.11.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~trixie_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~trixie_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~jammy_amd64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~jammy_arm64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~noble_amd64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-table-version postgresql-15-table-version_1.11.1-1PIGSTY~noble_arm64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-15-table-version_1.11.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 table_version_14 table_version_14-1.11.1-1PIGSTY.el8.x86_64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_version_14-1.11.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 table_version_14 table_version_14-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/table_version_14-1.11.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 table_version_14 table_version_14-1.9.0-1.rhel8.x86_64.rpm pgdg 1.9.0 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/table_version_14-1.9.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 table_version_14 table_version_14-1.11.1-1PIGSTY.el8.aarch64.rpm pigsty 1.11.1 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_version_14-1.11.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 table_version_14 table_version_14-1.11.1-1PGDG.rhel8.noarch.rpm pgdg 1.11.1 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/table_version_14-1.11.1-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 table_version_14 table_version_14-1.11.1-1PIGSTY.el9.x86_64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_version_14-1.11.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 table_version_14 table_version_14-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/table_version_14-1.11.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 table_version_14 table_version_14-1.11.1-1PIGSTY.el9.aarch64.rpm pigsty 1.11.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_version_14-1.11.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 table_version_14 table_version_14-1.11.1-1PGDG.rhel9.noarch.rpm pgdg 1.11.1 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/table_version_14-1.11.1-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 table_version_14 table_version_14-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/table_version_14-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 table_version_14 table_version_14-1.11.1-1PIGSTY.el10.x86_64.rpm pigsty 1.11.1 31.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_version_14-1.11.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 table_version_14 table_version_14-1.11.1-2PGDG.rhel10.noarch.rpm pgdg 1.11.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/table_version_14-1.11.1-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 table_version_14 table_version_14-1.11.1-1PIGSTY.el10.aarch64.rpm pigsty 1.11.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_version_14-1.11.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb pigsty 1.11.1 28.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb pigsty 1.11.1 28.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~trixie_amd64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~trixie_arm64.deb pigsty 1.11.1 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~jammy_amd64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~jammy_arm64.deb pigsty 1.11.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~noble_amd64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-table-version postgresql-14-table-version_1.11.1-1PIGSTY~noble_arm64.deb pigsty 1.11.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/table-version/postgresql-14-table-version_1.11.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `table_version` 扩展的 DEB 包：

```bash
pig build pkg table_version         # 构建 DEB 包
```


## 安装

您可以直接安装 `table_version` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install table_version;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y table_version -v 18  # PG 18
pig ext install -y table_version -v 17  # PG 17
pig ext install -y table_version -v 16  # PG 16
pig ext install -y table_version -v 15  # PG 15
pig ext install -y table_version -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y table_version_18       # PG 18
dnf install -y table_version_17       # PG 17
dnf install -y table_version_16       # PG 16
dnf install -y table_version_15       # PG 15
dnf install -y table_version_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-table-version   # PG 18
apt install -y postgresql-17-table-version   # PG 17
apt install -y postgresql-16-table-version   # PG 16
apt install -y postgresql-15-table-version   # PG 15
apt install -y postgresql-14-table-version   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION table_version CASCADE;  -- 依赖: plpgsql
```



## 用法

> [table_version: PostgreSQL 表版本控制扩展](https://github.com/linz/postgresql-tableversion)

PostgreSQL 表版本控制扩展，记录行的修改及其历史。该扩展提供 API 用于获取表在特定版本的快照，以及任意两个版本之间的差异。它基于 PL/PgSQL 触发器系统来记录和访问行版本。

### 快速开始

```sql
CREATE EXTENSION table_version;

CREATE SCHEMA foo;
SET search_path TO foo, public;

CREATE TABLE foo.bar (
    id INTEGER NOT NULL PRIMARY KEY,
    baz TEXT
);

-- 启用版本控制
SELECT table_version.ver_enable_versioning('foo', 'bar');

-- 创建版本并插入数据
SELECT table_version.ver_create_revision('Insert data');
INSERT INTO foo.bar (id, baz) VALUES
  (1, 'foo bar 1'),
  (2, 'foo bar 2'),
  (3, 'foo bar 3');
SELECT table_version.ver_complete_revision();

-- 查看两个版本之间的差异
SELECT * FROM table_version.ver_get_foo_bar_diff(1001, 1002);
```


## 工作原理

启用表版本控制后，原始表数据保持不变，系统会创建一张新的版本表，包含原表所有字段加上 `_revision_created` 和 `_revision_expired` 字段。原表上会设置行级触发器，记录每一次插入、更新和删除到版本数据表中。同时设置语句级触发器，禁止 TRUNCATE 操作。

### 表的前置条件

- 表必须有唯一的非复合 integer、bigint、text 或 varchar 列
- 表不能是临时表


## 自动版本

如果你不想显式调用 `ver_create_revision` 和 `ver_complete_revision`，自动版本模式会按事务对编辑进行分组：

```sql
SELECT table_version.ver_enable_versioning('foo', 'bar');

BEGIN;
INSERT INTO foo.bar (id, baz) VALUES (1, 'foo bar 1');
INSERT INTO foo.bar (id, baz) VALUES (2, 'foo bar 2');
COMMIT;

BEGIN;
UPDATE foo.bar SET baz = 'foo bar 1 edit' WHERE id = 1;
COMMIT;

SELECT * FROM table_version.foo_bar_revision;
```

版本消息会根据事务 ID 自动创建。


## 使用表差异复制数据

要在远程系统上维护一份表数据的副本：

```sql
-- 1. 确定哪些表已启用版本控制
SELECT * FROM table_version.ver_get_versioned_tables();

-- 2. 获取基准版本
SELECT table_version.ver_get_table_base_revision('foo', 'bar');

-- 3. 创建基准快照
CREATE TABLE foo_bar_copy AS
SELECT * FROM table_version.ver_get_foo_bar_revision(
    table_version.ver_get_table_base_revision('foo', 'bar')
);

-- 4. 获取差异以进行增量更新
SELECT * FROM table_version.ver_get_foo_bar_diff(
    my_last_revision,
    table_version.ver_get_table_last_revision('foo', 'bar')
);
```


## 安全模型

- 任何人都可以创建版本
- 版本只能由其创建者完成
- 只有拥有表所有权权限的人才能启用/禁用版本控制
- 只有空版本可以被删除
- 只有版本创建者才能删除该版本

注意：禁用表的版本控制会导致该表的所有历史记录被删除。


## 主要函数

| 函数 | 说明 |
|------|------|
| `ver_enable_versioning(schema, table)` | 启用表的版本控制 |
| `ver_disable_versioning(schema, table)` | 禁用版本控制并删除历史 |
| `ver_create_revision(comment)` | 创建新版本 |
| `ver_complete_revision()` | 标记当前版本为已完成 |
| `ver_get_<schema>_<table>_diff(rev1, rev2)` | 获取两个版本之间的差异 |
| `ver_get_<schema>_<table>_revision(rev)` | 获取特定版本的快照 |
| `ver_get_versioned_tables()` | 列出所有已版本控制的表 |
| `ver_get_last_revision()` | 获取最后的版本号 |
