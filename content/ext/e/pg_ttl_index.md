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
  <a class="ext-card ext-card--source" href="postgres-extensions-pg_ttl-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgres-extensions-pg_ttl-2.0.0.tar.gz</div>
    <div class="ext-card__desc">postgres-extensions-pg_ttl-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ttl_index`**](/ext/e/pg_ttl_index) | `2.0.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_ttl_index` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_ttl_index_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-ttl-index` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_ttl_index_18 pg_ttl_index_18-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_ttl_index_18-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_ttl_index_18 pg_ttl_index_18-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 21.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_ttl_index_18-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_ttl_index_18 pg_ttl_index_18-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 21.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_ttl_index_18-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_ttl_index_18 pg_ttl_index_18-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_ttl_index_18-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_ttl_index_18 pg_ttl_index_18-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_ttl_index_18-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_ttl_index_18 pg_ttl_index_18-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 21.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_ttl_index_18-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 11.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ttl-index postgresql-18-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 11.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-18-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_ttl_index_17 pg_ttl_index_17-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_ttl_index_17-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_ttl_index_17 pg_ttl_index_17-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 21.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_ttl_index_17-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_ttl_index_17 pg_ttl_index_17-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 21.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_ttl_index_17-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_ttl_index_17 pg_ttl_index_17-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_ttl_index_17-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_ttl_index_17 pg_ttl_index_17-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_ttl_index_17-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_ttl_index_17 pg_ttl_index_17-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 21.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_ttl_index_17-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 11.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ttl-index postgresql-17-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 11.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-17-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_ttl_index_16 pg_ttl_index_16-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_ttl_index_16-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_ttl_index_16 pg_ttl_index_16-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 21.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_ttl_index_16-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_ttl_index_16 pg_ttl_index_16-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_ttl_index_16-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_ttl_index_16 pg_ttl_index_16-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_ttl_index_16-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_ttl_index_16 pg_ttl_index_16-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_ttl_index_16-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_ttl_index_16 pg_ttl_index_16-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 21.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_ttl_index_16-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 11.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 11.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ttl-index postgresql-16-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 11.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-16-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_ttl_index_15 pg_ttl_index_15-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 21.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_ttl_index_15-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_ttl_index_15 pg_ttl_index_15-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 22.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_ttl_index_15-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_ttl_index_15 pg_ttl_index_15-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_ttl_index_15-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_ttl_index_15 pg_ttl_index_15-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 21.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_ttl_index_15-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_ttl_index_15 pg_ttl_index_15-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_ttl_index_15-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_ttl_index_15 pg_ttl_index_15-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 21.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_ttl_index_15-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 12.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 12.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ttl-index postgresql-15-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/ttl-index/postgresql-15-ttl-index_2.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_ttl_index_14 pg_ttl_index_14-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 21.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_ttl_index_14-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_ttl_index_14 pg_ttl_index_14-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 22.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_ttl_index_14-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_ttl_index_14 pg_ttl_index_14-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_ttl_index_14-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_ttl_index_14 pg_ttl_index_14-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 21.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_ttl_index_14-2.0.0-1PIGSTY.el9.aarch64.rpm
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
