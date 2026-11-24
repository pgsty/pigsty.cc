---
title: "pg_regresql"
linkTitle: "pg_regresql"
description: "用 pg_class 统计信息替代物理文件大小参与查询规划"
weight: 3230
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/boringsql/regresql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">boringsql/regresql</div>
    <div class="ext-card__desc">https://github.com/boringsql/regresql</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_regresql-2.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_regresql-2.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_regresql-2.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_regresql`**](/ext/e/pg_regresql) | `2.2.1` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license bsd2clause" href="/ext/license#bsd2clause">BSD-2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3230  | [**`pg_regresql`**](/ext/e/pg_regresql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`hypopg`](/ext/e/hypopg) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`online_advisor`](/ext/e/online_advisor) [`index_advisor`](/ext/e/index_advisor) [`pg_stat_plans`](/ext/e/pg_stat_plans) [`plan_filter`](/ext/e/plan_filter) [`pg_track_optimizer`](/ext/e/pg_track_optimizer) [`pg_strom`](/ext/e/pg_strom) [`pg_orca`](/ext/e/pg_orca) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Load via LOAD or session_preload_libraries.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.1` | {{< pgvers "19,18,17,16,15" >}} | `pg_regresql` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.0` | {{< pgvers "18,17,16,15" >}} | `pg_regresql_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-regresql` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el10.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el10.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d13.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d13.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u26.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
@ el8.x86_64 18 pg_regresql_18 pg_regresql_18-2.2.0-1PGSTY.el8.x86_64.rpm pigsty 2.2.0 90.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_18-2.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_regresql_18 pg_regresql_18-2.2.0-1PGSTY.el8.aarch64.rpm pigsty 2.2.0 88.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_18-2.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_regresql_18 pg_regresql_18-2.2.0-1PGSTY.el9.x86_64.rpm pigsty 2.2.0 91.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_18-2.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_regresql_18 pg_regresql_18-2.2.0-1PGSTY.el9.aarch64.rpm pigsty 2.2.0 89.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_18-2.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_regresql_18 pg_regresql_18-2.2.0-1PGSTY.el10.x86_64.rpm pigsty 2.2.0 91.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_18-2.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_regresql_18 pg_regresql_18-2.2.0-1PGSTY.el10.aarch64.rpm pigsty 2.2.0 89.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_18-2.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb pigsty 2.2.0 75.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb pigsty 2.2.0 73.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb pigsty 2.2.0 75.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb pigsty 2.2.0 73.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb pigsty 2.2.0 81.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb pigsty 2.2.0 79.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb pigsty 2.2.0 78.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb pigsty 2.2.0 76.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb pigsty 2.2.0 77.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb pigsty 2.2.0 76.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_regresql_17 pg_regresql_17-2.2.0-1PGSTY.el8.x86_64.rpm pigsty 2.2.0 106.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_17-2.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_regresql_17 pg_regresql_17-2.2.0-1PGSTY.el8.aarch64.rpm pigsty 2.2.0 103.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_17-2.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_regresql_17 pg_regresql_17-2.2.0-1PGSTY.el9.x86_64.rpm pigsty 2.2.0 107.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_17-2.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_regresql_17 pg_regresql_17-2.2.0-1PGSTY.el9.aarch64.rpm pigsty 2.2.0 105.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_17-2.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_regresql_17 pg_regresql_17-2.2.0-1PGSTY.el10.x86_64.rpm pigsty 2.2.0 108.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_17-2.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_regresql_17 pg_regresql_17-2.2.0-1PGSTY.el10.aarch64.rpm pigsty 2.2.0 105.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_17-2.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb pigsty 2.2.0 91.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb pigsty 2.2.0 88.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb pigsty 2.2.0 91.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb pigsty 2.2.0 88.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb pigsty 2.2.0 116.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb pigsty 2.2.0 114.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb pigsty 2.2.0 95.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb pigsty 2.2.0 93.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb pigsty 2.2.0 94.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb pigsty 2.2.0 92.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_regresql_16 pg_regresql_16-2.2.0-1PGSTY.el8.x86_64.rpm pigsty 2.2.0 106.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_16-2.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_regresql_16 pg_regresql_16-2.2.0-1PGSTY.el8.aarch64.rpm pigsty 2.2.0 103.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_16-2.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_regresql_16 pg_regresql_16-2.2.0-1PGSTY.el9.x86_64.rpm pigsty 2.2.0 107.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_16-2.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_regresql_16 pg_regresql_16-2.2.0-1PGSTY.el9.aarch64.rpm pigsty 2.2.0 105.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_16-2.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_regresql_16 pg_regresql_16-2.2.0-1PGSTY.el10.x86_64.rpm pigsty 2.2.0 107.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_16-2.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_regresql_16 pg_regresql_16-2.2.0-1PGSTY.el10.aarch64.rpm pigsty 2.2.0 105.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_16-2.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb pigsty 2.2.0 91.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb pigsty 2.2.0 87.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb pigsty 2.2.0 91.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb pigsty 2.2.0 88.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb pigsty 2.2.0 114.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb pigsty 2.2.0 112.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb pigsty 2.2.0 95.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb pigsty 2.2.0 92.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb pigsty 2.2.0 94.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb pigsty 2.2.0 92.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_regresql_15 pg_regresql_15-2.2.0-1PGSTY.el8.x86_64.rpm pigsty 2.2.0 25.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_15-2.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_regresql_15 pg_regresql_15-2.2.0-1PGSTY.el8.aarch64.rpm pigsty 2.2.0 25.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_15-2.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_regresql_15 pg_regresql_15-2.2.0-1PGSTY.el9.x86_64.rpm pigsty 2.2.0 25.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_15-2.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_regresql_15 pg_regresql_15-2.2.0-1PGSTY.el9.aarch64.rpm pigsty 2.2.0 25.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_15-2.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_regresql_15 pg_regresql_15-2.2.0-1PGSTY.el10.x86_64.rpm pigsty 2.2.0 25.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_15-2.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_regresql_15 pg_regresql_15-2.2.0-1PGSTY.el10.aarch64.rpm pigsty 2.2.0 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_15-2.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb pigsty 2.2.0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb pigsty 2.2.0 12.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb pigsty 2.2.0 12.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb pigsty 2.2.0 12.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb pigsty 2.2.0 14.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb pigsty 2.2.0 14.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb pigsty 2.2.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb pigsty 2.2.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb pigsty 2.2.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb pigsty 2.2.0 13.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.2.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_regresql` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_regresql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_regresql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_regresql;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_regresql -v 19  # PG 19
pig ext install -y pg_regresql -v 18  # PG 18
pig ext install -y pg_regresql -v 17  # PG 17
pig ext install -y pg_regresql -v 16  # PG 16
pig ext install -y pg_regresql -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_regresql_19       # PG 19
dnf install -y pg_regresql_18       # PG 18
dnf install -y pg_regresql_17       # PG 17
dnf install -y pg_regresql_16       # PG 16
dnf install -y pg_regresql_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-regresql   # PG 19
apt install -y postgresql-18-pg-regresql   # PG 18
apt install -y postgresql-17-pg-regresql   # PG 17
apt install -y postgresql-16-pg-regresql   # PG 16
apt install -y postgresql-15-pg-regresql   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_regresql';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_regresql;
```

