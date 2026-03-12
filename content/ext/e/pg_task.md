---
title: "pg_task"
linkTitle: "pg_task"
description: "在特定时间点在后台执行SQL命令"
weight: 1080
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RekGRpth/pg_task">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RekGRpth/pg_task</div>
    <div class="ext-card__desc">https://github.com/RekGRpth/pg_task</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_task-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_task-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_task-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_task`**](/ext/e/pg_task) | `1.0.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1080  | [**`pg_task`**](/ext/e/pg_task) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`timescaledb`](/ext/e/timescaledb) [`pg_cron`](/ext/e/pg_cron) [`pg_later`](/ext/e/pg_later) [`pg_background`](/ext/e/pg_background) [`pg_partman`](/ext/e/pg_partman) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> breaks on many systems


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_task` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_task_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.12` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-task` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 |
| el8.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 |
| el9.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 |
| el9.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 | AVAIL PGDG 2.1.7 2 |
| el10.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| el10.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| d12.x86_64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 | AVAIL PIGSTY 2.1.12 1 |
@ el8.x86_64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel8.x86_64.rpm pgdg 2.1.7 72.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_task_18-2.1.7-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_task_18-2.1.7-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel9.x86_64.rpm pgdg 2.1.7 63.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_task_18-2.1.7-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel9.aarch64.rpm pgdg 2.1.7 54.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_task_18-2.1.7-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 59.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_task_18-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 56.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_task_18-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb pigsty 2.1.12 192.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb pigsty 2.1.12 182.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb pigsty 2.1.12 191.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb pigsty 2.1.12 184.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb pigsty 2.1.12 201.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb pigsty 2.1.12 190.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~noble_amd64.deb pigsty 2.1.12 193.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.12-1PIGSTY~noble_arm64.deb pigsty 2.1.12 183.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-18-pg-task_2.1.12-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 72.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_task_17-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_task_17-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 63.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_task_17-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 54.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_task_17-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_task_17 pg_task_17-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 59.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_task_17-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_task_17 pg_task_17-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 56.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_task_17-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb pigsty 2.1.12 192.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb pigsty 2.1.12 183.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb pigsty 2.1.12 192.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb pigsty 2.1.12 185.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb pigsty 2.1.12 229.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb pigsty 2.1.12 219.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~noble_amd64.deb pigsty 2.1.12 193.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.12-1PIGSTY~noble_arm64.deb pigsty 2.1.12 184.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-17-pg-task_2.1.12-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 72.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_task_16-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 72.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_task_16-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_task_16-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 63.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_task_16-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 62.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_task_16-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 62.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_task_16-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 53.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_task_16-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 53.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_task_16-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_task_16 pg_task_16-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 58.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_task_16-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_task_16 pg_task_16-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 55.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_task_16-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb pigsty 2.1.12 192.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb pigsty 2.1.12 183.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb pigsty 2.1.12 191.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb pigsty 2.1.12 184.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb pigsty 2.1.12 226.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb pigsty 2.1.12 216.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~noble_amd64.deb pigsty 2.1.12 193.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.12-1PIGSTY~noble_arm64.deb pigsty 2.1.12 183.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-16-pg-task_2.1.12-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 73.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_task_15-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 73.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_task_15-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 64.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_task_15-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 63.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_task_15-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 75.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_task_15-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 75.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_task_15-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 68.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_task_15-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 68.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_task_15-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_task_15 pg_task_15-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 72.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_task_15-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_task_15 pg_task_15-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 69.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_task_15-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb pigsty 2.1.12 193.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb pigsty 2.1.12 183.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb pigsty 2.1.12 192.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb pigsty 2.1.12 184.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb pigsty 2.1.12 236.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb pigsty 2.1.12 229.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~noble_amd64.deb pigsty 2.1.12 202.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.12-1PIGSTY~noble_arm64.deb pigsty 2.1.12 195.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-15-pg-task_2.1.12-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 73.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_task_14-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 72.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_task_14-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_task_14-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 63.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_task_14-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 74.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_task_14-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 74.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_task_14-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 68.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_task_14-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 68.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_task_14-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_task_14 pg_task_14-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 72.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_task_14-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_task_14 pg_task_14-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 69.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_task_14-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb pigsty 2.1.12 192.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb pigsty 2.1.12 182.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb pigsty 2.1.12 191.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb pigsty 2.1.12 183.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb pigsty 2.1.12 232.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb pigsty 2.1.12 224.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~noble_amd64.deb pigsty 2.1.12 201.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.12-1PIGSTY~noble_arm64.deb pigsty 2.1.12 195.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-task/postgresql-14-pg-task_2.1.12-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_task` 扩展的 DEB 包：

