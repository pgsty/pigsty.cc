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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_task-2.1.29.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_task-2.1.29.tar.gz</div>
    <div class="ext-card__desc">pg_task-2.1.29.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_task`**](/ext/e/pg_task) | `2.1.29` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.29` | {{< pgvers "18,17,16,15,14" >}} | `pg_task` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.29` | {{< pgvers "18,17,16,15,14" >}} | `pg_task_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.29` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-task` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 |
| el8.aarch64 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 |
| el9.x86_64 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 |
| el9.aarch64 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 | AVAIL PIGSTY 2.1.29 3 |
| el10.x86_64 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 |
| el10.aarch64 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 | AVAIL PIGSTY 2.1.29 2 |
| d12.x86_64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| u26.x86_64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
| u26.aarch64 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 | AVAIL PIGSTY 2.1.29 1 |
@ el8.x86_64 18 pg_task_18 pg_task_18-2.1.29-1PIGSTY.el8.x86_64.rpm pigsty 2.1.29 54.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_task_18-2.1.29-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel8.x86_64.rpm pgdg 2.1.7 72.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_task_18-2.1.7-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_task_18 pg_task_18-2.1.29-1PIGSTY.el8.aarch64.rpm pigsty 2.1.29 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_task_18-2.1.29-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_task_18-2.1.7-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_task_18 pg_task_18-2.1.29-1PIGSTY.el9.x86_64.rpm pigsty 2.1.29 54.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_task_18-2.1.29-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel9.x86_64.rpm pgdg 2.1.7 63.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_task_18-2.1.7-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_task_18 pg_task_18-2.1.29-1PIGSTY.el9.aarch64.rpm pigsty 2.1.29 52.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_task_18-2.1.29-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel9.aarch64.rpm pgdg 2.1.7 54.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_task_18-2.1.7-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_task_18 pg_task_18-2.1.29-1PIGSTY.el10.x86_64.rpm pigsty 2.1.29 54.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_task_18-2.1.29-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 59.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_task_18-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_task_18 pg_task_18-2.1.29-1PIGSTY.el10.aarch64.rpm pigsty 2.1.29 52.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_task_18-2.1.29-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_task_18 pg_task_18-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 56.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_task_18-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb pigsty 2.1.29 38.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb pigsty 2.1.29 35.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb pigsty 2.1.29 38.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb pigsty 2.1.29 35.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb pigsty 2.1.29 42.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb pigsty 2.1.29 41.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~noble_amd64.deb pigsty 2.1.29 41.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~noble_arm64.deb pigsty 2.1.29 39.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb pigsty 2.1.29 41.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-task postgresql-18-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb pigsty 2.1.29 39.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-18-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_task_17 pg_task_17-2.1.29-1PIGSTY.el8.x86_64.rpm pigsty 2.1.29 54.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_task_17-2.1.29-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 72.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_task_17-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_task_17 pg_task_17-2.1.29-1PIGSTY.el8.aarch64.rpm pigsty 2.1.29 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_task_17-2.1.29-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_task_17-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_task_17 pg_task_17-2.1.29-1PIGSTY.el9.x86_64.rpm pigsty 2.1.29 54.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_task_17-2.1.29-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 63.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_task_17-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_task_17 pg_task_17-2.1.29-1PIGSTY.el9.aarch64.rpm pigsty 2.1.29 52.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_task_17-2.1.29-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_task_17 pg_task_17-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 54.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_task_17-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_task_17 pg_task_17-2.1.29-1PIGSTY.el10.x86_64.rpm pigsty 2.1.29 54.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_task_17-2.1.29-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_task_17 pg_task_17-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 59.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_task_17-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_task_17 pg_task_17-2.1.29-1PIGSTY.el10.aarch64.rpm pigsty 2.1.29 52.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_task_17-2.1.29-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_task_17 pg_task_17-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 56.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_task_17-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb pigsty 2.1.29 38.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb pigsty 2.1.29 35.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb pigsty 2.1.29 38.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb pigsty 2.1.29 35.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb pigsty 2.1.29 42.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb pigsty 2.1.29 40.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~noble_amd64.deb pigsty 2.1.29 41.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~noble_arm64.deb pigsty 2.1.29 39.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb pigsty 2.1.29 41.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-task postgresql-17-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb pigsty 2.1.29 39.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-17-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_task_16 pg_task_16-2.1.29-1PIGSTY.el8.x86_64.rpm pigsty 2.1.29 54.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_task_16-2.1.29-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 72.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_task_16-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 72.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_task_16-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_task_16 pg_task_16-2.1.29-1PIGSTY.el8.aarch64.rpm pigsty 2.1.29 49.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_task_16-2.1.29-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_task_16-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 63.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_task_16-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_task_16 pg_task_16-2.1.29-1PIGSTY.el9.x86_64.rpm pigsty 2.1.29 54.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_task_16-2.1.29-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 62.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_task_16-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 62.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_task_16-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_task_16 pg_task_16-2.1.29-1PIGSTY.el9.aarch64.rpm pigsty 2.1.29 52.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_task_16-2.1.29-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_task_16 pg_task_16-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_task_16-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_task_16 pg_task_16-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 53.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_task_16-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_task_16 pg_task_16-2.1.29-1PIGSTY.el10.x86_64.rpm pigsty 2.1.29 54.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_task_16-2.1.29-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_task_16 pg_task_16-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 58.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_task_16-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_task_16 pg_task_16-2.1.29-1PIGSTY.el10.aarch64.rpm pigsty 2.1.29 52.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_task_16-2.1.29-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_task_16 pg_task_16-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 55.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_task_16-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb pigsty 2.1.29 38.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb pigsty 2.1.29 35.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb pigsty 2.1.29 38.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb pigsty 2.1.29 35.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb pigsty 2.1.29 42.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb pigsty 2.1.29 40.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~noble_amd64.deb pigsty 2.1.29 41.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~noble_arm64.deb pigsty 2.1.29 39.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb pigsty 2.1.29 41.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-task postgresql-16-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb pigsty 2.1.29 39.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-16-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_task_15 pg_task_15-2.1.29-1PIGSTY.el8.x86_64.rpm pigsty 2.1.29 55.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_task_15-2.1.29-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_task_15-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 73.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_task_15-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_task_15 pg_task_15-2.1.29-1PIGSTY.el8.aarch64.rpm pigsty 2.1.29 50.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_task_15-2.1.29-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 64.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_task_15-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 63.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_task_15-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_task_15 pg_task_15-2.1.29-1PIGSTY.el9.x86_64.rpm pigsty 2.1.29 56.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_task_15-2.1.29-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 75.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_task_15-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 75.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_task_15-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_task_15 pg_task_15-2.1.29-1PIGSTY.el9.aarch64.rpm pigsty 2.1.29 54.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_task_15-2.1.29-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_task_15 pg_task_15-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 68.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_task_15-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_task_15 pg_task_15-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 68.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_task_15-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_task_15 pg_task_15-2.1.29-1PIGSTY.el10.x86_64.rpm pigsty 2.1.29 56.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_task_15-2.1.29-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_task_15 pg_task_15-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 72.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_task_15-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_task_15 pg_task_15-2.1.29-1PIGSTY.el10.aarch64.rpm pigsty 2.1.29 54.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_task_15-2.1.29-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_task_15 pg_task_15-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 69.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_task_15-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb pigsty 2.1.29 39.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb pigsty 2.1.29 36.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb pigsty 2.1.29 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb pigsty 2.1.29 36.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb pigsty 2.1.29 43.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb pigsty 2.1.29 41.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~noble_amd64.deb pigsty 2.1.29 41.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~noble_arm64.deb pigsty 2.1.29 40.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb pigsty 2.1.29 42.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-task postgresql-15-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb pigsty 2.1.29 40.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-15-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_task_14 pg_task_14-2.1.29-1PIGSTY.el8.x86_64.rpm pigsty 2.1.29 55.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_task_14-2.1.29-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel8.x86_64.rpm pgdg 2.1.7 73.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_task_14-2.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 72.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_task_14-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_task_14 pg_task_14-2.1.29-1PIGSTY.el8.aarch64.rpm pigsty 2.1.29 50.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_task_14-2.1.29-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel8.aarch64.rpm pgdg 2.1.7 63.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_task_14-2.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 63.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_task_14-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_task_14 pg_task_14-2.1.29-1PIGSTY.el9.x86_64.rpm pigsty 2.1.29 56.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_task_14-2.1.29-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel9.x86_64.rpm pgdg 2.1.7 74.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_task_14-2.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 74.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_task_14-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_task_14 pg_task_14-2.1.29-1PIGSTY.el9.aarch64.rpm pigsty 2.1.29 54.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_task_14-2.1.29-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_task_14 pg_task_14-2.1.7-1PGDG.rhel9.aarch64.rpm pgdg 2.1.7 68.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_task_14-2.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_task_14 pg_task_14-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 68.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_task_14-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_task_14 pg_task_14-2.1.29-1PIGSTY.el10.x86_64.rpm pigsty 2.1.29 56.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_task_14-2.1.29-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_task_14 pg_task_14-2.1.7-3PGDG.rhel10.x86_64.rpm pgdg 2.1.7 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_task_14-2.1.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_task_14 pg_task_14-2.1.29-1PIGSTY.el10.aarch64.rpm pigsty 2.1.29 54.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_task_14-2.1.29-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_task_14 pg_task_14-2.1.7-3PGDG.rhel10.aarch64.rpm pgdg 2.1.7 69.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_task_14-2.1.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb pigsty 2.1.29 39.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb pigsty 2.1.29 36.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb pigsty 2.1.29 40.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb pigsty 2.1.29 36.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb pigsty 2.1.29 43.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb pigsty 2.1.29 41.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~noble_amd64.deb pigsty 2.1.29 41.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~noble_arm64.deb pigsty 2.1.29 40.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb pigsty 2.1.29 42.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-task postgresql-14-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb pigsty 2.1.29 40.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-task/postgresql-14-pg-task_2.1.29-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_task` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_task         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_task` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
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

