---
title: "pg_summarize"
linkTitle: "pg_summarize"
description: "使用LLM对文本字段进行总结"
weight: 1860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HexaCluster/pg_summarize">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HexaCluster/pg_summarize</div>
    <div class="ext-card__desc">https://github.com/HexaCluster/pg_summarize</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_summarize-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_summarize-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_summarize-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_summarize`**](/ext/e/pg_summarize) | `0.0.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1860  | [**`pg_summarize`**](/ext/e/pg_summarize) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`vectorize`](/ext/e/vectorize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 fix by https://github.com/Vonng/pg_summarize


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_summarize` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_summarize_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-summarize` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_summarize_18 pg_summarize_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_summarize_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_summarize_18 pg_summarize_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 948.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_summarize_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_summarize_18 pg_summarize_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_summarize_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_summarize_18 pg_summarize_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1001.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_summarize_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_summarize_18 pg_summarize_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_summarize_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_summarize_18 pg_summarize_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1001.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_summarize_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 879.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 711.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 879.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 712.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 980.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 842.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 970.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-summarize postgresql-18-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 834.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-18-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_summarize_17 pg_summarize_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_summarize_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_summarize_17 pg_summarize_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 948.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_summarize_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_summarize_17 pg_summarize_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_summarize_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_summarize_17 pg_summarize_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1001.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_summarize_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_summarize_17 pg_summarize_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_summarize_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_summarize_17 pg_summarize_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1002.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_summarize_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 879.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 711.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 879.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 712.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 980.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 843.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 971.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-summarize postgresql-17-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 835.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-17-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_summarize_16 pg_summarize_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_summarize_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_summarize_16 pg_summarize_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 948.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_summarize_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_summarize_16 pg_summarize_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_summarize_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_summarize_16 pg_summarize_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1001.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_summarize_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_summarize_16 pg_summarize_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_summarize_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_summarize_16 pg_summarize_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1001.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_summarize_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 878.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 711.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 879.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 711.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 980.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 843.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 971.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-summarize postgresql-16-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 834.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-16-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_summarize_15 pg_summarize_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_summarize_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_summarize_15 pg_summarize_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 948.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_summarize_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_summarize_15 pg_summarize_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_summarize_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_summarize_15 pg_summarize_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1002.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_summarize_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_summarize_15 pg_summarize_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_summarize_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_summarize_15 pg_summarize_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1001.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_summarize_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 878.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 713.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 878.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 712.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 979.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 842.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 970.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-summarize postgresql-15-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 834.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-15-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_summarize_14 pg_summarize_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_summarize_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_summarize_14 pg_summarize_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 948.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_summarize_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_summarize_14 pg_summarize_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_summarize_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_summarize_14 pg_summarize_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1001.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_summarize_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_summarize_14 pg_summarize_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_summarize_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_summarize_14 pg_summarize_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1001.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_summarize_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 879.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 712.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 879.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 712.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 980.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 843.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 970.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-summarize postgresql-14-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 834.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-summarize/postgresql-14-pg-summarize_0.0.1-3PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_summarize` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_summarize         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_summarize` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_summarize;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_summarize -v 18  # PG 18
pig ext install -y pg_summarize -v 17  # PG 17
pig ext install -y pg_summarize -v 16  # PG 16
pig ext install -y pg_summarize -v 15  # PG 15
pig ext install -y pg_summarize -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_summarize_18       # PG 18
dnf install -y pg_summarize_17       # PG 17
dnf install -y pg_summarize_16       # PG 16
dnf install -y pg_summarize_15       # PG 15
dnf install -y pg_summarize_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-summarize   # PG 18
apt install -y postgresql-17-pg-summarize   # PG 17
apt install -y postgresql-16-pg-summarize   # PG 16
apt install -y postgresql-15-pg-summarize   # PG 15
apt install -y postgresql-14-pg-summarize   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_summarize;
```



## 用法

> [pg_summarize](https://github.com/HexaCluster/pg_summarize)：使用 LLM 进行文本摘要，基于 pgrx 构建。
> 来源：[README.md](https://raw.githubusercontent.com/HexaCluster/pg_summarize/main/README.md)

`pg_summarize` 是一个用 Rust（使用 `pgrx`）编写的 PostgreSQL 扩展，集成了 OpenAI API。它包含一个基础的 "Hello, pg_summarize!" 函数和一个使用 OpenAI 模型进行文本摘要的 `summarize` 函数。


--------

### 快速开始

```sql
CREATE EXTENSION pg_summarize;

-- 测试 hello 函数
SELECT hello_pg_summarize();
--  hello_pg_summarize
-- ----------------------
--  Hello, pg_summarize
```


--------

### 配置

该扩展从 PostgreSQL 设置中获取配置。使用 `summarize` 函数前需设置以下参数：

```sql
-- 设置 OpenAI API 密钥（必需）
ALTER SYSTEM SET pg_summarizer.api_key = 'your_openai_api_key';

-- 可选设置模型（默认：gpt-3.5-turbo）
ALTER SYSTEM SET pg_summarizer.model = 'gpt-3.5-turbo';

-- 或在会话级别设置提示词
SET pg_summarizer.prompt = 'Your custom prompt here';

-- 如果在 SYSTEM 级别设置，需重新加载配置
SELECT pg_reload_conf();
```


--------

### Summarize 函数

`summarize` 函数接受文本输入，发送到 OpenAI API，并返回摘要：

```sql
-- 摘要文本输入
SELECT summarize('<This is the text to be summarized.>');

-- 从现有数据创建摘要表
CREATE TABLE blogs_summary AS
  SELECT blog_url, summarize(blogs_text)
  FROM hexacluster_blogs;

-- 使用不同模型
SET pg_summarizer.model = 'gpt-4o';
CREATE TABLE blogs_summary_4o AS
  SELECT blog_url, summarize(blogs_text)
  FROM hexacluster_blogs;
```


--------

### 工作原理

- **配置获取**：`summarize` 函数通过 `current_setting()` 从 PostgreSQL 获取设置（API 密钥、模型、提示词）。未找到设置时使用默认值。
- **默认提示词**：内置提示词指示 AI 从 `<text>` 标签中摘要文本，重点简洁地捕获最重要的信息。
- **API 调用**：该函数向 OpenAI 聊天补全端点发送 POST 请求，包含配置的模型和提示词，返回摘要内容。
