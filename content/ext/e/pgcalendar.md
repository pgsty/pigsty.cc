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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgcalendar-1.1.0.zip">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgcalendar-1.1.0.zip</div>
    <div class="ext-card__desc">pgcalendar-1.1.0.zip</div>
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
@ el8.x86_64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_18-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_18-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_18-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_18-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_18-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pgcalendar_18 pgcalendar_18-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_18-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgcalendar postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-18-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_17-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_17-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_17-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_17-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_17-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pgcalendar_17 pgcalendar_17-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_17-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgcalendar postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-17-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_16-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_16-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_16-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_16-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_16-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pgcalendar_16 pgcalendar_16-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_16-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgcalendar postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-16-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_15-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_15-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_15-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_15-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_15-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pgcalendar_15 pgcalendar_15-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_15-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 7.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgcalendar postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcalendar/postgresql-15-pgcalendar_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcalendar_14-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcalendar_14-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcalendar_14-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcalendar_14-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcalendar_14-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pgcalendar_14 pgcalendar_14-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcalendar_14-1.1.0-1PIGSTY.el10.noarch.rpm
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

> 语法：
>
> ```sql
> CREATE EXTENSION pgcalendar;
> INSERT INTO pgcalendar.events (name, description, category)
> VALUES ('Daily Standup', 'Team daily standup meeting', 'meeting');
> SELECT * FROM pgcalendar.get_event_projections(1, '2024-01-01'::date, '2024-01-07'::date);
> ```
>
> 来源：[README](https://github.com/h4kbas/pgcalendar)

`pgcalendar` 是一个用于 PostgreSQL 的循环日历扩展。它建模事件、日程、例外和投影，并可在任意日期范围内生成日历发生实例。

## 数据模型

README 描述了四个核心概念：

- `events`，表示会议或任务等逻辑对象
- `schedules`，表示生成投影的非重叠循环定义
- `exceptions`，表示单次发生的取消或修改
- `projections`，表示实际生成出来的日历发生实例

## 快速开始

创建事件：

```sql
INSERT INTO pgcalendar.events (name, description, category)
VALUES ('Daily Standup', 'Team daily standup meeting', 'meeting');
```

创建日程：

```sql
INSERT INTO pgcalendar.schedules (
    event_id, start_date, end_date, recurrence_type, recurrence_interval
) VALUES (
    1, '2024-01-01 09:00:00', '2024-01-07 23:59:59', 'daily', 1
);
```

获取投影：

```sql
SELECT * FROM pgcalendar.get_event_projections(
    1, '2024-01-01'::date, '2024-01-07'::date
);
```

## 循环类型

README 展示了以下日程示例：

- 每日循环
- 每周循环，带 `recurrence_day_of_week`
- 每月循环，带 `recurrence_day_of_month`
- 每年循环，带 `recurrence_month` 和 `recurrence_day_of_month`

## 例外

例外可以取消或修改某次发生：

```sql
INSERT INTO pgcalendar.exceptions (
    schedule_id, exception_date, exception_type, notes
) VALUES (
    1, '2024-01-15', 'cancelled', 'Holiday - meeting cancelled'
);
```

也可以修改日期和时间。

## 函数与视图

README 文档中包括：

- `get_event_projections(event_id, start_date, end_date)`
- `get_events_detailed(start_date, end_date)`
- `transition_event_schedule(...)`
- `check_schedule_overlap(event_id, start_date, end_date)`
- `pgcalendar.event_calendar`

其中 `transition_event_schedule(...)` 用于安全切换事件的日程配置，`check_schedule_overlap(...)` 用于验证新日程不会与现有日程冲突。
