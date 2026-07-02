---
title: "pg_search"
linkTitle: "pg_search"
description: "ParadeDB BM25算法全文检索插件，ES全文检索"
weight: 2100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/paradedb/paradedb/tree/dev/pg_search">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dev/pg_search</div>
    <div class="ext-card__desc">https://github.com/paradedb/paradedb/tree/dev/pg_search</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_search-0.24.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_search-0.24.0.tar.gz</div>
    <div class="ext-card__desc">pg_search-0.24.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_search`**](/ext/e/pg_search) | `0.24.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2100  | [**`pg_search`**](/ext/e/pg_search) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `paradedb` |
{.ext-table}

| **相关扩展** | [`pgroonga`](/ext/e/pgroonga) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pg_trgm`](/ext/e/pg_trgm) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> bm25 am conflicts with pg_textsearch and vchord_bm25


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.24.0` | {{< pgvers "18,17,16,15" >}} | `pg_search` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.24.0` | {{< pgvers "18,17,16,15" >}} | `pg_search_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.24.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-search` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.20.7 1 |
| u26.x86_64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | AVAIL PIGSTY 0.24.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_search_18 pg_search_18-0.24.0-1PIGSTY.el8.x86_64.rpm pigsty 0.24.0 70.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_18-0.24.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_search_18 pg_search_18-0.24.0-1PIGSTY.el8.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_18-0.24.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_search_18 pg_search_18-0.24.0-1PARADEDB.el9.x86_64.rpm pigsty 0.24.0 69.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_18-0.24.0-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 18 pg_search_18 pg_search_18-0.24.0-1PARADEDB.el9.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_18-0.24.0-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 18 pg_search_18 pg_search_18-0.24.0-1PARADEDB.el10.x86_64.rpm pigsty 0.24.0 69.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_18-0.24.0-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 18 pg_search_18 pg_search_18-0.24.0-1PARADEDB.el10.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_18-0.24.0-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.24.0_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.24.0_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.24.0_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.24.0_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb pigsty 0.24.0 67.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-18-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb pigsty 0.24.0 65.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-18-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.24.0_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.24.0_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb pigsty 0.24.0 66.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-18-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb pigsty 0.24.0 65.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-18-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_search_17 pg_search_17-0.24.0-1PIGSTY.el8.x86_64.rpm pigsty 0.24.0 70.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_17-0.24.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_search_17 pg_search_17-0.24.0-1PIGSTY.el8.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_17-0.24.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_search_17 pg_search_17-0.24.0-1PARADEDB.el9.x86_64.rpm pigsty 0.24.0 69.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_17-0.24.0-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 17 pg_search_17 pg_search_17-0.24.0-1PARADEDB.el9.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_17-0.24.0-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 17 pg_search_17 pg_search_17-0.24.0-1PARADEDB.el10.x86_64.rpm pigsty 0.24.0 69.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_17-0.24.0-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 17 pg_search_17 pg_search_17-0.24.0-1PARADEDB.el10.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_17-0.24.0-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.24.0_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.24.0_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.24.0_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.24.0_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb pigsty 0.24.0 67.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-17-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb pigsty 0.24.0 65.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-17-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.24.0_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.24.0_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb pigsty 0.24.0 66.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-17-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb pigsty 0.24.0 65.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-17-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_search_16 pg_search_16-0.24.0-1PIGSTY.el8.x86_64.rpm pigsty 0.24.0 70.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_16-0.24.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_search_16 pg_search_16-0.24.0-1PIGSTY.el8.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_16-0.24.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_search_16 pg_search_16-0.24.0-1PARADEDB.el9.x86_64.rpm pigsty 0.24.0 69.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_16-0.24.0-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 16 pg_search_16 pg_search_16-0.24.0-1PARADEDB.el9.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_16-0.24.0-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 16 pg_search_16 pg_search_16-0.24.0-1PARADEDB.el10.x86_64.rpm pigsty 0.24.0 69.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_16-0.24.0-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 16 pg_search_16 pg_search_16-0.24.0-1PARADEDB.el10.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_16-0.24.0-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.24.0_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.24.0_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.24.0_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.24.0_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb pigsty 0.24.0 67.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-16-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb pigsty 0.24.0 65.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-16-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.24.0_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.24.0_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb pigsty 0.24.0 66.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-16-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb pigsty 0.24.0 65.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-16-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_search_15 pg_search_15-0.24.0-1PIGSTY.el8.x86_64.rpm pigsty 0.24.0 70.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_15-0.24.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_search_15 pg_search_15-0.24.0-1PIGSTY.el8.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_15-0.24.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_search_15 pg_search_15-0.24.0-1PARADEDB.el9.x86_64.rpm pigsty 0.24.0 69.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_15-0.24.0-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 15 pg_search_15 pg_search_15-0.24.0-1PARADEDB.el9.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_15-0.24.0-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 15 pg_search_15 pg_search_15-0.24.0-1PARADEDB.el10.x86_64.rpm pigsty 0.24.0 69.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_15-0.24.0-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 15 pg_search_15 pg_search_15-0.24.0-1PARADEDB.el10.aarch64.rpm pigsty 0.24.0 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_15-0.24.0-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.24.0_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.24.0_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.24.0_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.24.0_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb pigsty 0.24.0 67.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-15-pg-search_0.24.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb pigsty 0.24.0 65.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-15-pg-search_0.24.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0_amd64.deb pigsty 0.24.0 67.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.24.0_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0_arm64.deb pigsty 0.24.0 64.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.24.0_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb pigsty 0.24.0 66.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-15-pg-search_0.24.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb pigsty 0.24.0 65.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-15-pg-search_0.24.0-2PIGSTY~resolute_arm64.deb
@ d12.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_amd64.deb pigsty 0.20.7 45.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_arm64.deb pigsty 0.20.7 45.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_amd64.deb pigsty 0.20.5 45.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_arm64.deb pigsty 0.20.5 44.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_amd64.deb pigsty 0.20.7 45.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_arm64.deb pigsty 0.20.7 45.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_amd64.deb pigsty 0.20.7 45.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_arm64.deb pigsty 0.20.7 45.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_search` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_search         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_search` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_search;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_search -v 18  # PG 18
pig ext install -y pg_search -v 17  # PG 17
pig ext install -y pg_search -v 16  # PG 16
pig ext install -y pg_search -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_search_18       # PG 18
dnf install -y pg_search_17       # PG 17
dnf install -y pg_search_16       # PG 16
dnf install -y pg_search_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-search   # PG 18
apt install -y postgresql-17-pg-search   # PG 17
apt install -y postgresql-16-pg-search   # PG 16
apt install -y postgresql-15-pg-search   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_search';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_search;
```




