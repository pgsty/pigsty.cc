---
title: "pg_tokenizer"
linkTitle: "pg_tokenizer"
description: "用于全文检索的分词器"
weight: 2160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tensorchord/pg_tokenizer.rs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tensorchord/pg_tokenizer.rs</div>
    <div class="ext-card__desc">https://github.com/tensorchord/pg_tokenizer.rs</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tokenizer.rs-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tokenizer.rs-0.1.1.tar.gz</div>
    <div class="ext-card__desc">pg_tokenizer.rs-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tokenizer`**](/ext/e/pg_tokenizer) | `0.1.1` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2160  | [**`pg_tokenizer`**](/ext/e/pg_tokenizer) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `tokenizer_catalog` |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_trgm`](/ext/e/pg_trgm) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 fix by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tokenizer` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tokenizer_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tokenizer` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
@ el8.x86_64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 11.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_18-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 11.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_18-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_18-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_18-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_18-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_18-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 10.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 10.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 11.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_17-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 11.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_17-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_17-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_17-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_17-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_17-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 10.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 11.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_16-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 11.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_16-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_16-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_16-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_16-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_16-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 10.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 11.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_15-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 11.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_15-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_15-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_15-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_15-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_15-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 10.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 11.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_14-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 11.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_14-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_14-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_14-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_14-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 11.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_14-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 9.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 10.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 10.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tokenizer` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tokenizer         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tokenizer` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tokenizer;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tokenizer -v 18  # PG 18
pig ext install -y pg_tokenizer -v 17  # PG 17
pig ext install -y pg_tokenizer -v 16  # PG 16
pig ext install -y pg_tokenizer -v 15  # PG 15
pig ext install -y pg_tokenizer -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_tokenizer_18       # PG 18
dnf install -y pg_tokenizer_17       # PG 17
dnf install -y pg_tokenizer_16       # PG 16
dnf install -y pg_tokenizer_15       # PG 15
dnf install -y pg_tokenizer_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-tokenizer   # PG 18
apt install -y postgresql-17-pg-tokenizer   # PG 17
apt install -y postgresql-16-pg-tokenizer   # PG 16
apt install -y postgresql-15-pg-tokenizer   # PG 15
apt install -y postgresql-14-pg-tokenizer   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tokenizer';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tokenizer;
```



## 用法

> [GitHub: tensorchord/pg_tokenizer.rs](https://github.com/tensorchord/pg_tokenizer.rs)

`pg_tokenizer` 是一个为全文搜索提供分词器的 PostgreSQL 扩展。它设计与 [VectorChord-bm25](https://github.com/tensorchord/VectorChord-bm25) 配合使用，提供原生 BM25 排序索引支持。

## 快速开始

```sql
CREATE EXTENSION pg_tokenizer;

-- 使用 LLMLingua2 模型创建分词器
SELECT create_tokenizer('tokenizer1', $$
model = "llmlingua2"
$$);

-- 分词文本
SELECT tokenize('PostgreSQL is a powerful, open-source object-relational database system. It has over 15 years of active development.', 'tokenizer1');
```

## 分词器模型

pg_tokenizer 支持多种分词器模型，适用于不同语言和场景：

| 模型 | 语言 | 说明 |
|------|------|------|
| `llmlingua2` | 英语 | 基于 BERT 的 LLMLingua2 分词器 |
| `jieba` | 中文 | 结巴中文分词 |
| `lindera/ipadic` | 日语 | 带 IPADIC 词典的 Lindera 分词器 |
| 自定义模型 | 任意 | 用户训练的领域特定文本模型 |

### 创建分词器

```sql
-- 英文分词器
SELECT create_tokenizer('en_tokenizer', $$
model = "llmlingua2"
$$);

-- 中文分词器
SELECT create_tokenizer('zh_tokenizer', $$
model = "jieba"
$$);

-- 日文分词器
SELECT create_tokenizer('ja_tokenizer', $$
model = "lindera/ipadic"
$$);
```

### 文本分词

```sql
-- 分词英文文本
SELECT tokenize('full text search in PostgreSQL', 'en_tokenizer');

-- 分词中文文本
SELECT tokenize('PostgreSQL是一个强大的数据库系统', 'zh_tokenizer');
```

## 文本分析器

pg_tokenizer 还提供文本分析器功能，将分词与额外的文本处理步骤结合。详细的文本分析器用法请参见[文本分析器文档](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/05-text-analyzer.md)。

## 与 VectorChord-BM25 集成

pg_tokenizer 通常与 VectorChord-BM25 配合使用以获得完整的 BM25 排序支持：

```sql
CREATE EXTENSION IF NOT EXISTS pg_tokenizer CASCADE;
CREATE EXTENSION IF NOT EXISTS vchord_bm25 CASCADE;

-- 创建分词器
SELECT create_tokenizer('my_tokenizer', $$
model = "llmlingua2"
$$);

-- 将文本分词为 bm25vector 用于索引和搜索
SELECT tokenize('your search query', 'my_tokenizer');
```

## 文档

更多详情请参见完整文档：

- [安装](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/01-installation.md)
- [示例](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/03-examples.md)
- [用法](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/04-usage.md)
- [文本分析器](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/05-text-analyzer.md)
- [模型参考](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/06-model.md)
- [限制](https://github.com/tensorchord/pg_tokenizer.rs/blob/main/docs/07-limitation.md)
