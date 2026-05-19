---
title: "tds_fdw"
linkTitle: "tds_fdw"
description: "TDS 数据库（Sybase/SQL Server）外部数据包装器"
weight: 8620
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tds-fdw/tds_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tds-fdw/tds_fdw</div>
    <div class="ext-card__desc">https://github.com/tds-fdw/tds_fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`tds_fdw`**](/ext/e/tds_fdw) | `2.0.5` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8620  | [**`tds_fdw`**](/ext/e/tds_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) [`babelfishpg_tds`](/ext/e/babelfishpg_tds) [`wrappers`](/ext/e/wrappers) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`db2_fdw`](/ext/e/db2_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.5` | {{< pgvers "18,17,16,15,14" >}} | `tds_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.5` | {{< pgvers "18,17,16,15,14" >}} | `tds_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-tds-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 4 |
| el8.aarch64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 4 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| el9.x86_64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| el9.aarch64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 4 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| el10.x86_64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| el10.aarch64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| d12.x86_64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| d12.aarch64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| d13.x86_64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| d13.aarch64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| u22.x86_64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| u22.aarch64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| u24.x86_64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| u24.aarch64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| u26.x86_64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| u26.aarch64 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
@ el8.x86_64 18 tds_fdw_18 tds_fdw_18-2.0.5-1PGDG.rhel8.x86_64.rpm pgdg 2.0.5 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/tds_fdw_18-2.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 tds_fdw_18 tds_fdw_18-2.0.5-1PGDG.rhel8.aarch64.rpm pgdg 2.0.5 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/tds_fdw_18-2.0.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 tds_fdw_18 tds_fdw_18-2.0.5-1PGDG.rhel9.x86_64.rpm pgdg 2.0.5 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tds_fdw_18-2.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 tds_fdw_18 tds_fdw_18-2.0.5-1PGDG.rhel9.aarch64.rpm pgdg 2.0.5 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tds_fdw_18-2.0.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 tds_fdw_18 tds_fdw_18-2.0.5-1PGDG.rhel10.x86_64.rpm pgdg 2.0.5 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tds_fdw_18-2.0.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 tds_fdw_18 tds_fdw_18-2.0.5-1PGDG.rhel10.aarch64.rpm pgdg 2.0.5 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tds_fdw_18-2.0.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb pgdg 2.0.5 111.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb pgdg 2.0.5 111.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb pgdg 2.0.5 109.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb pgdg 2.0.5 109.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb pgdg 2.0.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb pgdg 2.0.5 111.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb pgdg 2.0.5 109.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb pgdg 2.0.5 109.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb pgdg 2.0.5 112.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb pgdg 2.0.5 112.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb pgdg 2.0.5 109.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb pgdg 2.0.5 109.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb pgdg 2.0.5 107.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb pgdg 2.0.5 107.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb pgdg 2.0.5 106.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-tds-fdw postgresql-18-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb pgdg 2.0.5 106.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-18-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 tds_fdw_17 tds_fdw_17-2.0.5-1PGDG.rhel8.x86_64.rpm pgdg 2.0.5 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tds_fdw_17-2.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 tds_fdw_17 tds_fdw_17-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tds_fdw_17-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 tds_fdw_17 tds_fdw_17-2.0.5-1PGDG.rhel8.aarch64.rpm pgdg 2.0.5 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tds_fdw_17-2.0.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 tds_fdw_17 tds_fdw_17-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 46.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tds_fdw_17-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 tds_fdw_17 tds_fdw_17-2.0.5-1PGDG.rhel9.x86_64.rpm pgdg 2.0.5 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tds_fdw_17-2.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 tds_fdw_17 tds_fdw_17-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tds_fdw_17-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 tds_fdw_17 tds_fdw_17-2.0.5-1PGDG.rhel9.aarch64.rpm pgdg 2.0.5 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tds_fdw_17-2.0.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 tds_fdw_17 tds_fdw_17-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tds_fdw_17-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 tds_fdw_17 tds_fdw_17-2.0.5-1PGDG.rhel10.x86_64.rpm pgdg 2.0.5 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tds_fdw_17-2.0.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 tds_fdw_17 tds_fdw_17-2.0.4-2PGDG.rhel10.x86_64.rpm pgdg 2.0.4 48.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tds_fdw_17-2.0.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 tds_fdw_17 tds_fdw_17-2.0.5-1PGDG.rhel10.aarch64.rpm pgdg 2.0.5 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tds_fdw_17-2.0.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 tds_fdw_17 tds_fdw_17-2.0.4-2PGDG.rhel10.aarch64.rpm pgdg 2.0.4 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tds_fdw_17-2.0.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb pgdg 2.0.5 111.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb pgdg 2.0.5 111.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb pgdg 2.0.5 108.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb pgdg 2.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb pgdg 2.0.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb pgdg 2.0.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb pgdg 2.0.5 109.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb pgdg 2.0.5 109.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb pgdg 2.0.5 127.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb pgdg 2.0.5 127.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb pgdg 2.0.5 123.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb pgdg 2.0.5 124.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb pgdg 2.0.5 110.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb pgdg 2.0.5 106.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb pgdg 2.0.5 106.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb pgdg 2.0.5 105.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-tds-fdw postgresql-17-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb pgdg 2.0.5 105.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-17-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.5-1PGDG.rhel8.x86_64.rpm pgdg 2.0.5 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tds_fdw_16-2.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tds_fdw_16-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.3-4PGDG.rhel8.x86_64.rpm pgdg 2.0.3 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tds_fdw_16-2.0.3-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.5-1PGDG.rhel8.aarch64.rpm pgdg 2.0.5 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tds_fdw_16-2.0.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tds_fdw_16-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.3-4PGDG.rhel8.aarch64.rpm pgdg 2.0.3 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tds_fdw_16-2.0.3-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.3-3.rhel8.aarch64.rpm pgdg 2.0.3 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tds_fdw_16-2.0.3-3.rhel8.aarch64.rpm
@ el9.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.5-1PGDG.rhel9.x86_64.rpm pgdg 2.0.5 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tds_fdw_16-2.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tds_fdw_16-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.3-4PGDG.rhel9.x86_64.rpm pgdg 2.0.3 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tds_fdw_16-2.0.3-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.5-1PGDG.rhel9.aarch64.rpm pgdg 2.0.5 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tds_fdw_16-2.0.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tds_fdw_16-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.3-4PGDG.rhel9.aarch64.rpm pgdg 2.0.3 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tds_fdw_16-2.0.3-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.3-3.rhel9.aarch64.rpm pgdg 2.0.3 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tds_fdw_16-2.0.3-3.rhel9.aarch64.rpm
@ el10.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.5-1PGDG.rhel10.x86_64.rpm pgdg 2.0.5 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tds_fdw_16-2.0.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 tds_fdw_16 tds_fdw_16-2.0.4-2PGDG.rhel10.x86_64.rpm pgdg 2.0.4 48.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tds_fdw_16-2.0.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.5-1PGDG.rhel10.aarch64.rpm pgdg 2.0.5 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tds_fdw_16-2.0.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 tds_fdw_16 tds_fdw_16-2.0.4-2PGDG.rhel10.aarch64.rpm pgdg 2.0.4 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tds_fdw_16-2.0.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb pgdg 2.0.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb pgdg 2.0.5 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb pgdg 2.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb pgdg 2.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb pgdg 2.0.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb pgdg 2.0.5 111.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb pgdg 2.0.5 109.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb pgdg 2.0.5 109.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb pgdg 2.0.5 126.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb pgdg 2.0.5 126.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb pgdg 2.0.5 122.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb pgdg 2.0.5 122.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb pgdg 2.0.5 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb pgdg 2.0.5 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb pgdg 2.0.5 106.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-tds-fdw postgresql-16-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb pgdg 2.0.5 106.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-16-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.5-1PGDG.rhel8.x86_64.rpm pgdg 2.0.5 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tds_fdw_15-2.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tds_fdw_15-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.3-1.rhel8.x86_64.rpm pgdg 2.0.3 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tds_fdw_15-2.0.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.5-1PGDG.rhel8.aarch64.rpm pgdg 2.0.5 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tds_fdw_15-2.0.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tds_fdw_15-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.3-1.rhel8.aarch64.rpm pgdg 2.0.3 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tds_fdw_15-2.0.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.5-1PGDG.rhel9.x86_64.rpm pgdg 2.0.5 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tds_fdw_15-2.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tds_fdw_15-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.3-1.rhel9.x86_64.rpm pgdg 2.0.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tds_fdw_15-2.0.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.5-1PGDG.rhel9.aarch64.rpm pgdg 2.0.5 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tds_fdw_15-2.0.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tds_fdw_15-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.3-1.rhel9.aarch64.rpm pgdg 2.0.3 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tds_fdw_15-2.0.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.5-1PGDG.rhel10.x86_64.rpm pgdg 2.0.5 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tds_fdw_15-2.0.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 tds_fdw_15 tds_fdw_15-2.0.4-2PGDG.rhel10.x86_64.rpm pgdg 2.0.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tds_fdw_15-2.0.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.5-1PGDG.rhel10.aarch64.rpm pgdg 2.0.5 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tds_fdw_15-2.0.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 tds_fdw_15 tds_fdw_15-2.0.4-2PGDG.rhel10.aarch64.rpm pgdg 2.0.4 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tds_fdw_15-2.0.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb pgdg 2.0.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb pgdg 2.0.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb pgdg 2.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb pgdg 2.0.5 108.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb pgdg 2.0.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb pgdg 2.0.5 111.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb pgdg 2.0.5 109.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb pgdg 2.0.5 109.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb pgdg 2.0.5 126.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb pgdg 2.0.5 126.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb pgdg 2.0.5 122.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb pgdg 2.0.5 122.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb pgdg 2.0.5 110.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb pgdg 2.0.5 106.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb pgdg 2.0.5 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb pgdg 2.0.5 105.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-tds-fdw postgresql-15-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb pgdg 2.0.5 106.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-15-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.5-1PGDG.rhel8.x86_64.rpm pgdg 2.0.5 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tds_fdw_14-2.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tds_fdw_14-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.3-1.rhel8.x86_64.rpm pgdg 2.0.3 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tds_fdw_14-2.0.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.2-3.rhel8.x86_64.rpm pgdg 2.0.2 136.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tds_fdw_14-2.0.2-3.rhel8.x86_64.rpm
@ el8.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.5-1PGDG.rhel8.aarch64.rpm pgdg 2.0.5 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tds_fdw_14-2.0.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tds_fdw_14-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.3-1.rhel8.aarch64.rpm pgdg 2.0.3 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tds_fdw_14-2.0.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.5-1PGDG.rhel9.x86_64.rpm pgdg 2.0.5 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tds_fdw_14-2.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tds_fdw_14-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.3-1.rhel9.x86_64.rpm pgdg 2.0.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tds_fdw_14-2.0.3-1.rhel9.x86_64.rpm
@ el9.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.5-1PGDG.rhel9.aarch64.rpm pgdg 2.0.5 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tds_fdw_14-2.0.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 46.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tds_fdw_14-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.3-1.rhel9.aarch64.rpm pgdg 2.0.3 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tds_fdw_14-2.0.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.5-1PGDG.rhel10.x86_64.rpm pgdg 2.0.5 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tds_fdw_14-2.0.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 tds_fdw_14 tds_fdw_14-2.0.4-2PGDG.rhel10.x86_64.rpm pgdg 2.0.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tds_fdw_14-2.0.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.5-1PGDG.rhel10.aarch64.rpm pgdg 2.0.5 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tds_fdw_14-2.0.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 tds_fdw_14 tds_fdw_14-2.0.4-2PGDG.rhel10.aarch64.rpm pgdg 2.0.4 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tds_fdw_14-2.0.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb pgdg 2.0.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb pgdg 2.0.5 111.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb pgdg 2.0.5 108.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb pgdg 2.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb pgdg 2.0.5 111.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb pgdg 2.0.5 111.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb pgdg 2.0.5 109.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb pgdg 2.0.5 109.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb pgdg 2.0.5 126.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb pgdg 2.0.5 126.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb pgdg 2.0.5 122.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb pgdg 2.0.5 123.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb pgdg 2.0.5 109.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb pgdg 2.0.5 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb pgdg 2.0.5 106.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb pgdg 2.0.5 108.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb pgdg 2.0.5 105.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-tds-fdw postgresql-14-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb pgdg 2.0.5 105.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tds-fdw/postgresql-14-tds-fdw_2.0.5-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `tds_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install tds_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y tds_fdw -v 18  # PG 18
pig ext install -y tds_fdw -v 17  # PG 17
pig ext install -y tds_fdw -v 16  # PG 16
pig ext install -y tds_fdw -v 15  # PG 15
pig ext install -y tds_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y tds_fdw_18       # PG 18
dnf install -y tds_fdw_17       # PG 17
dnf install -y tds_fdw_16       # PG 16
dnf install -y tds_fdw_15       # PG 15
dnf install -y tds_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-tds-fdw   # PG 18
apt install -y postgresql-17-tds-fdw   # PG 17
apt install -y postgresql-16-tds-fdw   # PG 16
apt install -y postgresql-15-tds-fdw   # PG 15
apt install -y postgresql-14-tds-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION tds_fdw;
```

