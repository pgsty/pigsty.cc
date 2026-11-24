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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgclone-4.9.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgclone-4.9.0.tar.gz</div>
    <div class="ext-card__desc">pgclone-4.9.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgclone`**](/ext/e/pgclone) | `4.10.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9590  | [**`pgclone`**](/ext/e/pgclone) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`db_migrator`](/ext/e/db_migrator) [`mimeo`](/ext/e/mimeo) [`postgres_fdw`](/ext/e/postgres_fdw) [`pglogical`](/ext/e/pglogical) [`spock`](/ext/e/spock) [`pgactive`](/ext/e/pgactive) [`pgspider_ext`](/ext/e/pgspider_ext) [`dblink`](/ext/e/dblink) [`pgoutput`](/ext/e/pgoutput) [`mysql_fdw`](/ext/e/mysql_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> preload for async/progress; RPM LLVM_BINPATH build fix retained in the 4.4.2 package.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.10.0` | {{< pgvers "19,18,17,16,15" >}} | `pgclone` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.9.0` | {{< pgvers "19,18,17,16,15" >}} | `pgclone_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.9.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pgclone` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| el9.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| el9.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| el10.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| el10.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| d12.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| d12.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| d13.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| d13.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| u22.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| u22.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| u24.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| u24.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| u26.x86_64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
| u26.aarch64 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 | AVAIL PIGSTY 4.9.0 1 |
@ el9.x86_64 19 pgclone_19 pgclone_19-4.9.0-1PGSTY.el9.x86_64.rpm pigsty 4.9.0 331.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_19-4.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pgclone_19 pgclone_19-4.9.0-1PGSTY.el9.aarch64.rpm pigsty 4.9.0 330.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_19-4.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pgclone_19 pgclone_19-4.9.0-1PGSTY.el10.x86_64.rpm pigsty 4.9.0 334.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_19-4.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pgclone_19 pgclone_19-4.9.0-1PGSTY.el10.aarch64.rpm pigsty 4.9.0 331.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_19-4.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb pigsty 4.9.0 321.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb pigsty 4.9.0 314.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~trixie_amd64.deb pigsty 4.9.0 322.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~trixie_arm64.deb pigsty 4.9.0 313.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~jammy_amd64.deb pigsty 4.9.0 312.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~jammy_arm64.deb pigsty 4.9.0 311.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~noble_amd64.deb pigsty 4.9.0 305.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~noble_arm64.deb pigsty 4.9.0 303.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~resolute_amd64.deb pigsty 4.9.0 303.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-pgclone postgresql-19-pgclone_4.9.0-1PGSTY~resolute_arm64.deb pigsty 4.9.0 301.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-19-pgclone_4.9.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pgclone_18 pgclone_18-4.9.0-1PGSTY.el8.x86_64.rpm pigsty 4.9.0 341.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_18-4.9.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgclone_18 pgclone_18-4.9.0-1PGSTY.el8.aarch64.rpm pigsty 4.9.0 334.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_18-4.9.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgclone_18 pgclone_18-4.9.0-1PGSTY.el9.x86_64.rpm pigsty 4.9.0 331.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_18-4.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgclone_18 pgclone_18-4.9.0-1PGSTY.el9.aarch64.rpm pigsty 4.9.0 330.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_18-4.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgclone_18 pgclone_18-4.9.0-1PGSTY.el10.x86_64.rpm pigsty 4.9.0 334.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_18-4.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgclone_18 pgclone_18-4.9.0-1PGSTY.el10.aarch64.rpm pigsty 4.9.0 331.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_18-4.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb pigsty 4.9.0 322.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb pigsty 4.9.0 314.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~trixie_amd64.deb pigsty 4.9.0 322.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~trixie_arm64.deb pigsty 4.9.0 313.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~jammy_amd64.deb pigsty 4.9.0 312.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~jammy_arm64.deb pigsty 4.9.0 311.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~noble_amd64.deb pigsty 4.9.0 305.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~noble_arm64.deb pigsty 4.9.0 303.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~resolute_amd64.deb pigsty 4.9.0 303.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgclone postgresql-18-pgclone_4.9.0-1PGSTY~resolute_arm64.deb pigsty 4.9.0 301.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-18-pgclone_4.9.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgclone_17 pgclone_17-4.9.0-1PGSTY.el8.x86_64.rpm pigsty 4.9.0 341.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_17-4.9.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgclone_17 pgclone_17-4.9.0-1PGSTY.el8.aarch64.rpm pigsty 4.9.0 334.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_17-4.9.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgclone_17 pgclone_17-4.9.0-1PGSTY.el9.x86_64.rpm pigsty 4.9.0 331.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_17-4.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgclone_17 pgclone_17-4.9.0-1PGSTY.el9.aarch64.rpm pigsty 4.9.0 330.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_17-4.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgclone_17 pgclone_17-4.9.0-1PGSTY.el10.x86_64.rpm pigsty 4.9.0 334.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_17-4.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgclone_17 pgclone_17-4.9.0-1PGSTY.el10.aarch64.rpm pigsty 4.9.0 331.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_17-4.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb pigsty 4.9.0 322.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb pigsty 4.9.0 315.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~trixie_amd64.deb pigsty 4.9.0 322.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~trixie_arm64.deb pigsty 4.9.0 314.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~jammy_amd64.deb pigsty 4.9.0 334.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~jammy_arm64.deb pigsty 4.9.0 333.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~noble_amd64.deb pigsty 4.9.0 305.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~noble_arm64.deb pigsty 4.9.0 303.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~resolute_amd64.deb pigsty 4.9.0 303.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgclone postgresql-17-pgclone_4.9.0-1PGSTY~resolute_arm64.deb pigsty 4.9.0 301.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-17-pgclone_4.9.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgclone_16 pgclone_16-4.9.0-1PGSTY.el8.x86_64.rpm pigsty 4.9.0 340.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_16-4.9.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgclone_16 pgclone_16-4.9.0-1PGSTY.el8.aarch64.rpm pigsty 4.9.0 334.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_16-4.9.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgclone_16 pgclone_16-4.9.0-1PGSTY.el9.x86_64.rpm pigsty 4.9.0 331.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_16-4.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgclone_16 pgclone_16-4.9.0-1PGSTY.el9.aarch64.rpm pigsty 4.9.0 330.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_16-4.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgclone_16 pgclone_16-4.9.0-1PGSTY.el10.x86_64.rpm pigsty 4.9.0 333.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_16-4.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgclone_16 pgclone_16-4.9.0-1PGSTY.el10.aarch64.rpm pigsty 4.9.0 331.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_16-4.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb pigsty 4.9.0 321.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb pigsty 4.9.0 313.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~trixie_amd64.deb pigsty 4.9.0 322.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~trixie_arm64.deb pigsty 4.9.0 313.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~jammy_amd64.deb pigsty 4.9.0 333.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~jammy_arm64.deb pigsty 4.9.0 333.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~noble_amd64.deb pigsty 4.9.0 304.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~noble_arm64.deb pigsty 4.9.0 302.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~resolute_amd64.deb pigsty 4.9.0 302.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgclone postgresql-16-pgclone_4.9.0-1PGSTY~resolute_arm64.deb pigsty 4.9.0 300.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-16-pgclone_4.9.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgclone_15 pgclone_15-4.9.0-1PGSTY.el8.x86_64.rpm pigsty 4.9.0 341.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgclone_15-4.9.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgclone_15 pgclone_15-4.9.0-1PGSTY.el8.aarch64.rpm pigsty 4.9.0 334.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgclone_15-4.9.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgclone_15 pgclone_15-4.9.0-1PGSTY.el9.x86_64.rpm pigsty 4.9.0 343.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgclone_15-4.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgclone_15 pgclone_15-4.9.0-1PGSTY.el9.aarch64.rpm pigsty 4.9.0 341.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgclone_15-4.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgclone_15 pgclone_15-4.9.0-1PGSTY.el10.x86_64.rpm pigsty 4.9.0 346.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgclone_15-4.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgclone_15 pgclone_15-4.9.0-1PGSTY.el10.aarch64.rpm pigsty 4.9.0 342.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgclone_15-4.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb pigsty 4.9.0 322.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb pigsty 4.9.0 314.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~trixie_amd64.deb pigsty 4.9.0 322.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~trixie_arm64.deb pigsty 4.9.0 314.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~jammy_amd64.deb pigsty 4.9.0 345.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~jammy_arm64.deb pigsty 4.9.0 344.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~noble_amd64.deb pigsty 4.9.0 316.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~noble_arm64.deb pigsty 4.9.0 314.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~resolute_amd64.deb pigsty 4.9.0 314.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgclone postgresql-15-pgclone_4.9.0-1PGSTY~resolute_arm64.deb pigsty 4.9.0 311.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgclone/postgresql-15-pgclone_4.9.0-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgclone;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgclone -v 19  # PG 19
pig ext install -y pgclone -v 18  # PG 18
pig ext install -y pgclone -v 17  # PG 17
pig ext install -y pgclone -v 16  # PG 16
pig ext install -y pgclone -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgclone_19       # PG 19
dnf install -y pgclone_18       # PG 18
dnf install -y pgclone_17       # PG 17
dnf install -y pgclone_16       # PG 16
dnf install -y pgclone_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pgclone   # PG 19
apt install -y postgresql-18-pgclone   # PG 18
apt install -y postgresql-17-pgclone   # PG 17
apt install -y postgresql-16-pgclone   # PG 16
apt install -y postgresql-15-pgclone   # PG 15
```


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

- [README.md](https://api.pgxn.org/src/pgclone/pgclone-4.10.0/README.md)
- [pgclone.control](https://api.pgxn.org/src/pgclone/pgclone-4.10.0/pgclone.control)
- [CHANGELOG.md](https://api.pgxn.org/src/pgclone/pgclone-4.10.0/CHANGELOG.md)

- [当前版本资料](https://api.pgxn.org/src/pgclone/pgclone-4.9.0/README.md)
- [当前版本资料](https://api.pgxn.org/src/pgclone/pgclone-4.9.0/pgclone.control)
- [当前版本资料](https://api.pgxn.org/src/pgclone/pgclone-4.9.0/CHANGELOG.md)
- [当前版本资料](https://api.pgxn.org/src/pgclone/pgclone-4.9.0/sql/pgclone--4.8.0--4.9.0.sql)

- [pgclone 4.8.0 变更日志](https://api.pgxn.org/src/pgclone/pgclone-4.8.0/CHANGELOG.md)
- [4.7.0 到 4.8.0 SQL](https://api.pgxn.org/src/pgclone/pgclone-4.8.0/sql/pgclone--4.7.0--4.8.0.sql)
- [pgclone 4.8.0 控制文件](https://api.pgxn.org/src/pgclone/pgclone-4.8.0/pgclone.control)
- [pgclone 4.8.0 README](https://api.pgxn.org/src/pgclone/pgclone-4.8.0/README.md)
- [Upstream source](https://api.pgxn.org/src/pgclone/pgclone-4.7.0/README.md)
- [Upstream source](https://api.pgxn.org/src/pgclone/pgclone-4.7.0/docs/USAGE.md)
- [Upstream source](https://api.pgxn.org/src/pgclone/pgclone-4.7.0/pgclone.control)

- [pgclone v4.5.0 README](https://github.com/valehdba/pgclone/blob/v4.5.0/README.md)
- [pgclone v4.5.0 使用指南](https://github.com/valehdba/pgclone/blob/v4.5.0/docs/USAGE.md)
- [异步克隆指南](https://github.com/valehdba/pgclone/blob/v4.5.0/docs/ASYNC.md)
- [pgclone v4.5.0 发行说明](https://github.com/valehdba/pgclone/releases/tag/v4.5.0)

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

### 冲突处理与远端脱敏报告

从 4.4.3 起，同步表、模式和数据库克隆会执行显式提供的 `conflict` 选项。`replace` 先级联删除已有对象再重建；`skip`、`error` 和 `rename` 分别选择文档规定的其他处理方式。过去被忽略的选项现在可能触发破坏性操作，升级前应检查调用参数。

4.4.4 增加了银行账号与 IBAN 识别，以及远端报告重载：

```sql
SELECT * FROM pgclone.masking_report(
    'host=source.example dbname=app user=clone_user', 'public');
```

### 4.5.0 的 Oracle 数据源

`pgclone.table_from_oracle()` 需要启用了可选 Oracle OCI 支持的动态库，数据库主机也必须能加载 Oracle 客户端。普通构建虽然提供该函数，但会拒绝执行此操作。独立的 `pgclone.oracle_type_to_pg()` 类型映射函数不需要 Oracle 客户端。

```sql
SELECT pgclone.table_from_oracle(
    'dsn=ORACLE_SOURCE user=clone_user',
    'HR', 'EMPLOYEES', dry_run => true);
```

省略 Oracle 密码时，扩展从服务器进程的 `PGCLONE_ORACLE_PASSWORD` 环境变量读取密码。试运行只返回 DDL，不创建目标。实际克隆要求目标模式已存在、目标表不存在，且不会替换该表。DDL 与复制的数据在同一个 PostgreSQL 事务中完成，Oracle 端使用只读快照。

不支持的 Oracle 列类型会在发出警告后跳过，因此必须核对结果列集合。默认值、外键与检查约束、非唯一索引、触发器、分区、标识列属性以及脱敏和过滤逻辑均不复制。替换动态库后，还需升级扩展以安装新增 SQL 函数：

```sql
ALTER EXTENSION pgclone UPDATE TO '4.5.0';
```

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
- 异步模式下的模式/数据库/并行路径在 v4.5.0 中不应用脱敏、表筛选或 exclude_tables。当这些控制是安全需求时，请使用文档中同步路径。
- 请勿将密码存储在 SQL 和日志中；优先考虑 libpq 服务文件、密钥文件或其他受控凭据机制。
- v4.4.2 版本改进了序列状态的复制，并保护 PostgreSQL 17 源会话免受 transaction_timeout 影响，但调用者仍需验证对象所有权、扩展、角色和克隆后应用程序行为。

### 4.7.0 的 SQL Server 与 MySQL 数据源

4.6 的 SQL Server 接口要求可选 FreeTDS 支持；4.7 通过可选客户端库增加 MySQL/MariaDB。公开入口为 pgclone.table_from_sqlserver() 与 pgclone.table_from_mysql()，并提供相应类型映射辅助函数。没有编入客户端支持的构建保留 SQL 接口，但拒绝克隆操作。省略密码时使用服务端 PGCLONE_SQLSERVER_PASSWORD 或 PGCLONE_MYSQL_PASSWORD 环境变量。

先用 dry_run 检查生成的 DDL。实际导入要求目标模式已存在、目标表不存在，绝不覆盖该表。核对跳过或不支持的源列类型，以及文档规定的键与索引映射；默认值、触发器和完整源数据库语义不会照搬。PostgreSQL 的 DDL 与复制行具有事务性，但源快照保证取决于外部引擎及表类型，不能假定非事务型 MySQL 表共享 InnoDB 快照。

安装匹配的库和可选客户端，重新连接会话，再将 SQL 扩展升级至 4.7.0。上面的旧 Oracle 示例说明该接口最初引入时的步骤；当前 SQL 升级为：

```sql
ALTER EXTENSION pgclone UPDATE TO '4.7.0';
```

### 4.8.0 分区克隆与重启边界

4.8.0 没有 SQL 对象变化，但 `make install` 后必须重启 PostgreSQL，再执行 `ALTER EXTENSION pgclone UPDATE`；否则旧预加载库可能找不到更新后的函数。本版本新增 `"conflict": "ignore"`：目标表已存在时保留其定义，并在同步与异步路径中继续加载数据。

分区表 schema 与异步克隆现在先创建父表再创建分区，只从叶子分区复制一次数据，并继承父表主键、索引和触发器，而不是重复克隆。生成列保持生成列语义，COPY 会省略它们并由目标端重新计算；PostgreSQL 18 的虚拟生成列要求目标端也是 PostgreSQL 18。异步单表克隆会预先创建 serial/bigserial 序列并回放其当前值，后台工作进程也会响应 SIGTERM。


### 4.9.0 部分克隆失败

同步模式的 schema 与 database 克隆支持 `on_error: continue`。失败表在独立子事务中回滚，输出错误消息及 SQLSTATE，且不再参与后续外键与触发器处理。返回值为 `COMPLETED WITH ERRORS: N table(s) failed: ...`，不能视为完整成功的克隆。默认仍为中止，取消和关闭错误不会被吞掉。异步 schema 克隆此前已支持单表出错后继续。本版本不增加 SQL 对象：安装匹配文件，按上游要求重启 PostgreSQL，再执行 `ALTER EXTENSION pgclone UPDATE TO '4.9.0'`。

### 4.10.0 支持 PostgreSQL 19

4.10.0 将 PostgreSQL 19 纳入支持范围和 CI 测试矩阵，覆盖 PostgreSQL 14–19，包括跨数据库测试任务。本版修复服务器头文件变化，不改变 SQL 行为。安装匹配的文件、重启 PostgreSQL 后，执行 `ALTER EXTENSION pgclone UPDATE TO '4.10.0';`。
