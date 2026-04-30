---
title: "pg_bestmatch"
linkTitle: "pg_bestmatch"
description: "在数据库内生成BM25稀疏向量"
weight: 2140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tensorchord/pg_bestmatch.rs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tensorchord/pg_bestmatch.rs</div>
    <div class="ext-card__desc">https://github.com/tensorchord/pg_bestmatch.rs</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_bestmatch-0.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_bestmatch-0.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_bestmatch-0.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_bestmatch`**](/ext/e/pg_bestmatch) | `0.0.2` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2140  | [**`pg_bestmatch`**](/ext/e/pg_bestmatch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `bm_catalog` |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`pg_search`](/ext/e/pg_search) [`vchord_bm25`](/ext/e/vchord_bm25) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`zhparser`](/ext/e/zhparser) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`vectorize`](/ext/e/vectorize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_bestmatch` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_bestmatch_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-bestmatch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_bestmatch_18 pg_bestmatch_18-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bestmatch_18-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_bestmatch_18 pg_bestmatch_18-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bestmatch_18-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_bestmatch_18 pg_bestmatch_18-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bestmatch_18-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_bestmatch_18 pg_bestmatch_18-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bestmatch_18-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_bestmatch_18 pg_bestmatch_18-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bestmatch_18-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_bestmatch_18 pg_bestmatch_18-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bestmatch_18-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-bestmatch postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-18-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_bestmatch_17 pg_bestmatch_17-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bestmatch_17-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_bestmatch_17 pg_bestmatch_17-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bestmatch_17-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_bestmatch_17 pg_bestmatch_17-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bestmatch_17-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_bestmatch_17 pg_bestmatch_17-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bestmatch_17-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_bestmatch_17 pg_bestmatch_17-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bestmatch_17-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_bestmatch_17 pg_bestmatch_17-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bestmatch_17-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 5.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 6.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-bestmatch postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-17-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_bestmatch_16 pg_bestmatch_16-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bestmatch_16-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_bestmatch_16 pg_bestmatch_16-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bestmatch_16-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_bestmatch_16 pg_bestmatch_16-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bestmatch_16-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_bestmatch_16 pg_bestmatch_16-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bestmatch_16-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_bestmatch_16 pg_bestmatch_16-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bestmatch_16-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_bestmatch_16 pg_bestmatch_16-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bestmatch_16-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 5.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 6.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-bestmatch postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-16-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_bestmatch_15 pg_bestmatch_15-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bestmatch_15-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_bestmatch_15 pg_bestmatch_15-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bestmatch_15-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_bestmatch_15 pg_bestmatch_15-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bestmatch_15-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_bestmatch_15 pg_bestmatch_15-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bestmatch_15-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_bestmatch_15 pg_bestmatch_15-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bestmatch_15-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_bestmatch_15 pg_bestmatch_15-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bestmatch_15-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 5.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-bestmatch postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-15-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_bestmatch_14 pg_bestmatch_14-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bestmatch_14-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_bestmatch_14 pg_bestmatch_14-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bestmatch_14-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_bestmatch_14 pg_bestmatch_14-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bestmatch_14-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_bestmatch_14 pg_bestmatch_14-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bestmatch_14-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_bestmatch_14 pg_bestmatch_14-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bestmatch_14-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_bestmatch_14 pg_bestmatch_14-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bestmatch_14-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 5.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 6.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 6.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-bestmatch postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bestmatch/postgresql-14-pg-bestmatch_0.0.2-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_bestmatch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_bestmatch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_bestmatch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_bestmatch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_bestmatch -v 18  # PG 18
