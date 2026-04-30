---
title: "pg_datasentinel"
linkTitle: "pg_datasentinel"
description: "PostgreSQL 可观测性与活动监控扩展"
weight: 6400
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/datasentinel/pg_datasentinel">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">datasentinel/pg_datasentinel</div>
    <div class="ext-card__desc">https://github.com/datasentinel/pg_datasentinel</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_datasentinel-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_datasentinel-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_datasentinel-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_datasentinel`**](/ext/e/pg_datasentinel) | `1.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd3clause" href="/ext/license#bsd3clause">BSD-3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6400  | [**`pg_datasentinel`**](/ext/e/pg_datasentinel) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgsentinel`](/ext/e/pgsentinel) [`system_stats`](/ext/e/system_stats) [`pg_profile`](/ext/e/pg_profile) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> shared_preload_libraries = pg_datasentinel is required because the extension allocates shared memory and hooks into activity logging.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15" >}} | `pg_datasentinel` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15" >}} | `pg_datasentinel_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-datasentinel` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_datasentinel_18 pg_datasentinel_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_datasentinel_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_datasentinel_18 pg_datasentinel_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_datasentinel_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_datasentinel_18 pg_datasentinel_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_datasentinel_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_datasentinel_18 pg_datasentinel_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_datasentinel_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_datasentinel_18 pg_datasentinel_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_datasentinel_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_datasentinel_18 pg_datasentinel_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 35.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_datasentinel_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 58.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 58.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 63.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 63.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 61.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-datasentinel postgresql-18-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-18-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_datasentinel_17 pg_datasentinel_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_datasentinel_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_datasentinel_17 pg_datasentinel_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_datasentinel_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_datasentinel_17 pg_datasentinel_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_datasentinel_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_datasentinel_17 pg_datasentinel_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_datasentinel_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_datasentinel_17 pg_datasentinel_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_datasentinel_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_datasentinel_17 pg_datasentinel_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 35.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_datasentinel_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 58.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 58.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 72.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 61.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-datasentinel postgresql-17-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 62.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-17-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_datasentinel_16 pg_datasentinel_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_datasentinel_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_datasentinel_16 pg_datasentinel_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_datasentinel_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_datasentinel_16 pg_datasentinel_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_datasentinel_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_datasentinel_16 pg_datasentinel_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_datasentinel_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_datasentinel_16 pg_datasentinel_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_datasentinel_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_datasentinel_16 pg_datasentinel_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 35.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_datasentinel_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 58.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 58.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 58.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 71.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 72.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 61.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-datasentinel postgresql-16-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 62.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-16-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_datasentinel_15 pg_datasentinel_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_datasentinel_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_datasentinel_15 pg_datasentinel_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_datasentinel_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_datasentinel_15 pg_datasentinel_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_datasentinel_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_datasentinel_15 pg_datasentinel_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_datasentinel_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_datasentinel_15 pg_datasentinel_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_datasentinel_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_datasentinel_15 pg_datasentinel_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_datasentinel_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 59.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 59.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 59.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 59.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 72.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 61.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-datasentinel postgresql-15-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 62.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-datasentinel/postgresql-15-pg-datasentinel_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_datasentinel` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_datasentinel         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_datasentinel` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_datasentinel;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_datasentinel -v 18  # PG 18
pig ext install -y pg_datasentinel -v 17  # PG 17
pig ext install -y pg_datasentinel -v 16  # PG 16
pig ext install -y pg_datasentinel -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_datasentinel_18       # PG 18
dnf install -y pg_datasentinel_17       # PG 17
dnf install -y pg_datasentinel_16       # PG 16
dnf install -y pg_datasentinel_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-datasentinel   # PG 18
apt install -y postgresql-17-pg-datasentinel   # PG 17
apt install -y postgresql-16-pg-datasentinel   # PG 16
apt install -y postgresql-15-pg-datasentinel   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_datasentinel';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_datasentinel;
```

## 用法

来源：[README](https://github.com/datasentinel/pg_datasentinel/blob/main/README.md)，[Release 1.0](https://github.com/datasentinel/pg_datasentinel/releases/tag/1.0)

`pg_datasentinel` 在 PostgreSQL 的 activity、maintenance、temporary-file、checkpoint、wraparound 与 container resource 数据之上提供可观测性视图。由于它会分配共享内存并挂接 activity logging，因此必须预加载。

### 所需设置

```sql
-- postgresql.conf
shared_preload_libraries = 'pg_datasentinel'
log_autovacuum_min_duration = 0
log_temp_files = 0
log_checkpoints = on

CREATE EXTENSION pg_datasentinel;
```

### 主要视图

- `ds_stat_activity`：在 `pg_stat_activity` 基础上扩展 backend RSS、可选 PSS、temp-file bytes，以及 PostgreSQL 18+ 上的 `plan_id`。
- `ds_container_resources`：报告 cgroup CPU 与内存限制，以及当前使用量。
- `ds_wraparound_risk`：基于每小时快照估算到 aggressive vacuum 与 wraparound 的 XID、MXID ETA。
- `ds_xid_snapshots`：`ds_wraparound_risk` 使用的原始快照历史。
- `ds_vacuum_activity`、`ds_analyze_activity`、`ds_tempfile_activity`、`ds_checkpoint_activity`：用于维护与 checkpoint 事件的共享内存 ring buffer。
- `ds_activity_summary`：返回 ring buffer 占用和时间戳的一行汇总。

### 常用 GUCs

- `pg_datasentinel.enabled`：启用或禁用采集。
- `pg_datasentinel.max_entries`：每类 activity stream 的 ring buffer 容量；修改后需要重启。
- `pg_datasentinel.maintenance_force_verbose`：为手工 `VACUUM` 与 `ANALYZE` 添加 `VERBOSE`，以便被捕获。
- `pg_datasentinel.ignore_system_schemas`：抑制 `pg_catalog` 与 `information_schema` 噪声。
- `pg_datasentinel.enable_pss_memory`：读取 `/proc/*/smaps_rollup` 以获取每个 backend 的 PSS。

### 注意事项

- 上游要求 PostgreSQL 15+。
- 内存与 temp-file 增强信息依赖 Linux `/proc`；container 指标依赖 cgroups。
- `VACUUM` 与 `ANALYZE` 的解析依赖英文日志关键字，因此不完全支持已翻译的 server message locale。
- `plan_id` 仅在 PostgreSQL 18+ 上填充，并且与 README 中链接的官方 `pg_store_plans` fork 搭配时最有价值。