## 用法

- 来源：[README](https://github.com/tds-fdw/tds_fdw/blob/master/README.md), [foreign server](https://github.com/tds-fdw/tds_fdw/blob/master/ForeignServerCreation.md), [foreign table](https://github.com/tds-fdw/tds_fdw/blob/master/ForeignTableCreation.md), [user mapping](https://github.com/tds-fdw/tds_fdw/blob/master/UserMappingCreation.md), [foreign schema](https://github.com/tds-fdw/tds_fdw/blob/master/ForeignSchemaImporting.md), [variables](https://github.com/tds-fdw/tds_fdw/blob/master/Variables.md)

`tds_fdw` 是一个 foreign data wrapper，用于通过 FreeTDS 等 DB-Library 实现查询 Sybase 和 Microsoft SQL Server 等 TDS 数据库。

### 创建服务器

```sql
CREATE EXTENSION tds_fdw;

CREATE SERVER mssql_svr
  FOREIGN DATA WRAPPER tds_fdw
  OPTIONS (servername '127.0.0.1', port '1433',
           database 'tds_fdw_test', tds_version '7.1');
```

**服务器选项：** `servername`（服务器地址或 DSN，支持逗号分隔 failover list）、`port`、`database`、`dbuse`（0 表示 direct connection，非 0 表示 dbuse()）、`tds_version`（protocol version）、`language`、`character_set`、`msg_handler`（`notice` 或 `blackhole`）、`sqlserver_ansi_mode`、`fdw_startup_cost`、`fdw_tuple_cost`。

### 创建用户映射

```sql
CREATE USER MAPPING FOR postgres
  SERVER mssql_svr
  OPTIONS (username 'sa', password 'secret');
```

对于 Azure SQL databases，`username` 选项使用 `username@servername` 格式。

### 创建外部表

直接映射远端表：

```sql
CREATE FOREIGN TABLE mssql_table (
  id integer,
  name varchar(255),
  value numeric(10,2)
)
SERVER mssql_svr
OPTIONS (schema_name 'dbo', table_name 'mytable');
```

或使用自定义 SQL 查询：

```sql
CREATE FOREIGN TABLE mssql_query (
  id integer,
  name varchar(255),
  total numeric(10,2)
)
SERVER mssql_svr
OPTIONS (query 'SELECT id, name, SUM(amount) AS total FROM orders GROUP BY id, name');
```

**表选项：** `table_name` 或 `query`（二者必选其一，且互斥）、`schema_name`、`match_column_names`（按名称还是按位置映射）、`use_remote_estimate`、`local_tuple_estimate`、`row_estimate_method`（`execute` 或 `showplan_all`）。

**列选项：** `column_name`（远端列名不同于本地列名时使用）。

### 查询与调试

```sql
SELECT * FROM mssql_table WHERE id > 100;

-- View the remote query sent to SQL Server
EXPLAIN (VERBOSE) SELECT * FROM mssql_table WHERE id > 100;
```

### 导入外部模式

```sql
IMPORT FOREIGN SCHEMA dbo
  FROM SERVER mssql_svr
  INTO public
  OPTIONS (import_default 'true');
```

**导入选项：** `import_default`、`import_not_null`，以及 `keep_custom_types`，后者用于在已存在匹配 PostgreSQL domains 时保留 Sybase user-defined types。

### Planner 与运行时说明

上游 README 说明当前版本不支持 join pushdown 或写操作。当 `match_column_names` 启用时，它支持 `WHERE` 和列下推。

使用 PostgreSQL `SET` 设置诊断 memory-stat variables，例如：

```sql
SET tds_fdw.show_finished_memory_stats = 1;
```

可用变量包括 `tds_fdw.show_before_row_memory_stats`、`tds_fdw.show_after_row_memory_stats` 和 `tds_fdw.show_finished_memory_stats`。

Pigsty package metadata 是来自 PGDG 的版本 `2.0.5`，覆盖 PostgreSQL 14-18。上游文档说该 FDW 应支持 PostgreSQL 9.2+，当前 build matrix 包含 PostgreSQL 13-18，但此 stub 遵循 `db/extension.csv` 中的已打包 PostgreSQL 版本。
