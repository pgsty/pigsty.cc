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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_similarity-1.0.tar.gz">
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
@ el8.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel8.x86_64.rpm pgdg 1.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_similarity_18-1.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 44.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_similarity_18-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel8.aarch64.rpm pgdg 1.0 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_similarity_18-1.0-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_similarity_18-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel9.x86_64.rpm pgdg 1.0 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_similarity_18-1.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_similarity_18-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel9.aarch64.rpm pgdg 1.0 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_similarity_18-1.0-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 40.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_similarity_18-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_similarity_18-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 42.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_similarity_18-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_similarity_18-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_similarity_18 pg_similarity_18-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_similarity_18-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 98.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 98.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 98.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 96.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 97.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-similarity postgresql-18-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-18-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 44.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_similarity_17-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 42.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_similarity_17-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 42.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_similarity_17-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 40.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_similarity_17-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_similarity_17-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 42.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_similarity_17-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_similarity_17-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_similarity_17 pg_similarity_17-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_similarity_17-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 98.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 98.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 103.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 101.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 97.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-similarity postgresql-17-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 95.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-17-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 44.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_similarity_16-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_similarity_16-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_similarity_16-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 40.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_similarity_16-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_similarity_16-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 42.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_similarity_16-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_similarity_16-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_similarity_16 pg_similarity_16-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_similarity_16-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 98.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 98.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 103.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 101.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 97.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-similarity postgresql-16-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 95.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-16-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 45.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_similarity_15-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_similarity_15-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 44.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_similarity_15-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 42.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_similarity_15-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_similarity_15-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 44.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_similarity_15-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_similarity_15-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_similarity_15 pg_similarity_15-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_similarity_15-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 105.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 103.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 99.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-similarity postgresql-15-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 96.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-15-similarity_1.0-9.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 45.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_similarity_14-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_similarity_14-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 44.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_similarity_14-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 42.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_similarity_14-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.0 45.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_similarity_14-1.0-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 44.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_similarity_14-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.0 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_similarity_14-1.0-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_similarity_14 pg_similarity_14-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_similarity_14-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg12+1_amd64.deb pgdg 1.0 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg12+1_arm64.deb pgdg 1.0 96.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg13+1_amd64.deb pgdg 1.0 99.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg13+1_arm64.deb pgdg 1.0 96.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg22.04+1_amd64.deb pgdg 1.0 105.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg22.04+1_arm64.deb pgdg 1.0 102.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg24.04+1_amd64.deb pgdg 1.0 99.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-similarity postgresql-14-similarity_1.0-9.pgdg24.04+1_arm64.deb pgdg 1.0 96.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-similarity/postgresql-14-similarity_1.0-9.pgdg24.04+1_arm64.deb
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



## 用法

