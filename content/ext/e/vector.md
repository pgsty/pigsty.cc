---
title: "vector"
linkTitle: "vector"
description: "向量数据类型和 ivfflat / hnsw 访问方法"
weight: 1800
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgvector/pgvector">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgvector/pgvector</div>
    <div class="ext-card__desc">https://github.com/pgvector/pgvector</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgvector-0.8.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgvector-0.8.5.tar.gz</div>
    <div class="ext-card__desc">pgvector-0.8.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgvector`**](/ext/e/vector) | `0.8.5` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1800  | [**`vector`**](/ext/e/vector) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`pg_similarity`](/ext/e/pg_similarity) [`smlar`](/ext/e/smlar) [`pg_search`](/ext/e/pg_search) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) [`pgmnemo`](/ext/e/pgmnemo) [`vchord`](/ext/e/vchord) [`vectorize`](/ext/e/vectorize) [`vectorscale`](/ext/e/vectorscale) |
{.ext-table .ext-table--rel}


> PGDG RPM and DEB packages are aligned at pgvector 0.8.5 for PostgreSQL 14-18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.8.5` | {{< pgvers "18,17,16,15,14" >}} | `pgvector` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.8.5` | {{< pgvers "18,17,16,15,14" >}} | `pgvector_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.8.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgvector` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.8.5 5 | AVAIL PGDG 0.8.5 7 | AVAIL PGDG 0.8.5 17 | AVAIL PGDG 0.8.5 19 | AVAIL PGDG 0.8.5 19 |
| el8.aarch64 | AVAIL PGDG 0.8.5 5 | AVAIL PGDG 0.8.5 7 | AVAIL PGDG 0.8.5 17 | AVAIL PGDG 0.8.5 19 | AVAIL PGDG 0.8.5 19 |
| el9.x86_64 | AVAIL PGDG 0.8.5 7 | AVAIL PGDG 0.8.5 9 | AVAIL PGDG 0.8.5 19 | AVAIL PGDG 0.8.5 21 | AVAIL PGDG 0.8.5 21 |
| el9.aarch64 | AVAIL PGDG 0.8.5 7 | AVAIL PGDG 0.8.5 9 | AVAIL PGDG 0.8.5 19 | AVAIL PGDG 0.8.5 21 | AVAIL PGDG 0.8.5 21 |
| el10.x86_64 | AVAIL PGDG 0.8.5 7 | AVAIL PGDG 0.8.5 8 | AVAIL PGDG 0.8.5 8 | AVAIL PGDG 0.8.5 8 | AVAIL PGDG 0.8.5 8 |
| el10.aarch64 | AVAIL PGDG 0.8.5 7 | AVAIL PGDG 0.8.5 8 | AVAIL PGDG 0.8.5 8 | AVAIL PGDG 0.8.5 8 | AVAIL PGDG 0.8.5 8 |
| d12.x86_64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| d12.aarch64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| d13.x86_64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| d13.aarch64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| u22.x86_64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| u22.aarch64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| u24.x86_64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| u24.aarch64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| u26.x86_64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
| u26.aarch64 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 | AVAIL PGDG 0.8.5 3 |
@ el8.x86_64 18 pgvector_18 pgvector_18-0.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.5 109.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgvector_18-0.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgvector_18 pgvector_18-0.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.4 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgvector_18-0.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgvector_18 pgvector_18-0.8.3-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.3 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgvector_18-0.8.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.2 107.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgvector_18-0.8.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgvector_18 pgvector_18-0.8.1-1PGDG.rhel8.x86_64.rpm pgdg 0.8.1 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgvector_18-0.8.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgvector_18 pgvector_18-0.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.5 99.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgvector_18-0.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgvector_18 pgvector_18-0.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.4 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgvector_18-0.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgvector_18 pgvector_18-0.8.3-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.3 97.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgvector_18-0.8.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.2 97.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgvector_18-0.8.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgvector_18 pgvector_18-0.8.1-1PGDG.rhel8.aarch64.rpm pgdg 0.8.1 96.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgvector_18-0.8.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.5-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.5 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.4-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.4 109.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.3-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.3 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.2 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel9.7.x86_64.rpm pgdg 0.8.2 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel9.6.x86_64.rpm pgdg 0.8.2 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pgvector_18 pgvector_18-0.8.1-1PGDG.rhel9.x86_64.rpm pgdg 0.8.1 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgvector_18-0.8.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.5-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.5 95.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.4-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.4 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.3-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.3 94.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.2 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel9.7.aarch64.rpm pgdg 0.8.2 94.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel9.6.aarch64.rpm pgdg 0.8.2 94.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pgvector_18 pgvector_18-0.8.1-1PGDG.rhel9.aarch64.rpm pgdg 0.8.1 94.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgvector_18-0.8.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.5-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.5 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.4 105.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.3 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.2 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel10.1.x86_64.rpm pgdg 0.8.2 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel10.0.x86_64.rpm pgdg 0.8.2 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pgvector_18 pgvector_18-0.8.1-1PGDG.rhel10.x86_64.rpm pgdg 0.8.1 104.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgvector_18-0.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.5-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.5 98.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.4 97.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.3-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.3 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.2 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel10.1.aarch64.rpm pgdg 0.8.2 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.2-1PGDG.rhel10.0.aarch64.rpm pgdg 0.8.2 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pgvector_18 pgvector_18-0.8.1-1PGDG.rhel10.aarch64.rpm pgdg 0.8.1 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgvector_18-0.8.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg12+1_amd64.deb pgdg 0.8.5 261.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg12+1_amd64.deb pgdg 0.8.4 261.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg12+1_amd64.deb pgdg 0.8.3 258.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg12+1_arm64.deb pgdg 0.8.5 231.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg12+1_arm64.deb pgdg 0.8.4 231.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg12+1_arm64.deb pgdg 0.8.3 228.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg13+1_amd64.deb pgdg 0.8.5 262.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg13+1_amd64.deb pgdg 0.8.4 261.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg13+1_amd64.deb pgdg 0.8.3 259.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg13+1_arm64.deb pgdg 0.8.5 232.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg13+1_arm64.deb pgdg 0.8.4 232.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg13+1_arm64.deb pgdg 0.8.3 229.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb pgdg 0.8.5 264.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb pgdg 0.8.4 264.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb pgdg 0.8.3 262.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb pgdg 0.8.5 232.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb pgdg 0.8.4 231.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb pgdg 0.8.3 230.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb pgdg 0.8.5 257.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb pgdg 0.8.4 257.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb pgdg 0.8.3 255.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb pgdg 0.8.5 227.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb pgdg 0.8.4 227.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb pgdg 0.8.3 225.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb pgdg 0.8.5 256.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb pgdg 0.8.4 255.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb pgdg 0.8.3 253.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb pgdg 0.8.5 227.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb pgdg 0.8.4 226.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgvector postgresql-18-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb pgdg 0.8.3 224.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-18-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgvector_17 pgvector_17-0.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.5 109.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgvector_17 pgvector_17-0.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.4 109.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgvector_17 pgvector_17-0.8.3-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.3 108.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.8.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.2 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.8.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgvector_17 pgvector_17-0.8.1-1PGDG.rhel8.x86_64.rpm pgdg 0.8.1 106.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.8.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgvector_17 pgvector_17-0.8.0-1PGDG.rhel8.x86_64.rpm pgdg 0.8.0 105.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgvector_17 pgvector_17-0.7.4-1PGDG.rhel8.x86_64.rpm pgdg 0.7.4 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgvector_17-0.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.5 98.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.4 98.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.8.3-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.3 97.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.8.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.2 97.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.8.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.8.1-1PGDG.rhel8.aarch64.rpm pgdg 0.8.1 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.8.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.8.0-1PGDG.rhel8.aarch64.rpm pgdg 0.8.0 95.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgvector_17 pgvector_17-0.7.4-1PGDG.rhel8.aarch64.rpm pgdg 0.7.4 91.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgvector_17-0.7.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.5-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.5 109.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.4-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.4 109.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.3-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.3 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.2 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel9.7.x86_64.rpm pgdg 0.8.2 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel9.6.x86_64.rpm pgdg 0.8.2 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.1-1PGDG.rhel9.x86_64.rpm pgdg 0.8.1 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.8.0-1PGDG.rhel9.x86_64.rpm pgdg 0.8.0 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgvector_17 pgvector_17-0.7.4-1PGDG.rhel9.x86_64.rpm pgdg 0.7.4 103.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgvector_17-0.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.5-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.5 95.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.4-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.4 95.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.3-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.3 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.2 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel9.7.aarch64.rpm pgdg 0.8.2 94.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel9.6.aarch64.rpm pgdg 0.8.2 94.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.1-1PGDG.rhel9.aarch64.rpm pgdg 0.8.1 94.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.8.0-1PGDG.rhel9.aarch64.rpm pgdg 0.8.0 93.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgvector_17 pgvector_17-0.7.4-1PGDG.rhel9.aarch64.rpm pgdg 0.7.4 89.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgvector_17-0.7.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.5-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.5 106.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.4 106.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.3 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.2 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel10.1.x86_64.rpm pgdg 0.8.2 104.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel10.0.x86_64.rpm pgdg 0.8.2 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.1-1PGDG.rhel10.x86_64.rpm pgdg 0.8.1 105.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgvector_17 pgvector_17-0.8.0-2PGDG.rhel10.x86_64.rpm pgdg 0.8.0 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgvector_17-0.8.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.5-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.5 97.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.4 97.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.3-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.3 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.2 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel10.1.aarch64.rpm pgdg 0.8.2 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.2-1PGDG.rhel10.0.aarch64.rpm pgdg 0.8.2 96.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.1-1PGDG.rhel10.aarch64.rpm pgdg 0.8.1 96.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgvector_17 pgvector_17-0.8.0-2PGDG.rhel10.aarch64.rpm pgdg 0.8.0 96.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgvector_17-0.8.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg12+1_amd64.deb pgdg 0.8.5 261.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg12+1_amd64.deb pgdg 0.8.4 261.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg12+1_amd64.deb pgdg 0.8.3 258.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg12+1_arm64.deb pgdg 0.8.5 231.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg12+1_arm64.deb pgdg 0.8.4 230.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg12+1_arm64.deb pgdg 0.8.3 228.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg13+1_amd64.deb pgdg 0.8.5 261.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg13+1_amd64.deb pgdg 0.8.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg13+1_amd64.deb pgdg 0.8.3 258.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg13+1_arm64.deb pgdg 0.8.5 232.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg13+1_arm64.deb pgdg 0.8.4 231.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg13+1_arm64.deb pgdg 0.8.3 229.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb pgdg 0.8.5 304.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb pgdg 0.8.4 302.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb pgdg 0.8.3 301.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb pgdg 0.8.5 270.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb pgdg 0.8.4 270.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb pgdg 0.8.3 268.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb pgdg 0.8.5 257.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb pgdg 0.8.4 257.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb pgdg 0.8.3 254.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb pgdg 0.8.5 227.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb pgdg 0.8.4 227.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb pgdg 0.8.3 224.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb pgdg 0.8.5 255.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb pgdg 0.8.4 255.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb pgdg 0.8.3 253.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb pgdg 0.8.5 226.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb pgdg 0.8.4 226.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgvector postgresql-17-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb pgdg 0.8.3 224.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-17-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgvector_16 pgvector_16-0.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.5 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.4 109.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.8.3-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.3 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.8.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.2 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.8.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.8.1-1PGDG.rhel8.x86_64.rpm pgdg 0.8.1 106.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.8.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.8.0-1PGDG.rhel8.x86_64.rpm pgdg 0.8.0 105.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.7.4-1PGDG.rhel8.x86_64.rpm pgdg 0.7.4 101.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.7.3-1PGDG.rhel8.x86_64.rpm pgdg 0.7.3 101.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.7.2-1PGDG.rhel8.x86_64.rpm pgdg 0.7.2 100.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.7.1-1PGDG.rhel8.x86_64.rpm pgdg 0.7.1 100.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.7.0-2PGDG.rhel8.x86_64.rpm pgdg 0.7.0 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.7.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.6.2-2PGDG.rhel8.x86_64.rpm pgdg 0.6.2 75.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.6.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.6.2-1PGDG.rhel8.x86_64.rpm pgdg 0.6.2 76.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.6.1-1PGDG.rhel8.x86_64.rpm pgdg 0.6.1 75.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.6.0-1PGDG.rhel8.x86_64.rpm pgdg 0.6.0 74.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 62.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgvector_16 pgvector_16-0.5.0-1PGDG.rhel8.x86_64.rpm pgdg 0.5.0 62.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgvector_16-0.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.5 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.4 98.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.8.3-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.3 97.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.8.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.2 97.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.8.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.8.1-1PGDG.rhel8.aarch64.rpm pgdg 0.8.1 96.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.8.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.8.0-1PGDG.rhel8.aarch64.rpm pgdg 0.8.0 95.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.7.4-1PGDG.rhel8.aarch64.rpm pgdg 0.7.4 91.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.7.3-1PGDG.rhel8.aarch64.rpm pgdg 0.7.3 91.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.7.2-1PGDG.rhel8.aarch64.rpm pgdg 0.7.2 90.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.7.1-1PGDG.rhel8.aarch64.rpm pgdg 0.7.1 90.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.7.0-1PGDG.rhel8.aarch64.rpm pgdg 0.7.0 89.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.6.2-2PGDG.rhel8.aarch64.rpm pgdg 0.6.2 70.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.6.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.6.2-1PGDG.rhel8.aarch64.rpm pgdg 0.6.2 70.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.6.1-1PGDG.rhel8.aarch64.rpm pgdg 0.6.1 69.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.6.0-1PGDG.rhel8.aarch64.rpm pgdg 0.6.0 68.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 58.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgvector_16 pgvector_16-0.5.0-1PGDG.rhel8.aarch64.rpm pgdg 0.5.0 58.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgvector_16-0.5.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.5-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.5 109.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.4-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.4 109.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.3-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.3 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.2 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel9.7.x86_64.rpm pgdg 0.8.2 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel9.6.x86_64.rpm pgdg 0.8.2 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.1-1PGDG.rhel9.x86_64.rpm pgdg 0.8.1 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.8.0-1PGDG.rhel9.x86_64.rpm pgdg 0.8.0 107.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.7.4-1PGDG.rhel9.x86_64.rpm pgdg 0.7.4 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.7.3-1PGDG.rhel9.x86_64.rpm pgdg 0.7.3 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.7.2-1PGDG.rhel9.x86_64.rpm pgdg 0.7.2 102.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.7.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.7.1-1PGDG.rhel9.x86_64.rpm pgdg 0.7.1 102.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.7.0-1PGDG.rhel9.x86_64.rpm pgdg 0.7.0 101.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.6.2-2PGDG.rhel9.x86_64.rpm pgdg 0.6.2 72.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.6.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.6.2-1PGDG.rhel9.x86_64.rpm pgdg 0.6.2 73.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.6.1-1PGDG.rhel9.x86_64.rpm pgdg 0.6.1 72.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.6.0-1PGDG.rhel9.x86_64.rpm pgdg 0.6.0 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 64.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgvector_16 pgvector_16-0.5.0-1PGDG.rhel9.x86_64.rpm pgdg 0.5.0 64.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgvector_16-0.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.5-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.5 95.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.4-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.4 95.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.3-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.3 94.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.2 94.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel9.7.aarch64.rpm pgdg 0.8.2 94.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel9.6.aarch64.rpm pgdg 0.8.2 94.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.1-1PGDG.rhel9.aarch64.rpm pgdg 0.8.1 93.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.8.0-1PGDG.rhel9.aarch64.rpm pgdg 0.8.0 93.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.7.4-1PGDG.rhel9.aarch64.rpm pgdg 0.7.4 89.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.7.3-1PGDG.rhel9.aarch64.rpm pgdg 0.7.3 89.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.7.2-1PGDG.rhel9.aarch64.rpm pgdg 0.7.2 88.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.7.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.7.1-1PGDG.rhel9.aarch64.rpm pgdg 0.7.1 88.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.7.0-1PGDG.rhel9.aarch64.rpm pgdg 0.7.0 87.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.6.2-2PGDG.rhel9.aarch64.rpm pgdg 0.6.2 69.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.6.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.6.2-1PGDG.rhel9.aarch64.rpm pgdg 0.6.2 68.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.6.1-1PGDG.rhel9.aarch64.rpm pgdg 0.6.1 67.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.6.0-1PGDG.rhel9.aarch64.rpm pgdg 0.6.0 67.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 59.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgvector_16 pgvector_16-0.5.0-1PGDG.rhel9.aarch64.rpm pgdg 0.5.0 59.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgvector_16-0.5.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.5-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.5 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.4 105.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.3 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.2 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel10.1.x86_64.rpm pgdg 0.8.2 104.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel10.0.x86_64.rpm pgdg 0.8.2 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.1-1PGDG.rhel10.x86_64.rpm pgdg 0.8.1 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgvector_16 pgvector_16-0.8.0-2PGDG.rhel10.x86_64.rpm pgdg 0.8.0 104.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgvector_16-0.8.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.5-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.5 97.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.4 97.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.3-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.3 96.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.2 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel10.1.aarch64.rpm pgdg 0.8.2 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.2-1PGDG.rhel10.0.aarch64.rpm pgdg 0.8.2 96.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.1-1PGDG.rhel10.aarch64.rpm pgdg 0.8.1 96.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgvector_16 pgvector_16-0.8.0-2PGDG.rhel10.aarch64.rpm pgdg 0.8.0 95.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgvector_16-0.8.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg12+1_amd64.deb pgdg 0.8.5 261.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg12+1_amd64.deb pgdg 0.8.4 260.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg12+1_amd64.deb pgdg 0.8.3 258.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg12+1_arm64.deb pgdg 0.8.5 230.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg12+1_arm64.deb pgdg 0.8.4 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg12+1_arm64.deb pgdg 0.8.3 228.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg13+1_amd64.deb pgdg 0.8.5 261.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg13+1_amd64.deb pgdg 0.8.4 261.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg13+1_amd64.deb pgdg 0.8.3 258.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg13+1_arm64.deb pgdg 0.8.5 231.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg13+1_arm64.deb pgdg 0.8.4 231.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg13+1_arm64.deb pgdg 0.8.3 229.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb pgdg 0.8.5 294.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb pgdg 0.8.4 293.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb pgdg 0.8.3 292.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb pgdg 0.8.5 261.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb pgdg 0.8.4 261.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb pgdg 0.8.3 258.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb pgdg 0.8.5 256.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb pgdg 0.8.4 256.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb pgdg 0.8.3 254.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb pgdg 0.8.5 227.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb pgdg 0.8.4 226.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb pgdg 0.8.3 224.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb pgdg 0.8.5 255.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb pgdg 0.8.4 255.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb pgdg 0.8.3 252.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb pgdg 0.8.5 226.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb pgdg 0.8.4 226.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgvector postgresql-16-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb pgdg 0.8.3 224.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-16-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgvector_15 pgvector_15-0.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.5 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.4 110.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.8.3-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.3 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.8.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.2 108.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.8.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.8.1-1PGDG.rhel8.x86_64.rpm pgdg 0.8.1 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.8.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.8.0-1PGDG.rhel8.x86_64.rpm pgdg 0.8.0 106.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.7.4-1PGDG.rhel8.x86_64.rpm pgdg 0.7.4 102.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.7.3-1PGDG.rhel8.x86_64.rpm pgdg 0.7.3 102.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.7.2-1PGDG.rhel8.x86_64.rpm pgdg 0.7.2 101.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.7.1-1PGDG.rhel8.x86_64.rpm pgdg 0.7.1 101.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.7.0-2PGDG.rhel8.x86_64.rpm pgdg 0.7.0 100.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.7.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.6.2-2PGDG.rhel8.x86_64.rpm pgdg 0.6.2 75.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.6.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.6.2-1PGDG.rhel8.x86_64.rpm pgdg 0.6.2 76.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.6.1-1PGDG.rhel8.x86_64.rpm pgdg 0.6.1 75.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.6.0-1PGDG.rhel8.x86_64.rpm pgdg 0.6.0 75.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 64.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.5.0-1PGDG.rhel8.x86_64.rpm pgdg 0.5.0 63.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.4.4-1.rhel8.x86_64.rpm pgdg 0.4.4 44.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.4.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgvector_15 pgvector_15-0.4.1-1.rhel8.x86_64.rpm pgdg 0.4.1 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgvector_15-0.4.1-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.4 99.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.8.3-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.3 98.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.8.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.2 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.8.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.8.1-1PGDG.rhel8.aarch64.rpm pgdg 0.8.1 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.8.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.8.0-1PGDG.rhel8.aarch64.rpm pgdg 0.8.0 96.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.7.4-1PGDG.rhel8.aarch64.rpm pgdg 0.7.4 92.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.7.3-1PGDG.rhel8.aarch64.rpm pgdg 0.7.3 91.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.7.2-1PGDG.rhel8.aarch64.rpm pgdg 0.7.2 91.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.7.1-1PGDG.rhel8.aarch64.rpm pgdg 0.7.1 91.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.7.0-1PGDG.rhel8.aarch64.rpm pgdg 0.7.0 90.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.6.2-2PGDG.rhel8.aarch64.rpm pgdg 0.6.2 71.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.6.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.6.2-1PGDG.rhel8.aarch64.rpm pgdg 0.6.2 71.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.6.1-1PGDG.rhel8.aarch64.rpm pgdg 0.6.1 69.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.6.0-1PGDG.rhel8.aarch64.rpm pgdg 0.6.0 69.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 59.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.5.0-1PGDG.rhel8.aarch64.rpm pgdg 0.5.0 59.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.4.4-1.rhel8.aarch64.rpm pgdg 0.4.4 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.4.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgvector_15 pgvector_15-0.4.1-1.rhel8.aarch64.rpm pgdg 0.4.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgvector_15-0.4.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.5-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.5 114.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.4-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.4 113.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.3-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.3 113.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.2 113.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel9.7.x86_64.rpm pgdg 0.8.2 113.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel9.6.x86_64.rpm pgdg 0.8.2 113.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.1-1PGDG.rhel9.x86_64.rpm pgdg 0.8.1 112.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.8.0-1PGDG.rhel9.x86_64.rpm pgdg 0.8.0 112.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.7.4-1PGDG.rhel9.x86_64.rpm pgdg 0.7.4 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.7.3-1PGDG.rhel9.x86_64.rpm pgdg 0.7.3 107.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.7.2-1PGDG.rhel9.x86_64.rpm pgdg 0.7.2 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.7.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.7.1-1PGDG.rhel9.x86_64.rpm pgdg 0.7.1 106.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.7.0-1PGDG.rhel9.x86_64.rpm pgdg 0.7.0 106.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.6.2-2PGDG.rhel9.x86_64.rpm pgdg 0.6.2 76.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.6.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.6.2-1PGDG.rhel9.x86_64.rpm pgdg 0.6.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.6.1-1PGDG.rhel9.x86_64.rpm pgdg 0.6.1 77.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.6.0-1PGDG.rhel9.x86_64.rpm pgdg 0.6.0 76.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 66.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.5.0-1PGDG.rhel9.x86_64.rpm pgdg 0.5.0 65.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.4.4-1.rhel9.x86_64.rpm pgdg 0.4.4 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.4.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgvector_15 pgvector_15-0.4.1-1.rhel9.x86_64.rpm pgdg 0.4.1 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgvector_15-0.4.1-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.5-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.5 100.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.4-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.4 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.3-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.3 99.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.2 99.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel9.7.aarch64.rpm pgdg 0.8.2 99.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel9.6.aarch64.rpm pgdg 0.8.2 99.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.1-1PGDG.rhel9.aarch64.rpm pgdg 0.8.1 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.8.0-1PGDG.rhel9.aarch64.rpm pgdg 0.8.0 98.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.7.4-1PGDG.rhel9.aarch64.rpm pgdg 0.7.4 94.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.7.3-1PGDG.rhel9.aarch64.rpm pgdg 0.7.3 93.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.7.2-1PGDG.rhel9.aarch64.rpm pgdg 0.7.2 93.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.7.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.7.1-1PGDG.rhel9.aarch64.rpm pgdg 0.7.1 93.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.7.0-1PGDG.rhel9.aarch64.rpm pgdg 0.7.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.6.2-2PGDG.rhel9.aarch64.rpm pgdg 0.6.2 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.6.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.6.2-1PGDG.rhel9.aarch64.rpm pgdg 0.6.2 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.6.1-1PGDG.rhel9.aarch64.rpm pgdg 0.6.1 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.6.0-1PGDG.rhel9.aarch64.rpm pgdg 0.6.0 71.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 61.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.5.0-1PGDG.rhel9.aarch64.rpm pgdg 0.5.0 60.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.4.4-1.rhel9.aarch64.rpm pgdg 0.4.4 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.4.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgvector_15 pgvector_15-0.4.1-1.rhel9.aarch64.rpm pgdg 0.4.1 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgvector_15-0.4.1-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.5-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.5 110.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.4 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.3 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.2 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel10.1.x86_64.rpm pgdg 0.8.2 108.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel10.0.x86_64.rpm pgdg 0.8.2 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.1-1PGDG.rhel10.x86_64.rpm pgdg 0.8.1 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgvector_15 pgvector_15-0.8.0-2PGDG.rhel10.x86_64.rpm pgdg 0.8.0 108.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgvector_15-0.8.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.5-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.5 102.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.4 102.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.3-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.3 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.2 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel10.1.aarch64.rpm pgdg 0.8.2 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.2-1PGDG.rhel10.0.aarch64.rpm pgdg 0.8.2 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.1-1PGDG.rhel10.aarch64.rpm pgdg 0.8.1 101.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgvector_15 pgvector_15-0.8.0-2PGDG.rhel10.aarch64.rpm pgdg 0.8.0 100.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgvector_15-0.8.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg12+1_amd64.deb pgdg 0.8.5 262.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg12+1_amd64.deb pgdg 0.8.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg12+1_amd64.deb pgdg 0.8.3 259.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg12+1_arm64.deb pgdg 0.8.5 232.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg12+1_arm64.deb pgdg 0.8.4 232.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg12+1_arm64.deb pgdg 0.8.3 230.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg13+1_amd64.deb pgdg 0.8.5 262.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg13+1_amd64.deb pgdg 0.8.4 262.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg13+1_amd64.deb pgdg 0.8.3 260.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg13+1_arm64.deb pgdg 0.8.5 233.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg13+1_arm64.deb pgdg 0.8.4 233.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg13+1_arm64.deb pgdg 0.8.3 231.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb pgdg 0.8.5 298.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb pgdg 0.8.4 296.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb pgdg 0.8.3 294.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb pgdg 0.8.5 265.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb pgdg 0.8.4 264.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb pgdg 0.8.3 262.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb pgdg 0.8.5 259.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb pgdg 0.8.4 259.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb pgdg 0.8.3 256.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb pgdg 0.8.5 230.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb pgdg 0.8.4 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb pgdg 0.8.3 228.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb pgdg 0.8.5 258.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb pgdg 0.8.4 257.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb pgdg 0.8.3 255.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb pgdg 0.8.5 229.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb pgdg 0.8.4 229.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgvector postgresql-15-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb pgdg 0.8.3 227.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-15-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pgvector_14 pgvector_14-0.8.5-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.5 110.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.8.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.4 110.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.8.3-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.3 109.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.8.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel8.10.x86_64.rpm pgdg 0.8.2 108.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.8.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.8.1-1PGDG.rhel8.x86_64.rpm pgdg 0.8.1 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.8.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.8.0-1PGDG.rhel8.x86_64.rpm pgdg 0.8.0 106.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.7.4-1PGDG.rhel8.x86_64.rpm pgdg 0.7.4 102.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.7.3-1PGDG.rhel8.x86_64.rpm pgdg 0.7.3 101.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.7.2-1PGDG.rhel8.x86_64.rpm pgdg 0.7.2 101.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.7.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.7.1-1PGDG.rhel8.x86_64.rpm pgdg 0.7.1 101.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.7.0-2PGDG.rhel8.x86_64.rpm pgdg 0.7.0 100.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.7.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.6.2-2PGDG.rhel8.x86_64.rpm pgdg 0.6.2 75.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.6.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.6.2-1PGDG.rhel8.x86_64.rpm pgdg 0.6.2 76.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.6.1-1PGDG.rhel8.x86_64.rpm pgdg 0.6.1 75.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.6.0-1PGDG.rhel8.x86_64.rpm pgdg 0.6.0 75.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 64.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.5.0-1PGDG.rhel8.x86_64.rpm pgdg 0.5.0 63.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.4.4-1.rhel8.x86_64.rpm pgdg 0.4.4 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.4.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgvector_14 pgvector_14-0.4.1-1.rhel8.x86_64.rpm pgdg 0.4.1 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgvector_14-0.4.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.8.5-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.8.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.4 99.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.8.3-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.3 98.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.8.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel8.10.aarch64.rpm pgdg 0.8.2 97.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.8.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.8.1-1PGDG.rhel8.aarch64.rpm pgdg 0.8.1 97.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.8.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.8.0-1PGDG.rhel8.aarch64.rpm pgdg 0.8.0 96.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.7.4-1PGDG.rhel8.aarch64.rpm pgdg 0.7.4 92.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.7.3-1PGDG.rhel8.aarch64.rpm pgdg 0.7.3 91.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.7.2-1PGDG.rhel8.aarch64.rpm pgdg 0.7.2 91.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.7.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.7.1-1PGDG.rhel8.aarch64.rpm pgdg 0.7.1 90.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.7.0-1PGDG.rhel8.aarch64.rpm pgdg 0.7.0 90.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.6.2-2PGDG.rhel8.aarch64.rpm pgdg 0.6.2 71.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.6.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.6.2-1PGDG.rhel8.aarch64.rpm pgdg 0.6.2 70.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.6.1-1PGDG.rhel8.aarch64.rpm pgdg 0.6.1 69.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.6.0-1PGDG.rhel8.aarch64.rpm pgdg 0.6.0 69.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 59.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.5.0-1PGDG.rhel8.aarch64.rpm pgdg 0.5.0 59.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.4.4-1.rhel8.aarch64.rpm pgdg 0.4.4 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.4.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgvector_14 pgvector_14-0.4.1-1.rhel8.aarch64.rpm pgdg 0.4.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgvector_14-0.4.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.5-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.5 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.4-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.4 113.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.3-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.3 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel9.8.x86_64.rpm pgdg 0.8.2 112.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel9.7.x86_64.rpm pgdg 0.8.2 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel9.6.x86_64.rpm pgdg 0.8.2 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.1-1PGDG.rhel9.x86_64.rpm pgdg 0.8.1 112.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.8.0-1PGDG.rhel9.x86_64.rpm pgdg 0.8.0 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.7.4-1PGDG.rhel9.x86_64.rpm pgdg 0.7.4 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.7.3-1PGDG.rhel9.x86_64.rpm pgdg 0.7.3 107.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.7.2-1PGDG.rhel9.x86_64.rpm pgdg 0.7.2 107.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.7.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.7.1-1PGDG.rhel9.x86_64.rpm pgdg 0.7.1 106.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.7.0-1PGDG.rhel9.x86_64.rpm pgdg 0.7.0 106.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.6.2-2PGDG.rhel9.x86_64.rpm pgdg 0.6.2 76.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.6.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.6.2-1PGDG.rhel9.x86_64.rpm pgdg 0.6.2 78.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.6.1-1PGDG.rhel9.x86_64.rpm pgdg 0.6.1 77.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.6.0-1PGDG.rhel9.x86_64.rpm pgdg 0.6.0 76.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 65.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.5.0-1PGDG.rhel9.x86_64.rpm pgdg 0.5.0 65.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.4.4-1.rhel9.x86_64.rpm pgdg 0.4.4 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.4.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgvector_14 pgvector_14-0.4.1-1.rhel9.x86_64.rpm pgdg 0.4.1 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgvector_14-0.4.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.5-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.5 100.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.4-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.4 100.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.3-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.3 99.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel9.8.aarch64.rpm pgdg 0.8.2 99.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel9.7.aarch64.rpm pgdg 0.8.2 99.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel9.6.aarch64.rpm pgdg 0.8.2 99.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.1-1PGDG.rhel9.aarch64.rpm pgdg 0.8.1 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.8.0-1PGDG.rhel9.aarch64.rpm pgdg 0.8.0 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.7.4-1PGDG.rhel9.aarch64.rpm pgdg 0.7.4 94.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.7.3-1PGDG.rhel9.aarch64.rpm pgdg 0.7.3 93.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.7.2-1PGDG.rhel9.aarch64.rpm pgdg 0.7.2 93.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.7.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.7.1-1PGDG.rhel9.aarch64.rpm pgdg 0.7.1 93.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.7.0-1PGDG.rhel9.aarch64.rpm pgdg 0.7.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.6.2-2PGDG.rhel9.aarch64.rpm pgdg 0.6.2 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.6.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.6.2-1PGDG.rhel9.aarch64.rpm pgdg 0.6.2 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.6.1-1PGDG.rhel9.aarch64.rpm pgdg 0.6.1 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.6.0-1PGDG.rhel9.aarch64.rpm pgdg 0.6.0 71.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 61.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.5.0-1PGDG.rhel9.aarch64.rpm pgdg 0.5.0 60.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.4.4-1.rhel9.aarch64.rpm pgdg 0.4.4 43.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.4.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgvector_14 pgvector_14-0.4.1-1.rhel9.aarch64.rpm pgdg 0.4.1 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgvector_14-0.4.1-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.5-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.5 110.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.4 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.3 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.8.2 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel10.1.x86_64.rpm pgdg 0.8.2 109.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel10.0.x86_64.rpm pgdg 0.8.2 109.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.1-1PGDG.rhel10.x86_64.rpm pgdg 0.8.1 108.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgvector_14 pgvector_14-0.8.0-2PGDG.rhel10.x86_64.rpm pgdg 0.8.0 108.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgvector_14-0.8.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.5-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.5 102.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.4 102.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.3-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.3 101.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.8.2 101.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel10.1.aarch64.rpm pgdg 0.8.2 101.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.2-1PGDG.rhel10.0.aarch64.rpm pgdg 0.8.2 101.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.1-1PGDG.rhel10.aarch64.rpm pgdg 0.8.1 101.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgvector_14 pgvector_14-0.8.0-2PGDG.rhel10.aarch64.rpm pgdg 0.8.0 100.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgvector_14-0.8.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg12+1_amd64.deb pgdg 0.8.5 262.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg12+1_amd64.deb pgdg 0.8.4 261.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg12+1_amd64.deb pgdg 0.8.3 259.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg12+1_arm64.deb pgdg 0.8.5 232.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg12+1_arm64.deb pgdg 0.8.4 232.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg12+1_arm64.deb pgdg 0.8.3 229.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg13+1_amd64.deb pgdg 0.8.5 262.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg13+1_amd64.deb pgdg 0.8.4 262.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg13+1_amd64.deb pgdg 0.8.3 260.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg13+1_arm64.deb pgdg 0.8.5 233.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg13+1_arm64.deb pgdg 0.8.4 233.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg13+1_arm64.deb pgdg 0.8.3 230.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb pgdg 0.8.5 295.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb pgdg 0.8.4 295.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb pgdg 0.8.3 293.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb pgdg 0.8.5 263.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb pgdg 0.8.4 263.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb pgdg 0.8.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb pgdg 0.8.5 259.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb pgdg 0.8.4 259.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb pgdg 0.8.3 256.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb pgdg 0.8.5 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb pgdg 0.8.4 230.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb pgdg 0.8.3 228.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb pgdg 0.8.5 257.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb pgdg 0.8.4 257.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb pgdg 0.8.3 255.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb pgdg 0.8.5 229.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb pgdg 0.8.4 229.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pgvector postgresql-14-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb pgdg 0.8.3 227.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgvector/postgresql-14-pgvector_0.8.3-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgvector` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgvector         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgvector` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgvector;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgvector -v 18  # PG 18
pig ext install -y pgvector -v 17  # PG 17
pig ext install -y pgvector -v 16  # PG 16
pig ext install -y pgvector -v 15  # PG 15
pig ext install -y pgvector -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgvector_18       # PG 18
dnf install -y pgvector_17       # PG 17
dnf install -y pgvector_16       # PG 16
dnf install -y pgvector_15       # PG 15
dnf install -y pgvector_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgvector   # PG 18
apt install -y postgresql-17-pgvector   # PG 17
apt install -y postgresql-16-pgvector   # PG 16
apt install -y postgresql-15-pgvector   # PG 15
apt install -y postgresql-14-pgvector   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION vector;
```

