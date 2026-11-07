---
title: "vchord"
linkTitle: "vchord"
description: "使用Rust重写的高性能向量扩展"
weight: 1810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://vchord.pgsty.com/docs/vchord/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://vchord.pgsty.com/docs/vchord/</div>
    <div class="ext-card__desc">https://vchord.pgsty.com/docs/vchord/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/vchord-1.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">vchord-1.2.0.tar.gz</div>
    <div class="ext-card__desc">vchord-1.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`vchord`**](/ext/e/vchord) | `1.2.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license agpl30only" href="/ext/license#agpl30only">AGPL-3.0-only</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1810  | [**`vchord`**](/ext/e/vchord) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`vector`](/ext/e/vector) [`vector`](/ext/e/vector) [`vectorscale`](/ext/e/vectorscale) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) [`pg_rrf`](/ext/e/pg_rrf) [`pg_search`](/ext/e/pg_search) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pgml`](/ext/e/pgml) [`pg4ml`](/ext/e/pg4ml) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGSTY fork; requires vector and preload. Reissued 1.2.0 tag archive is byte-identical; 1.2.0-2PGSTY rebuilt and locally indexed across six RPM and ten DEB platforms, PG14-18. vchordg/halfvec scans can return distances out of order; explicitly rerank candidates when strict order is required. CDN sync pending.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `vchord` | `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `vchord_$v` | `pgvector_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-vchord` | `postgresql-$v-pgvector` |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
@ el8.x86_64 18 vchord_18 vchord_18-1.2.0-2PGSTY.el8.x86_64.rpm pigsty 1.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_18-1.2.0-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vchord_18 vchord_18-1.2.0-2PGSTY.el8.aarch64.rpm pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_18-1.2.0-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vchord_18 vchord_18-1.2.0-2PGSTY.el9.x86_64.rpm pigsty 1.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_18-1.2.0-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vchord_18 vchord_18-1.2.0-2PGSTY.el9.aarch64.rpm pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_18-1.2.0-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vchord_18 vchord_18-1.2.0-2PGSTY.el10.x86_64.rpm pigsty 1.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_18-1.2.0-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vchord_18 vchord_18-1.2.0-2PGSTY.el10.aarch64.rpm pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_18-1.2.0-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~bookworm_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~bookworm_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~trixie_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~trixie_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~jammy_amd64.deb pigsty 1.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~jammy_arm64.deb pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~noble_amd64.deb pigsty 1.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~noble_arm64.deb pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~resolute_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vchord postgresql-18-vchord_1.2.0-2PGSTY~resolute_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-18-vchord_1.2.0-2PGSTY~resolute_arm64.deb
@ el8.x86_64 17 vchord_17 vchord_17-1.2.0-2PGSTY.el8.x86_64.rpm pigsty 1.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_17-1.2.0-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vchord_17 vchord_17-1.2.0-2PGSTY.el8.aarch64.rpm pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_17-1.2.0-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vchord_17 vchord_17-1.2.0-2PGSTY.el9.x86_64.rpm pigsty 1.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_17-1.2.0-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vchord_17 vchord_17-1.2.0-2PGSTY.el9.aarch64.rpm pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_17-1.2.0-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vchord_17 vchord_17-1.2.0-2PGSTY.el10.x86_64.rpm pigsty 1.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_17-1.2.0-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vchord_17 vchord_17-1.2.0-2PGSTY.el10.aarch64.rpm pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_17-1.2.0-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~bookworm_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~bookworm_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~trixie_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~trixie_arm64.deb pigsty 1.2.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~jammy_amd64.deb pigsty 1.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~jammy_arm64.deb pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~noble_amd64.deb pigsty 1.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~noble_arm64.deb pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~resolute_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-vchord postgresql-17-vchord_1.2.0-2PGSTY~resolute_arm64.deb pigsty 1.2.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-17-vchord_1.2.0-2PGSTY~resolute_arm64.deb
@ el8.x86_64 16 vchord_16 vchord_16-1.2.0-2PGSTY.el8.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_16-1.2.0-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vchord_16 vchord_16-1.2.0-2PGSTY.el8.aarch64.rpm pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_16-1.2.0-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vchord_16 vchord_16-1.2.0-2PGSTY.el9.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_16-1.2.0-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vchord_16 vchord_16-1.2.0-2PGSTY.el9.aarch64.rpm pigsty 1.2.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_16-1.2.0-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vchord_16 vchord_16-1.2.0-2PGSTY.el10.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_16-1.2.0-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vchord_16 vchord_16-1.2.0-2PGSTY.el10.aarch64.rpm pigsty 1.2.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_16-1.2.0-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~bookworm_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~bookworm_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~trixie_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~trixie_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~jammy_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~jammy_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~noble_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~noble_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~resolute_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-vchord postgresql-16-vchord_1.2.0-2PGSTY~resolute_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-16-vchord_1.2.0-2PGSTY~resolute_arm64.deb
@ el8.x86_64 15 vchord_15 vchord_15-1.2.0-2PGSTY.el8.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_15-1.2.0-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vchord_15 vchord_15-1.2.0-2PGSTY.el8.aarch64.rpm pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_15-1.2.0-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vchord_15 vchord_15-1.2.0-2PGSTY.el9.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_15-1.2.0-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vchord_15 vchord_15-1.2.0-2PGSTY.el9.aarch64.rpm pigsty 1.2.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_15-1.2.0-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vchord_15 vchord_15-1.2.0-2PGSTY.el10.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_15-1.2.0-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vchord_15 vchord_15-1.2.0-2PGSTY.el10.aarch64.rpm pigsty 1.2.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_15-1.2.0-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~bookworm_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~bookworm_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~trixie_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~trixie_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~jammy_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~jammy_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~noble_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~noble_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~resolute_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-vchord postgresql-15-vchord_1.2.0-2PGSTY~resolute_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-15-vchord_1.2.0-2PGSTY~resolute_arm64.deb
@ el8.x86_64 14 vchord_14 vchord_14-1.2.0-2PGSTY.el8.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vchord_14-1.2.0-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vchord_14 vchord_14-1.2.0-2PGSTY.el8.aarch64.rpm pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vchord_14-1.2.0-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vchord_14 vchord_14-1.2.0-2PGSTY.el9.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vchord_14-1.2.0-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vchord_14 vchord_14-1.2.0-2PGSTY.el9.aarch64.rpm pigsty 1.2.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vchord_14-1.2.0-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vchord_14 vchord_14-1.2.0-2PGSTY.el10.x86_64.rpm pigsty 1.2.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vchord_14-1.2.0-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vchord_14 vchord_14-1.2.0-2PGSTY.el10.aarch64.rpm pigsty 1.2.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vchord_14-1.2.0-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~bookworm_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~bookworm_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~trixie_amd64.deb pigsty 1.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~trixie_arm64.deb pigsty 1.2.0 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~jammy_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~jammy_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~noble_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~noble_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~resolute_amd64.deb pigsty 1.2.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-vchord postgresql-14-vchord_1.2.0-2PGSTY~resolute_arm64.deb pigsty 1.2.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vchord/postgresql-14-vchord_1.2.0-2PGSTY~resolute_arm64.deb
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

- [安装与升级](https://vchord.pgsty.com/docs/vchord/getting-started/installation/)
- [分区向量索引](https://vchord.pgsty.com/docs/vchord/usage/indexing/)
- [图索引与结果顺序](https://vchord.pgsty.com/docs/vchord/usage/graph-index/)
- [索引级搜索默认值](https://vchord.pgsty.com/docs/vchord/usage/fallback-parameters/)
- [量化向量类型](https://vchord.pgsty.com/docs/vchord/usage/quantization-types/)
- [召回率评估](https://vchord.pgsty.com/docs/vchord/usage/measure-recall/)
- [1.2.0 发布说明](https://vchord.pgsty.com/blog/release/vchord-1.2.0/)
- [1.2.0 控制文件](https://github.com/pgsty/vchord/blob/1.2.0/vchord.control)

`vchord` 1.2.0 为 PostgreSQL 14–18 提供近似向量检索。它使用 pgvector 的类型，增加分区索引 `vchordrq` 和磁盘图索引 `vchordg`。安装需要 `vector` 扩展、共享预加载和超级用户权限。图索引在文档中仍标为预览功能。

### 启用与检索

将库加入已有预加载列表，然后重启 PostgreSQL：

```ini
shared_preload_libraries = 'vchord'
```

```sql
CREATE EXTENSION vchord CASCADE;
CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));
INSERT INTO items (embedding) VALUES ('[1,2,3]'), ('[4,5,6]'), ('[3,1,2]');
CREATE INDEX items_embedding_idx ON items
USING vchordrq (embedding vector_l2_ops);

