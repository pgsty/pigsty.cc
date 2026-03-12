---
title: "pgextwlist"
linkTitle: "pgextwlist"
description: "PostgreSQL扩展白名单功能"
weight: 7390
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dimitri/pgextwlist">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dimitri/pgextwlist</div>
    <div class="ext-card__desc">https://github.com/dimitri/pgextwlist</div>
  </a>
  <a class="ext-card ext-card--source" href="pgextwlist-1.19.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgextwlist-1.19.tar.gz</div>
    <div class="ext-card__desc">pgextwlist-1.19.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgextwlist`**](/ext/e/pgextwlist) | `1.19` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7390  | [**`pgextwlist`**](/ext/e/pgextwlist) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`ddlx`](/ext/e/ddlx) [`pgdd`](/ext/e/pgdd) [`pg_permissions`](/ext/e/pg_permissions) [`adminpack`](/ext/e/adminpack) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_catcheck`](/ext/e/pg_catcheck) [`noset`](/ext/e/noset) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing pg18 on el


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.19` | {{< pgvers "18,17,16,15,14" >}} | `pgextwlist` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.19` | {{< pgvers "18,17,16,15,14" >}} | `pgextwlist_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.19` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgextwlist` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 |
| el8.aarch64 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 |
| el9.x86_64 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 |
| el9.aarch64 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 |
| el10.x86_64 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 |
| el10.aarch64 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 | AVAIL PIGSTY 1.19 1 |
| d12.x86_64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| d12.aarch64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| d13.x86_64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| d13.aarch64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| u22.x86_64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| u22.aarch64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| u24.x86_64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
| u24.aarch64 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 | AVAIL PGDG 1.19 1 |
@ el8.x86_64 18 pgextwlist_18 pgextwlist_18-1.19-1PIGSTY.el8.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgextwlist_18-1.19-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgextwlist_18 pgextwlist_18-1.19-1PIGSTY.el8.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgextwlist_18-1.19-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgextwlist_18 pgextwlist_18-1.19-1PIGSTY.el9.x86_64.rpm pigsty 1.19 20.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgextwlist_18-1.19-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgextwlist_18 pgextwlist_18-1.19-1PIGSTY.el9.aarch64.rpm pigsty 1.19 20.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgextwlist_18-1.19-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgextwlist_18 pgextwlist_18-1.19-1PIGSTY.el10.x86_64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgextwlist_18-1.19-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgextwlist_18 pgextwlist_18-1.19-1PIGSTY.el10.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgextwlist_18-1.19-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg12+1_amd64.deb pgdg 1.19 29.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg12+1_arm64.deb pgdg 1.19 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg13+1_amd64.deb pgdg 1.19 29.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg13+1_arm64.deb pgdg 1.19 28.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb pgdg 1.19 30.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb pgdg 1.19 29.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb pgdg 1.19 29.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgextwlist postgresql-18-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb pgdg 1.19 28.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-18-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgextwlist_17 pgextwlist_17-1.19-1PIGSTY.el8.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgextwlist_17-1.19-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgextwlist_17 pgextwlist_17-1.19-1PIGSTY.el8.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgextwlist_17-1.19-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgextwlist_17 pgextwlist_17-1.19-1PIGSTY.el9.x86_64.rpm pigsty 1.19 20.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgextwlist_17-1.19-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgextwlist_17 pgextwlist_17-1.19-1PIGSTY.el9.aarch64.rpm pigsty 1.19 20.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgextwlist_17-1.19-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgextwlist_17 pgextwlist_17-1.19-1PIGSTY.el10.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgextwlist_17-1.19-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgextwlist_17 pgextwlist_17-1.19-1PIGSTY.el10.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgextwlist_17-1.19-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg12+1_amd64.deb pgdg 1.19 29.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg12+1_arm64.deb pgdg 1.19 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg13+1_amd64.deb pgdg 1.19 29.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg13+1_arm64.deb pgdg 1.19 28.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb pgdg 1.19 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb pgdg 1.19 37.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb pgdg 1.19 29.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgextwlist postgresql-17-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb pgdg 1.19 28.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-17-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgextwlist_16 pgextwlist_16-1.19-1PIGSTY.el8.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgextwlist_16-1.19-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgextwlist_16 pgextwlist_16-1.19-1PIGSTY.el8.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgextwlist_16-1.19-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgextwlist_16 pgextwlist_16-1.19-1PIGSTY.el9.x86_64.rpm pigsty 1.19 20.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgextwlist_16-1.19-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgextwlist_16 pgextwlist_16-1.19-1PIGSTY.el9.aarch64.rpm pigsty 1.19 20.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgextwlist_16-1.19-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgextwlist_16 pgextwlist_16-1.19-1PIGSTY.el10.x86_64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgextwlist_16-1.19-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgextwlist_16 pgextwlist_16-1.19-1PIGSTY.el10.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgextwlist_16-1.19-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg12+1_amd64.deb pgdg 1.19 29.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg12+1_arm64.deb pgdg 1.19 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg13+1_amd64.deb pgdg 1.19 29.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg13+1_arm64.deb pgdg 1.19 28.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb pgdg 1.19 37.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb pgdg 1.19 37.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb pgdg 1.19 29.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgextwlist postgresql-16-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb pgdg 1.19 28.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-16-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgextwlist_15 pgextwlist_15-1.19-1PIGSTY.el8.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgextwlist_15-1.19-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgextwlist_15 pgextwlist_15-1.19-1PIGSTY.el8.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgextwlist_15-1.19-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgextwlist_15 pgextwlist_15-1.19-1PIGSTY.el9.x86_64.rpm pigsty 1.19 20.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgextwlist_15-1.19-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgextwlist_15 pgextwlist_15-1.19-1PIGSTY.el9.aarch64.rpm pigsty 1.19 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgextwlist_15-1.19-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgextwlist_15 pgextwlist_15-1.19-1PIGSTY.el10.x86_64.rpm pigsty 1.19 20.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgextwlist_15-1.19-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgextwlist_15 pgextwlist_15-1.19-1PIGSTY.el10.aarch64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgextwlist_15-1.19-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg12+1_amd64.deb pgdg 1.19 28.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg12+1_arm64.deb pgdg 1.19 28.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg13+1_amd64.deb pgdg 1.19 28.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg13+1_arm64.deb pgdg 1.19 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb pgdg 1.19 37.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb pgdg 1.19 36.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb pgdg 1.19 29.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgextwlist postgresql-15-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb pgdg 1.19 28.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-15-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgextwlist_14 pgextwlist_14-1.19-1PIGSTY.el8.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgextwlist_14-1.19-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgextwlist_14 pgextwlist_14-1.19-1PIGSTY.el8.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgextwlist_14-1.19-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgextwlist_14 pgextwlist_14-1.19-1PIGSTY.el9.x86_64.rpm pigsty 1.19 20.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgextwlist_14-1.19-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgextwlist_14 pgextwlist_14-1.19-1PIGSTY.el9.aarch64.rpm pigsty 1.19 20.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgextwlist_14-1.19-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgextwlist_14 pgextwlist_14-1.19-1PIGSTY.el10.x86_64.rpm pigsty 1.19 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgextwlist_14-1.19-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgextwlist_14 pgextwlist_14-1.19-1PIGSTY.el10.aarch64.rpm pigsty 1.19 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgextwlist_14-1.19-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg12+1_amd64.deb pgdg 1.19 28.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg12+1_arm64.deb pgdg 1.19 28.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg13+1_amd64.deb pgdg 1.19 28.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg13+1_arm64.deb pgdg 1.19 28.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb pgdg 1.19 37.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb pgdg 1.19 36.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb pgdg 1.19 29.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgextwlist postgresql-14-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb pgdg 1.19 28.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgextwlist/postgresql-14-pgextwlist_1.19-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgextwlist` 扩展的 RPM 包：