pig ext install -y pg_bestmatch -v 17  # PG 17
pig ext install -y pg_bestmatch -v 16  # PG 16
pig ext install -y pg_bestmatch -v 15  # PG 15
pig ext install -y pg_bestmatch -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_bestmatch_18       # PG 18
dnf install -y pg_bestmatch_17       # PG 17
dnf install -y pg_bestmatch_16       # PG 16
dnf install -y pg_bestmatch_15       # PG 15
dnf install -y pg_bestmatch_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-bestmatch   # PG 18
apt install -y postgresql-17-pg-bestmatch   # PG 17
apt install -y postgresql-16-pg-bestmatch   # PG 16
apt install -y postgresql-15-pg-bestmatch   # PG 15
apt install -y postgresql-14-pg-bestmatch   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_bestmatch';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_bestmatch;
```



## 用法

- 仓库：https://github.com/tensorchord/pg_bestmatch.rs
- 基准测试：https://hazyresearch.stanford.edu/blog/2024-05-20-m2-bert-retrieval


### 工作原理

- 通过 `bm25_create(table_name, column_name, statistic_name);` 基于文档集创建 BM25 统计信息，该操作会创建一个物化视图来记录统计数据。
- 使用 `bm25_document_to_svector(statistic_name, passage)` 生成文档的稀疏向量
- 查询时，使用 `bm25_query_to_svector(statistic_name, query)` 生成查询的稀疏向量
- 通过查询稀疏向量与文档稀疏向量的点积计算相关性得分
- 目前使用 HuggingFace 分词器和 `bert-base-uncased` 词汇表来进行分词。未来可能会支持更多分词器配置选项。


### 安装

```sql
CREATE EXTENSION pg_bestmatch;
SET search_path TO public, bm_catalog;
```



--------

## 示例

以下是一个使用 [Stanford LoCo 基准测试](https://hazyresearch.stanford.edu/blog/2024-05-20-m2-bert-retrieval) 数据集演示本扩展用法的完整工作流。

0. 加载数据集。如果您想使用该数据集体验 `pg_bestmatch`，可以使用以下脚本。

```sh
wget https://huggingface.co/api/datasets/hazyresearch/LoCoV1-Documents/parquet/default/test/0.parquet -O documents.parquet
wget https://huggingface.co/api/datasets/hazyresearch/LoCoV1-Queries/parquet/default/test/0.parquet -O queries.parquet
```

```python
import pandas as pd
from sqlalchemy import create_engine
import numpy as np
from psycopg2.extensions import register_adapter, AsIs

def adapter_numpy_float64(numpy_float64):
    return AsIs(numpy_float64)

def adapter_numpy_int64(numpy_int64):
    return AsIs(numpy_int64)

def adapter_numpy_float32(numpy_float32):
    return AsIs(numpy_float32)

def adapter_numpy_int32(numpy_int32):
    return AsIs(numpy_int32)

def adapter_numpy_array(numpy_array):
    return AsIs(tuple(numpy_array))

register_adapter(np.float64, adapter_numpy_float64)
register_adapter(np.int64, adapter_numpy_int64)
register_adapter(np.float32, adapter_numpy_float32)
register_adapter(np.int32, adapter_numpy_int32)
register_adapter(np.ndarray, adapter_numpy_array)

db_url = "postgresql://localhost:5432/pg_bestmatch_test"
engine = create_engine(db_url)

def load_documents():
    df = pd.read_parquet("documents.parquet")
    df.to_sql("documents", engine, if_exists='replace', index=False)

def load_queries():
    df = pd.read_parquet("queries.parquet")
    df['answer_pids'] = df['answer_pids'].apply(lambda x: str(x[0]))
    df.to_sql("queries", engine, if_exists='replace', index=False)

load_documents()
load_queries()
```

1. 为 `documents` 表创建 BM25 统计信息。

```sql
SELECT bm25_create('documents', 'passage', 'documents_passage_bm25', 0.75, 1.2);
```

2. 在 `documents` 和 `queries` 表中添加向量列，并更新文档和查询的向量表示。

```sql
ALTER TABLE documents ADD COLUMN embedding svector; -- pgvecto.rs 用户
ALTER TABLE documents ADD COLUMN embedding sparsevec; -- pgvector 用户

