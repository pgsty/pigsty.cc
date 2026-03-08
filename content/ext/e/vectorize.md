---
title: "vectorize"
linkTitle: "vectorize"
description: "在PostgreSQL中封装RAG向量检索服务"
weight: 1830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ChuckHend/pg_vectorize">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ChuckHend/pg_vectorize</div>
    <div class="ext-card__desc">https://github.com/ChuckHend/pg_vectorize</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_vectorize-0.26.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_vectorize-0.26.0.tar.gz</div>
    <div class="ext-card__desc">pg_vectorize-0.26.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_vectorize`**](/ext/e/vectorize) | `0.26.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1830  | [**`vectorize`**](/ext/e/vectorize) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `vectorize` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pgmq`](/ext/e/pgmq) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`pg_later`](/ext/e/pg_later) [`pg_similarity`](/ext/e/pg_similarity) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.26.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_vectorize` | `pg_cron`, `pgmq`, `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.26.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_vectorize_$v` | `pgmq_$v`, `pg_cron_$v`, `pgvector_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.26.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-vectorize` | `postgresql-$v-pgmq`, `postgresql-$v-pg-cron`, `postgresql-$v-pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 | AVAIL PIGSTY 0.26.0 1 |
@ el8.x86_64 18 pg_vectorize_18 pg_vectorize_18-0.26.0-1PIGSTY.el8.x86_64.rpm pigsty 0.26.0 7.3MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_vectorize_18-0.26.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_vectorize_18 pg_vectorize_18-0.26.0-1PIGSTY.el8.aarch64.rpm pigsty 0.26.0 6.9MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_vectorize_18-0.26.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_vectorize_18 pg_vectorize_18-0.26.0-1PIGSTY.el9.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_vectorize_18-0.26.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_vectorize_18 pg_vectorize_18-0.26.0-1PIGSTY.el9.aarch64.rpm pigsty 0.26.0 6.7MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_vectorize_18-0.26.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_vectorize_18 pg_vectorize_18-0.26.0-1PIGSTY.el10.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_vectorize_18-0.26.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_vectorize_18 pg_vectorize_18-0.26.0-1PIGSTY.el10.aarch64.rpm pigsty 0.26.0 7.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_vectorize_18-0.26.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb pigsty 0.26.0 6.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb pigsty 0.26.0 6.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_vectorize_17 pg_vectorize_17-0.26.0-1PIGSTY.el8.x86_64.rpm pigsty 0.26.0 7.3MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_vectorize_17-0.26.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_vectorize_17 pg_vectorize_17-0.26.0-1PIGSTY.el8.aarch64.rpm pigsty 0.26.0 6.9MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_vectorize_17-0.26.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_vectorize_17 pg_vectorize_17-0.26.0-1PIGSTY.el9.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_vectorize_17-0.26.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_vectorize_17 pg_vectorize_17-0.26.0-1PIGSTY.el9.aarch64.rpm pigsty 0.26.0 6.7MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_vectorize_17-0.26.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_vectorize_17 pg_vectorize_17-0.26.0-1PIGSTY.el10.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_vectorize_17-0.26.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_vectorize_17 pg_vectorize_17-0.26.0-1PIGSTY.el10.aarch64.rpm pigsty 0.26.0 7.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_vectorize_17-0.26.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb pigsty 0.26.0 6.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb pigsty 0.26.0 6.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb pigsty 0.26.0 6.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_vectorize_16 pg_vectorize_16-0.26.0-1PIGSTY.el8.x86_64.rpm pigsty 0.26.0 7.3MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_vectorize_16-0.26.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_vectorize_16 pg_vectorize_16-0.26.0-1PIGSTY.el8.aarch64.rpm pigsty 0.26.0 6.9MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_vectorize_16-0.26.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_vectorize_16 pg_vectorize_16-0.26.0-1PIGSTY.el9.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_vectorize_16-0.26.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_vectorize_16 pg_vectorize_16-0.26.0-1PIGSTY.el9.aarch64.rpm pigsty 0.26.0 6.7MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_vectorize_16-0.26.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_vectorize_16 pg_vectorize_16-0.26.0-1PIGSTY.el10.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_vectorize_16-0.26.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_vectorize_16 pg_vectorize_16-0.26.0-1PIGSTY.el10.aarch64.rpm pigsty 0.26.0 7.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_vectorize_16-0.26.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb pigsty 0.26.0 6.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb pigsty 0.26.0 6.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_vectorize_15 pg_vectorize_15-0.26.0-1PIGSTY.el8.x86_64.rpm pigsty 0.26.0 7.3MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_vectorize_15-0.26.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_vectorize_15 pg_vectorize_15-0.26.0-1PIGSTY.el8.aarch64.rpm pigsty 0.26.0 6.9MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_vectorize_15-0.26.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_vectorize_15 pg_vectorize_15-0.26.0-1PIGSTY.el9.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_vectorize_15-0.26.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_vectorize_15 pg_vectorize_15-0.26.0-1PIGSTY.el9.aarch64.rpm pigsty 0.26.0 6.7MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_vectorize_15-0.26.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_vectorize_15 pg_vectorize_15-0.26.0-1PIGSTY.el10.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_vectorize_15-0.26.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_vectorize_15 pg_vectorize_15-0.26.0-1PIGSTY.el10.aarch64.rpm pigsty 0.26.0 7.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_vectorize_15-0.26.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb pigsty 0.26.0 6.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb pigsty 0.26.0 6.5MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb pigsty 0.26.0 6.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_vectorize_14 pg_vectorize_14-0.26.0-1PIGSTY.el8.x86_64.rpm pigsty 0.26.0 7.3MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_vectorize_14-0.26.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_vectorize_14 pg_vectorize_14-0.26.0-1PIGSTY.el8.aarch64.rpm pigsty 0.26.0 6.9MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_vectorize_14-0.26.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_vectorize_14 pg_vectorize_14-0.26.0-1PIGSTY.el9.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_vectorize_14-0.26.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_vectorize_14 pg_vectorize_14-0.26.0-1PIGSTY.el9.aarch64.rpm pigsty 0.26.0 6.7MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_vectorize_14-0.26.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_vectorize_14 pg_vectorize_14-0.26.0-1PIGSTY.el10.x86_64.rpm pigsty 0.26.0 7.0MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_vectorize_14-0.26.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_vectorize_14 pg_vectorize_14-0.26.0-1PIGSTY.el10.aarch64.rpm pigsty 0.26.0 7.4MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_vectorize_14-0.26.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb pigsty 0.26.0 6.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb pigsty 0.26.0 5.6MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb pigsty 0.26.0 6.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb pigsty 0.26.0 6.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb pigsty 0.26.0 6.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_vectorize` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_vectorize         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_vectorize` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_vectorize;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_vectorize -v 18  # PG 18
pig ext install -y pg_vectorize -v 17  # PG 17
pig ext install -y pg_vectorize -v 16  # PG 16
pig ext install -y pg_vectorize -v 15  # PG 15
pig ext install -y pg_vectorize -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_vectorize_18       # PG 18
dnf install -y pg_vectorize_17       # PG 17
dnf install -y pg_vectorize_16       # PG 16
dnf install -y pg_vectorize_15       # PG 15
dnf install -y pg_vectorize_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-vectorize   # PG 18
apt install -y postgresql-17-pg-vectorize   # PG 17
apt install -y postgresql-16-pg-vectorize   # PG 16
apt install -y postgresql-15-pg-vectorize   # PG 15
apt install -y postgresql-14-pg-vectorize   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION vectorize CASCADE;  -- 依赖: pg_cron, pgmq, vector
```