SELECT id, embedding <-> '[3,1,2]' AS distance
FROM items ORDER BY embedding <-> '[3,1,2]' LIMIT 5;
```

小数据集可先使用不分区的索引。数据量较大时，通过 TOML 参数 `build.internal.lists` 设置分区层次，再用 `vchordrq.probes` 指定每一层搜索的分区数。增加探测数通常能提高召回率，也会增加查询开销；探测列表必须与分区层次对应。也可选择图索引，它使用相同的列和距离运算符类：

```sql
CREATE INDEX items_embedding_graph_idx ON items
USING vchordg (embedding vector_l2_ops)
WITH (options = $$
m = 32
ef_construction = 64
$$, ef_search = 128);
```

图索引定义用于替代上面的分区索引。后面的召回率示例假定只存在分区索引；比较不同索引方法时应检查执行计划。

### 类型、运算符与调优

| 对象 | 用途 |
| --- | --- |
| `vector_l2_ops`、`<->` | 欧氏距离，按升序排列。 |
| `vector_ip_ops`、`<#>` | 负内积，按升序排列。 |
| `vector_cosine_ops`、`<=>` | 余弦距离，按升序排列。 |
| `halfvec` | 半精度向量，使用对应的 `halfvec_*_ops` 运算符类。 |
| `rabitq4`、`rabitq8` | 量化向量存储，转换会损失精度。 |
| `sphere`、`<<->>`、`<<#>>`、`<<=>>` | L2、内积与余弦检索的距离半径谓词。 |
| `vchordrq.epsilon` | 控制重排序开销；1.2.0 默认值为 2.5，此前为 1.9。 |
| `vchordg.ef_search` | 图搜索的候选范围，默认值为 64。 |
| `vchordrq_prewarm`、`vchordg_prewarm` | 预热索引热点页，需要表所有者身份或表级 `SELECT` 权限。 |

