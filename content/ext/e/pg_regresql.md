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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_regresql-2.0.0.zip">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_regresql-2.0.0.zip</div>
    <div class="ext-card__desc">pg_regresql-2.0.0.zip</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_regresql`**](/ext/e/pg_regresql) | `2.0.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license bsd2clause" href="/ext/license#bsd2clause">BSD-2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3230  | [**`pg_regresql`**](/ext/e/pg_regresql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) [`plan_filter`](/ext/e/plan_filter) [`auto_explain`](/ext/e/auto_explain) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Activate it with LOAD pg_regresql or session_preload_libraries.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_regresql` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_regresql_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-regresql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
@ el8.x86_64 18 pg_regresql_18 pg_regresql_18-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_18-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_regresql_18 pg_regresql_18-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_18-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_regresql_18 pg_regresql_18-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_18-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_regresql_18 pg_regresql_18-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_18-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_regresql_18 pg_regresql_18-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_18-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_regresql_18 pg_regresql_18-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 10.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_18-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 8.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-regresql postgresql-18-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-18-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_regresql_17 pg_regresql_17-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_17-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_regresql_17 pg_regresql_17-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_17-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_regresql_17 pg_regresql_17-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_17-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_regresql_17 pg_regresql_17-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_17-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_regresql_17 pg_regresql_17-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_17-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_regresql_17 pg_regresql_17-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 10.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_17-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 9.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 9.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-regresql postgresql-17-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-17-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_regresql_16 pg_regresql_16-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_16-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_regresql_16 pg_regresql_16-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_16-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_regresql_16 pg_regresql_16-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_16-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_regresql_16 pg_regresql_16-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_16-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_regresql_16 pg_regresql_16-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_16-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_regresql_16 pg_regresql_16-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 10.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_16-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 9.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 9.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-regresql postgresql-16-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-16-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_regresql_15 pg_regresql_15-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_15-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_regresql_15 pg_regresql_15-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_15-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_regresql_15 pg_regresql_15-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_15-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_regresql_15 pg_regresql_15-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_15-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_regresql_15 pg_regresql_15-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_15-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_regresql_15 pg_regresql_15-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 10.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_15-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-regresql postgresql-15-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-15-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_regresql_14 pg_regresql_14-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_regresql_14-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_regresql_14 pg_regresql_14-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_regresql_14-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_regresql_14 pg_regresql_14-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_regresql_14-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_regresql_14 pg_regresql_14-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_regresql_14-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_regresql_14 pg_regresql_14-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_regresql_14-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_regresql_14 pg_regresql_14-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 10.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_regresql_14-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-regresql postgresql-14-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-regresql/postgresql-14-pg-regresql_2.0.0-1PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_regresql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_regresql -v 18  # PG 18
pig ext install -y pg_regresql -v 17  # PG 17
pig ext install -y pg_regresql -v 16  # PG 16
pig ext install -y pg_regresql -v 15  # PG 15
pig ext install -y pg_regresql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_regresql_18       # PG 18
dnf install -y pg_regresql_17       # PG 17
dnf install -y pg_regresql_16       # PG 16
dnf install -y pg_regresql_15       # PG 15
dnf install -y pg_regresql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-regresql   # PG 18
apt install -y postgresql-17-pg-regresql   # PG 17
apt install -y postgresql-16-pg-regresql   # PG 16
apt install -y postgresql-15-pg-regresql   # PG 15
apt install -y postgresql-14-pg-regresql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_regresql';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_regresql;
```


## 用法

> 语法：
>
> ```bash
> regresql init postgres://localhost/mydb
> regresql add src/sql/
> regresql update
> regresql test
> ```
>
> 来源：[README](https://github.com/boringsql/regresql)，[产品页](https://boringsql.com/products/regresql/)

`RegreSQL` 在上游被定位为一个与语言无关的 PostgreSQL SQL 回归测试工具，而不是数据库内的 `CREATE EXTENSION` 式模块。它会发现 `.sql` 文件、在 PostgreSQL 上执行这些文件、保存期望输出，并跟踪查询计划变化。

## 快速上手

README 给出的基本流程是：

```bash
regresql init postgres://localhost/mydb
regresql discover
regresql add src/sql/
regresql update
regresql test
```

这会初始化测试套件、发现查询文件、生成计划定义、捕获期望输出，并执行回归检查。

## 跟踪内容

上游文档重点关注：

- 期望的查询输出快照
- `EXPLAIN` 计划基线
- 顺序扫描告警
- 与迁移相关的查询回归
- 面向 CI 的输出格式，例如 `junit`、`json`、`pgtap` 和 `github-actions`

## 查询文件与计划

RegreSQL 使用普通 SQL 文件，并支持通过 `-- name:` 注释在单个文件中编排多个查询：

```sql
-- name: get-user-by-id
SELECT * FROM users WHERE id = :id;
```

计划文件用于提供测试参数：

```yaml
"1":
  id: 42
"2":
  id: 100
```

## 快照与迁移

该工具可以构建和恢复数据库快照，并比较迁移前后的查询行为：

```bash
regresql snapshot build
regresql snapshot restore
regresql migrate --script db/migrations/001_add_column.sql
```

## 安装

README 说明可通过 Homebrew 或 Go 安装：

```bash
brew tap boringsql/boringsql
brew install regresql
```

或：

```bash
go install github.com/boringsql/regresql@latest
```

快照相关命令需要 `pg_dump`、`pg_restore` 和 `psql` 等 PostgreSQL 客户端工具。
