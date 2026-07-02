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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/citus-14.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">citus-14.1.0.tar.gz</div>
    <div class="ext-card__desc">citus-14.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`citus`**](/ext/e/citus) | `14.1.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.1.0` | {{< pgvers "18,17,16" >}} | `citus` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.1.0` | {{< pgvers "18,17,16" >}} | `citus_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.1.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-citus` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 14.1.0 3 | AVAIL PIGSTY 14.1.0 9 | AVAIL PIGSTY 14.1.0 16 | AVAIL PGDG 13.2.0 21 | AVAIL PGDG 13.0.0 28 |
| el8.aarch64 | AVAIL PIGSTY 14.1.0 3 | AVAIL PIGSTY 14.1.0 9 | AVAIL PIGSTY 14.1.0 16 | AVAIL PGDG 13.2.0 20 | AVAIL PGDG 13.0.0 15 |
| el9.x86_64 | AVAIL PIGSTY 14.1.0 5 | AVAIL PIGSTY 14.1.0 11 | AVAIL PIGSTY 14.1.0 18 | AVAIL PGDG 13.2.0 21 | AVAIL PGDG 13.0.0 25 |
| el9.aarch64 | AVAIL PIGSTY 14.1.0 5 | AVAIL PIGSTY 14.1.0 11 | AVAIL PIGSTY 14.1.0 18 | AVAIL PGDG 13.2.0 21 | AVAIL PGDG 13.0.0 15 |
| el10.x86_64 | AVAIL PIGSTY 14.1.0 5 | AVAIL PIGSTY 14.1.0 9 | AVAIL PIGSTY 14.1.0 9 | AVAIL PGDG 13.2.0 4 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 14.1.0 5 | AVAIL PIGSTY 14.1.0 9 | AVAIL PIGSTY 14.1.0 9 | AVAIL PGDG 13.2.0 4 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | AVAIL PIGSTY 14.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 citus_18 citus_18-14.1.0-1PIGSTY.el8.x86_64.rpm pigsty 14.1.0 983.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_18-14.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.1.0 871.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 859.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/citus_18-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.1.0-1PIGSTY.el8.aarch64.rpm pigsty 14.1.0 943.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_18-14.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.1.0 822.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 810.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/citus_18-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.1.0-1PIGSTY.el9.x86_64.rpm pigsty 14.1.0 881.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_18-14.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 14.1.0 837.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/citus_18-14.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 14.0.0 823.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/citus_18-14.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.7.x86_64.rpm pgdg 14.0.0 823.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/citus_18-14.0.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.6.x86_64.rpm pgdg 14.0.0 824.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/citus_18-14.0.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.1.0-1PIGSTY.el9.aarch64.rpm pigsty 14.1.0 835.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_18-14.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 14.1.0 808.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/citus_18-14.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 14.0.0 797.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/citus_18-14.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.7.aarch64.rpm pgdg 14.0.0 797.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/citus_18-14.0.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel9.6.aarch64.rpm pgdg 14.0.0 797.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/citus_18-14.0.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.1.0-1PIGSTY.el10.x86_64.rpm pigsty 14.1.0 875.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_18-14.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 14.1.0 849.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/citus_18-14.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 14.0.0 836.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/citus_18-14.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.1.x86_64.rpm pgdg 14.0.0 835.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/citus_18-14.0.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.0.x86_64.rpm pgdg 14.0.0 835.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/citus_18-14.0.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.1.0-1PIGSTY.el10.aarch64.rpm pigsty 14.1.0 843.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_18-14.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.1.0 818.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.0.0 805.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 806.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 citus_18 citus_18-14.0.0-1PGDG.rhel10.0.aarch64.rpm pgdg 14.0.0 806.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/citus_18-14.0.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~bookworm_amd64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~bookworm_arm64.deb pigsty 14.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~trixie_amd64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~trixie_arm64.deb pigsty 14.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~jammy_amd64.deb pigsty 14.1.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~jammy_arm64.deb pigsty 14.1.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~noble_amd64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~noble_arm64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~resolute_amd64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-citus postgresql-18-citus_14.1.0-1PIGSTY~resolute_arm64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-18-citus_14.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 citus_17 citus_17-14.1.0-1PIGSTY.el8.x86_64.rpm pigsty 14.1.0 981.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_17-14.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.1.0 869.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 857.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 850.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 827.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 805.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 805.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 805.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 citus_17 citus_17-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 803.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/citus_17-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.1.0-1PIGSTY.el8.aarch64.rpm pigsty 14.1.0 941.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_17-14.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.1.0 819.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 808.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 802.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 781.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 761.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 761.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 761.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 citus_17 citus_17-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 758.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/citus_17-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.1.0-1PIGSTY.el9.x86_64.rpm pigsty 14.1.0 879.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_17-14.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 14.1.0 834.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-14.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 14.0.0 821.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-14.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.7.x86_64.rpm pgdg 14.0.0 821.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-14.0.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.6.x86_64.rpm pgdg 14.0.0 822.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-14.0.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel9.x86_64.rpm pgdg 13.2.0 815.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel9.x86_64.rpm pgdg 13.1.0 793.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel9.x86_64.rpm pgdg 13.0.4 774.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel9.x86_64.rpm pgdg 13.0.3 774.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.2-1PGDG.rhel9.x86_64.rpm pgdg 13.0.2 774.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 citus_17 citus_17-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 772.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/citus_17-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.1.0-1PIGSTY.el9.aarch64.rpm pigsty 14.1.0 833.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_17-14.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 14.1.0 807.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-14.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 14.0.0 795.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-14.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.7.aarch64.rpm pgdg 14.0.0 795.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-14.0.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel9.6.aarch64.rpm pgdg 14.0.0 795.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-14.0.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel9.aarch64.rpm pgdg 13.2.0 789.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel9.aarch64.rpm pgdg 13.1.0 768.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel9.aarch64.rpm pgdg 13.0.4 749.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel9.aarch64.rpm pgdg 13.0.3 750.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.2-1PGDG.rhel9.aarch64.rpm pgdg 13.0.2 749.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 citus_17 citus_17-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 746.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/citus_17-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.1.0-1PIGSTY.el10.x86_64.rpm pigsty 14.1.0 872.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_17-14.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 14.1.0 845.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-14.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 14.0.0 833.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-14.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.1.x86_64.rpm pgdg 14.0.0 832.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-14.0.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.0.x86_64.rpm pgdg 14.0.0 833.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-14.0.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.2.0-1PGDG.rhel10.x86_64.rpm pgdg 13.2.0 827.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.1.0-1PGDG.rhel10.x86_64.rpm pgdg 13.1.0 804.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.0.4-1PGDG.rhel10.x86_64.rpm pgdg 13.0.4 786.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.0.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 citus_17 citus_17-13.0.3-1PGDG.rhel10.x86_64.rpm pgdg 13.0.3 786.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/citus_17-13.0.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.1.0-1PIGSTY.el10.aarch64.rpm pigsty 14.1.0 841.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_17-14.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.1.0 816.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.0.0 804.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 803.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-14.0.0-1PGDG.rhel10.0.aarch64.rpm pgdg 14.0.0 803.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-14.0.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 798.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 776.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 758.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 citus_17 citus_17-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 759.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/citus_17-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~bookworm_amd64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~bookworm_arm64.deb pigsty 14.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~trixie_amd64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~trixie_arm64.deb pigsty 14.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~jammy_amd64.deb pigsty 14.1.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~jammy_arm64.deb pigsty 14.1.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~noble_amd64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~noble_arm64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~resolute_amd64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-citus postgresql-17-citus_14.1.0-1PIGSTY~resolute_arm64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-17-citus_14.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 citus_16 citus_16-14.1.0-1PIGSTY.el8.x86_64.rpm pigsty 14.1.0 973.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/citus_16-14.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.1.0 862.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 14.0.0 849.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-14.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 843.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 819.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 800.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 800.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 800.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 798.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 797.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 796.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 796.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 796.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 795.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 795.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 citus_16 citus_16-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 794.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/citus_16-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.1.0-1PIGSTY.el8.aarch64.rpm pigsty 14.1.0 934.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/citus_16-14.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.1.0 813.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 14.0.0 801.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-14.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 796.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 774.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 756.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 756.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 756.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 754.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 753.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 751.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 751.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 751.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 750.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 750.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 citus_16 citus_16-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 750.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/citus_16-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.1.0-1PIGSTY.el9.x86_64.rpm pigsty 14.1.0 874.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/citus_16-14.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 14.1.0 828.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-14.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 14.0.0 815.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-14.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.7.x86_64.rpm pgdg 14.0.0 815.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-14.0.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.6.x86_64.rpm pgdg 14.0.0 815.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-14.0.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel9.x86_64.rpm pgdg 13.2.0 809.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel9.x86_64.rpm pgdg 13.1.0 786.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel9.x86_64.rpm pgdg 13.0.4 768.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel9.x86_64.rpm pgdg 13.0.3 769.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.2-1PGDG.rhel9.x86_64.rpm pgdg 13.0.2 768.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 766.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.6-1PGDG.rhel9.x86_64.rpm pgdg 12.1.6 767.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.5-1PGDG.rhel9.x86_64.rpm pgdg 12.1.5 766.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.4-1PGDG.rhel9.x86_64.rpm pgdg 12.1.4 766.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.3-1PGDG.rhel9.x86_64.rpm pgdg 12.1.3 766.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.2-1PGDG.rhel9.x86_64.rpm pgdg 12.1.2 765.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.1-1PGDG.rhel9.x86_64.rpm pgdg 12.1.1 765.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 citus_16 citus_16-12.1.0-2PGDG.rhel9.x86_64.rpm pgdg 12.1.0 765.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/citus_16-12.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.1.0-1PIGSTY.el9.aarch64.rpm pigsty 14.1.0 826.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/citus_16-14.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 14.1.0 800.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-14.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 14.0.0 788.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-14.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.7.aarch64.rpm pgdg 14.0.0 788.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-14.0.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel9.6.aarch64.rpm pgdg 14.0.0 789.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-14.0.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel9.aarch64.rpm pgdg 13.2.0 782.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel9.aarch64.rpm pgdg 13.1.0 761.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel9.aarch64.rpm pgdg 13.0.4 744.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel9.aarch64.rpm pgdg 13.0.3 744.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.2-1PGDG.rhel9.aarch64.rpm pgdg 13.0.2 743.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 741.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.6-1PGDG.rhel9.aarch64.rpm pgdg 12.1.6 742.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.5-1PGDG.rhel9.aarch64.rpm pgdg 12.1.5 741.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.4-1PGDG.rhel9.aarch64.rpm pgdg 12.1.4 741.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.3-1PGDG.rhel9.aarch64.rpm pgdg 12.1.3 740.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.2-1PGDG.rhel9.aarch64.rpm pgdg 12.1.2 739.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.1-1PGDG.rhel9.aarch64.rpm pgdg 12.1.1 738.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 citus_16 citus_16-12.1.0-2PGDG.rhel9.aarch64.rpm pgdg 12.1.0 738.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/citus_16-12.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.1.0-1PIGSTY.el10.x86_64.rpm pigsty 14.1.0 865.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/citus_16-14.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 14.1.0 838.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-14.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 14.0.0 826.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-14.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.1.x86_64.rpm pgdg 14.0.0 826.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-14.0.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.0.x86_64.rpm pgdg 14.0.0 826.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-14.0.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.2.0-1PGDG.rhel10.x86_64.rpm pgdg 13.2.0 820.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.1.0-1PGDG.rhel10.x86_64.rpm pgdg 13.1.0 797.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.0.4-1PGDG.rhel10.x86_64.rpm pgdg 13.0.4 779.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.0.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 citus_16 citus_16-13.0.3-1PGDG.rhel10.x86_64.rpm pgdg 13.0.3 779.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/citus_16-13.0.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.1.0-1PIGSTY.el10.aarch64.rpm pigsty 14.1.0 834.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/citus_16-14.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.1.0 809.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 14.0.0 797.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.1.aarch64.rpm pgdg 14.0.0 797.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-14.0.0-1PGDG.rhel10.0.aarch64.rpm pgdg 14.0.0 797.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-14.0.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 792.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 770.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 752.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 citus_16 citus_16-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 752.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/citus_16-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~bookworm_amd64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~bookworm_arm64.deb pigsty 14.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~trixie_amd64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~trixie_arm64.deb pigsty 14.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~jammy_amd64.deb pigsty 14.1.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~jammy_arm64.deb pigsty 14.1.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~noble_amd64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~noble_arm64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~resolute_amd64.deb pigsty 14.1.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-citus postgresql-16-citus_14.1.0-1PIGSTY~resolute_arm64.deb pigsty 14.1.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/citus/postgresql-16-citus_14.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel8.x86_64.rpm pgdg 13.2.0 867.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel8.x86_64.rpm pgdg 13.1.0 844.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel8.x86_64.rpm pgdg 13.0.4 824.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel8.x86_64.rpm pgdg 13.0.3 824.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.2-1PGDG.rhel8.x86_64.rpm pgdg 13.0.2 823.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 821.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 821.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 819.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 819.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 819.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 818.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 818.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 818.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-12.0.0-1PGDG.rhel8.x86_64.rpm pgdg 12.0.0 820.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-12.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.3.0-2.rhel8.x86_64.rpm pgdg 11.3.0 801.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.3.0-2.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.2.1-1.rhel8.x86_64.rpm pgdg 11.2.1 779.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.2.0-1.rhel8.x86_64.rpm pgdg 11.2.0 778.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.5-1.rhel8.x86_64.rpm pgdg 11.1.5 766.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.4-1.rhel8.x86_64.rpm pgdg 11.1.4 766.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.3-1.rhel8.x86_64.rpm pgdg 11.1.3 766.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 citus_15 citus_15-11.1.2-1.rhel8.x86_64.rpm pgdg 11.1.2 765.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/citus_15-11.1.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel8.aarch64.rpm pgdg 13.2.0 815.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel8.aarch64.rpm pgdg 13.1.0 793.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel8.aarch64.rpm pgdg 13.0.4 774.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel8.aarch64.rpm pgdg 13.0.3 774.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.2-1PGDG.rhel8.aarch64.rpm pgdg 13.0.2 774.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 772.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 771.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 770.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 769.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 769.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 768.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 768.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 768.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-12.0.0-1PGDG.rhel8.aarch64.rpm pgdg 12.0.0 770.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-12.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.3.0-2.rhel8.aarch64.rpm pgdg 11.3.0 752.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.3.0-2.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.2.1-1.rhel8.aarch64.rpm pgdg 11.2.1 732.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.2.0-1.rhel8.aarch64.rpm pgdg 11.2.0 730.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.5-1.rhel8.aarch64.rpm pgdg 11.1.5 719.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.4-1.rhel8.aarch64.rpm pgdg 11.1.4 719.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 citus_15 citus_15-11.1.3-1.rhel8.aarch64.rpm pgdg 11.1.3 718.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/citus_15-11.1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel9.x86_64.rpm pgdg 13.2.0 855.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel9.x86_64.rpm pgdg 13.1.0 831.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel9.x86_64.rpm pgdg 13.0.4 813.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel9.x86_64.rpm pgdg 13.0.3 813.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.2-1PGDG.rhel9.x86_64.rpm pgdg 13.0.2 813.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 811.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.6-1PGDG.rhel9.x86_64.rpm pgdg 12.1.6 809.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.5-1PGDG.rhel9.x86_64.rpm pgdg 12.1.5 809.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.4-1PGDG.rhel9.x86_64.rpm pgdg 12.1.4 809.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.3-1PGDG.rhel9.x86_64.rpm pgdg 12.1.3 809.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.2-1PGDG.rhel9.x86_64.rpm pgdg 12.1.2 805.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.1-1PGDG.rhel9.x86_64.rpm pgdg 12.1.1 806.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.1.0-2PGDG.rhel9.x86_64.rpm pgdg 12.1.0 807.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-12.0.0-1PGDG.rhel9.x86_64.rpm pgdg 12.0.0 810.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-12.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.3.0-2.rhel9.x86_64.rpm pgdg 11.3.0 791.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.3.0-2.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.2.1-1.rhel9.x86_64.rpm pgdg 11.2.1 769.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.2.0-1.rhel9.x86_64.rpm pgdg 11.2.0 769.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.5-1.rhel9.x86_64.rpm pgdg 11.1.5 755.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.4-1.rhel9.x86_64.rpm pgdg 11.1.4 757.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.3-1.rhel9.x86_64.rpm pgdg 11.1.3 757.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 citus_15 citus_15-11.1.2-1.rhel9.x86_64.rpm pgdg 11.1.2 756.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/citus_15-11.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel9.aarch64.rpm pgdg 13.2.0 819.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel9.aarch64.rpm pgdg 13.1.0 798.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel9.aarch64.rpm pgdg 13.0.4 780.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel9.aarch64.rpm pgdg 13.0.3 780.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.2-1PGDG.rhel9.aarch64.rpm pgdg 13.0.2 780.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 778.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.6-1PGDG.rhel9.aarch64.rpm pgdg 12.1.6 778.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.5-1PGDG.rhel9.aarch64.rpm pgdg 12.1.5 777.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.4-1PGDG.rhel9.aarch64.rpm pgdg 12.1.4 777.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.3-1PGDG.rhel9.aarch64.rpm pgdg 12.1.3 774.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.2-1PGDG.rhel9.aarch64.rpm pgdg 12.1.2 773.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.1-1PGDG.rhel9.aarch64.rpm pgdg 12.1.1 773.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.1.0-2PGDG.rhel9.aarch64.rpm pgdg 12.1.0 773.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.1.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-12.0.0-1PGDG.rhel9.aarch64.rpm pgdg 12.0.0 775.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-12.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.3.0-2.rhel9.aarch64.rpm pgdg 11.3.0 759.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.3.0-2.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.2.1-1.rhel9.aarch64.rpm pgdg 11.2.1 738.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.2.0-1.rhel9.aarch64.rpm pgdg 11.2.0 737.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.5-1.rhel9.aarch64.rpm pgdg 11.1.5 726.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.4-1.rhel9.aarch64.rpm pgdg 11.1.4 724.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.3-1.rhel9.aarch64.rpm pgdg 11.1.3 724.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.3-1.rhel9.aarch64.rpm
@ el9.aarch64 15 citus_15 citus_15-11.1.2-1.rhel9.aarch64.rpm pgdg 11.1.2 724.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/citus_15-11.1.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.2.0-1PGDG.rhel10.x86_64.rpm pgdg 13.2.0 858.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.1.0-1PGDG.rhel10.x86_64.rpm pgdg 13.1.0 837.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.0.4-1PGDG.rhel10.x86_64.rpm pgdg 13.0.4 818.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.0.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 citus_15 citus_15-13.0.3-1PGDG.rhel10.x86_64.rpm pgdg 13.0.3 818.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/citus_15-13.0.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.2.0-1PGDG.rhel10.aarch64.rpm pgdg 13.2.0 826.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.1.0-1PGDG.rhel10.aarch64.rpm pgdg 13.1.0 805.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.0.4-1PGDG.rhel10.aarch64.rpm pgdg 13.0.4 787.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.0.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 citus_15 citus_15-13.0.3-1PGDG.rhel10.aarch64.rpm pgdg 13.0.3 787.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/citus_15-13.0.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~bookworm_amd64.deb pigsty 13.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~bookworm_arm64.deb pigsty 13.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~trixie_amd64.deb pigsty 13.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~trixie_arm64.deb pigsty 13.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~jammy_amd64.deb pigsty 13.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~jammy_arm64.deb pigsty 13.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~noble_amd64.deb pigsty 13.2.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-citus postgresql-15-citus_13.2.0-8PIGSTY~noble_arm64.deb pigsty 13.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-15-citus_13.2.0-8PIGSTY~noble_arm64.deb
@ el8.x86_64 14 citus_14 citus_14-13.0.0-1PGDG.rhel8.x86_64.rpm pgdg 13.0.0 814.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-13.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.6-1PGDG.rhel8.x86_64.rpm pgdg 12.1.6 813.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.5-1PGDG.rhel8.x86_64.rpm pgdg 12.1.5 812.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.4-1PGDG.rhel8.x86_64.rpm pgdg 12.1.4 812.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.3-1PGDG.rhel8.x86_64.rpm pgdg 12.1.3 812.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.2-1PGDG.rhel8.x86_64.rpm pgdg 12.1.2 811.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.1-1PGDG.rhel8.x86_64.rpm pgdg 12.1.1 811.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.1.0-2PGDG.rhel8.x86_64.rpm pgdg 12.1.0 810.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-12.0.0-1PGDG.rhel8.x86_64.rpm pgdg 12.0.0 813.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-12.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.3.0-2.rhel8.x86_64.rpm pgdg 11.3.0 796.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.3.0-2.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.2.1-1.rhel8.x86_64.rpm pgdg 11.2.1 776.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.2.0-1.rhel8.x86_64.rpm pgdg 11.2.0 776.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.5-1.rhel8.x86_64.rpm pgdg 11.1.5 765.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.4-1.rhel8.x86_64.rpm pgdg 11.1.4 765.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.3-1.rhel8.x86_64.rpm pgdg 11.1.3 765.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.2-1.rhel8.x86_64.rpm pgdg 11.1.2 764.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.1.1-1.rhel8.x86_64.rpm pgdg 11.1.1 762.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.6-1.rhel8.x86_64.rpm pgdg 11.0.6 701.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.5-1.rhel8.x86_64.rpm pgdg 11.0.5 700.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.4-1.rhel8.x86_64.rpm pgdg 11.0.4 699.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.3-1.rhel8.x86_64.rpm pgdg 11.0.3 699.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-11.0.2-1.rhel8.x86_64.rpm pgdg 11.0.2 698.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-11.0.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.5-1.rhel8.x86_64.rpm pgdg 10.2.5 618.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.4-1.rhel8.x86_64.rpm pgdg 10.2.4 618.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.3-1.rhel8.x86_64.rpm pgdg 10.2.3 618.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.2-1.rhel8.x86_64.rpm pgdg 10.2.2 615.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.1-1.rhel8.x86_64.rpm pgdg 10.2.1 614.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 citus_14 citus_14-10.2.0-1.rhel8.x86_64.rpm pgdg 10.2.0 614.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/citus_14-10.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 citus_14 citus_14-13.0.0-1PGDG.rhel8.aarch64.rpm pgdg 13.0.0 765.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-13.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.6-1PGDG.rhel8.aarch64.rpm pgdg 12.1.6 764.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.5-1PGDG.rhel8.aarch64.rpm pgdg 12.1.5 763.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.4-1PGDG.rhel8.aarch64.rpm pgdg 12.1.4 763.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.3-1PGDG.rhel8.aarch64.rpm pgdg 12.1.3 763.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.2-1PGDG.rhel8.aarch64.rpm pgdg 12.1.2 762.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.1-1PGDG.rhel8.aarch64.rpm pgdg 12.1.1 762.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.1.0-2PGDG.rhel8.aarch64.rpm pgdg 12.1.0 761.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.1.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-12.0.0-1PGDG.rhel8.aarch64.rpm pgdg 12.0.0 763.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-12.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.3.0-2.rhel8.aarch64.rpm pgdg 11.3.0 748.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.3.0-2.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.2.1-1.rhel8.aarch64.rpm pgdg 11.2.1 729.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.2.0-1.rhel8.aarch64.rpm pgdg 11.2.0 729.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.1.5-1.rhel8.aarch64.rpm pgdg 11.1.5 718.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.1.4-1.rhel8.aarch64.rpm pgdg 11.1.4 717.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 citus_14 citus_14-11.1.3-1.rhel8.aarch64.rpm pgdg 11.1.3 717.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/citus_14-11.1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 citus_14 citus_14-13.0.0-1PGDG.rhel9.x86_64.rpm pgdg 13.0.0 803.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-13.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.6-1PGDG.rhel9.x86_64.rpm pgdg 12.1.6 802.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.5-1PGDG.rhel9.x86_64.rpm pgdg 12.1.5 800.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.4-1PGDG.rhel9.x86_64.rpm pgdg 12.1.4 800.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.3-1PGDG.rhel9.x86_64.rpm pgdg 12.1.3 800.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.2-1PGDG.rhel9.x86_64.rpm pgdg 12.1.2 798.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.1-1PGDG.rhel9.x86_64.rpm pgdg 12.1.1 798.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.1.0-2PGDG.rhel9.x86_64.rpm pgdg 12.1.0 798.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-12.0.0-1PGDG.rhel9.x86_64.rpm pgdg 12.0.0 802.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-12.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.3.0-2.rhel9.x86_64.rpm pgdg 11.3.0 787.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.3.0-2.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.2.1-1.rhel9.x86_64.rpm pgdg 11.2.1 767.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.2.0-1.rhel9.x86_64.rpm pgdg 11.2.0 766.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.5-1.rhel9.x86_64.rpm pgdg 11.1.5 756.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.4-1.rhel9.x86_64.rpm pgdg 11.1.4 755.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.3-1.rhel9.x86_64.rpm pgdg 11.1.3 755.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.2-1.rhel9.x86_64.rpm pgdg 11.1.2 755.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.1.1-1.rhel9.x86_64.rpm pgdg 11.1.1 754.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.1.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.6-1.rhel9.x86_64.rpm pgdg 11.0.6 691.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.6-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.5-1.rhel9.x86_64.rpm pgdg 11.0.5 690.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.4-1.rhel9.x86_64.rpm pgdg 11.0.4 690.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.3-1.rhel9.x86_64.rpm pgdg 11.0.3 689.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-11.0.2-1.rhel9.x86_64.rpm pgdg 11.0.2 689.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-11.0.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-10.2.5-1.rhel9.x86_64.rpm pgdg 10.2.5 612.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-10.2.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-10.2.4-1.rhel9.x86_64.rpm pgdg 10.2.4 613.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-10.2.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 citus_14 citus_14-10.2.3-1.rhel9.x86_64.rpm pgdg 10.2.3 613.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/citus_14-10.2.3-1.rhel9.x86_64.rpm
@ el9.aarch64 14 citus_14 citus_14-13.0.0-1PGDG.rhel9.aarch64.rpm pgdg 13.0.0 771.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-13.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.6-1PGDG.rhel9.aarch64.rpm pgdg 12.1.6 770.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.5-1PGDG.rhel9.aarch64.rpm pgdg 12.1.5 770.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.4-1PGDG.rhel9.aarch64.rpm pgdg 12.1.4 770.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.3-1PGDG.rhel9.aarch64.rpm pgdg 12.1.3 768.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.2-1PGDG.rhel9.aarch64.rpm pgdg 12.1.2 766.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.1-1PGDG.rhel9.aarch64.rpm pgdg 12.1.1 766.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.1.0-2PGDG.rhel9.aarch64.rpm pgdg 12.1.0 766.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.1.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-12.0.0-1PGDG.rhel9.aarch64.rpm pgdg 12.0.0 769.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-12.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.3.0-2.rhel9.aarch64.rpm pgdg 11.3.0 754.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.3.0-2.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.2.1-1.rhel9.aarch64.rpm pgdg 11.2.1 736.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.2.0-1.rhel9.aarch64.rpm pgdg 11.2.0 735.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.1.5-1.rhel9.aarch64.rpm pgdg 11.1.5 724.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.1.4-1.rhel9.aarch64.rpm pgdg 11.1.4 723.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 citus_14 citus_14-11.1.3-1.rhel9.aarch64.rpm pgdg 11.1.3 723.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/citus_14-11.1.3-1.rhel9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~bookworm_amd64.deb pigsty 13.0.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~bookworm_arm64.deb pigsty 13.0.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~jammy_amd64.deb pigsty 13.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~jammy_arm64.deb pigsty 13.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~noble_amd64.deb pigsty 13.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-citus postgresql-14-citus_13.0.0-1PIGSTY~noble_arm64.deb pigsty 13.0.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/citus/postgresql-14-citus_13.0.0-1PIGSTY~noble_arm64.deb
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

来源：

- [Citus v14.1.0 release](https://github.com/citusdata/citus/releases/tag/v14.1.0)
- [Citus v14.1.0 CHANGELOG](https://github.com/citusdata/citus/blob/v14.1.0/CHANGELOG.md)
- [What is Citus?](https://docs.citusdata.com/en/stable/get_started/what_is_citus.html)
- [Citus Utility Functions](https://docs.citusdata.com/en/stable/develop/api_udf.html)
- [本地包元数据](../db/extension.csv)

Citus 通过把表分片到多个 worker 节点，把 PostgreSQL 扩展成分布式数据库，同时保留 PostgreSQL SQL、索引、扩展、事务和运维工具作为主要使用界面。它常用于多租户 SaaS、实时分析、时间序列/事件数据和分布式微服务 schema。

Pigsty 本地 catalog 中包名和主扩展名都是 `citus`；同一个包还包含 `citus_columnar`。Citus 是 preload 扩展，每个节点都需要先加载库，再创建扩展。

### 启用 Citus

```conf
shared_preload_libraries = 'citus'
```

在 coordinator 和 worker 上重启 PostgreSQL，然后在数据库中创建扩展：

```sql
CREATE EXTENSION IF NOT EXISTS citus;
SELECT citus_version();
```

多节点集群中，在 coordinator 上注册 coordinator 与 worker：

```sql
SELECT citus_set_coordinator_host('coord-1', 5432);
SELECT * FROM citus_add_node('worker-1', 5432);
SELECT * FROM citus_add_node('worker-2', 5432);

