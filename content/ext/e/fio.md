---
title: "fio"
linkTitle: "fio"
description: "PostgreSQL文件IO函数包"
weight: 5230
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/csimsek/pgsql-fio">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">csimsek/pgsql-fio</div>
    <div class="ext-card__desc">https://github.com/csimsek/pgsql-fio</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_fio-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_fio-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_fio-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_fio`**](/ext/e/fio) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5230  | [**`fio`**](/ext/e/fio) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgfincore`](/ext/e/pgfincore) [`adminpack`](/ext/e/adminpack) [`file_fdw`](/ext/e/file_fdw) [`pageinspect`](/ext/e/pageinspect) [`pgstattuple`](/ext/e/pgstattuple) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_fio` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_fio_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-fio` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pg_fio_18 pg_fio_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fio_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_fio_18 pg_fio_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fio_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_fio_18 pg_fio_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fio_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_fio_18 pg_fio_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fio_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_fio_18 pg_fio_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fio_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_fio_18 pg_fio_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fio_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 24.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-fio postgresql-18-pg-fio_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-18-pg-fio_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_fio_17 pg_fio_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fio_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_fio_17 pg_fio_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fio_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_fio_17 pg_fio_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fio_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_fio_17 pg_fio_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fio_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_fio_17 pg_fio_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fio_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_fio_17 pg_fio_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fio_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 28.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 24.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fio postgresql-17-pg-fio_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-17-pg-fio_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_fio_16 pg_fio_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fio_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_fio_16 pg_fio_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fio_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_fio_16 pg_fio_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fio_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_fio_16 pg_fio_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fio_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_fio_16 pg_fio_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fio_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_fio_16 pg_fio_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fio_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 28.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-fio postgresql-16-pg-fio_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-16-pg-fio_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_fio_15 pg_fio_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fio_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_fio_15 pg_fio_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fio_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_fio_15 pg_fio_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fio_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_fio_15 pg_fio_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fio_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_fio_15 pg_fio_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fio_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_fio_15 pg_fio_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fio_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 28.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 27.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 24.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-fio postgresql-15-pg-fio_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-15-pg-fio_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_fio_14 pg_fio_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fio_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_fio_14 pg_fio_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fio_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_fio_14 pg_fio_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fio_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_fio_14 pg_fio_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fio_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_fio_14 pg_fio_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fio_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_fio_14 pg_fio_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fio_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 28.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 24.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-fio postgresql-14-pg-fio_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 24.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fio/postgresql-14-pg-fio_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_fio` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_fio         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_fio` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_fio;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_fio -v 18  # PG 18
pig ext install -y pg_fio -v 17  # PG 17
pig ext install -y pg_fio -v 16  # PG 16
pig ext install -y pg_fio -v 15  # PG 15
pig ext install -y pg_fio -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_fio_18       # PG 18
dnf install -y pg_fio_17       # PG 17
dnf install -y pg_fio_16       # PG 16
dnf install -y pg_fio_15       # PG 15
dnf install -y pg_fio_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-fio   # PG 18
apt install -y postgresql-17-pg-fio   # PG 17
apt install -y postgresql-16-pg-fio   # PG 16
apt install -y postgresql-15-pg-fio   # PG 15
apt install -y postgresql-14-pg-fio   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION fio;
```



## 用法

> [fio: PostgreSQL 文件 I/O 函数](https://github.com/csimsek/pgsql-fio)

`fio` 扩展提供可从 SQL 访问的文件系统 I/O 函数，允许直接在 PostgreSQL 中读取、写入和管理文件与目录。

### 文件操作

```sql
-- 读取文件内容（返回 bytea）
SELECT fio_readfile('/etc/hostname');

-- 将内容写入文件
SELECT fio_writefile('/tmp/output.txt', 'Hello World'::bytea);

-- 自动创建目录并覆盖写入
SELECT fio_writefile('/tmp/newdir/output.txt', 'data'::bytea, true, true);

-- 删除文件
SELECT fio_removefile('/tmp/output.txt');

-- 重命名/移动文件
SELECT fio_renamefile('/tmp/old.txt', '/tmp/new.txt');
```

### 目录操作

```sql
-- 列出目录内容
SELECT fio_readdir('/usr/', '*');

-- 使用模式过滤列出
SELECT fio_readdir('/var/log/', '*.log');

-- 创建目录并设置权限
SELECT fio_mkdir('/tmp/mydir', '0755');

-- 递归创建嵌套目录
SELECT fio_mkdir('/tmp/a/b/c', '0755', true);

-- 更改文件/目录权限
SELECT fio_chmod('/tmp/mydir', '0700');
```

### 函数参考

| 函数 | 描述 |
|----------|-------------|
| `fio_readfile(path)` | 以 bytea 形式读取文件内容 |
| `fio_writefile(path, content, mkdir, overwrite)` | 将 bytea 内容写入文件 |
| `fio_removefile(path)` | 删除文件 |
| `fio_renamefile(old, new)` | 重命名或移动文件 |
| `fio_readdir(path, pattern)` | 列出匹配模式的目录条目 |
| `fio_mkdir(path, mode, recursive)` | 创建目录并设置权限 |
| `fio_chmod(path, mode)` | 更改文件/目录权限 |
