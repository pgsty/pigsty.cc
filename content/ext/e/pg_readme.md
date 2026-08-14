---
title: "pg_readme"
linkTitle: "pg_readme"
description: "根据 PostgreSQL COMMENT 对象生成 Markdown README"
weight: 4300
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_readme">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_readme</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_readme</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_readme-0.7.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_readme-0.7.1.tar.gz</div>
    <div class="ext-card__desc">pg_readme-0.7.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_readme`**](/ext/e/pg_readme) | `0.7.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4300  | [**`pg_readme`**](/ext/e/pg_readme) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 4301  | [**`pg_readme_test_extension`**](/ext/e/pg_readme_test_extension) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hstore`](/ext/e/hstore) [`ddlx`](/ext/e/ddlx) [`pg_render`](/ext/e/pg_render) [`schedoc`](/ext/e/schedoc) [`pgdd`](/ext/e/pgdd) [`meta`](/ext/e/meta) [`pgpdf`](/ext/e/pgpdf) [`pg_get_functiondef`](/ext/e/pg_get_functiondef) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_catcheck`](/ext/e/pg_catcheck) [`pg_query_rewrite`](/ext/e/pg_query_rewrite) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Catalog release is 0.7.1; PGDG remains the RPM maintainer at 0.7.0, so the PIGSTY 0.7.1 RPM must not be published; PIGSTY maintains the 0.7.1 DEB package.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.7.1` | {{< pgvers "14,15,16,17,18" >}} | `pg_readme` | `hstore` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_readme_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-readme` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el8.aarch64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el9.x86_64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| el9.aarch64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| el10.x86_64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| el10.aarch64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| d12.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
@ el8.x86_64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_readme_18-0.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_readme_18-0.7.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_readme_18-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_readme_18-0.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_readme_18-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_readme_18-0.7.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_readme_18-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_readme_18-0.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_readme_18-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_readme_18 pg_readme_18-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_readme_18-0.7.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-readme postgresql-18-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-18-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_readme_17-0.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_readme_17-0.7.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_readme_17-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_readme_17-0.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_readme_17-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_readme_17-0.7.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_readme_17-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_readme_17-0.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_readme_17-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_readme_17 pg_readme_17-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_readme_17-0.7.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-readme postgresql-17-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-17-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_readme_16-0.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_readme_16-0.7.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_readme_16-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_readme_16-0.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_readme_16-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_readme_16-0.7.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_readme_16-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_readme_16-0.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_readme_16-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_readme_16 pg_readme_16-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_readme_16-0.7.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-readme postgresql-16-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-16-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_readme_15-0.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_readme_15-0.7.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_readme_15-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_readme_15-0.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_readme_15-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_readme_15-0.7.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_readme_15-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_readme_15-0.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_readme_15-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_readme_15 pg_readme_15-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_readme_15-0.7.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-readme postgresql-15-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-15-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_readme_14-0.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel8.noarch.rpm pgdg 0.7.0 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_readme_14-0.7.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_readme_14-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_readme_14-0.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel9.8.noarch.rpm pgdg 0.7.0 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_readme_14-0.7.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel9.noarch.rpm pgdg 0.7.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_readme_14-0.7.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_readme_14-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_readme_14-0.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel10.2.noarch.rpm pgdg 0.7.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_readme_14-0.7.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 14 pg_readme_14 pg_readme_14-0.7.0-1PGDG.rhel10.noarch.rpm pgdg 0.7.0 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_readme_14-0.7.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~trixie_all.deb pigsty 0.7.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~jammy_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~noble_all.deb pigsty 0.7.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-readme postgresql-14-pg-readme_0.7.1-1PIGSTY~resolute_all.deb pigsty 0.7.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-readme/postgresql-14-pg-readme_0.7.1-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_readme` 扩展的 DEB 包：

```bash
pig build pkg pg_readme         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_readme` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_readme;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_readme -v 18  # PG 18
pig ext install -y pg_readme -v 17  # PG 17
pig ext install -y pg_readme -v 16  # PG 16
pig ext install -y pg_readme -v 15  # PG 15
pig ext install -y pg_readme -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_readme_18       # PG 18
dnf install -y pg_readme_17       # PG 17
dnf install -y pg_readme_16       # PG 16
dnf install -y pg_readme_15       # PG 15
dnf install -y pg_readme_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-readme   # PG 18
apt install -y postgresql-17-pg-readme   # PG 17
apt install -y postgresql-16-pg-readme   # PG 16
apt install -y postgresql-15-pg-readme   # PG 15
apt install -y postgresql-14-pg-readme   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_readme CASCADE;  -- 依赖: hstore
```

