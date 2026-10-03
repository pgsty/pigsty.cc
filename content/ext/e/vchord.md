---
title: "vchord"
linkTitle: "vchord"
description: "使用Rust重写的高性能向量扩展"
weight: 1810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supervc-stack/VectorChord">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supervc-stack/VectorChord</div>
    <div class="ext-card__desc">https://github.com/supervc-stack/VectorChord</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/VectorChord-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">VectorChord-1.1.1.tar.gz</div>
    <div class="ext-card__desc">VectorChord-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`vchord`**](/ext/e/vchord) | `1.1.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1810  | [**`vchord`**](/ext/e/vchord) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`vector`](/ext/e/vector) [`vectorscale`](/ext/e/vectorscale) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) [`pg_rrf`](/ext/e/pg_rrf) [`pg_search`](/ext/e/pg_search) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pgml`](/ext/e/pgml) [`pg4ml`](/ext/e/pg4ml) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `vchord` | `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `vchord_$v` | `pgvector_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-vchord` | `postgresql-$v-pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 vchord_18 vchord_18-1.1.1-3PIGSTY.el8.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_18-1.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vchord_18 vchord_18-1.1.1-3PIGSTY.el8.aarch64.rpm pigsty 1.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_18-1.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vchord_18 vchord_18-1.1.1-3PIGSTY.el9.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_18-1.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vchord_18 vchord_18-1.1.1-3PIGSTY.el9.aarch64.rpm pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_18-1.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vchord_18 vchord_18-1.1.1-3PIGSTY.el10.x86_64.rpm pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_18-1.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vchord_18 vchord_18-1.1.1-3PIGSTY.el10.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_18-1.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~trixie_amd64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~trixie_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~jammy_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~jammy_arm64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~noble_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~noble_arm64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~resolute_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.1.1-3PIGSTY~resolute_arm64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-18-vchord_1.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 vchord_17 vchord_17-1.1.1-3PIGSTY.el8.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_17-1.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vchord_17 vchord_17-1.1.1-3PIGSTY.el8.aarch64.rpm pigsty 1.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_17-1.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vchord_17 vchord_17-1.1.1-3PIGSTY.el9.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_17-1.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vchord_17 vchord_17-1.1.1-3PIGSTY.el9.aarch64.rpm pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_17-1.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vchord_17 vchord_17-1.1.1-3PIGSTY.el10.x86_64.rpm pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_17-1.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vchord_17 vchord_17-1.1.1-3PIGSTY.el10.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_17-1.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~trixie_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~trixie_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~jammy_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~jammy_arm64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~noble_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~noble_arm64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~resolute_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.1.1-3PIGSTY~resolute_arm64.deb pigsty 1.1.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-17-vchord_1.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 vchord_16 vchord_16-1.1.1-3PIGSTY.el8.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_16-1.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vchord_16 vchord_16-1.1.1-3PIGSTY.el8.aarch64.rpm pigsty 1.1.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_16-1.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vchord_16 vchord_16-1.1.1-3PIGSTY.el9.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_16-1.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vchord_16 vchord_16-1.1.1-3PIGSTY.el9.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_16-1.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vchord_16 vchord_16-1.1.1-3PIGSTY.el10.x86_64.rpm pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_16-1.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vchord_16 vchord_16-1.1.1-3PIGSTY.el10.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_16-1.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~trixie_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~trixie_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~jammy_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~jammy_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~noble_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~noble_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~resolute_amd64.deb pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.1.1-3PIGSTY~resolute_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-16-vchord_1.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 vchord_15 vchord_15-1.1.1-3PIGSTY.el8.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_15-1.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vchord_15 vchord_15-1.1.1-3PIGSTY.el8.aarch64.rpm pigsty 1.1.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_15-1.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vchord_15 vchord_15-1.1.1-3PIGSTY.el9.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_15-1.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vchord_15 vchord_15-1.1.1-3PIGSTY.el9.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_15-1.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vchord_15 vchord_15-1.1.1-3PIGSTY.el10.x86_64.rpm pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_15-1.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vchord_15 vchord_15-1.1.1-3PIGSTY.el10.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_15-1.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~trixie_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~trixie_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~jammy_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~jammy_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~noble_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~noble_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~resolute_amd64.deb pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.1.1-3PIGSTY~resolute_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-15-vchord_1.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 vchord_14 vchord_14-1.1.1-3PIGSTY.el8.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_14-1.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vchord_14 vchord_14-1.1.1-3PIGSTY.el8.aarch64.rpm pigsty 1.1.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_14-1.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vchord_14 vchord_14-1.1.1-3PIGSTY.el9.x86_64.rpm pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_14-1.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vchord_14 vchord_14-1.1.1-3PIGSTY.el9.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_14-1.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vchord_14 vchord_14-1.1.1-3PIGSTY.el10.x86_64.rpm pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_14-1.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vchord_14 vchord_14-1.1.1-3PIGSTY.el10.aarch64.rpm pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_14-1.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~trixie_amd64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~trixie_arm64.deb pigsty 1.1.1 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~jammy_amd64.deb pigsty 1.1.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~jammy_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~noble_amd64.deb pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~noble_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~resolute_amd64.deb pigsty 1.1.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.1.1-3PIGSTY~resolute_arm64.deb pigsty 1.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-14-vchord_1.1.1-3PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `vchord` 扩展的 RPM / DEB 包：

