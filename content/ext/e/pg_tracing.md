---
title: "pg_tracing"
linkTitle: "pg_tracing"
description: "PostgreSQL分布式Tracing"
weight: 6010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/DataDog/pg_tracing">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">DataDog/pg_tracing</div>
    <div class="ext-card__desc">https://github.com/DataDog/pg_tracing</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tracing-0.1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tracing-0.1.3.tar.gz</div>
    <div class="ext-card__desc">pg_tracing-0.1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tracing`**](/ext/e/pg_tracing) | `0.1.3` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6010  | [**`pg_tracing`**](/ext/e/pg_tracing) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_profile`](/ext/e/pg_profile) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_track_settings`](/ext/e/pg_track_settings) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_tracing` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_tracing_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tracing` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_tracing_18 pg_tracing_18-0.1.3-2PIGSTY.el8.x86_64.rpm pigsty 0.1.3 46.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_18-0.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tracing_18 pg_tracing_18-0.1.3-2PIGSTY.el8.aarch64.rpm pigsty 0.1.3 44.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_18-0.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tracing_18 pg_tracing_18-0.1.3-2PIGSTY.el9.x86_64.rpm pigsty 0.1.3 43.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_18-0.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tracing_18 pg_tracing_18-0.1.3-2PIGSTY.el9.aarch64.rpm pigsty 0.1.3 43.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_18-0.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tracing_18 pg_tracing_18-0.1.3-2PIGSTY.el10.x86_64.rpm pigsty 0.1.3 44.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_18-0.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tracing_18 pg_tracing_18-0.1.3-2PIGSTY.el10.aarch64.rpm pigsty 0.1.3 43.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_18-0.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb pigsty 0.1.3 105.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb pigsty 0.1.3 102.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb pigsty 0.1.3 105.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb pigsty 0.1.3 103.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb pigsty 0.1.3 114.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb pigsty 0.1.3 113.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb pigsty 0.1.3 110.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb pigsty 0.1.3 109.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_tracing_17 pg_tracing_17-0.1.3-2PIGSTY.el8.x86_64.rpm pigsty 0.1.3 46.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_17-0.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tracing_17 pg_tracing_17-0.1.3-2PIGSTY.el8.aarch64.rpm pigsty 0.1.3 44.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_17-0.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tracing_17 pg_tracing_17-0.1.3-2PIGSTY.el9.x86_64.rpm pigsty 0.1.3 43.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_17-0.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tracing_17 pg_tracing_17-0.1.3-2PIGSTY.el9.aarch64.rpm pigsty 0.1.3 43.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_17-0.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tracing_17 pg_tracing_17-0.1.3-2PIGSTY.el10.x86_64.rpm pigsty 0.1.3 44.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_17-0.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tracing_17 pg_tracing_17-0.1.3-2PIGSTY.el10.aarch64.rpm pigsty 0.1.3 43.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_17-0.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb pigsty 0.1.3 105.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb pigsty 0.1.3 103.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb pigsty 0.1.3 105.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb pigsty 0.1.3 103.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb pigsty 0.1.3 129.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb pigsty 0.1.3 128.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb pigsty 0.1.3 110.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb pigsty 0.1.3 109.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_tracing_16 pg_tracing_16-0.1.3-2PIGSTY.el8.x86_64.rpm pigsty 0.1.3 46.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_16-0.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tracing_16 pg_tracing_16-0.1.3-2PIGSTY.el8.aarch64.rpm pigsty 0.1.3 44.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_16-0.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tracing_16 pg_tracing_16-0.1.3-2PIGSTY.el9.x86_64.rpm pigsty 0.1.3 43.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_16-0.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tracing_16 pg_tracing_16-0.1.3-2PIGSTY.el9.aarch64.rpm pigsty 0.1.3 43.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_16-0.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tracing_16 pg_tracing_16-0.1.3-2PIGSTY.el10.x86_64.rpm pigsty 0.1.3 44.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_16-0.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tracing_16 pg_tracing_16-0.1.3-2PIGSTY.el10.aarch64.rpm pigsty 0.1.3 43.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_16-0.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb pigsty 0.1.3 105.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb pigsty 0.1.3 102.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb pigsty 0.1.3 105.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb pigsty 0.1.3 103.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb pigsty 0.1.3 128.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb pigsty 0.1.3 127.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb pigsty 0.1.3 110.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb pigsty 0.1.3 109.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_tracing_15 pg_tracing_15-0.1.3-2PIGSTY.el8.x86_64.rpm pigsty 0.1.3 47.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_15-0.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tracing_15 pg_tracing_15-0.1.3-2PIGSTY.el8.aarch64.rpm pigsty 0.1.3 46.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_15-0.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tracing_15 pg_tracing_15-0.1.3-2PIGSTY.el9.x86_64.rpm pigsty 0.1.3 46.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_15-0.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tracing_15 pg_tracing_15-0.1.3-2PIGSTY.el9.aarch64.rpm pigsty 0.1.3 45.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_15-0.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tracing_15 pg_tracing_15-0.1.3-2PIGSTY.el10.x86_64.rpm pigsty 0.1.3 46.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_15-0.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tracing_15 pg_tracing_15-0.1.3-2PIGSTY.el10.aarch64.rpm pigsty 0.1.3 46.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_15-0.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb pigsty 0.1.3 108.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb pigsty 0.1.3 105.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb pigsty 0.1.3 108.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb pigsty 0.1.3 106.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb pigsty 0.1.3 132.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb pigsty 0.1.3 130.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb pigsty 0.1.3 113.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb pigsty 0.1.3 112.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_tracing_14 pg_tracing_14-0.1.3-2PIGSTY.el8.x86_64.rpm pigsty 0.1.3 48.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_14-0.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_tracing_14 pg_tracing_14-0.1.3-2PIGSTY.el8.aarch64.rpm pigsty 0.1.3 47.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_14-0.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_tracing_14 pg_tracing_14-0.1.3-2PIGSTY.el9.x86_64.rpm pigsty 0.1.3 46.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_14-0.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_tracing_14 pg_tracing_14-0.1.3-2PIGSTY.el9.aarch64.rpm pigsty 0.1.3 46.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_14-0.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_tracing_14 pg_tracing_14-0.1.3-2PIGSTY.el10.x86_64.rpm pigsty 0.1.3 47.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_14-0.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_tracing_14 pg_tracing_14-0.1.3-2PIGSTY.el10.aarch64.rpm pigsty 0.1.3 46.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_14-0.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb pigsty 0.1.3 109.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb pigsty 0.1.3 107.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb pigsty 0.1.3 109.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb pigsty 0.1.3 107.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb pigsty 0.1.3 133.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb pigsty 0.1.3 132.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb pigsty 0.1.3 114.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tracing postgresql-14-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb pigsty 0.1.3 113.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-14-pg-tracing_0.1.3-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tracing` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tracing         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tracing` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tracing;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tracing -v 18  # PG 18
pig ext install -y pg_tracing -v 17  # PG 17
pig ext install -y pg_tracing -v 16  # PG 16
pig ext install -y pg_tracing -v 15  # PG 15
pig ext install -y pg_tracing -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_tracing_18       # PG 18
dnf install -y pg_tracing_17       # PG 17
dnf install -y pg_tracing_16       # PG 16
dnf install -y pg_tracing_15       # PG 15
dnf install -y pg_tracing_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-tracing   # PG 18
apt install -y postgresql-17-pg-tracing   # PG 17
apt install -y postgresql-16-pg-tracing   # PG 16
apt install -y postgresql-15-pg-tracing   # PG 15
apt install -y postgresql-14-pg-tracing   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tracing';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tracing;
```