> 来源：[pg_task upstream README](https://github.com/RekGRpth/pg_task)、[PGXN pg_task](https://pgxn.org/dist/pg_task/)、[local metadata](../db/extension.csv)。

`pg_task` 是一个后台工作进程调度器，用于在计划时间异步执行 SQL。上游文档说明它支持 PostgreSQL、Greenplum 和 Greengage。

在服务器启动时启用 worker，然后在拥有任务表的数据库中创建扩展：

```conf
shared_preload_libraries = 'pg_task'
```

```sql
CREATE EXTENSION pg_task;
```

### 调度任务

通过向配置的任务表插入行来调度工作。默认情况下，任务表是 `postgres` 数据库中的 `public.task`，除非通过 GUC 修改。

```sql
-- Run SQL immediately
INSERT INTO task (input) VALUES ('SELECT now()');

-- Run SQL after 5 minutes
INSERT INTO task (plan, input) VALUES (now() + '5 min'::interval, 'SELECT now()');

-- Run SQL at a specific time
INSERT INTO task (plan, input) VALUES ('2029-07-01 12:51:00', 'SELECT now()');

-- Repeat SQL every 5 minutes
INSERT INTO task (repeat, input) VALUES ('5 min', 'SELECT now()');

-- Exceptions are caught and written to the error column
INSERT INTO task (input) VALUES ('SELECT 1/0');

-- Limit concurrent tasks in a group.
-- max = 1 means one task at a time for this group.
INSERT INTO task ("group", max, input) VALUES ('billing', 1, 'SELECT refresh_billing_cache()');

-- Run SQL on a remote database
INSERT INTO task (input, remote) VALUES ('SELECT now()', 'user=user host=host');
```

### 任务表

任务表是面向用户可见的。上游说明用户可以为它添加列，也可以对它分区。

关键列：

| 名称 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| id | bigserial | autoincrement | 主键 |
| parent | bigint | pg_task.id | 父任务 ID |
| plan | timestamptz | statement_timestamp() | 计划开始时间 |
| start | timestamptz | | 实际开始时间 |
| stop | timestamptz | | 实际结束时间 |
| active | interval | 1 hour | 计划时间后任务仍可执行的活跃时段 |
| live | interval | 0 sec | 后台工作进程最长存活时间 |
| repeat | interval | 0 sec | 自动重复间隔 |
| timeout | interval | 0 sec | 任务运行允许的时间 |
| count | int | 0 | worker 退出前的最大任务数 |
| max | int | 0 | 分组内最大并发任务数；负值表示任务之间的暂停毫秒数 |
| pid | int | | 执行任务的进程 ID |
| state | enum | PLAN | PLAN、TAKE、WORK、DONE、STOP |
| delete | bool | true | 当 output 和 error 为空时自动删除 |
| drift | bool | false | 根据 stop 时间计算下一次重复 |
| header | bool | true | 在输出中显示列标题 |
| group | text | 'group' | 任务分组名称 |
| input | text | | 要执行的 SQL 命令 |
| output | text | | 接收到的结果 |
| error | text | | 捕获的错误 |
| remote | text | | 远程数据库连接字符串 |

### 配置

关键设置：

| 名称 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| pg_task.delete | bool | true | 自动删除已完成任务 |
| pg_task.drift | bool | false | 根据 stop 时间计算重复 |
| pg_task.header | bool | true | 在任务输出中显示列标题 |
| pg_task.string | bool | true | 输出中仅为字符串加引号 |
| pg_task.count | int | 0 | worker 退出前默认最多执行的任务数 |
| pg_task.fetch | int | 100 | 一次抓取的任务行数 |
| pg_task.limit | int | 1000 | 一次处理的任务行限制 |
| pg_task.max | int | 0 | 分组内默认最大并发任务数 |
| pg_task.run | int | 2147483647 | work 中最多同时执行的任务数 |
| pg_task.sleep | int | 1000 | 每 N 毫秒检查一次任务 |
| pg_task.active | interval | 1 hour | 计划时间后任务仍可执行的活跃时段 |
| pg_task.live | interval | 0 sec | worker 进程最长存活时间 |
| pg_task.repeat | interval | 0 sec | 默认重复间隔 |
| pg_task.timeout | interval | 0 sec | 默认任务超时 |
| pg_task.data | text | postgres | 任务表所在数据库名 |
| pg_task.user | text | postgres | 任务表所用用户名 |
| pg_task.schema | text | public | 任务表所在 schema |
| pg_task.table | text | task | 任务表名 |
| pg_task.json | json | `[{"data":"postgres"}]` | 多数据库配置 |
| pg_task.id | bigint | 0 | 当前任务 ID，只读会话设置 |

### 多数据库配置

通过 JSON 配置在多个数据库上运行任务：

```conf
pg_task.json = '[{"data":"database1"},{"data":"database2","user":"username2"},{"data":"database3","schema":"schema3"}]'
```

如果指定的数据库、用户、schema 或表不存在，`pg_task` 会创建它们。

本地元数据将该包标记为 `headless`，因此它依赖 `shared_preload_libraries`，而不是纯 SQL 的用户侧安装路径。把它用于关键作业前，请在目标 PostgreSQL 版本上验证后台调度行为。
