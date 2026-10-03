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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgvectorscale-0.9.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgvectorscale-0.9.1.tar.gz</div>
    <div class="ext-card__desc">pgvectorscale-0.9.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgvectorscale`**](/ext/e/vectorscale) | `0.9.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1820  | [**`vectorscale`**](/ext/e/vectorscale) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) [`pg_rrf`](/ext/e/pg_rrf) [`pg_search`](/ext/e/pg_search) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pgml`](/ext/e/pgml) [`pg4ml`](/ext/e/pg4ml) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17,16,15,14" >}} | `pgvectorscale` | `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17,16,15,14" >}} | `pgvectorscale_$v` | `pgvector_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgvectorscale` | `postgresql-$v-pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 |
@ el8.x86_64 18 pgvectorscale_18 pgvectorscale_18-0.9.1-1PGSTY.el8.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgvectorscale_18-0.9.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgvectorscale_18 pgvectorscale_18-0.9.1-1PGSTY.el8.aarch64.rpm pigsty 0.9.1 919.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgvectorscale_18-0.9.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgvectorscale_18 pgvectorscale_18-0.9.1-1PGSTY.el9.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgvectorscale_18-0.9.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgvectorscale_18 pgvectorscale_18-0.9.1-1PGSTY.el9.aarch64.rpm pigsty 0.9.1 987.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgvectorscale_18-0.9.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgvectorscale_18 pgvectorscale_18-0.9.1-1PGSTY.el10.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgvectorscale_18-0.9.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgvectorscale_18 pgvectorscale_18-0.9.1-1PGSTY.el10.aarch64.rpm pigsty 0.9.1 967.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgvectorscale_18-0.9.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb pigsty 0.9.1 903.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb pigsty 0.9.1 743.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb pigsty 0.9.1 903.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb pigsty 0.9.1 744.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb pigsty 0.9.1 1001.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb pigsty 0.9.1 879.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb pigsty 0.9.1 992.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb pigsty 0.9.1 869.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb pigsty 0.9.1 988.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgvectorscale postgresql-18-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb pigsty 0.9.1 868.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-18-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgvectorscale_17 pgvectorscale_17-0.9.1-1PGSTY.el8.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgvectorscale_17-0.9.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgvectorscale_17 pgvectorscale_17-0.9.1-1PGSTY.el8.aarch64.rpm pigsty 0.9.1 916.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgvectorscale_17-0.9.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgvectorscale_17 pgvectorscale_17-0.9.1-1PGSTY.el9.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgvectorscale_17-0.9.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgvectorscale_17 pgvectorscale_17-0.9.1-1PGSTY.el9.aarch64.rpm pigsty 0.9.1 983.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgvectorscale_17-0.9.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgvectorscale_17 pgvectorscale_17-0.9.1-1PGSTY.el10.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgvectorscale_17-0.9.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgvectorscale_17 pgvectorscale_17-0.9.1-1PGSTY.el10.aarch64.rpm pigsty 0.9.1 966.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgvectorscale_17-0.9.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb pigsty 0.9.1 902.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb pigsty 0.9.1 742.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb pigsty 0.9.1 901.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb pigsty 0.9.1 741.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb pigsty 0.9.1 1001.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb pigsty 0.9.1 877.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb pigsty 0.9.1 989.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb pigsty 0.9.1 866.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb pigsty 0.9.1 984.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgvectorscale postgresql-17-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb pigsty 0.9.1 865.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-17-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgvectorscale_16 pgvectorscale_16-0.9.1-1PGSTY.el8.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgvectorscale_16-0.9.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgvectorscale_16 pgvectorscale_16-0.9.1-1PGSTY.el8.aarch64.rpm pigsty 0.9.1 915.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgvectorscale_16-0.9.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgvectorscale_16 pgvectorscale_16-0.9.1-1PGSTY.el9.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgvectorscale_16-0.9.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgvectorscale_16 pgvectorscale_16-0.9.1-1PGSTY.el9.aarch64.rpm pigsty 0.9.1 982.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgvectorscale_16-0.9.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgvectorscale_16 pgvectorscale_16-0.9.1-1PGSTY.el10.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgvectorscale_16-0.9.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgvectorscale_16 pgvectorscale_16-0.9.1-1PGSTY.el10.aarch64.rpm pigsty 0.9.1 966.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgvectorscale_16-0.9.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb pigsty 0.9.1 900.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb pigsty 0.9.1 740.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb pigsty 0.9.1 900.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb pigsty 0.9.1 741.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb pigsty 0.9.1 1000.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb pigsty 0.9.1 876.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb pigsty 0.9.1 991.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb pigsty 0.9.1 866.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb pigsty 0.9.1 984.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgvectorscale postgresql-16-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb pigsty 0.9.1 864.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-16-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgvectorscale_15 pgvectorscale_15-0.9.1-1PGSTY.el8.x86_64.rpm pigsty 0.9.1 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgvectorscale_15-0.9.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgvectorscale_15 pgvectorscale_15-0.9.1-1PGSTY.el8.aarch64.rpm pigsty 0.9.1 906.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgvectorscale_15-0.9.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgvectorscale_15 pgvectorscale_15-0.9.1-1PGSTY.el9.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgvectorscale_15-0.9.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgvectorscale_15 pgvectorscale_15-0.9.1-1PGSTY.el9.aarch64.rpm pigsty 0.9.1 973.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgvectorscale_15-0.9.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgvectorscale_15 pgvectorscale_15-0.9.1-1PGSTY.el10.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgvectorscale_15-0.9.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgvectorscale_15 pgvectorscale_15-0.9.1-1PGSTY.el10.aarch64.rpm pigsty 0.9.1 961.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgvectorscale_15-0.9.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb pigsty 0.9.1 895.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb pigsty 0.9.1 736.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb pigsty 0.9.1 895.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb pigsty 0.9.1 736.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb pigsty 0.9.1 991.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb pigsty 0.9.1 871.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb pigsty 0.9.1 981.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb pigsty 0.9.1 861.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb pigsty 0.9.1 978.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgvectorscale postgresql-15-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb pigsty 0.9.1 858.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-15-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgvectorscale_14 pgvectorscale_14-0.9.1-1PGSTY.el8.x86_64.rpm pigsty 0.9.1 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgvectorscale_14-0.9.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgvectorscale_14 pgvectorscale_14-0.9.1-1PGSTY.el8.aarch64.rpm pigsty 0.9.1 903.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgvectorscale_14-0.9.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgvectorscale_14 pgvectorscale_14-0.9.1-1PGSTY.el9.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgvectorscale_14-0.9.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgvectorscale_14 pgvectorscale_14-0.9.1-1PGSTY.el9.aarch64.rpm pigsty 0.9.1 969.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgvectorscale_14-0.9.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgvectorscale_14 pgvectorscale_14-0.9.1-1PGSTY.el10.x86_64.rpm pigsty 0.9.1 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgvectorscale_14-0.9.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgvectorscale_14 pgvectorscale_14-0.9.1-1PGSTY.el10.aarch64.rpm pigsty 0.9.1 960.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgvectorscale_14-0.9.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb pigsty 0.9.1 892.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb pigsty 0.9.1 733.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb pigsty 0.9.1 892.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb pigsty 0.9.1 734.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb pigsty 0.9.1 988.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb pigsty 0.9.1 868.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb pigsty 0.9.1 978.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb pigsty 0.9.1 858.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb pigsty 0.9.1 977.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgvectorscale postgresql-14-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb pigsty 0.9.1 855.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgvectorscale/postgresql-14-pgvectorscale_0.9.1-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgvectorscale;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgvectorscale -v 18  # PG 18
pig ext install -y pgvectorscale -v 17  # PG 17
pig ext install -y pgvectorscale -v 16  # PG 16
pig ext install -y pgvectorscale -v 15  # PG 15
pig ext install -y pgvectorscale -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgvectorscale_18       # PG 18
dnf install -y pgvectorscale_17       # PG 17
dnf install -y pgvectorscale_16       # PG 16
dnf install -y pgvectorscale_15       # PG 15
dnf install -y pgvectorscale_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgvectorscale   # PG 18
apt install -y postgresql-17-pgvectorscale   # PG 17
apt install -y postgresql-16-pgvectorscale   # PG 16
apt install -y postgresql-15-pgvectorscale   # PG 15
apt install -y postgresql-14-pgvectorscale   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION vectorscale CASCADE;  -- 依赖: vector
```

## 用法

来源：

- [0.9.1 README](https://github.com/timescale/pgvectorscale/blob/0.9.1/README.md)
- [Control and dependency](https://github.com/timescale/pgvectorscale/blob/0.9.1/pgvectorscale/vectorscale.control)
- [0.9.1 migration SQL](https://github.com/timescale/pgvectorscale/blob/0.9.1/pgvectorscale/sql/vectorscale--0.9.0--0.9.1.sql)
- [0.9.1 security and upgrade notes](https://github.com/timescale/pgvectorscale/releases/tag/0.9.1)

`vectorscale` 为 pgvector 增加 StreamingDiskANN 近似向量索引，`diskann` 访问方法支持 L2、内积、余弦距离和标签过滤。扩展依赖 `vector`，创建时需要超级用户权限。0.9.1 校验向量类型、维度及存储值布局，修复可能导致崩溃、内存泄露和越界写入的问题。

### 核心流程

声明明确的向量维度，并选择与查询距离相匹配的运算符类：

```sql
CREATE EXTENSION vectorscale CASCADE;
CREATE TABLE documents (
    id bigserial PRIMARY KEY,
    contents text,
    embedding vector(3),
    labels smallint[]
);
INSERT INTO documents(contents, embedding, labels)
VALUES ('PostgreSQL search', '[1,2,3]', ARRAY[1,3]::smallint[]);
CREATE INDEX documents_diskann ON documents
USING diskann (embedding vector_cosine_ops, labels);

