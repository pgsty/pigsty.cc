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
@ el8.x86_64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_fact_loader_18-2.0.1-3PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_fact_loader_18-2.0.1-3PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_fact_loader_18 pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_fact_loader_18-2.0.1-3PGDG.rhel10.noarch.rpm
@ el8.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_fact_loader_17-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_fact_loader_17-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_fact_loader_17-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_fact_loader_17-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_fact_loader_17 pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_fact_loader_17-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fact-loader postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-17-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-1PGDG.f42.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_fact_loader_16-2.0.1-1PGDG.f42.noarch.rpm
@ el8.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_fact_loader_16-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_fact_loader_16-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_fact_loader_16-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_fact_loader_16-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_fact_loader_16 pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_fact_loader_16-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-fact-loader postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-16-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-1PGDG.f42.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_fact_loader_15-2.0.1-1PGDG.f42.noarch.rpm
@ el8.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_fact_loader_15-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_fact_loader_15-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_fact_loader_15-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_fact_loader_15-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_fact_loader_15 pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_fact_loader_15-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-fact-loader postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-15-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-1PGDG.f42.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_fact_loader_14-2.0.1-1PGDG.f42.noarch.rpm
@ el8.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_fact_loader_14-2.0.1-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm pgdg 2.0.1 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_fact_loader_14-2.0.1-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_fact_loader_14-2.0.1-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm pgdg 2.0.1 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_fact_loader_14-2.0.1-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_fact_loader_14 pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm pgdg 2.0.1 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_fact_loader_14-2.0.1-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg130+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb pgdg 2.0.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-fact-loader postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb pgdg 2.0.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-fact-loader/postgresql-14-pg-fact-loader_2.0.1-5.pgdg24.04+1_arm64.deb
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



## 用法

> [pg_fact_loader: 使用 Postgres 构建事实表](https://github.com/enova/pg_fact_loader)

使用基于队列的变更数据捕获来构建和维护事实表。通过处理审计/变更日志表来增量更新事实表。

### 启用

```sql
CREATE EXTENSION pg_fact_loader;
```

可选地与 pglogical 配合用于基于副本的设置：

```sql
CREATE EXTENSION pglogical;
CREATE EXTENSION pglogical_ticker;
CREATE EXTENSION pg_fact_loader;
```

### 工作流程

1. **复制源表** 到报表数据库（通过 pglogical 或其他方式）
2. **创建审计/变更日志表** 在 OLTP 系统中为源表创建
3. **创建事实表** 结构用于聚合数据
4. **创建合并函数** 接受一个键 ID 并返回事实表的一行
5. **配置 pg_fact_loader** 将队列表关联到事实表
6. **回填** 初始化事实表数据
7. **调度** 工作进程持续处理变更

### 配置表

```sql
-- 注册事实表
INSERT INTO fact_loader.fact_tables (fact_table_relid, fact_table_agg_proid, ...)
VALUES ('public.customers_fact'::regclass, 'customers_fact_merge'::regproc, ...);

-- 注册队列（审计）表
INSERT INTO fact_loader.queue_tables (queue_table_relid, queue_of_base_table_relid, ...)
VALUES ('audit.customers_audit'::regclass, 'public.customers'::regclass, ...);

-- 将队列表与事实表通过合并函数关联
INSERT INTO fact_loader.queue_table_deps
    (fact_table_id, queue_table_id, insert_merge_proid, update_merge_proid, delete_merge_proid)
VALUES (1, 1, 'customers_fact_merge'::regproc, 'customers_fact_merge'::regproc, 'customers_fact_merge'::regproc);

-- 定义如何从队列条目中获取键
INSERT INTO fact_loader.key_retrieval_sequences
    (queue_table_dep_id, return_columns, is_fact_key)
VALUES (1, '{customer_id}', true);
```

### 运行工作进程

```sql
-- 处理待处理的变更
SELECT fact_loader.worker();

-- 定期调度此操作（例如通过 pg_cron 每几秒运行一次）
```

### 初始回填

```sql
-- 对每条现有记录运行合并函数
SELECT customers_fact_merge(customer_id) FROM customers;
```

### 添加批次 ID 字段

```sql
SELECT fact_loader.add_batch_id_fields();
```

### 主要功能

- 基于队列的增量事实表更新
- 支持插入、更新和删除事件
- 支持多级键检索（通过多个表的联接）
- 事实表依赖链（父事实更新后再更新子事实）
- 处理前检查复制延迟（与 pglogical 配合使用时）
