---
title: "pgcalendar"
linkTitle: "pgcalendar"
description: "为 PostgreSQL 提供循环日程、投影与例外处理的日历扩展"
weight: 3890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/h4kbas/pgcalendar">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">h4kbas/pgcalendar</div>
    <div class="ext-card__desc">https://github.com/h4kbas/pgcalendar</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgcalendar-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgcalendar-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pgcalendar-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgcalendar`**](/ext/e/pgcalendar) | `1.1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3890  | [**`pgcalendar`**](/ext/e/pgcalendar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgcalendar` |
{.ext-table}

| **相关扩展** | [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`timeseries`](/ext/e/timeseries) [`pg_cron`](/ext/e/pg_cron) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Deb/RPM recipes patch the stale upstream 1.1.0 control metadata (default_version/module_pathname).


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgcalendar` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgcalendar_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgcalendar` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el8.x86_64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_14-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_14-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_14-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_14-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_14-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_14-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgcalendar postgresql-14-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-14-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgcalendar` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgcalendar         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgcalendar` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgcalendar;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgcalendar -v 18  # PG 18
pig ext install -y pgcalendar -v 17  # PG 17
pig ext install -y pgcalendar -v 16  # PG 16
pig ext install -y pgcalendar -v 15  # PG 15
pig ext install -y pgcalendar -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgcalendar_18       # PG 18
dnf install -y pgcalendar_17       # PG 17
dnf install -y pgcalendar_16       # PG 16
dnf install -y pgcalendar_15       # PG 15
dnf install -y pgcalendar_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgcalendar   # PG 18
apt install -y postgresql-17-pgcalendar   # PG 17
apt install -y postgresql-16-pgcalendar   # PG 16
apt install -y postgresql-15-pgcalendar   # PG 15
apt install -y postgresql-14-pgcalendar   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgcalendar;
```

## 用法

来源：[README](https://github.com/h4kbas/pgcalendar/blob/master/README.md)，[repo](https://github.com/h4kbas/pgcalendar)

`pgcalendar` 是一个 PostgreSQL 循环日历扩展。上游 README 用四个核心对象来建模循环日程：`events`、`schedules`、`exceptions` 和生成出来的 projections。

### 创建事件和日程

```sql
CREATE EXTENSION pgcalendar;

INSERT INTO pgcalendar.events (name, description, category)
VALUES ('Daily Standup', 'Team daily standup meeting', 'meeting');

INSERT INTO pgcalendar.schedules (
    event_id, start_date, end_date, recurrence_type, recurrence_interval
) VALUES (
    1, '2024-01-01 09:00:00', '2024-01-07 23:59:59', 'daily', 1
);
```

README 展示了 `daily`、`weekly`、`monthly` 和 `yearly` 四类循环，并会根据类型使用 `recurrence_day_of_week`、`recurrence_day_of_month`、`recurrence_month` 等额外列。

### 查询投影

```sql
SELECT * FROM pgcalendar.get_event_projections(
    1, '2024-01-01'::date, '2024-01-07'::date
);

SELECT * FROM pgcalendar.get_events_detailed(
    '2024-01-01'::date, '2024-01-31'::date
);
```

README 还把 `pgcalendar.event_calendar` 视图作为快速核验结果的入口。

### 例外与日程切换

```sql
INSERT INTO pgcalendar.exceptions (
    schedule_id, exception_date, exception_type, notes
) VALUES (
    1, '2024-01-15', 'cancelled', 'Holiday - meeting cancelled'
);

SELECT pgcalendar.transition_event_schedule(
    p_event_id := 1,
    p_new_start_date := '2024-01-15 09:00:00',
    p_new_end_date := '2024-01-31 23:59:59',
    p_recurrence_type := 'weekly',
    p_recurrence_interval := 2,
    p_recurrence_day_of_week := 1,
    p_description := 'Changed to bi-weekly schedule'
);
```

如果需要在新增日程前确认日期范围不重叠，可以先调用 `pgcalendar.check_schedule_overlap(...)`。

### 注意事项

目前上游唯一公开的用户文档就是 README。它已经给出了较完整的表结构和函数示例，但没有另外维护按版本划分的用户可见 SQL 变更说明。