```bash
pig build pkg pg_task         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_task` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_task;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_task -v 18  # PG 18
pig ext install -y pg_task -v 17  # PG 17
pig ext install -y pg_task -v 16  # PG 16
pig ext install -y pg_task -v 15  # PG 15
pig ext install -y pg_task -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_task_18       # PG 18
dnf install -y pg_task_17       # PG 17
dnf install -y pg_task_16       # PG 16
dnf install -y pg_task_15       # PG 15
dnf install -y pg_task_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-task   # PG 18
apt install -y postgresql-17-pg-task   # PG 17
apt install -y postgresql-16-pg-task   # PG 16
apt install -y postgresql-15-pg-task   # PG 15
apt install -y postgresql-14-pg-task   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_task';
```




## 用法

> [pg_task: PostgreSQL 任务调度器](https://github.com/RekGRpth/pg_task)

`pg_task` 允许在后台异步地在任意指定时间执行任意 SQL 命令。支持 PostgreSQL、Greenplum 和 Greengage。

首先在 `postgresql.conf` 中添加：

```conf
shared_preload_libraries = 'pg_task'
```

然后通过向 `task` 表插入记录来调度任务：

```sql
-- 立即执行 SQL
INSERT INTO task (input) VALUES ('SELECT now()');

-- 5 分钟后执行 SQL
INSERT INTO task (plan, input) VALUES (now() + '5 min'::INTERVAL, 'SELECT now()');

-- 在指定时间执行 SQL
INSERT INTO task (plan, input) VALUES ('2029-07-01 12:51:00', 'SELECT now()');

-- 每 5 分钟重复执行 SQL
INSERT INTO task (repeat, input) VALUES ('5 min', 'SELECT now()');

-- 异常会被捕获并写入 error 列
INSERT INTO task (input) VALUES ('SELECT 1/0');

-- 限制同一组内的并发任务数
INSERT INTO task (group, max, input) VALUES ('group', 1, 'SELECT now()');

-- 在远程数据库上执行 SQL
INSERT INTO task (input, remote) VALUES ('SELECT now()', 'user=user host=host');
```


## 任务表列定义

| 列名 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| id | bigserial | 自增 | 主键 |
| parent | bigint | pg_task.id | 父任务 ID |
| plan | timestamptz | statement_timestamp() | 计划执行时间 |
| start | timestamptz | | 实际开始时间 |
| stop | timestamptz | | 实际结束时间 |
| active | interval | 1 hour | 计划时间后任务保持活跃的时段 |
| live | interval | 0 sec | 后台工作进程最大存活时间 |
| repeat | interval | 0 sec | 自动重复间隔 |
| timeout | interval | 0 sec | 任务执行允许的最大时间 |
| count | int | 0 | 工作进程退出前的最大任务数 |
| max | int | 0 | 同一组内最大并发任务数 |
| pid | int | | 执行任务的进程 ID |
| state | enum | PLAN | PLAN、TAKE、WORK、DONE、STOP |
| delete | bool | true | 当 output 和 error 为空时自动删除 |
| drift | bool | false | 根据结束时间计算下次重复时间 |
| header | bool | true | 在输出中显示列标题 |
| group | text | 'group' | 任务分组名称 |
| input | text | | 要执行的 SQL 命令 |
| output | text | | 接收到的结果 |
| error | text | | 捕获的错误 |
| remote | text | | 远程数据库连接字符串 |

你可以在此表上添加任意所需的列和/或创建分区。


## 配置参数（GUC）

关键设置：

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| pg_task.data | text | postgres | 任务表所在数据库名 |
| pg_task.user | text | postgres | 任务表所用用户名 |
| pg_task.schema | text | public | 任务表所在模式名 |
| pg_task.table | text | task | 任务表名 |
| pg_task.sleep | int | 1000 | 每 N 毫秒检查一次任务 |
| pg_task.delete | bool | true | 自动删除已完成任务 |
| pg_task.drift | bool | false | 根据结束时间计算重复间隔 |
| pg_task.repeat | interval | 0 sec | 默认重复间隔 |
| pg_task.timeout | interval | 0 sec | 默认任务超时 |
| pg_task.max | int | 0 | 默认组内最大并发任务数 |
| pg_task.run | int | 2147483647 | 最大并发执行任务数 |
| pg_task.json | json | [{"data":"postgres"}] | 多数据库配置 |

### 多数据库配置

通过 JSON 配置在多个数据库上运行任务：

```conf
pg_task.json = '[{"data":"database1"},{"data":"database2","user":"username2"},{"data":"database3","schema":"schema3"}]'
```

如果指定的数据库、用户、模式或表不存在，`pg_task` 会自动创建它们。
