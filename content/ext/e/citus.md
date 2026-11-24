---
title: "citus"
linkTitle: "citus"
description: "将 PostgreSQL 横向扩展为分布式数据库"
weight: 2400
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/citusdata/citus">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">citusdata/citus</div>
    <div class="ext-card__desc">https://github.com/citusdata/citus</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/citus-14.3.0.tar.gz citus-13.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">citus-14.3.0.tar.gz citus-13.5.0.tar.gz</div>
    <div class="ext-card__desc">citus-14.3.0.tar.gz citus-13.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`citus`**](/ext/e/citus) | `14.3.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30only" href="/ext/license#agpl30only">AGPL-3.0-only</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2400  | [**`citus`**](/ext/e/citus) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 2401  | [**`citus_columnar`**](/ext/e/citus_columnar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table .wide .expand}

| **相关扩展** | [`plproxy`](/ext/e/plproxy) [`pgspider_ext`](/ext/e/pgspider_ext) [`postgres_fdw`](/ext/e/postgres_fdw) [`pg_partman`](/ext/e/pg_partman) [`timescaledb`](/ext/e/timescaledb) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`pgactive`](/ext/e/pgactive) [`spock`](/ext/e/spock) [`pg_fkpart`](/ext/e/pg_fkpart) [`db_migrator`](/ext/e/db_migrator) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL 14.3-1; preload; conflicts with Hydra.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.3.0` | {{< pgvers "16,17,18" >}} | `citus` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.3.0` | {{< pgvers "18,17,16,15" >}} | `citus_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.3.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-citus` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 6 | AVAIL PIGSTY 14.3.0 12 | AVAIL PIGSTY 14.3.0 19 | AVAIL PIGSTY 13.5.0 22 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 6 | AVAIL PIGSTY 14.3.0 12 | AVAIL PIGSTY 14.3.0 19 | AVAIL PIGSTY 13.5.0 21 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 13.5.0 1 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 13.5.0 1 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 14.3.0 2 | AVAIL PIGSTY 13.5.0 1 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 9 | AVAIL PIGSTY 14.3.0 13 | AVAIL PIGSTY 14.3.0 13 | AVAIL PIGSTY 13.5.0 5 |
| d12.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| d12.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| d13.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| d13.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| u22.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| u22.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| u24.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| u24.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| u26.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
| u26.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 14.3.0 1 | AVAIL PIGSTY 13.5.0 1 |
@ el8.x86_64 18 citus_18 citus_18-14.3.0-9PGSTY.el8.x86_64.rpm pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_18-14.3.0-9PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.3.0-2PGDG.rhel8.10.x86_64.rpm pgdg 14.3.0 892.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.3.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.3.0 891.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.2.0-2PGDG.rhel8.10.x86_64.rpm pgdg 14.2.0 878.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.2.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.1.0 871.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 859.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.3.0-9PGSTY.el8.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_18-14.3.0-9PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.3.0-2PGDG.rhel8.10.aarch64.rpm pgdg 14.3.0 841.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.3.0-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.3.0 840.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.2.0-2PGDG.rhel8.10.aarch64.rpm pgdg 14.2.0 829.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.2.0-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.1.0 822.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 810.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.3.0-9PGSTY.el9.x86_64.rpm pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_18-14.3.0-9PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.3.0-2PGDG.rhel9.9.x86_64.rpm pgdg 14.3.0 851.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/citus_18-14.3.0-2PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.3.0-9PGSTY.el9.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_18-14.3.0-9PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.3.0-2PGDG.rhel9.9.aarch64.rpm pgdg 14.3.0 824.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/citus_18-14.3.0-2PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.3.0-9PGSTY.el10.x86_64.rpm pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_18-14.3.0-9PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.3.0-2PGDG.rhel10.3.x86_64.rpm pgdg 14.3.0 866.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/citus_18-14.3.0-2PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.3.0-9PGSTY.el10.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_18-14.3.0-9PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.3.0-2PGDG.rhel10.3.aarch64.rpm pgdg 14.3.0 836.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.3.0-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.3.0-2PGDG.rhel10.2.aarch64.rpm pgdg 14.3.0 836.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.3.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.3.0 835.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.2.0-2PGDG.rhel10.2.aarch64.rpm pgdg 14.2.0 824.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.2.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.1.0 818.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.0.0 805.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 806.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.0.aarch64.rpm pgdg 14.0.0 806.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~bookworm_amd64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~bookworm_arm64.deb pigsty 14.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~trixie_amd64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~trixie_arm64.deb pigsty 14.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~jammy_amd64.deb pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~jammy_arm64.deb pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~noble_amd64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~noble_arm64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~resolute_amd64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-citus postgresql-18-citus_14.3.0-9PGSTY~resolute_arm64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-18-citus_14.3.0-9PGSTY~resolute_arm64.deb
@ el8.x86_64 17 citus_17 citus_17-14.3.0-9PGSTY.el8.x86_64.rpm pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_17-14.3.0-9PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.3.0-2PGDG.rhel8.10.x86_64.rpm pgdg 14.3.0 889.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.3.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.3.0 889.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.2.0-2PGDG.rhel8.10.x86_64.rpm pgdg 14.2.0 876.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.2.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.1.0 869.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 857.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 850.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 827.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 805.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 805.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 805.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 803.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.3.0-9PGSTY.el8.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_17-14.3.0-9PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.3.0-2PGDG.rhel8.10.aarch64.rpm pgdg 14.3.0 839.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.3.0-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.3.0 838.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.2.0-2PGDG.rhel8.10.aarch64.rpm pgdg 14.2.0 826.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.2.0-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.1.0 819.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 808.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 802.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 781.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 761.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 761.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 761.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 758.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.3.0-9PGSTY.el9.x86_64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_17-14.3.0-9PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.3.0-2PGDG.rhel9.9.x86_64.rpm pgdg 14.3.0 848.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-14.3.0-2PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.3.0-9PGSTY.el9.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_17-14.3.0-9PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.3.0-2PGDG.rhel9.9.aarch64.rpm pgdg 14.3.0 822.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-14.3.0-2PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.3.0-9PGSTY.el10.x86_64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_17-14.3.0-9PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.3.0-2PGDG.rhel10.3.x86_64.rpm pgdg 14.3.0 864.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-14.3.0-2PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.3.0-9PGSTY.el10.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_17-14.3.0-9PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.3.0-2PGDG.rhel10.3.aarch64.rpm pgdg 14.3.0 834.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.3.0-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.3.0-2PGDG.rhel10.2.aarch64.rpm pgdg 14.3.0 834.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.3.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.3.0 833.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.2.0-2PGDG.rhel10.2.aarch64.rpm pgdg 14.2.0 822.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.2.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.1.0 816.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.0.0 804.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 803.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.0.aarch64.rpm pgdg 14.0.0 803.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 798.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 776.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 758.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 759.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~bookworm_amd64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~bookworm_arm64.deb pigsty 14.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~trixie_amd64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~trixie_arm64.deb pigsty 14.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~jammy_amd64.deb pigsty 14.3.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~jammy_arm64.deb pigsty 14.3.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~noble_amd64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~noble_arm64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~resolute_amd64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-citus postgresql-17-citus_14.3.0-9PGSTY~resolute_arm64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-17-citus_14.3.0-9PGSTY~resolute_arm64.deb
@ el8.x86_64 16 citus_16 citus_16-14.3.0-9PGSTY.el8.x86_64.rpm pigsty 14.3.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_16-14.3.0-9PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.3.0-2PGDG.rhel8.10.x86_64.rpm pgdg 14.3.0 883.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.3.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.3.0 882.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.2.0-2PGDG.rhel8.10.x86_64.rpm pgdg 14.2.0 869.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.2.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.1.0 862.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 849.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 843.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 819.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 800.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 800.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 800.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 798.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 797.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 796.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 796.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 796.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 795.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 795.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 794.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.3.0-9PGSTY.el8.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_16-14.3.0-9PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.3.0-2PGDG.rhel8.10.aarch64.rpm pgdg 14.3.0 833.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.3.0-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.3.0 832.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.2.0-2PGDG.rhel8.10.aarch64.rpm pgdg 14.2.0 820.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.2.0-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.1.0 813.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 801.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 796.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 774.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 756.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 756.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 756.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 754.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 753.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 751.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 751.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 751.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 750.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 750.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 750.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.3.0-9PGSTY.el9.x86_64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_16-14.3.0-9PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.3.0-2PGDG.rhel9.9.x86_64.rpm pgdg 14.3.0 842.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-14.3.0-2PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.3.0-9PGSTY.el9.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_16-14.3.0-9PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.3.0-2PGDG.rhel9.9.aarch64.rpm pgdg 14.3.0 816.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-14.3.0-2PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.3.0-9PGSTY.el10.x86_64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_16-14.3.0-9PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.3.0-2PGDG.rhel10.3.x86_64.rpm pgdg 14.3.0 857.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-14.3.0-2PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.3.0-9PGSTY.el10.aarch64.rpm pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_16-14.3.0-9PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.3.0-2PGDG.rhel10.3.aarch64.rpm pgdg 14.3.0 828.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.3.0-2PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.3.0-2PGDG.rhel10.2.aarch64.rpm pgdg 14.3.0 828.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.3.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.3.0 827.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.2.0-2PGDG.rhel10.2.aarch64.rpm pgdg 14.2.0 816.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.2.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.1.0 809.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.0.0 797.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 797.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.0.aarch64.rpm pgdg 14.0.0 797.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 792.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 770.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 752.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 752.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~bookworm_amd64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~bookworm_arm64.deb pigsty 14.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~trixie_amd64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~trixie_arm64.deb pigsty 14.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~jammy_amd64.deb pigsty 14.3.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~jammy_arm64.deb pigsty 14.3.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~noble_amd64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~noble_arm64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~resolute_amd64.deb pigsty 14.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-citus postgresql-16-citus_14.3.0-9PGSTY~resolute_arm64.deb pigsty 14.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-16-citus_14.3.0-9PGSTY~resolute_arm64.deb
@ el8.x86_64 15 citus_15 citus_15-13.5.0-9PGSTY.el8.x86_64.rpm pigsty 13.5.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_15-13.5.0-9PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 867.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 844.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 824.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 824.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 823.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 821.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 821.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 819.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 819.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 819.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 818.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 818.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 818.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.0.0-1PGDG.rhel8.x86_64.rpm pgdg 12.0.0 820.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.3.0-2.rhel8.x86_64.rpm pgdg 11.3.0 801.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.3.0-2.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.2.1-1.rhel8.x86_64.rpm pgdg 11.2.1 779.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.2.0-1.rhel8.x86_64.rpm pgdg 11.2.0 778.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.5-1.rhel8.x86_64.rpm pgdg 11.1.5 766.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.4-1.rhel8.x86_64.rpm pgdg 11.1.4 766.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.3-1.rhel8.x86_64.rpm pgdg 11.1.3 766.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.2-1.rhel8.x86_64.rpm pgdg 11.1.2 765.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.5.0-9PGSTY.el8.aarch64.rpm pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_15-13.5.0-9PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 815.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 793.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 774.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 774.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 774.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 772.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 771.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 770.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 769.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 769.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 768.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 768.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 768.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.0.0-1PGDG.rhel8.aarch64.rpm pgdg 12.0.0 770.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.3.0-2.rhel8.aarch64.rpm pgdg 11.3.0 752.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.3.0-2.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.2.1-1.rhel8.aarch64.rpm pgdg 11.2.1 732.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.2.0-1.rhel8.aarch64.rpm pgdg 11.2.0 730.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.5-1.rhel8.aarch64.rpm pgdg 11.1.5 719.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.4-1.rhel8.aarch64.rpm pgdg 11.1.4 719.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.3-1.rhel8.aarch64.rpm pgdg 11.1.3 718.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.5.0-9PGSTY.el9.x86_64.rpm pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_15-13.5.0-9PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.5.0-9PGSTY.el9.aarch64.rpm pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_15-13.5.0-9PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.5.0-9PGSTY.el10.x86_64.rpm pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_15-13.5.0-9PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.5.0-9PGSTY.el10.aarch64.rpm pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_15-13.5.0-9PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 826.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 805.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 787.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 787.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~bookworm_amd64.deb pigsty 13.5.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~bookworm_arm64.deb pigsty 13.5.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~trixie_amd64.deb pigsty 13.5.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~trixie_arm64.deb pigsty 13.5.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~jammy_amd64.deb pigsty 13.5.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~jammy_arm64.deb pigsty 13.5.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~noble_amd64.deb pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~noble_arm64.deb pigsty 13.5.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~resolute_amd64.deb pigsty 13.5.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-citus postgresql-15-citus_13.5.0-9PGSTY~resolute_arm64.deb pigsty 13.5.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-15-citus_13.5.0-9PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `citus` 扩展的 RPM / DEB 包：

```bash
pig build pkg citus         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `citus` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install citus;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y citus -v 18  # PG 18
pig ext install -y citus -v 17  # PG 17
pig ext install -y citus -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y citus_18       # PG 18
dnf install -y citus_17       # PG 17
dnf install -y citus_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-citus   # PG 18
apt install -y postgresql-17-citus   # PG 17
apt install -y postgresql-16-citus   # PG 16
```


**预加载配置**：

```bash
shared_preload_libraries = 'citus';
```


**创建扩展**：

```sql
CREATE EXTENSION citus;
```

## 用法

来源：

- [Citus v14.3.0 发行说明](https://github.com/citusdata/citus/releases/tag/v14.3.0)
- [Citus v14.3.0 CHANGELOG](https://github.com/citusdata/citus/blob/v14.3.0/CHANGELOG.md)
- [Citus v14.3.0 控制文件](https://github.com/citusdata/citus/blob/v14.3.0/src/backend/distributed/citus.control)
- [Citus v14.3.0 README](https://github.com/citusdata/citus/blob/v14.3.0/README.md)
- [什么是 Citus？](https://docs.citusdata.com/en/stable/get_started/what_is_citus.html)
- [Citus 实用函数](https://docs.citusdata.com/en/stable/develop/api_udf.html)
- [Citus 升级流程](https://docs.citusdata.com/en/stable/admin_guide/upgrading_citus.html)

Citus 通过把表分片到工作节点，将 PostgreSQL 转换为分布式数据库，同时仍以 PostgreSQL SQL、索引、扩展、事务和运维工具作为面向用户的接口。它常用于多租户 SaaS 数据库、实时分析、时序/事件工作负载和分布式微服务模式。

扩展名称为 `citus`。14.3.0 发行版使用 SQL/control 版本 `14.3-1`，支持 PostgreSQL 16-18。每个节点都必须先预加载库，再由超级用户执行 `CREATE EXTENSION`；扩展不可重定位。

### 启用 Citus

```ini
shared_preload_libraries = 'citus'
```

保留其他必需的预加载库。在协调节点和工作节点上重启 PostgreSQL，然后在每个参与的数据库中创建扩展：

```sql
CREATE EXTENSION IF NOT EXISTS citus;
SELECT citus_version();
```

在多节点集群中，从协调节点注册协调节点自身与各工作节点：

```sql
SELECT citus_set_coordinator_host('coord-1', 5432);
SELECT * FROM citus_add_node('worker-1', 5432);
SELECT * FROM citus_add_node('worker-2', 5432);

