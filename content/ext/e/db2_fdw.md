---
title: "db2_fdw"
linkTitle: "db2_fdw"
description: "提供对DB2的外部数据源包装器"
weight: 8630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pg-fdw/db2_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pg-fdw/db2_fdw</div>
    <div class="ext-card__desc">https://github.com/pg-fdw/db2_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/db2_fdw-18.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">db2_fdw-18.1.1.tar.gz</div>
    <div class="ext-card__desc">db2_fdw-18.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`db2_fdw`**](/ext/e/db2_fdw) | `18.2.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8630  | [**`db2_fdw`**](/ext/e/db2_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`db_migrator`](/ext/e/db_migrator) [`db2fce`](/ext/e/db2fce) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`mysql_fdw`](/ext/e/mysql_fdw) [`orafce`](/ext/e/orafce) [`postgres_fdw`](/ext/e/postgres_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`sqlite_fdw`](/ext/e/sqlite_fdw) [`informix_fdw`](/ext/e/informix_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Latest PGDG RPM/catalog version is 18.2.0; Pigsty source remains 18.1.1; no DEB package is available.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.2.0` | {{< pgvers "18,17,16,15,14" >}} | `db2_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.2.0` | {{< pgvers "18,17,16,15,14" >}} | `db2_fdw_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 18.2.0 5 | AVAIL PGDG 18.2.0 6 | AVAIL PGDG 18.2.0 7 | AVAIL PGDG 18.2.0 7 | AVAIL PGDG 18.2.0 8 |
| el8.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 18.2.0 5 | AVAIL PGDG 18.2.0 6 | AVAIL PGDG 18.2.0 7 | AVAIL PGDG 18.2.0 7 | AVAIL PGDG 18.2.0 8 |
| el9.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 18.2.0 5 | AVAIL PGDG 18.2.0 6 | AVAIL PGDG 18.2.0 6 | AVAIL PGDG 18.2.0 6 | AVAIL PGDG 18.2.0 6 |
| el10.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.x86_64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.x86_64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.x86_64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.x86_64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.x86_64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.aarch64 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 18.2.0 124.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.2 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 79.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 18.2.0 115.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.2 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 18.2.0 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.2 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 18.2.0 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.2 79.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 79.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 59.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 18.2.0 114.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.2 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 18.2.0 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.2 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 57.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-7.0.0-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 18.2.0 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.2 79.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 79.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 59.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-6.0.1-1PGDG.rhel8.x86_64.rpm pgdg 6.0.1 59.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-6.0.1-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 18.2.0 114.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.2 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-6.0.1-1PGDG.rhel9.x86_64.rpm pgdg 6.0.1 58.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-6.0.1-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 18.2.0 117.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.2 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-7.0.0-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 18.2.0 126.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.2 82.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 81.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 60.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-6.0.1-1PGDG.rhel8.x86_64.rpm pgdg 6.0.1 60.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-6.0.1-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 18.2.0 119.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.2 77.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 77.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 60.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-6.0.1-1PGDG.rhel9.x86_64.rpm pgdg 6.0.1 62.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-6.0.1-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 18.2.0 121.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.2 78.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 78.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 60.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-7.0.0-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 18.2.0 126.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.2 82.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 81.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 60.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-6.0.1-1PGDG.rhel8.x86_64.rpm pgdg 6.0.1 60.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-6.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-5.0.0-1.rhel8.x86_64.rpm pgdg 5.0.0 357.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-5.0.0-1.rhel8.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 18.2.0 119.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.2 78.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 77.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 60.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-6.0.1-1PGDG.rhel9.x86_64.rpm pgdg 6.0.1 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-6.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-5.0.0-1.rhel9.x86_64.rpm pgdg 5.0.0 364.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-5.0.0-1.rhel9.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 18.2.0 121.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.2 78.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 78.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 61.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-7.0.0-1PGDG.rhel10.x86_64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `db2_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install db2_fdw;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y db2_fdw -v 18  # PG 18
pig ext install -y db2_fdw -v 17  # PG 17
pig ext install -y db2_fdw -v 16  # PG 16
pig ext install -y db2_fdw -v 15  # PG 15
pig ext install -y db2_fdw -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y db2_fdw_18       # PG 18
dnf install -y db2_fdw_17       # PG 17
dnf install -y db2_fdw_16       # PG 16
dnf install -y db2_fdw_15       # PG 15
dnf install -y db2_fdw_14       # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION db2_fdw;
```

## 用法

来源：

- [18.2.0 README](https://github.com/pg-fdw/db2_fdw/blob/18.2.0/README.md)
- [18.2.0 control file](https://github.com/pg-fdw/db2_fdw/blob/18.2.0/db2_fdw.control)
- [18.2.0 SQL API](https://github.com/pg-fdw/db2_fdw/blob/18.2.0/sql/db2_fdw--18.2.0.sql)

`db2_fdw` 18.2.0 通过 PostgreSQL 外部表查询和修改 IBM Db2 表，能够下推支持的过滤条件以及所需列。上游要求 PostgreSQL 10.1 或更高版本，以及与 PostgreSQL 架构相同的 IBM Db2 客户端 11.1 或更高版本。服务进程必须能够加载该客户端并访问指定数据库；安装扩展并不会提供外部客户端或 Db2 服务。

### 连接并导入表

示例假设 Db2 客户端可以连接已编目的 SAMPLE 数据库，且存在 DB2INST1.EMPLOYEE 表。由超级用户安装扩展，然后创建服务和指定角色的用户映射；应使用真实 Db2 凭据替换示例密码：

```sql
CREATE EXTENSION db2_fdw;
CREATE SERVER db2srv FOREIGN DATA WRAPPER db2_fdw
  OPTIONS (dbserver 'SAMPLE');