## 用法

> [pg_tracing: PostgreSQL 分布式追踪](https://github.com/DataDog/pg_tracing)

pg_tracing 生成服务端 Span 用于分布式追踪。它为规划器、执行器、计划节点、嵌套查询、触发器、并行工作进程和事务提交创建 Span。

### 通过 SQLCommenter 传播追踪上下文

将追踪上下文作为 SQL 注释传递。带有采样标志的查询将生成 Span：

```sql
/*traceparent='00-00000000000000000000000000000123-0000000000000123-01'*/ SELECT 1;
```

### 通过 GUC 传播追踪上下文

```sql
BEGIN;
SET LOCAL pg_tracing.trace_context='traceparent=''00-00000000000000000000000000000005-0000000000000005-01''';
UPDATE pgbench_accounts SET abalance=1 WHERE aid=1;
COMMIT;
```

### 独立采样

无需外部追踪上下文，随机采样查询：

```sql
SET pg_tracing.sample_rate = 1.0;  -- 追踪所有查询
SELECT 1;
```

### 查看 Span

```sql
-- 消费 Span（从缓冲区移除）
SELECT trace_id, parent_id, span_id, span_start, span_end, span_type, span_operation
FROM pg_tracing_consume_spans ORDER BY span_start;

-- 查看 Span（非破坏性）
SELECT * FROM pg_tracing_peek_spans;

-- 导出为 OTLP JSON
SELECT pg_tracing_json_spans();
```

### 统计信息

```sql
SELECT * FROM pg_tracing_info;
SELECT pg_tracing_reset();
```

### 发送 Span 到 OpenTelemetry Collector

在 `postgresql.conf` 中配置：

```
pg_tracing.otel_endpoint = http://127.0.0.1:4318/v1/traces
pg_tracing.otel_naptime = 2000
```

### 关键 GUC 参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pg_tracing.max_span` | 10000 | 共享内存中的最大 Span 数 |
| `pg_tracing.track` | `all` | 追踪哪些语句 |
| `pg_tracing.sample_rate` | 0 | 随机采样查询的比例 |
| `pg_tracing.otel_endpoint` | (空) | 用于 Span 导出的 OTLP HTTP 端点 |
