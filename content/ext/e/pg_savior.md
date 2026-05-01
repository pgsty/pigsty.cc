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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_savior-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_savior-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_savior-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_savior`**](/ext/e/pg_savior) | `0.1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_savior` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_savior_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-savior` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pg_savior_18 pg_savior_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_savior_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_savior_18 pg_savior_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_savior_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_savior_18 pg_savior_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_savior_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_savior_18 pg_savior_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_savior_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_savior_18 pg_savior_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_savior_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_savior_18 pg_savior_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_savior_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-savior postgresql-18-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-18-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_savior_17 pg_savior_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_savior_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_savior_17 pg_savior_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_savior_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_savior_17 pg_savior_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_savior_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_savior_17 pg_savior_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_savior_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_savior_17 pg_savior_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_savior_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_savior_17 pg_savior_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_savior_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-savior postgresql-17-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-17-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_savior_16 pg_savior_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_savior_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_savior_16 pg_savior_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_savior_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_savior_16 pg_savior_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_savior_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_savior_16 pg_savior_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_savior_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_savior_16 pg_savior_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_savior_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_savior_16 pg_savior_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_savior_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 21.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-savior postgresql-16-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-16-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_savior_15 pg_savior_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_savior_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_savior_15 pg_savior_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_savior_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_savior_15 pg_savior_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_savior_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_savior_15 pg_savior_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_savior_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_savior_15 pg_savior_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_savior_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_savior_15 pg_savior_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_savior_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 21.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-savior postgresql-15-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-15-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_savior_14 pg_savior_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_savior_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_savior_14 pg_savior_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_savior_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_savior_14 pg_savior_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_savior_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_savior_14 pg_savior_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_savior_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_savior_14 pg_savior_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_savior_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_savior_14 pg_savior_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_savior_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 21.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-savior postgresql-14-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-savior/postgresql-14-pg-savior_0.1.0-1PIGSTY~resolute_arm64.deb
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

来源：[README](https://github.com/viggy28/pg_savior/blob/v0.1.0/README.md), [release 0.1.0](https://github.com/viggy28/pg_savior/releases/tag/v0.1.0), [PGXN 0.1.0](https://pgxn.org/dist/pg_savior/0.1.0/), [SQL file](https://github.com/viggy28/pg_savior/blob/v0.1.0/pg_savior--0.1.0.sql), [C source](https://github.com/viggy28/pg_savior/blob/v0.1.0/pg_savior.c), [pg_savior.control](https://github.com/viggy28/pg_savior/blob/v0.1.0/pg_savior.control)

`pg_savior` 是一个 PostgreSQL 安全扩展，用于在执行前阻止特定高风险 DML 和 DDL 语句。版本 `0.1.0` 是有意发布到 PGXN 的版本，并且相对 `0.0.1` 进行了重大重写；README 仍将其标记为 pre-1.0，且未准备好用于生产。

### 激活

仅执行 `CREATE EXTENSION` 不会激活检查。SQL 文件只说明保护逻辑位于已加载的 shared library 中，因此每个 backend 都必须通过一种上游支持的路径加载 `pg_savior`：

集群级激活使用 `shared_preload_libraries`，并需要重启 PostgreSQL：

```conf
shared_preload_libraries = 'pg_savior'
```

新连接的会话级激活可以在 config reload 后使用 `session_preload_libraries`：

```conf
session_preload_libraries = 'pg_savior'
```

开发或测试会话可以手动加载 library：

```sql
LOAD 'pg_savior';
CREATE EXTENSION pg_savior;
```

library 加载后，`_PG_init` 会为该 backend 安装 `post_parse_analyze_hook`、`ExecutorStart_hook` 和 `ProcessUtility_hook`。

### DML 保护

`pg_savior` 会阻止没有 `WHERE` 子句的 `DELETE` 和 `UPDATE` 语句。parser hook 检查分析后的 `Query` tree 并抛出 `ERROR`，因此事务会中止，应用会看到失败。

```sql
CREATE TABLE emp (id int);
INSERT INTO emp VALUES (1), (2), (3);

DELETE FROM emp;
-- ERROR: pg_savior: DELETE without WHERE clause is blocked

UPDATE emp SET id = id + 1;
-- ERROR: pg_savior: UPDATE without WHERE clause is blocked

DELETE FROM emp WHERE id = 1;
-- allowed
```

可选的行数保护适用于 planner estimate 超过 `pg_savior.max_rows_affected` 的 `DELETE` 和 `UPDATE` 语句。它从 `ExecutorStart_hook` 运行，在规划之后、触碰 tuple 之前生效。

```sql
SET pg_savior.max_rows_affected = 100;

DELETE FROM emp WHERE id > 0;
-- blocked if the planner estimate is greater than 100 rows
```

### DDL 保护

`ProcessUtility_hook` 只保护上游列出的 DDL 操作：

- 没有 `CONCURRENTLY` 的 `CREATE INDEX` 总是被阻止。
- `DROP DATABASE` 总是被阻止。
- 当目标表大于 `pg_savior.large_table_threshold_rows` 时，`ALTER TABLE ADD COLUMN ... DEFAULT` 被阻止。
- 大表上的 `ALTER TABLE ALTER COLUMN TYPE` 被阻止。
- 当任一目标表是大表时，`TRUNCATE` 被阻止。
- 当任一目标表是大表时，`DROP TABLE` 被阻止。

大表检查使用 `pg_class.reltuples > pg_savior.large_table_threshold_rows`。

```sql
CREATE INDEX emp_idx ON emp (id);
-- ERROR: pg_savior: CREATE INDEX without CONCURRENTLY is blocked

CREATE INDEX CONCURRENTLY emp_idx ON emp (id);
-- allowed by this guard

ALTER TABLE big_emp ADD COLUMN status text DEFAULT 'active';
-- blocked when big_emp is over pg_savior.large_table_threshold_rows

TRUNCATE big_emp;
-- blocked when big_emp is over pg_savior.large_table_threshold_rows
```

### 配置

所有已文档化的 GUC 都是 session-scoped `USERSET` 变量：

| GUC | Default | Effect |
|---|---:|---|
| `pg_savior.enabled` | `on` | 总开关；为 `off` 时不运行检查。 |
| `pg_savior.bypass` | `off` | 允许当前 session 跳过保护。 |
| `pg_savior.max_rows_affected` | `0` | 当估计的 `DELETE`/`UPDATE` 行数高于该值时阻止；`0` 禁用该检查。 |
| `pg_savior.large_table_threshold_rows` | `1000000` | 为受保护的大表 DDL 操作定义 "large"。 |

有意绕过一个事务时使用 `SET LOCAL`：

```sql
BEGIN;
SET LOCAL pg_savior.bypass = on;
DELETE FROM staging_table;
COMMIT;
```

### 注意事项

- 保护生效前，library 必须先在 backend 中加载；`CREATE EXTENSION pg_savior` 只注册扩展元数据。
- 行数保护和大表保护依赖 planner/catalog estimate。近期变更导致 estimate 过期时，应运行 `ANALYZE`。
- `UPDATE` 覆盖范围限于无保护的 `UPDATE` 和可选 planner-estimate 阈值；README 未声称会语义审查每个 `WHERE` predicate。
- DDL 覆盖范围限于列出的 `ProcessUtility_hook` case。不要假设其他 schema 变更会被阻止。
- `ADD COLUMN ... DEFAULT` 保护较保守，会阻止大表上的任何 default，包括较新 PostgreSQL 版本可能无需 full table rewrite 处理的 non-volatile default。
