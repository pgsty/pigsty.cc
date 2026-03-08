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
  <a class="ext-card ext-card--source" href="pg_search-0.21.8.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_search-0.21.8.tar.gz</div>
    <div class="ext-card__desc">pg_search-0.21.8.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_search`**](/ext/e/pg_search) | `0.21.12` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2100  | [**`pg_search`**](/ext/e/pg_search) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `paradedb` |
{.ext-table}

| **相关扩展** | [`pgroonga`](/ext/e/pgroonga) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pg_trgm`](/ext/e/pg_trgm) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG 17+ does not require dynamic loading 


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.21.12` | {{< pgvers "18,17,16,15" >}} | `pg_search` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.21.12` | {{< pgvers "18,17,16,15" >}} | `pg_search_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.21.12` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-search` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.20.10 1 |
| el8.aarch64 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.21.6 1 | AVAIL PIGSTY 0.20.10 1 |
| el9.x86_64 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.20.10 1 |
| el9.aarch64 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.20.10 1 |
| el10.x86_64 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | AVAIL PIGSTY 0.21.12 2 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.21.12 1 | AVAIL PIGSTY 0.20.7 1 |
@ el8.x86_64 18 pg_search_18 pg_search_18-0.21.6-1PIGSTY.el8.x86_64.rpm pigsty 0.21.6 49.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_search_18-0.21.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_search_18 pg_search_18-0.21.6-1PIGSTY.el8.aarch64.rpm pigsty 0.21.6 49.2MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_search_18-0.21.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_search_18 pg_search_18-0.21.12-1PARADEDB.el9.x86_64.rpm pigsty 0.21.12 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_18-0.21.12-1PARADEDB.el9.x86_64.rpm
@ el9.x86_64 18 pg_search_18 pg_search_18-0.21.9-1PARADEDB.el9.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_18-0.21.9-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 18 pg_search_18 pg_search_18-0.21.12-1PARADEDB.el9.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_18-0.21.12-1PARADEDB.el9.aarch64.rpm
@ el9.aarch64 18 pg_search_18 pg_search_18-0.21.9-1PARADEDB.el9.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_18-0.21.9-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 18 pg_search_18 pg_search_18-0.21.12-1PARADEDB.el10.x86_64.rpm pigsty 0.21.12 49.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_18-0.21.12-1PARADEDB.el10.x86_64.rpm
@ el10.x86_64 18 pg_search_18 pg_search_18-0.21.9-1PARADEDB.el10.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_18-0.21.9-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 18 pg_search_18 pg_search_18-0.21.12-1PARADEDB.el10.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_18-0.21.12-1PARADEDB.el10.aarch64.rpm
@ el10.aarch64 18 pg_search_18 pg_search_18-0.21.9-1PARADEDB.el10.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_18-0.21.9-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_amd64.deb pigsty 0.21.12 48.9MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_amd64.deb pigsty 0.21.12 48.9MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-18-pg-search/postgresql-18-pg-search_0.21.12_arm64.deb
@ el8.x86_64 17 pg_search_17 pg_search_17-0.21.6-1PIGSTY.el8.x86_64.rpm pigsty 0.21.6 49.8MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_search_17-0.21.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_search_17 pg_search_17-0.21.6-1PIGSTY.el8.aarch64.rpm pigsty 0.21.6 49.2MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_search_17-0.21.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_search_17 pg_search_17-0.21.12-1PARADEDB.el9.x86_64.rpm pigsty 0.21.12 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_17-0.21.12-1PARADEDB.el9.x86_64.rpm
@ el9.x86_64 17 pg_search_17 pg_search_17-0.21.9-1PARADEDB.el9.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_17-0.21.9-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 17 pg_search_17 pg_search_17-0.21.12-1PARADEDB.el9.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_17-0.21.12-1PARADEDB.el9.aarch64.rpm
@ el9.aarch64 17 pg_search_17 pg_search_17-0.21.9-1PARADEDB.el9.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_17-0.21.9-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 17 pg_search_17 pg_search_17-0.21.12-1PARADEDB.el10.x86_64.rpm pigsty 0.21.12 49.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_17-0.21.12-1PARADEDB.el10.x86_64.rpm
@ el10.x86_64 17 pg_search_17 pg_search_17-0.21.9-1PARADEDB.el10.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_17-0.21.9-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 17 pg_search_17 pg_search_17-0.21.12-1PARADEDB.el10.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_17-0.21.12-1PARADEDB.el10.aarch64.rpm
@ el10.aarch64 17 pg_search_17 pg_search_17-0.21.9-1PARADEDB.el10.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_17-0.21.9-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-17-pg-search/postgresql-17-pg-search_0.21.12_arm64.deb
@ el8.x86_64 16 pg_search_16 pg_search_16-0.21.6-1PIGSTY.el8.x86_64.rpm pigsty 0.21.6 49.8MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_search_16-0.21.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_search_16 pg_search_16-0.21.6-1PIGSTY.el8.aarch64.rpm pigsty 0.21.6 49.2MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_search_16-0.21.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_search_16 pg_search_16-0.21.12-1PARADEDB.el9.x86_64.rpm pigsty 0.21.12 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_16-0.21.12-1PARADEDB.el9.x86_64.rpm
@ el9.x86_64 16 pg_search_16 pg_search_16-0.21.9-1PARADEDB.el9.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_16-0.21.9-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 16 pg_search_16 pg_search_16-0.21.12-1PARADEDB.el9.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_16-0.21.12-1PARADEDB.el9.aarch64.rpm
@ el9.aarch64 16 pg_search_16 pg_search_16-0.21.9-1PARADEDB.el9.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_16-0.21.9-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 16 pg_search_16 pg_search_16-0.21.12-1PARADEDB.el10.x86_64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_16-0.21.12-1PARADEDB.el10.x86_64.rpm
@ el10.x86_64 16 pg_search_16 pg_search_16-0.21.9-1PARADEDB.el10.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_16-0.21.9-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 16 pg_search_16 pg_search_16-0.21.12-1PARADEDB.el10.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_16-0.21.12-1PARADEDB.el10.aarch64.rpm
@ el10.aarch64 16 pg_search_16 pg_search_16-0.21.9-1PARADEDB.el10.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_16-0.21.9-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-16-pg-search/postgresql-16-pg-search_0.21.12_arm64.deb
@ el8.x86_64 15 pg_search_15 pg_search_15-0.21.6-1PIGSTY.el8.x86_64.rpm pigsty 0.21.6 49.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_search_15-0.21.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_search_15 pg_search_15-0.21.6-1PIGSTY.el8.aarch64.rpm pigsty 0.21.6 49.2MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_search_15-0.21.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_search_15 pg_search_15-0.21.12-1PARADEDB.el9.x86_64.rpm pigsty 0.21.12 49.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_15-0.21.12-1PARADEDB.el9.x86_64.rpm
@ el9.x86_64 15 pg_search_15 pg_search_15-0.21.9-1PARADEDB.el9.x86_64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_15-0.21.9-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 15 pg_search_15 pg_search_15-0.21.12-1PARADEDB.el9.aarch64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_15-0.21.12-1PARADEDB.el9.aarch64.rpm
@ el9.aarch64 15 pg_search_15 pg_search_15-0.21.9-1PARADEDB.el9.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_15-0.21.9-1PARADEDB.el9.aarch64.rpm
@ el10.x86_64 15 pg_search_15 pg_search_15-0.21.12-1PARADEDB.el10.x86_64.rpm pigsty 0.21.12 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_15-0.21.12-1PARADEDB.el10.x86_64.rpm
@ el10.x86_64 15 pg_search_15 pg_search_15-0.21.9-1PARADEDB.el10.x86_64.rpm pigsty 0.21.9 49.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_search_15-0.21.9-1PARADEDB.el10.x86_64.rpm
@ el10.aarch64 15 pg_search_15 pg_search_15-0.21.12-1PARADEDB.el10.aarch64.rpm pigsty 0.21.12 49.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_15-0.21.12-1PARADEDB.el10.aarch64.rpm
@ el10.aarch64 15 pg_search_15 pg_search_15-0.21.9-1PARADEDB.el10.aarch64.rpm pigsty 0.21.9 49.6MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_search_15-0.21.9-1PARADEDB.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_amd64.deb pigsty 0.21.12 49.0MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.21.12_arm64.deb pigsty 0.21.12 48.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-15-pg-search/postgresql-15-pg-search_0.21.12_arm64.deb
@ el8.x86_64 14 pg_search_14 pg_search_14-0.20.10-1PARADEDB.el8.x86_64.rpm pigsty 0.20.10 46.3MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_search_14-0.20.10-1PARADEDB.el8.x86_64.rpm
@ el8.aarch64 14 pg_search_14 pg_search_14-0.20.10-1PARADEDB.el8.aarch64.rpm pigsty 0.20.10 45.7MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_search_14-0.20.10-1PARADEDB.el8.aarch64.rpm
@ el9.x86_64 14 pg_search_14 pg_search_14-0.20.10-1PARADEDB.el9.x86_64.rpm pigsty 0.20.10 46.1MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_search_14-0.20.10-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 14 pg_search_14 pg_search_14-0.20.10-1PARADEDB.el9.aarch64.rpm pigsty 0.20.10 46.0MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_search_14-0.20.10-1PARADEDB.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_amd64.deb pigsty 0.20.7 45.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_arm64.deb pigsty 0.20.7 45.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_amd64.deb pigsty 0.20.5 45.1MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_arm64.deb pigsty 0.20.5 44.5MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-14-pg-search_0.20.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_amd64.deb pigsty 0.20.7 45.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_arm64.deb pigsty 0.20.7 45.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_amd64.deb pigsty 0.20.7 45.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-search postgresql-14-pg-search_0.20.7_arm64.deb pigsty 0.20.7 45.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/postgresql-14-pg-search/postgresql-14-pg-search_0.20.7_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_search` 扩展的 DEB 包：

