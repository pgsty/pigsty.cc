---
title: "pg_search"
linkTitle: "pg_search"
description: "使用 BM25 的 PostgreSQL 全文、分面与混合检索扩展"
weight: 2100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/paradedb/paradedb/tree/main/pg_search">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">main/pg_search</div>
    <div class="ext-card__desc">https://github.com/paradedb/paradedb/tree/main/pg_search</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_search-0.25.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_search-0.25.2.tar.gz</div>
    <div class="ext-card__desc">pg_search-0.25.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_search`**](/ext/e/pg_search) | `0.25.2` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2100  | [**`pg_search`**](/ext/e/pg_search) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `paradedb` |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_fts`](/ext/e/pg_fts) [`pgroonga`](/ext/e/pgroonga) [`pg_rrf`](/ext/e/pg_rrf) [`psql_bm25s`](/ext/e/psql_bm25s) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) [`pgfaceting`](/ext/e/pgfaceting) [`roaringbitmap`](/ext/e/roaringbitmap) [`rum`](/ext/e/rum) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires shared_preload_libraries=pg_search and pgvector; bm25 access method conflicts with pg_textsearch and vchord_bm25; PIGSTY uses pgrx 0.19.1 for upstream pgrx 0.19.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.25.2` | {{< pgvers "15,16,17,18" >}} | `pg_search` | `vector` |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.25.2` | {{< pgvers "18,17,16,15" >}} | `pg_search_$v` | `pgvector_$v`, `openblas` |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.25.2` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-search` | `postgresql-$v-pgvector`, `libopenblas0` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | AVAIL PIGSTY 0.25.2 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_search_18 pg_search_18-0.25.2-1PIGSTY.el8.x86_64.rpm pigsty 0.25.2 66.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_18-0.25.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_search_18 pg_search_18-0.25.2-1PIGSTY.el8.aarch64.rpm pigsty 0.25.2 64.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_18-0.25.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_search_18 pg_search_18-0.25.2-1PIGSTY.el9.x86_64.rpm pigsty 0.25.2 65.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_18-0.25.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_search_18 pg_search_18-0.25.2-1PIGSTY.el9.aarch64.rpm pigsty 0.25.2 64.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_18-0.25.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_search_18 pg_search_18-0.25.2-1PIGSTY.el10.x86_64.rpm pigsty 0.25.2 65.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_18-0.25.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_search_18 pg_search_18-0.25.2-1PIGSTY.el10.aarch64.rpm pigsty 0.25.2 64.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_18-0.25.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb pigsty 0.25.2 62.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~trixie_amd64.deb pigsty 0.25.2 62.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~trixie_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~jammy_amd64.deb pigsty 0.25.2 64.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~jammy_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~noble_amd64.deb pigsty 0.25.2 64.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~noble_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~resolute_amd64.deb pigsty 0.25.2 64.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-search postgresql-18-pg-search_0.25.2-1PGSTY~resolute_arm64.deb pigsty 0.25.2 62.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-18-pg-search_0.25.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_search_17 pg_search_17-0.25.2-1PIGSTY.el8.x86_64.rpm pigsty 0.25.2 66.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_17-0.25.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_search_17 pg_search_17-0.25.2-1PIGSTY.el8.aarch64.rpm pigsty 0.25.2 64.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_17-0.25.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_search_17 pg_search_17-0.25.2-1PIGSTY.el9.x86_64.rpm pigsty 0.25.2 65.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_17-0.25.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_search_17 pg_search_17-0.25.2-1PIGSTY.el9.aarch64.rpm pigsty 0.25.2 64.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_17-0.25.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_search_17 pg_search_17-0.25.2-1PIGSTY.el10.x86_64.rpm pigsty 0.25.2 65.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_17-0.25.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_search_17 pg_search_17-0.25.2-1PIGSTY.el10.aarch64.rpm pigsty 0.25.2 64.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_17-0.25.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb pigsty 0.25.2 62.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~trixie_amd64.deb pigsty 0.25.2 62.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~trixie_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~jammy_amd64.deb pigsty 0.25.2 64.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~jammy_arm64.deb pigsty 0.25.2 63.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~noble_amd64.deb pigsty 0.25.2 64.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~noble_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~resolute_amd64.deb pigsty 0.25.2 64.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-search postgresql-17-pg-search_0.25.2-1PGSTY~resolute_arm64.deb pigsty 0.25.2 62.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-17-pg-search_0.25.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_search_16 pg_search_16-0.25.2-1PIGSTY.el8.x86_64.rpm pigsty 0.25.2 66.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_16-0.25.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_search_16 pg_search_16-0.25.2-1PIGSTY.el8.aarch64.rpm pigsty 0.25.2 64.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_16-0.25.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_search_16 pg_search_16-0.25.2-1PIGSTY.el9.x86_64.rpm pigsty 0.25.2 65.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_16-0.25.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_search_16 pg_search_16-0.25.2-1PIGSTY.el9.aarch64.rpm pigsty 0.25.2 64.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_16-0.25.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_search_16 pg_search_16-0.25.2-1PIGSTY.el10.x86_64.rpm pigsty 0.25.2 65.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_16-0.25.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_search_16 pg_search_16-0.25.2-1PIGSTY.el10.aarch64.rpm pigsty 0.25.2 64.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_16-0.25.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb pigsty 0.25.2 62.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~trixie_amd64.deb pigsty 0.25.2 62.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~trixie_arm64.deb pigsty 0.25.2 60.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~jammy_amd64.deb pigsty 0.25.2 64.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~jammy_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~noble_amd64.deb pigsty 0.25.2 64.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~noble_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~resolute_amd64.deb pigsty 0.25.2 64.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-search postgresql-16-pg-search_0.25.2-1PGSTY~resolute_arm64.deb pigsty 0.25.2 62.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-16-pg-search_0.25.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_search_15 pg_search_15-0.25.2-1PIGSTY.el8.x86_64.rpm pigsty 0.25.2 66.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_search_15-0.25.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_search_15 pg_search_15-0.25.2-1PIGSTY.el8.aarch64.rpm pigsty 0.25.2 64.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_search_15-0.25.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_search_15 pg_search_15-0.25.2-1PIGSTY.el9.x86_64.rpm pigsty 0.25.2 65.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_search_15-0.25.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_search_15 pg_search_15-0.25.2-1PIGSTY.el9.aarch64.rpm pigsty 0.25.2 64.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_search_15-0.25.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_search_15 pg_search_15-0.25.2-1PIGSTY.el10.x86_64.rpm pigsty 0.25.2 65.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_search_15-0.25.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_search_15 pg_search_15-0.25.2-1PIGSTY.el10.aarch64.rpm pigsty 0.25.2 64.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_search_15-0.25.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb pigsty 0.25.2 62.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~trixie_amd64.deb pigsty 0.25.2 62.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~trixie_arm64.deb pigsty 0.25.2 60.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~jammy_amd64.deb pigsty 0.25.2 64.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~jammy_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~noble_amd64.deb pigsty 0.25.2 64.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~noble_arm64.deb pigsty 0.25.2 62.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~resolute_amd64.deb pigsty 0.25.2 64.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-search postgresql-15-pg-search_0.25.2-1PGSTY~resolute_arm64.deb pigsty 0.25.2 62.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-search/postgresql-15-pg-search_0.25.2-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install pg_search;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_search -v 18  # PG 18
