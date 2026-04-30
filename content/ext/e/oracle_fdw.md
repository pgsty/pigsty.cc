---
title: "oracle_fdw"
linkTitle: "oracle_fdw"
description: "提供对Oracle的外部数据源包装器"
weight: 8610
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/laurenz/oracle_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">laurenz/oracle_fdw</div>
    <div class="ext-card__desc">https://github.com/laurenz/oracle_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/oracle_fdw-ORACLE_FDW_2_8_0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">oracle_fdw-ORACLE_FDW_2_8_0.tar.gz</div>
    <div class="ext-card__desc">oracle_fdw-ORACLE_FDW_2_8_0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`oracle_fdw`**](/ext/e/oracle_fdw) | `2.8.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8610  | [**`oracle_fdw`**](/ext/e/oracle_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`mysql_fdw`](/ext/e/mysql_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`firebird_fdw`](/ext/e/firebird_fdw) [`orafce`](/ext/e/orafce) [`wrappers`](/ext/e/wrappers) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require oracle-libs


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8.0` | {{< pgvers "18,17,16,15,14" >}} | `oracle_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8.0` | {{< pgvers "18,17,16,15,14" >}} | `oracle_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-oracle-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.8.0 4 | AVAIL PGDG 2.8.0 7 | AVAIL PGDG 2.8.0 9 | AVAIL PGDG 2.8.0 12 | AVAIL PGDG 2.8.0 13 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 2.8.0 4 | AVAIL PGDG 2.8.0 8 | AVAIL PGDG 2.8.0 10 | AVAIL PGDG 2.8.0 13 | AVAIL PGDG 2.8.0 13 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 2.8.0 4 | AVAIL PGDG 2.8.0 4 | AVAIL PGDG 2.8.0 4 | AVAIL PGDG 2.8.0 4 | AVAIL PGDG 2.8.0 4 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| d12.aarch64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| d13.x86_64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| d13.aarch64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| u22.x86_64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| u22.aarch64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| u24.x86_64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| u24.aarch64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| u26.x86_64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
| u26.aarch64 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 | AVAIL PGDG 2.8.0 1 |
@ el8.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-9PGDG.rhel8.10.x86_64.rpm pgdg 2.8.0 88.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/oracle_fdw_18-2.8.0-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-8PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/oracle_fdw_18-2.8.0-8PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-7PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/oracle_fdw_18-2.8.0-7PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-6PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-8-x86_64/oracle_fdw_18-2.8.0-6PGDG.rhel8.x86_64.rpm
@ el9.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-9PGDG.rhel9.7.x86_64.rpm pgdg 2.8.0 85.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/oracle_fdw_18-2.8.0-9PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-8PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/oracle_fdw_18-2.8.0-8PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-7PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/oracle_fdw_18-2.8.0-7PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-6PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-9-x86_64/oracle_fdw_18-2.8.0-6PGDG.rhel9.x86_64.rpm
@ el10.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-9PGDG.rhel10.1.x86_64.rpm pgdg 2.8.0 87.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/oracle_fdw_18-2.8.0-9PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-8PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/oracle_fdw_18-2.8.0-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-7PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/oracle_fdw_18-2.8.0-7PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 oracle_fdw_18 oracle_fdw_18-2.8.0-6PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/18/redhat/rhel-10-x86_64/oracle_fdw_18-2.8.0-6PGDG.rhel10.x86_64.rpm
@ d12.x86_64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb pgdg 2.8.0 85.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb pgdg 2.8.0 79.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb pgdg 2.8.0 85.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb pgdg 2.8.0 79.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb pgdg 2.8.0 73.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb pgdg 2.8.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb pgdg 2.8.0 73.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb pgdg 2.8.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb pgdg 2.8.0 74.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-oracle-fdw postgresql-18-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb pgdg 2.8.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-18-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-9PGDG.rhel8.10.x86_64.rpm pgdg 2.8.0 88.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.8.0-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-8PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.8.0-8PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-7PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.8.0-7PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-6PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.8.0-6PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-5PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.8.0-5PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.7.0-4PGDG.rhel8.x86_64.rpm pgdg 2.7.0 86.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.7.0-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.7.0-3PGDG.rhel8.x86_64.rpm pgdg 2.7.0 86.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-8-x86_64/oracle_fdw_17-2.7.0-3PGDG.rhel8.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-9PGDG.rhel9.7.x86_64.rpm pgdg 2.8.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.8.0-9PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-8PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.8.0-8PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-7PGDG.rhel9.x86_64.rpm pgdg 2.8.0 84.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.8.0-7PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-6PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.8.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-5PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.8.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.7.0-5PGDG.rhel9.x86_64.rpm pgdg 2.7.0 84.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.7.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.7.0-4PGDG.rhel9.x86_64.rpm pgdg 2.7.0 84.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.7.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.7.0-3PGDG.rhel9.x86_64.rpm pgdg 2.7.0 84.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-9-x86_64/oracle_fdw_17-2.7.0-3PGDG.rhel9.x86_64.rpm
@ el10.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-9PGDG.rhel10.1.x86_64.rpm pgdg 2.8.0 87.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/oracle_fdw_17-2.8.0-9PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-8PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/oracle_fdw_17-2.8.0-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-7PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/oracle_fdw_17-2.8.0-7PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 oracle_fdw_17 oracle_fdw_17-2.8.0-6PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/17/redhat/rhel-10-x86_64/oracle_fdw_17-2.8.0-6PGDG.rhel10.x86_64.rpm
@ d12.x86_64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb pgdg 2.8.0 85.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb pgdg 2.8.0 79.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb pgdg 2.8.0 85.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb pgdg 2.8.0 79.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb pgdg 2.8.0 73.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb pgdg 2.8.0 67.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb pgdg 2.8.0 73.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb pgdg 2.8.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb pgdg 2.8.0 74.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-oracle-fdw postgresql-17-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb pgdg 2.8.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-17-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-9PGDG.rhel8.10.x86_64.rpm pgdg 2.8.0 88.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.8.0-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-8PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.8.0-8PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-7PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.8.0-7PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-6PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.8.0-6PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-5PGDG.rhel8.x86_64.rpm pgdg 2.8.0 87.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.8.0-5PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.7.0-4PGDG.rhel8.x86_64.rpm pgdg 2.7.0 86.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.7.0-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.7.0-3PGDG.rhel8.x86_64.rpm pgdg 2.7.0 86.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.7.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.6.0-3PGDG.rhel8.x86_64.rpm pgdg 2.6.0 85.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.6.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.6.0-2PGDG.rhel8.x86_64.rpm pgdg 2.6.0 85.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-8-x86_64/oracle_fdw_16-2.6.0-2PGDG.rhel8.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-9PGDG.rhel9.7.x86_64.rpm pgdg 2.8.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.8.0-9PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-8PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.8.0-8PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-7PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.8.0-7PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-6PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.8.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-5PGDG.rhel9.x86_64.rpm pgdg 2.8.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.8.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.7.0-5PGDG.rhel9.x86_64.rpm pgdg 2.7.0 84.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.7.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.7.0-4PGDG.rhel9.x86_64.rpm pgdg 2.7.0 84.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.7.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.7.0-3PGDG.rhel9.x86_64.rpm pgdg 2.7.0 84.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.7.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.6.0-3PGDG.rhel9.x86_64.rpm pgdg 2.6.0 83.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.6.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.6.0-2PGDG.rhel9.x86_64.rpm pgdg 2.6.0 83.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-9-x86_64/oracle_fdw_16-2.6.0-2PGDG.rhel9.x86_64.rpm
@ el10.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-9PGDG.rhel10.1.x86_64.rpm pgdg 2.8.0 87.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/oracle_fdw_16-2.8.0-9PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-8PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/oracle_fdw_16-2.8.0-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-7PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/oracle_fdw_16-2.8.0-7PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 oracle_fdw_16 oracle_fdw_16-2.8.0-6PGDG.rhel10.x86_64.rpm pgdg 2.8.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/16/redhat/rhel-10-x86_64/oracle_fdw_16-2.8.0-6PGDG.rhel10.x86_64.rpm
@ d12.x86_64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb pgdg 2.8.0 85.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb pgdg 2.8.0 79.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb pgdg 2.8.0 85.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb pgdg 2.8.0 79.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb pgdg 2.8.0 73.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb pgdg 2.8.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb pgdg 2.8.0 73.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb pgdg 2.8.0 67.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb pgdg 2.8.0 74.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-oracle-fdw postgresql-16-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb pgdg 2.8.0 67.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-16-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-9PGDG.rhel8.10.x86_64.rpm pgdg 2.8.0 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.8.0-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-8PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.8.0-8PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-7PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.8.0-7PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-6PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.8.0-6PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-5PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.8.0-5PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.7.0-4PGDG.rhel8.x86_64.rpm pgdg 2.7.0 87.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.7.0-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.7.0-3PGDG.rhel8.x86_64.rpm pgdg 2.7.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.7.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.6.0-3PGDG.rhel8.x86_64.rpm pgdg 2.6.0 86.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.6.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 86.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.5.0-3.rhel8.x86_64.rpm pgdg 2.5.0 84.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.5.0-3.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.5.0-2.rhel8.x86_64.rpm pgdg 2.5.0 84.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.5.0-2.rhel8.x86_64.rpm
@ el8.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.5.0-1.rhel8.x86_64.rpm pgdg 2.5.0 84.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-8-x86_64/oracle_fdw_15-2.5.0-1.rhel8.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-9PGDG.rhel9.7.x86_64.rpm pgdg 2.8.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.8.0-9PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-8PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.8.0-8PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-7PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.8.0-7PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-6PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.8.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-5PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.8.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.7.0-5PGDG.rhel9.x86_64.rpm pgdg 2.7.0 86.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.7.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.7.0-4PGDG.rhel9.x86_64.rpm pgdg 2.7.0 86.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.7.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.7.0-3PGDG.rhel9.x86_64.rpm pgdg 2.7.0 86.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.7.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.6.0-3PGDG.rhel9.x86_64.rpm pgdg 2.6.0 85.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.6.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.6.0-1PGDG.rhel9.x86_64.rpm pgdg 2.6.0 85.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.5.0-3.rhel9.x86_64.rpm pgdg 2.5.0 83.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.5.0-3.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.5.0-2.rhel9.x86_64.rpm pgdg 2.5.0 83.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.5.0-2.rhel9.x86_64.rpm
@ el9.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.5.0-1.rhel9.x86_64.rpm pgdg 2.5.0 83.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-9-x86_64/oracle_fdw_15-2.5.0-1.rhel9.x86_64.rpm
@ el10.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-9PGDG.rhel10.1.x86_64.rpm pgdg 2.8.0 88.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/oracle_fdw_15-2.8.0-9PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-8PGDG.rhel10.x86_64.rpm pgdg 2.8.0 88.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/oracle_fdw_15-2.8.0-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-7PGDG.rhel10.x86_64.rpm pgdg 2.8.0 88.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/oracle_fdw_15-2.8.0-7PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 oracle_fdw_15 oracle_fdw_15-2.8.0-6PGDG.rhel10.x86_64.rpm pgdg 2.8.0 88.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/15/redhat/rhel-10-x86_64/oracle_fdw_15-2.8.0-6PGDG.rhel10.x86_64.rpm
@ d12.x86_64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb pgdg 2.8.0 86.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb pgdg 2.8.0 79.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb pgdg 2.8.0 86.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb pgdg 2.8.0 80.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb pgdg 2.8.0 75.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb pgdg 2.8.0 69.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb pgdg 2.8.0 75.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb pgdg 2.8.0 69.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb pgdg 2.8.0 76.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-oracle-fdw postgresql-15-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb pgdg 2.8.0 69.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-15-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-9PGDG.rhel8.10.x86_64.rpm pgdg 2.8.0 89.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.8.0-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-8PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.8.0-8PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-7PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.8.0-7PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-6PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.8.0-6PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-5PGDG.rhel8.x86_64.rpm pgdg 2.8.0 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.8.0-5PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.7.0-4PGDG.rhel8.x86_64.rpm pgdg 2.7.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.7.0-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.7.0-3PGDG.rhel8.x86_64.rpm pgdg 2.7.0 87.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.7.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.6.0-3PGDG.rhel8.x86_64.rpm pgdg 2.6.0 87.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.6.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.6.0-1PGDG.rhel8.x86_64.rpm pgdg 2.6.0 86.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.5.0-3.rhel8.x86_64.rpm pgdg 2.5.0 84.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.5.0-3.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.5.0-2.rhel8.x86_64.rpm pgdg 2.5.0 84.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.5.0-2.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.5.0-1.rhel8.x86_64.rpm pgdg 2.5.0 84.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.4.0-3.rhel8.x86_64.rpm pgdg 2.4.0 83.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-8-x86_64/oracle_fdw_14-2.4.0-3.rhel8.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-9PGDG.rhel9.7.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.8.0-9PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-8PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.8.0-8PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-7PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.8.0-7PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-6PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.8.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-5PGDG.rhel9.x86_64.rpm pgdg 2.8.0 87.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.8.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.7.0-5PGDG.rhel9.x86_64.rpm pgdg 2.7.0 87.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.7.0-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.7.0-4PGDG.rhel9.x86_64.rpm pgdg 2.7.0 86.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.7.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.7.0-3PGDG.rhel9.x86_64.rpm pgdg 2.7.0 86.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.7.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.6.0-3PGDG.rhel9.x86_64.rpm pgdg 2.6.0 85.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.6.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.6.0-1PGDG.rhel9.x86_64.rpm pgdg 2.6.0 85.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.5.0-3.rhel9.x86_64.rpm pgdg 2.5.0 83.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.5.0-3.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.5.0-2.rhel9.x86_64.rpm pgdg 2.5.0 83.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.5.0-2.rhel9.x86_64.rpm
@ el9.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.5.0-1.rhel9.x86_64.rpm pgdg 2.5.0 83.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-9-x86_64/oracle_fdw_14-2.5.0-1.rhel9.x86_64.rpm
@ el10.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-9PGDG.rhel10.1.x86_64.rpm pgdg 2.8.0 88.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/oracle_fdw_14-2.8.0-9PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-8PGDG.rhel10.x86_64.rpm pgdg 2.8.0 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/oracle_fdw_14-2.8.0-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-7PGDG.rhel10.x86_64.rpm pgdg 2.8.0 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/oracle_fdw_14-2.8.0-7PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 oracle_fdw_14 oracle_fdw_14-2.8.0-6PGDG.rhel10.x86_64.rpm pgdg 2.8.0 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/non-free/14/redhat/rhel-10-x86_64/oracle_fdw_14-2.8.0-6PGDG.rhel10.x86_64.rpm
@ d12.x86_64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb pgdg 2.8.0 86.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb pgdg 2.8.0 80.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb pgdg 2.8.0 86.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb pgdg 2.8.0 80.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb pgdg 2.8.0 75.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb pgdg 2.8.0 70.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb pgdg 2.8.0 75.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb pgdg 2.8.0 69.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb pgdg 2.8.0 76.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-oracle-fdw postgresql-14-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb pgdg 2.8.0 69.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/oracle-fdw/postgresql-14-oracle-fdw_2.8.0-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `oracle_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install oracle_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y oracle_fdw -v 18  # PG 18
pig ext install -y oracle_fdw -v 17  # PG 17
pig ext install -y oracle_fdw -v 16  # PG 16
pig ext install -y oracle_fdw -v 15  # PG 15
pig ext install -y oracle_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y oracle_fdw_18       # PG 18
dnf install -y oracle_fdw_17       # PG 17
dnf install -y oracle_fdw_16       # PG 16
dnf install -y oracle_fdw_15       # PG 15
dnf install -y oracle_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-oracle-fdw   # PG 18
apt install -y postgresql-17-oracle-fdw   # PG 17
apt install -y postgresql-16-oracle-fdw   # PG 16
apt install -y postgresql-15-oracle-fdw   # PG 15
apt install -y postgresql-14-oracle-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION oracle_fdw;
```



## 用法

> [oracle_fdw: 访问 Oracle 的外部数据包装器](https://github.com/laurenz/oracle_fdw)

### 创建服务器

```sql
CREATE EXTENSION oracle_fdw;