```bash
pig build pkg vchord         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `vchord` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install vchord;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y vchord -v 18  # PG 18
pig ext install -y vchord -v 17  # PG 17
pig ext install -y vchord -v 16  # PG 16
pig ext install -y vchord -v 15  # PG 15
pig ext install -y vchord -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y vchord_18       # PG 18
dnf install -y vchord_17       # PG 17
dnf install -y vchord_16       # PG 16
dnf install -y vchord_15       # PG 15
dnf install -y vchord_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-vchord   # PG 18
apt install -y postgresql-17-vchord   # PG 17
apt install -y postgresql-16-vchord   # PG 16
apt install -y postgresql-15-vchord   # PG 15
apt install -y postgresql-14-vchord   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'vchord';
```


**创建扩展**：

```sql
CREATE EXTENSION vchord CASCADE;  -- 依赖: vector
```

## 用法

来源：

- [1.1.1 README](https://github.com/supervc-stack/VectorChord/blob/1.1.1/README.md)
- [Control and dependency](https://github.com/supervc-stack/VectorChord/blob/1.1.1/vchord.control)
- [Preload requirement](https://github.com/supervc-stack/VectorChord/blob/1.1.1/src/lib.rs)
- [1.1.1 SQL objects](https://github.com/supervc-stack/VectorChord/blob/1.1.1/sql/install/vchord--1.1.1.sql)
- [Query settings](https://github.com/supervc-stack/VectorChord/blob/1.1.1/src/index/gucs.rs)
- [1.1.1 migration](https://github.com/supervc-stack/VectorChord/blob/1.1.1/sql/upgrade/vchord--1.1.0--1.1.1.sql)
- [1.1.1 release notes](https://github.com/supervc-stack/VectorChord/releases/tag/1.1.1)

`vchord` 使用 pgvector 的类型，为 PostgreSQL 增加近似向量索引，提供基于分区的 `vchordrq` 和基于图的 `vchordg` 访问方法。扩展依赖 `vector`，要求共享预加载，创建时需要超级用户权限。

### 创建与查询索引

将库加入已有预加载列表，保留其他条目，然后重启 PostgreSQL：

```conf
shared_preload_libraries = 'vchord'
```

```sql
CREATE EXTENSION vchord CASCADE;
CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));
INSERT INTO items(embedding) VALUES ('[1,2,3]'), ('[4,5,6]');
CREATE INDEX items_embedding_idx ON items
USING vchordrq (embedding vector_l2_ops);

SELECT id FROM items ORDER BY embedding <-> '[3,1,2]' LIMIT 5;
SELECT vchordrq_prewarm('items_embedding_idx'::regclass);
```

`vector_l2_ops` 对应 `<->`，`vector_ip_ops` 对应 `<#>`，`vector_cosine_ops` 对应 `<=>`。内积运算符返回负值，以适配索引升序扫描。图访问方法可使用同样的运算符类，应按工作负载选择索引方案：

```sql
CREATE INDEX items_embedding_graph_idx ON items
USING vchordg (embedding vector_l2_ops);
```

### 范围查询与调优

扩展为范围检索提供显式球体谓词：

```sql
SELECT id FROM items
WHERE embedding <<->> sphere('[1,2,3]'::vector, 0.5);

SET vchordrq.probes = '100';
SET vchordrq.epsilon = 1.9;
SET vchordg.ef_search = 64;
```

`<<->>`、`<<#>>` 和 `<<=>>` 分别是 L2、内积和余弦度量的球体谓词。探测数量取决于分区布局，应使用代表性数据调优。epsilon 设置控制重排序的权衡，图检索设置控制候选搜索范围。两种索引方法都是近似检索，选择参数前应检查召回率、过滤条件和查询计划。

### 1.1.1 的量化接口

`rabitq8` 和 `rabitq4` 保存量化向量。`quantize_to_rabitq8` 与 `quantize_to_rabitq4` 接受 `vector` 或 `halfvec`。1.1.1 为这两种量化类型新增 `dequantize_to_vector` 和 `dequantize_to_halfvec` 重载：

```sql
SELECT dequantize_to_vector(quantize_to_rabitq8('[1,2,3]'::vector));
SELECT dequantize_to_halfvec(quantize_to_rabitq4('[1,2,3]'::halfvec));
```

量化会损失精度，反量化返回近似结果。本次发布还替换了量化实现。安装匹配的库和 SQL 文件后，先为预加载库重启服务，再更新每个数据库中的扩展：

```sql
ALTER EXTENSION vchord UPDATE TO '1.1.1';
```

1.1.0 到 1.1.1 的脚本新增这四个转换重载，未声明索引格式迁移。更早版本的升级要求取决于起始版本。索引构建和预热会消耗资源，应按数据集大小安排。`vchordg_prewarm` 是对应的图索引辅助函数。control 声明扩展可重定位，在非默认模式中安装时，应限定扩展对象的模式或将安装模式加入搜索路径。
