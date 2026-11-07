---
title: "vchord_bm25"
linkTitle: "vchord_bm25"
description: "BM25排序算法"
weight: 2160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://vchord.pgsty.com/docs/bm25/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://vchord.pgsty.com/docs/bm25/</div>
    <div class="ext-card__desc">https://vchord.pgsty.com/docs/bm25/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/vchord_bm25-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">vchord_bm25-1.0.0.tar.gz</div>
    <div class="ext-card__desc">vchord_bm25-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`vchord_bm25`**](/ext/e/vchord_bm25) | `1.0.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30only" href="/ext/license#agpl30only">AGPL-3.0-only</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2160  | [**`vchord_bm25`**](/ext/e/vchord_bm25) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pg_fts`](/ext/e/pg_fts) [`pgroonga`](/ext/e/pgroonga) [`pg_rrf`](/ext/e/pg_rrf) [`psql_bm25s`](/ext/e/psql_bm25s) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGSTY fork 1.0.0; native tsvector and new index format; preload required. In-place upgrade from 0.3.x is rejected.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `vchord_bm25` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `vchord_bm25_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-vchord-bm25` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 vchord_bm25_18 vchord_bm25_18-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_18-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vchord_bm25_18 vchord_bm25_18-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_18-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vchord_bm25_18 vchord_bm25_18-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_18-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vchord_bm25_18 vchord_bm25_18-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_18-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vchord_bm25_18 vchord_bm25_18-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_18-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vchord_bm25_18 vchord_bm25_18-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_18-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 vchord_bm25_17 vchord_bm25_17-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_17-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vchord_bm25_17 vchord_bm25_17-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_17-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vchord_bm25_17 vchord_bm25_17-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_17-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vchord_bm25_17 vchord_bm25_17-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_17-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vchord_bm25_17 vchord_bm25_17-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_17-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vchord_bm25_17 vchord_bm25_17-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_17-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 vchord_bm25_16 vchord_bm25_16-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_16-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vchord_bm25_16 vchord_bm25_16-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_16-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vchord_bm25_16 vchord_bm25_16-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_16-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vchord_bm25_16 vchord_bm25_16-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_16-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vchord_bm25_16 vchord_bm25_16-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_16-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vchord_bm25_16 vchord_bm25_16-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_16-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 vchord_bm25_15 vchord_bm25_15-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_15-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vchord_bm25_15 vchord_bm25_15-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_15-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vchord_bm25_15 vchord_bm25_15-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_15-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vchord_bm25_15 vchord_bm25_15-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_15-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vchord_bm25_15 vchord_bm25_15-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_15-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vchord_bm25_15 vchord_bm25_15-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_15-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 vchord_bm25_14 vchord_bm25_14-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_14-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vchord_bm25_14 vchord_bm25_14-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_14-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vchord_bm25_14 vchord_bm25_14-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_14-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vchord_bm25_14 vchord_bm25_14-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_14-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vchord_bm25_14 vchord_bm25_14-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_14-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vchord_bm25_14 vchord_bm25_14-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_14-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_1.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `vchord_bm25` 扩展的 RPM / DEB 包：

```bash
pig build pkg vchord_bm25         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `vchord_bm25` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install vchord_bm25;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y vchord_bm25 -v 18  # PG 18
pig ext install -y vchord_bm25 -v 17  # PG 17
pig ext install -y vchord_bm25 -v 16  # PG 16
pig ext install -y vchord_bm25 -v 15  # PG 15
pig ext install -y vchord_bm25 -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y vchord_bm25_18       # PG 18
dnf install -y vchord_bm25_17       # PG 17
dnf install -y vchord_bm25_16       # PG 16
dnf install -y vchord_bm25_15       # PG 15
dnf install -y vchord_bm25_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-vchord-bm25   # PG 18
apt install -y postgresql-17-vchord-bm25   # PG 17
apt install -y postgresql-16-vchord-bm25   # PG 16
apt install -y postgresql-15-vchord-bm25   # PG 15
apt install -y postgresql-14-vchord-bm25   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'vchord_bm25';
```


**创建扩展**：

```sql
CREATE EXTENSION vchord_bm25;
```

## 用法

来源：

