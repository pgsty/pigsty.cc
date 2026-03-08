---
title: "plproxy"
linkTitle: "plproxy"
description: "作为过程语言实现的数据库分区"
weight: 2520
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/plproxy/plproxy">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">plproxy/plproxy</div>
    <div class="ext-card__desc">https://github.com/plproxy/plproxy</div>
  </a>
  <a class="ext-card ext-card--source" href="plproxy-2.11.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plproxy-2.11.0.tar.gz</div>
    <div class="ext-card__desc">plproxy-2.11.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plproxy`**](/ext/e/plproxy) | `2.11.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2520  | [**`plproxy`**](/ext/e/plproxy) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`citus`](/ext/e/citus) [`dblink`](/ext/e/dblink) [`postgres_fdw`](/ext/e/postgres_fdw) [`pg_partman`](/ext/e/pg_partman) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`citus_columnar`](/ext/e/citus_columnar) [`columnar`](/ext/e/columnar) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.11.0` | {{< pgvers "18,17,16,15,14" >}} | `plproxy` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.11.0` | {{< pgvers "18,17,16,15,14" >}} | `plproxy_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.11.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plproxy` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 2 | AVAIL PIGSTY 2.11.0 1 | AVAIL PIGSTY 2.11.0 3 | AVAIL PIGSTY 2.11.0 3 |