CREATE SERVER oradb FOREIGN DATA WRAPPER oracle_fdw
  OPTIONS (dbserver '//dbserver.mydomain.com:1521/ORADB');
```

**服务器选项：** `dbserver`（必填，Oracle 连接字符串）、`isolation_level`（`serializable`、`read_committed` 或 `read_only`，默认 `serializable`）、`nchar`（昂贵的字符转换，默认 `off`）、`set_timezone`（与 Oracle 同步时区，默认 `off`）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR pguser SERVER oradb
  OPTIONS (user 'orauser', password 'orapwd');
```

`user` 使用空字符串可启用外部（OS）认证。

### 创建外部表

```sql
CREATE FOREIGN TABLE oratab (
  id integer OPTIONS (key 'true') NOT NULL,
  text character varying(30),
  floating double precision NOT NULL
)
SERVER oradb
OPTIONS (schema 'ORAUSER', table 'ORATAB');
```

**表选项：** `table`（必填，Oracle 表名，大写）、`schema`（表所有者）、`dblink`（Oracle DB link）、`max_long`（LONG 列最大长度，默认 32767）、`readonly`（默认 `false`）、`sample_percent`（ANALYZE 采样率，默认 100）、`prefetch`（每次往返获取行数，默认 50）。

**列选项：** `key`（标记为主键，UPDATE/DELETE 必需）、`strip_zeros`（从字符串中移除 ASCII 0）。

