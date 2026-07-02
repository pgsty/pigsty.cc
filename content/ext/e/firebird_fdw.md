---
title: "firebird_fdw"
linkTitle: "firebird_fdw"
description: "Firebird外部数据源包装器"
weight: 8750
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ibarwick/firebird_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ibarwick/firebird_fdw</div>
    <div class="ext-card__desc">https://github.com/ibarwick/firebird_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/firebird_fdw-1.4.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">firebird_fdw-1.4.2.tar.gz</div>
    <div class="ext-card__desc">firebird_fdw-1.4.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`firebird_fdw`**](/ext/e/firebird_fdw) | `1.4.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8750  | [**`firebird_fdw`**](/ext/e/firebird_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`wrappers`](/ext/e/wrappers) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `firebird_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `firebird_fdw_$v` | `libfq` |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-firebird-fdw` | `libfq` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 4 |
| el8.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 2 | AVAIL PIGSTY 1.4.2 2 |
| el9.x86_64 | AVAIL PIGSTY 1.4.2 8 | AVAIL PIGSTY 1.4.2 8 | AVAIL PIGSTY 1.4.2 8 | AVAIL PIGSTY 1.4.2 8 | AVAIL PIGSTY 1.4.2 10 |
| el9.aarch64 | AVAIL PIGSTY 1.4.2 8 | AVAIL PIGSTY 1.4.2 8 | AVAIL PIGSTY 1.4.2 9 | AVAIL PIGSTY 1.4.2 9 | AVAIL PIGSTY 1.4.2 10 |
| el10.x86_64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 |
| el10.aarch64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 |
| d12.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u26.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u26.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
@ el8.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 53.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/firebird_fdw_18-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 51.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/firebird_fdw_18-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 53.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/firebird_fdw_18-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.2 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.2 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel9.7.x86_64.rpm pgdg 1.4.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.1-3PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel9.6.x86_64.rpm pgdg 1.4.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.1-3PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 52.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/firebird_fdw_18-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 52.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/firebird_fdw_18-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.2 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.2 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel9.7.aarch64.rpm pgdg 1.4.1 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.1-3PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel9.6.aarch64.rpm pgdg 1.4.1 51.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.1-3PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/firebird_fdw_18-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 54.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/firebird_fdw_18-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/firebird_fdw_18-1.4.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 53.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/firebird_fdw_18-1.4.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 52.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/firebird_fdw_18-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/firebird_fdw_18-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 firebird_fdw_18 firebird_fdw_18-1.4.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/firebird_fdw_18-1.4.1-3PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb pigsty 1.4.2 139.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb pigsty 1.4.2 136.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb pigsty 1.4.2 139.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb pigsty 1.4.2 136.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb pigsty 1.4.2 148.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb pigsty 1.4.2 146.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb pigsty 1.4.2 142.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb pigsty 1.4.2 141.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb pigsty 1.4.2 141.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-firebird-fdw postgresql-18-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb pigsty 1.4.2 139.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-18-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 53.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/firebird_fdw_17-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 51.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/firebird_fdw_17-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 53.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/firebird_fdw_17-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 52.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.2 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.2 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel9.7.x86_64.rpm pgdg 1.4.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.1-3PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel9.6.x86_64.rpm pgdg 1.4.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.1-3PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.0-3PGDG.rhel9.x86_64.rpm pgdg 1.4.0 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/firebird_fdw_17-1.4.0-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 52.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/firebird_fdw_17-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.2 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.2 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel9.7.aarch64.rpm pgdg 1.4.1 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.1-3PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel9.6.aarch64.rpm pgdg 1.4.1 51.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.1-3PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.0-3PGDG.rhel9.aarch64.rpm pgdg 1.4.0 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/firebird_fdw_17-1.4.0-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/firebird_fdw_17-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 53.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/firebird_fdw_17-1.4.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 53.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/firebird_fdw_17-1.4.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 52.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/firebird_fdw_17-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/firebird_fdw_17-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 firebird_fdw_17 firebird_fdw_17-1.4.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/firebird_fdw_17-1.4.1-3PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb pigsty 1.4.2 139.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb pigsty 1.4.2 136.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb pigsty 1.4.2 139.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb pigsty 1.4.2 136.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb pigsty 1.4.2 167.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb pigsty 1.4.2 166.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb pigsty 1.4.2 142.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb pigsty 1.4.2 141.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb pigsty 1.4.2 140.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-firebird-fdw postgresql-17-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb pigsty 1.4.2 139.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-17-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 53.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/firebird_fdw_16-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 51.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/firebird_fdw_16-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 53.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/firebird_fdw_16-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.4.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.2 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.2 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.4.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel9.7.x86_64.rpm pgdg 1.4.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.4.1-3PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel9.6.x86_64.rpm pgdg 1.4.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.4.1-3PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.3.1-1PGDG.rhel9.x86_64.rpm pgdg 1.3.1 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/firebird_fdw_16-1.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 52.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/firebird_fdw_16-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.2 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.2 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel9.7.aarch64.rpm pgdg 1.4.1 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.1-3PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel9.6.aarch64.rpm pgdg 1.4.1 51.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.1-3PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.3.1-1PGDG.rhel9.aarch64.rpm pgdg 1.3.1 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/firebird_fdw_16-1.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/firebird_fdw_16-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 53.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/firebird_fdw_16-1.4.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 53.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/firebird_fdw_16-1.4.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 52.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/firebird_fdw_16-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/firebird_fdw_16-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 firebird_fdw_16 firebird_fdw_16-1.4.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/firebird_fdw_16-1.4.1-3PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb pigsty 1.4.2 139.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb pigsty 1.4.2 136.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb pigsty 1.4.2 139.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb pigsty 1.4.2 136.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb pigsty 1.4.2 167.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb pigsty 1.4.2 165.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb pigsty 1.4.2 142.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb pigsty 1.4.2 141.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb pigsty 1.4.2 140.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-firebird-fdw postgresql-16-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb pigsty 1.4.2 139.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-16-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 53.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/firebird_fdw_15-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 52.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/firebird_fdw_15-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.3.0-1.rhel8.aarch64.rpm pgdg 1.3.0 49.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/firebird_fdw_15-1.3.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 54.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/firebird_fdw_15-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.4.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.2 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.2 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.4.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel9.7.x86_64.rpm pgdg 1.4.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.4.1-3PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel9.6.x86_64.rpm pgdg 1.4.1 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.4.1-3PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.3.0-1.rhel9.x86_64.rpm pgdg 1.3.0 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/firebird_fdw_15-1.3.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 53.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/firebird_fdw_15-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.2 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.2 52.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel9.7.aarch64.rpm pgdg 1.4.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.1-3PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel9.6.aarch64.rpm pgdg 1.4.1 52.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.1-3PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.3.0-1.rhel9.aarch64.rpm pgdg 1.3.0 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/firebird_fdw_15-1.3.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 55.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/firebird_fdw_15-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/firebird_fdw_15-1.4.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/firebird_fdw_15-1.4.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 53.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/firebird_fdw_15-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/firebird_fdw_15-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 firebird_fdw_15 firebird_fdw_15-1.4.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/firebird_fdw_15-1.4.1-3PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb pigsty 1.4.2 139.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb pigsty 1.4.2 136.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb pigsty 1.4.2 139.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb pigsty 1.4.2 136.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb pigsty 1.4.2 168.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb pigsty 1.4.2 166.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb pigsty 1.4.2 143.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb pigsty 1.4.2 142.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb pigsty 1.4.2 141.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-firebird-fdw postgresql-15-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb pigsty 1.4.2 140.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-15-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 54.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/firebird_fdw_14-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.2.3-2.rhel8.x86_64.rpm pgdg 1.2.3 151.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/firebird_fdw_14-1.2.3-2.rhel8.x86_64.rpm
@ el8.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.2.3-1.rhel8.x86_64.rpm pgdg 1.2.3 151.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/firebird_fdw_14-1.2.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.2.2-1.rhel8.x86_64.rpm pgdg 1.2.2 151.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/firebird_fdw_14-1.2.2-1.rhel8.x86_64.rpm
@ el8.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 52.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/firebird_fdw_14-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.3.0-1.rhel8.aarch64.rpm pgdg 1.3.0 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/firebird_fdw_14-1.3.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 55.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/firebird_fdw_14-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 53.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.4.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.2 53.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.2 53.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.4.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel9.7.x86_64.rpm pgdg 1.4.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.4.1-3PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel9.6.x86_64.rpm pgdg 1.4.1 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.4.1-3PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.3.0-1.rhel9.x86_64.rpm pgdg 1.3.0 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.2.3-2.rhel9.x86_64.rpm pgdg 1.2.3 153.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.2.3-2.rhel9.x86_64.rpm
@ el9.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.2.3-1.rhel9.x86_64.rpm pgdg 1.2.3 153.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/firebird_fdw_14-1.2.3-1.rhel9.x86_64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/firebird_fdw_14-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.2 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.2 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel9.7.aarch64.rpm pgdg 1.4.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.1-3PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel9.6.aarch64.rpm pgdg 1.4.1 52.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.1-3PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.3.0-1.rhel9.aarch64.rpm pgdg 1.3.0 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.2.3-3.rhel9.aarch64.rpm pgdg 1.2.3 152.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/firebird_fdw_14-1.2.3-3.rhel9.aarch64.rpm
@ el10.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 55.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/firebird_fdw_14-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 54.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/firebird_fdw_14-1.4.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/firebird_fdw_14-1.4.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 54.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/firebird_fdw_14-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/firebird_fdw_14-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 firebird_fdw_14 firebird_fdw_14-1.4.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/firebird_fdw_14-1.4.1-3PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb pigsty 1.4.2 141.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb pigsty 1.4.2 138.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb pigsty 1.4.2 141.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb pigsty 1.4.2 138.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb pigsty 1.4.2 169.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb pigsty 1.4.2 167.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb pigsty 1.4.2 144.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb pigsty 1.4.2 143.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb pigsty 1.4.2 143.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-firebird-fdw postgresql-14-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb pigsty 1.4.2 141.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/firebird-fdw/postgresql-14-firebird-fdw_1.4.2-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `firebird_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg firebird_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `firebird_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install firebird_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y firebird_fdw -v 18  # PG 18
pig ext install -y firebird_fdw -v 17  # PG 17
pig ext install -y firebird_fdw -v 16  # PG 16
pig ext install -y firebird_fdw -v 15  # PG 15
pig ext install -y firebird_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y firebird_fdw_18       # PG 18
dnf install -y firebird_fdw_17       # PG 17
dnf install -y firebird_fdw_16       # PG 16
dnf install -y firebird_fdw_15       # PG 15
dnf install -y firebird_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-firebird-fdw   # PG 18
apt install -y postgresql-17-firebird-fdw   # PG 17
apt install -y postgresql-16-firebird-fdw   # PG 16
apt install -y postgresql-15-firebird-fdw   # PG 15
apt install -y postgresql-14-firebird-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION firebird_fdw;
```