```bash
pig build pkg pgextwlist         # 构建 RPM 包
```


## 安装

您可以直接安装 `pgextwlist` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgextwlist;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgextwlist -v 18  # PG 18
pig ext install -y pgextwlist -v 17  # PG 17
pig ext install -y pgextwlist -v 16  # PG 16
pig ext install -y pgextwlist -v 15  # PG 15
pig ext install -y pgextwlist -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgextwlist_18       # PG 18
dnf install -y pgextwlist_17       # PG 17
dnf install -y pgextwlist_16       # PG 16
dnf install -y pgextwlist_15       # PG 15
dnf install -y pgextwlist_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgextwlist   # PG 18
apt install -y postgresql-17-pgextwlist   # PG 17
apt install -y postgresql-16-pgextwlist   # PG 16
apt install -y postgresql-15-pgextwlist   # PG 15
apt install -y postgresql-14-pgextwlist   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgextwlist';
```




## 用法

> [pgextwlist: PostgreSQL 扩展白名单](https://github.com/dimitri/pgextwlist)

`pgextwlist` 实现扩展白名单功能：只有明确允许的扩展才能安装，白名单中的扩展即使由非超级用户请求也会以超级用户权限安装。

### 配置

添加到 `postgresql.conf`：

```ini
local_preload_libraries = 'pgextwlist'
extwlist.extensions = 'hstore,cube,pg_stat_statements'
```

或按角色设置：

```sql
ALTER ROLE adminuser SET extwlist.extensions = 'pg_stat_statements, postgis';
```

| 参数 | 描述 |
|-----------|-------------|
| `extwlist.extensions` | 逗号分隔的白名单扩展列表 |
| `extwlist.custom_path` | 自定义前/后脚本的文件系统路径 |

### 行为

非超级用户可以安装白名单扩展：

```sql
-- 允许（hstore 在白名单中）
CREATE EXTENSION hstore;

-- 阻止（不在白名单中）
CREATE EXTENSION earthdistance;
-- ERROR: extension "earthdistance" is not whitelisted
```

对于白名单扩展，`CREATE EXTENSION`、`DROP EXTENSION`、`ALTER EXTENSION ... UPDATE` 和 `COMMENT ON EXTENSION` 操作以超级用户身份运行。

### 自定义脚本

将脚本放在 `${extwlist.custom_path}/extname/` 目录：

| 脚本 | 时机 |
|--------|------|
| `before--1.0.sql` | 安装 1.0 版本之前 |
| `before-create.sql` | CREATE 之前（回退） |
| `after--1.0.sql` | 安装 1.0 版本之后 |
| `after-create.sql` | CREATE 之后（回退） |
| `before-update.sql` / `after-update.sql` | ALTER EXTENSION UPDATE 前后 |
| `before-drop.sql` / `after-drop.sql` | DROP EXTENSION 前后 |

自定义脚本支持模板变量：`@extschema@`、`@current_user@`、`@database_owner@`。
