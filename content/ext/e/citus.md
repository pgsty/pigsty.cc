---
title: "citus"
linkTitle: "citus"
description: "Citus 分布式数据库"
weight: 2400
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/citusdata/citus">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">citusdata/citus</div>
    <div class="ext-card__desc">https://github.com/citusdata/citus</div>
  </a>
  <a class="ext-card ext-card--source" href="citus-14.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">citus-14.0.0.tar.gz</div>
    <div class="ext-card__desc">citus-14.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`citus`**](/ext/e/citus) | `14.0.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2400  | [**`citus`**](/ext/e/citus) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 2401  | [**`citus_columnar`**](/ext/e/citus_columnar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_partman`](/ext/e/pg_partman) [`plproxy`](/ext/e/plproxy) [`columnar`](/ext/e/columnar) [`pg_fkpart`](/ext/e/pg_fkpart) [`timescaledb`](/ext/e/timescaledb) [`pg_duckdb`](/ext/e/pg_duckdb) [`tablefunc`](/ext/e/tablefunc) [`hll`](/ext/e/hll) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb_distributed`](/ext/e/documentdb_distributed) |
{.ext-table .ext-table--rel}


> conflict with hydra


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.0.0` | {{< pgvers "18,17,16" >}} | `citus` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.0.0` | {{< pgvers "18,17,16" >}} | `citus_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.0.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-citus` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 22 | AVAIL PIGSTY 13.0.0 29 |
| el8.aarch64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 21 | AVAIL PIGSTY 13.0.0 16 |
| el9.x86_64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 22 | AVAIL PIGSTY 13.0.0 26 |
| el9.aarch64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 22 | AVAIL PIGSTY 13.0.0 16 |
| el10.x86_64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 13.2.0 5 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 13.2.0 5 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
@ el8.x86_64 18 citus_18 citus_18-14.0.0-4PIGSTY.el8.x86_64.rpm pigsty 14.0.0 969.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/citus_18-14.0.0-4PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 859.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.0.0-4PIGSTY.el8.aarch64.rpm pigsty 14.0.0 930.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/citus_18-14.0.0-4PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 810.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.0.0-4PIGSTY.el9.x86_64.rpm pigsty 14.0.0 850.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/citus_18-14.0.0-4PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.7.x86_64.rpm pgdg 14.0.0 823.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/citus_18-14.0.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.0.0-4PIGSTY.el9.aarch64.rpm pigsty 14.0.0 823.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/citus_18-14.0.0-4PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.7.aarch64.rpm pgdg 14.0.0 797.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/citus_18-14.0.0-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.0.0-4PIGSTY.el10.x86_64.rpm pigsty 14.0.0 861.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/citus_18-14.0.0-4PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.1.x86_64.rpm pgdg 14.0.0 835.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/citus_18-14.0.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-4PIGSTY.el10.aarch64.rpm pigsty 14.0.0 831.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/citus_18-14.0.0-4PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 806.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~bookworm_amd64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~bookworm_arm64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~trixie_amd64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~trixie_arm64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~jammy_amd64.deb pigsty 14.0.0 2.9MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~jammy_arm64.deb pigsty 14.0.0 2.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~noble_amd64.deb pigsty 14.0.0 2.8MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-citus postgresql-18-citus_14.0.0-4PIGSTY~noble_arm64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-18-citus_14.0.0-4PIGSTY~noble_arm64.deb
@ el8.x86_64 17 citus_17 citus_17-14.0.0-4PIGSTY.el8.x86_64.rpm pigsty 14.0.0 967.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/citus_17-14.0.0-4PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 857.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 850.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 827.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 805.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 805.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 805.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 803.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.0.0-4PIGSTY.el8.aarch64.rpm pigsty 14.0.0 928.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/citus_17-14.0.0-4PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 808.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 802.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 781.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 761.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 761.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 761.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 758.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.0.0-4PIGSTY.el9.x86_64.rpm pigsty 14.0.0 847.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/citus_17-14.0.0-4PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.7.x86_64.rpm pgdg 14.0.0 821.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-14.0.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel9.x86_64.rpm pgdg 13.2.0 815.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel9.x86_64.rpm pgdg 13.1.0 793.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel9.x86_64.rpm pgdg 13.0.4 774.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel9.x86_64.rpm pgdg 13.0.3 774.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.2-1PGDG.rhel9.x86_64.rpm pgdg 13.0.2 774.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 772.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.0.0-4PIGSTY.el9.aarch64.rpm pigsty 14.0.0 821.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/citus_17-14.0.0-4PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.7.aarch64.rpm pgdg 14.0.0 795.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-14.0.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel9.aarch64.rpm pgdg 13.2.0 789.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel9.aarch64.rpm pgdg 13.1.0 768.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel9.aarch64.rpm pgdg 13.0.4 749.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel9.aarch64.rpm pgdg 13.0.3 750.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.2-1PGDG.rhel9.aarch64.rpm pgdg 13.0.2 749.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 746.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.0.0-4PIGSTY.el10.x86_64.rpm pigsty 14.0.0 858.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/citus_17-14.0.0-4PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.1.x86_64.rpm pgdg 14.0.0 832.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/citus_17-14.0.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel10.x86_64.rpm pgdg 13.2.0 827.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel10.x86_64.rpm pgdg 13.1.0 804.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel10.x86_64.rpm pgdg 13.0.4 786.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.0.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel10.x86_64.rpm pgdg 13.0.3 786.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.0.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-4PIGSTY.el10.aarch64.rpm pigsty 14.0.0 829.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/citus_17-14.0.0-4PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 803.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 798.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 776.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 758.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 759.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~bookworm_amd64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~bookworm_arm64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~trixie_amd64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~trixie_arm64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~jammy_amd64.deb pigsty 14.0.0 3.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~jammy_arm64.deb pigsty 14.0.0 3.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~noble_amd64.deb pigsty 14.0.0 2.8MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-citus postgresql-17-citus_14.0.0-4PIGSTY~noble_arm64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-17-citus_14.0.0-4PIGSTY~noble_arm64.deb
@ el8.x86_64 16 citus_16 citus_16-14.0.0-4PIGSTY.el8.x86_64.rpm pigsty 14.0.0 959.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/citus_16-14.0.0-4PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 849.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 843.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 819.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 800.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 800.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 800.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 798.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 797.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 796.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 796.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 796.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 795.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 795.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 794.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.0.0-4PIGSTY.el8.aarch64.rpm pigsty 14.0.0 921.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/citus_16-14.0.0-4PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 801.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 796.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 774.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 756.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 756.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 756.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 754.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 753.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 751.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 751.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 751.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 750.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 750.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 750.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.0.0-4PIGSTY.el9.x86_64.rpm pigsty 14.0.0 841.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/citus_16-14.0.0-4PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.7.x86_64.rpm pgdg 14.0.0 815.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-14.0.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel9.x86_64.rpm pgdg 13.2.0 809.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel9.x86_64.rpm pgdg 13.1.0 786.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel9.x86_64.rpm pgdg 13.0.4 768.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel9.x86_64.rpm pgdg 13.0.3 769.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.2-1PGDG.rhel9.x86_64.rpm pgdg 13.0.2 768.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 766.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.6-1PGDG.rhel9.x86_64.rpm pgdg 12.1.6 767.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.5-1PGDG.rhel9.x86_64.rpm pgdg 12.1.5 766.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.4-1PGDG.rhel9.x86_64.rpm pgdg 12.1.4 766.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.3-1PGDG.rhel9.x86_64.rpm pgdg 12.1.3 766.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.2-1PGDG.rhel9.x86_64.rpm pgdg 12.1.2 765.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.1-1PGDG.rhel9.x86_64.rpm pgdg 12.1.1 765.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.0-2PGDG.rhel9.x86_64.rpm pgdg 12.1.0 765.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.0.0-4PIGSTY.el9.aarch64.rpm pigsty 14.0.0 814.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/citus_16-14.0.0-4PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.7.aarch64.rpm pgdg 14.0.0 788.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-14.0.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel9.aarch64.rpm pgdg 13.2.0 782.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel9.aarch64.rpm pgdg 13.1.0 761.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel9.aarch64.rpm pgdg 13.0.4 744.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel9.aarch64.rpm pgdg 13.0.3 744.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.2-1PGDG.rhel9.aarch64.rpm pgdg 13.0.2 743.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 741.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.6-1PGDG.rhel9.aarch64.rpm pgdg 12.1.6 742.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.5-1PGDG.rhel9.aarch64.rpm pgdg 12.1.5 741.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.4-1PGDG.rhel9.aarch64.rpm pgdg 12.1.4 741.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.3-1PGDG.rhel9.aarch64.rpm pgdg 12.1.3 740.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.2-1PGDG.rhel9.aarch64.rpm pgdg 12.1.2 739.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.1-1PGDG.rhel9.aarch64.rpm pgdg 12.1.1 738.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.0-2PGDG.rhel9.aarch64.rpm pgdg 12.1.0 738.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.0.0-4PIGSTY.el10.x86_64.rpm pigsty 14.0.0 851.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/citus_16-14.0.0-4PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.1.x86_64.rpm pgdg 14.0.0 826.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/citus_16-14.0.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel10.x86_64.rpm pgdg 13.2.0 820.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel10.x86_64.rpm pgdg 13.1.0 797.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel10.x86_64.rpm pgdg 13.0.4 779.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.0.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel10.x86_64.rpm pgdg 13.0.3 779.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.0.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-4PIGSTY.el10.aarch64.rpm pigsty 14.0.0 823.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/citus_16-14.0.0-4PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 797.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 792.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 770.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 752.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 752.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~bookworm_amd64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~bookworm_arm64.deb pigsty 14.0.0 2.5MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~trixie_amd64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~trixie_arm64.deb pigsty 14.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~jammy_amd64.deb pigsty 14.0.0 3.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~jammy_arm64.deb pigsty 14.0.0 3.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~noble_amd64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-citus postgresql-16-citus_14.0.0-4PIGSTY~noble_arm64.deb pigsty 14.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-16-citus_14.0.0-4PIGSTY~noble_arm64.deb
@ el8.x86_64 15 citus_15 citus_15-13.2.0-8PIGSTY.el8.x86_64.rpm pigsty 13.2.0 999.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/citus_15-13.2.0-8PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 867.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 844.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 824.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 824.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 823.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 821.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 821.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 819.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 819.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 819.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 818.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 818.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 818.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.0.0-1PGDG.rhel8.x86_64.rpm pgdg 12.0.0 820.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.3.0-2.rhel8.x86_64.rpm pgdg 11.3.0 801.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.3.0-2.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.2.1-1.rhel8.x86_64.rpm pgdg 11.2.1 779.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.2.0-1.rhel8.x86_64.rpm pgdg 11.2.0 778.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.5-1.rhel8.x86_64.rpm pgdg 11.1.5 766.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.4-1.rhel8.x86_64.rpm pgdg 11.1.4 766.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.3-1.rhel8.x86_64.rpm pgdg 11.1.3 766.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.2-1.rhel8.x86_64.rpm pgdg 11.1.2 765.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.2.0-8PIGSTY.el8.aarch64.rpm pigsty 13.2.0 957.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/citus_15-13.2.0-8PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 815.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 793.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 774.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 774.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 774.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 772.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 771.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 770.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 769.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 769.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 768.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 768.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 768.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.0.0-1PGDG.rhel8.aarch64.rpm pgdg 12.0.0 770.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.3.0-2.rhel8.aarch64.rpm pgdg 11.3.0 752.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.3.0-2.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.2.1-1.rhel8.aarch64.rpm pgdg 11.2.1 732.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.2.0-1.rhel8.aarch64.rpm pgdg 11.2.0 730.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.5-1.rhel8.aarch64.rpm pgdg 11.1.5 719.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.4-1.rhel8.aarch64.rpm pgdg 11.1.4 719.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.3-1.rhel8.aarch64.rpm pgdg 11.1.3 718.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.2.0-8PIGSTY.el9.x86_64.rpm pigsty 13.2.0 893.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/citus_15-13.2.0-8PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel9.x86_64.rpm pgdg 13.2.0 855.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel9.x86_64.rpm pgdg 13.1.0 831.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel9.x86_64.rpm pgdg 13.0.4 813.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel9.x86_64.rpm pgdg 13.0.3 813.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.2-1PGDG.rhel9.x86_64.rpm pgdg 13.0.2 813.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 811.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.6-1PGDG.rhel9.x86_64.rpm pgdg 12.1.6 809.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.5-1PGDG.rhel9.x86_64.rpm pgdg 12.1.5 809.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.4-1PGDG.rhel9.x86_64.rpm pgdg 12.1.4 809.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.3-1PGDG.rhel9.x86_64.rpm pgdg 12.1.3 809.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.2-1PGDG.rhel9.x86_64.rpm pgdg 12.1.2 805.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.1-1PGDG.rhel9.x86_64.rpm pgdg 12.1.1 806.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.0-2PGDG.rhel9.x86_64.rpm pgdg 12.1.0 807.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.0.0-1PGDG.rhel9.x86_64.rpm pgdg 12.0.0 810.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.3.0-2.rhel9.x86_64.rpm pgdg 11.3.0 791.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.3.0-2.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.2.1-1.rhel9.x86_64.rpm pgdg 11.2.1 769.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.2.0-1.rhel9.x86_64.rpm pgdg 11.2.0 769.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.5-1.rhel9.x86_64.rpm pgdg 11.1.5 755.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.4-1.rhel9.x86_64.rpm pgdg 11.1.4 757.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.3-1.rhel9.x86_64.rpm pgdg 11.1.3 757.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.2-1.rhel9.x86_64.rpm pgdg 11.1.2 756.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.2.0-8PIGSTY.el9.aarch64.rpm pigsty 13.2.0 856.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/citus_15-13.2.0-8PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel9.aarch64.rpm pgdg 13.2.0 819.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel9.aarch64.rpm pgdg 13.1.0 798.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel9.aarch64.rpm pgdg 13.0.4 780.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel9.aarch64.rpm pgdg 13.0.3 780.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.2-1PGDG.rhel9.aarch64.rpm pgdg 13.0.2 780.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 778.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.6-1PGDG.rhel9.aarch64.rpm pgdg 12.1.6 778.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.5-1PGDG.rhel9.aarch64.rpm pgdg 12.1.5 777.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.4-1PGDG.rhel9.aarch64.rpm pgdg 12.1.4 777.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.3-1PGDG.rhel9.aarch64.rpm pgdg 12.1.3 774.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.2-1PGDG.rhel9.aarch64.rpm pgdg 12.1.2 773.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.1-1PGDG.rhel9.aarch64.rpm pgdg 12.1.1 773.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.0-2PGDG.rhel9.aarch64.rpm pgdg 12.1.0 773.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.0.0-1PGDG.rhel9.aarch64.rpm pgdg 12.0.0 775.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.3.0-2.rhel9.aarch64.rpm pgdg 11.3.0 759.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.3.0-2.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.2.1-1.rhel9.aarch64.rpm pgdg 11.2.1 738.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.2.0-1.rhel9.aarch64.rpm pgdg 11.2.0 737.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.5-1.rhel9.aarch64.rpm pgdg 11.1.5 726.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.4-1.rhel9.aarch64.rpm pgdg 11.1.4 724.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.3-1.rhel9.aarch64.rpm pgdg 11.1.3 724.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.3-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.2-1.rhel9.aarch64.rpm pgdg 11.1.2 724.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.2.0-8PIGSTY.el10.x86_64.rpm pigsty 13.2.0 895.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/citus_15-13.2.0-8PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel10.x86_64.rpm pgdg 13.2.0 858.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel10.x86_64.rpm pgdg 13.1.0 837.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel10.x86_64.rpm pgdg 13.0.4 818.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.0.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel10.x86_64.rpm pgdg 13.0.3 818.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.0.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.2.0-8PIGSTY.el10.aarch64.rpm pigsty 13.2.0 862.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/citus_15-13.2.0-8PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 826.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 805.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 787.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 787.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~bookworm_amd64.deb pigsty 13.2.0 2.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~bookworm_arm64.deb pigsty 13.2.0 2.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~trixie_amd64.deb pigsty 13.2.0 2.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~trixie_arm64.deb pigsty 13.2.0 2.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~jammy_amd64.deb pigsty 13.2.0 3.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~jammy_arm64.deb pigsty 13.2.0 3.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~noble_amd64.deb pigsty 13.2.0 2.8MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~noble_arm64.deb pigsty 13.2.0 2.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~noble_arm64.deb
@ el8.x86_64 14 citus_14 citus_14-13.0.0-1PIGSTY.el8.x86_64.rpm pigsty 13.0.0 807.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/citus_14-13.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 814.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 813.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 812.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 812.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 812.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 811.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 811.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 810.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.0.0-1PGDG.rhel8.x86_64.rpm pgdg 12.0.0 813.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.3.0-2.rhel8.x86_64.rpm pgdg 11.3.0 796.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.3.0-2.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.2.1-1.rhel8.x86_64.rpm pgdg 11.2.1 776.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.2.0-1.rhel8.x86_64.rpm pgdg 11.2.0 776.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.5-1.rhel8.x86_64.rpm pgdg 11.1.5 765.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.4-1.rhel8.x86_64.rpm pgdg 11.1.4 765.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.3-1.rhel8.x86_64.rpm pgdg 11.1.3 765.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.2-1.rhel8.x86_64.rpm pgdg 11.1.2 764.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.1-1.rhel8.x86_64.rpm pgdg 11.1.1 762.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.6-1.rhel8.x86_64.rpm pgdg 11.0.6 701.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.5-1.rhel8.x86_64.rpm pgdg 11.0.5 700.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.4-1.rhel8.x86_64.rpm pgdg 11.0.4 699.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.3-1.rhel8.x86_64.rpm pgdg 11.0.3 699.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.2-1.rhel8.x86_64.rpm pgdg 11.0.2 698.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.5-1.rhel8.x86_64.rpm pgdg 10.2.5 618.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.4-1.rhel8.x86_64.rpm pgdg 10.2.4 618.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.3-1.rhel8.x86_64.rpm pgdg 10.2.3 618.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.2-1.rhel8.x86_64.rpm pgdg 10.2.2 615.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.1-1.rhel8.x86_64.rpm pgdg 10.2.1 614.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.0-1.rhel8.x86_64.rpm pgdg 10.2.0 614.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 citus_14 citus_14-13.0.0-1PIGSTY.el8.aarch64.rpm pigsty 13.0.0 758.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/citus_14-13.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 765.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 764.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 763.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 763.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 763.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 762.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 762.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 761.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.0.0-1PGDG.rhel8.aarch64.rpm pgdg 12.0.0 763.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.3.0-2.rhel8.aarch64.rpm pgdg 11.3.0 748.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.3.0-2.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.2.1-1.rhel8.aarch64.rpm pgdg 11.2.1 729.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.2.0-1.rhel8.aarch64.rpm pgdg 11.2.0 729.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.1.5-1.rhel8.aarch64.rpm pgdg 11.1.5 718.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.1.4-1.rhel8.aarch64.rpm pgdg 11.1.4 717.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.1.3-1.rhel8.aarch64.rpm pgdg 11.1.3 717.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 citus_14 citus_14-13.0.0-1PIGSTY.el9.x86_64.rpm pigsty 13.0.0 801.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/citus_14-13.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 803.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.6-1PGDG.rhel9.x86_64.rpm pgdg 12.1.6 802.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.5-1PGDG.rhel9.x86_64.rpm pgdg 12.1.5 800.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.4-1PGDG.rhel9.x86_64.rpm pgdg 12.1.4 800.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.3-1PGDG.rhel9.x86_64.rpm pgdg 12.1.3 800.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.2-1PGDG.rhel9.x86_64.rpm pgdg 12.1.2 798.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.1-1PGDG.rhel9.x86_64.rpm pgdg 12.1.1 798.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.0-2PGDG.rhel9.x86_64.rpm pgdg 12.1.0 798.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.0.0-1PGDG.rhel9.x86_64.rpm pgdg 12.0.0 802.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.3.0-2.rhel9.x86_64.rpm pgdg 11.3.0 787.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.3.0-2.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.2.1-1.rhel9.x86_64.rpm pgdg 11.2.1 767.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.2.0-1.rhel9.x86_64.rpm pgdg 11.2.0 766.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.5-1.rhel9.x86_64.rpm pgdg 11.1.5 756.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.4-1.rhel9.x86_64.rpm pgdg 11.1.4 755.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.3-1.rhel9.x86_64.rpm pgdg 11.1.3 755.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.2-1.rhel9.x86_64.rpm pgdg 11.1.2 755.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.1-1.rhel9.x86_64.rpm pgdg 11.1.1 754.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.6-1.rhel9.x86_64.rpm pgdg 11.0.6 691.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.6-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.5-1.rhel9.x86_64.rpm pgdg 11.0.5 690.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.4-1.rhel9.x86_64.rpm pgdg 11.0.4 690.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.3-1.rhel9.x86_64.rpm pgdg 11.0.3 689.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.2-1.rhel9.x86_64.rpm pgdg 11.0.2 689.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-10.2.5-1.rhel9.x86_64.rpm pgdg 10.2.5 612.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-10.2.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-10.2.4-1.rhel9.x86_64.rpm pgdg 10.2.4 613.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-10.2.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-10.2.3-1.rhel9.x86_64.rpm pgdg 10.2.3 613.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/citus_14-10.2.3-1.rhel9.x86_64.rpm
@ el9.aarch64 14 citus_14 citus_14-13.0.0-1PIGSTY.el9.aarch64.rpm pigsty 13.0.0 769.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/citus_14-13.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 771.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.6-1PGDG.rhel9.aarch64.rpm pgdg 12.1.6 770.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.5-1PGDG.rhel9.aarch64.rpm pgdg 12.1.5 770.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.4-1PGDG.rhel9.aarch64.rpm pgdg 12.1.4 770.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.3-1PGDG.rhel9.aarch64.rpm pgdg 12.1.3 768.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.2-1PGDG.rhel9.aarch64.rpm pgdg 12.1.2 766.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.1-1PGDG.rhel9.aarch64.rpm pgdg 12.1.1 766.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.0-2PGDG.rhel9.aarch64.rpm pgdg 12.1.0 766.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.0.0-1PGDG.rhel9.aarch64.rpm pgdg 12.0.0 769.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.3.0-2.rhel9.aarch64.rpm pgdg 11.3.0 754.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.3.0-2.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.2.1-1.rhel9.aarch64.rpm pgdg 11.2.1 736.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.2.0-1.rhel9.aarch64.rpm pgdg 11.2.0 735.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.1.5-1.rhel9.aarch64.rpm pgdg 11.1.5 724.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.1.4-1.rhel9.aarch64.rpm pgdg 11.1.4 723.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.1.3-1.rhel9.aarch64.rpm pgdg 11.1.3 723.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.1.3-1.rhel9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~bookworm_amd64.deb pigsty 13.0.0 3.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~bookworm_arm64.deb pigsty 13.0.0 2.9MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~jammy_amd64.deb pigsty 13.0.0 3.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~jammy_arm64.deb pigsty 13.0.0 3.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~noble_amd64.deb pigsty 13.0.0 2.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~noble_arm64.deb pigsty 13.0.0 2.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install citus;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y citus -v 18  # PG 18
pig ext install -y citus -v 17  # PG 17
pig ext install -y citus -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y citus_18       # PG 18
dnf install -y citus_17       # PG 17
dnf install -y citus_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-citus   # PG 18
apt install -y postgresql-17-citus   # PG 17
apt install -y postgresql-16-citus   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'citus';
```