CREATE USER MAPPING FOR CURRENT_USER SERVER db2srv
  OPTIONS (user 'db2inst1', password 'change-me');
CREATE SCHEMA db2_remote;
IMPORT FOREIGN SCHEMA "DB2INST1" LIMIT TO ("EMPLOYEE")
  FROM SERVER db2srv INTO db2_remote;
SELECT empno, firstname, lastname, salary
FROM db2_remote.employee
WHERE empno = '000010';
```

导入会取得封装器所需的 Db2 列元数据；默认的智能大小写折叠会将全大写名称转为小写。独立的应用角色需要外部服务 USAGE 权限、自己的用户映射以及相应模式和表权限。凭据只供单个角色使用时，不应建立 PUBLIC 映射。用户名和密码均为空字符串时会选择上游的外部认证路径，结果取决于 Db2 客户端环境。

### 选项与写入

- 服务选项 `dbserver` 指定 Db2 连接，`no_encoding_error` 控制编码转换错误处理；本版本的 `batch_size` 为保留项，不能视为已实现批量插入。
- 表选项 `schema` 和 `table` 指定远端对象，`readonly` 禁止修改。`prefetch` 默认为 100，允许 0–1024；`fetch_size` 虽可设置，目前仍固定为 1。`sample_percent` 控制 ANALYZE 采样。
- 为进行 `UPDATE` 和 `DELETE`，列选项 `key` 必须标记全部远端主键列。导入的元数据包括 `db2type`、`db2size`、`db2bytes`、`db2chars`、`db2scale`、`db2null` 和 `db2ccsid`；修改导入表时应保留这些信息。
- IMPORT FOREIGN SCHEMA 的 `case` 和 `readonly` 选项控制名称折叠以及导入表能否写入。

INSERT、UPDATE 和 DELETE 还需要 Db2 侧的权限。开放写入前，应检查列映射和远端键定义；PostgreSQL 声明本身不会创建远端主键。不支持下推的过滤会在本地执行，应检查 EXPLAIN 后再判断是否已经下推。

### 诊断与事务

```sql
SELECT db2_diag();
SELECT db2_diag('db2srv');
SELECT db2_close_connections();
```

`db2_diag()` 返回本地客户端与构建信息，并可选地返回远端服务诊断；`db2_close_connections()` 关闭当前后端缓存的连接，不应在已经修改 Db2 数据的事务中调用。长时间运行的 PostgreSQL 会话可能持续占用远端连接和事务资源。

### 类型与维护

常见映射包括字符类型到文本或字符类型、BLOB 到 bytea、整数类型到 PostgreSQL 整数类型，以及 DATE、TIMESTAMP、TIME 到对应类型。声明的 PostgreSQL 类型与宽度必须容纳远端值，转换错误会在查询时出现。控制版本为 18.2.0，允许重定位；普通使用无需共享预加载。IBM 客户端的环境和连接要求应以对应版本 README 为准，并区分软件包升级与对实际外部数据库的验证。
