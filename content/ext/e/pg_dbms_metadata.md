---
title: "pg_dbms_metadata"
linkTitle: "pg_dbms_metadata"
description: "添加 Oracle DBMS_METADATA 兼容性支持的扩展"
weight: 9240
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HexaCluster/pg_dbms_metadata">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HexaCluster/pg_dbms_metadata</div>
    <div class="ext-card__desc">https://github.com/HexaCluster/pg_dbms_metadata</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_dbms_metadata-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_dbms_metadata-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_dbms_metadata-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dbms_metadata`**](/ext/e/pg_dbms_metadata) | `1.1.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9240  | [**`pg_dbms_metadata`**](/ext/e/pg_dbms_metadata) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `dbms_metadata` |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_get_functiondef`](/ext/e/pg_get_functiondef) [`ddlx`](/ext/e/ddlx) [`orafce`](/ext/e/orafce) [`pg_readme`](/ext/e/pg_readme) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_dbms_job`](/ext/e/pg_dbms_job) [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) [`pg_utl_smtp`](/ext/e/pg_utl_smtp) [`pgdd`](/ext/e/pgdd) [`meta`](/ext/e/meta) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG RPM lacks PG15 on EL8 aarch64; PIGSTY DEB covers PG14-18 on amd64 and arm64.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.1.0` | {{< pgvers "19,18,17,16,15" >}} | `pg_dbms_metadata` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.0` | {{< pgvers "19,18,17,16,15" >}} | `pg_dbms_metadata_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-dbms-metadata` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 1.1.0 3 | AVAIL PGDG 1.1.0 3 | AVAIL PGDG 1.1.0 3 | AVAIL PGDG 1.1.0 3 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 1.1.0 3 | AVAIL PGDG 1.1.0 3 | AVAIL PGDG 1.1.0 3 | AVAIL PGDG 1.1.0 3 |
| el9.x86_64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| el9.aarch64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| el10.x86_64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| el10.aarch64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 5 | AVAIL PGDG 1.1.0 5 | AVAIL PGDG 1.1.0 5 | AVAIL PGDG 1.1.0 5 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el9.x86_64 19 pg_dbms_metadata_19 pg_dbms_metadata_19-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/pg_dbms_metadata_19-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 19 pg_dbms_metadata_19 pg_dbms_metadata_19-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/pg_dbms_metadata_19-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el10.x86_64 19 pg_dbms_metadata_19 pg_dbms_metadata_19-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/pg_dbms_metadata_19-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 19 pg_dbms_metadata_19 pg_dbms_metadata_19-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/pg_dbms_metadata_19-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ d12.x86_64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 19 postgresql-19-pg-dbms-metadata postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-19-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_metadata_18-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-2PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_metadata_18-1.0.0-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_metadata_18-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-2PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_metadata_18-1.0.0-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el10.x86_64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.1.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_metadata_18-1.1.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-5PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_metadata_18-1.0.0-5PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-2PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_metadata_18-1.0.0-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_dbms_metadata_18 pg_dbms_metadata_18-1.0.0-2PGDG.rhel10.noarch.rpm pgdg 1.0.0 17.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_metadata_18-1.0.0-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-dbms-metadata postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-18-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_metadata_17-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_metadata_17-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_metadata_17-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_metadata_17-1.0.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el10.x86_64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.1.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_metadata_17-1.1.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-5PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_metadata_17-1.0.0-5PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-2PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_metadata_17-1.0.0-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_dbms_metadata_17 pg_dbms_metadata_17-1.0.0-2PGDG.rhel10.noarch.rpm pgdg 1.0.0 17.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_metadata_17-1.0.0-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-dbms-metadata postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-17-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_metadata_16-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_metadata_16-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_metadata_16-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_metadata_16-1.0.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el10.x86_64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.1.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_metadata_16-1.1.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-5PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_metadata_16-1.0.0-5PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-2PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_metadata_16-1.0.0-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_dbms_metadata_16 pg_dbms_metadata_16-1.0.0-2PGDG.rhel10.noarch.rpm pgdg 1.0.0 17.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_metadata_16-1.0.0-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-dbms-metadata postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-16-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_metadata_15-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_metadata_15-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.1.0 20.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-5PGDG.rhel8.10.noarch.rpm pgdg 1.0.0 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_dbms_metadata_15-1.0.0-5PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-2PIGSTY.el8.noarch.rpm pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dbms_metadata_15-1.0.0-2PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel9.9.noarch.rpm pgdg 1.1.0 19.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel9.9.noarch.rpm
@ el10.x86_64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel10.3.noarch.rpm pgdg 1.1.0 19.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.1.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.1.0 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_metadata_15-1.1.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-5PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_metadata_15-1.0.0-5PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-2PGDG.rhel10.2.noarch.rpm pgdg 1.0.0 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_metadata_15-1.0.0-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_dbms_metadata_15 pg_dbms_metadata_15-1.0.0-2PGDG.rhel10.noarch.rpm pgdg 1.0.0 17.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_metadata_15-1.0.0-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb pigsty 1.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-dbms-metadata postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb pigsty 1.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-metadata/postgresql-15-pg-dbms-metadata_1.1.0-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_dbms_metadata` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_dbms_metadata         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_dbms_metadata` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_dbms_metadata;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_dbms_metadata -v 19  # PG 19
pig ext install -y pg_dbms_metadata -v 18  # PG 18
pig ext install -y pg_dbms_metadata -v 17  # PG 17
pig ext install -y pg_dbms_metadata -v 16  # PG 16
pig ext install -y pg_dbms_metadata -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_dbms_metadata_19       # PG 19
dnf install -y pg_dbms_metadata_18       # PG 18
dnf install -y pg_dbms_metadata_17       # PG 17
dnf install -y pg_dbms_metadata_16       # PG 16
dnf install -y pg_dbms_metadata_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-dbms-metadata   # PG 19
apt install -y postgresql-18-pg-dbms-metadata   # PG 18
apt install -y postgresql-17-pg-dbms-metadata   # PG 17
apt install -y postgresql-16-pg-dbms-metadata   # PG 16
apt install -y postgresql-15-pg-dbms-metadata   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_dbms_metadata;
```

## 用法

来源：

- [1.1.0 README](https://github.com/HexaCluster/pg_dbms_metadata/blob/v1.1.0/README.md)
- [SQL 定义](https://github.com/HexaCluster/pg_dbms_metadata/blob/v1.1.0/sql/pg_dbms_metadata--1.1.0.sql)
- [升级脚本](https://github.com/HexaCluster/pg_dbms_metadata/blob/v1.1.0/updates/pg_dbms_metadata--1.0.0--1.1.0.sql)
- [发布说明](https://github.com/HexaCluster/pg_dbms_metadata/releases/tag/v1.1.0)

`pg_dbms_metadata` 1.1.0 通过 Oracle 风格的 API 提取 PostgreSQL 对象 DDL。它由 SQL/PL/pgSQL 实现，无需预加载；只实现 GET 系列函数，不提供 Oracle FETCH 或 XML 接口。

### 启用

```sql
CREATE EXTENSION pg_dbms_metadata;
```

### GET_DDL

提取数据库对象的 DDL。支持的类型：TABLE、VIEW、SEQUENCE、PROCEDURE、FUNCTION、TRIGGER、INDEX、CONSTRAINT、CHECK_CONSTRAINT、REF_CONSTRAINT、TYPE、ENUM。

```sql
SELECT dbms_metadata.get_ddl('TABLE', 'employees', 'public');
SELECT dbms_metadata.get_ddl('VIEW', 'active_users', 'myschema');
SELECT dbms_metadata.get_ddl('FUNCTION', 'calculate_tax', 'public');
SELECT dbms_metadata.get_ddl('INDEX', 'idx_name', 'public');