SELECT * FROM citus_get_active_worker_nodes();
```

### 分布式表

分布式表通过分片键分布。相同分片键值的行会协同定位到同一个 shard，因此租户内 join 和点查可以保持本地执行。

```sql
CREATE TABLE events (
  tenant_id  bigint,
  event_id   bigserial,
  event_at   timestamptz DEFAULT now(),
  kind       text,
  payload    jsonb,
  PRIMARY KEY (tenant_id, event_id)
);

SELECT create_distributed_table('events', 'tenant_id');
```

也可以显式设置 shard 数量和 colocation：

```sql
SELECT create_distributed_table(
  'events',
  'tenant_id',
  shard_count  := 64,
  colocate_with := 'default'
);
```

带分布列过滤的查询可以路由到单个 shard：

```sql
SELECT *
FROM events
WHERE tenant_id = 42
ORDER BY event_at DESC
LIMIT 50;
```

跨 shard 查询会被规划为分布式任务，在 worker 上并行执行：

```sql
SELECT kind, count(*)
FROM events
WHERE event_at >= now() - interval '1 hour'
GROUP BY kind
ORDER BY count DESC;
```

### 引用表

引用表会完整复制到所有 worker，适合需要和多个分布式表 join 的小型维表。

```sql
CREATE TABLE countries (
  code text PRIMARY KEY,
  name text NOT NULL
);