- [安装说明](https://vchord.pgsty.com/docs/bm25/getting-started/installation/)
- [原生 tsvector 入门](https://vchord.pgsty.com/docs/bm25/getting-started/quick-start/)
- [1.0.0 迁移与权限](https://vchord.pgsty.com/docs/bm25/reference/migration/)
- [SQL 参考](https://vchord.pgsty.com/docs/bm25/reference/sql/)
- [GUC 与索引选项](https://vchord.pgsty.com/docs/bm25/reference/gucs/)
- [索引维护](https://vchord.pgsty.com/docs/bm25/usage/indexing/)
- [1.0.0 控制文件](https://github.com/pgsty/vchord_bm25/blob/1.0.0/vchord_bm25.control)

`vchord_bm25` 1.0.0 在 PostgreSQL 14–18 上为原生 `tsvector` 提供 BM25 相关性排序。它的 `bm25` 访问方法和 `bm25_ops` 运算符类使用新的索引格式。标准文本检索无需额外的分词扩展；需要自定义分析器或多语言模型时，可选用 `pg_tokenizer` 1.0.0。安装需要超级用户权限和共享预加载。

### 创建与查询索引

将库加入已有预加载列表，然后重启 PostgreSQL：

```ini
shared_preload_libraries = 'vchord_bm25'
```

```sql
CREATE EXTENSION vchord_bm25;
CREATE TABLE documents (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    passage text NOT NULL,
    terms tsvector GENERATED ALWAYS AS (to_tsvector('english', passage)) STORED
);
INSERT INTO documents (passage) VALUES
    ('PostgreSQL provides full text search.'),
    ('BM25 ranks PostgreSQL documents by relevance.'),
    ('A guide to database indexing.');
CREATE INDEX documents_bm25 ON documents USING bm25 (terms bm25_ops)
WITH (options = $$
k1 = 1.2
b = 0.75
$$, limit = 100);

SELECT id, passage,
       terms <&> to_bm25query(to_tsvector('english', 'PostgreSQL'), 'documents_bm25') AS rank
FROM documents
WHERE terms @@ plainto_tsquery('english', 'PostgreSQL')
ORDER BY rank LIMIT 10;
```

`to_bm25query(tsvector, regclass)` 的第一个参数是查询向量，第二个参数是目标索引。`<&>` 返回 `double precision` 类型的负 BM25 分数，按升序排列即可让相关性更高的结果在前。需要展示正分数时，可仅在显示结果时取反。仅排序还会包含零分的不匹配行和 NULL，因此示例增加了显式匹配谓词。

存储向量必须保留位置信息：`strip(tsvector)` 和 `array_to_tsvector` 无法提供索引所需的词频。文档权重会被忽略，原生位置限制也可能使长文档丢失部分词频信息。文档与查询应使用相同的分析器。自定义分词时，`analyze_to_tsvector` 使用字符串词元，`tokenize_to_tsvector` 使用模型 ID 作为词元；两者都是 `STABLE` 函数，应由应用或触发器维护普通列。

### 搜索控制与维护

| 设置或函数 | 1.0.0 中的含义 |
| --- | --- |
| `bm25.enable_scan` | 允许采用 BM25 索引计划，默认 true。 |
| `bm25.limit`、索引 `limit` | 初始扫描批次大小，默认为 100，零也表示 100；扫描会继续满足 SQL 行数限制、偏移量和过滤条件。 |
| `bm25.prefilter`、索引 `prefilter` | 在候选排名之前应用支持的谓词，默认 false。 |
| `k1`、`b` | TOML 评分参数，默认值为 1.2 和 0.75，取值范围为 1.2–2.0 和 0–1。 |
| `maintenance_min_rows`、`maintenance_scale_factor` | 自动合并阈值，默认值为 1000 和 0.1。 |
| `bm25_maintain(regclass)` | 忽略自动阈值请求合并，返回是否发布了新的数据段。 |

显式设置的 GUC 值优先于索引选项，即使设置的是 false 或与默认值相同的值也是如此。服务器、数据库、角色和连接启动参数同样优先；只有 GUC 来源为内置默认值时才采用索引默认值。

```sql
SET "bm25.limit" = 200;
SET bm25.prefilter = true;
VACUUM documents;
SELECT bm25_maintain('documents_bm25');
```

`VACUUM` 标记死亡记录，并可合并数据段；单独执行 `ANALYZE` 不会合并。手动维护需要表所有者身份，或 PostgreSQL 17+ 的 `MAINTAIN` 权限，且不能替代死亡元组检测。已删除记录会立即从查询结果中排除，但压实前仍计入语料统计。长时间持有的快照可能推迟页面复用和后续合并。备库读取到已回收页面时可能收到 SQLSTATE `40001`，需要重试。

### 权限与迁移

扩展可重定位，应用需要访问所选安装模式和被索引的数据。评分需要被索引表的 `SELECT` 权限；普通的非部分单列索引也接受列级权限，表达式索引和部分索引则要求表级权限。由于评分使用全局语料统计，当行级安全策略作用于当前角色时，标量评分和原生索引扫描都会拒绝查询。

索引只支持一个索引列，不支持不记日志的表。访问方法名称在数据库内唯一，因此不能与另一个定义了 `bm25` 的扩展共存。

0.3.x 的原地升级被明确禁止。应保留旧数据库及其库文件，导出原始文本，在使用独立库目录的新环境中安装 1.0.0。重新生成原生向量、重建索引，并修改查询参数顺序、类型、设置和触发器后，再切换应用。只增加数据库或端口、却共用旧库目录，不能实现所需隔离。复制二进制索引，或对旧 `bm25vector` 列执行 `REINDEX`，都无法迁移 API。
