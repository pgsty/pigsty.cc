---
title: "pg_cron"
linkTitle: "pg_cron"
description: "定时任务调度器"
weight: 1070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/citusdata/pg_cron">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">citusdata/pg_cron</div>
    <div class="ext-card__desc">https://github.com/citusdata/pg_cron</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_cron`**](/ext/e/pg_cron) | `1.6.7` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1070  | [**`pg_cron`**](/ext/e/pg_cron) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timescaledb`](/ext/e/timescaledb) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`pg_task`](/ext/e/pg_task) [`pg_later`](/ext/e/pg_later) [`emaj`](/ext/e/emaj) [`table_version`](/ext/e/table_version) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) [`pg_incremental`](/ext/e/pg_incremental) [`timeseries`](/ext/e/timeseries) [`vectorize`](/ext/e/vectorize) [`pgmb`](/ext/e/pgmb) |
{.ext-table .ext-table--rel}


> require cron.database_name


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_cron` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_cron_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cron` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 3 | AVAIL PGDG 1.6.7 7 | AVAIL PGDG 1.6.7 10 | AVAIL PGDG 1.6.7 12 |
| el8.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 3 | AVAIL PGDG 1.6.7 7 | AVAIL PGDG 1.6.7 10 | AVAIL PGDG 1.6.7 10 |
| el9.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 3 | AVAIL PGDG 1.6.7 7 | AVAIL PGDG 1.6.7 10 | AVAIL PGDG 1.6.7 10 |
| el9.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 3 | AVAIL PGDG 1.6.7 7 | AVAIL PGDG 1.6.7 10 | AVAIL PGDG 1.6.7 10 |
| el10.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 2 | AVAIL PGDG 1.6.7 2 | AVAIL PGDG 1.6.7 2 | AVAIL PGDG 1.6.7 2 |
| el10.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 2 | AVAIL PGDG 1.6.7 2 | AVAIL PGDG 1.6.7 2 | AVAIL PGDG 1.6.7 2 |
| d12.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| d12.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| d13.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| d13.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| u22.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| u22.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| u24.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| u24.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| u26.x86_64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
| u26.aarch64 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 | AVAIL PGDG 1.6.7 1 |
@ el8.x86_64 18 pg_cron_18 pg_cron_18-1.6.7-1PGDG.rhel8.x86_64.rpm pgdg 1.6.7 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_cron_18-1.6.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_cron_18 pg_cron_18-1.6.7-1PGDG.rhel8.aarch64.rpm pgdg 1.6.7 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_cron_18-1.6.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_cron_18 pg_cron_18-1.6.7-1PGDG.rhel9.x86_64.rpm pgdg 1.6.7 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_cron_18-1.6.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_cron_18 pg_cron_18-1.6.7-1PGDG.rhel9.aarch64.rpm pgdg 1.6.7 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_cron_18-1.6.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_cron_18 pg_cron_18-1.6.7-1PGDG.rhel10.x86_64.rpm pgdg 1.6.7 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_cron_18-1.6.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_cron_18 pg_cron_18-1.6.7-1PGDG.rhel10.aarch64.rpm pgdg 1.6.7 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_cron_18-1.6.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg12+1_amd64.deb pgdg 1.6.7 89.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg12+1_arm64.deb pgdg 1.6.7 87.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg13+1_amd64.deb pgdg 1.6.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg13+1_arm64.deb pgdg 1.6.7 87.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg22.04+1_amd64.deb pgdg 1.6.7 88.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg22.04+1_arm64.deb pgdg 1.6.7 86.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg24.04+1_amd64.deb pgdg 1.6.7 87.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg24.04+1_arm64.deb pgdg 1.6.7 84.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg26.04+1_amd64.deb pgdg 1.6.7 86.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-cron postgresql-18-cron_1.6.7-2.pgdg26.04+1_arm64.deb pgdg 1.6.7 83.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-18-cron_1.6.7-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_cron_17 pg_cron_17-1.6.7-1PGDG.rhel8.x86_64.rpm pgdg 1.6.7 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_cron_17-1.6.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_cron_17 pg_cron_17-1.6.5-1PGDG.rhel8.x86_64.rpm pgdg 1.6.5 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_cron_17-1.6.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_cron_17 pg_cron_17-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_cron_17-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_cron_17 pg_cron_17-1.6.7-1PGDG.rhel8.aarch64.rpm pgdg 1.6.7 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_cron_17-1.6.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_cron_17 pg_cron_17-1.6.5-1PGDG.rhel8.aarch64.rpm pgdg 1.6.5 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_cron_17-1.6.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_cron_17 pg_cron_17-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_cron_17-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_cron_17 pg_cron_17-1.6.7-1PGDG.rhel9.x86_64.rpm pgdg 1.6.7 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_cron_17-1.6.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_cron_17 pg_cron_17-1.6.5-1PGDG.rhel9.x86_64.rpm pgdg 1.6.5 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_cron_17-1.6.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_cron_17 pg_cron_17-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_cron_17-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_cron_17 pg_cron_17-1.6.7-1PGDG.rhel9.aarch64.rpm pgdg 1.6.7 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_cron_17-1.6.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_cron_17 pg_cron_17-1.6.5-1PGDG.rhel9.aarch64.rpm pgdg 1.6.5 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_cron_17-1.6.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_cron_17 pg_cron_17-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_cron_17-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_cron_17 pg_cron_17-1.6.7-1PGDG.rhel10.x86_64.rpm pgdg 1.6.7 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_cron_17-1.6.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_cron_17 pg_cron_17-1.6.5-1PGDG.rhel10.x86_64.rpm pgdg 1.6.5 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_cron_17-1.6.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_cron_17 pg_cron_17-1.6.7-1PGDG.rhel10.aarch64.rpm pgdg 1.6.7 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_cron_17-1.6.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_cron_17 pg_cron_17-1.6.5-1PGDG.rhel10.aarch64.rpm pgdg 1.6.5 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_cron_17-1.6.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg12+1_amd64.deb pgdg 1.6.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg12+1_arm64.deb pgdg 1.6.7 87.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg13+1_amd64.deb pgdg 1.6.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg13+1_arm64.deb pgdg 1.6.7 87.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg22.04+1_amd64.deb pgdg 1.6.7 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg22.04+1_arm64.deb pgdg 1.6.7 97.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg24.04+1_amd64.deb pgdg 1.6.7 87.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg24.04+1_arm64.deb pgdg 1.6.7 84.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg26.04+1_amd64.deb pgdg 1.6.7 86.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-cron postgresql-17-cron_1.6.7-2.pgdg26.04+1_arm64.deb pgdg 1.6.7 83.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-17-cron_1.6.7-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.7-1PGDG.rhel8.x86_64.rpm pgdg 1.6.7 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.5-1PGDG.rhel8.x86_64.rpm pgdg 1.6.5 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_cron_16 pg_cron_16-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_cron_16-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.7-1PGDG.rhel8.aarch64.rpm pgdg 1.6.7 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.5-1PGDG.rhel8.aarch64.rpm pgdg 1.6.5 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_cron_16 pg_cron_16-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_cron_16-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.7-1PGDG.rhel9.x86_64.rpm pgdg 1.6.7 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.5-1PGDG.rhel9.x86_64.rpm pgdg 1.6.5 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 43.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_cron_16 pg_cron_16-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_cron_16-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.7-1PGDG.rhel9.aarch64.rpm pgdg 1.6.7 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.5-1PGDG.rhel9.aarch64.rpm pgdg 1.6.5 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_cron_16 pg_cron_16-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_cron_16-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_cron_16 pg_cron_16-1.6.7-1PGDG.rhel10.x86_64.rpm pgdg 1.6.7 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_cron_16-1.6.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_cron_16 pg_cron_16-1.6.5-1PGDG.rhel10.x86_64.rpm pgdg 1.6.5 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_cron_16-1.6.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_cron_16 pg_cron_16-1.6.7-1PGDG.rhel10.aarch64.rpm pgdg 1.6.7 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_cron_16-1.6.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_cron_16 pg_cron_16-1.6.5-1PGDG.rhel10.aarch64.rpm pgdg 1.6.5 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_cron_16-1.6.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg12+1_amd64.deb pgdg 1.6.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg12+1_arm64.deb pgdg 1.6.7 87.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg13+1_amd64.deb pgdg 1.6.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg13+1_arm64.deb pgdg 1.6.7 87.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg22.04+1_amd64.deb pgdg 1.6.7 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg22.04+1_arm64.deb pgdg 1.6.7 97.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg24.04+1_amd64.deb pgdg 1.6.7 87.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg24.04+1_arm64.deb pgdg 1.6.7 84.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg26.04+1_amd64.deb pgdg 1.6.7 86.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-cron postgresql-16-cron_1.6.7-2.pgdg26.04+1_arm64.deb pgdg 1.6.7 83.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-16-cron_1.6.7-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.7-1PGDG.rhel8.x86_64.rpm pgdg 1.6.7 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.5-1PGDG.rhel8.x86_64.rpm pgdg 1.6.5 45.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.5.2-1.rhel8.x86_64.rpm pgdg 1.5.2 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.5.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_cron_15 pg_cron_15-1.4.2-1.rhel8.x86_64.rpm pgdg 1.4.2 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_cron_15-1.4.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.7-1PGDG.rhel8.aarch64.rpm pgdg 1.6.7 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.5-1PGDG.rhel8.aarch64.rpm pgdg 1.6.5 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.5.2-1.rhel8.aarch64.rpm pgdg 1.5.2 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.5.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.5.1-1.rhel8.aarch64.rpm pgdg 1.5.1 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.5.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_cron_15 pg_cron_15-1.4.2-1.rhel8.aarch64.rpm pgdg 1.4.2 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_cron_15-1.4.2-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.7-1PGDG.rhel9.x86_64.rpm pgdg 1.6.7 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.5-1PGDG.rhel9.x86_64.rpm pgdg 1.6.5 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.5.2-1.rhel9.x86_64.rpm pgdg 1.5.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.5.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.5.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_cron_15 pg_cron_15-1.4.2-1.rhel9.x86_64.rpm pgdg 1.4.2 112.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_cron_15-1.4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.7-1PGDG.rhel9.aarch64.rpm pgdg 1.6.7 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.5-1PGDG.rhel9.aarch64.rpm pgdg 1.6.5 44.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.5.2-1.rhel9.aarch64.rpm pgdg 1.5.2 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.5.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.5.1-1.rhel9.aarch64.rpm pgdg 1.5.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.5.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_cron_15 pg_cron_15-1.4.2-1.rhel9.aarch64.rpm pgdg 1.4.2 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_cron_15-1.4.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_cron_15 pg_cron_15-1.6.7-1PGDG.rhel10.x86_64.rpm pgdg 1.6.7 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_cron_15-1.6.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_cron_15 pg_cron_15-1.6.5-1PGDG.rhel10.x86_64.rpm pgdg 1.6.5 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_cron_15-1.6.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_cron_15 pg_cron_15-1.6.7-1PGDG.rhel10.aarch64.rpm pgdg 1.6.7 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_cron_15-1.6.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_cron_15 pg_cron_15-1.6.5-1PGDG.rhel10.aarch64.rpm pgdg 1.6.5 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_cron_15-1.6.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg12+1_amd64.deb pgdg 1.6.7 91.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg12+1_arm64.deb pgdg 1.6.7 88.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg13+1_amd64.deb pgdg 1.6.7 91.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg13+1_arm64.deb pgdg 1.6.7 88.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg22.04+1_amd64.deb pgdg 1.6.7 102.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg22.04+1_arm64.deb pgdg 1.6.7 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg24.04+1_amd64.deb pgdg 1.6.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg24.04+1_arm64.deb pgdg 1.6.7 86.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg26.04+1_amd64.deb pgdg 1.6.7 87.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-cron postgresql-15-cron_1.6.7-2.pgdg26.04+1_arm64.deb pgdg 1.6.7 85.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-15-cron_1.6.7-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.7-1PGDG.rhel8.x86_64.rpm pgdg 1.6.7 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.5-1PGDG.rhel8.x86_64.rpm pgdg 1.6.5 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 44.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.5.2-1.rhel8.x86_64.rpm pgdg 1.5.2 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.5.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.4.2-1.rhel8.x86_64.rpm pgdg 1.4.2 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.4.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.4.1-1.rhel8.x86_64.rpm pgdg 1.4.1 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_cron_14 pg_cron_14-1.3.1-2.rhel8.x86_64.rpm pgdg 1.3.1 97.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_cron_14-1.3.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.7-1PGDG.rhel8.aarch64.rpm pgdg 1.6.7 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.5-1PGDG.rhel8.aarch64.rpm pgdg 1.6.5 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.5.2-1.rhel8.aarch64.rpm pgdg 1.5.2 41.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.5.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.5.1-1.rhel8.aarch64.rpm pgdg 1.5.1 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.5.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_cron_14 pg_cron_14-1.4.2-1.rhel8.aarch64.rpm pgdg 1.4.2 106.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_cron_14-1.4.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.7-1PGDG.rhel9.x86_64.rpm pgdg 1.6.7 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.5-1PGDG.rhel9.x86_64.rpm pgdg 1.6.5 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.5.2-1.rhel9.x86_64.rpm pgdg 1.5.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.5.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.5.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_cron_14 pg_cron_14-1.4.2-1.rhel9.x86_64.rpm pgdg 1.4.2 111.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_cron_14-1.4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.7-1PGDG.rhel9.aarch64.rpm pgdg 1.6.7 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.5-1PGDG.rhel9.aarch64.rpm pgdg 1.6.5 44.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 43.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.5.2-1.rhel9.aarch64.rpm pgdg 1.5.2 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.5.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.5.1-1.rhel9.aarch64.rpm pgdg 1.5.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.5.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_cron_14 pg_cron_14-1.4.2-1.rhel9.aarch64.rpm pgdg 1.4.2 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_cron_14-1.4.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_cron_14 pg_cron_14-1.6.7-1PGDG.rhel10.x86_64.rpm pgdg 1.6.7 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_cron_14-1.6.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_cron_14 pg_cron_14-1.6.5-1PGDG.rhel10.x86_64.rpm pgdg 1.6.5 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_cron_14-1.6.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_cron_14 pg_cron_14-1.6.7-1PGDG.rhel10.aarch64.rpm pgdg 1.6.7 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_cron_14-1.6.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_cron_14 pg_cron_14-1.6.5-1PGDG.rhel10.aarch64.rpm pgdg 1.6.5 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_cron_14-1.6.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg12+1_amd64.deb pgdg 1.6.7 90.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg12+1_arm64.deb pgdg 1.6.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg13+1_amd64.deb pgdg 1.6.7 90.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg13+1_arm64.deb pgdg 1.6.7 88.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg22.04+1_amd64.deb pgdg 1.6.7 102.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg22.04+1_arm64.deb pgdg 1.6.7 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg24.04+1_amd64.deb pgdg 1.6.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg24.04+1_arm64.deb pgdg 1.6.7 86.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg26.04+1_amd64.deb pgdg 1.6.7 87.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-cron postgresql-14-cron_1.6.7-2.pgdg26.04+1_arm64.deb pgdg 1.6.7 84.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-cron/postgresql-14-cron_1.6.7-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_cron` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_cron;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_cron -v 18  # PG 18
pig ext install -y pg_cron -v 17  # PG 17
pig ext install -y pg_cron -v 16  # PG 16
pig ext install -y pg_cron -v 15  # PG 15
pig ext install -y pg_cron -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_cron_18       # PG 18
dnf install -y pg_cron_17       # PG 17
dnf install -y pg_cron_16       # PG 16
dnf install -y pg_cron_15       # PG 15
dnf install -y pg_cron_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-cron   # PG 18
apt install -y postgresql-17-cron   # PG 17
apt install -y postgresql-16-cron   # PG 16
apt install -y postgresql-15-cron   # PG 15
apt install -y postgresql-14-cron   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_cron';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_cron;
```