UPDATE documents SET embedding = bm25_document_to_svector('documents_passage_bm25', passage)::svector; -- pgvecto.rs 用户
UPDATE documents SET embedding = bm25_document_to_svector('documents_passage_bm25', passage, 'pgvector')::sparsevec; -- pgvector 用户
```

3. （可选）在稀疏向量列上创建向量索引。

```sql
CREATE INDEX ON documents USING vectors (embedding svector_dot_ops); -- pgvecto.rs 用户
CREATE INDEX ON documents USING ivfflat (embedding sparsevec_ip_ops); -- pgvector 用户
```

4. 执行向量搜索，为每个查询找到最相关的文档。

```sql
ALTER TABLE queries ADD COLUMN embedding svector; -- pgvecto.rs 用户
ALTER TABLE queries ADD COLUMN embedding sparsevec; -- pgvector 用户

UPDATE queries SET embedding = bm25_query_to_svector('documents_passage_bm25', query)::svector; -- pgvecto.rs 用户
UPDATE queries SET embedding = bm25_query_to_svector('documents_passage_bm25', query, 'pgvector')::sparsevec; -- pgvector 用户

SELECT sum((array[answer_pids] = array(SELECT pid FROM documents WHERE queries.dataset = documents.dataset ORDER BY queries.embedding <#> documents.embedding LIMIT 1))::int) FROM queries;
```

此工作流展示了如何利用本扩展在 PostgreSQL 中结合 BM25 文本查询与向量搜索。BM25 在该数据集上的 Top 1 召回率为 `0.77`。如果您能复现该结果，说明操作正确。


--------

## 与 pg_search 的比较

- `pg_bestmatch.rs` 仅提供生成稀疏向量的方法，不支持基于索引的搜索（可通过 pgvecto.rs 或 pgvector 实现）。
- `pg_search` 通过外部 `tantivy` 引擎执行 BM25 检索，在与事务、过滤器或 JOIN 操作结合使用时可能存在限制。由于 `pg_bestmatch.rs` 完全原生于 PostgreSQL，因此在 PostgreSQL 内部与这些操作具有完全的兼容性。


--------

## 函数参考

- `tokenize`
    - 说明：将输入字符串分词为独立的词元。
    - 示例：
      ```sql
      SELECT tokenize('i have an apple'); -- 结果：{i,have,an,apple}
      ```
- `bm25_create`
    - 说明：为指定的表和列创建 BM25 统计信息。
    - 用法：
      ```sql
      SELECT bm25_create('documents', 'passage', 'documents_passage_bm25');
      ```
    - 参数：
        - `table_name`：表名。
        - `column_name`：列名。
        - `stat_name`：BM25 统计信息名称。
        - `b`：BM25 参数（默认值 0.75）。
        - `k`：BM25 参数（默认值 1.2）。
- `bm25_refresh`
    - 说明：更新 BM25 统计信息以反映底层数据的变化。
    - 用法：
      ```sql
      SELECT bm25_refresh('documents_passage_bm25');
      ```
    - 参数：
        - `stat_name`：要更新的 BM25 统计信息名称。
- `bm25_drop`
    - 说明：删除指定表和列的 BM25 统计信息。
    - 用法：
      ```sql
      SELECT bm25_drop('documents_passage_bm25');
      ```
    - 参数：
        - `stat_name`：要删除的 BM25 统计信息名称。
- `bm25_document_to_svector`
    - 说明：将文档文本转换为稀疏向量表示。
    - 用法：
      ```sql
      SELECT bm25_document_to_svector('documents_passage_bm25', 'document_text');
      ```
    - 参数：
        - `stat_name`：BM25 统计信息名称。
        - `document_text`：文档文本内容。
        - `style`：输出 `pgvecto.rs` 风格或 `pgvector` 风格的稀疏向量。
- `bm25_query_to_svector`
    - 说明：将查询文本转换为稀疏向量表示。
    - 用法：
      ```sql
      SELECT bm25_query_to_svector('documents_passage_bm25', 'We begin, as always, with the text.');
      ```
    - 参数：
        - `stat_name`：BM25 统计信息名称。
        - `query_text`：查询文本内容。
        - `style`：输出 `pgvecto.rs` 风格或 `pgvector` 风格的稀疏向量。