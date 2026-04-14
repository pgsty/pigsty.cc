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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_vectorize-0.26.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_vectorize-0.26.1.tar.gz</div>
    <div class="ext-card__desc">pg_vectorize-0.26.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_vectorize`**](/ext/e/vectorize) | `0.26.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1830  | [**`vectorize`**](/ext/e/vectorize) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `vectorize` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pgmq`](/ext/e/pgmq) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`pg_later`](/ext/e/pg_later) [`pg_similarity`](/ext/e/pg_similarity) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manually upgraded PGRX from 0.16.1 to 0.17.0 by Vonng; shared_preload_libraries should include vectorize and pg_cron.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.26.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_vectorize` | `pg_cron`, `pgmq`, `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.26.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_vectorize_$v` | `pgmq_$v`, `pg_cron_$v`, `pgvector_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.26.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-vectorize` | `postgresql-$v-pgmq`, `postgresql-$v-pg-cron`, `postgresql-$v-pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 | AVAIL PIGSTY 0.26.1 1 |
@ el8.x86_64 18 pg_vectorize_18 pg_vectorize_18-0.26.1-1PIGSTY.el8.x86_64.rpm pigsty 0.26.1 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_vectorize_18-0.26.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_vectorize_18 pg_vectorize_18-0.26.1-1PIGSTY.el8.aarch64.rpm pigsty 0.26.1 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_vectorize_18-0.26.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_vectorize_18 pg_vectorize_18-0.26.1-1PIGSTY.el9.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorize_18-0.26.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_vectorize_18 pg_vectorize_18-0.26.1-1PIGSTY.el9.aarch64.rpm pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorize_18-0.26.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_vectorize_18 pg_vectorize_18-0.26.1-1PIGSTY.el10.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorize_18-0.26.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_vectorize_18 pg_vectorize_18-0.26.1-1PIGSTY.el10.aarch64.rpm pigsty 0.26.1 7.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorize_18-0.26.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb pigsty 0.26.1 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-vectorize postgresql-18-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-18-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_vectorize_17 pg_vectorize_17-0.26.1-1PIGSTY.el8.x86_64.rpm pigsty 0.26.1 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_vectorize_17-0.26.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_vectorize_17 pg_vectorize_17-0.26.1-1PIGSTY.el8.aarch64.rpm pigsty 0.26.1 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_vectorize_17-0.26.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_vectorize_17 pg_vectorize_17-0.26.1-1PIGSTY.el9.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorize_17-0.26.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_vectorize_17 pg_vectorize_17-0.26.1-1PIGSTY.el9.aarch64.rpm pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorize_17-0.26.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_vectorize_17 pg_vectorize_17-0.26.1-1PIGSTY.el10.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorize_17-0.26.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_vectorize_17 pg_vectorize_17-0.26.1-1PIGSTY.el10.aarch64.rpm pigsty 0.26.1 7.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorize_17-0.26.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb pigsty 0.26.1 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb pigsty 0.26.1 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-vectorize postgresql-17-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-17-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_vectorize_16 pg_vectorize_16-0.26.1-1PIGSTY.el8.x86_64.rpm pigsty 0.26.1 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_vectorize_16-0.26.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_vectorize_16 pg_vectorize_16-0.26.1-1PIGSTY.el8.aarch64.rpm pigsty 0.26.1 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_vectorize_16-0.26.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_vectorize_16 pg_vectorize_16-0.26.1-1PIGSTY.el9.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorize_16-0.26.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_vectorize_16 pg_vectorize_16-0.26.1-1PIGSTY.el9.aarch64.rpm pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorize_16-0.26.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_vectorize_16 pg_vectorize_16-0.26.1-1PIGSTY.el10.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorize_16-0.26.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_vectorize_16 pg_vectorize_16-0.26.1-1PIGSTY.el10.aarch64.rpm pigsty 0.26.1 7.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorize_16-0.26.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb pigsty 0.26.1 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb pigsty 0.26.1 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-vectorize postgresql-16-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-16-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_vectorize_15 pg_vectorize_15-0.26.1-1PIGSTY.el8.x86_64.rpm pigsty 0.26.1 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_vectorize_15-0.26.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_vectorize_15 pg_vectorize_15-0.26.1-1PIGSTY.el8.aarch64.rpm pigsty 0.26.1 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_vectorize_15-0.26.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_vectorize_15 pg_vectorize_15-0.26.1-1PIGSTY.el9.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorize_15-0.26.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_vectorize_15 pg_vectorize_15-0.26.1-1PIGSTY.el9.aarch64.rpm pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorize_15-0.26.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_vectorize_15 pg_vectorize_15-0.26.1-1PIGSTY.el10.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorize_15-0.26.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_vectorize_15 pg_vectorize_15-0.26.1-1PIGSTY.el10.aarch64.rpm pigsty 0.26.1 7.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorize_15-0.26.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-vectorize postgresql-15-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-15-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_vectorize_14 pg_vectorize_14-0.26.1-1PIGSTY.el8.x86_64.rpm pigsty 0.26.1 7.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_vectorize_14-0.26.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_vectorize_14 pg_vectorize_14-0.26.1-1PIGSTY.el8.aarch64.rpm pigsty 0.26.1 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_vectorize_14-0.26.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_vectorize_14 pg_vectorize_14-0.26.1-1PIGSTY.el9.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorize_14-0.26.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_vectorize_14 pg_vectorize_14-0.26.1-1PIGSTY.el9.aarch64.rpm pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorize_14-0.26.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_vectorize_14 pg_vectorize_14-0.26.1-1PIGSTY.el10.x86_64.rpm pigsty 0.26.1 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorize_14-0.26.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_vectorize_14 pg_vectorize_14-0.26.1-1PIGSTY.el10.aarch64.rpm pigsty 0.26.1 7.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorize_14-0.26.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb pigsty 0.26.1 5.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb pigsty 0.26.1 5.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb pigsty 0.26.1 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-vectorize postgresql-14-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb pigsty 0.26.1 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorize/postgresql-14-pg-vectorize_0.26.1-1PIGSTY~noble_arm64.deb
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


**预加载配置**：

```bash
shared_preload_libraries = 'pg_cron, vectorize';
```


**创建扩展**：

```sql
CREATE EXTENSION vectorize CASCADE;  -- 依赖: pg_cron, pgmq, vector
```



## 用法

> [pg_vectorize](https://github.com/ChuckHend/pg_vectorize)：在 Postgres 上进行向量搜索的最简方式。
> 来源：[README.md](https://raw.githubusercontent.com/ChuckHend/pg_vectorize/main/README.md)

一个 Postgres 扩展，自动化文本到嵌入向量的转换和编排，并提供与最流行 LLM 的集成。可以快速搭建和自动维护向量搜索、全文搜索和混合搜索，帮助你在 Postgres 上快速构建 RAG 和搜索引擎。

该项目重度依赖 [pgvector](https://github.com/pgvector/pgvector)（向量相似度搜索）、[pgmq](https://github.com/pgmq/pgmq)（后台工作进程编排）和 [SentenceTransformers](https://huggingface.co/sentence-transformers)。

**API 文档**：https://chuckhend.github.io/pg_vectorize/

--------

### 概览

pg_vectorize 提供两种方式为任意 Postgres 添加语义搜索、全文搜索和混合搜索，方便在 Postgres 上构建检索增强生成（RAG）。

模式概览：

- **HTTP 服务器**（适用于托管数据库）：运行一个独立服务连接 Postgres 并暴露 REST API（`POST /api/v1/table`、`GET /api/v1/search`）。
- **Postgres 扩展**（SQL）：将扩展安装到 Postgres 中，使用 `vectorize.table()` 和 `vectorize.search()` 等 SQL 函数（需要 Postgres 的文件系统访问权限）。

--------

### 快速开始 -- HTTP 服务器

使用 docker compose 在本地运行 Postgres 和 HTTP 服务：

```bash
# 运行 Postgres、嵌入向量服务器和管理 API
docker compose up -d
```

将示例数据集加载到 Postgres（可选）：

```bash
psql postgres://postgres:postgres@localhost:5432/postgres -f server/sql/example.sql
```

通过 HTTP API 创建嵌入向量任务。这会为现有数据生成嵌入向量，并持续监控更新或新数据：

```bash
curl -X POST http://localhost:8080/api/v1/table -d '{
		"job_name": "my_job",
		"src_table": "my_products",
		"src_schema": "public",
		"src_columns": ["product_name", "description"],
		"primary_key": "product_id",
		"update_time_col": "updated_at",
		"model": "sentence-transformers/all-MiniLM-L6-v2"
	}' -H "Content-Type: application/json"