## 用法

请注意，`cron.database` 必须在将 `pg_cron` 添加到 `shared_preload_libraries` 之前设置好。

```
-- 每周六凌晨 3:30（GMT）删除过期数据
SELECT cron.schedule('30 3 * * 6', $$DELETE FROM events WHERE event_time < now() - interval '1 week'$$);
 schedule
----------
       42

-- 每天上午 10:00（GMT）执行 VACUUM
SELECT cron.schedule('nightly-vacuum', '0 10 * * *', 'VACUUM');
 schedule
----------
       43

-- 改为每天凌晨 3:00（GMT）执行 VACUUM
SELECT cron.schedule('nightly-vacuum', '0 3 * * *', 'VACUUM');
 schedule
----------
       43

-- 取消定时任务
SELECT cron.unschedule('nightly-vacuum' );
 unschedule
------------
 t

SELECT cron.unschedule(42);
 unschedule
------------
          t

-- 每周日凌晨 4:00（GMT）在 pg_cron 所在数据库之外的其他数据库中执行 VACUUM
SELECT cron.schedule_in_database('weekly-vacuum', '0 4 * * 0', 'VACUUM', 'some_other_database');
 schedule
----------
       44

-- 每 5 秒调用一次存储过程
SELECT cron.schedule('process-updates', '5 seconds', 'CALL process_updates()');

-- 每月最后一天中午 12:00 执行工资处理
SELECT cron.schedule('process-payroll', '0 12 $ * *', 'CALL process_payroll()');
```

Crontab 格式说明：

```
 ┌───────────── 分钟 (0 - 59)
 │ ┌────────────── 小时 (0 - 23)
 │ │ ┌─────────────── 日期 (1 - 31) 或月末最后一天 ($)
 │ │ │ ┌──────────────── 月份 (1 - 12)
 │ │ │ │ ┌───────────────── 星期 (0 - 6)（0 到 6 表示周日到
 │ │ │ │ │                  周六，也可使用英文名称；7 同样表示周日）
 │ │ │ │ │
 │ │ │ │ │
 * * * * *
```
