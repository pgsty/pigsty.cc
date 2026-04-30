---
title: "pg_fkpart"
linkTitle: "pg_fkpart"
description: "按外键实用程序进行表分区的扩展"
weight: 2500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/lemoineat/pg_fkpart">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">lemoineat/pg_fkpart</div>
    <div class="ext-card__desc">https://github.com/lemoineat/pg_fkpart</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_fkpart-1.7.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_fkpart-1.7.0.tar.gz</div>
    <div class="ext-card__desc">pg_fkpart-1.7.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_fkpart`**](/ext/e/pg_fkpart) | `1.7.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2500  | [**`pg_fkpart`**](/ext/e/pg_fkpart) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgfkpart` |
{.ext-table}

| **相关扩展** | [`citus`](/ext/e/citus) [`pg_partman`](/ext/e/pg_partman) [`timescaledb`](/ext/e/timescaledb) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`btree_gist`](/ext/e/btree_gist) [`emaj`](/ext/e/emaj) [`table_version`](/ext/e/table_version) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_fkpart` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_fkpart_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-fkpart` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| el8.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| el9.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| el9.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| el10.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| el10.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_fkpart_18 pg_fkpart_18-1.7.0-6PGDG.rhel8.noarch.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_fkpart_18-1.7.0-6PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_fkpart_18 pg_fkpart_18-1.7.0-6PGDG.rhel8.noarch.rpm pgdg 1.7.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_fkpart_18-1.7.0-6PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_fkpart_18 pg_fkpart_18-1.7.0-6PGDG.rhel9.noarch.rpm pgdg 1.7.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_fkpart_18-1.7.0-6PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_fkpart_18 pg_fkpart_18-1.7.0-6PGDG.rhel9.noarch.rpm pgdg 1.7.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_fkpart_18-1.7.0-6PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_fkpart_18 pg_fkpart_18-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_fkpart_18-1.7.0-6PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_fkpart_18 pg_fkpart_18-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_fkpart_18-1.7.0-6PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-fkpart postgresql-18-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-18-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-6PGDG.rhel8.noarch.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_fkpart_17-1.7.0-6PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fkpart_17-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-6PGDG.rhel8.noarch.rpm pgdg 1.7.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_fkpart_17-1.7.0-6PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fkpart_17-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-6PGDG.rhel9.noarch.rpm pgdg 1.7.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_fkpart_17-1.7.0-6PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fkpart_17-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-6PGDG.rhel9.noarch.rpm pgdg 1.7.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_fkpart_17-1.7.0-6PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fkpart_17-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_fkpart_17-1.7.0-6PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_fkpart_17 pg_fkpart_17-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_fkpart_17-1.7.0-6PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fkpart postgresql-17-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-17-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-4.rhel8.noarch.rpm pgdg 1.7.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_fkpart_16-1.7.0-4.rhel8.noarch.rpm
@ el8.x86_64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fkpart_16-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-4.rhel8.noarch.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_fkpart_16-1.7.0-4.rhel8.noarch.rpm
@ el8.aarch64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fkpart_16-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-4.rhel9.noarch.rpm pgdg 1.7.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_fkpart_16-1.7.0-4.rhel9.noarch.rpm
@ el9.x86_64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fkpart_16-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-4.rhel9.noarch.rpm pgdg 1.7.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_fkpart_16-1.7.0-4.rhel9.noarch.rpm
@ el9.aarch64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fkpart_16-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_fkpart_16-1.7.0-6PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_fkpart_16 pg_fkpart_16-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_fkpart_16-1.7.0-6PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-fkpart postgresql-16-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-16-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-3.rhel8.noarch.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_fkpart_15-1.7.0-3.rhel8.noarch.rpm
@ el8.x86_64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fkpart_15-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-3.rhel8.noarch.rpm pgdg 1.7.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_fkpart_15-1.7.0-3.rhel8.noarch.rpm
@ el8.aarch64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fkpart_15-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-3.rhel9.noarch.rpm pgdg 1.7.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_fkpart_15-1.7.0-3.rhel9.noarch.rpm
@ el9.x86_64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fkpart_15-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-3.rhel9.noarch.rpm pgdg 1.7.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_fkpart_15-1.7.0-3.rhel9.noarch.rpm
@ el9.aarch64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fkpart_15-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_fkpart_15-1.7.0-6PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_fkpart_15 pg_fkpart_15-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_fkpart_15-1.7.0-6PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-fkpart postgresql-15-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-15-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-3.rhel8.noarch.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_fkpart_14-1.7.0-3.rhel8.noarch.rpm
@ el8.x86_64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fkpart_14-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-3.rhel8.noarch.rpm pgdg 1.7.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_fkpart_14-1.7.0-3.rhel8.noarch.rpm
@ el8.aarch64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fkpart_14-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-3.rhel9.noarch.rpm pgdg 1.7.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_fkpart_14-1.7.0-3.rhel9.noarch.rpm
@ el9.x86_64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fkpart_14-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-3.rhel9.noarch.rpm pgdg 1.7.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_fkpart_14-1.7.0-3.rhel9.noarch.rpm
@ el9.aarch64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fkpart_14-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_fkpart_14-1.7.0-6PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_fkpart_14 pg_fkpart_14-1.7.0-6PGDG.rhel10.noarch.rpm pgdg 1.7.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_fkpart_14-1.7.0-6PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-fkpart postgresql-14-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fkpart/postgresql-14-pg-fkpart_1.7.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_fkpart` 扩展的 DEB 包：