**创建扩展**：

```sql
CREATE EXTENSION citus;
```



## 用法

> [citus: 面向多租户和实时分析的分布式 PostgreSQL](https://github.com/citusdata/citus)

Citus 将 PostgreSQL 转变为分布式数据库，通过在多个节点间分片表来实现水平扩展。它支持多租户 SaaS 工作负载、实时分析和高吞吐量事务场景，同时保留完整的 PostgreSQL 功能集。

**核心文档：**

- [什么是 Citus？](https://docs.citusdata.com/en/stable/get_started/what_is_citus.html)
- [分布式表](https://docs.citusdata.com/en/stable/develop/api_udf.html#create-distributed-table)
- [引用表](https://docs.citusdata.com/en/stable/develop/api_udf.html#create-reference-table)
- [分片模型](https://docs.citusdata.com/en/stable/sharding/data_modeling.html)
- [协同定位](https://docs.citusdata.com/en/stable/sharding/data_modeling.html#colocation)
- [分布式查询](https://docs.citusdata.com/en/stable/develop/reference_sql.html)
- [集群管理](https://docs.citusdata.com/en/stable/admin_guide/cluster_management.html)
- [配置参考](https://docs.citusdata.com/en/stable/develop/api_guc.html)
- [列式存储](https://docs.citusdata.com/en/stable/admin_guide/table_management.html#columnar-storage)

### 快速开始

启用扩展并添加工作节点：

```sql
CREATE EXTENSION citus;

-- 将协调节点添加到集群
SELECT citus_set_coordinator_host('coord-host', 5432);
SELECT * FROM citus_add_node('worker-1', 5432);
SELECT * FROM citus_add_node('worker-2', 5432);

-- 验证集群状态
SELECT * FROM citus_get_active_worker_nodes();
```

### 创建分布式表

通过指定分布列（分片键）来分布表。具有相同键值的行会被协同定位在同一个分片上。

```sql
CREATE TABLE events (
    tenant_id   INT,
    event_id    BIGSERIAL,
    event_time  TIMESTAMPTZ DEFAULT now(),
    event_type  TEXT,
    payload     JSONB,
    PRIMARY KEY (tenant_id, event_id)
);

-- 按 tenant_id 进行哈希分布（默认：32 个分片）
SELECT create_distributed_table('events', 'tenant_id');
```

可以控制分片数量：

```sql
SELECT create_distributed_table('events', 'tenant_id', shard_count := 64);
```

### 引用表

需要与分布式表进行连接的小型查找表应创建为引用表。引用表会被完整复制到每个节点。

```sql
CREATE TABLE countries (
    code CHAR(2) PRIMARY KEY,
    name TEXT NOT NULL
);

SELECT create_reference_table('countries');
```

引用表可以与任何分布式表进行无限制的连接。

### 协同定位

基于相同列类型和分片数量进行分布的表会自动协同定位，即具有匹配分布键的行存储在同一节点上。这使得高效的本地连接成为可能。

```sql
CREATE TABLE tenants (
    id   INT PRIMARY KEY,
    name TEXT
);
SELECT create_distributed_table('tenants', 'id');

CREATE TABLE orders (
    tenant_id  INT REFERENCES tenants(id),
    order_id   BIGSERIAL,
    amount     NUMERIC,
    PRIMARY KEY (tenant_id, order_id)
);
SELECT create_distributed_table('orders', 'tenant_id');

-- 此连接被下推到各节点执行（无跨分片流量）
SELECT t.name, sum(o.amount)
FROM tenants t JOIN orders o ON t.id = o.tenant_id
GROUP BY t.name;
```

也可以显式指定协同定位组：

```sql
SELECT create_distributed_table('orders', 'tenant_id',
    colocate_with := 'tenants');
```

### 分布式查询

Citus 尽可能将查询下推到各个分片。过滤分布列的查询会被路由到单个分片：

```sql
-- 单分片查询（快速，只访问一个节点）
SELECT * FROM events WHERE tenant_id = 42;
```

跨分片查询会在所有工作节点上并行执行：

```sql
-- 跨所有分片的并行聚合
SELECT event_type, count(*), avg(payload->>'duration')::numeric
FROM events
WHERE event_time > now() - INTERVAL '1 hour'
GROUP BY event_type
ORDER BY count DESC
LIMIT 10;
```

### 分布式连接

协同定位表之间基于分布列的连接在每个分片上本地执行：

```sql
-- 协同定位连接：高效，无数据移动
SELECT e.*, o.amount
FROM events e JOIN orders o
    ON e.tenant_id = o.tenant_id
WHERE e.tenant_id = 42;
```

与引用表的连接可从任何分布式表发起：

```sql
SELECT e.*, c.name AS country_name
FROM events e JOIN countries c ON e.payload->>'country' = c.code;
```

### 节点管理

```sql
-- 添加新节点
SELECT * FROM citus_add_node('worker-3', 5432);

-- 移除节点（先将分片迁移到其他节点）
SELECT * FROM citus_drain_node('worker-1', 5432);
SELECT * FROM citus_remove_node('worker-1', 5432);

-- 临时禁用节点
SELECT * FROM citus_disable_node('worker-2', 5432);
SELECT * FROM citus_activate_node('worker-2', 5432);

-- 查看当前集群状态
SELECT * FROM citus_get_active_worker_nodes();
```

### 分片再平衡

添加或移除节点后，通过再平衡分片来均匀分配数据：

```sql
-- 再平衡所有分布式表
SELECT citus_rebalance_start();

-- 监控再平衡进度
SELECT * FROM citus_rebalance_status();

-- 再平衡特定表
SELECT rebalance_table_shards('events');
```

### 分片管理

```sql
-- 查看分片分布
SELECT * FROM citus_shards;

-- 查看分片大小
SELECT table_name, shard_count, citus_total_relation_size(table_name::text)
FROM citus_tables;

-- 将特定分片迁移到另一个节点
SELECT citus_move_shard_placement(shard_id, 'source-host', 5432, 'dest-host', 5432);
```

### 配置参数

用于调优 Citus 的关键 GUC 参数：

```sql
-- 多分片查询时每个节点的并行连接数
SET citus.max_adaptive_executor_pool_size = 4;

-- 分片复制因子（默认 1；无流复制时可设为 2 以实现高可用）
SET citus.shard_replication_factor = 1;

-- 控制执行器行为
SET citus.multi_shard_modify_mode = 'parallel';   -- 或 'sequential'
SET citus.enable_repartition_joins = on;           -- 启用重分区连接

-- 任务分配策略
SET citus.task_assignment_policy = 'round-robin';  -- 或 'greedy'、'first-replica'

-- 记录分布式查询日志
SET citus.log_multi_join_order = on;
SET citus.explain_all_tasks = on;
```

### 示例：多租户 SaaS 模式

典型的多租户模式将所有租户相关的表按 `tenant_id` 进行分布：

```sql
CREATE TABLE tenants (
    tenant_id   INT PRIMARY KEY,
    name        TEXT,
    plan        TEXT DEFAULT 'free',
    created_at  TIMESTAMPTZ DEFAULT now()
);
SELECT create_distributed_table('tenants', 'tenant_id');

CREATE TABLE users (
    tenant_id   INT,
    user_id     BIGSERIAL,
    email       TEXT,
    PRIMARY KEY (tenant_id, user_id)
);
SELECT create_distributed_table('users', 'tenant_id');

CREATE TABLE projects (
    tenant_id   INT,
    project_id  BIGSERIAL,
    name        TEXT,
    owner_id    BIGINT,
    PRIMARY KEY (tenant_id, project_id)
);
SELECT create_distributed_table('projects', 'tenant_id');

-- 共享查找表：复制到每个节点
CREATE TABLE plans (
    name TEXT PRIMARY KEY,
    max_users INT,
    max_projects INT
);
SELECT create_reference_table('plans');

-- 所有限定在单个租户范围内的连接都是协同定位的，查询速度快
SELECT u.email, p.name AS project
FROM users u
JOIN projects p ON u.tenant_id = p.tenant_id AND u.user_id = p.owner_id
WHERE u.tenant_id = 7;
```

### 示例：实时分析

用于仪表板和分析的分布式聚合：

```sql
CREATE TABLE page_views (
    site_id      INT,
    url          TEXT,
    view_time    TIMESTAMPTZ DEFAULT now(),
    user_agent   TEXT,
    country      CHAR(2)
);
SELECT create_distributed_table('page_views', 'site_id');

-- 实时汇总：跨分片并行执行
SELECT
    date_trunc('minute', view_time) AS minute,
    count(*)                        AS views,
    count(DISTINCT country)         AS countries
FROM page_views
WHERE site_id = 1
  AND view_time > now() - INTERVAL '1 hour'
GROUP BY minute
ORDER BY minute DESC;

-- 所有站点的热门页面（跨分片并行查询）
SELECT url, count(*) AS views
FROM page_views
WHERE view_time > now() - INTERVAL '24 hours'
GROUP BY url
ORDER BY views DESC
LIMIT 20;
```