-- Schema is optional; uses search_path when omitted
SELECT dbms_metadata.get_ddl('SEQUENCE', 'my_seq');
```

### GET_DEPENDENT_DDL

提取基础对象的所有指定类型依赖对象的 DDL。支持：SEQUENCE、TRIGGER、CONSTRAINT、REF_CONSTRAINT、INDEX、ENUM。

```sql
SELECT dbms_metadata.get_dependent_ddl('CONSTRAINT', 'employees', 'public');
SELECT dbms_metadata.get_dependent_ddl('INDEX', 'orders', 'sales');
SELECT dbms_metadata.get_dependent_ddl('TRIGGER', 'accounts');
```

### GET_GRANTED_DDL

提取用于重建已授予权限和角色的 SQL 语句。支持：ROLE_GRANT。

```sql
SELECT dbms_metadata.get_granted_ddl('ROLE_GRANT', 'user_test');
```

### SET_TRANSFORM_PARAM

通过会话级转换参数自定义 DDL 输出：

```sql
-- Append SQL terminator (;) to each DDL statement
CALL dbms_metadata.set_transform_param('SQLTERMINATOR', true);

-- Exclude constraints from TABLE DDL
CALL dbms_metadata.set_transform_param('CONSTRAINTS', false);

-- Exclude foreign keys from TABLE DDL
CALL dbms_metadata.set_transform_param('REF_CONSTRAINTS', false);

-- Exclude partitioning clauses
CALL dbms_metadata.set_transform_param('PARTITIONING', false);

-- Exclude storage parameters
CALL dbms_metadata.set_transform_param('STORAGE', false);

-- Reset all params to defaults
CALL dbms_metadata.set_transform_param('DEFAULT', true);
```

### 1.1.0 行为与升级

该版本新增 ENUM 提取；显式指定模式时，枚举名称会带模式限定。函数或过程存在重载时，不带参数列表的名称会返回全部匹配重载；在名称后附上参数类型可以选择其中一个：

```sql
SELECT dbms_metadata.get_ddl('FUNCTION', 'my_function(char, char)', 'my_schema');
ALTER EXTENSION pg_dbms_metadata UPDATE TO '1.1.0';
```

1.1.0 还修复了含引号的表注释和布尔转换参数默认值。执行 SQL 更新前须先安装新扩展文件。上游文档列出 PostgreSQL 9.1–18，并对本版本在 12–19 上的升级路径进行测试；软件包支持范围另行记录。

DDL 可见性不局限于调用者拥有的对象。省略模式时按 `search_path` 查找，并要求具有模式 USAGE 权限；TRIGGER 和 REF_CONSTRAINT 调用必须显式指定模式。对象定义敏感时应限制 API 访问。会话转换设置会影响后续提取调用，可以用 DEFAULT 转换重置；该 API 不提供完整数据库备份。
