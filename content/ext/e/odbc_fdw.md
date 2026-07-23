---
title: "odbc_fdw"
linkTitle: "odbc_fdw"
description: "访问ODBC可访问的任何外部数据源"
weight: 8520
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/devrimgunduz/odbc_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">devrimgunduz/odbc_fdw</div>
    <div class="ext-card__desc">https://github.com/devrimgunduz/odbc_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/odbc_fdw-0.6.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">odbc_fdw-0.6.1.tar.gz</div>
    <div class="ext-card__desc">odbc_fdw-0.6.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`odbc_fdw`**](/ext/e/odbc_fdw) | `0.5.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8520  | [**`odbc_fdw`**](/ext/e/odbc_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package/source version 0.6.1; SQL extension version 0.5.2. Live queries require an installed ODBC driver and configured DSN.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.5.2` | {{< pgvers "18,17,16,15,14" >}} | `odbc_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `odbc_fdw_$v` | `unixODBC` |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-odbc-fdw` | `libodbc2` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.6.1 1 | AVAIL PGDG 0.6.1 2 | AVAIL PGDG 0.6.1 2 | AVAIL PGDG 0.6.1 2 | AVAIL PGDG 0.6.1 2 |
| el8.aarch64 | AVAIL PGDG 0.6.1 1 | AVAIL PGDG 0.6.1 2 | AVAIL PGDG 0.6.1 2 | AVAIL PGDG 0.6.1 2 | AVAIL PGDG 0.6.1 2 |
| el9.x86_64 | AVAIL PGDG 0.6.1 1 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 |
| el9.aarch64 | AVAIL PGDG 0.6.1 1 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 |
| el10.x86_64 | AVAIL PGDG 0.6.1 1 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 |
| el10.aarch64 | AVAIL PGDG 0.6.1 1 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 | AVAIL PGDG 0.6.1 3 |
| d12.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
@ el8.x86_64 18 odbc_fdw_18 odbc_fdw_18-0.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.6.1 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/odbc_fdw_18-0.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 odbc_fdw_18 odbc_fdw_18-0.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.6.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/odbc_fdw_18-0.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 odbc_fdw_18 odbc_fdw_18-0.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.6.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/odbc_fdw_18-0.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 18 odbc_fdw_18 odbc_fdw_18-0.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.6.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/odbc_fdw_18-0.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 18 odbc_fdw_18 odbc_fdw_18-0.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.6.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/odbc_fdw_18-0.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 odbc_fdw_18 odbc_fdw_18-0.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.6.1 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/odbc_fdw_18-0.6.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 48.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 47.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 49.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 47.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 53.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 52.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 51.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 50.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-odbc-fdw postgresql-18-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 50.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-18-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.6.1 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/odbc_fdw_17-0.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/odbc_fdw_17-0.5.1-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.6.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/odbc_fdw_17-0.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/odbc_fdw_17-0.5.1-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.6.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/odbc_fdw_17-0.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-5PGDG.rhel9.8.x86_64.rpm pgdg 0.5.1 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/odbc_fdw_17-0.5.1-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/odbc_fdw_17-0.5.1-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.6.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/odbc_fdw_17-0.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-5PGDG.rhel9.8.aarch64.rpm pgdg 0.5.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/odbc_fdw_17-0.5.1-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/odbc_fdw_17-0.5.1-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.6.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/odbc_fdw_17-0.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-5PGDG.rhel10.2.x86_64.rpm pgdg 0.5.1 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/odbc_fdw_17-0.5.1-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/odbc_fdw_17-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.6.1 28.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/odbc_fdw_17-0.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-5PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/odbc_fdw_17-0.5.1-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/odbc_fdw_17-0.5.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 48.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 47.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 49.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 47.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 60.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 59.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 51.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 50.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 50.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-odbc-fdw postgresql-17-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 50.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-17-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.6.1 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/odbc_fdw_16-0.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/odbc_fdw_16-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.6.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/odbc_fdw_16-0.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/odbc_fdw_16-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.6.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/odbc_fdw_16-0.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-5PGDG.rhel9.8.x86_64.rpm pgdg 0.5.1 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/odbc_fdw_16-0.5.1-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/odbc_fdw_16-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.6.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/odbc_fdw_16-0.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-5PGDG.rhel9.8.aarch64.rpm pgdg 0.5.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/odbc_fdw_16-0.5.1-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/odbc_fdw_16-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.6.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/odbc_fdw_16-0.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-5PGDG.rhel10.2.x86_64.rpm pgdg 0.5.1 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/odbc_fdw_16-0.5.1-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/odbc_fdw_16-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.6.1 28.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/odbc_fdw_16-0.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-5PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/odbc_fdw_16-0.5.1-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/odbc_fdw_16-0.5.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 48.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 47.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 49.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 47.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 60.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 59.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 51.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 50.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-odbc-fdw postgresql-16-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 50.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-16-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.6.1 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/odbc_fdw_15-0.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/odbc_fdw_15-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.6.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/odbc_fdw_15-0.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/odbc_fdw_15-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.6.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/odbc_fdw_15-0.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-5PGDG.rhel9.8.x86_64.rpm pgdg 0.5.1 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/odbc_fdw_15-0.5.1-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/odbc_fdw_15-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.6.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/odbc_fdw_15-0.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-5PGDG.rhel9.8.aarch64.rpm pgdg 0.5.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/odbc_fdw_15-0.5.1-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/odbc_fdw_15-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.6.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/odbc_fdw_15-0.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-5PGDG.rhel10.2.x86_64.rpm pgdg 0.5.1 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/odbc_fdw_15-0.5.1-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/odbc_fdw_15-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.6.1 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/odbc_fdw_15-0.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-5PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/odbc_fdw_15-0.5.1-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/odbc_fdw_15-0.5.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 48.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 47.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 49.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 47.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 59.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 59.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 51.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 50.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 50.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-odbc-fdw postgresql-15-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 50.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-15-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.6.1 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/odbc_fdw_14-0.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/odbc_fdw_14-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.6.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/odbc_fdw_14-0.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/odbc_fdw_14-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.6.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/odbc_fdw_14-0.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-5PGDG.rhel9.8.x86_64.rpm pgdg 0.5.1 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/odbc_fdw_14-0.5.1-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/odbc_fdw_14-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.6.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/odbc_fdw_14-0.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-5PGDG.rhel9.8.aarch64.rpm pgdg 0.5.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/odbc_fdw_14-0.5.1-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/odbc_fdw_14-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.6.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/odbc_fdw_14-0.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-5PGDG.rhel10.2.x86_64.rpm pgdg 0.5.1 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/odbc_fdw_14-0.5.1-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/odbc_fdw_14-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.6.1 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/odbc_fdw_14-0.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-5PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/odbc_fdw_14-0.5.1-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/odbc_fdw_14-0.5.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 48.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 47.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 48.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 47.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 59.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 58.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 51.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 50.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-odbc-fdw postgresql-14-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 50.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/odbc-fdw/postgresql-14-odbc-fdw_0.6.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `odbc_fdw` 扩展的 DEB 包：

