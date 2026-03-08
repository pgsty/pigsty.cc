---
title: "pgfaceting"
linkTitle: "pgfaceting"
description: "使用倒排索引的高速切面查询"
weight: 3580
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/pgfaceting">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/pgfaceting</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/pgfaceting</div>
  </a>
  <a class="ext-card ext-card--source" href="pgfaceting-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgfaceting-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pgfaceting-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgfaceting`**](/ext/e/pgfaceting) | `0.2.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3580  | [**`pgfaceting`**](/ext/e/pgfaceting) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `faceting` |
{.ext-table}

| **相关扩展** | [`roaringbitmap`](/ext/e/roaringbitmap) [`pg_trgm`](/ext/e/pg_trgm) [`rum`](/ext/e/rum) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pgfaceting` | `roaringbitmap` |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pgfaceting_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgfaceting` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 | AVAIL PIGSTY 0.2.0 2 |
| el10.x86_64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| el10.aarch64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| d12.x86_64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| d12.aarch64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| d13.x86_64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| d13.aarch64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| u22.x86_64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| u22.aarch64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| u24.x86_64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
| u24.aarch64 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 | AVAIL PGDG 0.2.0 1 |
@ el8.x86_64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgfaceting_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgfaceting_18-0.2.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgfaceting_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgfaceting_18-0.2.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgfaceting_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgfaceting_18-0.2.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgfaceting_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgfaceting_18-0.2.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgfaceting_18-0.2.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pgfaceting_18 pgfaceting_18-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgfaceting_18-0.2.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-pgfaceting postgresql-18-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-18-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ el8.x86_64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgfaceting_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgfaceting_17-0.2.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgfaceting_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgfaceting_17-0.2.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgfaceting_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgfaceting_17-0.2.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgfaceting_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgfaceting_17-0.2.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgfaceting_17-0.2.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgfaceting_17 pgfaceting_17-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgfaceting_17-0.2.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-pgfaceting postgresql-17-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-17-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ el8.x86_64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgfaceting_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgfaceting_16-0.2.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgfaceting_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgfaceting_16-0.2.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgfaceting_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgfaceting_16-0.2.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgfaceting_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgfaceting_16-0.2.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgfaceting_16-0.2.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgfaceting_16 pgfaceting_16-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgfaceting_16-0.2.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-pgfaceting postgresql-16-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-16-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ el8.x86_64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgfaceting_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgfaceting_15-0.2.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgfaceting_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgfaceting_15-0.2.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgfaceting_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgfaceting_15-0.2.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgfaceting_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgfaceting_15-0.2.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgfaceting_15-0.2.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgfaceting_15 pgfaceting_15-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgfaceting_15-0.2.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u24.x86_64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-pgfaceting postgresql-15-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-15-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ el8.x86_64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgfaceting_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgfaceting_14-0.2.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgfaceting_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PGDG.rhel8.noarch.rpm pgdg 0.2.0 15.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgfaceting_14-0.2.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgfaceting_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgfaceting_14-0.2.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgfaceting_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PGDG.rhel9.noarch.rpm pgdg 0.2.0 15.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgfaceting_14-0.2.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgfaceting_14-0.2.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgfaceting_14 pgfaceting_14-0.2.0-1PGDG.rhel10.noarch.rpm pgdg 0.2.0 15.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgfaceting_14-0.2.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg12+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg12+1_all.deb
@ d13.x86_64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg13+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg13+1_all.deb
@ u22.x86_64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u22.aarch64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg22.04+1_all.deb
@ u24.x86_64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-pgfaceting postgresql-14-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb pgdg 0.2.0 9.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfaceting/postgresql-14-pgfaceting_0.2.0-5.pgdg24.04+1_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgfaceting` 扩展的 RPM 包：

```bash
pig build pkg pgfaceting         # 构建 RPM 包
```


## 安装

您可以直接安装 `pgfaceting` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgfaceting;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgfaceting -v 18  # PG 18
pig ext install -y pgfaceting -v 17  # PG 17
pig ext install -y pgfaceting -v 16  # PG 16
pig ext install -y pgfaceting -v 15  # PG 15
pig ext install -y pgfaceting -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgfaceting_18       # PG 18
dnf install -y pgfaceting_17       # PG 17
dnf install -y pgfaceting_16       # PG 16
dnf install -y pgfaceting_15       # PG 15
dnf install -y pgfaceting_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgfaceting   # PG 18
apt install -y postgresql-17-pgfaceting   # PG 17
apt install -y postgresql-16-pgfaceting   # PG 16
apt install -y postgresql-15-pgfaceting   # PG 15
apt install -y postgresql-14-pgfaceting   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgfaceting CASCADE;  -- 依赖: roaringbitmap
```
