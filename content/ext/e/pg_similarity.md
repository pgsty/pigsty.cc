---
title: "pg_similarity"
linkTitle: "pg_similarity"
description: "提供17种距离度量函数"
weight: 1840
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/eulerto/pg_similarity">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">eulerto/pg_similarity</div>
    <div class="ext-card__desc">https://github.com/eulerto/pg_similarity</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_similarity-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_similarity-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_similarity-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_similarity`**](/ext/e/pg_similarity) | `1.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1840  | [**`pg_similarity`**](/ext/e/pg_similarity) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`smlar`](/ext/e/smlar) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`pg_trgm`](/ext/e/pg_trgm) [`vchord`](/ext/e/vchord) [`pg_bigm`](/ext/e/pg_bigm) [`citext`](/ext/e/citext) [`unaccent`](/ext/e/unaccent) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_similarity` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_similarity_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-similarity` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0 2 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PGDG 1.0 2 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PGDG 1.0 2 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PGDG 1.0 2 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 |
| el10.aarch64 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 | AVAIL PGDG 1.0 2 |
| d12.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d12.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d13.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d13.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u22.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u22.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u24.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u24.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
@ el8.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel8.x86_64.rpm pgdg 1.0 43.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_similarity_18-1.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 44.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_similarity_18-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel8.aarch64.rpm pgdg 1.0 40.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_similarity_18-1.0-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_similarity_18-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel9.x86_64.rpm pgdg 1.0 42.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_similarity_18-1.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 41.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_similarity_18-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel9.aarch64.rpm pgdg 1.0 41.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_similarity_18-1.0-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 40.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_similarity_18-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 43.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_similarity_18-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 42.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_similarity_18-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 42.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_similarity_18-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 41.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_similarity_18-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 98.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 98.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 98.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 96.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 97.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 94.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 44.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_similarity_17-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 42.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_similarity_17-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_similarity_17-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 40.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_similarity_17-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 43.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_similarity_17-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 42.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_similarity_17-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 42.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_similarity_17-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 41.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_similarity_17-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 98.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 98.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 103.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 101.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 97.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 95.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 44.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_similarity_16-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_similarity_16-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 41.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_similarity_16-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 40.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_similarity_16-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 43.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_similarity_16-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 42.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_similarity_16-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 42.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_similarity_16-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 41.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_similarity_16-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 98.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 98.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 103.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 101.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 97.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 95.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 45.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_similarity_15-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_similarity_15-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 44.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_similarity_15-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 42.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_similarity_15-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 45.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_similarity_15-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 44.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_similarity_15-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 44.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_similarity_15-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_similarity_15-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 99.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 99.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 105.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 103.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 99.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 96.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 45.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_similarity_14-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_similarity_14-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 44.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_similarity_14-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 42.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_similarity_14-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 45.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_similarity_14-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 44.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_similarity_14-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 44.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_similarity_14-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_similarity_14-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 99.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 99.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 105.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 102.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 99.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 96.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_similarity` 扩展的 RPM 包：

```bash
pig build pkg pg_similarity         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_similarity` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_similarity;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_similarity -v 18  # PG 18
pig ext install -y pg_similarity -v 17  # PG 17
pig ext install -y pg_similarity -v 16  # PG 16
pig ext install -y pg_similarity -v 15  # PG 15
pig ext install -y pg_similarity -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_similarity_18       # PG 18
dnf install -y pg_similarity_17       # PG 17
dnf install -y pg_similarity_16       # PG 16
dnf install -y pg_similarity_15       # PG 15
dnf install -y pg_similarity_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-similarity   # PG 18
apt install -y postgresql-17-similarity   # PG 17
apt install -y postgresql-16-similarity   # PG 16
apt install -y postgresql-15-similarity   # PG 15
apt install -y postgresql-14-similarity   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_similarity;
```