```bash
pig build pkg pg_fkpart         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_fkpart` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_fkpart;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_fkpart -v 18  # PG 18
pig ext install -y pg_fkpart -v 17  # PG 17
pig ext install -y pg_fkpart -v 16  # PG 16
pig ext install -y pg_fkpart -v 15  # PG 15
pig ext install -y pg_fkpart -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_fkpart_18       # PG 18
dnf install -y pg_fkpart_17       # PG 17
dnf install -y pg_fkpart_16       # PG 16
dnf install -y pg_fkpart_15       # PG 15
dnf install -y pg_fkpart_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-fkpart   # PG 18
apt install -y postgresql-17-pg-fkpart   # PG 17
apt install -y postgresql-16-pg-fkpart   # PG 16
apt install -y postgresql-15-pg-fkpart   # PG 15
apt install -y postgresql-14-pg-fkpart   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_fkpart;
```



## 用法

> [pg_fkpart: 基于外键的表分区工具](https://github.com/lemoineat/pg_fkpart)

`pg_fkpart` 基于外键关系对 PostgreSQL 表进行分区。所有函数位于 `pgfkpart` schema 中。

### 创建扩展

```sql
CREATE EXTENSION pg_fkpart;
```

### 按外键分区表

```sql
SELECT pgfkpart.partition_with_fk(
    'public',           -- 要分区的表的 schema
    'my_table',         -- 要分区的表
    'public',           -- 外键表的 schema
    'fk_table',         -- 外键表
    true                -- 支持 SQL RETURNING
);
```

### 取消分区

```sql
SELECT pgfkpart.unpartition_with_fk('public', 'my_table');
```

### 索引管理

将父表的索引和约束传播到所有子表：

```sql
SELECT pgfkpart.dispatch_index('public', 'my_table');
```

删除所有子表上的索引：

```sql
SELECT pgfkpart.drop_index('public', 'my_table', 'my_index_name');
```

删除所有子表上的唯一约束：

```sql
SELECT pgfkpart.drop_unique_constraint('public', 'my_table', 'my_constraint_name');
```

### 分区追踪

该扩展维护一个 `pgfkpart.partition` 表，记录所有已分区的表，包括 schema、表名、外键列和外键表信息。