## 用法

来源：

- [pg_readme 0.7.1 README](https://api.pgxn.org/src/pg_readme/pg_readme-0.7.1/README.md)
- [pg_readme 0.7.1 控制文件](https://api.pgxn.org/src/pg_readme/pg_readme-0.7.1/pg_readme.control)
- [pg_readme 0.7.1 升级 SQL](https://api.pgxn.org/src/pg_readme/pg_readme-0.7.1/sql/pg_readme--0.7.0--0.7.1.sql)
- [Pigsty 软件包矩阵](https://pgext.cloud/ext/pg_readme)

`pg_readme` 根据 `COMMENT` 对象和实时目录元数据，为 PostgreSQL 扩展或模式生成 Markdown 文档。使用它可以让扩展的 README 与其 SQL 定义保持接近，并在源代码管理中审查生成结果。

### 安装并生成 Markdown

```sql
CREATE EXTENSION pg_readme CASCADE;

SELECT pg_extension_readme('my_extension'::name);
SELECT pg_schema_readme('my_schema'::regnamespace);
```

控制文件要求 `hstore`，扩展可重定位；只要调用者能够安装依赖并创建相应对象，就允许非超级用户安装。

### 添加处理指令

将 Markdown 和处理指令放入扩展或模式的注释中：

```sql
COMMENT ON EXTENSION my_extension IS $markdown$
### `my_extension`

What the extension does.

### Reference

<?pg-readme-reference?>

### Colophon

<?pg-readme-colophon?>
$markdown$;
```

`<?pg-readme-reference?>` 会展开为根据目录生成的对象参考。`<?pg-readme-colophon?>` 会添加生成元数据。将生成的章节嵌入其他内容时，可通过可选的指令属性调整标题深度。

### 设置

- `pg_readme.include_view_definitions`：包含视图定义；默认为 `true`。
- `pg_readme.include_routine_definitions_like`：需要包含定义的例程名称模式数组；默认为 `'{test__%}'`。
- `pg_readme.include_this_routine_definition`：是否包含当前定义的例程局部覆盖项。
- `pg_readme.readme_url`：生成内容使用的上游 README 链接。

项目需要可复现的生成设置时，请在包装函数或事务中使用 `SET` 选项。

### 版本 0.7.1 与注意事项

- 版本 0.7.1 修复了 PostgreSQL 18 参考文档生成问题，该问题可能重复列出数组/复合表类型和 `NOT NULL` 标记。
- 上游和当前 Pigsty DEB 软件包为 0.7.1，而当前 Pigsty RPM 软件包仍为 0.7.0。在依赖 PostgreSQL 18 修复前，请检查 `pg_available_extension_versions`。
- 生成结果反映当前数据库目录、已安装扩展版本、注释以及生成时间。应审查差异，不要假定两个环境会生成完全相同的文本。
- 目录自省不能替代人工编写的运维指导。请在维护的正文中保留前置条件、预加载/重启行为、升级说明和不安全操作。
- 旧 README 的包装函数示例中出现了单数设置 `pg_readme.include_routine_definition_like`，但当前文档中的 GUC 是复数形式 `pg_readme.include_routine_definitions_like`。
