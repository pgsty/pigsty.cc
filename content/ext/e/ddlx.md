---
title: "ddlx"
linkTitle: "ddlx"
description: "提取数据库对象的DDL"
weight: 5080
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/lacanoid/pgddl">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">lacanoid/pgddl</div>
    <div class="ext-card__desc">https://github.com/lacanoid/pgddl</div>
  </a>
  <a class="ext-card ext-card--source" href="pgddl-0.30.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgddl-0.30.tar.gz</div>
    <div class="ext-card__desc">pgddl-0.30.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ddlx`**](/ext/e/ddlx) | `0.30` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5080  | [**`ddlx`**](/ext/e/ddlx) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgdd`](/ext/e/pgdd) [`pg_checksums`](/ext/e/pg_checksums) [`pg_permissions`](/ext/e/pg_permissions) [`pgextwlist`](/ext/e/pgextwlist) [`pg_catcheck`](/ext/e/pg_catcheck) [`adminpack`](/ext/e/adminpack) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.30` | {{< pgvers "18,17,16,15,14" >}} | `pg_ddlx` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.30` | {{< pgvers "18,17,16,15,14" >}} | `ddlx_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.30` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ddlx` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.30 1 | AVAIL PIGSTY 0.30 3 | AVAIL PIGSTY 0.30 6 | AVAIL PIGSTY 0.30 8 | AVAIL PIGSTY 0.30 8 |
| el8.aarch64 | AVAIL PGDG 0.30 1 | AVAIL PIGSTY 0.30 3 | AVAIL PIGSTY 0.30 6 | AVAIL PIGSTY 0.30 8 | AVAIL PIGSTY 0.30 8 |
| el9.x86_64 | AVAIL PGDG 0.30 1 | AVAIL PIGSTY 0.30 3 | AVAIL PIGSTY 0.30 6 | AVAIL PIGSTY 0.30 8 | AVAIL PIGSTY 0.30 8 |
| el9.aarch64 | AVAIL PGDG 0.30 1 | AVAIL PIGSTY 0.30 3 | AVAIL PIGSTY 0.30 6 | AVAIL PIGSTY 0.30 8 | AVAIL PIGSTY 0.30 8 |
| el10.x86_64 | AVAIL PGDG 0.30 1 | AVAIL PGDG 0.30 2 | AVAIL PGDG 0.30 2 | AVAIL PGDG 0.30 2 | AVAIL PGDG 0.30 2 |
| el10.aarch64 | AVAIL PGDG 0.30 1 | AVAIL PGDG 0.30 2 | AVAIL PGDG 0.30 2 | AVAIL PGDG 0.30 2 | AVAIL PGDG 0.30 2 |
| d12.x86_64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| d12.aarch64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| d13.x86_64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| d13.aarch64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| u22.x86_64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| u22.aarch64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| u24.x86_64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
| u24.aarch64 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 | AVAIL PIGSTY 0.30 1 |
@ el8.x86_64 18 ddlx_18 ddlx_18-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/ddlx_18-0.30-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 ddlx_18 ddlx_18-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/ddlx_18-0.30-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 ddlx_18 ddlx_18-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/ddlx_18-0.30-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 ddlx_18 ddlx_18-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/ddlx_18-0.30-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 ddlx_18 ddlx_18-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/ddlx_18-0.30-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 ddlx_18 ddlx_18-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/ddlx_18-0.30-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~bookworm_amd64.deb pigsty 0.30 28.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~bookworm_arm64.deb pigsty 0.30 28.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~trixie_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~trixie_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~jammy_amd64.deb pigsty 0.30 26.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~jammy_arm64.deb pigsty 0.30 26.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~noble_amd64.deb pigsty 0.30 25.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ddlx postgresql-18-ddlx_0.30-1PIGSTY~noble_arm64.deb pigsty 0.30 25.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-18-ddlx_0.30-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 ddlx_17 ddlx_17-0.30-1PIGSTY.el8.x86_64.rpm pigsty 0.30 32.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddlx_17-0.30-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 ddlx_17 ddlx_17-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/ddlx_17-0.30-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 ddlx_17 ddlx_17-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/ddlx_17-0.29-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 ddlx_17 ddlx_17-0.30-1PIGSTY.el8.aarch64.rpm pigsty 0.30 32.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddlx_17-0.30-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 ddlx_17 ddlx_17-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/ddlx_17-0.30-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 ddlx_17 ddlx_17-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/ddlx_17-0.29-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 ddlx_17 ddlx_17-0.30-1PIGSTY.el9.x86_64.rpm pigsty 0.30 31.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddlx_17-0.30-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 ddlx_17 ddlx_17-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/ddlx_17-0.30-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 ddlx_17 ddlx_17-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/ddlx_17-0.29-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 ddlx_17 ddlx_17-0.30-1PIGSTY.el9.aarch64.rpm pigsty 0.30 31.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddlx_17-0.30-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 ddlx_17 ddlx_17-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/ddlx_17-0.30-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 ddlx_17 ddlx_17-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/ddlx_17-0.29-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 ddlx_17 ddlx_17-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/ddlx_17-0.30-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 ddlx_17 ddlx_17-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/ddlx_17-0.29-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 ddlx_17 ddlx_17-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/ddlx_17-0.30-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 ddlx_17 ddlx_17-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/ddlx_17-0.29-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~bookworm_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~bookworm_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~trixie_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~trixie_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~jammy_amd64.deb pigsty 0.30 26.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~jammy_arm64.deb pigsty 0.30 26.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~noble_amd64.deb pigsty 0.30 25.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ddlx postgresql-17-ddlx_0.30-1PIGSTY~noble_arm64.deb pigsty 0.30 25.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-17-ddlx_0.30-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 ddlx_16 ddlx_16-0.30-1PIGSTY.el8.x86_64.rpm pigsty 0.30 32.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddlx_16-0.30-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 ddlx_16 ddlx_16-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/ddlx_16-0.30-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 ddlx_16 ddlx_16-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/ddlx_16-0.29-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 ddlx_16 ddlx_16-0.27-1PGDG.rhel8.noarch.rpm pgdg 0.27 32.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/ddlx_16-0.27-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 ddlx_16 ddlx_16-0.26-1PGDG.rhel8.noarch.rpm pgdg 0.26 30.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/ddlx_16-0.26-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 ddlx_16 ddlx_16-0.24-1PGDG.rhel8.noarch.rpm pgdg 0.24 30.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/ddlx_16-0.24-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 ddlx_16 ddlx_16-0.30-1PIGSTY.el8.aarch64.rpm pigsty 0.30 32.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddlx_16-0.30-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 ddlx_16 ddlx_16-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/ddlx_16-0.30-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 ddlx_16 ddlx_16-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/ddlx_16-0.29-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 ddlx_16 ddlx_16-0.27-1PGDG.rhel8.noarch.rpm pgdg 0.27 31.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/ddlx_16-0.27-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 ddlx_16 ddlx_16-0.26-1PGDG.rhel8.noarch.rpm pgdg 0.26 30.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/ddlx_16-0.26-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 ddlx_16 ddlx_16-0.24-1PGDG.rhel8.noarch.rpm pgdg 0.24 30.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/ddlx_16-0.24-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 ddlx_16 ddlx_16-0.30-1PIGSTY.el9.x86_64.rpm pigsty 0.30 31.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddlx_16-0.30-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 ddlx_16 ddlx_16-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/ddlx_16-0.30-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 ddlx_16 ddlx_16-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/ddlx_16-0.29-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 ddlx_16 ddlx_16-0.27-1PGDG.rhel9.noarch.rpm pgdg 0.27 30.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/ddlx_16-0.27-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 ddlx_16 ddlx_16-0.26-1PGDG.rhel9.noarch.rpm pgdg 0.26 29.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/ddlx_16-0.26-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 ddlx_16 ddlx_16-0.24-1PGDG.rhel9.noarch.rpm pgdg 0.24 28.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/ddlx_16-0.24-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 ddlx_16 ddlx_16-0.30-1PIGSTY.el9.aarch64.rpm pigsty 0.30 31.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddlx_16-0.30-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 ddlx_16 ddlx_16-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/ddlx_16-0.30-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 ddlx_16 ddlx_16-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/ddlx_16-0.29-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 ddlx_16 ddlx_16-0.27-1PGDG.rhel9.noarch.rpm pgdg 0.27 30.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/ddlx_16-0.27-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 ddlx_16 ddlx_16-0.26-1PGDG.rhel9.noarch.rpm pgdg 0.26 29.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/ddlx_16-0.26-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 ddlx_16 ddlx_16-0.24-1PGDG.rhel9.noarch.rpm pgdg 0.24 28.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/ddlx_16-0.24-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 ddlx_16 ddlx_16-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/ddlx_16-0.30-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 ddlx_16 ddlx_16-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/ddlx_16-0.29-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 ddlx_16 ddlx_16-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/ddlx_16-0.30-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 ddlx_16 ddlx_16-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/ddlx_16-0.29-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~bookworm_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~bookworm_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~trixie_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~trixie_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~jammy_amd64.deb pigsty 0.30 26.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~jammy_arm64.deb pigsty 0.30 26.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~noble_amd64.deb pigsty 0.30 25.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ddlx postgresql-16-ddlx_0.30-1PIGSTY~noble_arm64.deb pigsty 0.30 25.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-16-ddlx_0.30-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 ddlx_15 ddlx_15-0.30-1PIGSTY.el8.x86_64.rpm pigsty 0.30 32.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddlx_15-0.30-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.30-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.29-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.27-1PGDG.rhel8.noarch.rpm pgdg 0.27 32.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.27-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.26-1PGDG.rhel8.noarch.rpm pgdg 0.26 30.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.26-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.24-1PGDG.rhel8.noarch.rpm pgdg 0.24 30.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.24-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.23-1.rhel8.noarch.rpm pgdg 0.23 30.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.23-1.rhel8.noarch.rpm
@ el8.x86_64 15 ddlx_15 ddlx_15-0.22-1.rhel8.noarch.rpm pgdg 0.22 29.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ddlx_15-0.22-1.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.30-1PIGSTY.el8.aarch64.rpm pigsty 0.30 32.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddlx_15-0.30-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.30-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.29-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.27-1PGDG.rhel8.noarch.rpm pgdg 0.27 31.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.27-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.26-1PGDG.rhel8.noarch.rpm pgdg 0.26 30.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.26-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.24-1PGDG.rhel8.noarch.rpm pgdg 0.24 30.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.24-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.23-1.rhel8.noarch.rpm pgdg 0.23 30.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.23-1.rhel8.noarch.rpm
@ el8.aarch64 15 ddlx_15 ddlx_15-0.22-1.rhel8.noarch.rpm pgdg 0.22 29.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ddlx_15-0.22-1.rhel8.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.30-1PIGSTY.el9.x86_64.rpm pigsty 0.30 31.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddlx_15-0.30-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.30-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.29-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.27-1PGDG.rhel9.noarch.rpm pgdg 0.27 30.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.27-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.26-1PGDG.rhel9.noarch.rpm pgdg 0.26 29.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.26-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.24-1PGDG.rhel9.noarch.rpm pgdg 0.24 28.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.24-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.23-1.rhel9.noarch.rpm pgdg 0.23 28.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.23-1.rhel9.noarch.rpm
@ el9.x86_64 15 ddlx_15 ddlx_15-0.22-1.rhel9.noarch.rpm pgdg 0.22 29.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ddlx_15-0.22-1.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.30-1PIGSTY.el9.aarch64.rpm pigsty 0.30 31.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddlx_15-0.30-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.30-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.29-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.27-1PGDG.rhel9.noarch.rpm pgdg 0.27 30.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.27-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.26-1PGDG.rhel9.noarch.rpm pgdg 0.26 29.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.26-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.24-1PGDG.rhel9.noarch.rpm pgdg 0.24 28.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.24-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.23-1.rhel9.noarch.rpm pgdg 0.23 28.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.23-1.rhel9.noarch.rpm
@ el9.aarch64 15 ddlx_15 ddlx_15-0.22-1.rhel9.noarch.rpm pgdg 0.22 28.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ddlx_15-0.22-1.rhel9.noarch.rpm
@ el10.x86_64 15 ddlx_15 ddlx_15-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/ddlx_15-0.30-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 ddlx_15 ddlx_15-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/ddlx_15-0.29-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 ddlx_15 ddlx_15-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/ddlx_15-0.30-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 ddlx_15 ddlx_15-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/ddlx_15-0.29-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~bookworm_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~bookworm_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~trixie_amd64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~trixie_arm64.deb pigsty 0.30 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~jammy_amd64.deb pigsty 0.30 25.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~jammy_arm64.deb pigsty 0.30 25.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~noble_amd64.deb pigsty 0.30 25.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ddlx postgresql-15-ddlx_0.30-1PIGSTY~noble_arm64.deb pigsty 0.30 25.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-15-ddlx_0.30-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 ddlx_14 ddlx_14-0.30-1PIGSTY.el8.x86_64.rpm pigsty 0.30 32.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddlx_14-0.30-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.30-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.29-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.27-1PGDG.rhel8.noarch.rpm pgdg 0.27 31.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.27-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.26-1PGDG.rhel8.noarch.rpm pgdg 0.26 30.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.26-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.24-1PGDG.rhel8.noarch.rpm pgdg 0.24 30.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.24-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.23-1.rhel8.noarch.rpm pgdg 0.23 30.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.23-1.rhel8.noarch.rpm
@ el8.x86_64 14 ddlx_14 ddlx_14-0.22-1.rhel8.noarch.rpm pgdg 0.22 29.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ddlx_14-0.22-1.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.30-1PIGSTY.el8.aarch64.rpm pigsty 0.30 32.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddlx_14-0.30-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.30-1PGDG.rhel8.noarch.rpm pgdg 0.30 33.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.30-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.29-1PGDG.rhel8.noarch.rpm pgdg 0.29 32.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.29-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.27-1PGDG.rhel8.noarch.rpm pgdg 0.27 31.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.27-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.26-1PGDG.rhel8.noarch.rpm pgdg 0.26 30.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.26-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.24-1PGDG.rhel8.noarch.rpm pgdg 0.24 30.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.24-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.23-1.rhel8.noarch.rpm pgdg 0.23 30.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.23-1.rhel8.noarch.rpm
@ el8.aarch64 14 ddlx_14 ddlx_14-0.22-1.rhel8.noarch.rpm pgdg 0.22 29.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ddlx_14-0.22-1.rhel8.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.30-1PIGSTY.el9.x86_64.rpm pigsty 0.30 31.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddlx_14-0.30-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.30-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.29-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.27-1PGDG.rhel9.noarch.rpm pgdg 0.27 30.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.27-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.26-1PGDG.rhel9.noarch.rpm pgdg 0.26 29.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.26-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.24-1PGDG.rhel9.noarch.rpm pgdg 0.24 28.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.24-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.23-1.rhel9.noarch.rpm pgdg 0.23 28.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.23-1.rhel9.noarch.rpm
@ el9.x86_64 14 ddlx_14 ddlx_14-0.22-1.rhel9.noarch.rpm pgdg 0.22 29.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ddlx_14-0.22-1.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.30-1PIGSTY.el9.aarch64.rpm pigsty 0.30 30.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddlx_14-0.30-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.30-1PGDG.rhel9.noarch.rpm pgdg 0.30 31.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.30-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.29-1PGDG.rhel9.noarch.rpm pgdg 0.29 30.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.29-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.27-1PGDG.rhel9.noarch.rpm pgdg 0.27 29.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.27-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.26-1PGDG.rhel9.noarch.rpm pgdg 0.26 29.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.26-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.24-1PGDG.rhel9.noarch.rpm pgdg 0.24 28.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.24-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.23-1.rhel9.noarch.rpm pgdg 0.23 28.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.23-1.rhel9.noarch.rpm
@ el9.aarch64 14 ddlx_14 ddlx_14-0.22-1.rhel9.noarch.rpm pgdg 0.22 28.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ddlx_14-0.22-1.rhel9.noarch.rpm
@ el10.x86_64 14 ddlx_14 ddlx_14-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 32.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/ddlx_14-0.30-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 ddlx_14 ddlx_14-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/ddlx_14-0.29-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 ddlx_14 ddlx_14-0.30-1PGDG.rhel10.noarch.rpm pgdg 0.30 31.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/ddlx_14-0.30-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 ddlx_14 ddlx_14-0.29-1PGDG.rhel10.noarch.rpm pgdg 0.29 31.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/ddlx_14-0.29-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~bookworm_amd64.deb pigsty 0.30 28.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~bookworm_arm64.deb pigsty 0.30 28.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~trixie_amd64.deb pigsty 0.30 28.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~trixie_arm64.deb pigsty 0.30 28.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~jammy_amd64.deb pigsty 0.30 25.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~jammy_arm64.deb pigsty 0.30 25.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~noble_amd64.deb pigsty 0.30 25.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-ddlx postgresql-14-ddlx_0.30-1PIGSTY~noble_arm64.deb pigsty 0.30 25.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddlx/postgresql-14-ddlx_0.30-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_ddlx` 扩展的 DEB 包：

