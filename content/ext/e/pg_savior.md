---
title: "pg_savior"
linkTitle: "pg_savior"
description: "阻止不带条件的全表更新以避免意外事故"
weight: 5810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/viggy28/pg_savior">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">viggy28/pg_savior</div>
    <div class="ext-card__desc">https://github.com/viggy28/pg_savior</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_savior-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_savior-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_savior-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_savior`**](/ext/e/pg_savior) | `0.0.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5810  | [**`pg_savior`**](/ext/e/pg_savior) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_upless`](/ext/e/pg_upless) [`safeupdate`](/ext/e/safeupdate) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`table_log`](/ext/e/table_log) [`pg_snakeoil`](/ext/e/pg_snakeoil) [`pg_auditor`](/ext/e/pg_auditor) [`temporal_tables`](/ext/e/temporal_tables) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> -tuplestore_donestoring , breaks on pg18 @ el


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_savior` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_savior_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-savior` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_savior_18 pg_savior_18-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_savior_18-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_savior_18 pg_savior_18-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_savior_18-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_savior_18 pg_savior_18-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_savior_18-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_savior_18 pg_savior_18-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_savior_18-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_savior_18 pg_savior_18-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_savior_18-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_savior_18 pg_savior_18-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_savior_18-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 15.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 15.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 15.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 16.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 16.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 16.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-18-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_savior_17 pg_savior_17-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_savior_17-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_savior_17 pg_savior_17-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_savior_17-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_savior_17 pg_savior_17-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_savior_17-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_savior_17 pg_savior_17-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_savior_17-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_savior_17 pg_savior_17-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_savior_17-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_savior_17 pg_savior_17-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_savior_17-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 15.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 15.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 20.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 20.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-17-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_savior_16 pg_savior_16-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_savior_16-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_savior_16 pg_savior_16-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_savior_16-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_savior_16 pg_savior_16-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_savior_16-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_savior_16 pg_savior_16-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_savior_16-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_savior_16 pg_savior_16-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_savior_16-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_savior_16 pg_savior_16-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_savior_16-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 15.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 15.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 19.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 19.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-16-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_savior_15 pg_savior_15-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_savior_15-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_savior_15 pg_savior_15-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_savior_15-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_savior_15 pg_savior_15-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_savior_15-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_savior_15 pg_savior_15-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_savior_15-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_savior_15 pg_savior_15-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_savior_15-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_savior_15 pg_savior_15-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_savior_15-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 15.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 15.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 19.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 19.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-15-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_savior_14 pg_savior_14-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_savior_14-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_savior_14 pg_savior_14-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_savior_14-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_savior_14 pg_savior_14-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_savior_14-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_savior_14 pg_savior_14-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_savior_14-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_savior_14 pg_savior_14-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_savior_14-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_savior_14 pg_savior_14-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_savior_14-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 15.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 15.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 15.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 18.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 18.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 16.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 16.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-14-pg-savior_0.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_savior` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_savior         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_savior` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_savior;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_savior -v 18  # PG 18
pig ext install -y pg_savior -v 17  # PG 17
pig ext install -y pg_savior -v 16  # PG 16
pig ext install -y pg_savior -v 15  # PG 15
pig ext install -y pg_savior -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_savior_18       # PG 18
dnf install -y pg_savior_17       # PG 17
dnf install -y pg_savior_16       # PG 16
dnf install -y pg_savior_15       # PG 15
dnf install -y pg_savior_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-savior   # PG 18
apt install -y postgresql-17-pg-savior   # PG 17
apt install -y postgresql-16-pg-savior   # PG 16
apt install -y postgresql-15-pg-savior   # PG 15
apt install -y postgresql-14-pg-savior   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_savior;
```



## 用法

> [pg_savior: 防止误操作的 Postgres 扩展](https://github.com/viggy28/pg_savior)

`pg_savior` 扩展拦截查询执行以防止意外的数据删除。它通过钩入执行器来检测危险的 DELETE 操作并阻止它们。

### 工作原理

当处理 DELETE 语句时，`pg_savior` 检查：

- DELETE 命令中**缺失 WHERE 子句**
- DELETE 查询计划中的**索引扫描操作**
- DELETE 操作中涉及 CTE 和子查询的**复杂查询**

当检测到有风险的 DELETE 时，扩展会阻止执行并返回一条信息消息，影响行数为零。

### 示例

```sql
CREATE EXTENSION pg_savior;

-- 尝试不带 WHERE 子句的 DELETE
DELETE FROM emp;
-- INFO:  pg_savior: DELETE statement detected
-- INFO:  pg_savior: WHERE clause is mandatory for a DELETE statement
-- DELETE 0  （无行受影响，数据已保留）

-- 带 WHERE 子句的正常 DELETE 按预期工作
DELETE FROM emp WHERE id = 42;
-- DELETE 1
```

### 注意事项

- 该扩展通过 PostgreSQL 执行器钩子运行，无需更改应用程序代码
- 当前仅拦截 DELETE 语句；UPDATE 操作不受影响
- 计划中的功能包括阻止不带 `CONCURRENTLY` 的 `CREATE INDEX` 和阻止 `DROP DATABASE`
