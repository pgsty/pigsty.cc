---
title: "pgbouncer_fdw"
linkTitle: "pgbouncer_fdw"
description: "用SQL查询pgbouncer统计信息，并执行pgbouncer命令"
weight: 8650
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pgbouncer_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pgbouncer_fdw</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pgbouncer_fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgbouncer_fdw`**](/ext/e/pgbouncer_fdw) | `1.4.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8650  | [**`pgbouncer_fdw`**](/ext/e/pgbouncer_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dblink`](/ext/e/dblink) [`dblink`](/ext/e/dblink) [`postgres_fdw`](/ext/e/postgres_fdw) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pgbouncer_fdw` | `dblink` |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pgbouncer_fdw_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 4 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 8 |
| el8.aarch64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 4 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 |
| el9.x86_64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 4 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 |
| el9.aarch64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 4 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 | AVAIL PGDG 1.4.0 6 |
| el10.x86_64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 |
| el10.aarch64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pgbouncer_fdw_18 pgbouncer_fdw_18-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgbouncer_fdw_18-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgbouncer_fdw_18 pgbouncer_fdw_18-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgbouncer_fdw_18-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgbouncer_fdw_18 pgbouncer_fdw_18-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgbouncer_fdw_18-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgbouncer_fdw_18 pgbouncer_fdw_18-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgbouncer_fdw_18-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgbouncer_fdw_18 pgbouncer_fdw_18-1.4.0-1PGDG.rhel10.x86_64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgbouncer_fdw_18-1.4.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgbouncer_fdw_18 pgbouncer_fdw_18-1.4.0-1PGDG.rhel10.aarch64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgbouncer_fdw_18-1.4.0-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgbouncer_fdw_17-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgbouncer_fdw_17-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgbouncer_fdw_17-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.1.0-2PGDG.rhel8.x86_64.rpm pgdg 1.1.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgbouncer_fdw_17-1.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgbouncer_fdw_17-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgbouncer_fdw_17-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgbouncer_fdw_17-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.1.0-2PGDG.rhel8.aarch64.rpm pgdg 1.1.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgbouncer_fdw_17-1.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgbouncer_fdw_17-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgbouncer_fdw_17-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgbouncer_fdw_17-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.1.0-2PGDG.rhel9.x86_64.rpm pgdg 1.1.0 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgbouncer_fdw_17-1.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgbouncer_fdw_17-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgbouncer_fdw_17-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgbouncer_fdw_17-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.1.0-2PGDG.rhel9.aarch64.rpm pgdg 1.1.0 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgbouncer_fdw_17-1.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.4.0-1PGDG.rhel10.x86_64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgbouncer_fdw_17-1.4.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgbouncer_fdw_17 pgbouncer_fdw_17-1.4.0-1PGDG.rhel10.aarch64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgbouncer_fdw_17-1.4.0-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgbouncer_fdw_16-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgbouncer_fdw_16-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgbouncer_fdw_16-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgbouncer_fdw_16-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgbouncer_fdw_16-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-0.4-3.rhel8.x86_64.rpm pgdg 0.4 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgbouncer_fdw_16-0.4-3.rhel8.x86_64.rpm
@ el8.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgbouncer_fdw_16-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgbouncer_fdw_16-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgbouncer_fdw_16-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgbouncer_fdw_16-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgbouncer_fdw_16-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-0.4-3.rhel8.aarch64.rpm pgdg 0.4 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgbouncer_fdw_16-0.4-3.rhel8.aarch64.rpm
@ el9.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgbouncer_fdw_16-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgbouncer_fdw_16-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgbouncer_fdw_16-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgbouncer_fdw_16-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgbouncer_fdw_16-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-0.4-3.rhel9.x86_64.rpm pgdg 0.4 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgbouncer_fdw_16-0.4-3.rhel9.x86_64.rpm
@ el9.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgbouncer_fdw_16-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgbouncer_fdw_16-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgbouncer_fdw_16-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgbouncer_fdw_16-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgbouncer_fdw_16-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-0.4-3.rhel9.aarch64.rpm pgdg 0.4 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgbouncer_fdw_16-0.4-3.rhel9.aarch64.rpm
@ el10.x86_64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.4.0-1PGDG.rhel10.x86_64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgbouncer_fdw_16-1.4.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgbouncer_fdw_16 pgbouncer_fdw_16-1.4.0-1PGDG.rhel10.aarch64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgbouncer_fdw_16-1.4.0-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgbouncer_fdw_15-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgbouncer_fdw_15-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgbouncer_fdw_15-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgbouncer_fdw_15-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgbouncer_fdw_15-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-0.4-2.rhel8.x86_64.rpm pgdg 0.4 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgbouncer_fdw_15-0.4-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgbouncer_fdw_15-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgbouncer_fdw_15-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgbouncer_fdw_15-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgbouncer_fdw_15-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgbouncer_fdw_15-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-0.4-2.rhel8.aarch64.rpm pgdg 0.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgbouncer_fdw_15-0.4-2.rhel8.aarch64.rpm
@ el9.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgbouncer_fdw_15-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgbouncer_fdw_15-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgbouncer_fdw_15-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgbouncer_fdw_15-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgbouncer_fdw_15-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-0.4-2.rhel9.x86_64.rpm pgdg 0.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgbouncer_fdw_15-0.4-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgbouncer_fdw_15-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgbouncer_fdw_15-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgbouncer_fdw_15-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgbouncer_fdw_15-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgbouncer_fdw_15-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-0.4-2.rhel9.aarch64.rpm pgdg 0.4 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgbouncer_fdw_15-0.4-2.rhel9.aarch64.rpm
@ el10.x86_64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.4.0-1PGDG.rhel10.x86_64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgbouncer_fdw_15-1.4.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgbouncer_fdw_15 pgbouncer_fdw_15-1.4.0-1PGDG.rhel10.aarch64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgbouncer_fdw_15-1.4.0-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 19.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-0.4-2.rhel8.x86_64.rpm pgdg 0.4 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-0.4-2.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-0.4-1.rhel8.x86_64.rpm pgdg 0.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-0.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-0.3-2.rhel8.x86_64.rpm pgdg 0.3 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgbouncer_fdw_14-0.3-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgbouncer_fdw_14-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgbouncer_fdw_14-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgbouncer_fdw_14-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgbouncer_fdw_14-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgbouncer_fdw_14-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-0.4-2.rhel8.aarch64.rpm pgdg 0.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgbouncer_fdw_14-0.4-2.rhel8.aarch64.rpm
@ el9.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgbouncer_fdw_14-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgbouncer_fdw_14-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgbouncer_fdw_14-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgbouncer_fdw_14-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgbouncer_fdw_14-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-0.4-2.rhel9.x86_64.rpm pgdg 0.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgbouncer_fdw_14-0.4-2.rhel9.x86_64.rpm
@ el9.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgbouncer_fdw_14-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgbouncer_fdw_14-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgbouncer_fdw_14-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 18.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgbouncer_fdw_14-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgbouncer_fdw_14-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-0.4-2.rhel9.aarch64.rpm pgdg 0.4 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgbouncer_fdw_14-0.4-2.rhel9.aarch64.rpm
@ el10.x86_64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.4.0-1PGDG.rhel10.x86_64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgbouncer_fdw_14-1.4.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgbouncer_fdw_14 pgbouncer_fdw_14-1.4.0-1PGDG.rhel10.aarch64.rpm pgdg 1.4.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgbouncer_fdw_14-1.4.0-1PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgbouncer_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgbouncer_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgbouncer_fdw -v 18  # PG 18
pig ext install -y pgbouncer_fdw -v 17  # PG 17
pig ext install -y pgbouncer_fdw -v 16  # PG 16
pig ext install -y pgbouncer_fdw -v 15  # PG 15
pig ext install -y pgbouncer_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgbouncer_fdw_18       # PG 18
dnf install -y pgbouncer_fdw_17       # PG 17
dnf install -y pgbouncer_fdw_16       # PG 16
dnf install -y pgbouncer_fdw_15       # PG 15
dnf install -y pgbouncer_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgbouncer_fdw CASCADE;  -- 依赖: dblink
```



## 用法

> [pgbouncer_fdw: 通过普通 SQL 视图查询 PgBouncer 统计信息并通过 SQL 函数运行 PgBouncer 命令的扩展](https://github.com/CrunchyData/pgbouncer_fdw)

### 创建服务器

```sql
CREATE EXTENSION pgbouncer_fdw;

CREATE SERVER pgbouncer FOREIGN DATA WRAPPER dblink_fdw
  OPTIONS (host 'localhost', port '6432', dbname 'pgbouncer');
```

对于多个 PgBouncer 实例：

```sql
CREATE SERVER pgbouncer1 FOREIGN DATA WRAPPER dblink_fdw
  OPTIONS (host '192.168.1.10', port '6432', dbname 'pgbouncer');
CREATE SERVER pgbouncer2 FOREIGN DATA WRAPPER dblink_fdw
  OPTIONS (host '192.168.1.11', port '6432', dbname 'pgbouncer');

INSERT INTO pgbouncer_fdw_targets (target_host) VALUES ('pgbouncer1'), ('pgbouncer2');
UPDATE pgbouncer_fdw_targets SET active = false WHERE target_host = 'pgbouncer';
```

### 创建用户映射

```sql
CREATE USER MAPPING FOR PUBLIC SERVER pgbouncer
  OPTIONS (user 'ccp_monitoring', password 'mypassword');
```

### 可用视图

| 视图 | 描述 |
|------|-------------|
| `pgbouncer_clients` | 客户端连接详情 |
| `pgbouncer_pools` | 连接池统计 |
| `pgbouncer_servers` | 后端服务器状态 |
| `pgbouncer_stats` | 统计摘要 |
| `pgbouncer_databases` | 数据库定义 |
| `pgbouncer_config` | 配置参数 |
| `pgbouncer_lists` | 内部列表 |
| `pgbouncer_dns_hosts` | DNS 主机缓存 |
| `pgbouncer_dns_zones` | DNS 区域缓存 |
| `pgbouncer_sockets` | 套接字信息 |
| `pgbouncer_users` | 用户配置 |

```sql
SELECT * FROM pgbouncer_pools;
SELECT * FROM pgbouncer_stats;
SELECT database, cl_active, cl_waiting, sv_active FROM pgbouncer_pools;
```

监控多个实例时，每行包含一个 `pgbouncer_target_host` 列标识来源。

### 命令函数

管理函数（需要显式 `GRANT EXECUTE`）：

```sql
SELECT pgbouncer_command_reload();              -- 重载配置
SELECT pgbouncer_command_pause('mydb');          -- 暂停数据库
SELECT pgbouncer_command_resume('mydb');         -- 恢复数据库
SELECT pgbouncer_command_kill('mydb');           -- 终止连接
SELECT pgbouncer_command_disable('mydb');        -- 禁用数据库
SELECT pgbouncer_command_enable('mydb');         -- 启用数据库
SELECT pgbouncer_command_reconnect('mydb');      -- 重新连接后端
SELECT pgbouncer_command_set('key', 'value');    -- 设置参数
SELECT pgbouncer_command_shutdown();             -- 关闭 PgBouncer
SELECT pgbouncer_command_suspend();              -- 暂停操作
SELECT pgbouncer_command_wait_close('mydb');     -- 等待连接关闭
```

### 权限

```sql
GRANT USAGE ON FOREIGN SERVER pgbouncer TO monitoring_user;
GRANT SELECT ON pgbouncer_pools TO monitoring_user;
GRANT SELECT ON pgbouncer_stats TO monitoring_user;
GRANT EXECUTE ON FUNCTION pgbouncer_command_reload() TO admin_user;
```