SELECT * FROM citus_get_active_worker_nodes();
```

### 分布式表

按分片键分布表。分片键值相同的行会被共置在同一分片上，使限定租户的连接和点查询可以在本地完成。

```sql
CREATE TABLE events (
  tenant_id  bigint,
  event_id   bigserial,
  event_at   timestamptz DEFAULT now(),
  kind       text,
  payload    jsonb,
  PRIMARY KEY (tenant_id, event_id)
);
```

分布该表，并显式调整分片数与共置设置：

```sql
SELECT create_distributed_table(
  'events',
  'tenant_id',
  shard_count  := 64,
  colocate_with := 'none'
);
```

显式选择分片数时，应使用 `colocate_with := 'none'` 启动新的共置组。要与现有分布式表共置，请指定该表的名称，并让它的分片数决定布局。

过滤分布列的查询可以路由到单个分片：

```sql
SELECT *
FROM events
WHERE tenant_id = 42
ORDER BY event_at DESC
LIMIT 50;
```

跨分片查询会被规划为分布式任务，并在工作节点上并行运行：

```sql
SELECT kind, count(*)
FROM events
WHERE event_at >= now() - interval '1 hour'
GROUP BY kind
ORDER BY count DESC;
```

### 参考表

参考表会完整复制到所有工作节点。它们适用于需要与许多分布式表连接的小型查找表。

```sql
CREATE TABLE countries (
  code text PRIMARY KEY,
  name text NOT NULL
);

