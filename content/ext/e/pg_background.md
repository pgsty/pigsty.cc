---
title: "pg_background"
linkTitle: "pg_background"
description: "在后台运行 SQL 查询"
weight: 1110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vibhorkum/pg_background">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vibhorkum/pg_background</div>
    <div class="ext-card__desc">https://github.com/vibhorkum/pg_background</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_background-2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_background-2.0.tar.gz</div>
    <div class="ext-card__desc">pg_background-2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_background`**](/ext/e/pg_background) | `2.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1110  | [**`pg_background`**](/ext/e/pg_background) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_later`](/ext/e/pg_later) [`pgq`](/ext/e/pgq) [`timescaledb`](/ext/e/timescaledb) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_background` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_background_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-background` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.0.2 8 | AVAIL PGDG 2.0.2 9 | AVAIL PGDG 2.0.2 9 | AVAIL PGDG 2.0.2 10 | AVAIL PGDG 2.0.2 9 |
| el8.aarch64 | AVAIL PGDG 2.0.2 9 | AVAIL PGDG 2.0.2 10 | AVAIL PGDG 2.0.2 10 | AVAIL PGDG 2.0.2 11 | AVAIL PGDG 2.0.2 10 |
| el9.x86_64 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 |
| el9.aarch64 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 |
| el10.x86_64 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 |
| el10.aarch64 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 | AVAIL PGDG 2.0.2 4 |
| d12.x86_64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| d12.aarch64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| d13.x86_64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| d13.aarch64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| u22.x86_64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| u22.aarch64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| u24.x86_64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| u24.aarch64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| u26.x86_64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
| u26.aarch64 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 | AVAIL PGDG 2.0 4 |
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_18-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 62.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_18-2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 22.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.2 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-2.0.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 62.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_18-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0 61.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.3 57.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-1.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-2.0.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_18-2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0 60.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.3 56.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-1.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.2 63.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-2.0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 62.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_18-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0 61.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.3 57.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-1.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 61.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_18-2.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg12+1_amd64.deb pgdg 2.0 67.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0 100.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg12+1_amd64.deb pgdg 1.9.2 58.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg12+1_amd64.deb pgdg 1.9.1 58.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg12+1_arm64.deb pgdg 2.0 66.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0 99.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg12+1_arm64.deb pgdg 1.9.2 57.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg12+1_arm64.deb pgdg 1.9.1 56.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg13+1_amd64.deb pgdg 2.0 68.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~trixie_amd64.deb pigsty 2.0 101.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg13+1_amd64.deb pgdg 1.9.2 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg13+1_amd64.deb pgdg 1.9.1 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg13+1_arm64.deb pgdg 2.0 66.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~trixie_arm64.deb pigsty 2.0 99.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg13+1_arm64.deb pgdg 1.9.2 57.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg13+1_arm64.deb pgdg 1.9.1 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg22.04+1_amd64.deb pgdg 2.0 69.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~jammy_amd64.deb pigsty 2.0 107.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb pgdg 1.9.2 59.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb pgdg 1.9.1 59.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg22.04+1_arm64.deb pgdg 2.0 67.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~jammy_arm64.deb pigsty 2.0 105.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb pgdg 1.9.2 58.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb pgdg 1.9.1 58.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg24.04+1_amd64.deb pgdg 2.0 68.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~noble_amd64.deb pigsty 2.0 104.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb pgdg 1.9.2 58.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb pgdg 1.9.1 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg24.04+1_arm64.deb pgdg 2.0 66.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~noble_arm64.deb pigsty 2.0 103.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb pgdg 1.9.2 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb pgdg 1.9.1 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg26.04+1_amd64.deb pgdg 2.0 67.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~resolute_amd64.deb pigsty 2.0 103.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb pgdg 1.9.2 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb pgdg 1.9.1 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-2.pgdg26.04+1_arm64.deb pgdg 2.0 65.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0-1PIGSTY~resolute_arm64.deb pigsty 2.0 102.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-18-pg-background_2.0-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb pgdg 1.9.2 56.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb pgdg 1.9.1 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_17-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_17-2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.2 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-2.0.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 62.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_17-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0 61.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.3 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-1.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-2.0.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_17-2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0 60.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.3 56.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-1.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-2.0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_17-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0 61.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.3 57.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-1.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_17-2.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg12+1_amd64.deb pgdg 2.0 67.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0 100.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg12+1_amd64.deb pgdg 1.9.2 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg12+1_amd64.deb pgdg 1.9.1 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg12+1_arm64.deb pgdg 2.0 66.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0 99.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg12+1_arm64.deb pgdg 1.9.2 57.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg12+1_arm64.deb pgdg 1.9.1 56.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg13+1_amd64.deb pgdg 2.0 68.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~trixie_amd64.deb pigsty 2.0 101.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg13+1_amd64.deb pgdg 1.9.2 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg13+1_amd64.deb pgdg 1.9.1 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg13+1_arm64.deb pgdg 2.0 66.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~trixie_arm64.deb pigsty 2.0 99.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg13+1_arm64.deb pgdg 1.9.2 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg13+1_arm64.deb pgdg 1.9.1 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg22.04+1_amd64.deb pgdg 2.0 76.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~jammy_amd64.deb pigsty 2.0 115.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb pgdg 1.9.2 64.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb pgdg 1.9.1 64.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg22.04+1_arm64.deb pgdg 2.0 74.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~jammy_arm64.deb pigsty 2.0 113.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb pgdg 1.9.2 63.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb pgdg 1.9.1 62.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg24.04+1_amd64.deb pgdg 2.0 68.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~noble_amd64.deb pigsty 2.0 104.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb pgdg 1.9.2 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb pgdg 1.9.1 58.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg24.04+1_arm64.deb pgdg 2.0 66.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~noble_arm64.deb pigsty 2.0 103.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb pgdg 1.9.2 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb pgdg 1.9.1 57.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg26.04+1_amd64.deb pgdg 2.0 67.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~resolute_amd64.deb pigsty 2.0 103.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb pgdg 1.9.2 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb pgdg 1.9.1 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-2.pgdg26.04+1_arm64.deb pgdg 2.0 65.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0-1PIGSTY~resolute_arm64.deb pigsty 2.0 102.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-17-pg-background_2.0-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb pgdg 1.9.2 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb pgdg 1.9.1 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 63.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_16-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_16-2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.2 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-2.0.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_16-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0 61.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.3 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-1.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-2.0.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_16-2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0 60.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.3 56.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-1.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-2.0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_16-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0 61.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.3 57.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-1.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_16-2.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg12+1_amd64.deb pgdg 2.0 67.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0 100.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg12+1_amd64.deb pgdg 1.9.2 58.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg12+1_amd64.deb pgdg 1.9.1 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg12+1_arm64.deb pgdg 2.0 66.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0 99.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg12+1_arm64.deb pgdg 1.9.2 56.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg12+1_arm64.deb pgdg 1.9.1 56.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg13+1_amd64.deb pgdg 2.0 68.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~trixie_amd64.deb pigsty 2.0 101.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg13+1_amd64.deb pgdg 1.9.2 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg13+1_amd64.deb pgdg 1.9.1 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg13+1_arm64.deb pgdg 2.0 66.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~trixie_arm64.deb pigsty 2.0 99.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg13+1_arm64.deb pgdg 1.9.2 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg13+1_arm64.deb pgdg 1.9.1 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg22.04+1_amd64.deb pgdg 2.0 76.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~jammy_amd64.deb pigsty 2.0 115.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb pgdg 1.9.2 64.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb pgdg 1.9.1 64.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg22.04+1_arm64.deb pgdg 2.0 74.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~jammy_arm64.deb pigsty 2.0 113.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb pgdg 1.9.2 63.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb pgdg 1.9.1 62.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg24.04+1_amd64.deb pgdg 2.0 68.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~noble_amd64.deb pigsty 2.0 104.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb pgdg 1.9.2 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb pgdg 1.9.1 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg24.04+1_arm64.deb pgdg 2.0 66.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~noble_arm64.deb pigsty 2.0 103.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb pgdg 1.9.2 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb pgdg 1.9.1 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg26.04+1_amd64.deb pgdg 2.0 67.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~resolute_amd64.deb pigsty 2.0 103.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb pgdg 1.9.2 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb pgdg 1.9.1 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-2.pgdg26.04+1_arm64.deb pgdg 2.0 65.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0-1PIGSTY~resolute_arm64.deb pigsty 2.0 102.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-16-pg-background_2.0-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb pgdg 1.9.2 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb pgdg 1.9.1 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_15-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_15-2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.2 63.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-2.0.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 62.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_15-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0 61.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.3 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-1.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.2 62.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-2.0.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 61.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_15-2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0 60.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.3 56.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-1.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.2 63.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-2.0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 62.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_15-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0 62.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.3 57.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-1.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 61.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_15-2.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg12+1_amd64.deb pgdg 2.0 67.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0 101.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg12+1_amd64.deb pgdg 1.9.2 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg12+1_amd64.deb pgdg 1.9.1 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg12+1_arm64.deb pgdg 2.0 66.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0 99.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg12+1_arm64.deb pgdg 1.9.2 56.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg12+1_arm64.deb pgdg 1.9.1 56.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg13+1_amd64.deb pgdg 2.0 68.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~trixie_amd64.deb pigsty 2.0 101.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg13+1_amd64.deb pgdg 1.9.2 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg13+1_amd64.deb pgdg 1.9.1 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg13+1_arm64.deb pgdg 2.0 66.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~trixie_arm64.deb pigsty 2.0 99.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg13+1_arm64.deb pgdg 1.9.2 57.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg13+1_arm64.deb pgdg 1.9.1 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg22.04+1_amd64.deb pgdg 2.0 76.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~jammy_amd64.deb pigsty 2.0 115.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb pgdg 1.9.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb pgdg 1.9.1 64.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg22.04+1_arm64.deb pgdg 2.0 75.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~jammy_arm64.deb pigsty 2.0 113.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb pgdg 1.9.2 63.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb pgdg 1.9.1 62.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg24.04+1_amd64.deb pgdg 2.0 68.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~noble_amd64.deb pigsty 2.0 104.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb pgdg 1.9.2 58.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb pgdg 1.9.1 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg24.04+1_arm64.deb pgdg 2.0 66.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~noble_arm64.deb pigsty 2.0 103.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb pgdg 1.9.2 57.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb pgdg 1.9.1 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg26.04+1_amd64.deb pgdg 2.0 67.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~resolute_amd64.deb pigsty 2.0 103.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb pgdg 1.9.2 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb pgdg 1.9.1 58.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-2.pgdg26.04+1_arm64.deb pgdg 2.0 65.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0-1PIGSTY~resolute_arm64.deb pigsty 2.0 102.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-15-pg-background_2.0-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb pgdg 1.9.2 56.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb pgdg 1.9.1 56.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_background_14 pg_background_14-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_14-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_background_14 pg_background_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_background_14-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_14-2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_background_14 pg_background_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_background_14-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-2.0.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.2 63.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-2.0.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 62.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_14-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0 61.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_background_14 pg_background_14-1.9.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.3 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_background_14-1.9.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-2.0.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-2.0.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_14-2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0 60.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_background_14 pg_background_14-1.9.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.3 56.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_background_14-1.9.3-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-2.0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.2 63.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-2.0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 62.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_14-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0 62.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_background_14 pg_background_14-1.9.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.3 57.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_background_14-1.9.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 61.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_14-2.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_background_14 pg_background_14-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_background_14-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg12+1_amd64.deb pgdg 2.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0 100.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg12+1_amd64.deb pgdg 1.9.2 83.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg12+1_amd64.deb pgdg 1.9.1 83.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg12+1_arm64.deb pgdg 2.0 90.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0 99.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg12+1_arm64.deb pgdg 1.9.2 81.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg12+1_arm64.deb pgdg 1.9.1 81.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg13+1_amd64.deb pgdg 2.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~trixie_amd64.deb pigsty 2.0 101.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg13+1_amd64.deb pgdg 1.9.2 83.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg13+1_amd64.deb pgdg 1.9.1 83.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg13+1_arm64.deb pgdg 2.0 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~trixie_arm64.deb pigsty 2.0 99.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg13+1_arm64.deb pgdg 1.9.2 82.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg13+1_arm64.deb pgdg 1.9.1 82.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg22.04+1_amd64.deb pgdg 2.0 101.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~jammy_amd64.deb pigsty 2.0 115.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb pgdg 1.9.2 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb pgdg 1.9.1 89.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg22.04+1_arm64.deb pgdg 2.0 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~jammy_arm64.deb pigsty 2.0 113.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb pgdg 1.9.2 87.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb pgdg 1.9.1 87.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg24.04+1_amd64.deb pgdg 2.0 93.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~noble_amd64.deb pigsty 2.0 104.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb pgdg 1.9.2 83.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb pgdg 1.9.1 83.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg24.04+1_arm64.deb pgdg 2.0 91.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~noble_arm64.deb pigsty 2.0 103.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb pgdg 1.9.2 82.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb pgdg 1.9.1 81.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg26.04+1_amd64.deb pgdg 2.0 92.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~resolute_amd64.deb pigsty 2.0 103.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb pgdg 1.9.2 83.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb pgdg 1.9.1 82.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-2.pgdg26.04+1_arm64.deb pgdg 2.0 90.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_2.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_2.0-1PIGSTY~resolute_arm64.deb pigsty 2.0 102.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-14-pg-background_2.0-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb pgdg 1.9.2 81.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-background postgresql-14-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb pgdg 1.9.1 80.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-14-pg-background_1.9.1-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_background` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_background         # 构建 RPM / DEB 包
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