SELECT create_reference_table('countries');
```

### 基于 Schema 的分片

当每个租户或服务拥有独立 schema 时，可以使用 schema-based sharding。Citus v14.1.0 增加了从任意节点执行多类 schema 分片 DDL 的支持，包括 `CREATE SCHEMA`、`DROP SCHEMA`、`ALTER SCHEMA RENAME`、`ALTER SCHEMA OWNER`，以及分布式 schema 内的表级 DDL。

```sql
CREATE SCHEMA tenant_42;
SELECT citus_schema_distribute('tenant_42');

CREATE TABLE tenant_42.orders (
  id bigserial PRIMARY KEY,
  amount numeric,
  created_at timestamptz DEFAULT now()
);
```

共享表通常使用行分布模型；每租户 schema 布局可以使用 schema 分片。不要在没有检查 colocation 和 SQL 支持限制的情况下随意混用两种模型。

### 节点与 Shard 运维

```sql
-- 添加或禁用节点。
SELECT * FROM citus_add_node('worker-3', 5432);
SELECT * FROM citus_disable_node('worker-2', 5432);
SELECT * FROM citus_activate_node('worker-2', 5432);

-- 排空并移除节点。
SELECT * FROM citus_drain_node('worker-1', 5432);
SELECT * FROM citus_remove_node('worker-1', 5432);

