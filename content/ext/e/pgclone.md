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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgclone-4.3.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgclone-4.3.2.tar.gz</div>
    <div class="ext-card__desc">pgclone-4.3.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgclone`**](/ext/e/pgclone) | `4.3.2` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.3.2` | {{< pgvers "18,17,16,15,14" >}} | `pgclone` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.3.2` | {{< pgvers "18,17,16,15,14" >}} | `pgclone_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.3.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgclone` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| el8.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| el9.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| el9.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| el10.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| el10.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| d12.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| d12.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| d13.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| d13.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| u22.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| u22.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| u24.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| u24.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| u26.x86_64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
| u26.aarch64 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 | AVAIL PIGSTY 4.3.2 1 |
@ el8.x86_64 18 pgclone_18 pgclone_18-4.3.2-1PIGSTY.el8.x86_64.rpm pigsty 4.3.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_18-4.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgclone_18 pgclone_18-4.3.2-1PIGSTY.el8.aarch64.rpm pigsty 4.3.2 84.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_18-4.3.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgclone_18 pgclone_18-4.3.2-1PIGSTY.el9.x86_64.rpm pigsty 4.3.2 85.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_18-4.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgclone_18 pgclone_18-4.3.2-1PIGSTY.el9.aarch64.rpm pigsty 4.3.2 84.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_18-4.3.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgclone_18 pgclone_18-4.3.2-1PIGSTY.el10.x86_64.rpm pigsty 4.3.2 86.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_18-4.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgclone_18 pgclone_18-4.3.2-1PIGSTY.el10.aarch64.rpm pigsty 4.3.2 84.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_18-4.3.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb pigsty 4.3.2 198.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb pigsty 4.3.2 193.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb pigsty 4.3.2 198.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb pigsty 4.3.2 192.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb pigsty 4.3.2 199.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb pigsty 4.3.2 198.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~noble_amd64.deb pigsty 4.3.2 194.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~noble_arm64.deb pigsty 4.3.2 192.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb pigsty 4.3.2 192.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb pigsty 4.3.2 191.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-18-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgclone_17 pgclone_17-4.3.2-1PIGSTY.el8.x86_64.rpm pigsty 4.3.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_17-4.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgclone_17 pgclone_17-4.3.2-1PIGSTY.el8.aarch64.rpm pigsty 4.3.2 84.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_17-4.3.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgclone_17 pgclone_17-4.3.2-1PIGSTY.el9.x86_64.rpm pigsty 4.3.2 85.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_17-4.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgclone_17 pgclone_17-4.3.2-1PIGSTY.el9.aarch64.rpm pigsty 4.3.2 84.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_17-4.3.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgclone_17 pgclone_17-4.3.2-1PIGSTY.el10.x86_64.rpm pigsty 4.3.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_17-4.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgclone_17 pgclone_17-4.3.2-1PIGSTY.el10.aarch64.rpm pigsty 4.3.2 84.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_17-4.3.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb pigsty 4.3.2 198.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb pigsty 4.3.2 193.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb pigsty 4.3.2 198.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb pigsty 4.3.2 192.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb pigsty 4.3.2 214.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb pigsty 4.3.2 213.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~noble_amd64.deb pigsty 4.3.2 194.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~noble_arm64.deb pigsty 4.3.2 192.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb pigsty 4.3.2 192.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb pigsty 4.3.2 191.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-17-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgclone_16 pgclone_16-4.3.2-1PIGSTY.el8.x86_64.rpm pigsty 4.3.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_16-4.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgclone_16 pgclone_16-4.3.2-1PIGSTY.el8.aarch64.rpm pigsty 4.3.2 84.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_16-4.3.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgclone_16 pgclone_16-4.3.2-1PIGSTY.el9.x86_64.rpm pigsty 4.3.2 85.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_16-4.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgclone_16 pgclone_16-4.3.2-1PIGSTY.el9.aarch64.rpm pigsty 4.3.2 84.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_16-4.3.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgclone_16 pgclone_16-4.3.2-1PIGSTY.el10.x86_64.rpm pigsty 4.3.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_16-4.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgclone_16 pgclone_16-4.3.2-1PIGSTY.el10.aarch64.rpm pigsty 4.3.2 84.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_16-4.3.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb pigsty 4.3.2 198.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb pigsty 4.3.2 193.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb pigsty 4.3.2 198.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb pigsty 4.3.2 192.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb pigsty 4.3.2 213.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb pigsty 4.3.2 213.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~noble_amd64.deb pigsty 4.3.2 194.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~noble_arm64.deb pigsty 4.3.2 192.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb pigsty 4.3.2 192.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb pigsty 4.3.2 191.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-16-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgclone_15 pgclone_15-4.3.2-1PIGSTY.el8.x86_64.rpm pigsty 4.3.2 86.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_15-4.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgclone_15 pgclone_15-4.3.2-1PIGSTY.el8.aarch64.rpm pigsty 4.3.2 84.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_15-4.3.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgclone_15 pgclone_15-4.3.2-1PIGSTY.el9.x86_64.rpm pigsty 4.3.2 85.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_15-4.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgclone_15 pgclone_15-4.3.2-1PIGSTY.el9.aarch64.rpm pigsty 4.3.2 84.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_15-4.3.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgclone_15 pgclone_15-4.3.2-1PIGSTY.el10.x86_64.rpm pigsty 4.3.2 86.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_15-4.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgclone_15 pgclone_15-4.3.2-1PIGSTY.el10.aarch64.rpm pigsty 4.3.2 84.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_15-4.3.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb pigsty 4.3.2 198.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb pigsty 4.3.2 193.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb pigsty 4.3.2 198.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb pigsty 4.3.2 192.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb pigsty 4.3.2 213.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb pigsty 4.3.2 213.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~noble_amd64.deb pigsty 4.3.2 194.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~noble_arm64.deb pigsty 4.3.2 192.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb pigsty 4.3.2 192.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb pigsty 4.3.2 191.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-15-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgclone_14 pgclone_14-4.3.2-1PIGSTY.el8.x86_64.rpm pigsty 4.3.2 86.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_14-4.3.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgclone_14 pgclone_14-4.3.2-1PIGSTY.el8.aarch64.rpm pigsty 4.3.2 84.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_14-4.3.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgclone_14 pgclone_14-4.3.2-1PIGSTY.el9.x86_64.rpm pigsty 4.3.2 85.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_14-4.3.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgclone_14 pgclone_14-4.3.2-1PIGSTY.el9.aarch64.rpm pigsty 4.3.2 84.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_14-4.3.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgclone_14 pgclone_14-4.3.2-1PIGSTY.el10.x86_64.rpm pigsty 4.3.2 86.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_14-4.3.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgclone_14 pgclone_14-4.3.2-1PIGSTY.el10.aarch64.rpm pigsty 4.3.2 84.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_14-4.3.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb pigsty 4.3.2 197.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb pigsty 4.3.2 192.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb pigsty 4.3.2 197.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb pigsty 4.3.2 192.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb pigsty 4.3.2 212.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb pigsty 4.3.2 211.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~noble_amd64.deb pigsty 4.3.2 193.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~noble_arm64.deb pigsty 4.3.2 192.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb pigsty 4.3.2 191.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgclone postgresql-14-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb pigsty 4.3.2 190.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-14-pgclone_4.3.2-1PIGSTY~resolute_arm64.deb
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

来源：[README](https://github.com/valehdba/pgclone/blob/main/README.md), [Usage guide](https://github.com/valehdba/pgclone/blob/main/docs/USAGE.md), [Async guide](https://github.com/valehdba/pgclone/blob/main/docs/ASYNC.md), [Release v4.3.2](https://github.com/valehdba/pgclone/releases/tag/v4.3.2), [changelog](https://github.com/valehdba/pgclone/blob/main/CHANGELOG.md), [SQL install script](https://github.com/valehdba/pgclone/blob/main/sql/pgclone--4.3.2.sql)

`pgclone` 可直接从 SQL 克隆表、schema、函数、角色和整个数据库。在 v4.x 中，公共 API 位于 `pgclone` schema 下；上游和 Pigsty 当前都跟踪 PostgreSQL 14-18。

### 核心克隆函数

```sql
CREATE EXTENSION pgclone;
SELECT pgclone.version();

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
- `pgclone.database_create(...)` 会创建本地目标数据库并克隆进去。
- `_ex` 变体暴露显式布尔参数，用于控制 indexes、constraints 和 triggers。