来源：[official README](https://github.com/vibhorkum/pg_background/blob/master/README.md)、[v2.0 release notes](https://github.com/vibhorkum/pg_background/releases/tag/v2.0)、[migration guide](https://github.com/vibhorkum/pg_background/blob/v2.0/docs/MIGRATION.md)。

`pg_background` 在 PostgreSQL 后台工作进程中执行 SQL。工作进程在服务器内部运行独立事务，适合异步维护、自主副作用、有边界的长时间任务，以及可跟踪进度的作业。

2.0 版本将不带后缀的 API 作为标准接口。旧的 `_v2` 名称在 2.x 系列中仍保留为已弃用别名，但新代码应使用 `pg_background_launch`、`pg_background_result`、`pg_background_run` 等名称。

### 一次性执行

当 SQL 只有副作用，而你只需要执行元数据时，使用 `pg_background_run`：

```sql
CREATE EXTENSION pg_background;

SELECT completed, has_error, sqlstate, error_message,
       row_count, command_tag, elapsed_ms, timed_out
FROM pg_background_run(
  'INSERT INTO audit_log(ts, who) VALUES (clock_timestamp(), current_user)',
  queue_size := 0,
  timeout_ms := 30000,
  label := 'audit-login'
);
```

### 启动并获取结果

当后台 SQL 会返回行时，使用 launch/result 模式：

```sql
SELECT * FROM pg_background_launch(
  'SELECT count(*) FROM large_table',
  queue_size := 65536,
  label := 'count-large-table'
) AS h;

SELECT * FROM pg_background_result(h.pid, h.cookie) AS (count bigint);
```

结果只能消费一次。请同时保存 `pid` 和 `cookie`；`cookie` 用来避免后续调用受到 PID 重用影响。

### 即发即忘

对于不需要消费结果行的副作用：

```sql
SELECT * FROM pg_background_submit(
  $$VACUUM (ANALYZE) public.events$$,
  queue_size := 65536,
  label := 'vacuum-events'
);
```

### 核心 API

- `pg_background_launch(sql, queue_size, label)` 启动工作进程，并返回 `pg_background_handle(pid, cookie)`。
- `pg_background_submit(sql, queue_size, label)` 启动即发即忘的工作，并返回一个句柄。
- `pg_background_result(pid, cookie)` 一次性消费结果行。
- `pg_background_result_info(pid, cookie)` 返回完成状态和行数元数据，但不消费结果行。
- `pg_background_error_info(pid, cookie)` 返回结构化 SQL 错误详情。
- `pg_background_wait(pid, cookie, timeout_ms DEFAULT 0)` 等待完成；`timeout_ms <= 0` 表示无限期阻塞。
- `pg_background_cancel(pid, cookie, grace_ms DEFAULT 0)` 请求协作式取消。
- `pg_background_detach(pid, cookie)` 停止跟踪工作进程，但允许它继续运行。
- `pg_background_outcome(pid, cookie)` 返回合并后的状态快照，即使状态缺失也不会抛错。
- `pg_background_list` 和 `pg_background_activity` 是监控视图；`pg_background_stats()` 返回会话计数器。

便捷辅助函数包括 `pg_background_run_query`、`pg_background_drain`、`pg_background_wait_any`、`pg_background_cancel_by_label` 和 `pg_background_purge`。

### 进度报告

在工作进程 SQL 内报告进度，再由启动方轮询：

```sql
SELECT * FROM pg_background_launch($$
  SELECT pg_background_report_progress(0, 'starting');
  SELECT pg_sleep(1);
  SELECT pg_background_report_progress(100, 'done');
$$) AS h;

SELECT * FROM pg_background_get_progress(h.pid, h.cookie);
```

`pg_background_report_progress` 是 2.0 名称；更早的 `pg_background_progress` 名称已经硬重命名。

### GUC 与加载

`pg_background` 不要求配置 `shared_preload_libraries`。预加载是可选的，主要用于希望会话首次加载扩展前就能使用其 GUC 的场景。

```sql
SET pg_background.max_workers = 10;
SET pg_background.default_queue_size = '256KB';
SET pg_background.worker_timeout = '5min';
```

- `pg_background.max_workers` 默认值为 `16`。
- `pg_background.default_queue_size` 默认值为 `65536` 字节。
- `pg_background.worker_timeout` 默认值为 `0`，表示没有执行超时。

### 注意事项

- Pigsty 为 PostgreSQL 14-18 打包 `pg_background` 2.0；上游 2.0 也验证了 PostgreSQL 19 beta。
- 从 1.8 之前的安装升级时，必须先升级到 1.8/1.10 发布线，再更新到 2.0。
- 原始 v1 的仅 PID API 已移除。不带后缀的名称现在具备 cookie 保护语义，并返回/使用 `(pid, cookie)`。
- `pg_background_cancel_v2_grace` 和 `pg_background_wait_v2_timeout` 已合并进 `pg_background_cancel(..., grace_ms)` 和 `pg_background_wait(..., timeout_ms)`。
- `pg_background_status_v2` 已移除；请使用 `pg_background_outcome(pid, cookie)`。
