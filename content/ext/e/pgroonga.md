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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgroonga-4.0.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgroonga-4.0.9.tar.gz</div>
    <div class="ext-card__desc">pgroonga-4.0.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgroonga`**](/ext/e/pgroonga) | `4.0.9` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2110  | [**`pgroonga`**](/ext/e/pgroonga) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 2111  | [**`pgroonga_database`**](/ext/e/pgroonga_database) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_fts`](/ext/e/pg_fts) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pg_cjk_parser`](/ext/e/pg_cjk_parser) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pg_jieba`](/ext/e/pg_jieba) [`dict_xsyn`](/ext/e/dict_xsyn) [`unaccent`](/ext/e/unaccent) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require xxHash vendor repo to build


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.9` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.9` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga_$v` | `groonga-libs` |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgroonga` | `libgroonga0` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el8.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el9.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el9.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el10.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el10.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d12.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d12.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d13.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d13.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u22.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u22.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u24.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u24.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u26.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u26.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
@ el8.x86_64 18 pgroonga_18 pgroonga_18-4.0.9-1PGSTY.el8.x86_64.rpm pigsty 4.0.9 242.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_18-4.0.9-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgroonga_18 pgroonga_18-4.0.9-1PGSTY.el8.aarch64.rpm pigsty 4.0.9 228.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_18-4.0.9-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgroonga_18 pgroonga_18-4.0.9-1PGSTY.el9.x86_64.rpm pigsty 4.0.9 246.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_18-4.0.9-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgroonga_18 pgroonga_18-4.0.9-1PGSTY.el9.aarch64.rpm pigsty 4.0.9 238.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_18-4.0.9-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgroonga_18 pgroonga_18-4.0.9-1PGSTY.el10.x86_64.rpm pigsty 4.0.9 248.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_18-4.0.9-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgroonga_18 pgroonga_18-4.0.9-1PGSTY.el10.aarch64.rpm pigsty 4.0.9 239.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_18-4.0.9-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb pigsty 4.0.9 181.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb pigsty 4.0.9 163.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb pigsty 4.0.9 182.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb pigsty 4.0.9 163.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb pigsty 4.0.9 196.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb pigsty 4.0.9 190.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~noble_amd64.deb pigsty 4.0.9 191.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~noble_arm64.deb pigsty 4.0.9 185.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb pigsty 4.0.9 193.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgroonga postgresql-18-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb pigsty 4.0.9 184.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-18-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgroonga_17 pgroonga_17-4.0.9-1PGSTY.el8.x86_64.rpm pigsty 4.0.9 242.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_17-4.0.9-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgroonga_17 pgroonga_17-4.0.9-1PGSTY.el8.aarch64.rpm pigsty 4.0.9 228.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_17-4.0.9-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgroonga_17 pgroonga_17-4.0.9-1PGSTY.el9.x86_64.rpm pigsty 4.0.9 246.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_17-4.0.9-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgroonga_17 pgroonga_17-4.0.9-1PGSTY.el9.aarch64.rpm pigsty 4.0.9 238.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_17-4.0.9-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgroonga_17 pgroonga_17-4.0.9-1PGSTY.el10.x86_64.rpm pigsty 4.0.9 248.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_17-4.0.9-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgroonga_17 pgroonga_17-4.0.9-1PGSTY.el10.aarch64.rpm pigsty 4.0.9 239.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_17-4.0.9-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb pigsty 4.0.9 181.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb pigsty 4.0.9 163.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb pigsty 4.0.9 181.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb pigsty 4.0.9 163.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb pigsty 4.0.9 197.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb pigsty 4.0.9 190.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~noble_amd64.deb pigsty 4.0.9 191.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~noble_arm64.deb pigsty 4.0.9 185.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb pigsty 4.0.9 193.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgroonga postgresql-17-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb pigsty 4.0.9 184.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-17-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgroonga_16 pgroonga_16-4.0.9-1PGSTY.el8.x86_64.rpm pigsty 4.0.9 239.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_16-4.0.9-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgroonga_16 pgroonga_16-4.0.9-1PGSTY.el8.aarch64.rpm pigsty 4.0.9 226.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_16-4.0.9-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgroonga_16 pgroonga_16-4.0.9-1PGSTY.el9.x86_64.rpm pigsty 4.0.9 243.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_16-4.0.9-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgroonga_16 pgroonga_16-4.0.9-1PGSTY.el9.aarch64.rpm pigsty 4.0.9 236.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_16-4.0.9-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgroonga_16 pgroonga_16-4.0.9-1PGSTY.el10.x86_64.rpm pigsty 4.0.9 246.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_16-4.0.9-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgroonga_16 pgroonga_16-4.0.9-1PGSTY.el10.aarch64.rpm pigsty 4.0.9 237.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_16-4.0.9-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb pigsty 4.0.9 178.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb pigsty 4.0.9 161.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb pigsty 4.0.9 180.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb pigsty 4.0.9 161.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb pigsty 4.0.9 194.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb pigsty 4.0.9 187.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~noble_amd64.deb pigsty 4.0.9 189.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~noble_arm64.deb pigsty 4.0.9 182.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb pigsty 4.0.9 191.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgroonga postgresql-16-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb pigsty 4.0.9 182.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-16-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgroonga_15 pgroonga_15-4.0.9-1PGSTY.el8.x86_64.rpm pigsty 4.0.9 239.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_15-4.0.9-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgroonga_15 pgroonga_15-4.0.9-1PGSTY.el8.aarch64.rpm pigsty 4.0.9 226.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_15-4.0.9-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgroonga_15 pgroonga_15-4.0.9-1PGSTY.el9.x86_64.rpm pigsty 4.0.9 242.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_15-4.0.9-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgroonga_15 pgroonga_15-4.0.9-1PGSTY.el9.aarch64.rpm pigsty 4.0.9 235.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_15-4.0.9-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgroonga_15 pgroonga_15-4.0.9-1PGSTY.el10.x86_64.rpm pigsty 4.0.9 246.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_15-4.0.9-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgroonga_15 pgroonga_15-4.0.9-1PGSTY.el10.aarch64.rpm pigsty 4.0.9 236.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_15-4.0.9-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb pigsty 4.0.9 178.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb pigsty 4.0.9 161.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb pigsty 4.0.9 180.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb pigsty 4.0.9 161.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb pigsty 4.0.9 193.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb pigsty 4.0.9 187.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~noble_amd64.deb pigsty 4.0.9 188.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~noble_arm64.deb pigsty 4.0.9 182.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb pigsty 4.0.9 191.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgroonga postgresql-15-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb pigsty 4.0.9 181.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-15-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgroonga_14 pgroonga_14-4.0.9-1PGSTY.el8.x86_64.rpm pigsty 4.0.9 221.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgroonga_14-4.0.9-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgroonga_14 pgroonga_14-4.0.9-1PGSTY.el8.aarch64.rpm pigsty 4.0.9 210.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgroonga_14-4.0.9-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgroonga_14 pgroonga_14-4.0.9-1PGSTY.el9.x86_64.rpm pigsty 4.0.9 225.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgroonga_14-4.0.9-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgroonga_14 pgroonga_14-4.0.9-1PGSTY.el9.aarch64.rpm pigsty 4.0.9 219.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgroonga_14-4.0.9-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgroonga_14 pgroonga_14-4.0.9-1PGSTY.el10.x86_64.rpm pigsty 4.0.9 228.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgroonga_14-4.0.9-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgroonga_14 pgroonga_14-4.0.9-1PGSTY.el10.aarch64.rpm pigsty 4.0.9 220.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgroonga_14-4.0.9-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb pigsty 4.0.9 163.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb pigsty 4.0.9 147.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb pigsty 4.0.9 164.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb pigsty 4.0.9 148.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb pigsty 4.0.9 177.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb pigsty 4.0.9 171.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~noble_amd64.deb pigsty 4.0.9 172.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~noble_arm64.deb pigsty 4.0.9 167.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb pigsty 4.0.9 174.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgroonga postgresql-14-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb pigsty 4.0.9 166.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgroonga/postgresql-14-pgroonga_4.0.9-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgroonga;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgroonga -v 18  # PG 18
pig ext install -y pgroonga -v 17  # PG 17
pig ext install -y pgroonga -v 16  # PG 16
pig ext install -y pgroonga -v 15  # PG 15
pig ext install -y pgroonga -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgroonga_18       # PG 18
dnf install -y pgroonga_17       # PG 17
dnf install -y pgroonga_16       # PG 16
dnf install -y pgroonga_15       # PG 15
dnf install -y pgroonga_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgroonga   # PG 18
apt install -y postgresql-17-pgroonga   # PG 17
apt install -y postgresql-16-pgroonga   # PG 16
apt install -y postgresql-15-pgroonga   # PG 15
apt install -y postgresql-14-pgroonga   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgroonga;
```

## 用法

来源：

- [Version 4.0.9 SQL](https://github.com/pgroonga/pgroonga/blob/4.0.9/data/pgroonga.sql)
- [Version 4.0.9 control](https://github.com/pgroonga/pgroonga/blob/4.0.9/pgroonga.control)
- [Official tutorial](https://pgroonga.github.io/tutorial/)
- [Version 4.0.9 release](https://github.com/pgroonga/pgroonga/releases/tag/4.0.9)
- [Upgrade guidance](https://pgroonga.github.io/upgrade/)

`pgroonga` 4.0.9 使用 Groonga 索引实现多语言全文检索，安装 `pgroonga` 访问方法及 SQL 操作符，普通使用不需要共享预加载。

### 核心流程

安装兼容的 PGroonga 与 Groonga 库后，由管理员创建扩展：

```sql
CREATE EXTENSION pgroonga;
CREATE TABLE search_notes (id bigint PRIMARY KEY, body text);
CREATE INDEX search_notes_body_idx ON search_notes USING pgroonga (body);
INSERT INTO search_notes VALUES (1, 'PostgreSQL supports full text search');
SELECT id, body FROM search_notes WHERE body &@ 'PostgreSQL';
SELECT id, body, pgroonga_score(tableoid, ctid) AS score
FROM search_notes WHERE body &@~ 'PostgreSQL OR Groonga'
ORDER BY score DESC;
```

### 主要对象

- `&@` 匹配关键词；`&@~` 接受 Groonga 查询语法。受支持的 LIKE/ILIKE 查询也可使用索引，并在需要时复查结果。
- `pgroonga_score(tableoid, ctid)` 取得搜索得分；按得分排序时，应确认实际执行了预期索引计划。
- `pgroonga_highlight_html()` 与 `pgroonga_query_extract_keywords()` 生成高亮结果；`pgroonga_snippet_html()` 提供关键词附近的文本。
- 4.0.9 新增 `pgroonga_physical_table_names(partitioned_index, prefix)`，以文本数组返回 Groonga 命令参数，标识各分区索引背后的物理表。该版本也开始为 PGroonga 扫描累加 `pg_stat_user_indexes.idx_scan`。

### 维护与权限

4.0.9 控制文件未声明受信任安装或可迁移模式，不应假定普通用户能安装扩展或将其移到其他模式。索引创建和查询仍需相应的表权限。应使扩展及 Groonga 库与目标 PostgreSQL 构建匹配，并在替换二进制前遵循上游升级说明。

PGroonga 除表数据外还管理派生索引文件，应据此规划磁盘容量和备份恢复流程。适用时使用 REINDEX 修复索引。独立的 `pgroonga_database` 模块用于恢复损坏的内部 Groonga 数据库，正常搜索并不需要它。在生产环境中，不要为了强制使用索引而全局关闭顺序扫描。

### Pigsty 运行库兼容性

当前 Pigsty EL8 和 EL9 软件包与 PostGIS Raster 存在已确认的共存限制，影响 x86_64、aarch64 两种架构及 PostgreSQL 14–18。Groonga 使用 Arrow 22，本轮 GDAL/Raster 依赖栈则在 EL8 使用 Arrow 8、在 EL9 使用 Arrow 9。将两套依赖加载到同一个 PostgreSQL 后端可能导致崩溃；SQL 查询成功并不能证明后端正常退出。

改变加载顺序不是完整修复：EL9 aarch64 的自动会话预加载仍出现后端退出崩溃。在验证兼容依赖组合前，应避免在同一个后端启用两套依赖，必要时隔离使用。本轮测试的 EL10 和 Debian/Ubuntu 组合未复现该故障，但不能据此推广到任意其他依赖版本。这是 Pigsty 软件包依赖栈的边界，不是上游要求普通 PGroonga 搜索必须预加载。

MeCab 分词还需要匹配的 Groonga 分词插件和词典。仅安装 PostgreSQL 扩展并不会提供全部可选分词器；在建立指定分词器的索引前，应确认它可用。
