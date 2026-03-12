---
title: "pg_later"
linkTitle: "pg_later"
description: "执行查询，并在稍后异步获取查询结果"
weight: 1090
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ChuckHend/pg_later">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ChuckHend/pg_later</div>
    <div class="ext-card__desc">https://github.com/ChuckHend/pg_later</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_later-0.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_later-0.4.0.tar.gz</div>
    <div class="ext-card__desc">pg_later-0.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_later`**](/ext/e/pg_later) | `0.4.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1090  | [**`pg_later`**](/ext/e/pg_later) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglater` |
{.ext-table}

| **相关扩展** | [`pgmq`](/ext/e/pgmq) [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_background`](/ext/e/pg_background) [`timescaledb`](/ext/e/timescaledb) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_later` | `pgmq` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_later_$v` | `pgmq_$v` |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-later` | `postgresql-$v-pgmq` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
@ el8.x86_64 18 pg_later_18 pg_later_18-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_later_18-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_later_18 pg_later_18-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 1.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_later_18-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_later_18 pg_later_18-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_later_18-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_later_18 pg_later_18-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_later_18-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_later_18 pg_later_18-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_later_18-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_later_18 pg_later_18-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_later_18-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 991.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 991.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-later postgresql-18-pg-later_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-18-pg-later_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_later_17 pg_later_17-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_later_17-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_later_17 pg_later_17-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 1.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_later_17-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_later_17 pg_later_17-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_later_17-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_later_17 pg_later_17-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_later_17-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_later_17 pg_later_17-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_later_17-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_later_17 pg_later_17-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_later_17-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 990.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 991.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-later postgresql-17-pg-later_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-17-pg-later_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_later_16 pg_later_16-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_later_16-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_later_16 pg_later_16-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 1.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_later_16-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_later_16 pg_later_16-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_later_16-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_later_16 pg_later_16-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_later_16-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_later_16 pg_later_16-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_later_16-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_later_16 pg_later_16-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_later_16-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 990.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 990.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-later postgresql-16-pg-later_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-16-pg-later_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_later_15 pg_later_15-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_later_15-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_later_15 pg_later_15-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 1.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_later_15-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_later_15 pg_later_15-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_later_15-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_later_15 pg_later_15-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_later_15-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_later_15 pg_later_15-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_later_15-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_later_15 pg_later_15-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_later_15-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 992.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 990.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-later postgresql-15-pg-later_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-15-pg-later_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_later_14 pg_later_14-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_later_14-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_later_14 pg_later_14-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 1.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_later_14-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_later_14 pg_later_14-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_later_14-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_later_14 pg_later_14-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_later_14-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_later_14 pg_later_14-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_later_14-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_later_14 pg_later_14-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 1.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_later_14-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 990.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 991.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 1.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-later postgresql-14-pg-later_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 1.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-later/postgresql-14-pg-later_0.4.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_later` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_later         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_later` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_later;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_later -v 18  # PG 18
pig ext install -y pg_later -v 17  # PG 17
pig ext install -y pg_later -v 16  # PG 16
pig ext install -y pg_later -v 15  # PG 15
pig ext install -y pg_later -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_later_18       # PG 18
dnf install -y pg_later_17       # PG 17
dnf install -y pg_later_16       # PG 16
dnf install -y pg_later_15       # PG 15
dnf install -y pg_later_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-later   # PG 18
apt install -y postgresql-17-pg-later   # PG 17
apt install -y postgresql-16-pg-later   # PG 16
apt install -y postgresql-15-pg-later   # PG 15
apt install -y postgresql-14-pg-later   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_later CASCADE;  -- 依赖: pgmq
```



## 用法

> [pg_later: 立即执行 SQL，稍后获取结果](https://github.com/tembo-io/pg_later)

一个用于异步执行查询的 PostgreSQL 扩展。基于 [pgmq](https://github.com/pgmq/pgmq) 构建。

### 快速开始

初始化扩展后端：

```sql
CREATE EXTENSION pg_later CASCADE;
SELECT pglater.init();
```

立即执行一条 SQL 查询：

```sql
SELECT pglater.exec(
  'SELECT * FROM pg_available_extensions ORDER BY name LIMIT 2'
) AS job_id;
```

```text
 job_id
--------
     1
```

稍后通过任务 ID 获取结果：

```sql
SELECT pglater.fetch_results(1);
```

```json
{
  "query": "select * from pg_available_extensions order by name limit 2",
  "job_id": 1,
  "result": [
    {
      "name": "adminpack",
      "comment": "administrative functions for PostgreSQL",
      "default_version": "2.1",
      "installed_version": null
    },
    {
      "name": "amcheck",
      "comment": "functions for verifying relation integrity",
      "default_version": "1.3",
      "installed_version": null
    }
  ],
  "status": "success"
}
```
