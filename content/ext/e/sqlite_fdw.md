---
title: "sqlite_fdw"
linkTitle: "sqlite_fdw"
description: "SQLite 外部数据包装器"
weight: 8640
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgspider/sqlite_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgspider/sqlite_fdw</div>
    <div class="ext-card__desc">https://github.com/pgspider/sqlite_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/sqlite_fdw-2.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">sqlite_fdw-2.5.0.tar.gz</div>
    <div class="ext-card__desc">sqlite_fdw-2.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`sqlite_fdw`**](/ext/e/sqlite_fdw) | `2.5.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8640  | [**`sqlite_fdw`**](/ext/e/sqlite_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`mysql_fdw`](/ext/e/mysql_fdw) [`file_fdw`](/ext/e/file_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`duckdb_fdw`](/ext/e/duckdb_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> break on el8 due to sqlite-lib version low


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.5.0` | {{< pgvers "17,16,15,14" >}} | `sqlite_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.5.0` | {{< pgvers "17,16,15,14" >}} | `sqlite_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.5.0` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-sqlite-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.4.0 1 | AVAIL PGDG 2.4.0 1 | AVAIL PGDG 2.4.0 3 | AVAIL PGDG 2.4.0 4 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.4.0 1 | AVAIL PGDG 2.4.0 1 | AVAIL PGDG 2.4.0 3 | AVAIL PGDG 2.4.0 3 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 3 | AVAIL PIGSTY 2.5.0 3 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 3 | AVAIL PIGSTY 2.5.0 3 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 2 | AVAIL PIGSTY 2.5.0 2 | AVAIL PIGSTY 2.5.0 2 | AVAIL PIGSTY 2.5.0 2 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 2 | AVAIL PIGSTY 2.5.0 2 | AVAIL PIGSTY 2.5.0 2 | AVAIL PIGSTY 2.5.0 2 |
| d12.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
@ el8.x86_64 17 sqlite_fdw_17 sqlite_fdw_17-2.4.0-4PGDG.rhel8.x86_64.rpm pgdg 2.4.0 57.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/sqlite_fdw_17-2.4.0-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 sqlite_fdw_17 sqlite_fdw_17-2.4.0-4PGDG.rhel8.aarch64.rpm pgdg 2.4.0 55.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/sqlite_fdw_17-2.4.0-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 65.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sqlite_fdw_17-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-1PGDG.rhel9.x86_64.rpm pgdg 2.5.0 64.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/sqlite_fdw_17-2.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 sqlite_fdw_17 sqlite_fdw_17-2.4.0-4PGDG.rhel9.x86_64.rpm pgdg 2.4.0 56.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/sqlite_fdw_17-2.4.0-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 64.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sqlite_fdw_17-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-1PGDG.rhel9.aarch64.rpm pgdg 2.5.0 63.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/sqlite_fdw_17-2.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 sqlite_fdw_17 sqlite_fdw_17-2.4.0-4PGDG.rhel9.aarch64.rpm pgdg 2.4.0 55.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/sqlite_fdw_17-2.4.0-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 67.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sqlite_fdw_17-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-2PGDG.rhel10.x86_64.rpm pgdg 2.5.0 66.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/sqlite_fdw_17-2.5.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 65.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sqlite_fdw_17-2.5.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 sqlite_fdw_17 sqlite_fdw_17-2.5.0-2PGDG.rhel10.aarch64.rpm pgdg 2.5.0 64.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sqlite_fdw_17-2.5.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 153.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 148.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 154.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 150.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 188.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 185.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 159.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 156.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 157.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-sqlite-fdw postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 155.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-17-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 sqlite_fdw_16 sqlite_fdw_16-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 57.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/sqlite_fdw_16-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 sqlite_fdw_16 sqlite_fdw_16-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/sqlite_fdw_16-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 64.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sqlite_fdw_16-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-1PGDG.rhel9.x86_64.rpm pgdg 2.5.0 63.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/sqlite_fdw_16-2.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 sqlite_fdw_16 sqlite_fdw_16-2.4.0-1PGDG.rhel9.x86_64.rpm pgdg 2.4.0 56.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/sqlite_fdw_16-2.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 63.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sqlite_fdw_16-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-1PGDG.rhel9.aarch64.rpm pgdg 2.5.0 62.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/sqlite_fdw_16-2.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 sqlite_fdw_16 sqlite_fdw_16-2.4.0-1PGDG.rhel9.aarch64.rpm pgdg 2.4.0 54.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/sqlite_fdw_16-2.4.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 66.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sqlite_fdw_16-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-2PGDG.rhel10.x86_64.rpm pgdg 2.5.0 65.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/sqlite_fdw_16-2.5.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 64.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sqlite_fdw_16-2.5.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 sqlite_fdw_16 sqlite_fdw_16-2.5.0-2PGDG.rhel10.aarch64.rpm pgdg 2.5.0 63.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sqlite_fdw_16-2.5.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 151.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 147.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 152.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 148.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 183.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 181.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 157.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 155.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 155.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-sqlite-fdw postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 153.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-16-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 58.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sqlite_fdw_15-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 53.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sqlite_fdw_15-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.2.0-1.rhel8.x86_64.rpm pgdg 2.2.0 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sqlite_fdw_15-2.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 55.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/sqlite_fdw_15-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 50.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/sqlite_fdw_15-2.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.2.0-1.rhel8.aarch64.rpm pgdg 2.2.0 155.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/sqlite_fdw_15-2.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 67.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sqlite_fdw_15-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-1PGDG.rhel9.x86_64.rpm pgdg 2.5.0 66.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sqlite_fdw_15-2.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.4.0-1PGDG.rhel9.x86_64.rpm pgdg 2.4.0 58.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sqlite_fdw_15-2.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.3.0-1.rhel9.x86_64.rpm pgdg 2.3.0 53.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sqlite_fdw_15-2.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.2.0-1.rhel9.x86_64.rpm pgdg 2.2.0 162.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sqlite_fdw_15-2.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 65.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sqlite_fdw_15-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-1PGDG.rhel9.aarch64.rpm pgdg 2.5.0 64.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sqlite_fdw_15-2.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.4.0-1PGDG.rhel9.aarch64.rpm pgdg 2.4.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sqlite_fdw_15-2.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.3.0-1.rhel9.aarch64.rpm pgdg 2.3.0 52.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sqlite_fdw_15-2.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.2.0-1.rhel9.aarch64.rpm pgdg 2.2.0 159.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sqlite_fdw_15-2.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 68.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sqlite_fdw_15-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-2PGDG.rhel10.x86_64.rpm pgdg 2.5.0 67.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/sqlite_fdw_15-2.5.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 66.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sqlite_fdw_15-2.5.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 sqlite_fdw_15 sqlite_fdw_15-2.5.0-2PGDG.rhel10.aarch64.rpm pgdg 2.5.0 66.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sqlite_fdw_15-2.5.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 152.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 148.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 152.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 148.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 185.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 183.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 158.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 157.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 157.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-sqlite-fdw postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 155.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-15-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 58.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/sqlite_fdw_14-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 53.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/sqlite_fdw_14-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.1.1-1.rhel8.x86_64.rpm pgdg 2.1.1 157.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/sqlite_fdw_14-2.1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.1.0-1.rhel8.x86_64.rpm pgdg 2.1.0 154.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/sqlite_fdw_14-2.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 55.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/sqlite_fdw_14-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/sqlite_fdw_14-2.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.2.0-1.rhel8.aarch64.rpm pgdg 2.2.0 156.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/sqlite_fdw_14-2.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 67.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sqlite_fdw_14-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-1PGDG.rhel9.x86_64.rpm pgdg 2.5.0 66.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/sqlite_fdw_14-2.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.4.0-1PGDG.rhel9.x86_64.rpm pgdg 2.4.0 58.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/sqlite_fdw_14-2.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.3.0-1.rhel9.x86_64.rpm pgdg 2.3.0 53.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/sqlite_fdw_14-2.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.1.1-1.rhel9.x86_64.rpm pgdg 2.1.1 159.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/sqlite_fdw_14-2.1.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 65.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sqlite_fdw_14-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-1PGDG.rhel9.aarch64.rpm pgdg 2.5.0 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/sqlite_fdw_14-2.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.4.0-1PGDG.rhel9.aarch64.rpm pgdg 2.4.0 56.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/sqlite_fdw_14-2.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.3.0-1.rhel9.aarch64.rpm pgdg 2.3.0 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/sqlite_fdw_14-2.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.2.0-1.rhel9.aarch64.rpm pgdg 2.2.0 160.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/sqlite_fdw_14-2.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 68.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sqlite_fdw_14-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-2PGDG.rhel10.x86_64.rpm pgdg 2.5.0 67.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/sqlite_fdw_14-2.5.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 66.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sqlite_fdw_14-2.5.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 sqlite_fdw_14 sqlite_fdw_14-2.5.0-2PGDG.rhel10.aarch64.rpm pgdg 2.5.0 66.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/sqlite_fdw_14-2.5.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 152.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 148.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 153.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 149.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 185.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 183.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 159.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 157.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 157.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-sqlite-fdw postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 155.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sqlite-fdw/postgresql-14-sqlite-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `sqlite_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg sqlite_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `sqlite_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install sqlite_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y sqlite_fdw -v 17  # PG 17
pig ext install -y sqlite_fdw -v 16  # PG 16
pig ext install -y sqlite_fdw -v 15  # PG 15
pig ext install -y sqlite_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y sqlite_fdw_17       # PG 17
dnf install -y sqlite_fdw_16       # PG 16
dnf install -y sqlite_fdw_15       # PG 15
dnf install -y sqlite_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-sqlite-fdw   # PG 17
apt install -y postgresql-16-sqlite-fdw   # PG 16
apt install -y postgresql-15-sqlite-fdw   # PG 15
apt install -y postgresql-14-sqlite-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION sqlite_fdw;
```



## 用法

> [sqlite_fdw: SQLite 外部数据包装器](https://github.com/pgspider/sqlite_fdw)

### 创建服务器

```sql
CREATE EXTENSION sqlite_fdw;

