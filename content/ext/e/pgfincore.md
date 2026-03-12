---
title: "pgfincore"
linkTitle: "pgfincore"
description: "检查和管理操作系统缓冲区缓存"
weight: 5060
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/klando/pgfincore">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">klando/pgfincore</div>
    <div class="ext-card__desc">https://github.com/klando/pgfincore</div>
  </a>
  <a class="ext-card ext-card--source" href="pgfincore-1.3.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgfincore-1.3.1.tar.gz</div>
    <div class="ext-card__desc">pgfincore-1.3.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgfincore`**](/ext/e/pgfincore) | `1.3.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5060  | [**`pgfincore`**](/ext/e/pgfincore) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cooldown`](/ext/e/pg_cooldown) [`pgcozy`](/ext/e/pgcozy) [`fio`](/ext/e/fio) [`pg_prewarm`](/ext/e/pg_prewarm) [`pgmeminfo`](/ext/e/pgmeminfo) [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg18 el fixed by vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pgfincore` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pgfincore_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgfincore` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 2 | AVAIL PGDG 1.3.1 3 |
| el8.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 2 | AVAIL PGDG 1.3.1 2 |
| el9.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.2.4 1 | AVAIL PGDG 1.2.4 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.2.4 1 | AVAIL PGDG 1.2.4 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| d12.x86_64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| d12.aarch64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| d13.x86_64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| d13.aarch64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| u22.x86_64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| u22.aarch64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| u24.x86_64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
| u24.aarch64 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 | AVAIL PGDG 1.3.1 1 |
@ el8.x86_64 18 pgfincore_18 pgfincore_18-1.3.1-1PIGSTY.el8.x86_64.rpm pigsty 1.3.1 16.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgfincore_18-1.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgfincore_18 pgfincore_18-1.3.1-1PIGSTY.el8.aarch64.rpm pigsty 1.3.1 16.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgfincore_18-1.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgfincore_18 pgfincore_18-1.3.1-1PIGSTY.el9.x86_64.rpm pigsty 1.3.1 16.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgfincore_18-1.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgfincore_18 pgfincore_18-1.3.1-1PIGSTY.el9.aarch64.rpm pigsty 1.3.1 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgfincore_18-1.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgfincore_18 pgfincore_18-1.3.1-1PIGSTY.el10.x86_64.rpm pigsty 1.3.1 16.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgfincore_18-1.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgfincore_18 pgfincore_18-1.3.1-1PIGSTY.el10.aarch64.rpm pigsty 1.3.1 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgfincore_18-1.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg12+1_amd64.deb pgdg 1.3.1 28.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg12+1_arm64.deb pgdg 1.3.1 28.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg13+1_amd64.deb pgdg 1.3.1 29.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg13+1_arm64.deb pgdg 1.3.1 28.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb pgdg 1.3.1 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb pgdg 1.3.1 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb pgdg 1.3.1 27.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgfincore postgresql-18-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb pgdg 1.3.1 26.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-18-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgfincore_17 pgfincore_17-1.3.1-3PGDG.rhel8.x86_64.rpm pgdg 1.3.1 24.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgfincore_17-1.3.1-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgfincore_17 pgfincore_17-1.3.1-3PGDG.rhel8.aarch64.rpm pgdg 1.3.1 24.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgfincore_17-1.3.1-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgfincore_17 pgfincore_17-1.3.1-3PGDG.rhel9.x86_64.rpm pgdg 1.3.1 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgfincore_17-1.3.1-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgfincore_17 pgfincore_17-1.3.1-3PGDG.rhel9.aarch64.rpm pgdg 1.3.1 23.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgfincore_17-1.3.1-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgfincore_17 pgfincore_17-1.3.1-4PGDG.rhel10.x86_64.rpm pgdg 1.3.1 24.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgfincore_17-1.3.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgfincore_17 pgfincore_17-1.3.1-4PGDG.rhel10.aarch64.rpm pgdg 1.3.1 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgfincore_17-1.3.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg12+1_amd64.deb pgdg 1.3.1 28.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg12+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg13+1_amd64.deb pgdg 1.3.1 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg13+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb pgdg 1.3.1 31.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb pgdg 1.3.1 31.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb pgdg 1.3.1 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgfincore postgresql-17-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb pgdg 1.3.1 26.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-17-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgfincore_16 pgfincore_16-1.3.1-1PGDG.rhel8.x86_64.rpm pgdg 1.3.1 24.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgfincore_16-1.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgfincore_16 pgfincore_16-1.3.1-1PGDG.rhel8.aarch64.rpm pgdg 1.3.1 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgfincore_16-1.3.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgfincore_16 pgfincore_16-1.3.1-1PGDG.rhel9.x86_64.rpm pgdg 1.3.1 23.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgfincore_16-1.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgfincore_16 pgfincore_16-1.3.1-1PGDG.rhel9.aarch64.rpm pgdg 1.3.1 22.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgfincore_16-1.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgfincore_16 pgfincore_16-1.3.1-4PGDG.rhel10.x86_64.rpm pgdg 1.3.1 24.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgfincore_16-1.3.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgfincore_16 pgfincore_16-1.3.1-4PGDG.rhel10.aarch64.rpm pgdg 1.3.1 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgfincore_16-1.3.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg12+1_amd64.deb pgdg 1.3.1 28.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg12+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg13+1_amd64.deb pgdg 1.3.1 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg13+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb pgdg 1.3.1 31.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb pgdg 1.3.1 30.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb pgdg 1.3.1 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgfincore postgresql-16-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb pgdg 1.3.1 26.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-16-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgfincore_15 pgfincore_15-1.3.1-1PGDG.rhel8.x86_64.rpm pgdg 1.3.1 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgfincore_15-1.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgfincore_15 pgfincore_15-1.2.4-1.rhel8.x86_64.rpm pgdg 1.2.4 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgfincore_15-1.2.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgfincore_15 pgfincore_15-1.3.1-1PGDG.rhel8.aarch64.rpm pgdg 1.3.1 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgfincore_15-1.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgfincore_15 pgfincore_15-1.2.4-1.rhel8.aarch64.rpm pgdg 1.2.4 23.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgfincore_15-1.2.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgfincore_15 pgfincore_15-1.2.4-1.rhel9.x86_64.rpm pgdg 1.2.4 23.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgfincore_15-1.2.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgfincore_15 pgfincore_15-1.2.4-1.rhel9.aarch64.rpm pgdg 1.2.4 23.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgfincore_15-1.2.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgfincore_15 pgfincore_15-1.3.1-4PGDG.rhel10.x86_64.rpm pgdg 1.3.1 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgfincore_15-1.3.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgfincore_15 pgfincore_15-1.3.1-4PGDG.rhel10.aarch64.rpm pgdg 1.3.1 23.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgfincore_15-1.3.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg12+1_amd64.deb pgdg 1.3.1 28.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg12+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg13+1_amd64.deb pgdg 1.3.1 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg13+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb pgdg 1.3.1 31.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb pgdg 1.3.1 30.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb pgdg 1.3.1 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgfincore postgresql-15-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb pgdg 1.3.1 26.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-15-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgfincore_14 pgfincore_14-1.3.1-1PGDG.rhel8.x86_64.rpm pgdg 1.3.1 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgfincore_14-1.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgfincore_14 pgfincore_14-1.2.4-1.rhel8.x86_64.rpm pgdg 1.2.4 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgfincore_14-1.2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgfincore_14 pgfincore_14-1.2.2-3.rhel8.x86_64.rpm pgdg 1.2.2 41.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgfincore_14-1.2.2-3.rhel8.x86_64.rpm
@ el8.aarch64 14 pgfincore_14 pgfincore_14-1.3.1-1PGDG.rhel8.aarch64.rpm pgdg 1.3.1 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgfincore_14-1.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgfincore_14 pgfincore_14-1.2.4-1.rhel8.aarch64.rpm pgdg 1.2.4 23.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgfincore_14-1.2.4-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgfincore_14 pgfincore_14-1.2.4-1.rhel9.x86_64.rpm pgdg 1.2.4 23.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgfincore_14-1.2.4-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgfincore_14 pgfincore_14-1.2.4-1.rhel9.aarch64.rpm pgdg 1.2.4 23.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgfincore_14-1.2.4-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgfincore_14 pgfincore_14-1.3.1-4PGDG.rhel10.x86_64.rpm pgdg 1.3.1 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgfincore_14-1.3.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgfincore_14 pgfincore_14-1.3.1-4PGDG.rhel10.aarch64.rpm pgdg 1.3.1 23.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgfincore_14-1.3.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg12+1_amd64.deb pgdg 1.3.1 28.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg12+1_arm64.deb pgdg 1.3.1 27.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg13+1_amd64.deb pgdg 1.3.1 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg13+1_arm64.deb pgdg 1.3.1 28.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb pgdg 1.3.1 31.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb pgdg 1.3.1 30.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb pgdg 1.3.1 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgfincore postgresql-14-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb pgdg 1.3.1 26.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgfincore/postgresql-14-pgfincore_1.3.1-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgfincore` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgfincore         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgfincore` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgfincore;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgfincore -v 18  # PG 18
pig ext install -y pgfincore -v 17  # PG 17
pig ext install -y pgfincore -v 16  # PG 16
pig ext install -y pgfincore -v 15  # PG 15
pig ext install -y pgfincore -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgfincore_18       # PG 18
dnf install -y pgfincore_17       # PG 17
dnf install -y pgfincore_16       # PG 16
dnf install -y pgfincore_15       # PG 15
dnf install -y pgfincore_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgfincore   # PG 18
apt install -y postgresql-17-pgfincore   # PG 17
apt install -y postgresql-16-pgfincore   # PG 16
apt install -y postgresql-15-pgfincore   # PG 15
apt install -y postgresql-14-pgfincore   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgfincore;
```



