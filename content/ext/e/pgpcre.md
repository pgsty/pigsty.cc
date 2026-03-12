---
title: "pgpcre"
linkTitle: "pgpcre"
description: "PCRE/Perl风格的正则表达式支持"
weight: 4230
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petere/pgpcre">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petere/pgpcre</div>
    <div class="ext-card__desc">https://github.com/petere/pgpcre</div>
  </a>
  <a class="ext-card ext-card--source" href="pgpcre-0.20190509.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgpcre-0.20190509.tar.gz</div>
    <div class="ext-card__desc">pgpcre-0.20190509.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgpcre`**](/ext/e/pgpcre) | `0.20190509` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4230  | [**`pgpcre`**](/ext/e/pgpcre) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`icu_ext`](/ext/e/icu_ext) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`pg_trgm`](/ext/e/pg_trgm) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.20190509` | {{< pgvers "18,17,16,15,14" >}} | `pgpcre` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20190509` | {{< pgvers "18,17,16,15,14" >}} | `pgpcre_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.20190509` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgpcre` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 |
| el8.aarch64 | AVAIL PGDG 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 |
| el9.x86_64 | AVAIL PGDG 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 |
| el9.aarch64 | AVAIL PGDG 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 | AVAIL PIGSTY 0.20190509 2 |
| el10.x86_64 | AVAIL PGDG 0.20190509 2 | AVAIL PGDG 0.20190509 3 | AVAIL PGDG 0.20190509 3 | AVAIL PGDG 0.20190509 3 | AVAIL PGDG 0.20190509 3 |
| el10.aarch64 | AVAIL PGDG 0.20190509 2 | AVAIL PGDG 0.20190509 3 | AVAIL PGDG 0.20190509 3 | AVAIL PGDG 0.20190509 3 | AVAIL PGDG 0.20190509 3 |
| d12.x86_64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| d12.aarch64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| d13.x86_64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| d13.aarch64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| u22.x86_64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| u22.aarch64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| u24.x86_64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
| u24.aarch64 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 | AVAIL PGDG 0.20190509 1 |
@ el8.x86_64 18 pgpcre_18 pgpcre_18-0.20190509-3PGDG.rhel8.x86_64.rpm pgdg 0.20190509 17.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgpcre_18-0.20190509-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pgpcre_18 pgpcre_18-0.20190509-1PIGSTY.el8.x86_64.rpm pigsty 0.20190509 16.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgpcre_18-0.20190509-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgpcre_18 pgpcre_18-0.20190509-3PGDG.rhel8.aarch64.rpm pgdg 0.20190509 17.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgpcre_18-0.20190509-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pgpcre_18 pgpcre_18-0.20190509-1PIGSTY.el8.aarch64.rpm pigsty 0.20190509 16.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgpcre_18-0.20190509-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgpcre_18 pgpcre_18-0.20190509-3PGDG.rhel9.x86_64.rpm pgdg 0.20190509 17.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgpcre_18-0.20190509-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pgpcre_18 pgpcre_18-0.20190509-1PIGSTY.el9.x86_64.rpm pigsty 0.20190509 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgpcre_18-0.20190509-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgpcre_18 pgpcre_18-0.20190509-3PGDG.rhel9.aarch64.rpm pgdg 0.20190509 17.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgpcre_18-0.20190509-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pgpcre_18 pgpcre_18-0.20190509-1PIGSTY.el9.aarch64.rpm pigsty 0.20190509 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgpcre_18-0.20190509-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgpcre_18 pgpcre_18-0.20190509-4PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgpcre_18-0.20190509-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pgpcre_18 pgpcre_18-0.20190509-3PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgpcre_18-0.20190509-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgpcre_18 pgpcre_18-0.20190509-4PGDG.rhel10.aarch64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgpcre_18-0.20190509-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pgpcre_18 pgpcre_18-0.20190509-3PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgpcre_18-0.20190509-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg12+1_amd64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg12+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg13+1_amd64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg13+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb pgdg 0.20190509 18.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb pgdg 0.20190509 18.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgpcre postgresql-18-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-18-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-1PIGSTY.el8.x86_64.rpm pigsty 0.20190509 16.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgpcre_17-0.20190509-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-1PGDG.rhel8.x86_64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgpcre_17-0.20190509-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-1PIGSTY.el8.aarch64.rpm pigsty 0.20190509 16.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgpcre_17-0.20190509-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-1PGDG.rhel8.aarch64.rpm pgdg 0.20190509 17.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgpcre_17-0.20190509-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-1PIGSTY.el9.x86_64.rpm pigsty 0.20190509 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgpcre_17-0.20190509-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-1PGDG.rhel9.x86_64.rpm pgdg 0.20190509 17.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgpcre_17-0.20190509-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-1PIGSTY.el9.aarch64.rpm pigsty 0.20190509 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgpcre_17-0.20190509-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-1PGDG.rhel9.aarch64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgpcre_17-0.20190509-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-4PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgpcre_17-0.20190509-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-3PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgpcre_17-0.20190509-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgpcre_17 pgpcre_17-0.20190509-2PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgpcre_17-0.20190509-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-4PGDG.rhel10.aarch64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgpcre_17-0.20190509-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-3PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgpcre_17-0.20190509-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgpcre_17 pgpcre_17-0.20190509-2PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgpcre_17-0.20190509-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg12+1_amd64.deb pgdg 0.20190509 18.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg12+1_arm64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg13+1_amd64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg13+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb pgdg 0.20190509 18.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb pgdg 0.20190509 18.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgpcre postgresql-17-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-17-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-1PIGSTY.el8.x86_64.rpm pigsty 0.20190509 16.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgpcre_16-0.20190509-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-1PGDG.rhel8.x86_64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgpcre_16-0.20190509-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-1PIGSTY.el8.aarch64.rpm pigsty 0.20190509 16.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgpcre_16-0.20190509-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-1PGDG.rhel8.aarch64.rpm pgdg 0.20190509 17.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgpcre_16-0.20190509-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-1PIGSTY.el9.x86_64.rpm pigsty 0.20190509 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgpcre_16-0.20190509-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-1PGDG.rhel9.x86_64.rpm pgdg 0.20190509 17.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgpcre_16-0.20190509-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-1PIGSTY.el9.aarch64.rpm pigsty 0.20190509 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgpcre_16-0.20190509-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-1PGDG.rhel9.aarch64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgpcre_16-0.20190509-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-4PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgpcre_16-0.20190509-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-3PGDG.rhel10.x86_64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgpcre_16-0.20190509-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgpcre_16 pgpcre_16-0.20190509-2PGDG.rhel10.x86_64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgpcre_16-0.20190509-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-4PGDG.rhel10.aarch64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgpcre_16-0.20190509-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-3PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgpcre_16-0.20190509-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgpcre_16 pgpcre_16-0.20190509-2PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgpcre_16-0.20190509-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg12+1_amd64.deb pgdg 0.20190509 18.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg12+1_arm64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg13+1_amd64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg13+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb pgdg 0.20190509 18.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb pgdg 0.20190509 18.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgpcre postgresql-16-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-16-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-1PIGSTY.el8.x86_64.rpm pigsty 0.20190509 16.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgpcre_15-0.20190509-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-1PGDG.rhel8.x86_64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgpcre_15-0.20190509-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-1PIGSTY.el8.aarch64.rpm pigsty 0.20190509 16.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgpcre_15-0.20190509-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-1PGDG.rhel8.aarch64.rpm pgdg 0.20190509 17.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgpcre_15-0.20190509-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-1PIGSTY.el9.x86_64.rpm pigsty 0.20190509 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgpcre_15-0.20190509-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-1PGDG.rhel9.x86_64.rpm pgdg 0.20190509 17.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgpcre_15-0.20190509-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-1PIGSTY.el9.aarch64.rpm pigsty 0.20190509 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgpcre_15-0.20190509-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-1PGDG.rhel9.aarch64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgpcre_15-0.20190509-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-4PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgpcre_15-0.20190509-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-3PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgpcre_15-0.20190509-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgpcre_15 pgpcre_15-0.20190509-2PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgpcre_15-0.20190509-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-4PGDG.rhel10.aarch64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgpcre_15-0.20190509-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-3PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgpcre_15-0.20190509-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgpcre_15 pgpcre_15-0.20190509-2PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgpcre_15-0.20190509-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg12+1_amd64.deb pgdg 0.20190509 18.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg12+1_arm64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg13+1_amd64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg13+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb pgdg 0.20190509 18.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb pgdg 0.20190509 18.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgpcre postgresql-15-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb pgdg 0.20190509 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-15-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-1PIGSTY.el8.x86_64.rpm pigsty 0.20190509 16.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgpcre_14-0.20190509-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-1PGDG.rhel8.x86_64.rpm pgdg 0.20190509 17.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgpcre_14-0.20190509-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-1PIGSTY.el8.aarch64.rpm pigsty 0.20190509 16.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgpcre_14-0.20190509-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-1PGDG.rhel8.aarch64.rpm pgdg 0.20190509 17.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgpcre_14-0.20190509-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-1PIGSTY.el9.x86_64.rpm pigsty 0.20190509 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgpcre_14-0.20190509-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-1PGDG.rhel9.x86_64.rpm pgdg 0.20190509 17.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgpcre_14-0.20190509-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-1PIGSTY.el9.aarch64.rpm pigsty 0.20190509 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgpcre_14-0.20190509-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-1PGDG.rhel9.aarch64.rpm pgdg 0.20190509 17.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgpcre_14-0.20190509-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-4PGDG.rhel10.x86_64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgpcre_14-0.20190509-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-3PGDG.rhel10.x86_64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgpcre_14-0.20190509-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgpcre_14 pgpcre_14-0.20190509-2PGDG.rhel10.x86_64.rpm pgdg 0.20190509 17.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgpcre_14-0.20190509-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-4PGDG.rhel10.aarch64.rpm pgdg 0.20190509 18.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgpcre_14-0.20190509-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-3PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgpcre_14-0.20190509-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgpcre_14 pgpcre_14-0.20190509-2PGDG.rhel10.aarch64.rpm pgdg 0.20190509 17.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgpcre_14-0.20190509-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg12+1_amd64.deb pgdg 0.20190509 18.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg12+1_arm64.deb pgdg 0.20190509 18.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg13+1_amd64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg13+1_arm64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb pgdg 0.20190509 18.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb pgdg 0.20190509 18.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgpcre postgresql-14-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb pgdg 0.20190509 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpcre/postgresql-14-pgpcre_0.20190509-9.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgpcre` 扩展的 RPM 包：

```bash
pig build pkg pgpcre         # 构建 RPM 包
```


## 安装

您可以直接安装 `pgpcre` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgpcre;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgpcre -v 18  # PG 18
pig ext install -y pgpcre -v 17  # PG 17
pig ext install -y pgpcre -v 16  # PG 16
pig ext install -y pgpcre -v 15  # PG 15
pig ext install -y pgpcre -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgpcre_18       # PG 18
dnf install -y pgpcre_17       # PG 17
dnf install -y pgpcre_16       # PG 16
dnf install -y pgpcre_15       # PG 15
dnf install -y pgpcre_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgpcre   # PG 18
apt install -y postgresql-17-pgpcre   # PG 17
apt install -y postgresql-16-pgpcre   # PG 16
apt install -y postgresql-15-pgpcre   # PG 15
apt install -y postgresql-14-pgpcre   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgpcre;
```



