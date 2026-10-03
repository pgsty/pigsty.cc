---
title: "pg_textsearch"
linkTitle: "pg_textsearch"
description: "带有BM25排序的全文搜索扩展"
weight: 2180
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/timescale/pg_textsearch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">timescale/pg_textsearch</div>
    <div class="ext-card__desc">https://github.com/timescale/pg_textsearch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_textsearch-1.5.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_textsearch-1.5.1.tar.gz</div>
    <div class="ext-card__desc">pg_textsearch-1.5.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_textsearch`**](/ext/e/pg_textsearch) | `1.5.1` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2180  | [**`pg_textsearch`**](/ext/e/pg_textsearch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_fts`](/ext/e/pg_fts) [`pgroonga`](/ext/e/pgroonga) [`pg_rrf`](/ext/e/pg_rrf) [`psql_bm25s`](/ext/e/psql_bm25s) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> bm25 am conflicts with pg_search and vchord_bm25


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.5.1` | {{< pgvers "18,17" >}} | `pg_textsearch` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5.1` | {{< pgvers "18,17" >}} | `pg_textsearch_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.1` | {{< pgvers "18,17" >}} | `postgresql-$v-textsearch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.5.1 2 | AVAIL PGDG 1.5.1 2 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el8.aarch64 | AVAIL PGDG 1.5.1 2 | AVAIL PGDG 1.5.1 2 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 1.5.1 2 | AVAIL PGDG 1.5.1 2 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 1.5.1 2 | AVAIL PGDG 1.5.1 2 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 1.5.1 2 | AVAIL PGDG 1.5.1 2 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.aarch64 | AVAIL PGDG 1.5.1 2 | AVAIL PGDG 1.5.1 2 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.5.1 1 | AVAIL PIGSTY 1.5.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.5.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.1 210.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_textsearch_18-1.5.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 129.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_textsearch_18-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.5.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.1 194.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_textsearch_18-1.5.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 122.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_textsearch_18-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.5.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.1 206.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_textsearch_18-1.5.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.0 125.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_textsearch_18-1.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.5.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.1 196.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_textsearch_18-1.5.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.0 123.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_textsearch_18-1.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.5.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.1 212.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_textsearch_18-1.5.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.0 129.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_textsearch_18-1.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.5.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.5.1 200.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_textsearch_18-1.5.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.0 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_textsearch_18-1.4.0-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~bookworm_amd64.deb pigsty 1.5.1 1.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~bookworm_arm64.deb pigsty 1.5.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~trixie_amd64.deb pigsty 1.5.1 1.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~trixie_arm64.deb pigsty 1.5.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~jammy_amd64.deb pigsty 1.5.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~jammy_arm64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~noble_amd64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~noble_arm64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~resolute_amd64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.5.1-1PGSTY~resolute_arm64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.5.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.5.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.1 210.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_textsearch_17-1.5.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 129.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_textsearch_17-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.5.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.1 194.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_textsearch_17-1.5.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 122.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_textsearch_17-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.5.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.1 206.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_textsearch_17-1.5.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.0 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_textsearch_17-1.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.5.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.1 196.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_textsearch_17-1.5.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.0 123.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_textsearch_17-1.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.5.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.1 212.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_textsearch_17-1.5.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.0 129.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_textsearch_17-1.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.5.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.5.1 199.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_textsearch_17-1.5.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.0 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_textsearch_17-1.4.0-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~bookworm_amd64.deb pigsty 1.5.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~bookworm_arm64.deb pigsty 1.5.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~trixie_amd64.deb pigsty 1.5.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~trixie_arm64.deb pigsty 1.5.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~jammy_amd64.deb pigsty 1.5.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~jammy_arm64.deb pigsty 1.5.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~noble_amd64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~noble_arm64.deb pigsty 1.5.1 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~resolute_amd64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.5.1-1PGSTY~resolute_arm64.deb pigsty 1.5.1 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.5.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_textsearch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_textsearch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_textsearch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_textsearch;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_textsearch -v 18  # PG 18
pig ext install -y pg_textsearch -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_textsearch_18       # PG 18
dnf install -y pg_textsearch_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-textsearch   # PG 18
apt install -y postgresql-17-textsearch   # PG 17
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_textsearch';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_textsearch;
```

## 用法

来源：

