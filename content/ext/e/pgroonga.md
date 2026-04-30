---
title: "pgroonga"
linkTitle: "pgroonga"
description: "使用Groonga，面向所有语言的高速全文检索平台"
weight: 2110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgroonga/pgroonga">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgroonga/pgroonga</div>
    <div class="ext-card__desc">https://github.com/pgroonga/pgroonga</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgroonga-4.0.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgroonga-4.0.4.tar.gz</div>
    <div class="ext-card__desc">pgroonga-4.0.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgroonga`**](/ext/e/pgroonga) | `4.0.4` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2110  | [**`pgroonga`**](/ext/e/pgroonga) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2111  | [**`pgroonga_database`**](/ext/e/pgroonga_database) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pg_trgm`](/ext/e/pg_trgm) [`rum`](/ext/e/rum) [`vchord_bm25`](/ext/e/vchord_bm25) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require xxHash vendor repo to build


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga_$v` | `groonga-libs` |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgroonga` | `libgroonga0` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el8.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el9.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el9.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el10.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el10.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d12.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d12.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d13.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d13.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u22.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u22.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u24.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u24.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pgroonga_18 pgroonga_18-4.0.4-1.el8.x86_64.rpm pigsty 4.0.4 360.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_18-4.0.4-1.el8.x86_64.rpm
@ el8.aarch64 18 pgroonga_18 pgroonga_18-4.0.4-1.el8.aarch64.rpm pigsty 4.0.4 348.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_18-4.0.4-1.el8.aarch64.rpm
@ el9.x86_64 18 pgroonga_18 pgroonga_18-4.0.4-1.el9.x86_64.rpm pigsty 4.0.4 345.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_18-4.0.4-1.el9.x86_64.rpm
@ el9.aarch64 18 pgroonga_18 pgroonga_18-4.0.4-1.el9.aarch64.rpm pigsty 4.0.4 337.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_18-4.0.4-1.el9.aarch64.rpm
@ el10.x86_64 18 pgroonga_18 pgroonga_18-4.0.4-1.el10.x86_64.rpm pigsty 4.0.4 347.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_18-4.0.4-1.el10.x86_64.rpm
@ el10.aarch64 18 pgroonga_18 pgroonga_18-4.0.4-1.el10.aarch64.rpm pigsty 4.0.4 339.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_18-4.0.4-1.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb pigsty 4.0.4 621.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb pigsty 4.0.4 612.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb pigsty 4.0.4 621.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb pigsty 4.0.4 613.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb pigsty 4.0.4 678.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb pigsty 4.0.4 680.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb pigsty 4.0.4 651.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb pigsty 4.0.4 650.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgroonga_17 pgroonga_17-4.0.4-1.el8.x86_64.rpm pigsty 4.0.4 360.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_17-4.0.4-1.el8.x86_64.rpm
@ el8.aarch64 17 pgroonga_17 pgroonga_17-4.0.4-1.el8.aarch64.rpm pigsty 4.0.4 348.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_17-4.0.4-1.el8.aarch64.rpm
@ el9.x86_64 17 pgroonga_17 pgroonga_17-4.0.4-1.el9.x86_64.rpm pigsty 4.0.4 345.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_17-4.0.4-1.el9.x86_64.rpm
@ el9.aarch64 17 pgroonga_17 pgroonga_17-4.0.4-1.el9.aarch64.rpm pigsty 4.0.4 337.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_17-4.0.4-1.el9.aarch64.rpm
@ el10.x86_64 17 pgroonga_17 pgroonga_17-4.0.4-1.el10.x86_64.rpm pigsty 4.0.4 347.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_17-4.0.4-1.el10.x86_64.rpm
@ el10.aarch64 17 pgroonga_17 pgroonga_17-4.0.4-1.el10.aarch64.rpm pigsty 4.0.4 339.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_17-4.0.4-1.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb pigsty 4.0.4 621.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb pigsty 4.0.4 612.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb pigsty 4.0.4 621.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb pigsty 4.0.4 612.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb pigsty 4.0.4 757.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb pigsty 4.0.4 759.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb pigsty 4.0.4 650.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb pigsty 4.0.4 649.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgroonga_16 pgroonga_16-4.0.4-1.el8.x86_64.rpm pigsty 4.0.4 357.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_16-4.0.4-1.el8.x86_64.rpm
@ el8.aarch64 16 pgroonga_16 pgroonga_16-4.0.4-1.el8.aarch64.rpm pigsty 4.0.4 346.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_16-4.0.4-1.el8.aarch64.rpm
@ el9.x86_64 16 pgroonga_16 pgroonga_16-4.0.4-1.el9.x86_64.rpm pigsty 4.0.4 342.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_16-4.0.4-1.el9.x86_64.rpm
@ el9.aarch64 16 pgroonga_16 pgroonga_16-4.0.4-1.el9.aarch64.rpm pigsty 4.0.4 335.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_16-4.0.4-1.el9.aarch64.rpm
@ el10.x86_64 16 pgroonga_16 pgroonga_16-4.0.4-1.el10.x86_64.rpm pigsty 4.0.4 344.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_16-4.0.4-1.el10.x86_64.rpm
@ el10.aarch64 16 pgroonga_16 pgroonga_16-4.0.4-1.el10.aarch64.rpm pigsty 4.0.4 337.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_16-4.0.4-1.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb pigsty 4.0.4 615.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb pigsty 4.0.4 606.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb pigsty 4.0.4 615.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb pigsty 4.0.4 607.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb pigsty 4.0.4 744.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb pigsty 4.0.4 746.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb pigsty 4.0.4 643.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb pigsty 4.0.4 643.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgroonga_15 pgroonga_15-4.0.4-1.el8.x86_64.rpm pigsty 4.0.4 360.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_15-4.0.4-1.el8.x86_64.rpm
@ el8.aarch64 15 pgroonga_15 pgroonga_15-4.0.4-1.el8.aarch64.rpm pigsty 4.0.4 349.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_15-4.0.4-1.el8.aarch64.rpm
@ el9.x86_64 15 pgroonga_15 pgroonga_15-4.0.4-1.el9.x86_64.rpm pigsty 4.0.4 346.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_15-4.0.4-1.el9.x86_64.rpm
@ el9.aarch64 15 pgroonga_15 pgroonga_15-4.0.4-1.el9.aarch64.rpm pigsty 4.0.4 339.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_15-4.0.4-1.el9.aarch64.rpm
@ el10.x86_64 15 pgroonga_15 pgroonga_15-4.0.4-1.el10.x86_64.rpm pigsty 4.0.4 349.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_15-4.0.4-1.el10.x86_64.rpm
@ el10.aarch64 15 pgroonga_15 pgroonga_15-4.0.4-1.el10.aarch64.rpm pigsty 4.0.4 339.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_15-4.0.4-1.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb pigsty 4.0.4 617.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb pigsty 4.0.4 608.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb pigsty 4.0.4 618.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb pigsty 4.0.4 608.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb pigsty 4.0.4 751.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb pigsty 4.0.4 758.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb pigsty 4.0.4 650.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb pigsty 4.0.4 651.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgroonga_14 pgroonga_14-4.0.4-1.el8.x86_64.rpm pigsty 4.0.4 341.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_14-4.0.4-1.el8.x86_64.rpm
@ el8.aarch64 14 pgroonga_14 pgroonga_14-4.0.4-1.el8.aarch64.rpm pigsty 4.0.4 332.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_14-4.0.4-1.el8.aarch64.rpm
@ el9.x86_64 14 pgroonga_14 pgroonga_14-4.0.4-1.el9.x86_64.rpm pigsty 4.0.4 328.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_14-4.0.4-1.el9.x86_64.rpm
@ el9.aarch64 14 pgroonga_14 pgroonga_14-4.0.4-1.el9.aarch64.rpm pigsty 4.0.4 322.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_14-4.0.4-1.el9.aarch64.rpm
@ el10.x86_64 14 pgroonga_14 pgroonga_14-4.0.4-1.el10.x86_64.rpm pigsty 4.0.4 331.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_14-4.0.4-1.el10.x86_64.rpm
@ el10.aarch64 14 pgroonga_14 pgroonga_14-4.0.4-1.el10.aarch64.rpm pigsty 4.0.4 322.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_14-4.0.4-1.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb pigsty 4.0.4 565.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb pigsty 4.0.4 558.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb pigsty 4.0.4 566.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb pigsty 4.0.4 559.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb pigsty 4.0.4 690.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb pigsty 4.0.4 698.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb pigsty 4.0.4 596.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb pigsty 4.0.4 598.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgroonga` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgroonga         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgroonga` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgroonga;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgroonga -v 18  # PG 18
pig ext install -y pgroonga -v 17  # PG 17
pig ext install -y pgroonga -v 16  # PG 16
pig ext install -y pgroonga -v 15  # PG 15
pig ext install -y pgroonga -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgroonga_18       # PG 18
dnf install -y pgroonga_17       # PG 17
dnf install -y pgroonga_16       # PG 16
dnf install -y pgroonga_15       # PG 15
dnf install -y pgroonga_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgroonga   # PG 18
apt install -y postgresql-17-pgroonga   # PG 17
apt install -y postgresql-16-pgroonga   # PG 16
apt install -y postgresql-15-pgroonga   # PG 15
apt install -y postgresql-14-pgroonga   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgroonga;
```


## 用法

- https://pgroonga.github.io/
- [新闻](https://pgroonga.github.io/news/)：发布版本更新信息。
- [概述](https://pgroonga.github.io/overview/)：介绍 PGroonga 的基本信息。
- [安装](https://pgroonga.github.io/install/)：说明如何安装 PGroonga。
- [升级](https://pgroonga.github.io/upgrade/)：说明如何升级 PGroonga。
- [卸载](https://pgroonga.github.io/uninstall/)：说明如何卸载 PGroonga。
- [教程](https://pgroonga.github.io/tutorial/)：逐步演示 PGroonga 的使用方法。
- [常见问题](https://pgroonga.github.io/faq/)：常见问题解答。
- [使用技巧](https://pgroonga.github.io/how-to/)：针对特定场景的实用信息。
- [参考手册](https://pgroonga.github.io/reference/)：详细介绍各项功能，包括选项、函数和运算符。
- [故障排查](https://pgroonga.github.io/troubleshooting/)：说明如何排查和解决问题。
- [社区](https://pgroonga.github.io/community/)：介绍 PGroonga 社区。
- [用户](https://pgroonga.github.io/users/)：列出 PGroonga 的用户。
- [开发](https://pgroonga.github.io/development/)：说明如何参与 PGroonga 的开发。

以下是一个关于如何使用 PGroonga 的快速[教程](https://pgroonga.github.io/tutorial/)：

```sql
CREATE EXTENSION IF NOT EXISTS pgroonga;

