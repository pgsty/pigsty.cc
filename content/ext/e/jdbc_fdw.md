---
title: "jdbc_fdw"
linkTitle: "jdbc_fdw"
description: "访问JDBC可访问的任何外部数据源"
weight: 8530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgspider/jdbc_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgspider/jdbc_fdw</div>
    <div class="ext-card__desc">https://github.com/pgspider/jdbc_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/jdbc_fdw-0.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">jdbc_fdw-0.5.0.tar.gz</div>
    <div class="ext-card__desc">jdbc_fdw-0.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`jdbc_fdw`**](/ext/e/jdbc_fdw) | `1.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8530  | [**`jdbc_fdw`**](/ext/e/jdbc_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`mysql_fdw`](/ext/e/mysql_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package/source version 0.5.0; SQL extension version 1.2. PIGSTY RPM and DEB packages cover PostgreSQL 14-18 on x86_64 and aarch64; PGDG RPM 0.4.0 is a legacy alternative for PostgreSQL 14-16. Live queries require a JDBC driver and remote database.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `jdbc_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `jdbc_fdw_$v` | `java-11-openjdk-headless` |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-jdbc-fdw` | `default-jre-headless`, `libpq5` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 2 | AVAIL PIGSTY 0.5.0 2 | AVAIL PIGSTY 0.5.0 2 |
| el8.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 2 | AVAIL PIGSTY 0.5.0 2 | AVAIL PIGSTY 0.5.0 2 |
| el9.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
@ el8.x86_64 18 jdbc_fdw_18 jdbc_fdw_18-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 62.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jdbc_fdw_18-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 jdbc_fdw_18 jdbc_fdw_18-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 60.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jdbc_fdw_18-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 jdbc_fdw_18 jdbc_fdw_18-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 61.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jdbc_fdw_18-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 jdbc_fdw_18 jdbc_fdw_18-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jdbc_fdw_18-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 jdbc_fdw_18 jdbc_fdw_18-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 62.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jdbc_fdw_18-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 jdbc_fdw_18 jdbc_fdw_18-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 60.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jdbc_fdw_18-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 129.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 126.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 129.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 126.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 140.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 138.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 134.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 133.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb pigsty 0.5.0 133.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-jdbc-fdw postgresql-18-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb pigsty 0.5.0 132.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-18-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 jdbc_fdw_17 jdbc_fdw_17-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jdbc_fdw_17-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 jdbc_fdw_17 jdbc_fdw_17-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 60.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jdbc_fdw_17-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 jdbc_fdw_17 jdbc_fdw_17-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jdbc_fdw_17-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 jdbc_fdw_17 jdbc_fdw_17-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jdbc_fdw_17-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 jdbc_fdw_17 jdbc_fdw_17-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 61.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jdbc_fdw_17-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 jdbc_fdw_17 jdbc_fdw_17-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jdbc_fdw_17-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 129.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 126.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 129.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 126.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 161.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 159.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 134.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 133.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb pigsty 0.5.0 133.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-jdbc-fdw postgresql-17-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb pigsty 0.5.0 131.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-17-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 62.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jdbc_fdw_16-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.4.0-1PGDG.rhel8.x86_64.rpm pgdg 0.4.0 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/jdbc_fdw_16-0.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 jdbc_fdw_16 jdbc_fdw_16-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 60.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jdbc_fdw_16-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jdbc_fdw_16-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.4.0-1PGDG.rhel9.x86_64.rpm pgdg 0.4.0 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/jdbc_fdw_16-0.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 jdbc_fdw_16 jdbc_fdw_16-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jdbc_fdw_16-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 61.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jdbc_fdw_16-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 jdbc_fdw_16 jdbc_fdw_16-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 60.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jdbc_fdw_16-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 129.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 126.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 129.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 126.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 159.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 157.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 134.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 133.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb pigsty 0.5.0 133.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-jdbc-fdw postgresql-16-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb pigsty 0.5.0 131.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-16-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 63.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jdbc_fdw_15-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.4.0-1PGDG.rhel8.x86_64.rpm pgdg 0.4.0 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/jdbc_fdw_15-0.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 jdbc_fdw_15 jdbc_fdw_15-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jdbc_fdw_15-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 63.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jdbc_fdw_15-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.4.0-1PGDG.rhel9.x86_64.rpm pgdg 0.4.0 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/jdbc_fdw_15-0.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 jdbc_fdw_15 jdbc_fdw_15-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 62.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jdbc_fdw_15-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 64.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jdbc_fdw_15-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 jdbc_fdw_15 jdbc_fdw_15-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 63.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jdbc_fdw_15-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 129.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 127.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 130.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 127.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 161.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 159.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 136.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 136.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb pigsty 0.5.0 135.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-jdbc-fdw postgresql-15-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb pigsty 0.5.0 133.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-15-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 63.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jdbc_fdw_14-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.4.0-1PGDG.rhel8.x86_64.rpm pgdg 0.4.0 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/jdbc_fdw_14-0.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 jdbc_fdw_14 jdbc_fdw_14-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jdbc_fdw_14-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jdbc_fdw_14-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.4.0-1PGDG.rhel9.x86_64.rpm pgdg 0.4.0 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/jdbc_fdw_14-0.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 jdbc_fdw_14 jdbc_fdw_14-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 62.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jdbc_fdw_14-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 64.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jdbc_fdw_14-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 jdbc_fdw_14 jdbc_fdw_14-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 63.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jdbc_fdw_14-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 129.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 127.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 130.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 127.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 160.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 158.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 136.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 135.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb pigsty 0.5.0 135.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-jdbc-fdw postgresql-14-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb pigsty 0.5.0 133.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jdbc-fdw/postgresql-14-jdbc-fdw_0.5.0-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `jdbc_fdw` 扩展的 DEB 包：

```bash
pig build pkg jdbc_fdw         # 构建 DEB 包
```


## 安装

您可以直接安装 `jdbc_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install jdbc_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y jdbc_fdw -v 18  # PG 18
pig ext install -y jdbc_fdw -v 17  # PG 17
pig ext install -y jdbc_fdw -v 16  # PG 16
pig ext install -y jdbc_fdw -v 15  # PG 15
pig ext install -y jdbc_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y jdbc_fdw_18       # PG 18
dnf install -y jdbc_fdw_17       # PG 17
dnf install -y jdbc_fdw_16       # PG 16
dnf install -y jdbc_fdw_15       # PG 15
dnf install -y jdbc_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-jdbc-fdw   # PG 18
apt install -y postgresql-17-jdbc-fdw   # PG 17
apt install -y postgresql-16-jdbc-fdw   # PG 16
apt install -y postgresql-15-jdbc-fdw   # PG 15
apt install -y postgresql-14-jdbc-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION jdbc_fdw;
```

## 用法

来源：

- [jdbc_fdw v0.5.0 README](https://github.com/pgspider/jdbc_fdw/blob/v0.5.0/README.md)
- [Extension control file](https://github.com/pgspider/jdbc_fdw/blob/v0.5.0/jdbc_fdw.control)
- [jdbc_fdw v0.5.0 release](https://github.com/pgspider/jdbc_fdw/releases/tag/v0.5.0)

`jdbc_fdw` 将 JDBC 数据源暴露为 PostgreSQL 外部表，并可通过辅助函数执行远程 SQL。当存在合适的 JDBC 驱动但没有更专业的 FDW 时使用它；JVM、驱动 JAR、凭据和远程查询行为都在一个 PostgreSQL 后端进程中运行。

### 核心工作流程

```sql
CREATE EXTENSION jdbc_fdw;

