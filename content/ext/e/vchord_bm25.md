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
  <a class="ext-card ext-card--source" href="VectorChord-bm25-0.3.0.tar.gz">
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
@ el8.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 519.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vchord_bm25_18-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 403.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vchord_bm25_18-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 536.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vchord_bm25_18-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 433.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vchord_bm25_18-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 536.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vchord_bm25_18-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 433.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vchord_bm25_18-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 425.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 318.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 425.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 318.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 478.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 376.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 474.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 371.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 520.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vchord_bm25_17-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 403.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vchord_bm25_17-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 536.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vchord_bm25_17-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 433.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vchord_bm25_17-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 536.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vchord_bm25_17-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 433.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vchord_bm25_17-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 425.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 317.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 424.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 317.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 478.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 376.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 474.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 371.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 519.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vchord_bm25_16-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 403.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vchord_bm25_16-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 536.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vchord_bm25_16-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 433.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vchord_bm25_16-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 536.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vchord_bm25_16-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 433.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vchord_bm25_16-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 425.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 318.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 425.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 317.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 478.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 376.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 474.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 371.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 522.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vchord_bm25_15-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 404.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vchord_bm25_15-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 538.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vchord_bm25_15-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 435.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vchord_bm25_15-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 538.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vchord_bm25_15-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 434.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vchord_bm25_15-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 427.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 319.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 426.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 319.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 480.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 378.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 476.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 373.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 522.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vchord_bm25_14-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 405.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vchord_bm25_14-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 538.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vchord_bm25_14-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 435.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vchord_bm25_14-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 538.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vchord_bm25_14-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 435.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vchord_bm25_14-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb pigsty 0.3.0 426.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb pigsty 0.3.0 319.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb pigsty 0.3.0 426.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb pigsty 0.3.0 319.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb pigsty 0.3.0 480.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb pigsty 0.3.0 378.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb pigsty 0.3.0 476.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb pigsty 0.3.0 373.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-2PIGSTY~noble_arm64.deb
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