## 用法

> [pgfincore: 检查和管理操作系统缓冲区缓存](https://github.com/klando/pgfincore)

pgfincore 提供使用 `mincore` 和 `POSIX_FADVISE` 检查和管理 PostgreSQL 关系的操作系统页缓存内容的函数。

### 检查缓存状态

```sql
SELECT * FROM pgfincore('pgbench_accounts');
```

返回每段信息：`relpath`、`segment`、`os_page_size`、`rel_os_pages`、`pages_mem`（OS 缓存中的页数）、`group_mem`、`os_pages_free`、`pages_dirty`、`group_dirty`。

使用 `pgfincore('relation', true)` 可包含用于快照/恢复的 `databit` varbit 映射。

### 系统信息

```sql
SELECT * FROM pgsysconf();          -- os_page_size, os_pages_free, os_total_pages
SELECT * FROM pgsysconf_pretty();   -- 相同内容，人类可读格式输出
```

### 预加载到 OS 缓存

```sql
SELECT * FROM pgfadvise_willneed('pgbench_accounts');
```

### 从 OS 缓存中驱逐

```sql
SELECT * FROM pgfadvise_dontneed('pgbench_accounts');
```

### 其他 POSIX_FADVISE 标志

```sql
SELECT * FROM pgfadvise_normal('relation');
SELECT * FROM pgfadvise_sequential('relation');
SELECT * FROM pgfadvise_random('relation');
```

### 快照和恢复缓存状态

```sql
-- 快照
CREATE TABLE pgfincore_snapshot AS
  SELECT 'pgbench_accounts'::text AS relname, *, now() AS date_snapshot
  FROM pgfincore('pgbench_accounts', true);

-- 恢复
SELECT * FROM pgfadvise_loader('pgbench_accounts', 0, true, true,
               (SELECT databit FROM pgfincore_snapshot
                WHERE relname = 'pgbench_accounts' AND segment = 0));
```

### 直接页缓存控制

```sql
-- 加载前 3 页，卸载后 3 页
SELECT * FROM pgfadvise_loader('pgbench_accounts', 0, true, true, B'111000');
-- 仅加载
SELECT * FROM pgfadvise_loader('pgbench_accounts', 0, true, false, B'111000');
-- 仅卸载
SELECT * FROM pgfadvise_loader('pgbench_accounts', 0, false, true, B'111000');
```