```bash
pig build pkg pg_ddlx         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_ddlx` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_ddlx;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_ddlx -v 18  # PG 18
pig ext install -y pg_ddlx -v 17  # PG 17
pig ext install -y pg_ddlx -v 16  # PG 16
pig ext install -y pg_ddlx -v 15  # PG 15
pig ext install -y pg_ddlx -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ddlx_18       # PG 18
dnf install -y ddlx_17       # PG 17
dnf install -y ddlx_16       # PG 16
dnf install -y ddlx_15       # PG 15
dnf install -y ddlx_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ddlx   # PG 18
apt install -y postgresql-17-ddlx   # PG 17
apt install -y postgresql-16-ddlx   # PG 16
apt install -y postgresql-15-ddlx   # PG 15
apt install -y postgresql-14-ddlx   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION ddlx;
```



## 用法

> [ddlx: DDL 提取函数](https://github.com/lacanoid/pgddl)

ddlx 是一个纯 SQL 扩展，可从 PostgreSQL 系统目录生成 DDL 脚本。它提供三个主要函数，接受 OID 参数，适用于所有 `reg*` 对象标识符类型。

### 核心函数

```sql
-- 为对象生成 CREATE 语句
SELECT ddlx_create('my_table'::regclass);
SELECT ddlx_create('my_type'::regtype);
SELECT ddlx_create('my_function'::regproc);
SELECT ddlx_create(current_role::regrole);

