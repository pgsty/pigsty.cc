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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgclone-4.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgclone-4.0.0.tar.gz</div>
    <div class="ext-card__desc">pgclone-4.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgclone`**](/ext/e/pgclone) | `4.0.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9590  | [**`pgclone`**](/ext/e/pgclone) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`db_migrator`](/ext/e/db_migrator) [`pglogical`](/ext/e/pglogical) [`repmgr`](/ext/e/repmgr) [`pgactive`](/ext/e/pgactive) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> preload for async/progress


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pgclone` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pgclone_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgclone` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 | AVAIL PIGSTY 4.0.0 1 |
@ el8.x86_64 18 pgclone_18 pgclone_18-4.0.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0.0 60.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_18-4.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgclone_18 pgclone_18-4.0.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0.0 59.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_18-4.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgclone_18 pgclone_18-4.0.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0.0 60.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_18-4.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgclone_18 pgclone_18-4.0.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_18-4.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgclone_18 pgclone_18-4.0.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_18-4.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgclone_18 pgclone_18-4.0.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_18-4.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0.0 131.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0.0 128.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb pigsty 4.0.0 131.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb pigsty 4.0.0 127.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb pigsty 4.0.0 133.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb pigsty 4.0.0 133.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~noble_amd64.deb pigsty 4.0.0 130.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.0.0-1PIGSTY~noble_arm64.deb pigsty 4.0.0 129.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgclone_17 pgclone_17-4.0.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0.0 60.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_17-4.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgclone_17 pgclone_17-4.0.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0.0 59.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_17-4.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgclone_17 pgclone_17-4.0.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0.0 60.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_17-4.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgclone_17 pgclone_17-4.0.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_17-4.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgclone_17 pgclone_17-4.0.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_17-4.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgclone_17 pgclone_17-4.0.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_17-4.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0.0 131.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0.0 127.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb pigsty 4.0.0 130.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb pigsty 4.0.0 127.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb pigsty 4.0.0 144.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb pigsty 4.0.0 144.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~noble_amd64.deb pigsty 4.0.0 130.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.0.0-1PIGSTY~noble_arm64.deb pigsty 4.0.0 129.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgclone_16 pgclone_16-4.0.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0.0 60.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_16-4.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgclone_16 pgclone_16-4.0.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0.0 59.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_16-4.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgclone_16 pgclone_16-4.0.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0.0 60.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_16-4.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgclone_16 pgclone_16-4.0.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_16-4.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgclone_16 pgclone_16-4.0.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_16-4.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgclone_16 pgclone_16-4.0.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_16-4.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0.0 130.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0.0 128.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb pigsty 4.0.0 130.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb pigsty 4.0.0 127.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb pigsty 4.0.0 144.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb pigsty 4.0.0 143.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~noble_amd64.deb pigsty 4.0.0 130.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.0.0-1PIGSTY~noble_arm64.deb pigsty 4.0.0 129.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgclone_15 pgclone_15-4.0.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0.0 60.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_15-4.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgclone_15 pgclone_15-4.0.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0.0 59.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_15-4.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgclone_15 pgclone_15-4.0.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0.0 60.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_15-4.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgclone_15 pgclone_15-4.0.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_15-4.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgclone_15 pgclone_15-4.0.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0.0 61.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_15-4.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgclone_15 pgclone_15-4.0.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_15-4.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0.0 130.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0.0 127.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb pigsty 4.0.0 130.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb pigsty 4.0.0 127.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb pigsty 4.0.0 144.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb pigsty 4.0.0 144.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~noble_amd64.deb pigsty 4.0.0 130.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.0.0-1PIGSTY~noble_arm64.deb pigsty 4.0.0 129.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgclone_14 pgclone_14-4.0.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0.0 60.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_14-4.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgclone_14 pgclone_14-4.0.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0.0 59.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_14-4.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgclone_14 pgclone_14-4.0.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0.0 60.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_14-4.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgclone_14 pgclone_14-4.0.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_14-4.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgclone_14 pgclone_14-4.0.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0.0 61.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_14-4.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgclone_14 pgclone_14-4.0.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0.0 59.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_14-4.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0.0 130.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0.0 127.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb pigsty 4.0.0 130.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb pigsty 4.0.0 127.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb pigsty 4.0.0 143.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb pigsty 4.0.0 142.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~noble_amd64.deb pigsty 4.0.0 129.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.0.0-1PIGSTY~noble_arm64.deb pigsty 4.0.0 128.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_4.0.0-1PIGSTY~noble_arm64.deb
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

来源：[README](https://github.com/valehdba/pgclone/blob/main/README.md)，[Usage guide](https://github.com/valehdba/pgclone/blob/main/docs/USAGE.md)，[Async guide](https://github.com/valehdba/pgclone/blob/main/docs/ASYNC.md)，[Release v4.0.0](https://github.com/valehdba/pgclone/releases/tag/v4.0.0)，[SQL install script](https://github.com/valehdba/pgclone/blob/main/sql/pgclone--4.0.0.sql)

`pgclone` 可以直接通过 SQL 克隆 tables、schemas、functions、roles 以及整个 database。在 v4.0.0 中，公开 API 被放入 `pgclone` schema。

### 核心克隆函数

```sql
CREATE EXTENSION pgclone;

SELECT pgclone.table(
  'host=source-server dbname=mydb user=postgres password=secret',
  'public',
  'customers',
  true
);

SELECT pgclone.schema(
  'host=source-server dbname=mydb user=postgres password=secret',
  'sales',
  true
);

SELECT pgclone.database(
  'host=source-server dbname=mydb user=postgres password=secret',
  true
);
```

- `pgclone.table(...)`、`pgclone.schema(...)`、`pgclone.functions(...)`、`pgclone.database(...)`
- `pgclone.database_create(...)` 会创建本地目标 database 并在其中执行克隆。
- `_ex` 变体显式暴露 indexes、constraints 与 triggers 的布尔开关。

### 选项与脱敏

- JSON 选项支持 `columns`、`where`、`conflict`，以及 `indexes`、`constraints`、`triggers` 等对象开关。
- 上游在 usage guide 中记录了 masking、敏感列自动发现、静态脱敏、动态脱敏、clone verification，以及 GDPR/compliance reporting。

```sql
SELECT pgclone.table(
  'host=source-server dbname=mydb user=postgres',
  'public', 'users', true, 'users_lite',
  '{"columns":["id","name","email"],"where":"status = ''active''"}'
);
```

### 异步与进度

```sql
-- postgresql.conf
shared_preload_libraries = 'pgclone'

SELECT pgclone.schema_async(
  'host=source-server dbname=mydb user=postgres',
  'sales', true, '{"parallel":4}'
);

SELECT * FROM pgclone.jobs_view;
SELECT pgclone.progress(1);
SELECT pgclone.cancel(1);
```

- `pgclone.table_async(...)` 与 `pgclone.schema_async(...)` 在 background workers 中运行。
- `pgclone.jobs_view`、`pgclone.progress_detail()`、`pgclone.resume()` 与 `pgclone.clear_jobs()` 提供 job 跟踪与恢复能力。

### 注意事项

- 上游要求 PostgreSQL 14+。
- usage guide 说明安装和使用该扩展都需要 superuser 权限。
- 异步功能需要 `shared_preload_libraries = 'pgclone'`；worker pool 并行度还取决于 `max_worker_processes`。