-- 重平衡 shard。
SELECT citus_rebalance_start();
SELECT * FROM citus_rebalance_status();
SELECT rebalance_table_shards('events');

-- 查看表和 shard。
SELECT * FROM citus_tables;
SELECT * FROM citus_shards;
```

### 备份协调

Citus v14.1.0 增加了用于临时阻塞分布式 2PC 提交决策以及 schema/topology 变更的 UDF，方便在协调磁盘快照时获得一致性窗口。它们只应该出现在受控备份流程里，快照步骤结束后必须解除阻塞。

```sql
SELECT citus_cluster_changes_block();
SELECT * FROM citus_cluster_changes_block_status();

-- 此处执行协调后的文件系统或卷快照。

SELECT citus_cluster_changes_unblock();
```

这些函数仍然需要配合常规 PostgreSQL 备份纪律：一致 checkpoint、WAL 归档、跨节点快照顺序，以及经过验证的恢复流程。

### 注意事项

- Pigsty 本地元数据当前跟踪 PostgreSQL 16-18 上的 Citus 14.x；Citus 14 已移除 PostgreSQL 15 支持。
- 创建扩展前必须设置 `shared_preload_libraries = 'citus'`。新实例上单纯执行 `CREATE EXTENSION citus` 不够。
- 分布列选择很关键。分布式表上的主键和唯一约束通常需要包含分布列。
- 跨 shard join、repartition join、分布式 DDL 和多 shard 写入虽然强大，但规划、锁和失败语义都不同于单机 PostgreSQL。
- Citus 通过 `citus_columnar` 提供自己的列式存储界面；Pigsty 元数据中它与 Hydra `columnar` 冲突。
- cluster-change blocking 函数是备份运维工具。备份脚本失败后不要让集群长期保持阻塞状态。
