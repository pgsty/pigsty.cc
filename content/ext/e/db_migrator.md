---
title: "db_migrator"
linkTitle: "db_migrator"
description: "使用FDW从其他DBMS迁移到PostgreSQL"
weight: 9550
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/db_migrator">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/db_migrator</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/db_migrator</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/db_migrator-RELEASE_1_0_0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">db_migrator-RELEASE_1_0_0.tar.gz</div>
    <div class="ext-card__desc">db_migrator-RELEASE_1_0_0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`db_migrator`**](/ext/e/db_migrator) | `1.0.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9550  | [**`db_migrator`**](/ext/e/db_migrator) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`orafce`](/ext/e/orafce) [`pg_bulkload`](/ext/e/pg_bulkload) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`pgtt`](/ext/e/pgtt) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `db_migrator` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `db_migrator_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-db-migrator` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 db_migrator_18 db_migrator_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db_migrator_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 db_migrator_18 db_migrator_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db_migrator_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 db_migrator_18 db_migrator_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db_migrator_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 db_migrator_18 db_migrator_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db_migrator_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 db_migrator_18 db_migrator_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db_migrator_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 db_migrator_18 db_migrator_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db_migrator_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-db-migrator postgresql-18-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-18-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 db_migrator_17 db_migrator_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db_migrator_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 db_migrator_17 db_migrator_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db_migrator_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 db_migrator_17 db_migrator_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db_migrator_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 db_migrator_17 db_migrator_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db_migrator_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 db_migrator_17 db_migrator_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db_migrator_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 db_migrator_17 db_migrator_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db_migrator_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-db-migrator postgresql-17-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-17-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 db_migrator_16 db_migrator_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db_migrator_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 db_migrator_16 db_migrator_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db_migrator_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 db_migrator_16 db_migrator_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db_migrator_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 db_migrator_16 db_migrator_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db_migrator_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 db_migrator_16 db_migrator_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db_migrator_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 db_migrator_16 db_migrator_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db_migrator_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-db-migrator postgresql-16-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-16-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 db_migrator_15 db_migrator_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db_migrator_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 db_migrator_15 db_migrator_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db_migrator_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 db_migrator_15 db_migrator_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db_migrator_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 db_migrator_15 db_migrator_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db_migrator_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 db_migrator_15 db_migrator_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db_migrator_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 db_migrator_15 db_migrator_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db_migrator_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-db-migrator postgresql-15-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-15-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 db_migrator_14 db_migrator_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db_migrator_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 db_migrator_14 db_migrator_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db_migrator_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 db_migrator_14 db_migrator_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db_migrator_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 db_migrator_14 db_migrator_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db_migrator_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 db_migrator_14 db_migrator_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db_migrator_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 db_migrator_14 db_migrator_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db_migrator_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-db-migrator postgresql-14-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/db-migrator/postgresql-14-db-migrator_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `db_migrator` 扩展的 RPM / DEB 包：

```bash
pig build pkg db_migrator         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `db_migrator` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install db_migrator;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y db_migrator -v 18  # PG 18
pig ext install -y db_migrator -v 17  # PG 17
pig ext install -y db_migrator -v 16  # PG 16
pig ext install -y db_migrator -v 15  # PG 15
pig ext install -y db_migrator -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y db_migrator_18       # PG 18
dnf install -y db_migrator_17       # PG 17
dnf install -y db_migrator_16       # PG 16
dnf install -y db_migrator_15       # PG 15
dnf install -y db_migrator_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-db-migrator   # PG 18
apt install -y postgresql-17-db-migrator   # PG 17
apt install -y postgresql-16-db-migrator   # PG 16
apt install -y postgresql-15-db-migrator   # PG 15
apt install -y postgresql-14-db-migrator   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION db_migrator;
```



## 用法

> [db_migrator: 将其他数据库迁移到 PostgreSQL 的工具](https://github.com/cybertec-postgresql/db_migrator)

使用外部数据包装器和特定源插件将数据库从其他数据源迁移到 PostgreSQL 的框架。

### 启用

```sql
CREATE EXTENSION db_migrator;
```

### 可用插件

- **ora_migrator** - Oracle 迁移
- **mysql_migrator** - MySQL/MariaDB 迁移
- **mssql_migrator** - Microsoft SQL Server 迁移

### 完整迁移示例（Oracle）

```sql
-- 设置（以超级用户身份）
CREATE EXTENSION oracle_fdw;
CREATE SERVER oracle FOREIGN DATA WRAPPER oracle_fdw
    OPTIONS (dbserver '//dbserver.mydomain.com/ORADB');
GRANT USAGE ON FOREIGN SERVER oracle TO migrator;
CREATE USER MAPPING FOR migrator SERVER oracle
    OPTIONS (user 'orauser', password 'orapwd');

-- 迁移（以 migrator 用户身份）
CREATE EXTENSION ora_migrator;

SELECT db_migrate(
    plugin => 'ora_migrator',
    server => 'oracle',
    only_schemas => '{TESTSCHEMA1,TESTSCHEMA2}'
);
```

### 分步迁移

需要更多控制时，按阶段执行迁移：

```sql
-- 1. 创建暂存模式并快照元数据
SELECT db_migrate_prepare(
    plugin => 'ora_migrator',
    server => 'oracle',
    only_schemas => '{SCHEMA1}'
);

-- 2. 审查和修改暂存数据
-- 编辑 pgsql_stage 表以自定义类型映射、重命名对象等。
UPDATE pgsql_stage.tables SET migrate = TRUE WHERE ...;

-- 3. 创建模式并迁移数据
SELECT db_migrate_mkforeign(plugin => 'ora_migrator', server => 'oracle');
SELECT db_migrate_tables(plugin => 'ora_migrator');

-- 4. 创建约束和索引
SELECT db_migrate_constraints(plugin => 'ora_migrator');
SELECT db_migrate_indexes(plugin => 'ora_migrator');

-- 5. 清理
SELECT db_migrate_finish();
```

### 关键特性

- 迁移表、序列、索引、约束、视图、函数
- 从源到 PostgreSQL 类型的数据类型映射（可自定义）
- 遇到错误时继续执行，报告哪些对象失败
- 使用 FDW 暂存模式在迁移前检查元数据
- 通过插件函数进行模式和对象名称转换