-- 生成 DROP 语句
SELECT ddlx_drop('my_table'::regclass);

-- 生成包含依赖树的完整 DDL 脚本
SELECT ddlx_script('my_table'::regclass);
SELECT ddlx_script('my_enum');
SELECT ddlx_script(current_role::regrole);
```

### 选项

选项以文本数组形式传递（例如 `'{ine,nodcl}'`）：

```sql
SELECT ddlx_create('my_table'::regclass, '{ine}');        -- 添加 IF NOT EXISTS
SELECT ddlx_create('my_type'::regtype, '{noowner}');       -- 省略 ALTER SET OWNER
SELECT ddlx_script('my_table'::regclass, '{drop}');        -- 包含 DROP 语句
```

可用选项：`drop`、`nodrop`、`owner`、`noowner`、`nogrants`、`nodcl`、`noalter`、`ine`（IF NOT EXISTS）、`ie`（IF EXISTS）、`ext`、`lite`、`nowrap`、`nopartitions`、`comments`、`nocomments`、`nostorage`、`noconstraints`、`noindexes`、`nosettings`、`notriggers`、`grantor`、`data`。

### 对于没有 reg* 类型的对象

```sql
SELECT ddlx_create(oid) FROM pg_foreign_data_wrapper WHERE fdwname = 'postgres_fdw';
SELECT ddlx_create(oid) FROM pg_database WHERE datname = current_database();
```

### 其他函数

```sql
-- 通过 OID 识别任意对象
SELECT * FROM ddlx_identify(oid);

-- 描述类的列
SELECT * FROM ddlx_describe('my_table'::regclass);

-- 获取各个定义部分
SELECT * FROM ddlx_definitions(oid);

-- 仅生成数据前创建语句
SELECT ddlx_createonly('my_table'::regclass);

-- 生成数据后修改语句
SELECT ddlx_alter('my_table'::regclass);

-- 通过正则表达式搜索函数/视图内容
SELECT ddlx_create(objid) FROM ddlx_apropos('users');

-- 获取 GRANT 语句
SELECT ddlx_grants('my_table'::regclass);
```