| el8.aarch64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 2 | AVAIL PIGSTY 2.11.0 1 | AVAIL PIGSTY 2.11.0 3 | AVAIL PIGSTY 2.11.0 3 |
| el9.x86_64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 2 | AVAIL PIGSTY 2.11.0 1 | AVAIL PIGSTY 2.11.0 3 | AVAIL PIGSTY 2.11.0 2 |
| el9.aarch64 | AVAIL PGDG 2.11.0 2 | AVAIL PGDG 2.11.0 2 | AVAIL PIGSTY 2.11.0 1 | AVAIL PIGSTY 2.11.0 3 | AVAIL PIGSTY 2.11.0 3 |
| el10.x86_64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| el10.aarch64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| d12.x86_64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| d12.aarch64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| d13.x86_64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| d13.aarch64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| u22.x86_64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| u22.aarch64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| u24.x86_64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
| u24.aarch64 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 | AVAIL PGDG 2.11.0 1 |
@ el8.x86_64 18 plproxy_18 plproxy_18-2.11.0-4PGDG.rhel8.x86_64.rpm pgdg 2.11.0 48.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/plproxy_18-2.11.0-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 plproxy_18 plproxy_18-2.11.0-1PIGSTY.el8.x86_64.rpm pigsty 2.11.0 44.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plproxy_18-2.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 plproxy_18 plproxy_18-2.11.0-4PGDG.rhel8.aarch64.rpm pgdg 2.11.0 45.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/plproxy_18-2.11.0-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 plproxy_18 plproxy_18-2.11.0-1PIGSTY.el8.aarch64.rpm pigsty 2.11.0 42.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plproxy_18-2.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 plproxy_18 plproxy_18-2.11.0-4PGDG.rhel9.x86_64.rpm pgdg 2.11.0 45.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/plproxy_18-2.11.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 plproxy_18 plproxy_18-2.11.0-1PIGSTY.el9.x86_64.rpm pigsty 2.11.0 43.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plproxy_18-2.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plproxy_18 plproxy_18-2.11.0-4PGDG.rhel9.aarch64.rpm pgdg 2.11.0 43.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/plproxy_18-2.11.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 plproxy_18 plproxy_18-2.11.0-1PIGSTY.el9.aarch64.rpm pigsty 2.11.0 41.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plproxy_18-2.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plproxy_18 plproxy_18-2.11.0-4PGDG.rhel10.x86_64.rpm pgdg 2.11.0 46.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/plproxy_18-2.11.0-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 plproxy_18 plproxy_18-2.11.0-4PGDG.rhel10.aarch64.rpm pgdg 2.11.0 44.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/plproxy_18-2.11.0-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg12+1_amd64.deb pgdg 2.11.0 133.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg12+1_arm64.deb pgdg 2.11.0 130.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg13+1_amd64.deb pgdg 2.11.0 133.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg13+1_arm64.deb pgdg 2.11.0 130.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb pgdg 2.11.0 138.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb pgdg 2.11.0 133.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb pgdg 2.11.0 132.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plproxy postgresql-18-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb pgdg 2.11.0 128.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-18-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 plproxy_17 plproxy_17-2.11.0-2PGDG.rhel8.x86_64.rpm pgdg 2.11.0 48.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/plproxy_17-2.11.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plproxy_17 plproxy_17-2.11.0-1PIGSTY.el8.x86_64.rpm pigsty 2.11.0 44.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plproxy_17-2.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 plproxy_17 plproxy_17-2.11.0-2PGDG.rhel8.aarch64.rpm pgdg 2.11.0 45.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/plproxy_17-2.11.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plproxy_17 plproxy_17-2.11.0-1PIGSTY.el8.aarch64.rpm pigsty 2.11.0 42.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plproxy_17-2.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 plproxy_17 plproxy_17-2.11.0-2PGDG.rhel9.x86_64.rpm pgdg 2.11.0 45.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/plproxy_17-2.11.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plproxy_17 plproxy_17-2.11.0-1PIGSTY.el9.x86_64.rpm pigsty 2.11.0 43.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plproxy_17-2.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plproxy_17 plproxy_17-2.11.0-2PGDG.rhel9.aarch64.rpm pgdg 2.11.0 43.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/plproxy_17-2.11.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plproxy_17 plproxy_17-2.11.0-1PIGSTY.el9.aarch64.rpm pigsty 2.11.0 41.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plproxy_17-2.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plproxy_17 plproxy_17-2.11.0-4PGDG.rhel10.x86_64.rpm pgdg 2.11.0 46.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/plproxy_17-2.11.0-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 plproxy_17 plproxy_17-2.11.0-4PGDG.rhel10.aarch64.rpm pgdg 2.11.0 44.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/plproxy_17-2.11.0-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg12+1_amd64.deb pgdg 2.11.0 133.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg12+1_arm64.deb pgdg 2.11.0 130.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg13+1_amd64.deb pgdg 2.11.0 133.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg13+1_arm64.deb pgdg 2.11.0 130.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb pgdg 2.11.0 151.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb pgdg 2.11.0 147.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb pgdg 2.11.0 131.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plproxy postgresql-17-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb pgdg 2.11.0 128.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-17-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 plproxy_16 plproxy_16-2.11.0-1PIGSTY.el8.x86_64.rpm pigsty 2.11.0 44.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plproxy_16-2.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 plproxy_16 plproxy_16-2.11.0-1PIGSTY.el8.aarch64.rpm pigsty 2.11.0 42.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plproxy_16-2.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 plproxy_16 plproxy_16-2.11.0-1PIGSTY.el9.x86_64.rpm pigsty 2.11.0 43.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plproxy_16-2.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plproxy_16 plproxy_16-2.11.0-1PIGSTY.el9.aarch64.rpm pigsty 2.11.0 41.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plproxy_16-2.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plproxy_16 plproxy_16-2.11.0-4PGDG.rhel10.x86_64.rpm pgdg 2.11.0 46.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/plproxy_16-2.11.0-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 plproxy_16 plproxy_16-2.11.0-4PGDG.rhel10.aarch64.rpm pgdg 2.11.0 44.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/plproxy_16-2.11.0-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg12+1_amd64.deb pgdg 2.11.0 133.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg12+1_arm64.deb pgdg 2.11.0 129.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg13+1_amd64.deb pgdg 2.11.0 133.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg13+1_arm64.deb pgdg 2.11.0 130.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb pgdg 2.11.0 151.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb pgdg 2.11.0 147.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb pgdg 2.11.0 131.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plproxy postgresql-16-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb pgdg 2.11.0 128.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-16-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 plproxy_15 plproxy_15-2.11.0-1PIGSTY.el8.x86_64.rpm pigsty 2.11.0 45.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plproxy_15-2.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 plproxy_15 plproxy_15-2.11.0-1PGDG.rhel8.x86_64.rpm pgdg 2.11.0 49.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plproxy_15-2.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plproxy_15 plproxy_15-2.10.0-3.rhel8.x86_64.rpm pgdg 2.10.0 145.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plproxy_15-2.10.0-3.rhel8.x86_64.rpm
@ el8.aarch64 15 plproxy_15 plproxy_15-2.11.0-1PIGSTY.el8.aarch64.rpm pigsty 2.11.0 43.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plproxy_15-2.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 plproxy_15 plproxy_15-2.11.0-1PGDG.rhel8.aarch64.rpm pgdg 2.11.0 46.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plproxy_15-2.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plproxy_15 plproxy_15-2.10.0-3.rhel8.aarch64.rpm pgdg 2.10.0 142.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plproxy_15-2.10.0-3.rhel8.aarch64.rpm
@ el9.x86_64 15 plproxy_15 plproxy_15-2.11.0-1PIGSTY.el9.x86_64.rpm pigsty 2.11.0 47.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plproxy_15-2.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 plproxy_15 plproxy_15-2.11.0-1PGDG.rhel9.x86_64.rpm pgdg 2.11.0 49.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plproxy_15-2.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plproxy_15 plproxy_15-2.10.0-3.rhel9.x86_64.rpm pgdg 2.10.0 146.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plproxy_15-2.10.0-3.rhel9.x86_64.rpm
@ el9.aarch64 15 plproxy_15 plproxy_15-2.11.0-1PIGSTY.el9.aarch64.rpm pigsty 2.11.0 45.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plproxy_15-2.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 plproxy_15 plproxy_15-2.11.0-1PGDG.rhel9.aarch64.rpm pgdg 2.11.0 46.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plproxy_15-2.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plproxy_15 plproxy_15-2.10.0-3.rhel9.aarch64.rpm pgdg 2.10.0 144.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plproxy_15-2.10.0-3.rhel9.aarch64.rpm
@ el10.x86_64 15 plproxy_15 plproxy_15-2.11.0-4PGDG.rhel10.x86_64.rpm pgdg 2.11.0 49.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/plproxy_15-2.11.0-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 plproxy_15 plproxy_15-2.11.0-4PGDG.rhel10.aarch64.rpm pgdg 2.11.0 48.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/plproxy_15-2.11.0-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg12+1_amd64.deb pgdg 2.11.0 134.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg12+1_arm64.deb pgdg 2.11.0 131.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg13+1_amd64.deb pgdg 2.11.0 135.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg13+1_arm64.deb pgdg 2.11.0 131.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb pgdg 2.11.0 154.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb pgdg 2.11.0 150.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb pgdg 2.11.0 134.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plproxy postgresql-15-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb pgdg 2.11.0 131.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-15-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 plproxy_14 plproxy_14-2.11.0-1PIGSTY.el8.x86_64.rpm pigsty 2.11.0 45.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plproxy_14-2.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 plproxy_14 plproxy_14-2.11.0-1PGDG.rhel8.x86_64.rpm pgdg 2.11.0 49.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plproxy_14-2.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plproxy_14 plproxy_14-2.10.0-3.rhel8.x86_64.rpm pgdg 2.10.0 143.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plproxy_14-2.10.0-3.rhel8.x86_64.rpm
@ el8.aarch64 14 plproxy_14 plproxy_14-2.11.0-1PIGSTY.el8.aarch64.rpm pigsty 2.11.0 43.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plproxy_14-2.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 plproxy_14 plproxy_14-2.11.0-1PGDG.rhel8.aarch64.rpm pgdg 2.11.0 46.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plproxy_14-2.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plproxy_14 plproxy_14-2.10.0-3.rhel8.aarch64.rpm pgdg 2.10.0 140.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plproxy_14-2.10.0-3.rhel8.aarch64.rpm
@ el9.x86_64 14 plproxy_14 plproxy_14-2.11.0-1PIGSTY.el9.x86_64.rpm pigsty 2.11.0 47.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plproxy_14-2.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 plproxy_14 plproxy_14-2.11.0-1PGDG.rhel9.x86_64.rpm pgdg 2.11.0 48.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plproxy_14-2.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 plproxy_14 plproxy_14-2.11.0-1PIGSTY.el9.aarch64.rpm pigsty 2.11.0 45.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plproxy_14-2.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 plproxy_14 plproxy_14-2.11.0-1PGDG.rhel9.aarch64.rpm pgdg 2.11.0 46.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plproxy_14-2.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plproxy_14 plproxy_14-2.10.0-3.rhel9.aarch64.rpm pgdg 2.10.0 142.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plproxy_14-2.10.0-3.rhel9.aarch64.rpm
@ el10.x86_64 14 plproxy_14 plproxy_14-2.11.0-4PGDG.rhel10.x86_64.rpm pgdg 2.11.0 49.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/plproxy_14-2.11.0-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 plproxy_14 plproxy_14-2.11.0-4PGDG.rhel10.aarch64.rpm pgdg 2.11.0 48.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/plproxy_14-2.11.0-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg12+1_amd64.deb pgdg 2.11.0 134.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg12+1_arm64.deb pgdg 2.11.0 130.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg13+1_amd64.deb pgdg 2.11.0 134.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg13+1_arm64.deb pgdg 2.11.0 131.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb pgdg 2.11.0 152.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb pgdg 2.11.0 148.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb pgdg 2.11.0 134.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plproxy postgresql-14-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb pgdg 2.11.0 131.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plproxy/postgresql-14-plproxy_2.11.0-13.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `plproxy` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plproxy;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plproxy -v 18  # PG 18
pig ext install -y plproxy -v 17  # PG 17
pig ext install -y plproxy -v 16  # PG 16
pig ext install -y plproxy -v 15  # PG 15
pig ext install -y plproxy -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plproxy_18       # PG 18
dnf install -y plproxy_17       # PG 17
dnf install -y plproxy_16       # PG 16
dnf install -y plproxy_15       # PG 15
dnf install -y plproxy_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plproxy   # PG 18
apt install -y postgresql-17-plproxy   # PG 17
apt install -y postgresql-16-plproxy   # PG 16
apt install -y postgresql-15-plproxy   # PG 15
apt install -y postgresql-14-plproxy   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plproxy;
```
