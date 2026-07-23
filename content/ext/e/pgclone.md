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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgclone-4.4.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgclone-4.4.2.tar.gz</div>
    <div class="ext-card__desc">pgclone-4.4.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgclone`**](/ext/e/pgclone) | `4.4.2` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9590  | [**`pgclone`**](/ext/e/pgclone) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`db_migrator`](/ext/e/db_migrator) [`pglogical`](/ext/e/pglogical) [`repmgr`](/ext/e/repmgr) [`pgactive`](/ext/e/pgactive) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> preload for async/progress; RPM LLVM_BINPATH build fix retained in the 4.4.2 package.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.4.2` | {{< pgvers "18,17,16,15,14" >}} | `pgclone` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.4.2` | {{< pgvers "18,17,16,15,14" >}} | `pgclone_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgclone` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| el8.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| el9.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| el9.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| el10.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| el10.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| d12.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| d12.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| d13.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| d13.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| u22.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| u22.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| u24.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| u24.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| u26.x86_64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
| u26.aarch64 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 | AVAIL PIGSTY 4.4.2 1 |
@ el8.x86_64 18 pgclone_18 pgclone_18-4.4.2-1PIGSTY.el8.x86_64.rpm pigsty 4.4.2 98.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_18-4.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgclone_18 pgclone_18-4.4.2-1PIGSTY.el8.aarch64.rpm pigsty 4.4.2 95.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_18-4.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgclone_18 pgclone_18-4.4.2-1PIGSTY.el9.x86_64.rpm pigsty 4.4.2 96.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_18-4.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgclone_18 pgclone_18-4.4.2-1PIGSTY.el9.aarch64.rpm pigsty 4.4.2 96.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_18-4.4.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgclone_18 pgclone_18-4.4.2-1PIGSTY.el10.x86_64.rpm pigsty 4.4.2 97.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_18-4.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgclone_18 pgclone_18-4.4.2-1PIGSTY.el10.aarch64.rpm pigsty 4.4.2 96.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_18-4.4.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb pigsty 4.4.2 222.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb pigsty 4.4.2 216.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb pigsty 4.4.2 222.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb pigsty 4.4.2 216.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb pigsty 4.4.2 220.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb pigsty 4.4.2 220.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~noble_amd64.deb pigsty 4.4.2 216.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~noble_arm64.deb pigsty 4.4.2 214.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb pigsty 4.4.2 213.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb pigsty 4.4.2 212.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-18-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgclone_17 pgclone_17-4.4.2-1PIGSTY.el8.x86_64.rpm pigsty 4.4.2 98.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_17-4.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgclone_17 pgclone_17-4.4.2-1PIGSTY.el8.aarch64.rpm pigsty 4.4.2 95.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_17-4.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgclone_17 pgclone_17-4.4.2-1PIGSTY.el9.x86_64.rpm pigsty 4.4.2 96.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_17-4.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgclone_17 pgclone_17-4.4.2-1PIGSTY.el9.aarch64.rpm pigsty 4.4.2 96.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_17-4.4.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgclone_17 pgclone_17-4.4.2-1PIGSTY.el10.x86_64.rpm pigsty 4.4.2 97.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_17-4.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgclone_17 pgclone_17-4.4.2-1PIGSTY.el10.aarch64.rpm pigsty 4.4.2 96.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_17-4.4.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb pigsty 4.4.2 221.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb pigsty 4.4.2 216.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb pigsty 4.4.2 222.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb pigsty 4.4.2 216.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb pigsty 4.4.2 236.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb pigsty 4.4.2 235.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~noble_amd64.deb pigsty 4.4.2 215.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~noble_arm64.deb pigsty 4.4.2 213.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb pigsty 4.4.2 213.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb pigsty 4.4.2 212.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-17-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgclone_16 pgclone_16-4.4.2-1PIGSTY.el8.x86_64.rpm pigsty 4.4.2 98.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_16-4.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgclone_16 pgclone_16-4.4.2-1PIGSTY.el8.aarch64.rpm pigsty 4.4.2 95.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_16-4.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgclone_16 pgclone_16-4.4.2-1PIGSTY.el9.x86_64.rpm pigsty 4.4.2 96.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_16-4.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgclone_16 pgclone_16-4.4.2-1PIGSTY.el9.aarch64.rpm pigsty 4.4.2 96.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_16-4.4.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgclone_16 pgclone_16-4.4.2-1PIGSTY.el10.x86_64.rpm pigsty 4.4.2 97.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_16-4.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgclone_16 pgclone_16-4.4.2-1PIGSTY.el10.aarch64.rpm pigsty 4.4.2 96.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_16-4.4.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb pigsty 4.4.2 221.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb pigsty 4.4.2 216.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb pigsty 4.4.2 222.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb pigsty 4.4.2 216.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb pigsty 4.4.2 236.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb pigsty 4.4.2 235.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~noble_amd64.deb pigsty 4.4.2 215.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~noble_arm64.deb pigsty 4.4.2 213.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb pigsty 4.4.2 213.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb pigsty 4.4.2 212.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-16-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgclone_15 pgclone_15-4.4.2-1PIGSTY.el8.x86_64.rpm pigsty 4.4.2 97.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_15-4.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgclone_15 pgclone_15-4.4.2-1PIGSTY.el8.aarch64.rpm pigsty 4.4.2 95.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_15-4.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgclone_15 pgclone_15-4.4.2-1PIGSTY.el9.x86_64.rpm pigsty 4.4.2 96.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_15-4.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgclone_15 pgclone_15-4.4.2-1PIGSTY.el9.aarch64.rpm pigsty 4.4.2 96.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_15-4.4.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgclone_15 pgclone_15-4.4.2-1PIGSTY.el10.x86_64.rpm pigsty 4.4.2 97.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_15-4.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgclone_15 pgclone_15-4.4.2-1PIGSTY.el10.aarch64.rpm pigsty 4.4.2 96.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_15-4.4.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb pigsty 4.4.2 221.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb pigsty 4.4.2 216.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb pigsty 4.4.2 222.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb pigsty 4.4.2 216.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb pigsty 4.4.2 235.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb pigsty 4.4.2 235.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~noble_amd64.deb pigsty 4.4.2 215.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~noble_arm64.deb pigsty 4.4.2 214.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb pigsty 4.4.2 213.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb pigsty 4.4.2 212.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-15-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgclone_14 pgclone_14-4.4.2-1PIGSTY.el8.x86_64.rpm pigsty 4.4.2 97.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_14-4.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgclone_14 pgclone_14-4.4.2-1PIGSTY.el8.aarch64.rpm pigsty 4.4.2 95.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_14-4.4.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgclone_14 pgclone_14-4.4.2-1PIGSTY.el9.x86_64.rpm pigsty 4.4.2 96.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_14-4.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgclone_14 pgclone_14-4.4.2-1PIGSTY.el9.aarch64.rpm pigsty 4.4.2 96.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_14-4.4.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgclone_14 pgclone_14-4.4.2-1PIGSTY.el10.x86_64.rpm pigsty 4.4.2 97.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_14-4.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgclone_14 pgclone_14-4.4.2-1PIGSTY.el10.aarch64.rpm pigsty 4.4.2 96.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_14-4.4.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb pigsty 4.4.2 221.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb pigsty 4.4.2 216.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb pigsty 4.4.2 221.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb pigsty 4.4.2 215.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb pigsty 4.4.2 234.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb pigsty 4.4.2 233.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~noble_amd64.deb pigsty 4.4.2 215.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~noble_arm64.deb pigsty 4.4.2 213.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb pigsty 4.4.2 213.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb pigsty 4.4.2 211.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-14-pgclone_4.4.2-1PIGSTY~resolute_arm64.deb
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

来源：

- [pgclone v4.4.2 README](https://github.com/valehdba/pgclone/blob/v4.4.2/README.md)
- [pgclone v4.4.2 使用指南](https://github.com/valehdba/pgclone/blob/v4.4.2/docs/USAGE.md)
- [异步克隆指南](https://github.com/valehdba/pgclone/blob/v4.4.2/docs/ASYNC.md)
- [pgclone v4.4.2 发行说明](https://github.com/valehdba/pgclone/releases/tag/v4.4.2)

pgclone 通过 PostgreSQL 连接克隆表、模式、函数、角色或整个数据库。它还提供预检、结构差异、屏蔽、一致快照以及可选的后台作业。使用它进行受控数据库复制，而不是将其用作备份和恢复的无人值守替代品。

### 创建并运行一个克隆

    CREATE EXTENSION pgclone;
    SELECT pgclone.version();

    SELECT pgclone.table(
      'host=source.example dbname=app user=clone_user',
      'public',
      'customers',
      true
    );

模式和数据库入口点遵循相同的连接优先模式：

    SELECT pgclone.schema(
      'host=source.example dbname=app user=clone_user',
      'sales',
      true
    );

    SELECT pgclone.database(
      'host=source.example dbname=app user=clone_user',
      true
    );

主要 API 包括 pgclone.table、pgclone.schema、pgclone.functions、pgclone.database 和 pgclone.database_create。_ex 变体暴露了对索引、约束和触发器的显式选择。

### 过滤和屏蔽数据

JSON 选项可以限制列和行：

    SELECT pgclone.table(
      'host=source.example dbname=app user=clone_user',
      'public',
      'users',
      true,
      'users_lite',
      '{"columns":["id","name","email"],"where":"active"}'
    );

4.4 版本增加了模式级和数据库级屏蔽、表包含模式以及 exclude_tables。屏蔽表达式在源端的 COPY 查询中运行，因此成功屏蔽的数据不会以未屏蔽的形式到达目标。

4.4.2 版本的屏蔽验证器会跳过不安全或不兼容的屏蔽：无法转换为列的常量值、NOT NULL 列中的 NULL 值、唯一或主键列上的非哈希屏蔽，以及外键列上的屏蔽。被跳过的屏蔽会使该列保持未屏蔽状态。将警告视为隐私门失败，并在分发克隆之前检查结果。

### 预检、差异和一致性

    SELECT pgclone.preflight(
      'host=source.example dbname=app user=clone_user',
      'public'
    )::jsonb;

    SELECT pgclone.diff(
      'host=source.example dbname=app user=clone_user',
      'public'
    )::jsonb;

预检检查连接性、版本、权限、容量、名称、角色、扩展和表空间。差异报告 DDL 差异而不应用更改。

模式和数据库克隆默认使用共享导出快照，因此相关表可以一致地复制。长时间的快照可能会延迟源真空清理和 WAL 回收。仅在明确接受跨表不一致性时才将 consistent 选项设置为 false。

### 异步作业

异步执行需要预加载和重启：

    shared_preload_libraries = 'pgclone'

    SELECT pgclone.schema_async(
      'host=source.example dbname=app user=clone_user',
      'sales',
      true,
      '{"parallel":4}'
    );

    SELECT * FROM pgclone.jobs_view;
    SELECT pgclone.progress(1);
    SELECT pgclone.cancel(1);

pgclone 还暴露了 progress_detail、resume 和 clear_jobs 用于作业管理。根据所需的并行度调整 max_worker_processes。

### 重要边界

- 上游使用指南要求超级用户权限来安装和使用 pgclone。
- 异步模式下的模式/数据库/并行路径在 v4.4.2 中不尊重屏蔽、表或 exclude_tables。当这些控制是安全需求时，请使用文档中同步路径。
- 请勿将密码存储在 SQL 和日志中；优先考虑 libpq 服务文件、密钥文件或其他受控凭据机制。
- v4.4.2 版本改进了序列状态的复制，并保护 PostgreSQL 17 源会话免受 transaction_timeout 影响，但调用者仍需验证对象所有权、扩展、角色和克隆后应用程序行为。
