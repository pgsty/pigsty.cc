---
title: "db2_fdw"
linkTitle: "db2_fdw"
description: "提供对DB2的外部数据源包装器"
weight: 8630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/wolfgangbrandl/db2_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">wolfgangbrandl/db2_fdw</div>
    <div class="ext-card__desc">https://github.com/wolfgangbrandl/db2_fdw</div>
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
| [**`db2_fdw`**](/ext/e/db2_fdw) | `18.1.1` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8630  | [**`db2_fdw`**](/ext/e/db2_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`odbc_fdw`](/ext/e/odbc_fdw) [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.1.1` | {{< pgvers "18,17,16,15,14" >}} | `db2_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.1.1` | {{< pgvers "18,17,16,15,14" >}} | `db2_fdw_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 18.1.1 3 | AVAIL PGDG 18.1.1 4 | AVAIL PGDG 18.1.1 5 | AVAIL PGDG 18.1.1 5 | AVAIL PGDG 18.1.1 6 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 18.1.1 3 | AVAIL PGDG 18.1.1 4 | AVAIL PGDG 18.1.1 5 | AVAIL PGDG 18.1.1 5 | AVAIL PGDG 18.1.1 6 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 18.1.1 3 | AVAIL PGDG 18.1.1 4 | AVAIL PGDG 18.1.1 4 | AVAIL PGDG 18.1.1 4 | AVAIL PGDG 18.1.1 4 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/db2_fdw_18-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 72.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/db2_fdw_18-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 db2_fdw_18 db2_fdw_18-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/db2_fdw_18-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 db2_fdw_17 db2_fdw_17-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 59.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/db2_fdw_17-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 72.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 db2_fdw_17 db2_fdw_17-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/db2_fdw_17-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 db2_fdw_17 db2_fdw_17-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 57.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/db2_fdw_17-7.0.0-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 70.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 59.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 db2_fdw_16 db2_fdw_16-6.0.1-1PGDG.rhel8.x86_64.rpm pgdg 6.0.1 59.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/db2_fdw_16-6.0.1-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 72.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 64.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 db2_fdw_16 db2_fdw_16-6.0.1-1PGDG.rhel9.x86_64.rpm pgdg 6.0.1 58.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/db2_fdw_16-6.0.1-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 65.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 db2_fdw_16 db2_fdw_16-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 57.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/db2_fdw_16-7.0.0-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 81.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 60.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 db2_fdw_15 db2_fdw_15-6.0.1-1PGDG.rhel8.x86_64.rpm pgdg 6.0.1 60.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/db2_fdw_15-6.0.1-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 77.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 60.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 db2_fdw_15 db2_fdw_15-6.0.1-1PGDG.rhel9.x86_64.rpm pgdg 6.0.1 62.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/db2_fdw_15-6.0.1-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 78.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 70.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 69.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 db2_fdw_15 db2_fdw_15-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 60.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/db2_fdw_15-7.0.0-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1.1 81.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-2PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.0.1-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-1PGDG.rhel8.x86_64.rpm pgdg 18.0.1 73.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-18.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-7.0.0-1PGDG.rhel8.x86_64.rpm pgdg 7.0.0 60.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-7.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-6.0.1-1PGDG.rhel8.x86_64.rpm pgdg 6.0.1 60.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-6.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 db2_fdw_14 db2_fdw_14-5.0.0-1.rhel8.x86_64.rpm pgdg 5.0.0 357.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/db2_fdw_14-5.0.0-1.rhel8.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.1-1PGDG.rhel9.7.x86_64.rpm pgdg 18.1.1 77.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.1.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-2PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.0.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-1PGDG.rhel9.x86_64.rpm pgdg 18.0.1 69.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-18.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-7.0.0-1PGDG.rhel9.x86_64.rpm pgdg 7.0.0 60.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-7.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-6.0.1-1PGDG.rhel9.x86_64.rpm pgdg 6.0.1 62.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-6.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 db2_fdw_14 db2_fdw_14-5.0.0-1.rhel9.x86_64.rpm pgdg 5.0.0 364.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/db2_fdw_14-5.0.0-1.rhel9.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.1.1-1PGDG.rhel10.1.x86_64.rpm pgdg 18.1.1 78.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.1.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-2PGDG.rhel10.x86_64.rpm pgdg 18.0.1 70.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.0.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-18.0.1-1PGDG.rhel10.x86_64.rpm pgdg 18.0.1 70.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-18.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 db2_fdw_14 db2_fdw_14-7.0.0-1PGDG.rhel10.x86_64.rpm pgdg 7.0.0 61.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/db2_fdw_14-7.0.0-1PGDG.rhel10.x86_64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `db2_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install db2_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y db2_fdw -v 18  # PG 18
pig ext install -y db2_fdw -v 17  # PG 17
pig ext install -y db2_fdw -v 16  # PG 16
pig ext install -y db2_fdw -v 15  # PG 15
pig ext install -y db2_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y db2_fdw_18       # PG 18
dnf install -y db2_fdw_17       # PG 17
dnf install -y db2_fdw_16       # PG 16
dnf install -y db2_fdw_15       # PG 15
dnf install -y db2_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION db2_fdw;
```



## 用法

> [db2_fdw: 访问 DB2 的外部数据包装器](https://github.com/wolfgangbrandl/db2_fdw)

### 创建服务器

```sql
CREATE EXTENSION db2_fdw;

CREATE SERVER db2srv FOREIGN DATA WRAPPER db2_fdw
  OPTIONS (dbserver 'SAMPLE');
```

**服务器选项：** `dbserver`（必填，DB2 数据库连接字符串）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR PUBLIC SERVER db2srv
  OPTIONS (user 'db2inst1', password 'secret');
```

`user` 和 `password` 使用空字符串可启用外部认证。

### 创建外部表

```sql
CREATE FOREIGN TABLE employee (
  empno char(6) OPTIONS (key 'true'),
  firstname varchar(12),
  lastname varchar(15),
  salary numeric
)
SERVER db2srv
OPTIONS (schema 'DB2INST1', table 'EMPLOYEE');
```

**表选项：** `table`（必填，DB2 表名，区分大小写，通常大写）、`schema`（表所有者）、`readonly`（默认 `false`）、`prefetch`（每次往返获取行数，默认 200，范围 0-10240）、`max_long`（LONG 列最大长度，默认 32767）。

**列选项：** `key`（设为 `true` 标记主键列，UPDATE/DELETE 必需）。

### 导入外部模式

```sql
IMPORT FOREIGN SCHEMA "DB2INST1" FROM SERVER db2srv INTO public;
```

**导入选项：** `case`（`keep`、`lower` 或 `smart`，默认 `smart`）、`readonly`。

### CRUD 操作

```sql
SELECT * FROM employee WHERE empno = '000010';
INSERT INTO employee (empno, firstname, lastname, salary) VALUES ('999999', 'John', 'Doe', 50000);
UPDATE employee SET salary = 55000 WHERE empno = '999999';
DELETE FROM employee WHERE empno = '999999';
```

### 数据类型映射

| DB2 类型 | PostgreSQL 类型 |
|----------|------------------|
| CHAR | char |
| VARCHAR | varchar |
| CLOB | text |
| BLOB | bytea |
| SMALLINT, INTEGER, BIGINT | smallint, integer, bigint |
| DOUBLE | numeric, float |
| DATE | date |
| TIMESTAMP | timestamp |
| TIME | time |

WHERE 条件和列投影会下推到 DB2 以最小化数据传输。