CREATE TABLE memos
(
    id      integer,
    content text
);

CREATE INDEX pgroonga_content_index ON memos USING pgroonga (content);

INSERT INTO memos VALUES (1, 'PostgreSQL is a relational database management system.');
INSERT INTO memos VALUES (2, 'Groonga is a fast full text search engine that supports all languages.');
INSERT INTO memos VALUES (3, 'PGroonga is a PostgreSQL extension that uses Groonga as index.');
INSERT INTO memos VALUES (4, 'There is groonga command.');

SET enable_seqscan = off;

-- 现在让我们使用 pgroonga 进行查询

SELECT * FROM memos WHERE content &@ 'engine';
--  id |                                content
-- ----+------------------------------------------------------------------------
--   2 | Groonga is a fast full text search engine that supports all languages.
-- (1 row)

SELECT * FROM memos WHERE content &@~ 'PGroonga OR PostgreSQL';
--  id |                            content
-- ----+----------------------------------------------------------------
--   3 | PGroonga is a PostgreSQL extension that uses Groonga as index.
--   1 | PostgreSQL is a relational database management system.
-- (2 rows)

SELECT * FROM memos WHERE content LIKE '%engine%';
--  id |                                content
-- ----+------------------------------------------------------------------------
--   2 | Groonga is a fast full text search engine that supports all languages.
-- (1 row)
```
