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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_search-0.24.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_search-0.24.3.tar.gz</div>
    <div class="ext-card__desc">pg_search-0.24.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_search`**](/ext/e/pg_search) | `0.24.3` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2100  | [**`pg_search`**](/ext/e/pg_search) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `paradedb` |
{.ext-table}

| **相关扩展** | [`pgroonga`](/ext/e/pgroonga) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pg_trgm`](/ext/e/pg_trgm) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> bm25 access method conflicts with pg_textsearch and vchord_bm25; PIGSTY packaging uses pgrx 0.19.1 and the pinned builder Rust toolchain instead of upstream rolling stable.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.24.3` | {{< pgvers "18,17,16,15" >}} | `pg_search` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.24.3` | {{< pgvers "18,17,16,15" >}} | `pg_search_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.24.3` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-search` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.20.7 1 |
| u26.x86_64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | AVAIL PIGSTY 0.24.3 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_search_18 pg_search_18-0.24.3-1PIGSTY.el8.x86_64.rpm pigsty 0.24.3 70.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_18-0.24.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_search_18 pg_search_18-0.24.3-1PIGSTY.el8.aarch64.rpm pigsty 0.24.3 68.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_18-0.24.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_search_18 pg_search_18-0.24.3-1PIGSTY.el9.x86_64.rpm pigsty 0.24.3 69.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_18-0.24.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_search_18 pg_search_18-0.24.3-1PIGSTY.el9.aarch64.rpm pigsty 0.24.3 68.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_18-0.24.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_search_18 pg_search_18-0.24.3-1PIGSTY.el10.x86_64.rpm pigsty 0.24.3 69.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_18-0.24.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_search_18 pg_search_18-0.24.3-1PIGSTY.el10.aarch64.rpm pigsty 0.24.3 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_18-0.24.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb pigsty 0.24.3 67.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb pigsty 0.24.3 65.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~noble_amd64.deb pigsty 0.24.3 67.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~noble_arm64.deb pigsty 0.24.3 65.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb pigsty 0.24.3 67.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb pigsty 0.24.3 65.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-18-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_search_17 pg_search_17-0.24.3-1PIGSTY.el8.x86_64.rpm pigsty 0.24.3 71.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_17-0.24.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_search_17 pg_search_17-0.24.3-1PIGSTY.el8.aarch64.rpm pigsty 0.24.3 68.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_17-0.24.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_search_17 pg_search_17-0.24.3-1PIGSTY.el9.x86_64.rpm pigsty 0.24.3 69.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_17-0.24.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_search_17 pg_search_17-0.24.3-1PIGSTY.el9.aarch64.rpm pigsty 0.24.3 68.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_17-0.24.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_search_17 pg_search_17-0.24.3-1PIGSTY.el10.x86_64.rpm pigsty 0.24.3 69.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_17-0.24.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_search_17 pg_search_17-0.24.3-1PIGSTY.el10.aarch64.rpm pigsty 0.24.3 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_17-0.24.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb pigsty 0.24.3 67.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb pigsty 0.24.3 65.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~noble_amd64.deb pigsty 0.24.3 67.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~noble_arm64.deb pigsty 0.24.3 65.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb pigsty 0.24.3 67.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb pigsty 0.24.3 65.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-17-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_search_16 pg_search_16-0.24.3-1PIGSTY.el8.x86_64.rpm pigsty 0.24.3 71.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_16-0.24.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_search_16 pg_search_16-0.24.3-1PIGSTY.el8.aarch64.rpm pigsty 0.24.3 68.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_16-0.24.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_search_16 pg_search_16-0.24.3-1PIGSTY.el9.x86_64.rpm pigsty 0.24.3 69.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_16-0.24.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_search_16 pg_search_16-0.24.3-1PIGSTY.el9.aarch64.rpm pigsty 0.24.3 68.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_16-0.24.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_search_16 pg_search_16-0.24.3-1PIGSTY.el10.x86_64.rpm pigsty 0.24.3 69.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_16-0.24.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_search_16 pg_search_16-0.24.3-1PIGSTY.el10.aarch64.rpm pigsty 0.24.3 68.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_16-0.24.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb pigsty 0.24.3 67.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb pigsty 0.24.3 65.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~noble_amd64.deb pigsty 0.24.3 67.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~noble_arm64.deb pigsty 0.24.3 65.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb pigsty 0.24.3 67.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb pigsty 0.24.3 65.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-16-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_search_15 pg_search_15-0.24.3-1PIGSTY.el8.x86_64.rpm pigsty 0.24.3 70.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_15-0.24.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_search_15 pg_search_15-0.24.3-1PIGSTY.el8.aarch64.rpm pigsty 0.24.3 68.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_15-0.24.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_search_15 pg_search_15-0.24.3-1PIGSTY.el9.x86_64.rpm pigsty 0.24.3 69.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_15-0.24.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_search_15 pg_search_15-0.24.3-1PIGSTY.el9.aarch64.rpm pigsty 0.24.3 68.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_15-0.24.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_search_15 pg_search_15-0.24.3-1PIGSTY.el10.x86_64.rpm pigsty 0.24.3 69.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_15-0.24.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_search_15 pg_search_15-0.24.3-1PIGSTY.el10.aarch64.rpm pigsty 0.24.3 68.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_15-0.24.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb pigsty 0.24.3 65.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb pigsty 0.24.3 62.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb pigsty 0.24.3 67.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb pigsty 0.24.3 65.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~noble_amd64.deb pigsty 0.24.3 67.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~noble_arm64.deb pigsty 0.24.3 65.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb pigsty 0.24.3 67.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb pigsty 0.24.3 65.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-15-pg-search_0.24.3-1PIGSTY~resolute_arm64.deb
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

来源：

- [pg_search v0.24.3 README](https://github.com/paradedb/paradedb/blob/v0.24.3/pg_search/README.md)
- [pg_search v0.24.3 release notes](https://github.com/paradedb/paradedb/releases/tag/v0.24.3)
- [ParadeDB 文档](https://docs.paradedb.com/)

pg_search 为 PostgreSQL 添加了 ParadeDB 的 BM25 访问方法和查询操作符，用于排名全文搜索、结构化搜索以及混合搜索。当搜索必须与 PostgreSQL 数据保持事务一致性，并支持 BM25 评分、高亮显示、过滤器、聚合和连接时，请使用此扩展。

### 安装扩展

    CREATE EXTENSION pg_search;

上游 v0.24.3 支持 PostgreSQL 15 及以上版本。请使用与具体 PostgreSQL 主版本匹配的构建包。由于该扩展参与了规划器和执行器路径，因此在生产升级前，请先测试查询计划和资源使用情况。

### 创建 BM25 索引

创建一个以稳定唯一键字段为基础的 BM25 索引：

    CREATE INDEX products_search_idx
    ON products
    USING bm25 (
      id,
      title,
      description,
      category,
      rating
    )
    WITH (key_field = 'id');

保持键字段的唯一性和非空性。仅索引用于搜索或过滤的字段；每个被索引的字段都会增加构建时间、磁盘使用和写入放大。

### 查询、排名与高亮

@@@ 操作符匹配字段或已索引行与 ParadeDB 查询：

    SELECT id,
           title,
           paradedb.score(id) AS score,
           paradedb.snippet(description) AS snippet
    FROM products
    WHERE description @@@ 'wireless keyboard'
      AND category = 'electronics'
    ORDER BY score DESC
    LIMIT 20;

当用户输入必须受到限制时，请使用字段限定的查询字符串或 ParadeDB 查询构造器。未经验证的情况下，切勿将不可信输入直接拼接到查询语法中。

对于布尔查询，paradedb.boolean() 可以组合 must、should 和 must_not 子句，并可以设置 minimum_should_match。该扩展还暴露了 index_created_at() 函数用于检查索引创建时间。

### 用户可接触的对象索引

- bm25: 用于文本和结构化字段的 BM25 索引访问方法。
- @@@: 在 WHERE 子句中使用的搜索匹配操作符。
- paradedb.score(key): 匹配行的 BM25 相关性评分。
- paradedb.snippet(field): 当前匹配的高亮摘录。
- paradedb.parse(...), paradedb.term(...), paradedb.boolean(...): 带类型查询构造器。
- paradedb.index_info(...): 索引元数据和字段配置信息。
- paradedb.index_created_at(...): 索引创建时间戳。

### 0.24.3 版本的操作变化

0.24.x 系列启用了更多聚合和连接扫描路径，并增加了 time 和 timetz 支持。版本 0.24.3 还限制了顺序扫描缓冲区，设置了索引构建工作内存上限，更早地检查可用磁盘空间，修复了 GROUP BY 分组基数路由问题，并在 Tantivy 会截断值时抛出错误。

这些防护措施减少了资源使用失控的风险，但并未消除容量规划的需求。请监控临时空间、索引大小、构建时间和查询内存。升级后重新运行代表性的 EXPLAIN ANALYZE 计划，因为计划器行为可能会发生变化。

### 兼容性与注意事项

- pg_search 使用其自己的 BM25 索引实现。不要假设由其他扩展创建的索引可以互换。
- 本地目录元数据报告了 bm25 访问方法与 pg_textsearch 和 vchord_bm25 的冲突；除非文档明确支持共存，否则请避免在同一数据库中加载竞争性实现。
- 搜索索引必须与表一起维护，并可能显著增加更新成本。
- 排名依赖于查询和语料库。请使用生产环境相似的文本和过滤器进行基准测试，而不是将示例分数视为可移植的。
