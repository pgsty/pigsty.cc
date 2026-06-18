---
title: "pgmnemo"
linkTitle: "pgmnemo"
description: "面向 LLM 代理的 PostgreSQL 溯源向量记忆扩展"
weight: 1900
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgmnemo/pgmnemo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgmnemo/pgmnemo</div>
    <div class="ext-card__desc">https://github.com/pgmnemo/pgmnemo</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmnemo-0.8.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmnemo-0.8.3.tar.gz</div>
    <div class="ext-card__desc">pgmnemo-0.8.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmnemo`**](/ext/e/pgmnemo) | `0.8.3` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1900  | [**`pgmnemo`**](/ext/e/pgmnemo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `pgmnemo` |
{.ext-table}

| **相关扩展** | [`vector`](/ext/e/vector) [`vector`](/ext/e/vector) [`pg_search`](/ext/e/pg_search) [`pg_ai_query`](/ext/e/pg_ai_query) [`pg_later`](/ext/e/pg_later) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL-only extension; requires pgvector.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "14,15,16,17,18" >}} | `pgmnemo` | `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "14,15,16,17,18" >}} | `pgmnemo_$v` | `pgvector` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pgmnemo` | `pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u26.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u26.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
@ el8.x86_64 18 pgmnemo_18 pgmnemo_18-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 95.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_18-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmnemo_18 pgmnemo_18-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 95.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_18-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmnemo_18 pgmnemo_18-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_18-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmnemo_18 pgmnemo_18-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_18-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmnemo_18 pgmnemo_18-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 91.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_18-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmnemo_18 pgmnemo_18-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_18-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pgmnemo_17 pgmnemo_17-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 95.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_17-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmnemo_17 pgmnemo_17-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 95.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_17-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmnemo_17 pgmnemo_17-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_17-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmnemo_17 pgmnemo_17-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_17-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmnemo_17 pgmnemo_17-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 91.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_17-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmnemo_17 pgmnemo_17-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_17-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pgmnemo_16 pgmnemo_16-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 95.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_16-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmnemo_16 pgmnemo_16-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 95.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_16-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmnemo_16 pgmnemo_16-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_16-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmnemo_16 pgmnemo_16-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_16-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmnemo_16 pgmnemo_16-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 91.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_16-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmnemo_16 pgmnemo_16-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_16-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pgmnemo_15 pgmnemo_15-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 95.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_15-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmnemo_15 pgmnemo_15-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 95.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_15-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmnemo_15 pgmnemo_15-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_15-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmnemo_15 pgmnemo_15-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_15-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmnemo_15 pgmnemo_15-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 91.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_15-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmnemo_15 pgmnemo_15-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_15-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pgmnemo_14 pgmnemo_14-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 95.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_14-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmnemo_14 pgmnemo_14-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 95.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_14-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmnemo_14 pgmnemo_14-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 91.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_14-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmnemo_14 pgmnemo_14-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_14-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmnemo_14 pgmnemo_14-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 91.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_14-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmnemo_14 pgmnemo_14-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_14-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb pigsty 0.8.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb pigsty 0.8.3 83.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~noble_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb pigsty 0.8.3 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.8.3-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmnemo` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmnemo         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmnemo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmnemo;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmnemo -v 18  # PG 18
pig ext install -y pgmnemo -v 17  # PG 17
pig ext install -y pgmnemo -v 16  # PG 16
pig ext install -y pgmnemo -v 15  # PG 15
pig ext install -y pgmnemo -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmnemo_18       # PG 18
dnf install -y pgmnemo_17       # PG 17
dnf install -y pgmnemo_16       # PG 16
dnf install -y pgmnemo_15       # PG 15
dnf install -y pgmnemo_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmnemo   # PG 18
apt install -y postgresql-17-pgmnemo   # PG 17
apt install -y postgresql-16-pgmnemo   # PG 16
apt install -y postgresql-15-pgmnemo   # PG 15
apt install -y postgresql-14-pgmnemo   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmnemo CASCADE;  -- 依赖: vector
```

