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

> 来源：[扩展 README](https://github.com/boringSQL/regresql/blob/master/pg_ext/README.md)，[控制文件](https://github.com/boringSQL/regresql/blob/master/pg_ext/pg_regresql.control)，[portable stats 文章](https://boringsql.com/posts/portable-stats/)

`pg_regresql` 是一个 PostgreSQL 扩展，用来让优化器优先信任 `pg_class` 中的目录统计信息，而不是根据物理文件块数重新估算关系大小。它是 RegreSQL 项目中的扩展部分，主要用于在注入生产统计信息后，复现更接近真实环境的执行计划。

### 要解决的问题

上游扩展 README 指出，PostgreSQL 在估算关系大小时，通常不会完全信任 `pg_class.relpages` 和 `pg_class.reltuples`。规划器会读取当前物理文件大小，并据此重新缩放这些统计值。

这种行为有助于规避陈旧统计信息带来的风险，但在测试环境中会破坏“已从其他环境恢复目录统计信息”的场景，因为本地表文件通常远小于生产环境。

### 它覆盖了什么

`pg_regresql` 通过 `get_relation_info_hook` 在 `estimate_rel_size()` 之后接管规划器估算，并用目录统计值替换默认结果。

| 规划器字段 | 默认来源 | `pg_regresql` 来源 |
| --- | --- | --- |
| `rel->pages` | 通过表访问方法调用 `smgrnblocks()` | `pg_class.relpages` |
| `rel->tuples` | 按物理页数缩放后的密度估算 | `pg_class.reltuples` |
| `rel->allvisfrac` | `relallvisible / physical pages` | `pg_class.relallvisible / relpages` |
| `IndexOptInfo->pages` | `RelationGetNumberOfBlocks()` | 索引的 `pg_class.relpages` |
| `IndexOptInfo->tuples` | 复制自 `rel->tuples` | 索引的 `pg_class.reltuples` |

### 安装

上游 README 给出了三种安装方式：

```bash
sudo pgxn install pg_regresql
```

```bash
make PG_SOURCE=/path/to/postgresql
make install PG_SOURCE=/path/to/postgresql
```

```bash
make USE_PGXS=1
make install USE_PGXS=1
```

控制文件为 `pg_regresql.control`，其中声明了 `default_version = '2.0'` 和 `module_pathname = '$libdir/pg_regresql'`。

### 启用方式

只有在共享库被加载后，这个扩展才会真正接管规划器：

```sql
LOAD 'pg_regresql';

EXPLAIN SELECT ...;
```

如果希望在整个测试实例中启用，README 推荐：

```conf
session_preload_libraries = 'pg_regresql'
```

这里的关键是运行时加载配置，而不是“装完包就自动生效”；只有在当前会话或实例加载了库之后，规划器 hook 才会起作用。

### 典型工作流

它的主要用途是基于已恢复的生产统计信息做执行计划回归测试。在 CI 或测试库中注入目录统计信息后，`pg_regresql` 会强制规划器使用这些恢复值，而不是依赖本地很小的堆表文件大小。

README 给出的示例是：

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

这种模式适合：

- 在本地复现生产执行计划
- 用更真实的计划估算测试 schema migration
- 模拟表增长后的索引与访问路径选择
- 改进分区规划相关实验

### 兼容性

- 在本仓库中打包支持 PostgreSQL 14 及以上版本
- 上游 README 提到该 hook 自 PostgreSQL 8.3 起就存在
- 设计上应可与 `pg_hint_plan`、`hypopg` 等扩展共存，但上游说明这一点尚未完整测试
