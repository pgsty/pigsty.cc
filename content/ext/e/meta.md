---
title: "meta"
linkTitle: "meta"
description: "标准化，更友好的PostgreSQL系统目录视图"
weight: 6430
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aquameta/meta">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aquameta/meta</div>
    <div class="ext-card__desc">https://github.com/aquameta/meta</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/meta-0.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">meta-0.4.0.tar.gz</div>
    <div class="ext-card__desc">meta-0.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_meta`**](/ext/e/meta) | `0.4.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6430  | [**`meta`**](/ext/e/meta) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `meta` |
{.ext-table}

| **相关扩展** | [`pg_profile`](/ext/e/pg_profile) [`pg_tracing`](/ext/e/pg_tracing) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_track_settings`](/ext/e/pg_track_settings) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_meta` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_meta_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-meta` | - |
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
@ el8.x86_64 18 pg_meta_18 pg_meta_18-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_meta_18-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_meta_18 pg_meta_18-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_meta_18-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_meta_18 pg_meta_18-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_meta_18-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_meta_18 pg_meta_18-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 15.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_meta_18-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_meta_18 pg_meta_18-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_meta_18-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_meta_18 pg_meta_18-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_meta_18-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-meta postgresql-18-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-18-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_meta_17 pg_meta_17-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_meta_17-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_meta_17 pg_meta_17-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_meta_17-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_meta_17 pg_meta_17-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_meta_17-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_meta_17 pg_meta_17-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 15.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_meta_17-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_meta_17 pg_meta_17-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_meta_17-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_meta_17 pg_meta_17-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_meta_17-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-meta postgresql-17-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-17-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_meta_16 pg_meta_16-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_meta_16-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_meta_16 pg_meta_16-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_meta_16-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_meta_16 pg_meta_16-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_meta_16-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_meta_16 pg_meta_16-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 15.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_meta_16-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_meta_16 pg_meta_16-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_meta_16-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_meta_16 pg_meta_16-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_meta_16-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-meta postgresql-16-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-16-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_meta_15 pg_meta_15-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_meta_15-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_meta_15 pg_meta_15-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_meta_15-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_meta_15 pg_meta_15-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_meta_15-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_meta_15 pg_meta_15-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 15.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_meta_15-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_meta_15 pg_meta_15-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_meta_15-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_meta_15 pg_meta_15-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_meta_15-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-meta postgresql-15-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-15-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_meta_14 pg_meta_14-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_meta_14-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_meta_14 pg_meta_14-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_meta_14-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_meta_14 pg_meta_14-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_meta_14-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_meta_14 pg_meta_14-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 15.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_meta_14-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_meta_14 pg_meta_14-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_meta_14-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_meta_14 pg_meta_14-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_meta_14-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-meta postgresql-14-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-meta/postgresql-14-pg-meta_0.4.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_meta` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_meta         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_meta` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_meta;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_meta -v 18  # PG 18
pig ext install -y pg_meta -v 17  # PG 17
pig ext install -y pg_meta -v 16  # PG 16
pig ext install -y pg_meta -v 15  # PG 15
pig ext install -y pg_meta -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_meta_18       # PG 18
dnf install -y pg_meta_17       # PG 17
dnf install -y pg_meta_16       # PG 16
dnf install -y pg_meta_15       # PG 15
dnf install -y pg_meta_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-meta   # PG 18
apt install -y postgresql-17-pg-meta   # PG 17
apt install -y postgresql-16-pg-meta   # PG 16
apt install -y postgresql-15-pg-meta   # PG 15
apt install -y postgresql-14-pg-meta   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION meta;
```




## 用法

> [meta: PostgreSQL 简化系统目录](https://github.com/aquameta/meta)

meta 提供一套规范化、易于理解的系统目录视图，使用通用的视图名和列名，构建于 `pg_catalog` 和 `information_schema` 之上。

### 系统目录视图

该扩展在 `meta` 模式下创建约 30 个视图：

```sql
-- 列出所有表
SELECT * FROM meta.table;

-- 列出所有列
SELECT * FROM meta.column;

-- 列出所有视图
SELECT * FROM meta.view;

-- 列出模式
SELECT * FROM meta.schema;

-- 列出函数
SELECT * FROM meta.function;

-- 列出扩展
SELECT * FROM meta.extension;

-- 列出触发器
SELECT * FROM meta.trigger;

-- 列出外键
SELECT * FROM meta.foreign_key;

-- 列出约束
SELECT * FROM meta.constraint_check;
SELECT * FROM meta.constraint_unique;

-- 列出类型
SELECT * FROM meta.type;

-- 列出角色
SELECT * FROM meta.role;

-- 列出序列
SELECT * FROM meta.sequence;

-- 列出运算符
SELECT * FROM meta.operator;

-- 列出策略
SELECT * FROM meta.policy;
```

### 可用视图

`cast`、`column`、`connection`、`constraint_check`、`constraint_unique`、`extension`、`foreign_column`、`foreign_data_wrapper`、`foreign_key`、`foreign_server`、`foreign_table`、`function`、`function_parameter`、`operator`、`policy`、`policy_role`、`relation`、`relation_column`、`role`、`role_inheritance`、`schema`、`sequence`、`table`、`table_privilege`、`trigger`、`type`、`view`

### 元标识符

该扩展提供复合类型作为"软"主键，通过名称（而非 OID）来标识 PostgreSQL 对象（表、列、类型等）。

### 目录触发器（可选）

通过可选的 `meta_triggers` 扩展，视图变为可更新，从而支持通过 DML 执行 DDL：

```sql
-- 通过 INSERT 创建表
INSERT INTO meta.table (schema_name, name) VALUES ('public', 'foo');
```
