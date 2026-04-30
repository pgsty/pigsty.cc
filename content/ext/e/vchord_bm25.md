---
title: "vchord_bm25"
linkTitle: "vchord_bm25"
description: "BM25排序算法"
weight: 2150
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tensorchord/VectorChord-bm25">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tensorchord/VectorChord-bm25</div>
    <div class="ext-card__desc">https://github.com/tensorchord/VectorChord-bm25</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/VectorChord-bm25-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">VectorChord-bm25-0.3.0.tar.gz</div>
    <div class="ext-card__desc">VectorChord-bm25-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`vchord_bm25`**](/ext/e/vchord_bm25) | `0.3.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2150  | [**`vchord_bm25`**](/ext/e/vchord_bm25) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `bm25_catalog` |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`pg_search`](/ext/e/pg_search) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vectorscale`](/ext/e/vectorscale) [`zhparser`](/ext/e/zhparser) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pgroonga`](/ext/e/pgroonga) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `vchord_bm25` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `vchord_bm25_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-vchord-bm25` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 519.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_18-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 403.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_18-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 536.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_18-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 433.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_18-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 536.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_18-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 433.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_18-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 425.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 318.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 425.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 318.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 478.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 376.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 474.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 371.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 520.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_17-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 403.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_17-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 536.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_17-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 433.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_17-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 536.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_17-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 433.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_17-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 425.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 317.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 424.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 317.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 478.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 376.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 474.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 371.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 519.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_16-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 403.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_16-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 536.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_16-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 433.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_16-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 536.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_16-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 433.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_16-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 425.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 318.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 425.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 317.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 478.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 376.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 474.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 371.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 522.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_15-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 404.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_15-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 538.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_15-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 435.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_15-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 538.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_15-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 434.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_15-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 427.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 319.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 426.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 319.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 480.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 378.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 476.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 373.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 522.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_14-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 405.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_14-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 538.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_14-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 435.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_14-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 538.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_14-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 435.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_14-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 426.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 319.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 426.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 319.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 480.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 378.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 476.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 373.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install vchord_bm25;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y vchord_bm25 -v 18  # PG 18
pig ext install -y vchord_bm25 -v 17  # PG 17
pig ext install -y vchord_bm25 -v 16  # PG 16
pig ext install -y vchord_bm25 -v 15  # PG 15
pig ext install -y vchord_bm25 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y vchord_bm25_18       # PG 18
dnf install -y vchord_bm25_17       # PG 17
dnf install -y vchord_bm25_16       # PG 16
dnf install -y vchord_bm25_15       # PG 15
dnf install -y vchord_bm25_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-vchord-bm25   # PG 18
apt install -y postgresql-17-vchord-bm25   # PG 17
apt install -y postgresql-16-vchord-bm25   # PG 16
apt install -y postgresql-15-vchord-bm25   # PG 15
apt install -y postgresql-14-vchord-bm25   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'vchord_bm25';
```


**创建扩展**：

```sql
CREATE EXTENSION vchord_bm25;
```



## 用法

> [GitHub: tensorchord/VectorChord-bm25](https://github.com/tensorchord/VectorChord-bm25)

VectorChord-BM25 是一个实现 BM25 排序算法的 PostgreSQL 扩展，基于 Block-WeakAnd 算法。它设计与 [pg_tokenizer](https://github.com/tensorchord/pg_tokenizer.rs) 配合使用，支持自定义文本分词。

## 架构

该扩展由三个主要组件组成：

1. **分词器**：将文本转换为 `bm25vector`（存储词汇 ID 和词频的稀疏向量）
2. **bm25vector**：用于存储分词后文本的自定义数据类型
3. **bm25vector 索引**：加速搜索和排序操作

## 快速开始

```sql
-- 启用所需扩展
CREATE EXTENSION IF NOT EXISTS pg_tokenizer CASCADE;
CREATE EXTENSION IF NOT EXISTS vchord_bm25 CASCADE;

-- 创建分词器（如用于英文的 LLMLingua2）
SELECT create_tokenizer('tokenizer1', $$
model = "llmlingua2"
$$);

-- 创建包含文本内容的表
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  passage TEXT,
  embedding bm25vector
);

-- 将文本段落分词为 bm25vector
UPDATE documents SET embedding = tokenize(passage, 'tokenizer1');

-- 创建 BM25 索引
CREATE INDEX documents_embedding_bm25 ON documents USING bm25 (embedding bm25_ops);

-- 使用 BM25 排序查询
SELECT id, passage, embedding <&> to_bm25query('documents_embedding_bm25', tokenize('search query', 'tokenizer1')) AS score
FROM documents
ORDER BY score
LIMIT 10;
```

**注意**：VectorChord-BM25 中的 BM25 分数为负数，越负表示相关性越高。

## `<&>` 运算符

`<&>` 运算符计算存储的 `bm25vector` 与查询 `bm25vector` 之间的 BM25 相关性分数。查询必须用 `to_bm25query()` 包装，它接受索引名称和分词后的查询：

```sql
-- 基本搜索查询
-- to_bm25query(索引名称, 分词后的查询)
SELECT id, passage, embedding <&> to_bm25query('documents_embedding_bm25', tokenize('database system', 'tokenizer1')) AS score
FROM documents
ORDER BY score
LIMIT 10;
```

## 语言支持

VectorChord-BM25 通过不同的分词器配置支持多种语言：

| 语言 | 方式 | 模型/预分词器 |
|------|------|---------------|
| 英语 | 预训练模型 | `model = "llmlingua2"` 或 `model = "bert_base_uncased"` |
| 中文 | 带结巴预分词器的自定义模型 | `[pre_tokenizer.jieba]` |
| 日语 | 带 Lindera 预分词器的自定义模型 | Lindera + IPADIC 词典 |
| 自定义 | 通过文本分析器训练的用户模型 | `create_custom_model_tokenizer_and_trigger()` |

### 中文文本搜索示例

中文文本需要带结巴预分词器的自定义模型（而非预训练模型）：

```sql
-- 创建带结巴预分词器的文本分析器
SELECT create_text_analyzer('zh_text_analyzer', $$
[pre_tokenizer.jieba]
$$);

-- 创建在语料上训练的自定义模型分词器
SELECT create_custom_model_tokenizer_and_trigger(
    tokenizer_name => 'zh_tokenizer',
    model_name => 'zh_model',
    text_analyzer_name => 'zh_text_analyzer',
    table_name => 'documents',
    source_column => 'passage',
    target_column => 'embedding'
);
```

### 自定义分词器模型

对于领域特定术语，你可以创建带停用词、词干提取和其他过滤器的文本分析器，然后使用 `create_custom_model_tokenizer_and_trigger()` 在语料上训练自定义模型。

## 与替代方案的比较

| 特性 | VectorChord-BM25 | PostgreSQL tsvector + ts_rank |
|------|-------------------|-------------------------------|
| 排序算法 | BM25 | tf-idf 变体 |
| 自定义分词器 | 支持（通过 pg_tokenizer） | 仅限内置配置 |
| 索引类型 | 专用 BM25 索引 | GIN 索引 |
| 原生 PostgreSQL | 是（扩展） | 内置 |
| 语言支持 | 通过模型可扩展 | 通过文本搜索配置 |