```bash
pig build pkg odbc_fdw         # 构建 DEB 包
```


## 安装

您可以直接安装 `odbc_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install odbc_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y odbc_fdw -v 18  # PG 18
pig ext install -y odbc_fdw -v 17  # PG 17
pig ext install -y odbc_fdw -v 16  # PG 16
pig ext install -y odbc_fdw -v 15  # PG 15
pig ext install -y odbc_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y odbc_fdw_18       # PG 18
dnf install -y odbc_fdw_17       # PG 17
dnf install -y odbc_fdw_16       # PG 16
dnf install -y odbc_fdw_15       # PG 15
dnf install -y odbc_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-odbc-fdw   # PG 18
apt install -y postgresql-17-odbc-fdw   # PG 17
apt install -y postgresql-16-odbc-fdw   # PG 16
apt install -y postgresql-15-odbc-fdw   # PG 15
apt install -y postgresql-14-odbc-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION odbc_fdw;
```

## 用法

来源：

- [odbc_fdw 0.6.1 README](https://github.com/devrimgunduz/odbc_fdw/blob/0.6.1/README.md)
- [odbc_fdw changelog](https://github.com/devrimgunduz/odbc_fdw/blob/0.6.1/NEWS.md)
- [Extension control file](https://github.com/devrimgunduz/odbc_fdw/blob/0.6.1/odbc_fdw.control)
- [0.6.0 to 0.6.1 comparison](https://github.com/devrimgunduz/odbc_fdw/compare/0.6.0...0.6.1)

`odbc_fdw` 将 ODBC 数据源中的表或驱动程序特定查询暴露为 PostgreSQL 外部表。它主要是一个跨异构系统的读取/查询桥梁；在依赖其进行生产查询之前，请验证数据类型转换和远程驱动行为。

### 核心工作流程

```sql
CREATE EXTENSION odbc_fdw;

-- In 0.6.1 a superuser must set the server-level dsn or driver option.
CREATE SERVER warehouse_odbc
  FOREIGN DATA WRAPPER odbc_fdw
  OPTIONS (dsn 'warehouse');

CREATE USER MAPPING FOR analyst
  SERVER warehouse_odbc
  OPTIONS (odbc_UID 'reporter', odbc_PWD 'secret');

CREATE FOREIGN TABLE remote_customer (
  id bigint,
  name text,
  created_at timestamp
) SERVER warehouse_odbc
  OPTIONS (schema 'sales', table 'customer');

SELECT * FROM remote_customer WHERE id = 42;
```

使用 `driver` 替代 `dsn` 进行无 DSN 连接。其他驱动程序属性使用 `odbc_` 前缀，并可放置在服务器、用户映射或外部表上。将凭据放在用户映射中。对大小写敏感的属性名称进行引号引用，必要时用花括号包裹包含 `=` 或 `;` 的值。

### 查询和导入

`sql_query` 覆盖 `table`；当 FDW 需要显式行数查询时，请与 `sql_count` 结合使用：

```sql
CREATE FOREIGN TABLE active_customer (
  id bigint,
  name text
) SERVER warehouse_odbc
  OPTIONS (
    sql_query 'SELECT id, name FROM sales.customer WHERE active = 1',
    sql_count 'SELECT count(*) FROM sales.customer WHERE active = 1'
  );

IMPORT FOREIGN SCHEMA sales
  FROM SERVER warehouse_odbc
  INTO imported
  OPTIONS (prefix 'odbc_');
```

### 重要对象和选项

- `dsn` 或 `driver` 选择 ODBC 数据源；0.6.1 版本限制这些服务器选项仅对超级用户可用，因为驱动程序管理器加载共享库。
- `schema`、`table`、`sql_query` 和 `sql_count` 选择远程关系或查询。
- `prefix` 改变由 `IMPORT FOREIGN SCHEMA` 创建的本地名称。
- `ODBCTablesList(server_name, ...)` 列出可见的远程表。
- `ODBCTableSize(server_name, table_name)` 和 `ODBCQuerySize(server_name, query)` 返回远程行数。

0.6.0 版本恢复了兼容性并修复了最近 PostgreSQL 发行版上的崩溃。0.6.1 版本转义了远程字面量和标识符以防止 SQL 注入，限制了驱动程序选择，并在调试连接字符串中屏蔽了常见的凭据属性。升级前请允许委派 FDW 使用，同时保留正常的服务器所有权和用户映射控制。

仅支持上游 README 中列出的 ODBC 类型。标识符长度、驱动程序 SQL 语法、编码、空值处理和二进制值可能会有所不同。源/包版本为 0.6.1，而控制文件和安装 SQL 继续声明扩展版本 0.5.2。
