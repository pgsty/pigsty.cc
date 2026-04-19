---
title: "pg_strict"
linkTitle: "pg_strict"
description: "防止不带WHERE条件的危险UPDATE和DELETE操作"
weight: 5830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/spa5k/pg_strict">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">spa5k/pg_strict</div>
    <div class="ext-card__desc">https://github.com/spa5k/pg_strict</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_strict-1.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_strict-1.0.5.tar.gz</div>
    <div class="ext-card__desc">pg_strict-1.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_strict`**](/ext/e/pg_strict) | `1.0.5` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5830  | [**`pg_strict`**](/ext/e/pg_strict) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`safeupdate`](/ext/e/safeupdate) [`pg_savior`](/ext/e/pg_savior) [`pg_upless`](/ext/e/pg_upless) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_readonly`](/ext/e/pg_readonly) [`table_log`](/ext/e/table_log) [`pgaudit`](/ext/e/pgaudit) [`pg_permissions`](/ext/e/pg_permissions) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manually upgraded PGRX from 0.16.1 to 0.17.0 by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_strict` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_strict_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-strict` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
@ el8.x86_64 18 pg_strict_18 pg_strict_18-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 328.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_strict_18-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_strict_18 pg_strict_18-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 220.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_strict_18-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_strict_18 pg_strict_18-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 344.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_strict_18-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_strict_18 pg_strict_18-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 236.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_strict_18-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_strict_18 pg_strict_18-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 344.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_strict_18-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_strict_18 pg_strict_18-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 236.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_strict_18-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 269.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 170.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 270.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 170.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 306.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 198.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 303.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-strict postgresql-18-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 196.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-18-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_strict_17 pg_strict_17-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 328.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_strict_17-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_strict_17 pg_strict_17-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 220.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_strict_17-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_strict_17 pg_strict_17-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 344.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_strict_17-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_strict_17 pg_strict_17-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 236.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_strict_17-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_strict_17 pg_strict_17-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 344.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_strict_17-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_strict_17 pg_strict_17-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 236.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_strict_17-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 269.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 170.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 269.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 170.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 306.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 198.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 303.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-strict postgresql-17-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 197.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-17-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_strict_16 pg_strict_16-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 328.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_strict_16-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_strict_16 pg_strict_16-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 220.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_strict_16-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_strict_16 pg_strict_16-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 344.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_strict_16-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_strict_16 pg_strict_16-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 236.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_strict_16-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_strict_16 pg_strict_16-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 344.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_strict_16-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_strict_16 pg_strict_16-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 236.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_strict_16-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 269.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 170.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 269.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 170.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 306.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 198.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 303.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-strict postgresql-16-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 196.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-16-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_strict_15 pg_strict_15-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 327.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_strict_15-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_strict_15 pg_strict_15-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 220.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_strict_15-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_strict_15 pg_strict_15-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 344.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_strict_15-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_strict_15 pg_strict_15-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 236.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_strict_15-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_strict_15 pg_strict_15-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 344.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_strict_15-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_strict_15 pg_strict_15-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 236.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_strict_15-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 269.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 170.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 270.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 170.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 306.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 198.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 303.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-strict postgresql-15-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 197.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-15-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_strict_14 pg_strict_14-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 327.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_strict_14-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_strict_14 pg_strict_14-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 220.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_strict_14-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_strict_14 pg_strict_14-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 344.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_strict_14-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_strict_14 pg_strict_14-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 236.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_strict_14-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_strict_14 pg_strict_14-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 344.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_strict_14-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_strict_14 pg_strict_14-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 236.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_strict_14-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 270.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 170.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 270.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 170.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 306.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 198.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 303.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-strict postgresql-14-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 197.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-strict/postgresql-14-pg-strict_1.0.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_strict` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_strict         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_strict` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_strict;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_strict -v 18  # PG 18
pig ext install -y pg_strict -v 17  # PG 17
pig ext install -y pg_strict -v 16  # PG 16
pig ext install -y pg_strict -v 15  # PG 15
pig ext install -y pg_strict -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_strict_18       # PG 18
dnf install -y pg_strict_17       # PG 17
dnf install -y pg_strict_16       # PG 16
dnf install -y pg_strict_15       # PG 15
dnf install -y pg_strict_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-strict   # PG 18
apt install -y postgresql-17-pg-strict   # PG 17
apt install -y postgresql-16-pg-strict   # PG 16
apt install -y postgresql-15-pg-strict   # PG 15
apt install -y postgresql-14-pg-strict   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_strict';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_strict;
```

## 用法

来源：[README](https://github.com/spa5k/pg_strict/blob/master/README.md)，[Release v1.0.5](https://github.com/spa5k/pg_strict/releases/tag/v1.0.5)，[API source](https://github.com/spa5k/pg_strict/blob/master/src/api.rs)

`pg_strict` 会阻止或警告缺少 `WHERE` 子句的 `UPDATE` 与 `DELETE` 语句。它通过 `post_parse_analyze_hook` 工作，因此必须从 `shared_preload_libraries` 加载。

### 所需设置

```sql
-- postgresql.conf
shared_preload_libraries = 'pg_strict'

CREATE EXTENSION pg_strict;
```

### GUCs

- `pg_strict.require_where_on_update`
- `pg_strict.require_where_on_delete`

每个设置都支持 `off`、`warn` 与 `on`。

```sql
SET pg_strict.require_where_on_update = 'on';
SET pg_strict.require_where_on_delete = 'warn';
```

### 辅助函数

```sql
SELECT pg_strict_version();
SELECT * FROM pg_strict_config();

SELECT pg_strict_check_where_clause('DELETE FROM t', 'DELETE');
SELECT pg_strict_validate_update('UPDATE t SET x = 1 WHERE id = 42');
SELECT pg_strict_validate_delete('DELETE FROM t WHERE id = 42');

SELECT pg_strict_enable_update();
SELECT pg_strict_warn_delete();
SELECT pg_strict_disable_delete();
```

- `pg_strict_set_update_mode(mode)` 与 `pg_strict_set_delete_mode(mode)` 提供通用模式设置器。
- `SET LOCAL` 可用于事务中的一次性 bulk operation。

### 注意事项

- 它检查的是 `WHERE` 的存在性，而不是语义意图：任何非空 `WHERE` 子句都会满足规则。
- 仅检查 `UPDATE` 与 `DELETE`。
- 当前上游版本是 `1.0.5`；Pigsty 关于 `pgrx` 0.17.0 的说明属于打包或构建元数据，不是文档化的用户功能变化。