也可以用查询代替表名，将其放在括号中：

```sql
CREATE FOREIGN TABLE oraquery (
  id integer,
  text character varying(30)
)
SERVER oradb
OPTIONS (table '(SELECT id, text FROM ORAUSER.ORATAB WHERE id > 10)');
```

### 导入外部模式

```sql
IMPORT FOREIGN SCHEMA "ORAUSER"
  FROM SERVER oradb INTO local_schema;
```

**导入选项：** `case`（`keep`、`lower` 或 `smart`，默认 `smart`）、`readonly`、`skip_tables`、`skip_views`、`skip_matviews`、`max_long`、`sample_percent`、`prefetch`。

### 工具函数

```sql
SELECT oracle_diag();              -- 显示版本和环境信息
SELECT oracle_diag('oradb');       -- 包含 Oracle 服务器版本
SELECT oracle_close_connections(); -- 关闭所有缓存的 Oracle 连接
SELECT oracle_execute('oradb', 'TRUNCATE TABLE ORAUSER.ORATAB'); -- 执行任意 Oracle SQL
```

### 数据类型映射

| Oracle 类型 | PostgreSQL 类型 |
|---|---|
| CHAR, VARCHAR2, NVARCHAR2 | char, varchar, text |
| CLOB, NCLOB | text, json |
| NUMBER | numeric, float4, float8, int2, int4, int8, boolean |
| DATE, TIMESTAMP | date, timestamp, timestamptz |
| BLOB, LONG RAW | bytea |
| XMLTYPE | xml, text |
| SDO_GEOMETRY | geometry (PostGIS) |
