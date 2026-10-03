---
title: "vchord_bm25"
linkTitle: "vchord_bm25"
description: "BM25排序算法"
weight: 2150
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supervc-stack/VectorChord-bm25">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supervc-stack/VectorChord-bm25</div>
    <div class="ext-card__desc">https://github.com/supervc-stack/VectorChord-bm25</div>
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

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pg_fts`](/ext/e/pg_fts) [`pgroonga`](/ext/e/pgroonga) [`pg_rrf`](/ext/e/pg_rrf) [`psql_bm25s`](/ext/e/psql_bm25s) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> bm25 am conflicts with pg_textsearch and pg_search, build require clang upgrade.


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
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
@ el8.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-3PIGSTY.el8.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_18-0.3.0-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-3PIGSTY.el8.aarch64.rpm pigsty 0.3.0 1014.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_18-0.3.0-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-3PIGSTY.el9.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_18-0.3.0-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-3PIGSTY.el9.aarch64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_18-0.3.0-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-3PIGSTY.el10.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_18-0.3.0-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vchord_bm25_18 vchord_bm25_18-0.3.0-3PIGSTY.el10.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_18-0.3.0-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb pigsty 0.3.0 881.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb pigsty 0.3.0 774.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb pigsty 0.3.0 881.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb pigsty 0.3.0 774.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb pigsty 0.3.0 984.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb pigsty 0.3.0 920.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb pigsty 0.3.0 974.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb pigsty 0.3.0 907.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb pigsty 0.3.0 970.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vchord-bm25 postgresql-18-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb pigsty 0.3.0 905.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-18-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-3PIGSTY.el8.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_17-0.3.0-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-3PIGSTY.el8.aarch64.rpm pigsty 0.3.0 1012.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_17-0.3.0-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-3PIGSTY.el9.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_17-0.3.0-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-3PIGSTY.el9.aarch64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_17-0.3.0-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-3PIGSTY.el10.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_17-0.3.0-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vchord_bm25_17 vchord_bm25_17-0.3.0-3PIGSTY.el10.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_17-0.3.0-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb pigsty 0.3.0 878.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb pigsty 0.3.0 772.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb pigsty 0.3.0 879.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb pigsty 0.3.0 772.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb pigsty 0.3.0 981.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb pigsty 0.3.0 917.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb pigsty 0.3.0 974.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb pigsty 0.3.0 906.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb pigsty 0.3.0 967.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-vchord-bm25 postgresql-17-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb pigsty 0.3.0 904.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-17-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-3PIGSTY.el8.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_16-0.3.0-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-3PIGSTY.el8.aarch64.rpm pigsty 0.3.0 1009.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_16-0.3.0-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-3PIGSTY.el9.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_16-0.3.0-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-3PIGSTY.el9.aarch64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_16-0.3.0-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-3PIGSTY.el10.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_16-0.3.0-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vchord_bm25_16 vchord_bm25_16-0.3.0-3PIGSTY.el10.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_16-0.3.0-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb pigsty 0.3.0 879.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb pigsty 0.3.0 772.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb pigsty 0.3.0 880.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb pigsty 0.3.0 772.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb pigsty 0.3.0 984.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb pigsty 0.3.0 916.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb pigsty 0.3.0 972.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb pigsty 0.3.0 905.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb pigsty 0.3.0 968.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-vchord-bm25 postgresql-16-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb pigsty 0.3.0 903.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-16-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-3PIGSTY.el8.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_15-0.3.0-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-3PIGSTY.el8.aarch64.rpm pigsty 0.3.0 1003.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_15-0.3.0-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-3PIGSTY.el9.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_15-0.3.0-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-3PIGSTY.el9.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_15-0.3.0-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-3PIGSTY.el10.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_15-0.3.0-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vchord_bm25_15 vchord_bm25_15-0.3.0-3PIGSTY.el10.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_15-0.3.0-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb pigsty 0.3.0 877.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb pigsty 0.3.0 770.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb pigsty 0.3.0 878.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb pigsty 0.3.0 770.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb pigsty 0.3.0 976.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb pigsty 0.3.0 914.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb pigsty 0.3.0 970.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb pigsty 0.3.0 902.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb pigsty 0.3.0 965.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-vchord-bm25 postgresql-15-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb pigsty 0.3.0 900.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-15-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-3PIGSTY.el8.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_bm25_14-0.3.0-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-3PIGSTY.el8.aarch64.rpm pigsty 0.3.0 1001.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_bm25_14-0.3.0-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-3PIGSTY.el9.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_bm25_14-0.3.0-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-3PIGSTY.el9.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_bm25_14-0.3.0-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-3PIGSTY.el10.x86_64.rpm pigsty 0.3.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_bm25_14-0.3.0-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vchord_bm25_14 vchord_bm25_14-0.3.0-3PIGSTY.el10.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_bm25_14-0.3.0-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb pigsty 0.3.0 873.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb pigsty 0.3.0 768.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb pigsty 0.3.0 873.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb pigsty 0.3.0 769.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb pigsty 0.3.0 976.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb pigsty 0.3.0 912.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb pigsty 0.3.0 966.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb pigsty 0.3.0 901.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb pigsty 0.3.0 962.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-vchord-bm25 postgresql-14-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb pigsty 0.3.0 898.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord-bm25/postgresql-14-vchord-bm25_0.3.0-4PIGSTY~resolute_arm64.deb
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

- [0.3.0 README](https://github.com/supervc-stack/VectorChord-bm25/blob/0.3.0/README.md)
- [Control file](https://github.com/supervc-stack/VectorChord-bm25/blob/0.3.0/vchord_bm25.control)
- [0.3.0 SQL objects](https://github.com/supervc-stack/VectorChord-bm25/blob/0.3.0/sql/install/vchord_bm25--0.3.0.sql)
- [Query settings](https://github.com/supervc-stack/VectorChord-bm25/blob/0.3.0/src/guc.rs)
- [0.3.0 migration](https://github.com/supervc-stack/VectorChord-bm25/blob/0.3.0/sql/vchord_bm25--0.2.2--0.3.0.sql)
- [0.3.0 release](https://github.com/supervc-stack/VectorChord-bm25/releases/tag/0.3.0)
- [Tokenizer installation](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/01-installation.md)
- [Tokenizer models](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/06-model.md)

`vchord_bm25` 使用稀疏词元频率类型和 `bm25` 索引访问方法提供 BM25 排序。分词由独立组件提供，通常使用 pg_tokenizer。扩展对象安装在固定的 `bm25_catalog` 模式中，创建时需要超级用户权限。

### 核心流程

示例使用 pg_tokenizer，它要求预加载并重启。修改预加载列表时保留已有条目：

```conf
shared_preload_libraries = 'pg_tokenizer'
```

```sql
CREATE EXTENSION pg_tokenizer;
CREATE EXTENSION vchord_bm25;
SET search_path = public, tokenizer_catalog, bm25_catalog;