```bash
pig build pkg pg_search         # 构建 DEB 包
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


**创建扩展**：

```sql
CREATE EXTENSION pg_search;
```


> [!NOTE] 此扩展由 ParadeDB 团队开发，通过 PIGSTY 仓库分发

## 用法

https://docs.paradedb.com/documentation/getting-started/quickstart

```sql
CREATE EXTENSION pg_search;

ALTER SYSTEM SET paradedb.pg_search_telemetry TO 'off';

-- 创建 BM25 测试表
CALL paradedb.create_bm25_test_table(
  schema_name => 'public',
  table_name => 'mock_items'
);

SELECT description, rating, category FROM mock_items LIMIT 3;

-- 创建 BM25 索引（key_field 必须具有 UNIQUE 约束，每张表只能创建一个 BM25 索引）
CREATE INDEX search_idx ON mock_items
USING bm25 (id, description, category, rating, in_stock, created_at, metadata, weight_range)
WITH (key_field='id');

-- 使用 @@@ 操作符进行全文检索
SELECT description, rating, category
FROM mock_items
WHERE description @@@ 'keyboard' AND rating > 2
ORDER BY rating
LIMIT 5;

-- BM25 相关性评分
SELECT description, paradedb.score(id)
FROM mock_items
WHERE description @@@ 'keyboard'
ORDER BY paradedb.score(id) DESC
LIMIT 5;

-- 高亮匹配的关键词
SELECT description, paradedb.snippet(description), paradedb.score(id)
FROM mock_items
WHERE description @@@ 'keyboard'
ORDER BY paradedb.score(id) DESC
LIMIT 5;

-- 精确短语搜索（在单引号内使用双引号）
SELECT description, rating, category
FROM mock_items
WHERE description @@@ '"metal keyboard"';

-- 配置文本字段的分词器（例如英文词干提取）
DROP INDEX search_idx;
CREATE INDEX search_idx ON mock_items
USING bm25 (id, (description::pdb.simple('stemmer=english')), category)
WITH (key_field='id');
```