pig ext install -y pg_search -v 17  # PG 17
pig ext install -y pg_search -v 16  # PG 16
pig ext install -y pg_search -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_search_18       # PG 18
dnf install -y pg_search_17       # PG 17
dnf install -y pg_search_16       # PG 16
dnf install -y pg_search_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-search   # PG 18
apt install -y postgresql-17-pg-search   # PG 17
apt install -y postgresql-16-pg-search   # PG 16
apt install -y postgresql-15-pg-search   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_search';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_search CASCADE;  -- 依赖: vector
```

## 用法

来源：

- [pg_search v0.25.2 README](https://github.com/paradedb/paradedb/blob/v0.25.2/pg_search/README.md)
- [pg_search v0.25.2 发行说明](https://github.com/paradedb/paradedb/releases/tag/v0.25.2)
- [pg_search v0.25.2 变更日志](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/changelog/0.25.2.mdx)
- [pg_search v0.25.1 迁移说明](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/changelog/0.25.1.mdx)
- [创建 ParadeDB 索引](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/indexing/create-index.mdx)
- [全文匹配操作符](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/full-text/match.mdx)
- [BM25 评分](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/sorting/score.mdx)
- [高亮与摘要](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/full-text/highlight.mdx)
- [索引向量](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/indexing/indexing-vectors.mdx)
- [查询向量](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/vector/querying.mdx)
- [混合搜索概述](https://github.com/paradedb/paradedb/blob/v0.25.2/docs/documentation/hybrid/overview.mdx)

`pg_search` 0.25.2 为 PostgreSQL 增加 ParadeDB 的全文、结构化、向量和混合搜索索引。版本 0.25 使用 `paradedb` 索引访问方法；旧的 `bm25` 访问方法名称仍保留为兼容别名。该扩展依赖 `vector`，上游支持 PostgreSQL 15-18，且必须通过 `shared_preload_libraries` 加载。

### 安装并构建索引

```conf
shared_preload_libraries = 'pg_search'
```

重启 PostgreSQL，然后创建扩展以及一张拥有稳定唯一键的表：

```sql
CREATE EXTENSION pg_search CASCADE;

