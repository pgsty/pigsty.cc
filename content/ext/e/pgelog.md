---
title: "pgelog"
linkTitle: "pgelog"
description: "通过伪自治事务实现扩展日志记录"
weight: 5870
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/anfiau/pgelog">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">anfiau/pgelog</div>
    <div class="ext-card__desc">https://github.com/anfiau/pgelog</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgelog-1.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgelog-1.0.2.tar.gz</div>
    <div class="ext-card__desc">pgelog-1.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgelog`**](/ext/e/pgelog) | `1.0.2` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5870  | [**`pgelog`**](/ext/e/pgelog) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dblink`](/ext/e/dblink) [`pg_variables`](/ext/e/pg_variables) [`table_log`](/ext/e/table_log) [`pgaudit`](/ext/e/pgaudit) [`logerrors`](/ext/e/logerrors) [`dblink`](/ext/e/dblink) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release tag 1.0.2 still ships extension SQL version 1.0; requires the dblink extension at runtime in addition to pg_variables.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pgelog` | `dblink`, `pg_variables` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pgelog_$v` | `postgresql$v-contrib`, `pg_variables_$v` |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgelog` | `postgresql-$v-pg-variables` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pgelog_18 pgelog_18-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgelog_18-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgelog_18 pgelog_18-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgelog_18-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgelog_18 pgelog_18-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgelog_18-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgelog_18 pgelog_18-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgelog_18-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgelog_18 pgelog_18-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgelog_18-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgelog_18 pgelog_18-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgelog_18-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgelog postgresql-18-pgelog_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-18-pgelog_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgelog_17 pgelog_17-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgelog_17-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgelog_17 pgelog_17-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgelog_17-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgelog_17 pgelog_17-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgelog_17-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgelog_17 pgelog_17-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgelog_17-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgelog_17 pgelog_17-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgelog_17-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgelog_17 pgelog_17-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgelog_17-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgelog postgresql-17-pgelog_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-17-pgelog_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgelog_16 pgelog_16-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgelog_16-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgelog_16 pgelog_16-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgelog_16-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgelog_16 pgelog_16-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgelog_16-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgelog_16 pgelog_16-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgelog_16-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgelog_16 pgelog_16-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgelog_16-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgelog_16 pgelog_16-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgelog_16-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgelog postgresql-16-pgelog_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-16-pgelog_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgelog_15 pgelog_15-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgelog_15-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgelog_15 pgelog_15-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgelog_15-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgelog_15 pgelog_15-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgelog_15-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgelog_15 pgelog_15-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgelog_15-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgelog_15 pgelog_15-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgelog_15-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgelog_15 pgelog_15-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgelog_15-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgelog postgresql-15-pgelog_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-15-pgelog_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgelog_14 pgelog_14-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgelog_14-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgelog_14 pgelog_14-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgelog_14-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgelog_14 pgelog_14-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 15.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgelog_14-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgelog_14 pgelog_14-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 15.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgelog_14-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgelog_14 pgelog_14-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgelog_14-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgelog_14 pgelog_14-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 15.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgelog_14-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 9.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 9.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 9.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgelog postgresql-14-pgelog_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 9.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgelog/postgresql-14-pgelog_1.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgelog` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgelog         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgelog` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgelog;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgelog -v 18  # PG 18
pig ext install -y pgelog -v 17  # PG 17
pig ext install -y pgelog -v 16  # PG 16
pig ext install -y pgelog -v 15  # PG 15
pig ext install -y pgelog -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgelog_18       # PG 18
dnf install -y pgelog_17       # PG 17
dnf install -y pgelog_16       # PG 16
dnf install -y pgelog_15       # PG 15
dnf install -y pgelog_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgelog   # PG 18
apt install -y postgresql-17-pgelog   # PG 17
apt install -y postgresql-16-pgelog   # PG 16
apt install -y postgresql-15-pgelog   # PG 15
apt install -y postgresql-14-pgelog   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgelog CASCADE;  -- 依赖: dblink, pg_variables
```

## 用法

来源：[README](https://github.com/anfiau/pgelog/blob/master/README.md)，[control file](https://github.com/anfiau/pgelog/blob/master/pgelog.control)，[extension SQL 1.0.2](https://github.com/anfiau/pgelog/blob/master/pgelog--1.0.2.sql)，[Tag v1.0.2](https://github.com/anfiau/pgelog/tree/v1.0.2)

`pgelog` 通过使用 `dblink` 实现的 pseudo-autonomous transactions 写入可抵抗 rollback 的日志行。它会在 `pg_variables` 中缓存额外连接，因此同一 session 内重复写日志的成本更低。

### 依赖与安装

- PostgreSQL 11+
- `dblink`
- `pg_variables`
- 无密码本地 `dblink` 访问，通常通过 `peer`

```sql
CREATE EXTENSION IF NOT EXISTS dblink;
CREATE EXTENSION IF NOT EXISTS pg_variables;
CREATE EXTENSION pgelog;
```

### 主要对象与函数

```sql
SELECT pgelog_to_log('SQL', 'standalone', 'Test of logging by pgelog', '1');

SELECT pgelog_get_param('pgelog_ttl_minutes');
SELECT pgelog_set_param('pgelog_ttl_minutes', '2880');
```

- `pgelog_logs`：基础日志表。
- `pgelog_vw_logs`：带时间差的日志视图。
- `pgelog_params`：配置表。
- `pgelog_to_log(...)`：写入一条不会随 rollback 消失的日志。
- `pgelog_get_param(...)`、`pgelog_set_param(...)`、`pgelog_delete_param(...)`：管理扩展设置。

### 典型用法

官方 README 展示了在 PL/pgSQL exception handler 中使用 `pgelog_to_log(...)`：先用 `GET STACKED DIAGNOSTICS` 收集诊断信息，再写入一条 `FAIL` 日志，最后重新抛出错误。

### 注意事项

- 每个 session 最多会额外打开一个 `dblink` 连接，因此 `max_connections` 需要把这一点算进去。
- 上游 `v1.0.2` 仍然使用同一组用户可见对象；Pigsty 提到的运行时 `dblink` 与 `pg_variables` 依赖，已被 control file 与 README 共同确认。
