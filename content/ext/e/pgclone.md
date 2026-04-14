---
title: "pgclone"
linkTitle: "pgclone"
description: "在不同环境间克隆 PostgreSQL 数据库、模式、表和函数"
weight: 9590
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/valehdba/pgclone">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">valehdba/pgclone</div>
    <div class="ext-card__desc">https://github.com/valehdba/pgclone</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgclone-3.6.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgclone-3.6.0.tar.gz</div>
    <div class="ext-card__desc">pgclone-3.6.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgclone`**](/ext/e/pgclone) | `3.6.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9590  | [**`pgclone`**](/ext/e/pgclone) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`db_migrator`](/ext/e/db_migrator) [`pglogical`](/ext/e/pglogical) [`repmgr`](/ext/e/repmgr) [`pgactive`](/ext/e/pgactive) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> shared_preload_libraries = pgclone is required for async/progress features; synchronous clone functions work without it.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.6.0` | {{< pgvers "18,17,16,15,14" >}} | `pgclone` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.6.0` | {{< pgvers "18,17,16,15,14" >}} | `pgclone_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.6.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgclone` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| el8.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| el9.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| el9.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| el10.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| el10.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| d12.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| d12.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| d13.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| d13.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| u22.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| u22.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| u24.x86_64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
| u24.aarch64 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 | AVAIL PIGSTY 3.6.0 1 |
@ el8.x86_64 18 pgclone_18 pgclone_18-3.6.0-1PIGSTY.el8.x86_64.rpm pigsty 3.6.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_18-3.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgclone_18 pgclone_18-3.6.0-1PIGSTY.el8.aarch64.rpm pigsty 3.6.0 58.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_18-3.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgclone_18 pgclone_18-3.6.0-1PIGSTY.el9.x86_64.rpm pigsty 3.6.0 59.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_18-3.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgclone_18 pgclone_18-3.6.0-1PIGSTY.el9.aarch64.rpm pigsty 3.6.0 58.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_18-3.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgclone_18 pgclone_18-3.6.0-1PIGSTY.el10.x86_64.rpm pigsty 3.6.0 60.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_18-3.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgclone_18 pgclone_18-3.6.0-1PIGSTY.el10.aarch64.rpm pigsty 3.6.0 59.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_18-3.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb pigsty 3.6.0 130.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb pigsty 3.6.0 127.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb pigsty 3.6.0 129.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb pigsty 3.6.0 126.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb pigsty 3.6.0 133.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb pigsty 3.6.0 132.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~noble_amd64.deb pigsty 3.6.0 129.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_3.6.0-1PIGSTY~noble_arm64.deb pigsty 3.6.0 128.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_3.6.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgclone_17 pgclone_17-3.6.0-1PIGSTY.el8.x86_64.rpm pigsty 3.6.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_17-3.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgclone_17 pgclone_17-3.6.0-1PIGSTY.el8.aarch64.rpm pigsty 3.6.0 58.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_17-3.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgclone_17 pgclone_17-3.6.0-1PIGSTY.el9.x86_64.rpm pigsty 3.6.0 59.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_17-3.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgclone_17 pgclone_17-3.6.0-1PIGSTY.el9.aarch64.rpm pigsty 3.6.0 58.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_17-3.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgclone_17 pgclone_17-3.6.0-1PIGSTY.el10.x86_64.rpm pigsty 3.6.0 60.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_17-3.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgclone_17 pgclone_17-3.6.0-1PIGSTY.el10.aarch64.rpm pigsty 3.6.0 59.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_17-3.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb pigsty 3.6.0 130.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb pigsty 3.6.0 127.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb pigsty 3.6.0 130.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb pigsty 3.6.0 126.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb pigsty 3.6.0 144.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb pigsty 3.6.0 144.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~noble_amd64.deb pigsty 3.6.0 129.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_3.6.0-1PIGSTY~noble_arm64.deb pigsty 3.6.0 128.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_3.6.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgclone_16 pgclone_16-3.6.0-1PIGSTY.el8.x86_64.rpm pigsty 3.6.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_16-3.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgclone_16 pgclone_16-3.6.0-1PIGSTY.el8.aarch64.rpm pigsty 3.6.0 58.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_16-3.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgclone_16 pgclone_16-3.6.0-1PIGSTY.el9.x86_64.rpm pigsty 3.6.0 59.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_16-3.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgclone_16 pgclone_16-3.6.0-1PIGSTY.el9.aarch64.rpm pigsty 3.6.0 58.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_16-3.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgclone_16 pgclone_16-3.6.0-1PIGSTY.el10.x86_64.rpm pigsty 3.6.0 60.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_16-3.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgclone_16 pgclone_16-3.6.0-1PIGSTY.el10.aarch64.rpm pigsty 3.6.0 59.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_16-3.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb pigsty 3.6.0 130.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb pigsty 3.6.0 127.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb pigsty 3.6.0 130.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb pigsty 3.6.0 126.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb pigsty 3.6.0 143.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb pigsty 3.6.0 143.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~noble_amd64.deb pigsty 3.6.0 129.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_3.6.0-1PIGSTY~noble_arm64.deb pigsty 3.6.0 128.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_3.6.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgclone_15 pgclone_15-3.6.0-1PIGSTY.el8.x86_64.rpm pigsty 3.6.0 59.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_15-3.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgclone_15 pgclone_15-3.6.0-1PIGSTY.el8.aarch64.rpm pigsty 3.6.0 58.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_15-3.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgclone_15 pgclone_15-3.6.0-1PIGSTY.el9.x86_64.rpm pigsty 3.6.0 59.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_15-3.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgclone_15 pgclone_15-3.6.0-1PIGSTY.el9.aarch64.rpm pigsty 3.6.0 59.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_15-3.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgclone_15 pgclone_15-3.6.0-1PIGSTY.el10.x86_64.rpm pigsty 3.6.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_15-3.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgclone_15 pgclone_15-3.6.0-1PIGSTY.el10.aarch64.rpm pigsty 3.6.0 59.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_15-3.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb pigsty 3.6.0 130.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb pigsty 3.6.0 127.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb pigsty 3.6.0 129.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb pigsty 3.6.0 126.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb pigsty 3.6.0 143.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb pigsty 3.6.0 143.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~noble_amd64.deb pigsty 3.6.0 129.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_3.6.0-1PIGSTY~noble_arm64.deb pigsty 3.6.0 128.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_3.6.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgclone_14 pgclone_14-3.6.0-1PIGSTY.el8.x86_64.rpm pigsty 3.6.0 59.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_14-3.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgclone_14 pgclone_14-3.6.0-1PIGSTY.el8.aarch64.rpm pigsty 3.6.0 58.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_14-3.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgclone_14 pgclone_14-3.6.0-1PIGSTY.el9.x86_64.rpm pigsty 3.6.0 59.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_14-3.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgclone_14 pgclone_14-3.6.0-1PIGSTY.el9.aarch64.rpm pigsty 3.6.0 58.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_14-3.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgclone_14 pgclone_14-3.6.0-1PIGSTY.el10.x86_64.rpm pigsty 3.6.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_14-3.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgclone_14 pgclone_14-3.6.0-1PIGSTY.el10.aarch64.rpm pigsty 3.6.0 58.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_14-3.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb pigsty 3.6.0 129.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb pigsty 3.6.0 126.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb pigsty 3.6.0 129.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb pigsty 3.6.0 126.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb pigsty 3.6.0 142.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb pigsty 3.6.0 142.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~noble_amd64.deb pigsty 3.6.0 129.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_3.6.0-1PIGSTY~noble_arm64.deb pigsty 3.6.0 128.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_3.6.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgclone` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgclone         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgclone` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgclone;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgclone -v 18  # PG 18
pig ext install -y pgclone -v 17  # PG 17
pig ext install -y pgclone -v 16  # PG 16
pig ext install -y pgclone -v 15  # PG 15
pig ext install -y pgclone -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgclone_18       # PG 18
dnf install -y pgclone_17       # PG 17
dnf install -y pgclone_16       # PG 16
dnf install -y pgclone_15       # PG 15
dnf install -y pgclone_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgclone   # PG 18
apt install -y postgresql-17-pgclone   # PG 17
apt install -y postgresql-16-pgclone   # PG 16
apt install -y postgresql-15-pgclone   # PG 15
apt install -y postgresql-14-pgclone   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgclone';
```


**创建扩展**：

```sql
CREATE EXTENSION pgclone;
```


## 用法

> 语法：
>
> ```sql
> CREATE EXTENSION pgclone;
> SELECT pgclone_table('host=source-server dbname=mydb user=postgres password=secret',
>                      'public', 'customers', true);
> ```
>
> 来源：[README](https://github.com/valehdba/pgclone)，[使用指南](https://github.com/valehdba/pgclone/blob/main/docs/USAGE.md)

`pgclone` 可以直接从 SQL 克隆 PostgreSQL 数据库、模式、表、函数、角色和权限。上游 README 强调它使用 PostgreSQL 的 COPY 协议，避免了外部 `pg_dump` / `pg_restore` 工作流。

## 核心能力

README 列出的支持包括：

- 克隆表、模式、函数和完整数据库
- 索引、约束、触发器、视图、物化视图和序列
- 通过列选择和 `WHERE` 过滤进行选择性克隆
- 使用 error、skip、replace 或 rename 策略处理冲突
- 数据脱敏与敏感列发现
- 使用后台 worker 的异步与并行克隆

## 基本函数

```sql
SELECT pgclone_table(
    'host=source-server dbname=mydb user=postgres password=secret',
    'public', 'customers', true
);

SELECT pgclone_schema(
    'host=source-server dbname=mydb user=postgres password=secret',
    'sales', true
);

SELECT pgclone_database(
    'host=source-server dbname=mydb user=postgres password=secret',
    true
);
```

README 还记录了 `pgclone_version()`，用于安装后做版本确认。

## 异步模式

如果要使用后台 worker 功能，扩展必须预加载：

```ini
shared_preload_libraries = 'pgclone'
```

上游文档把异步操作、进度跟踪和多 worker 并行克隆拆分在独立文档中说明。

## 需求

当前上游要求如下：

- PostgreSQL 14 或更高版本
- PostgreSQL 开发头文件
- `libpq` 开发库
- GCC 或兼容的 C 编译器

项目主页是 [postgresql.az](https://postgresql.az/)，README 还链接了使用指南、异步操作、测试和架构等独立文档。
