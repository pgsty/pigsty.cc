---
title: "pg_fact_loader"
linkTitle: "pg_fact_loader"
description: "在 Postgres 中构建事实表"
weight: 9820
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/enova/pg_fact_loader">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">enova/pg_fact_loader</div>
    <div class="ext-card__desc">https://github.com/enova/pg_fact_loader</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_fact_loader`**](/ext/e/pg_fact_loader) | `2.0.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9820  | [**`pg_fact_loader`**](/ext/e/pg_fact_loader) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fact_loader` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) [`pg_jobmon`](/ext/e/pg_jobmon) [`mimeo`](/ext/e/mimeo) [`timescaledb`](/ext/e/timescaledb) [`citus`](/ext/e/citus) [`tablefunc`](/ext/e/tablefunc) [`pg_bulkload`](/ext/e/pg_bulkload) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_fact_loader` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_fact_loader_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.1` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pg-fact-loader` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| el8.aarch64 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 |
| el9.x86_64 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 |
| el9.aarch64 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 | AVAIL PGDG 2.0.1 2 |
| el10.x86_64 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| el10.aarch64 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| d12.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| d12.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| d13.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| d13.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| u24.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
| u24.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 | AVAIL PGDG 2.0.1 1 |
@ el8.x86_64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm
@ el8.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-1PGDG.f42.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_fact_loader_16-2.0.1-1PGDG.f42.noarch.rpm
@ el8.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-1PGDG.f42.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_fact_loader_15-2.0.1-1PGDG.f42.noarch.rpm
@ el8.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-1PGDG.f42.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_fact_loader_14-2.0.1-1PGDG.f42.noarch.rpm
@ el8.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_fact_loader` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_fact_loader;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_fact_loader -v 18  # PG 18
pig ext install -y pg_fact_loader -v 17  # PG 17
pig ext install -y pg_fact_loader -v 16  # PG 16
pig ext install -y pg_fact_loader -v 15  # PG 15
pig ext install -y pg_fact_loader -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_fact_loader_18       # PG 18
dnf install -y pg_fact_loader_17       # PG 17
dnf install -y pg_fact_loader_16       # PG 16
dnf install -y pg_fact_loader_15       # PG 15
dnf install -y pg_fact_loader_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-fact-loader   # PG 18
apt install -y postgresql-17-pg-fact-loader   # PG 17
apt install -y postgresql-16-pg-fact-loader   # PG 16
apt install -y postgresql-15-pg-fact-loader   # PG 15
apt install -y postgresql-14-pg-fact-loader   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_fact_loader;
```
