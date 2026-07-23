---
title: "pg_kpart"
linkTitle: "pg_kpart"
description: "拒绝未使用分区键的全分区扫描查询"
weight: 7450
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hexacluster/pg_kpart">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hexacluster/pg_kpart</div>
    <div class="ext-card__desc">https://github.com/hexacluster/pg_kpart</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_kpart-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_kpart-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_kpart-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_kpart`**](/ext/e/pg_kpart) | `1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7450  | [**`pg_kpart`**](/ext/e/pg_kpart) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_partman`](/ext/e/pg_partman) [`pg_fkpart`](/ext/e/pg_fkpart) [`plan_filter`](/ext/e/plan_filter) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`citus`](/ext/e/citus) [`timescaledb`](/ext/e/timescaledb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Planner hook must be loaded through shared_preload_libraries or session_preload_libraries; CREATE EXTENSION is optional.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_kpart` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_kpart_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-kpart` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pg_kpart_18 pg_kpart_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kpart_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_kpart_18 pg_kpart_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kpart_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_kpart_18 pg_kpart_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kpart_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_kpart_18 pg_kpart_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kpart_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_kpart_18 pg_kpart_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kpart_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_kpart_18 pg_kpart_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kpart_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 18.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-kpart postgresql-18-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-18-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_kpart_17 pg_kpart_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kpart_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_kpart_17 pg_kpart_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kpart_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_kpart_17 pg_kpart_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kpart_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_kpart_17 pg_kpart_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kpart_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_kpart_17 pg_kpart_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kpart_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_kpart_17 pg_kpart_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kpart_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 23.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 23.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-kpart postgresql-17-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-17-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_kpart_16 pg_kpart_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kpart_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_kpart_16 pg_kpart_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kpart_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_kpart_16 pg_kpart_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kpart_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_kpart_16 pg_kpart_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kpart_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_kpart_16 pg_kpart_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kpart_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_kpart_16 pg_kpart_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kpart_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 18.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-kpart postgresql-16-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-16-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_kpart_15 pg_kpart_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kpart_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_kpart_15 pg_kpart_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kpart_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_kpart_15 pg_kpart_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kpart_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_kpart_15 pg_kpart_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kpart_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_kpart_15 pg_kpart_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kpart_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_kpart_15 pg_kpart_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kpart_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 18.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-kpart postgresql-15-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-15-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_kpart_14 pg_kpart_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kpart_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_kpart_14 pg_kpart_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kpart_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_kpart_14 pg_kpart_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kpart_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_kpart_14 pg_kpart_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kpart_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_kpart_14 pg_kpart_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kpart_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_kpart_14 pg_kpart_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kpart_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 18.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 19.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-kpart postgresql-14-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 19.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kpart/postgresql-14-pg-kpart_1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_kpart` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_kpart         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_kpart` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_kpart;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_kpart -v 18  # PG 18
pig ext install -y pg_kpart -v 17  # PG 17
pig ext install -y pg_kpart -v 16  # PG 16
pig ext install -y pg_kpart -v 15  # PG 15
pig ext install -y pg_kpart -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_kpart_18       # PG 18
dnf install -y pg_kpart_17       # PG 17
dnf install -y pg_kpart_16       # PG 16
dnf install -y pg_kpart_15       # PG 15
dnf install -y pg_kpart_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-kpart   # PG 18
apt install -y postgresql-17-pg-kpart   # PG 17
apt install -y postgresql-16-pg-kpart   # PG 16
apt install -y postgresql-15-pg-kpart   # PG 15
apt install -y postgresql-14-pg-kpart   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_kpart';
```


## 用法

来源：

- [官方v1.0 README](https://github.com/HexaCluster/pg_kpart/blob/v1.0/README.md)
- [v1.0控制文件](https://github.com/HexaCluster/pg_kpart/blob/v1.0/pg_kpart.control)

`pg_kpart` 防止了对分表表进行全表扫描的意外查询，而这些查询没有有效的分区剪裁。其规划器钩子可以在执行前发出警告、告警或记录日志。功能单元是预加载的库；无需创建任何SQL对象，并且上游仅将 `CREATE EXTENSION` 描述为可选的系统目录注册。

### 启用与部署

为了集群范围内的强制执行，可以预加载库并重启PostgreSQL：

```conf
shared_preload_libraries = 'pg_kpart'
```

也可以在无需服务器重启的情况下，选择性地加载会话或数据库：

```conf
session_preload_libraries = 'pg_kpart'
```

在强制错误之前，以审计模式开始：

```sql
ALTER SYSTEM SET pg_kpart.message_level = 'warning';
SELECT pg_reload_conf();
```

一旦观察到的查询被理解，可以设置 `pg_kpart.message_level = 'error'`。

### 范围与行为

```sql
-- Check only these tables and their sub-partitions.
ALTER SYSTEM SET pg_kpart.blacklisted =
    'public.measurement, public.orders';

-- Or check all partitioned tables except selected hierarchies.
ALTER SYSTEM SET pg_kpart.whitelisted = 'public.audit_log';
SELECT pg_reload_conf();
```

```sql
-- Partition key is logdate.
SELECT * FROM measurement WHERE city_id = 5;              -- violation
SELECT * FROM measurement WHERE logdate = DATE '2026-07-01'; -- pruned, allowed
SELECT * FROM measurement WHERE logdate = $1;             -- runtime pruning, allowed
```

违反规则将使用SQLSTATE `FS001`，应用程序可以在 `message_level` 为 `error` 的情况下捕获这些错误。

### 配置索引与注意事项

- `pg_kpart.enabled`: 主控开关，默认值为 `on`。
- `pg_kpart.message_level`: 可以设置为 `error`, `warning`, `notice`, `log` 等其他PostgreSQL消息级别。
- `pg_kpart.min_partitions`: 检查的最小叶分区数量，默认值为 `2`。
- `pg_kpart.check_superuser`: 默认情况下，超级用户绕过检查。
- `pg_kpart.blacklisted`: 当非空时，仅检查命名层次结构，并忽略 `whitelisted`。
- `pg_kpart.whitelisted`: 在未设置黑名单的情况下，免于检查的层次结构。
- 如果谓词的范围仍然包括所有分区，则即使提到分区键也会被视为全表扫描并被拒绝。
- 规划器钩子也适用于 `UPDATE`, `DELETE` 和不带 `EXPLAIN` 的 `ANALYZE`。它依赖于PostgreSQL计划剪裁的结果，而不是对 `WHERE` 子句的文本检查。
- 上游v1.0在PostgreSQL 14及更高版本上进行了测试。