SELECT create_reference_table('countries');
```

### 基于模式的分片

当每个租户或服务拥有独立模式时，基于模式的分片很有用。Citus 支持从任意节点执行模式分片 DDL，包括 `CREATE SCHEMA`、`DROP SCHEMA`、`ALTER SCHEMA RENAME`、`ALTER SCHEMA OWNER`，以及分布式模式上的表级 DDL。

```sql
CREATE SCHEMA tenant_42;
SELECT citus_schema_distribute('tenant_42');

CREATE TABLE tenant_42.orders (
  id bigserial PRIMARY KEY,
  amount numeric,
  created_at timestamptz DEFAULT now()
);
```

共享表应使用基于行的分布，每租户模式布局应使用基于模式的分片；在未检查共置与 SQL 支持影响之前，不要随意混用这两种模型。

### 节点与分片操作

```sql
-- Add or disable nodes.
SELECT * FROM citus_add_node('worker-3', 5432);
SELECT * FROM citus_disable_node('worker-2', 5432);
SELECT * FROM citus_activate_node('worker-2', 5432);

-- Drain and remove a node.
SELECT * FROM citus_drain_node('worker-1', 5432);
SELECT * FROM citus_remove_node('worker-1', 5432);

-- Rebalance shards.
SELECT citus_rebalance_start();
SELECT * FROM citus_rebalance_status();
SELECT rebalance_table_shards('events');

