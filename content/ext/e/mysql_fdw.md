---
title: "mysql_fdw"
linkTitle: "mysql_fdw"
description: "MySQL外部数据包装器"
weight: 8600
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/mysql_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/mysql_fdw</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/mysql_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/mysql_fdw-REL-2_9_3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">mysql_fdw-REL-2_9_3.tar.gz</div>
    <div class="ext-card__desc">mysql_fdw-REL-2_9_3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mysql_fdw`**](/ext/e/mysql_fdw) | `2.9.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8600  | [**`mysql_fdw`**](/ext/e/mysql_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`oracle_fdw`](/ext/e/oracle_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.9.3` | {{< pgvers "18,17,16,15,14" >}} | `mysql_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.9.3` | {{< pgvers "18,17,16,15,14" >}} | `mysql_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.9.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-mysql-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 3 | AVAIL PGDG 2.9.3 5 | AVAIL PGDG 2.9.3 7 |
| el8.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 3 | AVAIL PGDG 2.9.3 4 | AVAIL PGDG 2.9.3 4 |
| el9.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 3 | AVAIL PGDG 2.9.3 5 | AVAIL PGDG 2.9.3 6 |
| el9.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 3 | AVAIL PGDG 2.9.3 4 | AVAIL PGDG 2.9.3 4 |
| el10.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 2 |
| el10.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 2 | AVAIL PGDG 2.9.3 2 |
| d12.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| d12.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| d13.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| d13.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| u22.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| u22.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| u24.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| u24.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| u26.x86_64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
| u26.aarch64 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 | AVAIL PGDG 2.9.3 1 |
@ el8.x86_64 18 mysql_fdw_18 mysql_fdw_18-2.9.3-3PGDG.rhel8.x86_64.rpm pgdg 2.9.3 135.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/mysql_fdw_18-2.9.3-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 mysql_fdw_18 mysql_fdw_18-2.9.3-3PGDG.rhel8.aarch64.rpm pgdg 2.9.3 133.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/mysql_fdw_18-2.9.3-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 mysql_fdw_18 mysql_fdw_18-2.9.3-3PGDG.rhel9.x86_64.rpm pgdg 2.9.3 135.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/mysql_fdw_18-2.9.3-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 mysql_fdw_18 mysql_fdw_18-2.9.3-3PGDG.rhel9.aarch64.rpm pgdg 2.9.3 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/mysql_fdw_18-2.9.3-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 mysql_fdw_18 mysql_fdw_18-2.9.3-3PGDG.rhel10.x86_64.rpm pgdg 2.9.3 136.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/mysql_fdw_18-2.9.3-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 mysql_fdw_18 mysql_fdw_18-2.9.3-3PGDG.rhel10.aarch64.rpm pgdg 2.9.3 135.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/mysql_fdw_18-2.9.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb pgdg 2.9.3 124.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb pgdg 2.9.3 120.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb pgdg 2.9.3 124.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb pgdg 2.9.3 121.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb pgdg 2.9.3 129.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb pgdg 2.9.3 126.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb pgdg 2.9.3 123.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb pgdg 2.9.3 120.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb pgdg 2.9.3 122.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-mysql-fdw postgresql-18-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb pgdg 2.9.3 119.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-18-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 mysql_fdw_17 mysql_fdw_17-2.9.3-3PGDG.rhel8.x86_64.rpm pgdg 2.9.3 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/mysql_fdw_17-2.9.3-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 mysql_fdw_17 mysql_fdw_17-2.9.2-2PGDG.rhel8.x86_64.rpm pgdg 2.9.2 139.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/mysql_fdw_17-2.9.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 mysql_fdw_17 mysql_fdw_17-2.9.3-3PGDG.rhel8.aarch64.rpm pgdg 2.9.3 133.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/mysql_fdw_17-2.9.3-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 mysql_fdw_17 mysql_fdw_17-2.9.2-2PGDG.rhel8.aarch64.rpm pgdg 2.9.2 137.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/mysql_fdw_17-2.9.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 mysql_fdw_17 mysql_fdw_17-2.9.3-3PGDG.rhel9.x86_64.rpm pgdg 2.9.3 135.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/mysql_fdw_17-2.9.3-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 mysql_fdw_17 mysql_fdw_17-2.9.2-2PGDG.rhel9.x86_64.rpm pgdg 2.9.2 139.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/mysql_fdw_17-2.9.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 mysql_fdw_17 mysql_fdw_17-2.9.3-3PGDG.rhel9.aarch64.rpm pgdg 2.9.3 133.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/mysql_fdw_17-2.9.3-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 mysql_fdw_17 mysql_fdw_17-2.9.2-2PGDG.rhel9.aarch64.rpm pgdg 2.9.2 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/mysql_fdw_17-2.9.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 mysql_fdw_17 mysql_fdw_17-2.9.3-3PGDG.rhel10.x86_64.rpm pgdg 2.9.3 136.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/mysql_fdw_17-2.9.3-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 mysql_fdw_17 mysql_fdw_17-2.9.2-3PGDG.rhel10.x86_64.rpm pgdg 2.9.2 136.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/mysql_fdw_17-2.9.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 mysql_fdw_17 mysql_fdw_17-2.9.3-3PGDG.rhel10.aarch64.rpm pgdg 2.9.3 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mysql_fdw_17-2.9.3-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 mysql_fdw_17 mysql_fdw_17-2.9.2-3PGDG.rhel10.aarch64.rpm pgdg 2.9.2 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mysql_fdw_17-2.9.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb pgdg 2.9.3 123.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb pgdg 2.9.3 120.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb pgdg 2.9.3 124.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb pgdg 2.9.3 121.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb pgdg 2.9.3 146.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb pgdg 2.9.3 142.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb pgdg 2.9.3 123.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb pgdg 2.9.3 120.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb pgdg 2.9.3 122.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-mysql-fdw postgresql-17-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb pgdg 2.9.3 119.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-17-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.3-3PGDG.rhel8.x86_64.rpm pgdg 2.9.3 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mysql_fdw_16-2.9.3-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.2-1PGDG.rhel8.x86_64.rpm pgdg 2.9.2 139.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mysql_fdw_16-2.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.1-1PGDG.rhel8.x86_64.rpm pgdg 2.9.1 155.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mysql_fdw_16-2.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.3-3PGDG.rhel8.aarch64.rpm pgdg 2.9.3 133.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mysql_fdw_16-2.9.3-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.2-1PGDG.rhel8.aarch64.rpm pgdg 2.9.2 137.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mysql_fdw_16-2.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.1-1PGDG.rhel8.aarch64.rpm pgdg 2.9.1 152.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mysql_fdw_16-2.9.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.3-3PGDG.rhel9.x86_64.rpm pgdg 2.9.3 135.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/mysql_fdw_16-2.9.3-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.2-1PGDG.rhel9.x86_64.rpm pgdg 2.9.2 139.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/mysql_fdw_16-2.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.1-1PGDG.rhel9.x86_64.rpm pgdg 2.9.1 155.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/mysql_fdw_16-2.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.3-3PGDG.rhel9.aarch64.rpm pgdg 2.9.3 133.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/mysql_fdw_16-2.9.3-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.2-1PGDG.rhel9.aarch64.rpm pgdg 2.9.2 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/mysql_fdw_16-2.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.1-1PGDG.rhel9.aarch64.rpm pgdg 2.9.1 154.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/mysql_fdw_16-2.9.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.3-3PGDG.rhel10.x86_64.rpm pgdg 2.9.3 136.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/mysql_fdw_16-2.9.3-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 mysql_fdw_16 mysql_fdw_16-2.9.2-3PGDG.rhel10.x86_64.rpm pgdg 2.9.2 136.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/mysql_fdw_16-2.9.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.3-3PGDG.rhel10.aarch64.rpm pgdg 2.9.3 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mysql_fdw_16-2.9.3-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 mysql_fdw_16 mysql_fdw_16-2.9.2-3PGDG.rhel10.aarch64.rpm pgdg 2.9.2 134.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mysql_fdw_16-2.9.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb pgdg 2.9.3 123.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb pgdg 2.9.3 120.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb pgdg 2.9.3 124.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb pgdg 2.9.3 121.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb pgdg 2.9.3 145.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb pgdg 2.9.3 142.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb pgdg 2.9.3 123.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb pgdg 2.9.3 120.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb pgdg 2.9.3 122.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-mysql-fdw postgresql-16-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb pgdg 2.9.3 119.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-16-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.3-3PGDG.rhel8.x86_64.rpm pgdg 2.9.3 135.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mysql_fdw_15-2.9.3-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.2-1PGDG.rhel8.x86_64.rpm pgdg 2.9.2 139.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mysql_fdw_15-2.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.1-1PGDG.rhel8.x86_64.rpm pgdg 2.9.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mysql_fdw_15-2.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.0-1.rhel8.x86_64.rpm pgdg 2.9.0 155.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mysql_fdw_15-2.9.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.8.0-2.rhel8.x86_64.rpm pgdg 2.8.0 138.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mysql_fdw_15-2.8.0-2.rhel8.x86_64.rpm
@ el8.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.3-3PGDG.rhel8.aarch64.rpm pgdg 2.9.3 133.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mysql_fdw_15-2.9.3-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.2-1PGDG.rhel8.aarch64.rpm pgdg 2.9.2 137.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mysql_fdw_15-2.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.1-1PGDG.rhel8.aarch64.rpm pgdg 2.9.1 134.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mysql_fdw_15-2.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.0-1.rhel8.aarch64.rpm pgdg 2.9.0 152.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mysql_fdw_15-2.9.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.3-3PGDG.rhel9.x86_64.rpm pgdg 2.9.3 135.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/mysql_fdw_15-2.9.3-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.2-1PGDG.rhel9.x86_64.rpm pgdg 2.9.2 140.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/mysql_fdw_15-2.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.1-1PGDG.rhel9.x86_64.rpm pgdg 2.9.1 156.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/mysql_fdw_15-2.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.0-1.rhel9.x86_64.rpm pgdg 2.9.0 156.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/mysql_fdw_15-2.9.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.8.0-2.rhel9.x86_64.rpm pgdg 2.8.0 140.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/mysql_fdw_15-2.8.0-2.rhel9.x86_64.rpm
@ el9.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.3-3PGDG.rhel9.aarch64.rpm pgdg 2.9.3 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/mysql_fdw_15-2.9.3-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.2-1PGDG.rhel9.aarch64.rpm pgdg 2.9.2 138.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/mysql_fdw_15-2.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.1-1PGDG.rhel9.aarch64.rpm pgdg 2.9.1 136.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/mysql_fdw_15-2.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.0-1.rhel9.aarch64.rpm pgdg 2.9.0 154.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/mysql_fdw_15-2.9.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.3-3PGDG.rhel10.x86_64.rpm pgdg 2.9.3 137.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/mysql_fdw_15-2.9.3-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 mysql_fdw_15 mysql_fdw_15-2.9.2-3PGDG.rhel10.x86_64.rpm pgdg 2.9.2 137.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/mysql_fdw_15-2.9.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.3-3PGDG.rhel10.aarch64.rpm pgdg 2.9.3 135.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mysql_fdw_15-2.9.3-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 mysql_fdw_15 mysql_fdw_15-2.9.2-3PGDG.rhel10.aarch64.rpm pgdg 2.9.2 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mysql_fdw_15-2.9.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb pgdg 2.9.3 124.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb pgdg 2.9.3 120.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb pgdg 2.9.3 124.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb pgdg 2.9.3 121.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb pgdg 2.9.3 146.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb pgdg 2.9.3 142.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb pgdg 2.9.3 124.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb pgdg 2.9.3 120.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb pgdg 2.9.3 123.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-mysql-fdw postgresql-15-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb pgdg 2.9.3 119.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-15-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.3-3PGDG.rhel8.x86_64.rpm pgdg 2.9.3 136.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.9.3-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.2-1PGDG.rhel8.x86_64.rpm pgdg 2.9.2 139.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.1-1PGDG.rhel8.x86_64.rpm pgdg 2.9.1 155.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.0-1.rhel8.x86_64.rpm pgdg 2.9.0 155.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.9.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.8.0-2.rhel8.x86_64.rpm pgdg 2.8.0 138.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.8.0-2.rhel8.x86_64.rpm
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.7.0-1.rhel8.x86_64.rpm pgdg 2.7.0 129.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.7.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.6.1-2.rhel8.x86_64.rpm pgdg 2.6.1 122.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/mysql_fdw_14-2.6.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.3-3PGDG.rhel8.aarch64.rpm pgdg 2.9.3 133.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/mysql_fdw_14-2.9.3-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.2-1PGDG.rhel8.aarch64.rpm pgdg 2.9.2 137.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/mysql_fdw_14-2.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.1-1PGDG.rhel8.aarch64.rpm pgdg 2.9.1 135.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/mysql_fdw_14-2.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.0-1.rhel8.aarch64.rpm pgdg 2.9.0 152.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/mysql_fdw_14-2.9.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.3-3PGDG.rhel9.x86_64.rpm pgdg 2.9.3 136.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/mysql_fdw_14-2.9.3-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.2-1PGDG.rhel9.x86_64.rpm pgdg 2.9.2 140.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/mysql_fdw_14-2.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.1-1PGDG.rhel9.x86_64.rpm pgdg 2.9.1 156.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/mysql_fdw_14-2.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.0-1.rhel9.x86_64.rpm pgdg 2.9.0 156.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/mysql_fdw_14-2.9.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.8.0-2.rhel9.x86_64.rpm pgdg 2.8.0 140.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/mysql_fdw_14-2.8.0-2.rhel9.x86_64.rpm
@ el9.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.7.0-1.rhel9.x86_64.rpm pgdg 2.7.0 130.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/mysql_fdw_14-2.7.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.3-3PGDG.rhel9.aarch64.rpm pgdg 2.9.3 134.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/mysql_fdw_14-2.9.3-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.2-1PGDG.rhel9.aarch64.rpm pgdg 2.9.2 138.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/mysql_fdw_14-2.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.1-1PGDG.rhel9.aarch64.rpm pgdg 2.9.1 136.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/mysql_fdw_14-2.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.0-1.rhel9.aarch64.rpm pgdg 2.9.0 154.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/mysql_fdw_14-2.9.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.3-3PGDG.rhel10.x86_64.rpm pgdg 2.9.3 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/mysql_fdw_14-2.9.3-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 mysql_fdw_14 mysql_fdw_14-2.9.2-3PGDG.rhel10.x86_64.rpm pgdg 2.9.2 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/mysql_fdw_14-2.9.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.3-3PGDG.rhel10.aarch64.rpm pgdg 2.9.3 135.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/mysql_fdw_14-2.9.3-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 mysql_fdw_14 mysql_fdw_14-2.9.2-3PGDG.rhel10.aarch64.rpm pgdg 2.9.2 135.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/mysql_fdw_14-2.9.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb pgdg 2.9.3 124.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb pgdg 2.9.3 121.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb pgdg 2.9.3 125.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb pgdg 2.9.3 121.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb pgdg 2.9.3 146.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb pgdg 2.9.3 143.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb pgdg 2.9.3 124.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb pgdg 2.9.3 121.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb pgdg 2.9.3 123.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-mysql-fdw postgresql-14-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb pgdg 2.9.3 120.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-mysql-fdw/postgresql-14-mysql-fdw_2.9.3-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `mysql_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install mysql_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y mysql_fdw -v 18  # PG 18
pig ext install -y mysql_fdw -v 17  # PG 17
pig ext install -y mysql_fdw -v 16  # PG 16
pig ext install -y mysql_fdw -v 15  # PG 15
pig ext install -y mysql_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y mysql_fdw_18       # PG 18
dnf install -y mysql_fdw_17       # PG 17
dnf install -y mysql_fdw_16       # PG 16
dnf install -y mysql_fdw_15       # PG 15
dnf install -y mysql_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-mysql-fdw   # PG 18
apt install -y postgresql-17-mysql-fdw   # PG 17
apt install -y postgresql-16-mysql-fdw   # PG 16
apt install -y postgresql-15-mysql-fdw   # PG 15
apt install -y postgresql-14-mysql-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION mysql_fdw;
```



## 用法

> [mysql_fdw: 查询 MySQL 服务器的外部数据包装器](https://github.com/EnterpriseDB/mysql_fdw)

### 创建服务器

```sql
CREATE EXTENSION mysql_fdw;

CREATE SERVER mysql_server
  FOREIGN DATA WRAPPER mysql_fdw
  OPTIONS (host '127.0.0.1', port '3306');
```

**服务器选项：** `host`（默认 `127.0.0.1`）、`port`（默认 `3306`）、`secure_auth`（默认 `true`）、`init_command`、`use_remote_estimate`（默认 `false`）、`reconnect`（默认 `false`）、`sql_mode`（默认 `ANSI_QUOTES`）、`fetch_size`（默认 `100`）、`character_set`、`truncatable`（默认 `true`），以及 SSL 选项（`ssl_key`、`ssl_cert`、`ssl_ca`、`ssl_capath`、`ssl_cipher`）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR pguser
  SERVER mysql_server
  OPTIONS (username 'mysqluser', password 'mysqlpass');
```

### 创建外部表

```sql
CREATE FOREIGN TABLE warehouse (
  warehouse_id int,
  warehouse_name text,
  warehouse_created timestamp
)
SERVER mysql_server
OPTIONS (dbname 'mydb', table_name 'warehouse');
```

**表选项：** `dbname`（必填，MySQL 数据库名）、`table_name`（默认为外部表名）、`fetch_size`（覆盖服务器设置）、`max_blob_size`、`truncatable`（默认 `true`）。

### CRUD 操作

```sql
INSERT INTO warehouse VALUES (1, 'UPS', current_date);
SELECT * FROM warehouse ORDER BY warehouse_id;
UPDATE warehouse SET warehouse_name = 'NEW_NAME' WHERE warehouse_id = 1;
DELETE FROM warehouse WHERE warehouse_id = 3;
```

### 下推特性

mysql_fdw 通过多种下推机制优化查询：

- **WHERE 子句** 下推以最小化数据传输
- **列** 下推以仅获取请求的列
- **JOIN** 下推用于同一 MySQL 服务器上外部表之间的连接
- **聚合** 下推支持 `min`、`max`、`sum`、`avg`、`count`
- **ORDER BY** 和 **LIMIT/OFFSET** 下推以减少网络流量