```

```json
{"id":"16b80184-2e8e-4ee6-b7e2-1a068ff4b314"}
```

使用 HTTP API 搜索：

```bash
curl -G \
  "http://localhost:8080/api/v1/search" \
  --data-urlencode "job_name=my_job" \
  --data-urlencode "query=camping backpack" \
  --data-urlencode "limit=1" \
  | jq .
```

```json
[
  {
    "description": "Storage solution for carrying personal items on ones back",
    "fts_rank": 1,
    "price": 45.0,
    "product_category": "accessories",
    "product_id": 6,
    "product_name": "Backpack",
    "rrf_score": 0.03278688524590164,
    "semantic_rank": 1,
    "similarity_score": 0.6296013593673706,
    "updated_at": "2025-10-05T00:14:39.220893+00:00"
  }
]
```

--------

### 选择哪种模式？

- 当 Postgres 是托管的（RDS、Cloud SQL 等）或无法安装扩展时，使用 **HTTP 服务器**。只需数据库中有 `pgvector` 即可，HTTP 服务单独运行。
- 当自托管 Postgres 且可以安装扩展时，使用 **Postgres 扩展**。提供数据库内体验和直接的 SQL API 进行向量化和 RAG。

### 快速开始 -- Postgres 扩展（SQL）

```sql
CREATE EXTENSION vectorize CASCADE;
```

使用 `vectorize.table()` 创建嵌入向量任务，使用 `vectorize.search()` 直接从 SQL 进行语义搜索。
