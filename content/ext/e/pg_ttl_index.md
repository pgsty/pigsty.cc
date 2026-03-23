---
title: "pg_ttl_index"
linkTitle: "pg_ttl_index"
description: "基于TTL索引的自动数据过期清理"
weight: 2740
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ibrahimkarimeddin/postgres-extensions-pg_ttl">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ibrahimkarimeddin/postgres-extensions-pg_ttl</div>
    <div class="ext-card__desc">https://github.com/ibrahimkarimeddin/postgres-extensions-pg_ttl</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgres-extensions-pg_ttl-3.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgres-extensions-pg_ttl-3.0.0.tar.gz</div>
    <div class="ext-card__desc">postgres-extensions-pg_ttl-3.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ttl_index`**](/ext/e/pg_ttl_index) | `3.0.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2740  | [**`pg_ttl_index`**](/ext/e/pg_ttl_index) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`temporal_tables`](/ext/e/temporal_tables) [`periods`](/ext/e/periods) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_partman`](/ext/e/pg_partman) [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`timescaledb`](/ext/e/timescaledb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg 14 breaks


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_ttl_index` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_ttl_index_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-ttl-index` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_ttl_index_18 pg_ttl_index_18-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ttl_index_18-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_ttl_index_18 pg_ttl_index_18-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 24.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ttl_index_18-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_ttl_index_18 pg_ttl_index_18-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ttl_index_18-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_ttl_index_18 pg_ttl_index_18-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ttl_index_18-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_ttl_index_18 pg_ttl_index_18-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ttl_index_18-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_ttl_index_18 pg_ttl_index_18-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 23.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ttl_index_18-3.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb pigsty 3.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb pigsty 3.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb pigsty 3.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb pigsty 3.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-18-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_ttl_index_17 pg_ttl_index_17-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ttl_index_17-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_ttl_index_17 pg_ttl_index_17-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 24.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ttl_index_17-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_ttl_index_17 pg_ttl_index_17-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ttl_index_17-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_ttl_index_17 pg_ttl_index_17-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ttl_index_17-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_ttl_index_17 pg_ttl_index_17-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ttl_index_17-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_ttl_index_17 pg_ttl_index_17-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 23.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ttl_index_17-3.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb pigsty 3.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb pigsty 3.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb pigsty 3.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb pigsty 3.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb pigsty 3.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-17-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_ttl_index_16 pg_ttl_index_16-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ttl_index_16-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_ttl_index_16 pg_ttl_index_16-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 24.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ttl_index_16-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_ttl_index_16 pg_ttl_index_16-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ttl_index_16-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_ttl_index_16 pg_ttl_index_16-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ttl_index_16-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_ttl_index_16 pg_ttl_index_16-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 23.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ttl_index_16-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_ttl_index_16 pg_ttl_index_16-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 23.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ttl_index_16-3.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb pigsty 3.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb pigsty 3.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb pigsty 3.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb pigsty 3.0.0 13.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb pigsty 3.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-16-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_ttl_index_15 pg_ttl_index_15-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 23.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ttl_index_15-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_ttl_index_15 pg_ttl_index_15-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 24.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ttl_index_15-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_ttl_index_15 pg_ttl_index_15-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ttl_index_15-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_ttl_index_15 pg_ttl_index_15-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 23.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ttl_index_15-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_ttl_index_15 pg_ttl_index_15-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ttl_index_15-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_ttl_index_15 pg_ttl_index_15-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 23.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ttl_index_15-3.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb pigsty 3.0.0 14.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb pigsty 3.0.0 14.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb pigsty 3.0.0 14.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb pigsty 3.0.0 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb pigsty 3.0.0 14.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb pigsty 3.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb pigsty 3.0.0 14.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb pigsty 3.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-15-ttl-index_3.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_ttl_index` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_ttl_index         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_ttl_index` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_ttl_index;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_ttl_index -v 18  # PG 18
pig ext install -y pg_ttl_index -v 17  # PG 17
pig ext install -y pg_ttl_index -v 16  # PG 16
pig ext install -y pg_ttl_index -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_ttl_index_18       # PG 18
dnf install -y pg_ttl_index_17       # PG 17
dnf install -y pg_ttl_index_16       # PG 16
dnf install -y pg_ttl_index_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ttl-index   # PG 18
apt install -y postgresql-17-ttl-index   # PG 17
apt install -y postgresql-16-ttl-index   # PG 16
apt install -y postgresql-15-ttl-index   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_ttl_index';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_ttl_index;
```




## 用法

> [pg_ttl_index: 基于 TTL 索引的自动数据过期](https://github.com/ibrahimkarimeddin/postgres-extensions-pg_ttl)

`pg_ttl_index` 通过将 TTL（生存时间）与时间戳列关联来实现自动数据过期。后台工作进程会定期删除时间戳超过配置过期间隔的行。

### 快速开始

```sql
-- 启动后台工作进程
SELECT ttl_start_worker();

-- 创建带时间戳列的表
CREATE TABLE user_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    session_data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 1 小时（3600 秒）后过期
SELECT ttl_create_index('user_sessions', 'created_at', 3600);
```

### 函数

| 函数 | 描述 |
|------|------|
| `ttl_start_worker()` | 启动自动清理的后台工作进程 |
| `ttl_worker_status()` | 检查工作进程是否正在运行 |
| `ttl_runner()` | 手动触发清理 |
| `ttl_create_index(table, column, expire_seconds [, batch_size])` | 配置 TTL 过期策略 |
| `ttl_drop_index(table, column)` | 移除 TTL 配置 |
| `ttl_summary()` | 列出所有 TTL 索引及统计信息 |

### 示例

24 小时过期的会话管理：

```sql
SELECT ttl_create_index('sessions', 'created_at', 86400, 5000);
```

7 天日志保留：

```sql
SELECT ttl_create_index('app_logs', 'logged_at', 604800);
```

自定义过期列的缓存条目（0 表示该列本身存储绝对过期时间）：

```sql
SELECT ttl_create_index('cache_entries', 'expires_at', 0);
```

### 监控

```sql
SELECT * FROM ttl_summary();
```

暂停特定表的清理：

```sql
UPDATE ttl_index_table SET active = false WHERE table_name = 'user_sessions';
```

### 配置

| 参数 | 描述 | 默认值 |
|------|------|--------|
| `pg_ttl_index.naptime` | 清理间隔（秒） | 60 |
| `pg_ttl_index.enabled` | 全局启用/禁用工作进程 | on |

```sql
ALTER SYSTEM SET pg_ttl_index.naptime = 30;
SELECT pg_reload_conf();
```