CREATE SERVER sqlite_server FOREIGN DATA WRAPPER sqlite_fdw
  OPTIONS (database '/path/to/database.db');
```

**服务器选项：** `database`（必填，SQLite 文件路径）、`updatable`（默认 `true`）、`truncatable`（默认 `false`）、`keep_connections`（默认 `true`）、`batch_size`（默认 1）、`force_readonly`（默认 `false`）。

由于 SQLite 没有认证模型，无需 `CREATE USER MAPPING`。

### 创建外部表

```sql
CREATE FOREIGN TABLE remote_data (
  id integer OPTIONS (key 'true'),
  name text,
  created timestamp OPTIONS (column_type 'INT'),
  data bytea
)
SERVER sqlite_server
OPTIONS (table 'data_table');
```

**表选项：** `table`（SQLite 表名，如与 PostgreSQL 名称不同）、`updatable`、`truncatable`、`batch_size`。

**列选项：** `column_name`（映射到不同的 SQLite 列名）、`column_type`（SQLite 亲和类型：`INT` 用于时间戳纪元，`BLOB` 用于 UUID）、`key`（标记为主键，UPDATE/DELETE 必需）。

### CRUD 操作

```sql
SELECT * FROM remote_data WHERE id > 100;
INSERT INTO remote_data (id, name) VALUES (1, 'test');
UPDATE remote_data SET name = 'updated' WHERE id = 1;
DELETE FROM remote_data WHERE id = 1;
```

### 导入外部模式

```sql
IMPORT FOREIGN SCHEMA public
  FROM SERVER sqlite_server INTO local_schema;
```

**导入选项：** `import_default`（默认 `false`）、`import_not_null`（默认 `true`）。

### 数据类型映射

| SQLite 类型 | PostgreSQL 类型 |
|-------------|-----------------|
| int | bigint |
| text, char, clob | text |
| blob | bytea |
| real, float, double | double precision |
| datetime | timestamp |
| uuid | uuid |
| json, jsonb | json, jsonb |

时间戳可以存储为 TEXT（ISO 格式）或 INT（Unix 纪元，使用 `column_type 'INT'`）。UUID 可以存储为 TEXT（36 字符）或 BLOB（16 字节）。SQLite 数据库文件必须对 PostgreSQL 操作系统用户可读（DML 操作还需可写）。