## 用法

来源：

- [pgvector v0.8.5 README](https://github.com/pgvector/pgvector/blob/v0.8.5/README.md)
- [pgvector v0.8.5 CHANGELOG](https://github.com/pgvector/pgvector/blob/v0.8.5/CHANGELOG.md)
- [Changes from v0.8.4 to v0.8.5](https://github.com/pgvector/pgvector/compare/v0.8.4...v0.8.5)

`pgvector` 在 PostgreSQL 内部提供了向量相似性搜索功能。扩展名称为 `vector`，而 Pigsty 将其打包为 `pgvector`。它支持精确搜索、使用 HNSW 和 IVFFlat 索引的近似最近邻搜索以及多种向量表示形式，包括密集型、半精度、二进制和稀疏嵌入。

版本 `0.8.5` 在构建小表上的 IVFFlat 索引时减少了内存使用。它保留了当前 README 中记录的 0.8.x HNSW 迭代扫描和维护改进。

### 创建和查询向量

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE items (
  id bigserial PRIMARY KEY,
  embedding vector(3)
);

INSERT INTO items (embedding)
VALUES ('[1,2,3]'), ('[4,5,6]');

SELECT *
FROM items
ORDER BY embedding <-> '[3,1,2]'
LIMIT 5;
```

常用的距离操作符：

- `<->` 表示 L2 距离
- `<#>` 表示负内积
- `<=>` 表示余弦距离
- `<+>` 表示 L1 距离
- `<~>` 表示二进制向量的汉明距离
- `<%>` 表示二进制向量的 Jaccard 距离

由于 PostgreSQL 索引扫描顺序为升序，`<#>` 返回的是负内积；在显示实际内积时需要乘以 `-1`。

### 向量类型

```sql
CREATE TABLE embeddings (
  id bigserial PRIMARY KEY,
  dense      vector(768),
  half_dense halfvec(768),
  binary_sig bit(1024),
  sparse     sparsevec(100000)
);
```

`vector` 是标准的单精度类型。使用 `halfvec` 可以减少存储和内存压力，使用 `bit` 用于二进制签名，使用 `sparsevec` 用于高维稀疏向量。

可以对向量列使用聚合函数如 `avg()` 和 `sum()`：

```sql
SELECT avg(embedding) FROM items;
```

### HNSW 索引

HNSW 提供了速度和召回率之间的强权衡，并不需要训练步骤。

```sql
CREATE INDEX items_embedding_hnsw
ON items USING hnsw (embedding vector_l2_ops);

SET hnsw.ef_search = 100;

SELECT *
FROM items
ORDER BY embedding <-> '[3,1,2]'
LIMIT 10;
```

选择与距离匹配的操作符类：

```sql
CREATE INDEX ON items USING hnsw (embedding vector_ip_ops);
CREATE INDEX ON items USING hnsw (embedding vector_cosine_ops);
CREATE INDEX ON items USING hnsw (embedding vector_l1_ops);
CREATE INDEX ON embeddings USING hnsw (half_dense halfvec_l2_ops);
CREATE INDEX ON embeddings USING hnsw (sparse sparsevec_l2_ops);
CREATE INDEX ON embeddings USING hnsw (binary_sig bit_hamming_ops);
```

有用的调优设置包括 `hnsw.ef_search`、`hnsw.iterative_scan`、`hnsw.max_scan_tuples` 和 `hnsw.scan_mem_multiplier`。

### IVFFlat 索引

IVFFlat 在索引创建前需要代表性的数据，因为它在构建时会训练聚类列表。

```sql
CREATE INDEX items_embedding_ivfflat
ON items USING ivfflat (embedding vector_l2_ops)
WITH (lists = 100);

SET ivfflat.probes = 10;

SELECT *
FROM items
ORDER BY embedding <-> '[3,1,2]'
LIMIT 10;
```

增加 `lists` 以适应更大的表，并通过增加 `ivfflat.probes` 来提高召回率。对于过滤查询，请测试是否使用精确的 btree 过滤、部分向量索引或分区可以提供更好的计划。

### 混合搜索

普通的 PostgreSQL 过滤器可以与向量排序结合使用：

```sql
CREATE INDEX ON items (tenant_id);

SELECT *
FROM items
WHERE tenant_id = 42
ORDER BY embedding <=> '[0.1,0.2,0.3]'
LIMIT 20;
```

对于混合搜索，可以将 `pgvector` 与 PostgreSQL 全文搜索、三元组搜索或外部排名表达式结合起来：

```sql
SELECT id,
       ts_rank_cd(text_tsv, plainto_tsquery('database')) AS text_score,
       1 - (embedding <=> '[0.1,0.2,0.3]') AS vector_score
FROM docs
WHERE text_tsv @@ plainto_tsquery('database')
ORDER BY vector_score DESC
LIMIT 20;
```

### 维护

```sql
VACUUM items;
REINDEX INDEX CONCURRENTLY items_embedding_hnsw;
ANALYZE items;
```

HNSW 索引可能很大且构建成本高昂。使用 `maintenance_work_mem` 进行构建，监控构建通知，并在索引膨胀或召回漂移时安排 `REINDEX`。

### 注意事项

- 版本 `0.8.5` 是一个专注于 IVFFlat 构建内存的补丁；它不会改变 SQL 查询表面。当数据库报告较旧的 SQL 版本时，在安装新的扩展文件后运行 `ALTER EXTENSION vector UPDATE`。
- 使用与查询操作符匹配的操作符类。余弦索引不会加速 L2 `ORDER BY` 操作。
- 近似索引以牺牲精确召回率为代价换取速度。请使用代表性数据和查询过滤器验证召回率。
- 在加载数据后构建 IVFFlat 索引。如果数据分布发生显著变化，请重新构建索引。
- 当使用 HNSW 并且存在大量写入和 vacuum 活动时，保持 pgvector 更新；`0.8.x` 系列包括重要的 HNSW 维护修复。

这里仍采用负内积操作符；版本对比基线是 `0.8.4`。
