---
title: "vectorscale"
linkTitle: "vectorscale"
description: "使用DiskANN算法对向量进行高效索引"
weight: 1820
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/timescale/pgvectorscale">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">timescale/pgvectorscale</div>
    <div class="ext-card__desc">https://github.com/timescale/pgvectorscale</div>
  </a>
  <a class="ext-card ext-card--source" href="pgvectorscale-0.9.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgvectorscale-0.9.0.tar.gz</div>
    <div class="ext-card__desc">pgvectorscale-0.9.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgvectorscale`**](/ext/e/vectorscale) | `0.9.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1820  | [**`vectorscale`**](/ext/e/vectorscale) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorize`](/ext/e/vectorize) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_similarity`](/ext/e/pg_similarity) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.0` | {{< pgvers "18,17,16,15,14" >}} | `pgvectorscale` | `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.0` | {{< pgvers "18,17,16,15,14" >}} | `pgvectorscale_$v` | `pgvector_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgvectorscale` | `postgresql-$v-pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 | AVAIL PIGSTY 0.9.0 1 |
@ el8.x86_64 18 pgvectorscale_18 pgvectorscale_18-0.9.0-1PIGSTY.el8.x86_64.rpm pigsty 0.9.0 525.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgvectorscale_18-0.9.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgvectorscale_18 pgvectorscale_18-0.9.0-1PIGSTY.el8.aarch64.rpm pigsty 0.9.0 391.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgvectorscale_18-0.9.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgvectorscale_18 pgvectorscale_18-0.9.0-1PIGSTY.el9.x86_64.rpm pigsty 0.9.0 543.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgvectorscale_18-0.9.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgvectorscale_18 pgvectorscale_18-0.9.0-1PIGSTY.el9.aarch64.rpm pigsty 0.9.0 417.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgvectorscale_18-0.9.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgvectorscale_18 pgvectorscale_18-0.9.0-1PIGSTY.el10.x86_64.rpm pigsty 0.9.0 543.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgvectorscale_18-0.9.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgvectorscale_18 pgvectorscale_18-0.9.0-1PIGSTY.el10.aarch64.rpm pigsty 0.9.0 417.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgvectorscale_18-0.9.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb pigsty 0.9.0 430.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb pigsty 0.9.0 300.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb pigsty 0.9.0 430.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb pigsty 0.9.0 300.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb pigsty 0.9.0 482.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb pigsty 0.9.0 353.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb pigsty 0.9.0 477.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb pigsty 0.9.0 349.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgvectorscale_17 pgvectorscale_17-0.9.0-1PIGSTY.el8.x86_64.rpm pigsty 0.9.0 525.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgvectorscale_17-0.9.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgvectorscale_17 pgvectorscale_17-0.9.0-1PIGSTY.el8.aarch64.rpm pigsty 0.9.0 390.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgvectorscale_17-0.9.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgvectorscale_17 pgvectorscale_17-0.9.0-1PIGSTY.el9.x86_64.rpm pigsty 0.9.0 543.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgvectorscale_17-0.9.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgvectorscale_17 pgvectorscale_17-0.9.0-1PIGSTY.el9.aarch64.rpm pigsty 0.9.0 417.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgvectorscale_17-0.9.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgvectorscale_17 pgvectorscale_17-0.9.0-1PIGSTY.el10.x86_64.rpm pigsty 0.9.0 543.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgvectorscale_17-0.9.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgvectorscale_17 pgvectorscale_17-0.9.0-1PIGSTY.el10.aarch64.rpm pigsty 0.9.0 417.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgvectorscale_17-0.9.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb pigsty 0.9.0 431.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb pigsty 0.9.0 300.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb pigsty 0.9.0 431.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb pigsty 0.9.0 302.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb pigsty 0.9.0 482.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb pigsty 0.9.0 354.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb pigsty 0.9.0 477.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb pigsty 0.9.0 349.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgvectorscale_16 pgvectorscale_16-0.9.0-1PIGSTY.el8.x86_64.rpm pigsty 0.9.0 525.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgvectorscale_16-0.9.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgvectorscale_16 pgvectorscale_16-0.9.0-1PIGSTY.el8.aarch64.rpm pigsty 0.9.0 390.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgvectorscale_16-0.9.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgvectorscale_16 pgvectorscale_16-0.9.0-1PIGSTY.el9.x86_64.rpm pigsty 0.9.0 543.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgvectorscale_16-0.9.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgvectorscale_16 pgvectorscale_16-0.9.0-1PIGSTY.el9.aarch64.rpm pigsty 0.9.0 417.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgvectorscale_16-0.9.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgvectorscale_16 pgvectorscale_16-0.9.0-1PIGSTY.el10.x86_64.rpm pigsty 0.9.0 543.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgvectorscale_16-0.9.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgvectorscale_16 pgvectorscale_16-0.9.0-1PIGSTY.el10.aarch64.rpm pigsty 0.9.0 417.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgvectorscale_16-0.9.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb pigsty 0.9.0 431.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb pigsty 0.9.0 300.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb pigsty 0.9.0 431.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb pigsty 0.9.0 300.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb pigsty 0.9.0 482.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb pigsty 0.9.0 353.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb pigsty 0.9.0 477.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb pigsty 0.9.0 350.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgvectorscale_15 pgvectorscale_15-0.9.0-1PIGSTY.el8.x86_64.rpm pigsty 0.9.0 525.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgvectorscale_15-0.9.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgvectorscale_15 pgvectorscale_15-0.9.0-1PIGSTY.el8.aarch64.rpm pigsty 0.9.0 390.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgvectorscale_15-0.9.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgvectorscale_15 pgvectorscale_15-0.9.0-1PIGSTY.el9.x86_64.rpm pigsty 0.9.0 543.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgvectorscale_15-0.9.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgvectorscale_15 pgvectorscale_15-0.9.0-1PIGSTY.el9.aarch64.rpm pigsty 0.9.0 417.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgvectorscale_15-0.9.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgvectorscale_15 pgvectorscale_15-0.9.0-1PIGSTY.el10.x86_64.rpm pigsty 0.9.0 543.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgvectorscale_15-0.9.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgvectorscale_15 pgvectorscale_15-0.9.0-1PIGSTY.el10.aarch64.rpm pigsty 0.9.0 416.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgvectorscale_15-0.9.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb pigsty 0.9.0 431.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb pigsty 0.9.0 302.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb pigsty 0.9.0 431.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb pigsty 0.9.0 300.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb pigsty 0.9.0 481.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb pigsty 0.9.0 353.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb pigsty 0.9.0 477.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb pigsty 0.9.0 349.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgvectorscale_14 pgvectorscale_14-0.9.0-1PIGSTY.el8.x86_64.rpm pigsty 0.9.0 524.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgvectorscale_14-0.9.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgvectorscale_14 pgvectorscale_14-0.9.0-1PIGSTY.el8.aarch64.rpm pigsty 0.9.0 390.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgvectorscale_14-0.9.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgvectorscale_14 pgvectorscale_14-0.9.0-1PIGSTY.el9.x86_64.rpm pigsty 0.9.0 542.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgvectorscale_14-0.9.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgvectorscale_14 pgvectorscale_14-0.9.0-1PIGSTY.el9.aarch64.rpm pigsty 0.9.0 416.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgvectorscale_14-0.9.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgvectorscale_14 pgvectorscale_14-0.9.0-1PIGSTY.el10.x86_64.rpm pigsty 0.9.0 542.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgvectorscale_14-0.9.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgvectorscale_14 pgvectorscale_14-0.9.0-1PIGSTY.el10.aarch64.rpm pigsty 0.9.0 416.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgvectorscale_14-0.9.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb pigsty 0.9.0 430.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb pigsty 0.9.0 300.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb pigsty 0.9.0 430.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb pigsty 0.9.0 300.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb pigsty 0.9.0 480.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb pigsty 0.9.0 354.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb pigsty 0.9.0 476.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb pigsty 0.9.0 349.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgvectorscale` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgvectorscale         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgvectorscale` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgvectorscale;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgvectorscale -v 18  # PG 18
pig ext install -y pgvectorscale -v 17  # PG 17
pig ext install -y pgvectorscale -v 16  # PG 16
pig ext install -y pgvectorscale -v 15  # PG 15
pig ext install -y pgvectorscale -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgvectorscale_18       # PG 18
dnf install -y pgvectorscale_17       # PG 17
dnf install -y pgvectorscale_16       # PG 16
dnf install -y pgvectorscale_15       # PG 15
dnf install -y pgvectorscale_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgvectorscale   # PG 18
apt install -y postgresql-17-pgvectorscale   # PG 17
apt install -y postgresql-16-pgvectorscale   # PG 16
apt install -y postgresql-15-pgvectorscale   # PG 15
apt install -y postgresql-14-pgvectorscale   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION vectorscale CASCADE;  -- 依赖: vector
```


## 用法

```sql
CREATE EXTENSION vectorscale CASCADE;

CREATE TABLE IF NOT EXISTS document_embedding  (
    id BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    metadata JSONB,
    contents TEXT,
    embedding VECTOR(1536)
);

-- 使用 diskann 索引方法创建向量索引
CREATE INDEX document_embedding_idx ON document_embedding
USING diskann (embedding);

-- 基于向量距离进行近似最近邻查询
SELECT *
FROM document_embedding
ORDER BY embedding <=> $1
LIMIT 10
```
