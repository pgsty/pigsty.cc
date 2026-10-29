---
title: "pg_integrity_checksums"
linkTitle: "pg_integrity_checksums"
description: "为 PostgreSQL 页面、行、表、索引与数据库提供物理和逻辑校验和。"
weight: 5115
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/VictorNagibator/pg_integrity_checksums">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">VictorNagibator/pg_integrity_checksums</div>
    <div class="ext-card__desc">https://github.com/VictorNagibator/pg_integrity_checksums</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_integrity_checksums-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_integrity_checksums-2.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_integrity_checksums-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_integrity_checksums`**](/ext/e/pg_integrity_checksums) | `2.0.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5115  | [**`pg_integrity_checksums`**](/ext/e/pg_integrity_checksums) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`amcheck`](/ext/e/amcheck) [`pg_checksums`](/ext/e/pg_checksums) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Former pg_checksums SQL extension, unrelated to the core/PGDG utility. Old/new extensions cannot share a schema; follow MIGRATION.md. Superuser install; relation checks enforce SELECT and reject RLS; database checks require superuser. Logical checksums compare content; physical checksums depend on storage. PG14-18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_integrity_checksums` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_integrity_checksums_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-integrity-checksums` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
@ el8.x86_64 18 pg_integrity_checksums_18 pg_integrity_checksums_18-2.0.0-1PGSTY.el8.x86_64.rpm pigsty 2.0.0 89.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_integrity_checksums_18-2.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_integrity_checksums_18 pg_integrity_checksums_18-2.0.0-1PGSTY.el8.aarch64.rpm pigsty 2.0.0 87.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_integrity_checksums_18-2.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_integrity_checksums_18 pg_integrity_checksums_18-2.0.0-1PGSTY.el9.x86_64.rpm pigsty 2.0.0 91.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_integrity_checksums_18-2.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_integrity_checksums_18 pg_integrity_checksums_18-2.0.0-1PGSTY.el9.aarch64.rpm pigsty 2.0.0 89.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_integrity_checksums_18-2.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_integrity_checksums_18 pg_integrity_checksums_18-2.0.0-1PGSTY.el10.x86_64.rpm pigsty 2.0.0 91.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_integrity_checksums_18-2.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_integrity_checksums_18 pg_integrity_checksums_18-2.0.0-1PGSTY.el10.aarch64.rpm pigsty 2.0.0 90.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_integrity_checksums_18-2.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb pigsty 2.0.0 82.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb pigsty 2.0.0 81.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb pigsty 2.0.0 82.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb pigsty 2.0.0 81.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb pigsty 2.0.0 88.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb pigsty 2.0.0 87.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb pigsty 2.0.0 85.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb pigsty 2.0.0 85.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb pigsty 2.0.0 85.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-integrity-checksums postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb pigsty 2.0.0 83.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-18-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_integrity_checksums_17 pg_integrity_checksums_17-2.0.0-1PGSTY.el8.x86_64.rpm pigsty 2.0.0 89.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_integrity_checksums_17-2.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_integrity_checksums_17 pg_integrity_checksums_17-2.0.0-1PGSTY.el8.aarch64.rpm pigsty 2.0.0 87.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_integrity_checksums_17-2.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_integrity_checksums_17 pg_integrity_checksums_17-2.0.0-1PGSTY.el9.x86_64.rpm pigsty 2.0.0 90.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_integrity_checksums_17-2.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_integrity_checksums_17 pg_integrity_checksums_17-2.0.0-1PGSTY.el9.aarch64.rpm pigsty 2.0.0 89.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_integrity_checksums_17-2.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_integrity_checksums_17 pg_integrity_checksums_17-2.0.0-1PGSTY.el10.x86_64.rpm pigsty 2.0.0 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_integrity_checksums_17-2.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_integrity_checksums_17 pg_integrity_checksums_17-2.0.0-1PGSTY.el10.aarch64.rpm pigsty 2.0.0 89.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_integrity_checksums_17-2.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb pigsty 2.0.0 82.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb pigsty 2.0.0 80.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb pigsty 2.0.0 82.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb pigsty 2.0.0 81.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb pigsty 2.0.0 94.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb pigsty 2.0.0 93.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb pigsty 2.0.0 85.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb pigsty 2.0.0 85.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb pigsty 2.0.0 85.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-integrity-checksums postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb pigsty 2.0.0 83.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-17-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_integrity_checksums_16 pg_integrity_checksums_16-2.0.0-1PGSTY.el8.x86_64.rpm pigsty 2.0.0 90.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_integrity_checksums_16-2.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_integrity_checksums_16 pg_integrity_checksums_16-2.0.0-1PGSTY.el8.aarch64.rpm pigsty 2.0.0 87.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_integrity_checksums_16-2.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_integrity_checksums_16 pg_integrity_checksums_16-2.0.0-1PGSTY.el9.x86_64.rpm pigsty 2.0.0 91.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_integrity_checksums_16-2.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_integrity_checksums_16 pg_integrity_checksums_16-2.0.0-1PGSTY.el9.aarch64.rpm pigsty 2.0.0 89.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_integrity_checksums_16-2.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_integrity_checksums_16 pg_integrity_checksums_16-2.0.0-1PGSTY.el10.x86_64.rpm pigsty 2.0.0 92.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_integrity_checksums_16-2.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_integrity_checksums_16 pg_integrity_checksums_16-2.0.0-1PGSTY.el10.aarch64.rpm pigsty 2.0.0 90.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_integrity_checksums_16-2.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb pigsty 2.0.0 82.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb pigsty 2.0.0 81.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb pigsty 2.0.0 83.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb pigsty 2.0.0 81.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb pigsty 2.0.0 95.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb pigsty 2.0.0 93.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb pigsty 2.0.0 85.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb pigsty 2.0.0 86.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb pigsty 2.0.0 85.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-integrity-checksums postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb pigsty 2.0.0 83.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-16-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_integrity_checksums_15 pg_integrity_checksums_15-2.0.0-1PGSTY.el8.x86_64.rpm pigsty 2.0.0 89.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_integrity_checksums_15-2.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_integrity_checksums_15 pg_integrity_checksums_15-2.0.0-1PGSTY.el8.aarch64.rpm pigsty 2.0.0 87.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_integrity_checksums_15-2.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_integrity_checksums_15 pg_integrity_checksums_15-2.0.0-1PGSTY.el9.x86_64.rpm pigsty 2.0.0 90.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_integrity_checksums_15-2.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_integrity_checksums_15 pg_integrity_checksums_15-2.0.0-1PGSTY.el9.aarch64.rpm pigsty 2.0.0 89.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_integrity_checksums_15-2.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_integrity_checksums_15 pg_integrity_checksums_15-2.0.0-1PGSTY.el10.x86_64.rpm pigsty 2.0.0 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_integrity_checksums_15-2.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_integrity_checksums_15 pg_integrity_checksums_15-2.0.0-1PGSTY.el10.aarch64.rpm pigsty 2.0.0 89.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_integrity_checksums_15-2.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb pigsty 2.0.0 82.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb pigsty 2.0.0 87.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb pigsty 2.0.0 82.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb pigsty 2.0.0 80.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb pigsty 2.0.0 94.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb pigsty 2.0.0 93.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb pigsty 2.0.0 85.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb pigsty 2.0.0 85.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb pigsty 2.0.0 85.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-integrity-checksums postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb pigsty 2.0.0 83.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-15-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_integrity_checksums_14 pg_integrity_checksums_14-2.0.0-1PGSTY.el8.x86_64.rpm pigsty 2.0.0 89.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_integrity_checksums_14-2.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_integrity_checksums_14 pg_integrity_checksums_14-2.0.0-1PGSTY.el8.aarch64.rpm pigsty 2.0.0 87.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_integrity_checksums_14-2.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_integrity_checksums_14 pg_integrity_checksums_14-2.0.0-1PGSTY.el9.x86_64.rpm pigsty 2.0.0 91.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_integrity_checksums_14-2.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_integrity_checksums_14 pg_integrity_checksums_14-2.0.0-1PGSTY.el9.aarch64.rpm pigsty 2.0.0 89.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_integrity_checksums_14-2.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_integrity_checksums_14 pg_integrity_checksums_14-2.0.0-1PGSTY.el10.x86_64.rpm pigsty 2.0.0 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_integrity_checksums_14-2.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_integrity_checksums_14 pg_integrity_checksums_14-2.0.0-1PGSTY.el10.aarch64.rpm pigsty 2.0.0 90.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_integrity_checksums_14-2.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb pigsty 2.0.0 82.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb pigsty 2.0.0 80.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb pigsty 2.0.0 82.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb pigsty 2.0.0 81.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb pigsty 2.0.0 94.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb pigsty 2.0.0 93.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb pigsty 2.0.0 85.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb pigsty 2.0.0 85.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb pigsty 2.0.0 85.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-integrity-checksums postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb pigsty 2.0.0 83.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-integrity-checksums/postgresql-14-pg-integrity-checksums_2.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_integrity_checksums` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_integrity_checksums         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_integrity_checksums` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_integrity_checksums;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_integrity_checksums -v 18  # PG 18
pig ext install -y pg_integrity_checksums -v 17  # PG 17
pig ext install -y pg_integrity_checksums -v 16  # PG 16
pig ext install -y pg_integrity_checksums -v 15  # PG 15
pig ext install -y pg_integrity_checksums -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_integrity_checksums_18       # PG 18
dnf install -y pg_integrity_checksums_17       # PG 17
dnf install -y pg_integrity_checksums_16       # PG 16
dnf install -y pg_integrity_checksums_15       # PG 15
dnf install -y pg_integrity_checksums_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-integrity-checksums   # PG 18
apt install -y postgresql-17-pg-integrity-checksums   # PG 17
apt install -y postgresql-16-pg-integrity-checksums   # PG 16
apt install -y postgresql-15-pg-integrity-checksums   # PG 15
apt install -y postgresql-14-pg-integrity-checksums   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_integrity_checksums;
```

## 用法

来源：

- [PGXN 元数据](https://api.pgxn.org/dist/pg_integrity_checksums/2.0.0/META.json)
- [官方 README](https://api.pgxn.org/src/pg_integrity_checksums/pg_integrity_checksums-2.0.0/README.md)
- [控制文件](https://api.pgxn.org/src/pg_integrity_checksums/pg_integrity_checksums-2.0.0/pg_integrity_checksums.control)
- [迁移指南](https://api.pgxn.org/src/pg_integrity_checksums/pg_integrity_checksums-2.0.0/MIGRATION.md)

`pg_integrity_checksums` 为 PostgreSQL 页面、单元、元组、表、索引和数据库计算物理及逻辑校验和。它是面向 PostgreSQL 12–18 的 C 扩展，会直接读取关系存储，因此安装和数据库级扫描需要超级用户。

### 安装与迁移

```sql
CREATE EXTENSION pg_integrity_checksums;
```

2.0.0 是旧 `pg_checksums` 扩展的重命名延续。PostgreSQL 不支持 `ALTER EXTENSION ... RENAME`；应先检查依赖对象，删除旧扩展，再创建新扩展，并在使用前修改 GUC 前缀：

```sql
DROP EXTENSION pg_checksums;
CREATE EXTENSION pg_integrity_checksums;
SET pg_integrity_checksums.workers = 4;
SET pg_integrity_checksums.strict = on;
```

旧名和新名不能共存，因为它们定义相同的 SQL 函数。PostgreSQL 核心自带的 `pg_checksums` 工具是另一套独立程序。

### 校验和层级

内容比较使用逻辑校验和，存储完整性检查使用物理校验和。逻辑表校验和不要求主键，保留重复行，并排除关系和元组标识符。逻辑索引校验和由可见表行和索引定义计算，因此在 `VACUUM`、`CLUSTER` 和 `REINDEX` 后保持稳定。

```sql
SELECT pg_table_logical_checksum('public.orders'::regclass);
SELECT pg_index_logical_checksum('public.orders_pkey'::regclass);
SELECT pg_database_logical_checksum(false, true);
```

物理校验和包含存储细节，在 `VACUUM FULL`、`CLUSTER`、`REINDEX` 或其他物理重写后可能变化。需要跟踪这些变化时，使用页面、元组和表级物理函数。

### 权限与维护

关系级函数要求调用者拥有关系的 `SELECT` 权限，并拒绝受行级安全策略保护的关系，因为直接存储扫描无法应用 RLS。数据库级函数只允许超级用户执行。`pg_integrity_checksums.workers` 控制并行扫描，`pg_integrity_checksums.strict` 使数据库扫描在关系无法检查时失败，而不是跳过。扩展不要求共享预加载，但应依据发行说明在相关实现变化后重新计算物理基线。
