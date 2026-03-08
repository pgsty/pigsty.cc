---
title: "plprql"
linkTitle: "plprql"
description: "在PostgreSQL使用PRQL——管线式关系查询语言"
weight: 3040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kaspermarstal/plprql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kaspermarstal/plprql</div>
    <div class="ext-card__desc">https://github.com/kaspermarstal/plprql</div>
  </a>
  <a class="ext-card ext-card--source" href="plprql-18.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plprql-18.0.1.tar.gz</div>
    <div class="ext-card__desc">plprql-18.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plprql`**](/ext/e/plprql) | `18.0.1` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3040  | [**`plprql`**](/ext/e/plprql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_tle`](/ext/e/pg_tle) [`plpgsql`](/ext/e/plpgsql) [`plv8`](/ext/e/plv8) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`pllua`](/ext/e/pllua) [`hstore_pllua`](/ext/e/hstore_pllua) [`plluau`](/ext/e/plluau) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `18.0.1` | {{< pgvers "18,17,16,15,14" >}} | `plprql` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `18.0.1` | {{< pgvers "18,17,16,15,14" >}} | `plprql_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `18.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plprql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 | AVAIL PIGSTY 18.0.1 1 |
@ el8.x86_64 18 plprql_18 plprql_18-18.0.1-1PIGSTY.el8.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plprql_18-18.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 plprql_18 plprql_18-18.0.1-1PIGSTY.el8.aarch64.rpm pigsty 18.0.1 2.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plprql_18-18.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 plprql_18 plprql_18-18.0.1-1PIGSTY.el9.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plprql_18-18.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plprql_18 plprql_18-18.0.1-1PIGSTY.el9.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plprql_18-18.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plprql_18 plprql_18-18.0.1-1PIGSTY.el10.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/plprql_18-18.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 plprql_18 plprql_18-18.0.1-1PIGSTY.el10.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/plprql_18-18.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~trixie_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~trixie_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~jammy_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~jammy_arm64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~noble_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plprql postgresql-18-plprql_18.0.1-1PIGSTY~noble_arm64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-18-plprql_18.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 plprql_17 plprql_17-18.0.1-1PIGSTY.el8.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plprql_17-18.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 plprql_17 plprql_17-18.0.1-1PIGSTY.el8.aarch64.rpm pigsty 18.0.1 2.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plprql_17-18.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 plprql_17 plprql_17-18.0.1-1PIGSTY.el9.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plprql_17-18.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plprql_17 plprql_17-18.0.1-1PIGSTY.el9.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plprql_17-18.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plprql_17 plprql_17-18.0.1-1PIGSTY.el10.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/plprql_17-18.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 plprql_17 plprql_17-18.0.1-1PIGSTY.el10.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/plprql_17-18.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~trixie_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~trixie_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~jammy_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~jammy_arm64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~noble_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plprql postgresql-17-plprql_18.0.1-1PIGSTY~noble_arm64.deb pigsty 18.0.1 2.2MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-17-plprql_18.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 plprql_16 plprql_16-18.0.1-1PIGSTY.el8.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plprql_16-18.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 plprql_16 plprql_16-18.0.1-1PIGSTY.el8.aarch64.rpm pigsty 18.0.1 2.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plprql_16-18.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 plprql_16 plprql_16-18.0.1-1PIGSTY.el9.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plprql_16-18.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plprql_16 plprql_16-18.0.1-1PIGSTY.el9.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plprql_16-18.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plprql_16 plprql_16-18.0.1-1PIGSTY.el10.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/plprql_16-18.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 plprql_16 plprql_16-18.0.1-1PIGSTY.el10.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/plprql_16-18.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~trixie_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~trixie_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~jammy_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~jammy_arm64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~noble_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plprql postgresql-16-plprql_18.0.1-1PIGSTY~noble_arm64.deb pigsty 18.0.1 2.2MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-16-plprql_18.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 plprql_15 plprql_15-18.0.1-1PIGSTY.el8.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plprql_15-18.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 plprql_15 plprql_15-18.0.1-1PIGSTY.el8.aarch64.rpm pigsty 18.0.1 2.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plprql_15-18.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 plprql_15 plprql_15-18.0.1-1PIGSTY.el9.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plprql_15-18.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 plprql_15 plprql_15-18.0.1-1PIGSTY.el9.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plprql_15-18.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 plprql_15 plprql_15-18.0.1-1PIGSTY.el10.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/plprql_15-18.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 plprql_15 plprql_15-18.0.1-1PIGSTY.el10.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/plprql_15-18.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~trixie_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~trixie_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~jammy_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~jammy_arm64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~noble_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plprql postgresql-15-plprql_18.0.1-1PIGSTY~noble_arm64.deb pigsty 18.0.1 2.2MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-15-plprql_18.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 plprql_14 plprql_14-18.0.1-1PIGSTY.el8.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/plprql_14-18.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 plprql_14 plprql_14-18.0.1-1PIGSTY.el8.aarch64.rpm pigsty 18.0.1 2.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/plprql_14-18.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 plprql_14 plprql_14-18.0.1-1PIGSTY.el9.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/plprql_14-18.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 plprql_14 plprql_14-18.0.1-1PIGSTY.el9.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/plprql_14-18.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 plprql_14 plprql_14-18.0.1-1PIGSTY.el10.x86_64.rpm pigsty 18.0.1 2.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/plprql_14-18.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 plprql_14 plprql_14-18.0.1-1PIGSTY.el10.aarch64.rpm pigsty 18.0.1 2.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/plprql_14-18.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~trixie_amd64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~trixie_arm64.deb pigsty 18.0.1 1.9MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~jammy_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~jammy_arm64.deb pigsty 18.0.1 2.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~noble_amd64.deb pigsty 18.0.1 2.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plprql postgresql-14-plprql_18.0.1-1PIGSTY~noble_arm64.deb pigsty 18.0.1 2.2MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/plprql/postgresql-14-plprql_18.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plprql` 扩展的 RPM / DEB 包：

```bash
pig build pkg plprql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plprql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plprql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plprql -v 18  # PG 18
pig ext install -y plprql -v 17  # PG 17
pig ext install -y plprql -v 16  # PG 16
pig ext install -y plprql -v 15  # PG 15
pig ext install -y plprql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plprql_18       # PG 18
dnf install -y plprql_17       # PG 17
dnf install -y plprql_16       # PG 16
dnf install -y plprql_15       # PG 15
dnf install -y plprql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plprql   # PG 18
apt install -y postgresql-17-plprql   # PG 17
apt install -y postgresql-16-plprql   # PG 16
apt install -y postgresql-15-plprql   # PG 15
apt install -y postgresql-14-plprql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plprql;
```