CREATE TABLE documents (
  id          bigint PRIMARY KEY,
  title       text,
  body        text,
  category    text,
  embedding   vector(768)
);

CREATE INDEX documents_search_idx ON documents
USING paradedb (
  id,
  title,
  body,
  category,
  embedding vector_cosine_ops
)
WITH (key_field = 'id');
```

`key_field` 必须是第一个索引列，并能唯一标识每一行。文本键必须以不分词的方式建立索引。一张表只能拥有一个 ParadeDB 索引，因此应将所有需要搜索的字段都纳入该索引。

### 全文搜索

使用 `|||` 匹配任意词元，使用 `&&&` 要求匹配所有词元：

```sql
SELECT id, title, pdb.score(id) AS score
FROM documents
WHERE body ||| 'postgresql search'
ORDER BY score DESC, id;

SELECT id, pdb.snippet(body) AS excerpt
FROM documents
WHERE body &&& 'postgresql indexing';
```

`pdb.score(key_field)` 提供当前行的相关性分数。`pdb.snippet(indexed_text_column)` 返回高亮摘要。这些辅助函数只有在 ParadeDB 搜索谓词驱动的查询中才有意义。

### 向量搜索

向量索引在 0.25 系列中处于 beta 阶段，使用 pgvector 的 `vector` 类型。创建索引时应选择操作符类；更改距离度量需要重建索引。

```sql
SELECT id, title, embedding <=> $1::vector AS distance
FROM documents
WHERE id @@@ pdb.all()
ORDER BY embedding <=> $1::vector, id
LIMIT 20;
```

支持的索引操作符类为 `vector_l2_ops`、`vector_ip_ops` 和 `vector_cosine_ops`。0.25 向量索引不为 `halfvec`、`sparsevec` 或 `bit` 列建立索引。

### 混合搜索

单个 ParadeDB 索引可以组合词法谓词、结构化过滤与向量排序。需要更复杂的融合时，应使用文档中的 RRF 和加权混合搜索函数，而不是直接将量纲不同的分数相加。

```sql
SELECT id, title, pdb.score(id) AS lexical_score
FROM documents
WHERE body ||| 'postgresql extension'
  AND category === 'database'
ORDER BY embedding <=> $1::vector, id
LIMIT 20;
```

### 版本 0.25.2 与注意事项

- 版本 0.25 将主要索引访问方法从 `bm25` 重命名为 `paradedb`。现有的 `USING bm25` 定义仍受支持，但新示例应使用 `USING paradedb`。
- 版本 0.25.1 支持确定性的向量并列结果排序，并将倒数排名融合查询的向量分支下推到索引中。它还新增 `paradedb.vector_clustering_threshold`，默认值为 500，并将向量索引构建并行度上限设为四个工作进程。
- 版本 0.25.1 移除了 `paradedb.vector_cluster_probe_epsilon`，并更改了向量索引的边界门控。从 0.25.0 升级数据库后，必须对所有包含向量字段的 ParadeDB 索引执行 `REINDEX`；对于这些索引，仅安装新的共享库并执行 `ALTER EXTENSION` 并不充分。
- 0.25.2 是稳定性与正确性版本：它修复带向量列的无字段 `more_like_this`、通用预备计划中的 `pdb.fuzzy`、遗留动态过滤器、多种并行子计划和 MPP 计划形态错误，并收紧 typemod 定义的访问控制。除了继承自 0.25.0 的向量索引重建要求外，没有新增索引迁移。
- `CREATE EXTENSION pg_search CASCADE` 可以安装所需的 `vector` 扩展，但仍须先为所有服务器进程配置预加载并重启。仅通过 `LOAD` 或 `session_preload_libraries` 加载并不充分。
- 使用不同字段选项重建索引后，查询计划、分词和排名都可能变化。在上线前，请使用符合生产形态的数据测试相关性与向量召回率。