SELECT id, contents FROM documents
WHERE labels && ARRAY[1]::smallint[]
ORDER BY embedding <=> '[1,2,3]'::vector
LIMIT 10;
```

`vector_l2_ops` 对应 `<->`，`vector_ip_ops` 对应 `<#>`，`vector_cosine_ops` 对应 `<=>`。标签使用 `smallint[]`，`&&` 表示与任一请求标签重叠。也支持普通 WHERE 条件，但严格过滤可能减少返回数量，应结合实际工作负载验证。

### 调优与排序

`diskann.query_search_list_size` 控制图检索额外候选数量，默认 100；`diskann.query_rescore` 控制精确重评分数量，默认 50，0 表示禁用：

```sql
SET diskann.query_search_list_size = 200;
SET diskann.query_rescore = 100;
```

构建选项包括 `storage_layout`、`num_neighbors`、`search_list_size` 和 `num_dimensions`，默认使用压缩的内存优化存储。增加维护内存前，应考虑并发构建及数据集大小。此版本的并行构建要求支持的压缩布局，且不支持标签列。

DiskANN 采用宽松的距离排序。需要严格排序时，可对物化结果集再次排序；这只能重排已检索的候选，不能将近似检索变成全量精确搜索。空向量不建立索引，空标签视为空数组，标签数组中的空元素被忽略。不支持在 UNLOGGED 表上创建索引。

### 升级到 0.9.1

安装匹配的扩展文件后，更新每个数据库中的扩展：

```sql
ALTER EXTENSION vectorscale UPDATE TO '0.9.1';
```

升级会将运算符类绑定到 pgvector 的实际安装模式，并检查已有绑定。若已有运算符类指向错误的类型或运算符，升级会中止；应依照发布说明删除受影响的运算符类并重新创建扩展对象，同时处理依赖索引。

**DiskANN 现在要求列类型具有有效的 `vector(N)` 维度。** 没有维度约束的向量列无法建立索引。持久化维度无效的旧索引会在扫描、插入和清理时报告错误。修正列类型后，必须**删除并重新创建受影响的索引**，`REINDEX` 无法修复这一问题。有效索引无需仅因安装 0.9.1 就全面重建。扩展创建后，SQL 对象不可重定位。