### 选项与 masking

- JSON options 支持 `columns`、`where`、`conflict`，以及 `indexes`、`constraints`、`triggers` 等对象开关。
- JSON options 也包含 `consistent`；v4.3.0+ 默认使用跨表一致快照，并可通过 `{"consistent": false}` 按调用禁用。
- 上游 usage guide 记录了 masking、敏感列自动发现、static masking、dynamic masking、clone verification，以及 GDPR/compliance reporting。

```sql
SELECT pgclone.table(
  'host=source-server dbname=mydb user=postgres',
  'public', 'users', true, 'users_lite',
  '{"columns":["id","name","email"],"where":"status = ''active''"}'
);
```

### 一致性、diff 与 preflight

```sql
SELECT pgclone.diff(
  'host=source-server dbname=prod user=postgres',
  'app_schema'
)::jsonb;

SELECT pgclone.preflight(
  'host=source-server dbname=prod user=postgres',
  'app_schema'
)::jsonb;
```

- `pgclone.diff(conninfo, schema)` 会报告只读 DDL drift，覆盖 tables、columns、indexes、constraints、triggers、views 和 sequences。
- `pgclone.preflight(conninfo, schema)` 会在 clone 前检查 source 和 target 就绪状态，包括 connection、version、permission、capacity、naming-conflict、missing-role、missing-extension 和 tablespace 问题。
- v4.3.0+ clone 默认在 source 上以 `REPEATABLE READ READ ONLY` 读取。多连接 schema、database 和 parallel-pool clones 共享一个 exported snapshot，从而在 live source 写入期间保持 parent/child 一致性。
- 长时间 clone 会在 source 保持事务打开，可能延迟 vacuum cleanup 和 WAL recycling；当该代价比跨表一致性更重要时，可使用 `{"consistent": false}`。

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

- `pgclone.table_async(...)` 和 `pgclone.schema_async(...)` 在 background workers 中运行。
- `pgclone.jobs_view`、`pgclone.progress_detail()`、`pgclone.resume()` 和 `pgclone.clear_jobs()` 提供任务跟踪和恢复。
- v4.3.2 将 snapshot-keeper resilience fixes 移植到 async/background-worker 路径，包括 keepalive injection 和面向网络 source connection 的 timeout protection。

### 注意事项

- 上游要求 PostgreSQL 14+。
- usage guide 说明安装和使用该扩展需要 superuser 权限。
- 异步功能需要 `shared_preload_libraries = 'pgclone'`；worker-pool parallelism 也依赖 `max_worker_processes`。
- 若必须绕过 source-side snapshot 问题，一致性异步 clone 仍可使用 `{"consistent": false}` 退出一致快照模式。