SELECT create_tokenizer('english', $$
model = "bert_base_uncased"
$$);
CREATE TABLE documents (
    id bigserial PRIMARY KEY,
    passage text,
    embedding bm25vector
);
INSERT INTO documents(passage) VALUES ('PostgreSQL full text search');
UPDATE documents SET embedding = tokenize(passage, 'english')::bm25vector;
CREATE INDEX documents_bm25 ON documents USING bm25 (embedding bm25_ops);

SELECT id, passage,
       embedding <&> to_bm25query('documents_bm25',
           tokenize('PostgreSQL', 'english')::bm25vector) AS score
FROM documents
ORDER BY score
LIMIT 10;
```

索引为 `to_bm25query` 提供语料统计。`<&>` 返回负分数，因此升序排列将相关性更高的结果放在前面。文档与查询应使用相同的分词器和模型。源文本变化时需要更新存储的词元向量，也可使用分词器提供的维护触发器辅助函数。词汇表变化后，应先重新分词存量文档，再重建索引。

### 类型、函数与搜索限制

- `bm25vector` 保存词元 ID 和频率，整数数组转换会合并重复 ID，并丢弃词元顺序。
- `bm25query` 将查询向量绑定到索引，由 `to_bm25query(regclass, bm25vector)` 构造；`bm25_ops` 是索引运算符类。
- `bm25_catalog.bm25_limit` 默认为 100，限制索引返回的候选数量。较大的 SQL 限制或严格过滤需要增加此参数，仅改变 SQL LIMIT 不会增加候选预算。
- `bm25_catalog.enable_index` 控制是否使用索引，`bm25_catalog.enable_prefilter` 控制预过滤，两者默认均为 true。
- `bm25_catalog.segment_growing_max_page_size` 默认为 4096 页，超过后将增长段封存。

```sql
SET bm25_catalog.bm25_limit = 1000;
```

访问方法名称在数据库中是全局的，不能与其他创建同名 bm25 访问方法的扩展共存，包括 pg_textsearch 和 pg_search 的兼容别名。稀疏频率不保留短语匹配所需的位置。中文可使用带 Jieba 预分词器的自定义语料模型，日文 Lindera 支持取决于分词器的构建选项和词典配置。

### 升级到 0.3.0

```sql
ALTER EXTENSION vchord_bm25 UPDATE TO '0.3.0';
```

0.2.2 到 0.3.0 的迁移新增 `bm25_page_inspect(regclass, integer)`，返回页面诊断文本。本次发布改变小词元在封存段中的页面分配，未声明强制重建索引要求。更新数据库对象前应安装匹配的扩展文件；替换预加载的分词器库还需要重启。应保持分词与排序组件的升级兼容，并检查代表性查询结果。
