---
title: "pg_tiktoken_c"
linkTitle: "pg_tiktoken_c"
description: "使用 C 实现的 PostgreSQL 高性能 tiktoken BPE 分词扩展"
weight: 1880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/relytcloud/pg_tiktoken_c">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">relytcloud/pg_tiktoken_c</div>
    <div class="ext-card__desc">https://github.com/relytcloud/pg_tiktoken_c</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tiktoken_c-1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tiktoken_c-1.1.tar.gz</div>
    <div class="ext-card__desc">pg_tiktoken_c-1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tiktoken_c`**](/ext/e/pg_tiktoken_c) | `1.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1880  | [**`pg_tiktoken_c`**](/ext/e/pg_tiktoken_c) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg_summarize`](/ext/e/pg_summarize) [`vectorize`](/ext/e/vectorize) [`pgml`](/ext/e/pgml) [`pg4ml`](/ext/e/pg4ml) [`pg_graphql`](/ext/e/pg_graphql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Built from upstream main snapshot fa2957b; bundles five vocabularies and includes DESTDIR and correctness patches. Upstream README declares Apache-2.0, but the pinned snapshot omits the referenced LICENSE file.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tiktoken_c` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tiktoken_c_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tiktoken-c` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
@ el8.x86_64 18 pg_tiktoken_c_18 pg_tiktoken_c_18-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tiktoken_c_18-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tiktoken_c_18 pg_tiktoken_c_18-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tiktoken_c_18-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tiktoken_c_18 pg_tiktoken_c_18-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tiktoken_c_18-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tiktoken_c_18 pg_tiktoken_c_18-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tiktoken_c_18-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tiktoken_c_18 pg_tiktoken_c_18-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tiktoken_c_18-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tiktoken_c_18 pg_tiktoken_c_18-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tiktoken_c_18-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-tiktoken-c postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-18-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_tiktoken_c_17 pg_tiktoken_c_17-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tiktoken_c_17-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tiktoken_c_17 pg_tiktoken_c_17-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tiktoken_c_17-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tiktoken_c_17 pg_tiktoken_c_17-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tiktoken_c_17-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tiktoken_c_17 pg_tiktoken_c_17-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tiktoken_c_17-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tiktoken_c_17 pg_tiktoken_c_17-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tiktoken_c_17-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tiktoken_c_17 pg_tiktoken_c_17-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tiktoken_c_17-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-tiktoken-c postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-17-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_tiktoken_c_16 pg_tiktoken_c_16-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tiktoken_c_16-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tiktoken_c_16 pg_tiktoken_c_16-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tiktoken_c_16-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tiktoken_c_16 pg_tiktoken_c_16-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tiktoken_c_16-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tiktoken_c_16 pg_tiktoken_c_16-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tiktoken_c_16-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tiktoken_c_16 pg_tiktoken_c_16-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tiktoken_c_16-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tiktoken_c_16 pg_tiktoken_c_16-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tiktoken_c_16-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-tiktoken-c postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-16-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_tiktoken_c_15 pg_tiktoken_c_15-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tiktoken_c_15-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tiktoken_c_15 pg_tiktoken_c_15-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tiktoken_c_15-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tiktoken_c_15 pg_tiktoken_c_15-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tiktoken_c_15-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tiktoken_c_15 pg_tiktoken_c_15-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tiktoken_c_15-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tiktoken_c_15 pg_tiktoken_c_15-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tiktoken_c_15-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tiktoken_c_15 pg_tiktoken_c_15-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tiktoken_c_15-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-tiktoken-c postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-15-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_tiktoken_c_14 pg_tiktoken_c_14-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tiktoken_c_14-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_tiktoken_c_14 pg_tiktoken_c_14-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tiktoken_c_14-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_tiktoken_c_14 pg_tiktoken_c_14-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tiktoken_c_14-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_tiktoken_c_14 pg_tiktoken_c_14-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tiktoken_c_14-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_tiktoken_c_14 pg_tiktoken_c_14-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tiktoken_c_14-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_tiktoken_c_14 pg_tiktoken_c_14-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tiktoken_c_14-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-tiktoken-c postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tiktoken-c/postgresql-14-pg-tiktoken-c_1.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tiktoken_c` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tiktoken_c         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tiktoken_c` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tiktoken_c;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tiktoken_c -v 18  # PG 18
pig ext install -y pg_tiktoken_c -v 17  # PG 17
pig ext install -y pg_tiktoken_c -v 16  # PG 16
pig ext install -y pg_tiktoken_c -v 15  # PG 15
pig ext install -y pg_tiktoken_c -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_tiktoken_c_18       # PG 18
dnf install -y pg_tiktoken_c_17       # PG 17
dnf install -y pg_tiktoken_c_16       # PG 16
dnf install -y pg_tiktoken_c_15       # PG 15
dnf install -y pg_tiktoken_c_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-tiktoken-c   # PG 18
apt install -y postgresql-17-pg-tiktoken-c   # PG 17
apt install -y postgresql-16-pg-tiktoken-c   # PG 16
apt install -y postgresql-15-pg-tiktoken-c   # PG 15
apt install -y postgresql-14-pg-tiktoken-c   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_tiktoken_c;
```

