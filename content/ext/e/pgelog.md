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

> 语法：
>
> ```sql
> CREATE EXTENSION IF NOT EXISTS dblink;
> CREATE EXTENSION IF NOT EXISTS pg_variables;
> CREATE EXTENSION pgelog;
> SELECT pgelog_to_log('SQL', 'standalone', 'Test of logging by pgelog', '1');
> ```
>
> 来源：[README](https://github.com/anfiau/pgelog)

`pgelog` 通过 `dblink` 实现伪自治事务，把日志写入 PostgreSQL 表中。其核心目标是即使调用方的主事务回滚，日志记录也能保留下来。

## 前置条件

README 要求：

- PostgreSQL 11 或更高版本
- `dblink`
- `pg_variables`
- 本地免密码的 `dblink` 访问，通常通过 `pg_hba.conf` 中的 `peer` 本地规则实现

它还提醒，每个会话可能会为 `dblink` 额外打开 1 条连接，因此需要合理设置 `max_connections`。

## 对象

扩展会创建：

- `pgelog_params`，用于配置
- `pgelog_logs`，作为基础日志表
- `pgelog_vw_logs`，作为带时间信息的日志视图

日志表/视图会存储时间戳、日志类型、源函数、阶段、消息文本、事务 ID、SQLSTATE、SQLERRM 和连接名等字段。

## 基本记录

写入一条日志：

```sql
SELECT pgelog_to_log('SQL', 'standalone', 'Test of logging by pgelog', '1');
```

读取最新日志：

```sql
SELECT log_stamp, log_info
FROM pgelog_logs
ORDER BY log_stamp DESC
LIMIT 1;
```

## PL/pgSQL 异常日志

README 给出了一个更完整的 PL/pgSQL 示例：捕获异常、收集诊断信息、通过 `pgelog_to_log(...)` 写入 `FAIL` 日志，然后重新抛出异常。这是捕获可回滚失败日志的主要模式。

## 配置

配置参数通过以下函数管理：

```sql
SELECT pgelog_get_param('pgelog_ttl_minutes');
SELECT pgelog_set_param('pgelog_ttl_minutes', '2880');
```

README 通过 `pgelog_params` 表和辅助函数来说明 `pgelog_ttl_minutes` 等参数。
