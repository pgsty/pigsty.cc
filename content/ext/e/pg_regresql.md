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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_regresql-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_regresql-2.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_regresql-2.0.0.tar.gz</div>
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
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
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

来源：[extension README](https://github.com/boringSQL/regresql/blob/master/pg_ext/README.md)，[control file](https://github.com/boringSQL/regresql/blob/master/pg_ext/pg_regresql.control)，[portable stats article](https://boringsql.com/posts/portable-stats/)

`pg_regresql` 是 RegreSQL 的 PostgreSQL planner-hook 组件。它让规划器优先信任 `pg_class` 中的统计信息，而不是根据物理文件大小重新缩放估算值，因此适合在注入生产统计后做执行计划回归测试。

### 激活 hook

```sql
LOAD 'pg_regresql';

EXPLAIN SELECT ...;
```

如果希望整个测试实例都启用它，上游建议：

```conf
session_preload_libraries = 'pg_regresql'
```

### 它覆盖的估算

README 说明该 hook 会在 `estimate_rel_size()` 之后运行，并用 catalog 中的值替换规划器默认估算：

- `rel->pages` 来自 `pg_class.relpages`
- `rel->tuples` 来自 `pg_class.reltuples`
- `rel->allvisfrac` 来自 `pg_class.relallvisible / relpages`
- `IndexOptInfo->pages` 来自索引的 `pg_class.relpages`
- `IndexOptInfo->tuples` 来自索引的 `pg_class.reltuples`

### 典型工作流

```sql
SELECT pg_restore_relation_stats(
    'schemaname', 'public',
    'relname', 'test_orders',
    'relpages', 123513::integer,
    'reltuples', 50000000::real,
    'relallvisible', 123513::integer
);

LOAD 'pg_regresql';

EXPLAIN SELECT * FROM test_orders WHERE created_at > '2024-06-01';
```

这个流程主要用于在本地复现生产计划，或在 migration、升级和 plan-regression 测试中复用已恢复的生产统计。

### 说明

- 控制文件当前声明 `default_version = '2.0'`。
- 公开仓库里的 tag 仍主要是 `v2.0.0-alpha*`，因此打包目标 `2.0.0` 领先于 GitHub 上清晰标注的最终正式 tag。
- 上游文档说明该扩展支持 PostgreSQL 14+。