## 用法

来源：

- [pg_tiktoken_c 包装版本的 README](https://github.com/relytcloud/pg_tiktoken_c/blob/fa2957b6ece483322f4c4ce0c374b3b77e22b892/README.md)
- [1.1 版本 SQL API](https://github.com/relytcloud/pg_tiktoken_c/blob/fa2957b6ece483322f4c4ce0c374b3b77e22b892/sql/pg_tiktoken_c--1.1.sql)
- [扩展控制文件](https://github.com/relytcloud/pg_tiktoken_c/blob/fa2957b6ece483322f4c4ce0c374b3b77e22b892/pg_tiktoken_c.control)
- [捆绑词汇数据](https://github.com/relytcloud/pg_tiktoken_c/tree/fa2957b6ece483322f4c4ce0c374b3b77e22b892/data)

pg_tiktoken_c 在 PostgreSQL 内部实现了与 OpenAI 兼容的 tiktoken 编码。使用它来计算或在存储文本附近生成令牌计数，并在嵌入或模型请求之前将文本分割为以令牌边界分隔的片段。

### 创建扩展

    CREATE EXTENSION pg_tiktoken_c;

实现依赖于构建时 PCRE2 10.30 或更高版本。它不需要 shared_preload_libraries；词汇数据按后端加载并缓存，当使用编码时。

### 编码和计数

    SELECT tiktoken_encode('cl100k_base', 'PostgreSQL 搜索');
    SELECT tiktoken_count('cl100k_base', 'PostgreSQL 搜索');

tiktoken_encode 返回一个 bigint 数组的令牌标识符。tiktoken_count 返回令牌计数，无需调用者保留令牌数组。

捆绑的选择器包括 cl100k_base、o200k_base、r50k_base、p50k_base 和 p50k_edit 以及由项目文档说明的别名。选择目标模型所需的编码而不是假设所有模型共享词汇表。

### 分割文本

以数组形式返回片段：

    SELECT chunk_text(
      '长文档文本',
      chunk_size => 512,
      chunk_overlap => 64,
      encoding => 'cl100k_base'
    );

或每行返回一个片段：

    SELECT *
    FROM chunk_text_table(
      '长文档文本',
      chunk_size => 512,
      chunk_overlap => 64,
      encoding => 'cl100k_base'
    );

chunk_text_table 返回 chunk_index、chunk 和 token_count。chunk_index 是零基索引。重叠会在相邻片段之间重复边界令牌，并且必须小于片段大小。

### 函数索引

- tiktoken_encode(selector, text) 返回 bigint[] 令牌标识符。
- tiktoken_count(selector, text) 返回 bigint 令牌计数。
- chunk_text(input_text, chunk_size, chunk_overlap default 0, encoding default cl100k_base) 返回 text[]。
- chunk_text_table(input_text, chunk_size, chunk_overlap default 0, encoding default cl100k_base) 每个片段返回一行，包含其索引和令牌计数。

SQL 函数声明为不可变且并行安全。因此，当所选词汇文件在每个服务器上一致部署时，它们可以用于生成表达式或并行计划。

### 运营注意事项

- 词元化是模型编码特定的。确认应用程序中的编码名称以及目标模型当前上下文限制。
- 计算或分割大文本会消耗后端 CPU 和内存；批量处理大型语料库并监控查询延迟。
- 后端本地缓存避免重复解析，但在涉及多个词汇表的会话中增加了内存使用量。
- 上游 README 的兼容性列表可能滞后于打包。直接测试具体的 pg_tiktoken_c 构建版本与目标 PostgreSQL 主要版本之间的兼容性，而不是从不同的二进制文件推断支持情况。