## 用法

> [pgpcre: PostgreSQL 的 Perl 兼容正则表达式（PCRE）支持](https://github.com/petere/pgpcre)

提供 `pcre` 数据类型以及用于 PCRE 模式匹配的运算符和函数。

### 基本匹配

```sql
SELECT 'foo' ~ pcre 'fo+';        -- true
SELECT 'bar' !~ pcre 'fo+';       -- true
SELECT 'foo' =~ pcre 'fo+';       -- true（Perl 风格运算符）
```

反转操作数顺序：

```sql
SELECT pcre 'fo+' ~ 'foo';        -- true
SELECT pcre 'fo+' ~ ANY(ARRAY['foo', 'bar']);
```

### 大小写不敏感匹配

```sql
SELECT 'FOO' ~ pcre '(?i)fo+';    -- true
```

### 提取匹配的字符串

```sql
SELECT pcre_match('fo+', 'foobar');    -- 'foo'
SELECT pcre_match('fo+', 'barbar');    -- NULL
```

### 提取捕获的子串

```sql
SELECT pcre_captured_substrings('(fo+)(b..)', 'foobar');
-- ARRAY['foo','bar']

SELECT pcre_captured_substrings('(a|(z))(bc)', 'abc');
-- ARRAY['a',NULL,'bc']
```

### 存储正则表达式

`pcre` 类型可以存储在表的列中。二进制形式包含已编译的正则表达式，与 PCRE 库版本关联。PCRE 库升级后，需要重新编译存储的值：

```sql
UPDATE my_table SET pcre_col = pcre_col::text::pcre;
```
