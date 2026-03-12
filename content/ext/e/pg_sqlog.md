---
title: "pg_sqlog"
linkTitle: "pg_sqlog"
description: "提供访问PostgreSQL日志的SQL接口"
weight: 6500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kouber/pg_sqlog">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kouber/pg_sqlog</div>
    <div class="ext-card__desc">https://github.com/kouber/pg_sqlog</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_sqlog-1.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_sqlog-1.6.tar.gz</div>
    <div class="ext-card__desc">pg_sqlog-1.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_sqlog`**](/ext/e/pg_sqlog) | `1.6` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6500  | [**`pg_sqlog`**](/ext/e/pg_sqlog) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `sqlog` |
{.ext-table}

| **相关扩展** | [`file_fdw`](/ext/e/file_fdw) [`pg_profile`](/ext/e/pg_profile) [`pg_tracing`](/ext/e/pg_tracing) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require certain params


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_sqlog` | `file_fdw` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_sqlog_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-sqlog` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el8.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el9.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el9.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el10.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el10.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| d12.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| d12.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| d13.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| d13.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| u22.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| u22.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| u24.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| u24.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
@ el8.x86_64 18 pg_sqlog_18 pg_sqlog_18-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_sqlog_18-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_sqlog_18 pg_sqlog_18-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_sqlog_18-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_sqlog_18 pg_sqlog_18-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_sqlog_18-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_sqlog_18 pg_sqlog_18-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_sqlog_18-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_sqlog_18 pg_sqlog_18-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_sqlog_18-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_sqlog_18 pg_sqlog_18-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_sqlog_18-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-sqlog postgresql-18-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-18-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_sqlog_17 pg_sqlog_17-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_sqlog_17-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_sqlog_17 pg_sqlog_17-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_sqlog_17-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_sqlog_17 pg_sqlog_17-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_sqlog_17-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_sqlog_17 pg_sqlog_17-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_sqlog_17-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_sqlog_17 pg_sqlog_17-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_sqlog_17-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_sqlog_17 pg_sqlog_17-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_sqlog_17-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-sqlog postgresql-17-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-17-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_sqlog_16 pg_sqlog_16-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_sqlog_16-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_sqlog_16 pg_sqlog_16-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_sqlog_16-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_sqlog_16 pg_sqlog_16-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_sqlog_16-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_sqlog_16 pg_sqlog_16-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_sqlog_16-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_sqlog_16 pg_sqlog_16-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_sqlog_16-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_sqlog_16 pg_sqlog_16-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_sqlog_16-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-sqlog postgresql-16-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-16-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_sqlog_15 pg_sqlog_15-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_sqlog_15-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_sqlog_15 pg_sqlog_15-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_sqlog_15-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_sqlog_15 pg_sqlog_15-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_sqlog_15-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_sqlog_15 pg_sqlog_15-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_sqlog_15-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_sqlog_15 pg_sqlog_15-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_sqlog_15-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_sqlog_15 pg_sqlog_15-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_sqlog_15-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-sqlog postgresql-15-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-15-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_sqlog_14 pg_sqlog_14-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_sqlog_14-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_sqlog_14 pg_sqlog_14-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_sqlog_14-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_sqlog_14 pg_sqlog_14-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_sqlog_14-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_sqlog_14 pg_sqlog_14-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_sqlog_14-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_sqlog_14 pg_sqlog_14-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_sqlog_14-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_sqlog_14 pg_sqlog_14-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 15.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_sqlog_14-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb pigsty 1.6 9.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-sqlog postgresql-14-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb pigsty 1.6 9.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-sqlog/postgresql-14-pg-sqlog_1.6-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_sqlog` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_sqlog         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_sqlog` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_sqlog;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_sqlog -v 18  # PG 18
pig ext install -y pg_sqlog -v 17  # PG 17
pig ext install -y pg_sqlog -v 16  # PG 16
pig ext install -y pg_sqlog -v 15  # PG 15
pig ext install -y pg_sqlog -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_sqlog_18       # PG 18
dnf install -y pg_sqlog_17       # PG 17
dnf install -y pg_sqlog_16       # PG 16
dnf install -y pg_sqlog_15       # PG 15
dnf install -y pg_sqlog_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-sqlog   # PG 18
apt install -y postgresql-17-pg-sqlog   # PG 17
apt install -y postgresql-16-pg-sqlog   # PG 16
apt install -y postgresql-15-pg-sqlog   # PG 15
apt install -y postgresql-14-pg-sqlog   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_sqlog CASCADE;  -- 依赖: file_fdw
```




## 用法

> [pg_sqlog: 通过 SQL 访问 PostgreSQL CSV 日志](https://github.com/kouber/pg_sqlog)

pg_sqlog 提供一个 SQL 接口，使用 `file_fdw` 支持的外部表来查询 PostgreSQL CSV 日志文件。

### 查询日志

```sql
-- 当天的日志
SELECT * FROM sqlog.log();

-- 指定日期的日志
SELECT * FROM sqlog.log('yesterday');
SELECT * FROM sqlog.log('2024-01-15');

-- 错误摘要
SELECT error_severity, COUNT(*) FROM sqlog.log() GROUP BY 1;
```

### 慢查询分析

```sql
-- 最慢的 3 种查询模式
SELECT
  AVG(sqlog.duration(message)) AS avg_duration,
  COUNT(*) AS count,
  sqlog.preparable_query(message) AS query_pattern
FROM sqlog.log()
WHERE message ~ '^duration'
GROUP BY 3
ORDER BY 1 DESC
LIMIT 3;

-- 带时间信息的查询摘要
SELECT
  log_time::time,
  sqlog.duration(message),
  sqlog.summary(message)
FROM sqlog.log('yesterday')
WHERE message ~ '^duration';
```

### 函数

| 函数 | 描述 |
|----------|-------------|
| `sqlog.log([timestamp])` | 返回指定日期的日志内容 |
| `sqlog.set_date([timestamp])` | 设置 `sqlog.log` 表查询的日期 |
| `sqlog.duration(text)` | 从消息中提取查询持续时间（毫秒） |
| `sqlog.preparable_query(text)` | 将参数替换为 `?` 以便分组 |
| `sqlog.summary(text, int, int)` | 去除元数据，显示前/后 N 个字符 |
| `sqlog.temporary_file_size(text)` | 从消息中提取临时文件大小 |
| `sqlog.autovacuum([timestamp])` | 指定日期的自动清理报告 |
| `sqlog.autoanalyze([timestamp])` | 指定日期的自动分析报告 |

### 自动清理报告

```sql
SELECT * FROM sqlog.autovacuum() LIMIT 5;
SELECT * FROM sqlog.autoanalyze() LIMIT 5;
```

### 前置条件

需要在 `postgresql.conf` 中设置：

```
log_destination = 'syslog,csvlog'
log_filename = 'postgresql.%F'
logging_collector = 'on'
log_rotation_age = '1d'
log_rotation_size = 0
log_truncate_on_rotation = 'on'
log_min_duration_statement = 1000
```