来源：[pgmnemo v0.8.3 README](https://github.com/pgmnemo/pgmnemo/blob/v0.8.3/README.md)、[Usage Guide](https://github.com/pgmnemo/pgmnemo/blob/v0.8.3/docs/USAGE.md)、[extension control file](https://github.com/pgmnemo/pgmnemo/blob/v0.8.3/extension/pgmnemo.control)、[SQL definition](https://github.com/pgmnemo/pgmnemo/blob/v0.8.3/extension/pgmnemo--0.8.3.sql)。

## 用法

`pgmnemo` 在 PostgreSQL 中保存带有来源门控的 agent 经验，并通过向量、BM25 风格文本、图边、JSONB 元数据和关系过滤进行检索。扩展控制文件要求 `vector`，因此在创建 `pgmnemo` 前必须先提供 `pgvector`。本地包元数据面向 PostgreSQL 14-18。

### 创建并摄入经验

```sql
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pgmnemo CASCADE;

SELECT pgmnemo.ingest(
  p_role        := 'developer',
  p_project_id  := 1,
  p_topic       := 'security',
  p_lesson_text := 'Rotate JWT secrets after any key-compromise incident.',
  p_importance  := 4,
  p_embedding   := NULL,
  p_commit_sha  := 'abc1234',
  p_metadata    := '{"source":"incident-runbook"}'::jsonb
);
```

`pgmnemo.ingest()` 是推荐的写入路径。它会在提供 embedding 时验证其 1024 维度，在存在来源信息时把行标记为已验证，并应用来源门控。

### 来源门控

```sql
SHOW pgmnemo.gate_strict;

SET pgmnemo.gate_strict = 'warn';
SET pgmnemo.gate_strict = 'enforce';
```

`pgmnemo.gate_strict` 接受 `enforce`、`warn` 或 `off`。在默认强制模式下，如果 `p_commit_sha` 和 `p_artifact_hash` 同时为 NULL，插入会失败。`pgmnemo.include_unverified` 是独立设置：它控制未验证行是否可参与 recall，而不是控制是否允许写入。

### 召回

```sql
-- Text-only recall.
SELECT topic, lesson_text, score
FROM pgmnemo.recall_lessons(
  NULL::vector(1024),
  5,
  'developer',
  1,
  'JWT secret rotation'
);

-- Hybrid vector and text recall.
SELECT lesson_id, topic, score, vec_score, bm25_score, rrf_score
FROM pgmnemo.recall_hybrid(
  '<1024-dimensional vector literal>'::vector(1024),
  'JWT rotation key compromise',
  10,
  'developer',
  1
);
```

`recall_lessons()` 中的混合路由要求 `pgmnemo.disable_hybrid` 关闭、`query_text` 非空，且 embedding 非 NULL。如果需要显式诊断分数，可直接使用 `recall_hybrid()`。

### 导航与扩展

```sql
SELECT *
FROM pgmnemo.navigate_locate(
  NULL::vector(1024),
  'JWT rotation',
  10,
  'developer',
  1,
  '{"topic":"security"}'::jsonb,
  2000
);

SELECT *
FROM pgmnemo.navigate_expand(
  ARRAY[1001, 1002]::bigint[],
  include_edges := true
);
```

`navigate_locate()` 会在字符预算内返回排序后的 lesson ID 和短预览。调用方选择值得展开的 ID 后，`navigate_expand()` 会取回选中的完整经验，并可选地带上图邻居。

### 边与结果学习

```sql
SELECT pgmnemo.add_edge(1001, 1002, 'CAUSED_BY', 0.85, '{"run_id":7320}'::jsonb);

SELECT pgmnemo.reinforce(1001, 'success');
SELECT pgmnemo.reinforce(1002, 'failure');
```

`pgmnemo.add_edge()` 是维护经验关系的幂等辅助函数。`reinforce()` 会根据观察到的结果调整置信度，并影响后续匹配置信度。

### 维护与 GUC

```sql
SELECT * FROM pgmnemo.stats();

SELECT pgmnemo.reembed(
  p_lesson_id  := 1001,
  p_new_vector := '<1024-dimensional vector literal>'::vector(1024)
);

SELECT pgmnemo.recompute_content(
  p_lesson_id       := 1001,
  p_new_lesson_text := 'Rotate JWT secrets within 24 hours after compromise.'
);
```

常用设置包括 `pgmnemo.gate_strict`、`pgmnemo.include_unverified`、`pgmnemo.ef_search`、`pgmnemo.disable_hybrid`、`pgmnemo.recency_weight`、`pgmnemo.importance_weight`、`pgmnemo.graph_proximity_weight`、`pgmnemo.temporal_boost` 和 `pgmnemo.max_query_text_chars`。
