---
title: "pg_bulkload"
linkTitle: "pg_bulkload"
description: "向 PostgreSQL 中高速加载数据"
weight: 9830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ossc-db/pg_bulkload">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ossc-db/pg_bulkload</div>
    <div class="ext-card__desc">https://github.com/ossc-db/pg_bulkload</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_bulkload-VERSION3_1_23.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_bulkload-VERSION3_1_23.tar.gz</div>
    <div class="ext-card__desc">pg_bulkload-VERSION3_1_23.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_bulkload`**](/ext/e/pg_bulkload) | `3.1.23` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9830  | [**`pg_bulkload`**](/ext/e/pg_bulkload) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`file_fdw`](/ext/e/file_fdw) [`aws_s3`](/ext/e/aws_s3) [`db_migrator`](/ext/e/db_migrator) [`pg_fact_loader`](/ext/e/pg_fact_loader) [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`pglogical`](/ext/e/pglogical) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg18 fixed by vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.23` | {{< pgvers "18,17,16,15,14" >}} | `pg_bulkload` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.1.23` | {{< pgvers "18,17,16,15,14" >}} | `pg_bulkload_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.23` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-bulkload` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 3 | AVAIL PIGSTY 3.1.23 4 |
| el8.aarch64 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 3 | AVAIL PIGSTY 3.1.23 4 |
| el9.x86_64 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 |
| el9.aarch64 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 3 | AVAIL PIGSTY 3.1.23 4 |
| el10.x86_64 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 |
| el10.aarch64 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 | AVAIL PIGSTY 3.1.23 2 |
| d12.x86_64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| d12.aarch64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| d13.x86_64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| d13.aarch64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| u22.x86_64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| u22.aarch64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| u24.x86_64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
| u24.aarch64 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 | AVAIL PIGSTY 3.1.23 1 |
@ el8.x86_64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PIGSTY.el8.x86_64.rpm pigsty 3.1.23 65.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bulkload_18-3.1.23-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PGDG.rhel8.10.x86_64.rpm pgdg 3.1.23 68.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_bulkload_18-3.1.23-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PIGSTY.el8.aarch64.rpm pigsty 3.1.23 60.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bulkload_18-3.1.23-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PGDG.rhel8.10.aarch64.rpm pgdg 3.1.23 63.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_bulkload_18-3.1.23-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PIGSTY.el9.x86_64.rpm pigsty 3.1.23 61.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bulkload_18-3.1.23-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PGDG.rhel9.7.x86_64.rpm pgdg 3.1.23 62.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_bulkload_18-3.1.23-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PIGSTY.el9.aarch64.rpm pigsty 3.1.23 58.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bulkload_18-3.1.23-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PGDG.rhel9.7.aarch64.rpm pgdg 3.1.23 59.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_bulkload_18-3.1.23-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PIGSTY.el10.x86_64.rpm pigsty 3.1.23 62.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bulkload_18-3.1.23-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PGDG.rhel10.1.x86_64.rpm pgdg 3.1.23 63.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_bulkload_18-3.1.23-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PIGSTY.el10.aarch64.rpm pigsty 3.1.23 59.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bulkload_18-3.1.23-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_bulkload_18 pg_bulkload_18-3.1.23-1PGDG.rhel10.1.aarch64.rpm pgdg 3.1.23 60.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_bulkload_18-3.1.23-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb pigsty 3.1.23 238.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb pigsty 3.1.23 230.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb pigsty 3.1.23 240.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb pigsty 3.1.23 232.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb pigsty 3.1.23 250.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb pigsty 3.1.23 244.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb pigsty 3.1.23 240.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-bulkload postgresql-18-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb pigsty 3.1.23 237.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-18-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_bulkload_17 pg_bulkload_17-3.1.23-1PIGSTY.el8.x86_64.rpm pigsty 3.1.23 64.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bulkload_17-3.1.23-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_bulkload_17 pg_bulkload_17-3.1.23-1PIGSTY.el8.aarch64.rpm pigsty 3.1.23 60.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bulkload_17-3.1.23-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_bulkload_17 pg_bulkload_17-3.1.23-1PIGSTY.el9.x86_64.rpm pigsty 3.1.23 61.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bulkload_17-3.1.23-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_bulkload_17 pg_bulkload_17-3.1.23-1PIGSTY.el9.aarch64.rpm pigsty 3.1.23 58.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bulkload_17-3.1.23-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_bulkload_17 pg_bulkload_17-3.1.23-1PIGSTY.el10.x86_64.rpm pigsty 3.1.23 62.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bulkload_17-3.1.23-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_bulkload_17 pg_bulkload_17-3.1.22-2PGDG.rhel10.x86_64.rpm pgdg 3.1.22 63.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_bulkload_17-3.1.22-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_bulkload_17 pg_bulkload_17-3.1.23-1PIGSTY.el10.aarch64.rpm pigsty 3.1.23 59.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bulkload_17-3.1.23-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_bulkload_17 pg_bulkload_17-3.1.22-2PGDG.rhel10.aarch64.rpm pgdg 3.1.22 60.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_bulkload_17-3.1.22-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb pigsty 3.1.23 237.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb pigsty 3.1.23 229.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb pigsty 3.1.23 239.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb pigsty 3.1.23 231.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb pigsty 3.1.23 297.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb pigsty 3.1.23 291.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb pigsty 3.1.23 240.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-bulkload postgresql-17-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb pigsty 3.1.23 236.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-17-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_bulkload_16 pg_bulkload_16-3.1.23-1PIGSTY.el8.x86_64.rpm pigsty 3.1.23 65.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bulkload_16-3.1.23-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_bulkload_16 pg_bulkload_16-3.1.21-1PGDG.rhel8.x86_64.rpm pgdg 3.1.21 76.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_bulkload_16-3.1.21-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_bulkload_16 pg_bulkload_16-3.1.23-1PIGSTY.el8.aarch64.rpm pigsty 3.1.23 60.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bulkload_16-3.1.23-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_bulkload_16 pg_bulkload_16-3.1.21-1PGDG.rhel8.aarch64.rpm pgdg 3.1.21 71.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_bulkload_16-3.1.21-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_bulkload_16 pg_bulkload_16-3.1.23-1PIGSTY.el9.x86_64.rpm pigsty 3.1.23 61.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bulkload_16-3.1.23-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_bulkload_16 pg_bulkload_16-3.1.21-1PGDG.rhel9.x86_64.rpm pgdg 3.1.21 69.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_bulkload_16-3.1.21-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_bulkload_16 pg_bulkload_16-3.1.23-1PIGSTY.el9.aarch64.rpm pigsty 3.1.23 58.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bulkload_16-3.1.23-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_bulkload_16 pg_bulkload_16-3.1.21-1PGDG.rhel9.aarch64.rpm pgdg 3.1.21 66.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_bulkload_16-3.1.21-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_bulkload_16 pg_bulkload_16-3.1.23-1PIGSTY.el10.x86_64.rpm pigsty 3.1.23 62.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bulkload_16-3.1.23-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_bulkload_16 pg_bulkload_16-3.1.22-2PGDG.rhel10.x86_64.rpm pgdg 3.1.22 63.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_bulkload_16-3.1.22-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_bulkload_16 pg_bulkload_16-3.1.23-1PIGSTY.el10.aarch64.rpm pigsty 3.1.23 59.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bulkload_16-3.1.23-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_bulkload_16 pg_bulkload_16-3.1.22-2PGDG.rhel10.aarch64.rpm pgdg 3.1.22 60.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_bulkload_16-3.1.22-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb pigsty 3.1.23 239.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb pigsty 3.1.23 230.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb pigsty 3.1.23 240.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb pigsty 3.1.23 231.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb pigsty 3.1.23 295.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb pigsty 3.1.23 289.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb pigsty 3.1.23 241.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-bulkload postgresql-16-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb pigsty 3.1.23 236.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-16-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.23-1PIGSTY.el8.x86_64.rpm pigsty 3.1.23 65.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bulkload_15-3.1.23-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.21-1PGDG.rhel8.x86_64.rpm pgdg 3.1.21 76.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_bulkload_15-3.1.21-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.20-1.rhel8.x86_64.rpm pgdg 3.1.20 76.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_bulkload_15-3.1.20-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.23-1PIGSTY.el8.aarch64.rpm pigsty 3.1.23 60.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bulkload_15-3.1.23-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.21-1PGDG.rhel8.aarch64.rpm pgdg 3.1.21 71.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_bulkload_15-3.1.21-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.20-1.rhel8.aarch64.rpm pgdg 3.1.20 71.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_bulkload_15-3.1.20-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.23-1PIGSTY.el9.x86_64.rpm pigsty 3.1.23 61.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bulkload_15-3.1.23-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.21-1PGDG.rhel9.x86_64.rpm pgdg 3.1.21 69.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_bulkload_15-3.1.21-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.23-1PIGSTY.el9.aarch64.rpm pigsty 3.1.23 58.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bulkload_15-3.1.23-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.21-1PGDG.rhel9.aarch64.rpm pgdg 3.1.21 66.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_bulkload_15-3.1.21-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.20-1.rhel9.aarch64.rpm pgdg 3.1.20 67.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_bulkload_15-3.1.20-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.23-1PIGSTY.el10.x86_64.rpm pigsty 3.1.23 62.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bulkload_15-3.1.23-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_bulkload_15 pg_bulkload_15-3.1.22-2PGDG.rhel10.x86_64.rpm pgdg 3.1.22 63.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_bulkload_15-3.1.22-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.23-1PIGSTY.el10.aarch64.rpm pigsty 3.1.23 59.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bulkload_15-3.1.23-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_bulkload_15 pg_bulkload_15-3.1.22-2PGDG.rhel10.aarch64.rpm pgdg 3.1.22 60.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_bulkload_15-3.1.22-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb pigsty 3.1.23 239.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb pigsty 3.1.23 230.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb pigsty 3.1.23 240.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb pigsty 3.1.23 232.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb pigsty 3.1.23 296.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb pigsty 3.1.23 291.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb pigsty 3.1.23 241.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-bulkload postgresql-15-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb pigsty 3.1.23 237.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-15-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.23-1PIGSTY.el8.x86_64.rpm pigsty 3.1.23 64.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bulkload_14-3.1.23-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.21-1PGDG.rhel8.x86_64.rpm pgdg 3.1.21 76.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_bulkload_14-3.1.21-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.20-1.rhel8.x86_64.rpm pgdg 3.1.20 76.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_bulkload_14-3.1.20-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.19-1.rhel8.x86_64.rpm pgdg 3.1.19 265.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_bulkload_14-3.1.19-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.23-1PIGSTY.el8.aarch64.rpm pigsty 3.1.23 60.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bulkload_14-3.1.23-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.21-1PGDG.rhel8.aarch64.rpm pgdg 3.1.21 71.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_bulkload_14-3.1.21-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.20-1.rhel8.aarch64.rpm pgdg 3.1.20 71.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_bulkload_14-3.1.20-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.19-2.rhel8.aarch64.rpm pgdg 3.1.19 71.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_bulkload_14-3.1.19-2.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.23-1PIGSTY.el9.x86_64.rpm pigsty 3.1.23 61.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bulkload_14-3.1.23-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.21-1PGDG.rhel9.x86_64.rpm pgdg 3.1.21 69.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_bulkload_14-3.1.21-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.23-1PIGSTY.el9.aarch64.rpm pigsty 3.1.23 58.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bulkload_14-3.1.23-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.21-1PGDG.rhel9.aarch64.rpm pgdg 3.1.21 66.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_bulkload_14-3.1.21-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.20-1.rhel9.aarch64.rpm pgdg 3.1.20 67.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_bulkload_14-3.1.20-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.19-2.rhel9.aarch64.rpm pgdg 3.1.19 67.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_bulkload_14-3.1.19-2.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.23-1PIGSTY.el10.x86_64.rpm pigsty 3.1.23 62.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bulkload_14-3.1.23-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_bulkload_14 pg_bulkload_14-3.1.22-2PGDG.rhel10.x86_64.rpm pgdg 3.1.22 63.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_bulkload_14-3.1.22-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.23-1PIGSTY.el10.aarch64.rpm pigsty 3.1.23 59.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bulkload_14-3.1.23-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_bulkload_14 pg_bulkload_14-3.1.22-2PGDG.rhel10.aarch64.rpm pgdg 3.1.22 60.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_bulkload_14-3.1.22-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb pigsty 3.1.23 238.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb pigsty 3.1.23 230.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb pigsty 3.1.23 239.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb pigsty 3.1.23 231.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb pigsty 3.1.23 295.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb pigsty 3.1.23 289.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb pigsty 3.1.23 240.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-bulkload postgresql-14-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb pigsty 3.1.23 235.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bulkload/postgresql-14-pg-bulkload_3.1.23-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_bulkload` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_bulkload         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_bulkload` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_bulkload;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_bulkload -v 18  # PG 18
pig ext install -y pg_bulkload -v 17  # PG 17
pig ext install -y pg_bulkload -v 16  # PG 16
pig ext install -y pg_bulkload -v 15  # PG 15
pig ext install -y pg_bulkload -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_bulkload_18       # PG 18
dnf install -y pg_bulkload_17       # PG 17
dnf install -y pg_bulkload_16       # PG 16
dnf install -y pg_bulkload_15       # PG 15
dnf install -y pg_bulkload_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-bulkload   # PG 18
apt install -y postgresql-17-pg-bulkload   # PG 17
apt install -y postgresql-16-pg-bulkload   # PG 16
apt install -y postgresql-15-pg-bulkload   # PG 15
apt install -y postgresql-14-pg-bulkload   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_bulkload;
```