## 用法

来源：

- [README.md](https://api.pgxn.org/src/pg_regresql/pg_regresql-2.2.1/README.md)
- [pg_regresql.control](https://api.pgxn.org/src/pg_regresql/pg_regresql-2.2.1/pg_regresql.control)
- [安装脚本](https://api.pgxn.org/src/pg_regresql/pg_regresql-2.2.1/pg_regresql--2.2.1.sql)
- [从 2.2 升级的脚本](https://api.pgxn.org/src/pg_regresql/pg_regresql-2.2.1/pg_regresql--2.2--2.2.1.sql)

`pg_regresql` 让查询规划使用目录统计信息，不再按物理文件大小缩放估算，适合在数据很少但统计信息具有代表性的数据库中做执行计划回归测试。2.2.1 版将 SQL 对象安装在固定的 `pg_catalog` 模式中。

### 启用规划器钩子

钩子支持 PostgreSQL 15 及以上版本。以超级用户在测试会话中加载：

```sql
LOAD 'pg_regresql';
CREATE TABLE test_orders (created_at date);
EXPLAIN SELECT * FROM test_orders WHERE created_at > DATE '2024-06-01';
```

如需在测试实例的新会话中加载，将库加入现有会话预加载列表：

```ini
session_preload_libraries = 'pg_regresql'
```

钩子用 `pg_class` 的值替换表和索引的页数、行数估计，并根据目录统计计算可见性比例。比较计划前应注入有意义的统计信息；单有空表不能代表生产负载。

### 恢复统计信息

在 PostgreSQL 16 和 17 上，先创建扩展，再加载新版 pg_dump 导出的统计信息：

```sql
CREATE EXTENSION pg_regresql;
SELECT pg_restore_relation_stats(
    'schemaname', 'public', 'relname', 'test_orders',
    'relpages', 123513::integer, 'reltuples', 50000000::real,
    'relallvisible', 123513::integer
);
```

2.2 为这两个版本增加 `pg_restore_extended_stats()` 与 `pg_clear_extended_stats()`，并让 `pg_ndistinct` 和 `pg_dependencies` 接受 pg_dump 19 输出的 JSON 输入。在 PostgreSQL 16 上须删除备份中不支持的 transaction_timeout 设置。PostgreSQL 18 已内置表与属性统计恢复，19 开始内置扩展统计恢复；本扩展不会在 18 及以上版本安装这些回移函数。

### 升级与清理

从 SQL 版本 2.0 升级时，上游要求删除并重新创建扩展；从 2.1 升级使用 `ALTER EXTENSION pg_regresql UPDATE`。删除前应检查依赖。扩展不可重定位，安装需要超级用户。

16/17 上名为 `regresql_pg_*_in` 的替代输入函数会刻意脱离扩展成员关系。`DROP EXTENSION` 会保留这些函数，使已安装的类型转换继续工作，因此删除扩展并不等于将目录完全恢复原状。应在受控的规划测试中使用，不能假定它与其他规划器钩子的组合已经过验证。

### PostgreSQL 19 规划器钩子

2.2.1 在 PostgreSQL 19 上使用 `build_simple_rel_hook`，在更早的受支持主版本上使用 `get_relation_info_hook`。对于已启用 2.2 的数据库，安装匹配的文件后执行 `ALTER EXTENSION pg_regresql UPDATE TO '2.2.1';`。这次升级更新扩展版本记录，保留原有 SQL 定义。