-- Inspect tables and shards.
SELECT * FROM citus_tables;
SELECT * FROM citus_shards;
```

### 备份协调

Citus v14.1.0 新增了 UDF，可在制作协调一致的磁盘快照时阻止分布式 2PC 提交决策和模式/拓扑变更。只能在受控备份流程中使用这些函数，并且在完成快照步骤后必须解除集群阻塞。

```sql
SELECT citus_cluster_changes_block();
SELECT * FROM citus_cluster_changes_block_status();

-- Take coordinated filesystem or volume snapshots here.

SELECT citus_cluster_changes_unblock();
```

应将这些函数与常规 PostgreSQL 备份规范配合使用：一致检查点、WAL 归档、跨节点快照顺序，以及经过测试的恢复流程。

### 管理控制

Citus 14.2 新增了仅限超级用户使用的 `citus_internal.distribute_object()` 修复辅助函数，用于处理元数据未正确传播的受支持数据库对象。应将它视为针对性的恢复操作，而不是常规分布 API。

该版本还新增了 `citus.allow_unsafe_insert_select_pushdown`，用于显式选择在共置表上启用批量 `INSERT ... SELECT` 下推，并改进了单分片存储过程执行。除非已经依据发行说明中的限制检查工作负载，否则应保持关闭不安全下推设置。

### 注意事项

- Citus 14 支持 PostgreSQL 16-18，已停止支持 PostgreSQL 15。
- 必须在创建扩展之前设置 `shared_preload_libraries = 'citus'`。在全新服务器上，仅执行 `CREATE EXTENSION citus` 并不充分。
- 应仔细选择分布列。分布式表上的主键和唯一约束通常需要包含分布列。
- 跨分片连接、重分区连接、分布式 DDL 和多分片写入功能强大，但其规划与锁行为不同于单节点 PostgreSQL。
- 同一发行项目还提供 `citus_columnar`；其存储与维护要求独立于行存表的分布操作。
- 集群变更阻塞函数是用于备份的运维工具。备份脚本失败后，不要让集群一直处于阻塞状态。

### 14.3 发行版与升级

14.3.0 可为跨分片 ORDER BY 查询合并工作节点的有序结果，并在适用时分小批读取结果。新增的 `citus.enable_or_clause_arm_pruning` 可按分片裁剪无关的 OR 子句分支。该版本还将内部元数据清理限制为超级用户操作，为内部 SPI 查询使用空搜索路径，并在对象所有者的受限执行上下文中重放对象定义。

升级须协调所有节点。安装匹配的二进制文件并重启 PostgreSQL 后，在每个包含 Citus 的数据库中执行 SQL 升级：

```sql
ALTER EXTENSION citus UPDATE TO '14.3-1';
SELECT extversion FROM pg_extension WHERE extname = 'citus';
SELECT citus_version();
```

随后在协调节点完成集群升级：

```sql
CALL citus_finish_citus_upgrade();
```

ALTER EXTENSION 使用 SQL/control 版本号，而不是软件包版本号。如果 Citus 和 PostgreSQL 都需要升级，应先完成 Citus 升级，再按独立的 PostgreSQL 主版本升级流程操作。
