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