CREATE SERVER reporting_jdbc
  FOREIGN DATA WRAPPER jdbc_fdw
  OPTIONS (
    drivername 'org.postgresql.Driver',
    url 'jdbc:postgresql://db.example/reporting',
    jarfile '/opt/jdbc/postgresql.jar',
    querytimeout '10',
    maxheapsize '256'
  );

CREATE USER MAPPING FOR app_user
  SERVER reporting_jdbc
  OPTIONS (username 'reader', password 'secret');

CREATE FOREIGN TABLE remote_orders (
  id bigint OPTIONS (key 'true'),
  created_at timestamptz,
  total numeric
) SERVER reporting_jdbc;

SELECT * FROM remote_orders WHERE id = 42;
```

v0.5.0 中没有表级选项。外部列按名称映射。当 `UPDATE` 或 `DELETE` 需要行标识时，请用 `OPTIONS (key 'true')` 标记远程主键列。

### 导入和直接 SQL

```sql
IMPORT FOREIGN SCHEMA public
  FROM SERVER reporting_jdbc
  INTO jdbc_import
  OPTIONS (recreate 'true');

SELECT *
FROM jdbc_exec('reporting_jdbc', 'SELECT id, name FROM customer')
  AS t(id bigint, name text);
```

上游 README 中提到，`IMPORT FOREIGN SCHEMA` 当前仅适用于 GridDB。`jdbc_exec` 返回 `record`，因此返回多列的查询需要定义列列表。

### 重要选项与限制

- 服务器选项：必需的 `drivername` 和 `url`，绝对路径的 `jarfile`，以及 `querytimeout` 和 JVM 的 `maxheapsize`。
- 用户映射选项：`username` 和 `password`。
- 列选项：`key = true` 标识可写操作中的主键列。
- `jdbc_exec(connname, sql)` 执行特定于驱动的 SQL 语句，并可以返回定义的记录集。

0.5.0 版本支持上游项目的谓词、列和聚合下推，但不支持远程 `RETURNING`、`GROUP BY`、`ORDER BY`、类型转换或事务控制语句。数组和外部表 `TRUNCATE` 未实现。请使用选定驱动程序测试数据类型的转换和写入语义。

保护 JAR 路径和服务器定义免受不可信用户的影响，将密码保存在用户映射中，并限制 JVM 堆大小和远程查询时间。源/包发行版为 0.5.0，而 `jdbc_fdw.control` 继续声明 SQL 扩展版本 1.2；请使用 `pg_extension.extversion` 而不是假设这些版本空间是相同的。