```sql
SELECT id FROM items
WHERE embedding <<->> sphere('[1,2,3]'::vector, 0.5);

SELECT dequantize_to_vector(quantize_to_rabitq8('[1,2,3]'::vector));
SELECT dequantize_to_halfvec(quantize_to_rabitq4('[1,2,3]'::halfvec));
```

球体半径使用距离运算符的单位。PostgreSQL 会复核图索引的球体谓词，但近似搜索仍可能漏掉符合条件的行。反量化无法精确恢复原始向量。

索引级 `probes`、`epsilon` 和 `ef_search` 选项提供搜索默认值。显式设置的 GUC（包括数据库级或服务器级配置）优先于这些选项。重置会话设置会恢复其配置默认值，该值仍可能覆盖索引设置。

### 结果顺序与召回率

图扫描可能在返回部分候选后才发现更近的行；距离非常接近的半精度向量也可能顺序颠倒。扩大搜索范围可以减少部分乱序情况，但不能保证严格有序。需要严格排序时，应物化较大的候选集，再显式排序：

```sql
WITH candidates AS MATERIALIZED (
    SELECT id, embedding <-> '[3,1,2]' AS distance
    FROM items ORDER BY embedding <-> '[3,1,2]' LIMIT 100
)
SELECT * FROM candidates ORDER BY distance LIMIT 10;
```

这只能保证已取回候选的顺序；召回率仍取决于候选数量和搜索参数。对于分区索引，可将近似结果与精确基线比较：

```sql
SELECT vchordrq_evaluate_query_recall(
    query => $$SELECT ctid FROM items
                ORDER BY embedding <-> '[3,1,2]' LIMIT 5$$,
    exact_search => true
);
```

查询必须返回 `ctid`，精确检索阶段应允许顺序扫描。使用 `@#` 的多向量 MaxSim 查询在评估召回率时必须指定 `exact_search => true`。

### 维护与升级

保持正常的清理任务：`VACUUM` 后图搜索会排除已删除的顶点，索引维护会更新元组数与页数统计。单独执行 `ANALYZE` 不会重建或压实索引。

安装匹配的 1.2.0 库和 SQL 文件，重启 PostgreSQL 加载新库，再由扩展所有者或管理员更新各个数据库：

```sql
ALTER EXTENSION vchord UPDATE TO '1.2.0';
```

本次发布提供从 0.2.0 到 1.1.1 各版本直接升级的路径，无需重建索引。升级后应重新检查代表性查询的排序：1.2.0 修正了 MaxSim 候选估计、图索引球体过滤、已删除顶点的可见性以及量化边界问题，并提高了默认重排序预算。扩展可重定位，应将安装模式加入搜索路径或使用模式限定的对象名。
