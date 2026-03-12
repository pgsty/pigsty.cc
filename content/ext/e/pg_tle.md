---
title: "pg_tle"
linkTitle: "pg_tle"
description: "AWS 可信语言扩展"
weight: 3000
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aws/pg_tle">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aws/pg_tle</div>
    <div class="ext-card__desc">https://github.com/aws/pg_tle</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_tle-1.5.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tle-1.5.2.tar.gz</div>
    <div class="ext-card__desc">pg_tle-1.5.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tle`**](/ext/e/pg_tle) | `1.5.2` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3000  | [**`pg_tle`**](/ext/e/pg_tle) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgtle` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) [`pljava`](/ext/e/pljava) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`plprql`](/ext/e/plprql) [`plsh`](/ext/e/plsh) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require bison flex to build


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_tle` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_tle_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tle` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 |
| el8.aarch64 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 |
| el9.x86_64 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 |
| el9.aarch64 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 | AVAIL PIGSTY 1.5.2 4 |
| el10.x86_64 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 |
| el10.aarch64 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 | AVAIL PIGSTY 1.5.2 2 |
| d12.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
@ el8.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 68.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tle_18-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel8.x86_64.rpm pgdg 1.5.2 68.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_tle_18-1.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 65.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tle_18-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel8.aarch64.rpm pgdg 1.5.2 65.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_tle_18-1.5.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 63.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tle_18-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel9.x86_64.rpm pgdg 1.5.2 65.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_tle_18-1.5.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 59.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tle_18-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel9.aarch64.rpm pgdg 1.5.2 62.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_tle_18-1.5.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 63.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tle_18-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel10.x86_64.rpm pgdg 1.5.2 65.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_tle_18-1.5.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 60.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tle_18-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel10.aarch64.rpm pgdg 1.5.2 63.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_tle_18-1.5.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 159.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 155.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 160.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 155.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 168.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 165.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 162.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 159.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 68.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tle_17-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 68.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 68.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel8.x86_64.rpm pgdg 1.2.0 63.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.2.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 65.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tle_17-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 64.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 64.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel8.aarch64.rpm pgdg 1.2.0 59.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.2.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 63.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tle_17-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 64.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 64.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel9.x86_64.rpm pgdg 1.2.0 59.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.2.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 60.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tle_17-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 61.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 61.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel9.aarch64.rpm pgdg 1.2.0 56.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.2.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 63.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tle_17-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 65.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_tle_17-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 60.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tle_17-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 62.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_tle_17-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 159.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 154.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 159.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 155.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 183.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 179.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 162.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 159.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 68.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tle_16-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 68.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 68.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 63.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 65.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tle_16-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 64.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 64.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 59.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 63.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tle_16-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 64.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 64.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 59.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 60.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tle_16-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 61.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 61.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 56.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 63.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tle_16-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 65.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_tle_16-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 60.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tle_16-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 62.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_tle_16-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 159.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 155.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 160.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 155.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 183.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 179.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 162.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 159.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 69.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tle_15-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 69.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 69.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 63.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 66.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tle_15-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 65.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 65.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 60.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 69.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tle_15-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 70.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 70.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 65.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 66.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tle_15-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 68.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 67.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 62.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 69.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tle_15-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 71.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_tle_15-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 67.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tle_15-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 68.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_tle_15-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 161.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 156.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 161.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 156.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 189.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 186.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 168.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 166.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 70.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tle_14-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 69.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 69.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 64.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 66.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tle_14-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 65.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 65.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 60.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 69.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tle_14-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 70.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 70.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 65.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 66.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tle_14-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 68.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 68.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 62.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 70.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tle_14-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 71.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_tle_14-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 67.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tle_14-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 69.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_tle_14-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 162.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 156.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 162.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 157.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 189.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 186.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 169.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 167.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tle` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tle         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tle` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tle;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tle -v 18  # PG 18
pig ext install -y pg_tle -v 17  # PG 17
pig ext install -y pg_tle -v 16  # PG 16
pig ext install -y pg_tle -v 15  # PG 15
pig ext install -y pg_tle -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_tle_18       # PG 18
dnf install -y pg_tle_17       # PG 17
dnf install -y pg_tle_16       # PG 16
dnf install -y pg_tle_15       # PG 15
dnf install -y pg_tle_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-tle   # PG 18
apt install -y postgresql-17-pg-tle   # PG 17
apt install -y postgresql-16-pg-tle   # PG 16
apt install -y postgresql-15-pg-tle   # PG 15
apt install -y postgresql-14-pg-tle   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tle';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tle;
```



## 用法

> [pg_tle: PostgreSQL 可信语言扩展](https://github.com/aws/pg_tle)

`pg_tle` 允许你使用可信语言（SQL、PL/pgSQL、PL/v8、PL/Perl）创建和管理 PostgreSQL 扩展，无需访问文件系统或重启服务器。

在 `postgresql.conf` 中将 `pg_tle` 添加到 `shared_preload_libraries`：

```
shared_preload_libraries = 'pg_tle'
```

### 安装 TLE 扩展

```sql
SELECT pgtle.install_extension(
  'my_extension',      -- 扩展名称
  '1.0',               -- 版本
  'My custom extension', -- 描述
  $_pgtle_$
    CREATE FUNCTION my_func() RETURNS text AS $$
      SELECT 'hello from my_extension';
    $$ LANGUAGE SQL;
  $_pgtle_$
);
```

### 管理扩展版本

```sql
-- 添加升级路径
SELECT pgtle.install_update_path(
  'my_extension',  -- 扩展名称
  '1.0',           -- 源版本
  '1.1',           -- 目标版本
  $_pgtle_$
    CREATE OR REPLACE FUNCTION my_func() RETURNS text AS $$
      SELECT 'hello from my_extension v1.1';
    $$ LANGUAGE SQL;
  $_pgtle_$
);

-- 设置默认版本
SELECT pgtle.set_default_version('my_extension', '1.1');
```

### 使用 TLE 扩展

```sql
CREATE EXTENSION my_extension;
SELECT my_func();  -- 'hello from my_extension'
ALTER EXTENSION my_extension UPDATE TO '1.1';
```

### 删除 TLE 扩展

```sql
DROP EXTENSION my_extension;
SELECT pgtle.uninstall_extension('my_extension');
```

### 钩子与功能

注册自定义钩子（例如密码检查钩子）：

```sql
SELECT pgtle.register_feature('my_password_check', 'passcheck');
SELECT pgtle.unregister_feature('my_password_check', 'passcheck');
```

### 核心函数

| 函数 | 说明 |
|------|------|
| `pgtle.install_extension()` | 安装新的 TLE 扩展 |
| `pgtle.install_update_path()` | 添加版本间的升级路径 |
| `pgtle.set_default_version()` | 设置扩展的默认版本 |
| `pgtle.uninstall_extension()` | 删除 TLE 扩展 |
| `pgtle.register_feature()` | 注册功能钩子 |
| `pgtle.unregister_feature()` | 取消注册功能钩子 |
| `pgtle.available_extensions()` | 列出可用的 TLE 扩展 |
| `pgtle.available_extension_versions()` | 列出可用版本 |