## 用法

来源：[upstream README](https://github.com/ibarwick/firebird_fdw)、[1.4.2 README](https://github.com/ibarwick/firebird_fdw/blob/REL_1_4_STABLE/README.md)、[1.4.2 tag](https://github.com/ibarwick/firebird_fdw/tree/1.4.2)。

`firebird_fdw` 通过外部数据包装器 API 将 PostgreSQL 连接到 Firebird 数据库。它支持读取、写入、`IMPORT FOREIGN SCHEMA`、受支持表达式的谓词下推、连接缓存，以及 PostgreSQL 14+ 上的外部表 `TRUNCATE`。

### 创建服务器

```sql
CREATE EXTENSION firebird_fdw;

CREATE SERVER firebird_server FOREIGN DATA WRAPPER firebird_fdw
  OPTIONS (address 'localhost', database '/path/to/database.fdb');
```

服务器选项包括：

- `address`，默认 `localhost`。
- `port`，默认 `3050`。
- `database`，Firebird 数据库名称或路径。
- `updatable`，默认 `true`；表级设置可以覆盖它。
- `disable_pushdowns`，用于调试或基准测试。
- `quote_identifiers`，默认引用表名和列名标识符。
- `implicit_bool_type`，用于由整数承载的 Firebird 布尔列。
- `batch_size`，用于 PostgreSQL 14+ 上的多行插入。

### 创建用户映射

```sql
CREATE USER MAPPING FOR CURRENT_USER SERVER firebird_server
  OPTIONS (username 'sysdba', password 'masterke');
```

### 创建外部表

```sql
CREATE FOREIGN TABLE fb_test (
  id smallint,
  val varchar(2048)
)
SERVER firebird_server
OPTIONS (table_name 'fdw_test');
```

使用列名映射：

```sql
CREATE FOREIGN TABLE fb_mapped (
  id smallint OPTIONS (column_name 'test_id'),
  val varchar(2048) OPTIONS (column_name 'test_val')
)
SERVER firebird_server
OPTIONS (table_name 'fdw_test');
```

使用自定义查询时，外部表是只读的：

```sql
CREATE FOREIGN TABLE fb_query (
  id smallint,
  val varchar(2048)
)
SERVER firebird_server
OPTIONS (query $$ SELECT id, val FROM fdw_test WHERE id > 10 $$);
```

表选项包括 `table_name`、`query`、`updatable`、`estimated_row_count`、`quote_identifier` 和 `batch_size`。列选项包括 `column_name`、`quote_identifier` 和 `implicit_bool_type`。

### 导入外部模式

```sql
IMPORT FOREIGN SCHEMA someschema
  FROM SERVER firebird_server
  INTO public
  OPTIONS (import_views 'true', verbose 'true');
```

导入选项包括 `import_not_null`、`import_views`、`updatable` 和 `verbose`。模式名在 Firebird 中没有特殊含义，可以是 PostgreSQL `IMPORT FOREIGN SCHEMA` 语法接受的任意值。

### CRUD 操作

```sql
SELECT * FROM fb_test WHERE id > 5;
INSERT INTO fb_test VALUES (10, 'new record');
UPDATE fb_test SET val = 'updated' WHERE id = 10;
DELETE FROM fb_test WHERE id = 10;
TRUNCATE fb_test;
```

`UPDATE` 和 `DELETE` 使用 Firebird 的 `RDB$DB_KEY`。由于 Firebird 没有原生 `TRUNCATE` 语句，`TRUNCATE` 会实现为不带条件的 Firebird `DELETE`。

### 工具函数

- `firebird_fdw_version()` 返回 FDW 版本整数。
- `firebird_fdw_close_connections()` 关闭当前 PostgreSQL 会话中缓存的 Firebird 连接。
- `firebird_fdw_server_options(servername text)` 显示有效服务器选项值，以及每个选项是否由用户显式提供。
- `firebird_fdw_diag()` 返回诊断键值数据，包括 FDW 和 `libfq` 版本。
- `firebird_version()` 报告已配置外部服务器的 Firebird 服务端版本；为此它可能会打开连接。

### 注意事项

- Pigsty 为 PostgreSQL 14-18 打包 `firebird_fdw` 1.4.2。上游文档声明兼容 PostgreSQL 10-19，其中较新的 FDW API 功能只在较新的 PostgreSQL 版本中可用。
- 上游支持 Firebird 2.5 及更高版本；更旧的 Firebird 版本不是已测试目标。
- `firebird_fdw` 与 `libfq` 共同开发，因此包兼容性取决于这些库是否匹配。
- 基于自定义查询的外部表不能更新。
- `implicit_bool_type` 功能仍属实验性质，面向使用整数列表示布尔值的场景。