## 用法

来源：[ParadeDB extension install docs](https://docs.paradedb.com/deploy/self-hosted/extension)、[create-index docs](https://docs.paradedb.com/documentation/indexing/create-index.md)、[match docs](https://docs.paradedb.com/documentation/full-text/match.md)、[score docs](https://docs.paradedb.com/documentation/sorting/score.md)、[highlight docs](https://docs.paradedb.com/documentation/full-text/highlight.md)、[v0.24.0 release](https://github.com/paradedb/paradedb/releases/tag/v0.24.0)、[pg_search README](https://github.com/paradedb/paradedb/blob/v0.24.0/pg_search/README.md)

`pg_search` 是 ParadeDB 为 PostgreSQL 提供的 BM25 搜索扩展。上游 README 说明支持从 PostgreSQL 15 开始；Pigsty 为 PostgreSQL 15-18 打包 `0.24.0`，并使用 `cargo-pgrx` 0.18.1 构建。

### 启用并创建扩展

```conf
shared_preload_libraries = 'pg_search'
```

```sql
CREATE EXTENSION pg_search;
```

自托管扩展文档要求在 `CREATE EXTENSION` 之前先设置 `shared_preload_libraries = 'pg_search'`。

### 创建 BM25 索引

当前示例使用 `bm25` access method，并指定唯一键字段：

```sql
CREATE INDEX search_idx ON mock_items
USING bm25 (id, description, category, rating)
WITH (key_field = 'id');
```

每张表只支持一个 BM25 索引。`key_field` 是必填项，必须唯一，且必须是第一个被索引的列；文本类型 key fields 必须不分词。

### 查询操作符与辅助函数

当前文档使用以下查询操作符：

- `|||`：析取匹配，等价于 `term1 OR term2`。
- `&&&`：合取匹配，等价于 `term1 AND term2`。

示例：

```sql
SELECT description, rating
FROM mock_items
WHERE description ||| 'running shoes'
ORDER BY rating
LIMIT 5;

SELECT description, pdb.score(id) AS score
FROM mock_items
WHERE description &&& 'running shoes'
ORDER BY score DESC
LIMIT 5;

SELECT description, pdb.snippet(description) AS snippet, pdb.score(id) AS score
FROM mock_items
WHERE description ||| 'running shoes'
ORDER BY score DESC
LIMIT 5;
```

常用结果辅助函数包括 `pdb.score(id)`、`pdb.snippet(field)`、`pdb.snippets(field)` 和 `pdb.snippet_positions(field)`。高亮相对昂贵，且不支持 fuzzy search queries。

### 说明

- 旧 quickstart URL 已移除；当前 `|||`、`&&&`、scoring 和 highlighting 语法应以上方版本化文档页面为准。
- Release `0.24.0` 要求 preload `pg_search`，将 pgrx 升级到 0.18.1，并记录了 crash-recovery、`ltree` 与 inline-tokenizer 相关工作；上面的基础 BM25 查询示例没有变化。
- Pigsty metadata 说明 `bm25` access method 与 `pg_textsearch`、`vchord_bm25` 冲突；未测试目标组合前，不要在同一集群中 preload 竞争性的 BM25 access-method 扩展。
