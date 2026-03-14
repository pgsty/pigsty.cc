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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_background-1.8.tar.gz">
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
@ el8.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 22.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 22.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel10.x86_64.rpm pgdg 1.5 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel10.aarch64.rpm pgdg 1.5 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 76.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 82.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 79.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel9.x86_64.rpm pgdg 1.2 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel9.aarch64.rpm pgdg 1.2 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 75.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 76.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.0-1.rhel9.x86_64.rpm pgdg 1.0 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.0-1.rhel9.aarch64.rpm pgdg 1.0 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 77.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 75.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.8-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.8-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.0-1.rhel9.aarch64.rpm pgdg 1.0 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.8-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.3-3PGDG.rhel10.x86_64.rpm pgdg 1.3 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.8 76.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.8 75.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~trixie_amd64.deb pigsty 1.8 76.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~trixie_arm64.deb pigsty 1.8 75.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~jammy_amd64.deb pigsty 1.8 87.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~jammy_arm64.deb pigsty 1.8 85.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~noble_amd64.deb pigsty 1.8 79.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.8-1PIGSTY~noble_arm64.deb pigsty 1.8 78.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-14-pg-background_1.8-1PIGSTY~noble_arm64.deb
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



## 用法

> [pg_background: 在后台工作进程中执行 SQL](https://github.com/vibhorkum/pg_background)

在 PostgreSQL 的**后台工作进程**中执行任意 SQL 命令。与 `dblink`（创建独立连接）不同，`pg_background` 的工作进程运行在数据库服务器**内部**，使用**独立事务**。

**使用场景：**
- 后台维护（VACUUM、ANALYZE、REINDEX）
- 异步审计日志记录
- 长时间运行的 ETL 管道
- 独立的通知发送
- 并行查询模式

### 快速开始（V2 API）

```sql
CREATE EXTENSION pg_background;

-- 启动后台任务
SELECT * FROM pg_background_launch_v2(
  'SELECT count(*) FROM large_table'
) AS handle;
--   pid  |      cookie
-- -------+-------------------
--  12345 | 1234567890123456

-- 获取结果（一次性消费）
SELECT * FROM pg_background_result_v2(12345, 1234567890123456) AS (count BIGINT);

-- 即发即忘（不需要结果）
SELECT * FROM pg_background_submit_v2(
  'INSERT INTO audit_log (ts, event) VALUES (now(), ''system_check'')'
) AS handle;
```


## V2 API 参考

| 函数 | 返回值 | 说明 |
|------|--------|------|
| `pg_background_launch_v2(sql, queue_size)` | `pg_background_handle` | 启动工作进程，返回 cookie 保护的句柄 |
| `pg_background_submit_v2(sql, queue_size)` | `pg_background_handle` | 即发即忘（不消费结果） |
| `pg_background_result_v2(pid, cookie)` | `SETOF record` | 获取结果（一次性消费） |
| `pg_background_detach_v2(pid, cookie)` | `void` | 停止跟踪工作进程（进程继续运行） |
| `pg_background_cancel_v2(pid, cookie)` | `void` | 请求取消 |
| `pg_background_cancel_v2_grace(pid, cookie, grace_ms)` | `void` | 带宽限期的取消 |
| `pg_background_wait_v2(pid, cookie)` | `void` | 阻塞等待工作进程完成 |
| `pg_background_wait_v2_timeout(pid, cookie, timeout_ms)` | `bool` | 带超时的等待 |
| `pg_background_list_v2()` | `SETOF record` | 列出当前会话中已知的工作进程 |
| `pg_background_stats_v2()` | `pg_background_stats` | 会话统计信息（v1.8+） |
| `pg_background_progress(pct, msg)` | `void` | 从工作进程中报告进度（v1.8+） |
| `pg_background_get_progress_v2(pid, cookie)` | `pg_background_progress` | 获取工作进程进度（v1.8+） |

### 取消与分离

| 操作 | 停止执行 | 移除跟踪 |
|------|----------|----------|
| `cancel_v2()` | 是（尽力） | 否 |
| `detach_v2()` | 否 | 是 |

- 使用 **`cancel_v2()`** 来**停止任务**（终止执行，阻止提交）
- 使用 **`detach_v2()`** 来**停止跟踪**（释放簿记资源，工作进程继续运行）

### 工作进程生命周期

```sql
-- 取消运行中的任务
SELECT pg_background_cancel_v2(pid, cookie);

-- 等待完成
SELECT pg_background_wait_v2(pid, cookie);

-- 带超时等待（完成则返回 true）
SELECT pg_background_wait_v2_timeout(pid, cookie, 5000);

-- 列出活跃的工作进程
SELECT * FROM pg_background_list_v2() AS (
  pid int4, cookie int8, launched_at timestamptz,
  user_id oid, queue_size int4, state text,
  sql_preview text, last_error text, consumed bool
);
```

工作进程状态：`running`、`stopped`、`canceled`、`error`

### 进度报告（v1.8+）

```sql
-- 在工作进程 SQL 内部调用
SELECT pg_background_progress(50, 'Halfway done');

-- 从启动方查看进度
SELECT * FROM pg_background_get_progress_v2(pid, cookie);
```


## GUC 配置（v1.8+）

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `pg_background.max_workers` | 16 | 每个会话的最大并发工作进程数 |
| `pg_background.default_queue_size` | 65536 | 默认共享内存队列大小 |
| `pg_background.worker_timeout` | 0 | 工作进程执行超时（0 = 无限制） |


## V1 API（遗留）

V1 API 保留用于向后兼容，但缺少基于 cookie 的 PID 重用保护：

```sql
SELECT pg_background_launch('VACUUM VERBOSE my_table') AS pid \gset
SELECT * FROM pg_background_result(:pid) AS (result TEXT);
SELECT pg_background_detach(:pid);
```

生产环境建议使用 V2 API，因其具备基于 cookie 的 PID 重用保护。


## 安全模型

- 扩展由超级用户安装，默认**不授予 PUBLIC 权限**
- 会创建一个专用的 `pg_background_worker` NOLOGIN 角色
- 辅助函数管理权限：`grant_pg_background_privileges(role, include_v1)`
- 工作进程以**启动用户**（而非超级用户）身份执行