- [Version 1.5.1 README](https://github.com/timescale/pg_textsearch/blob/v1.5.1/README.md)
- [Control file](https://github.com/timescale/pg_textsearch/blob/v1.5.1/pg_textsearch.control)
- [Versioned SQL](https://github.com/timescale/pg_textsearch/blob/v1.5.1/sql/pg_textsearch--1.5.1.sql)
- [Version 1.5.1 release](https://github.com/timescale/pg_textsearch/releases/tag/v1.5.1)

`pg_textsearch` 通过 `bm25` 访问方法和 `<@>` 运算符提供 BM25 全文检索。1.5.1 支持 PostgreSQL 17 和 18，要求预加载并重启。修改预加载列表时应保留已有条目。

### 构建与查询

```conf
shared_preload_libraries = 'pg_textsearch'
```

```sql
CREATE EXTENSION pg_textsearch;
CREATE TABLE documents (id bigserial PRIMARY KEY, content text);
INSERT INTO documents(content) VALUES
    ('PostgreSQL is a database system'),
    ('BM25 ranks full text search results');
CREATE INDEX docs_idx ON documents USING bm25(content)
WITH (text_config = 'english');

SELECT id, content <@> 'database system' AS score
FROM documents
ORDER BY content <@> 'database system'
LIMIT 5;
```

分数是 BM25 值的相反数，因此数值越低越靠前。使用 `ORDER BY` 与 `LIMIT` 进行 top-k 检索。独立评分、部分索引或 PL/pgSQL 中应明确指定索引：

```sql
SELECT id FROM documents
ORDER BY content <@> to_bm25query('database system', 'docs_idx')
LIMIT 5;
```

### 索引与查询选项

`text_config` 是必填项，指定 PostgreSQL 文本搜索配置。`k1` 默认是 1.2，`b` 默认是 0.75。`bm25query` 类型和 `to_bm25query(text, text)` 显式携带查询及索引上下文。独立评分需要目标表或索引列的 SELECT 权限。

扩展支持 `text[]`、`varchar[]` 和 `bpchar[]`、不可变文本表达式索引、部分索引及分区表。查询中须使用与索引匹配的表达式。部分索引需要匹配的过滤条件及明确的索引名。1.5.0 改进了带过滤条件的 top-k 执行，但严格的后置过滤仍可能导致结果数少于请求数。

中文分词可配置 `zhparser` 等解析器，再使用相应的文本搜索配置；这是该工作流的可选依赖。对于缺少空白分词边界的超长文本，上游建议由应用确定分块边界，并使用文本数组保存。

### 维护与配置

从 1.3.0 开始，持久化内存表存放于索引页中，使用 PostgreSQL 标准 WAL 回放。查询仍可使用共享内存读缓存，由下列缓存和内存上限配置控制。自动压实在刷写过程中同步执行，重写入负载可能受到压实延迟影响。

```sql
SELECT bm25_spill_index('docs_idx');
SELECT bm25_force_merge('docs_idx');
```

强制合并适合在批量加载后执行，持续写入时应谨慎使用。VACUUM 也会刷写待处理的内存表页。相关配置包括：

| 配置 | 默认值 | 用途 |
| --- | --- | --- |
| `pg_textsearch.default_limit` | 1000 | 查询无条数限制时的评分上限 |
| `pg_textsearch.compress_segments` | on | 倒排块压缩 |
| `pg_textsearch.segments_per_level` | 8 | 压实阈值 |
| `pg_textsearch.bulk_load_threshold` | 100000 | 每事务触发刷写的词项数量 |
| `pg_textsearch.memtable_pages_threshold` | 64 | 触发刷写的链页数量 |
| `pg_textsearch.memtable_cache_enabled` | on | 共享内存读缓存 |
| `pg_textsearch.memory_limit` | 2GB | 缓存准入的近似预算；0 表示不设上限 |

并行构建要求 `maintenance_work_mem` 至少为 64 MB，且有可用的并行维护进程。升级时先准备匹配的二进制文件，重启 PostgreSQL，再按发布说明执行扩展更新。

```sql
ALTER EXTENSION pg_textsearch UPDATE;
```

### 使用边界

`bm25` 访问方法名与 `pg_search`、`vchord_bm25` 冲突，不应在同一数据库安装相互冲突的提供者。短语匹配在需要时通过保守的堆表复查实现。分数采用各分区自身的统计信息，跨分区可能不可直接比较。超长词项受 PostgreSQL 文本搜索限制影响。固定的 LWLock tranche ID 也可能与其他扩展冲突，导致等待事件名称不准确。

### 1.5.0 查询与维护

布尔过滤现在接受 PostgreSQL `tsquery`，包含 AND/OR/NOT、纯否定、前缀、权重与短语条件；短语／权重可能需要堆表复查。PostgreSQL 19 支持仍为 beta。可选的受管理后台合并要求同一配置数据库中的 `pg_durable` 0.2.8+，并按上游要求预加载和配置；内联／手动模式无需该依赖。`pg_textsearch.allow_rls` 默认开启，BM25 统计包含被 RLS 隐藏的索引行。关闭该设置可阻止在受保护表上新建／重建 BM25 索引及相应 RLS 启用，但不会禁用现有索引。

### 升级到 1.5.1

1.5.1 修复并发刷写／强制合并造成的截断损坏、表达式索引及数组／域类型处理，以及未安装扩展的数据库中的维护操作。安装匹配的库文件并重启 PostgreSQL，然后在各数据库中更新扩展。1.5.0 到 1.5.1 的迁移检查库是否已预加载，没有新增 SQL 对象或显式索引格式迁移。

```sql
ALTER EXTENSION pg_textsearch UPDATE TO '1.5.1';
```

缓存预算是近似值，并发操作可能超过它。执行 BM25 查询的热备库需要设置 `hot_standby_feedback = on`，以便在活动快照期间延迟物理页复用。修改索引的维护函数要求索引所有权，不能在恢复期间执行；已发布的物理合并替换不会被事务回滚撤销。