> [pg_similarity](https://github.com/eulerto/pg_similarity)：PostgreSQL 相似度查询支持。
> 来源：[README.md](https://raw.githubusercontent.com/eulerto/pg_similarity/master/README.md)

**pg_similarity** 是支持 PostgreSQL 相似度查询的扩展。实现与 RDBMS 紧密集成，定义了运算符，你可以使用 `~~~` 和 `~!~` 等代替传统运算符（`=` 和 `<>`）。

**pg_similarity** 有三个主要组件：

- **函数**：实现文献中可用的相似度算法的函数集合。这些函数可作为 UDF 使用，并作为实现相似度运算符的基础；
- **运算符**：基于相似度函数定义的运算符集合。它们使用相似度函数获取相似度阈值，并与用户定义的阈值比较以决定是否匹配；
- **会话变量**：存储相似度函数参数的变量集合。这些变量可在运行时定义。


--------

## 函数与运算符

该扩展支持一系列相似度算法。最知名的算法均已覆盖。请注意每种算法适用于特定领域。提供以下算法：

- L1 距离（又称城市街区距离或曼哈顿距离）
- 余弦距离
- Dice 系数
- 欧几里得距离
- 汉明距离
- Jaccard 系数
- Jaro 距离
- Jaro-Winkler 距离
- Levenshtein 距离
- 匹配系数
- Monge-Elkan 系数
- Needleman-Wunsch 系数
- 重叠系数
- Q-Gram 距离
- Smith-Waterman 系数
- Smith-Waterman-Gotoh 系数
- Soundex 距离

| 算法 | 函数 | 运算符 | 支持索引 | 参数 |
|------|------|--------|----------|------|
| L1 距离 | `block(text, text) returns float8` | `~++` | 是 | `pg_similarity.block_tokenizer`, `pg_similarity.block_threshold`, `pg_similarity.block_is_normalized` |
| 余弦距离 | `cosine(text, text) returns float8` | `~##` | 是 | `pg_similarity.cosine_tokenizer`, `pg_similarity.cosine_threshold`, `pg_similarity.cosine_is_normalized` |
| Dice 系数 | `dice(text, text) returns float8` | `~-~` | 是 | `pg_similarity.dice_tokenizer`, `pg_similarity.dice_threshold`, `pg_similarity.dice_is_normalized` |
| 欧几里得距离 | `euclidean(text, text) returns float8` | `~!!` | 是 | `pg_similarity.euclidean_tokenizer`, `pg_similarity.euclidean_threshold`, `pg_similarity.euclidean_is_normalized` |
| 汉明距离 | `hamming(bit varying, bit varying) returns float8` / `hamming_text(text, text) returns float8` | `~@~` | 否 | `pg_similarity.hamming_threshold`, `pg_similarity.hamming_is_normalized` |
| Jaccard 系数 | `jaccard(text, text) returns float8` | `~??` | 是 | `pg_similarity.jaccard_tokenizer`, `pg_similarity.jaccard_threshold`, `pg_similarity.jaccard_is_normalized` |
| Jaro 距离 | `jaro(text, text) returns float8` | `~%%` | 否 | `pg_similarity.jaro_threshold`, `pg_similarity.jaro_is_normalized` |
| Jaro-Winkler 距离 | `jarowinkler(text, text) returns float8` | `~@@` | 否 | `pg_similarity.jarowinkler_threshold`, `pg_similarity.jarowinkler_is_normalized` |
| Levenshtein 距离 | `lev(text, text) returns float8` | `~==` | 否 | `pg_similarity.levenshtein_threshold`, `pg_similarity.levenshtein_is_normalized` |
| 匹配系数 | `matchingcoefficient(text, text) returns float8` | `~^^` | 是 | `pg_similarity.matching_tokenizer`, `pg_similarity.matching_threshold`, `pg_similarity.matching_is_normalized` |
| Monge-Elkan 系数 | `mongeelkan(text, text) returns float8` | `~\|\|` | 否 | `pg_similarity.mongeelkan_tokenizer`, `pg_similarity.mongeelkan_threshold`, `pg_similarity.mongeelkan_is_normalized` |
| Needleman-Wunsch 系数 | `needlemanwunsch(text, text) returns float8` | `~#~` | 否 | `pg_similarity.nw_threshold`, `pg_similarity.nw_is_normalized` |
| 重叠系数 | `overlapcoefficient(text, text) returns float8` | `~**` | 是 | `pg_similarity.overlap_tokenizer`, `pg_similarity.overlap_threshold`, `pg_similarity.overlap_is_normalized` |
| Q-Gram 距离 | `qgram(text, text) returns float8` | `~~~` | 是 | `pg_similarity.qgram_threshold`, `pg_similarity.qgram_is_normalized` |
| Smith-Waterman 系数 | `smithwaterman(text, text) returns float8` | `~=~` | 否 | `pg_similarity.sw_threshold`, `pg_similarity.sw_is_normalized` |
| Smith-Waterman-Gotoh 系数 | `smithwatermangotoh(text, text) returns float8` | `~!~` | 否 | `pg_similarity.swg_threshold`, `pg_similarity.swg_is_normalized` |
| Soundex 距离 | `soundex(text, text) returns float8` | `~*~` | 否 | |


--------

## 参数

多个参数控制 pg_similarity 函数和运算符的行为。可分为三类：

- **tokenizer**：控制字符串的分词方式。有效值为 **alnum**、**gram**、**word** 和 **camelcase**。所有 token 均为小写。默认为 **alnum**。
  - **alnum**：分隔符为任何非字母数字字符。
  - **gram**：n-gram 是使用逐一滑动技术提取的长度为 n 的子序列。
  - **word**：分隔符为空白字符。
  - **camelcase**：分隔符为大写字母，但大写字母也作为 token 的首字符。
- **threshold**：控制结果集的灵活程度。取值范围 **0.0** 到 **1.0**。默认为 **0.7**。
- **normalized**：控制相似度系数/距离是否归一化（在 0.0 和 1.0 之间）。默认为 **true**。


--------

## 示例

运行时设置参数：

```sql
SHOW pg_similarity.levenshtein_threshold;
-- 0.7

SET pg_similarity.levenshtein_threshold TO 0.5;

SET pg_similarity.cosine_tokenizer TO camelcase;

SET pg_similarity.euclidean_is_normalized TO false;
```

示例用表：

```sql
CREATE TABLE foo (a text);
INSERT INTO foo VALUES('Euler'),('Oiler'),('Euler Taveira de Oliveira'),('Maria Taveira dos Santos'),('Carlos Santos Silva');

CREATE TABLE bar (b text);
INSERT INTO bar VALUES('Euler T. de Oliveira'),('Euller'),('Oliveira, Euler Taveira'),('Sr. Oliveira');
```

### 使用相似度函数

```sql
SELECT a, b, cosine(a,b), jaro(a, b), euclidean(a, b) FROM foo, bar;
```

### 使用 levenshtein 运算符 (~==)

```sql
SHOW pg_similarity.levenshtein_threshold;
-- 0.7

SELECT a, b, lev(a,b) FROM foo, bar WHERE a ~== b;
--              a             |          b           |   lev
-- ---------------------------+----------------------+----------
--  Euler                     | Euller               | 0.833333
--  Euler Taveira de Oliveira | Euler T. de Oliveira |     0.76

SET pg_similarity.levenshtein_threshold TO 0.5;

SELECT a, b, lev(a,b) FROM foo, bar WHERE a ~== b;
--              a             |          b           |   lev
-- ---------------------------+----------------------+----------
--  Euler                     | Euller               | 0.833333
--  Oiler                     | Euller               |      0.5
--  Euler Taveira de Oliveira | Euler T. de Oliveira |     0.76
```

### 使用 qgram 运算符 (~~~)

```sql
SET pg_similarity.qgram_threshold TO 0.7;

SELECT a, b, qgram(a, b) FROM foo, bar WHERE a ~~~ b;
--              a             |            b            |  qgram
-- ---------------------------+-------------------------+----------
--  Euler                     | Euller                  |      0.8
--  Euler Taveira de Oliveira | Euler T. de Oliveira    |  0.77551
--  Euler Taveira de Oliveira | Oliveira, Euler Taveira | 0.807692
```

### 比较不同运算符

```sql
SELECT * FROM bar WHERE b ~@@ 'euler'; -- jaro-winkler 运算符
SELECT * FROM bar WHERE b ~~~ 'euler'; -- qgram 运算符
SELECT * FROM bar WHERE b ~== 'euler'; -- levenshtein 运算符
SELECT * FROM bar WHERE b ~## 'euler'; -- cosine 运算符
```
