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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmnemo-0.12.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmnemo-0.12.1.tar.gz</div>
    <div class="ext-card__desc">pgmnemo-0.12.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmnemo`**](/ext/e/pgmnemo) | `0.12.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
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
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.12.1` | {{< pgvers "14,15,16,17,18" >}} | `pgmnemo` | `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.12.1` | {{< pgvers "14,15,16,17,18" >}} | `pgmnemo_$v` | `pgvector` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.12.1` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pgmnemo` | `pgvector` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 | AVAIL PIGSTY 0.12.1 1 |
@ el8.x86_64 18 pgmnemo_18 pgmnemo_18-0.12.1-1PIGSTY.el8.x86_64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_18-0.12.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmnemo_18 pgmnemo_18-0.12.1-1PIGSTY.el8.aarch64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_18-0.12.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmnemo_18 pgmnemo_18-0.12.1-1PIGSTY.el9.x86_64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_18-0.12.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmnemo_18 pgmnemo_18-0.12.1-1PIGSTY.el9.aarch64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_18-0.12.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmnemo_18 pgmnemo_18-0.12.1-1PIGSTY.el10.x86_64.rpm pigsty 0.12.1 134.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_18-0.12.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmnemo_18 pgmnemo_18-0.12.1-1PIGSTY.el10.aarch64.rpm pigsty 0.12.1 133.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_18-0.12.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pgmnemo postgresql-18-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-18-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pgmnemo_17 pgmnemo_17-0.12.1-1PIGSTY.el8.x86_64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_17-0.12.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmnemo_17 pgmnemo_17-0.12.1-1PIGSTY.el8.aarch64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_17-0.12.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmnemo_17 pgmnemo_17-0.12.1-1PIGSTY.el9.x86_64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_17-0.12.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmnemo_17 pgmnemo_17-0.12.1-1PIGSTY.el9.aarch64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_17-0.12.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmnemo_17 pgmnemo_17-0.12.1-1PIGSTY.el10.x86_64.rpm pigsty 0.12.1 134.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_17-0.12.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmnemo_17 pgmnemo_17-0.12.1-1PIGSTY.el10.aarch64.rpm pigsty 0.12.1 133.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_17-0.12.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pgmnemo postgresql-17-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-17-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pgmnemo_16 pgmnemo_16-0.12.1-1PIGSTY.el8.x86_64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_16-0.12.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmnemo_16 pgmnemo_16-0.12.1-1PIGSTY.el8.aarch64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_16-0.12.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmnemo_16 pgmnemo_16-0.12.1-1PIGSTY.el9.x86_64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_16-0.12.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmnemo_16 pgmnemo_16-0.12.1-1PIGSTY.el9.aarch64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_16-0.12.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmnemo_16 pgmnemo_16-0.12.1-1PIGSTY.el10.x86_64.rpm pigsty 0.12.1 134.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_16-0.12.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmnemo_16 pgmnemo_16-0.12.1-1PIGSTY.el10.aarch64.rpm pigsty 0.12.1 133.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_16-0.12.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pgmnemo postgresql-16-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-16-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pgmnemo_15 pgmnemo_15-0.12.1-1PIGSTY.el8.x86_64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_15-0.12.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmnemo_15 pgmnemo_15-0.12.1-1PIGSTY.el8.aarch64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_15-0.12.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmnemo_15 pgmnemo_15-0.12.1-1PIGSTY.el9.x86_64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_15-0.12.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmnemo_15 pgmnemo_15-0.12.1-1PIGSTY.el9.aarch64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_15-0.12.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmnemo_15 pgmnemo_15-0.12.1-1PIGSTY.el10.x86_64.rpm pigsty 0.12.1 134.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_15-0.12.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmnemo_15 pgmnemo_15-0.12.1-1PIGSTY.el10.aarch64.rpm pigsty 0.12.1 133.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_15-0.12.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pgmnemo postgresql-15-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-15-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pgmnemo_14 pgmnemo_14-0.12.1-1PIGSTY.el8.x86_64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmnemo_14-0.12.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmnemo_14 pgmnemo_14-0.12.1-1PIGSTY.el8.aarch64.rpm pigsty 0.12.1 158.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmnemo_14-0.12.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmnemo_14 pgmnemo_14-0.12.1-1PIGSTY.el9.x86_64.rpm pigsty 0.12.1 133.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmnemo_14-0.12.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmnemo_14 pgmnemo_14-0.12.1-1PIGSTY.el9.aarch64.rpm pigsty 0.12.1 133.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmnemo_14-0.12.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmnemo_14 pgmnemo_14-0.12.1-1PIGSTY.el10.x86_64.rpm pigsty 0.12.1 134.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmnemo_14-0.12.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmnemo_14 pgmnemo_14-0.12.1-1PIGSTY.el10.aarch64.rpm pigsty 0.12.1 133.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmnemo_14-0.12.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb pigsty 0.12.1 124.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb pigsty 0.12.1 125.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~noble_all.deb pigsty 0.12.1 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pgmnemo postgresql-14-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb pigsty 0.12.1 124.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmnemo/postgresql-14-pgmnemo_0.12.1-1PIGSTY~resolute_all.deb
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




## 用法

来源：

- [PGXN pgmnemo 0.12.1](https://pgxn.org/dist/pgmnemo/0.12.1/)
- [pgmnemo README](https://github.com/pgmnemo/pgmnemo/blob/v0.12.1/README.md)
- [pgmnemo CHANGELOG](https://github.com/pgmnemo/pgmnemo/blob/v0.12.1/CHANGELOG.md)
- [pgmnemo control file](https://github.com/pgmnemo/pgmnemo/blob/v0.12.1/extension/pgmnemo.control)

`pgmnemo` 在 PostgreSQL 中存储 agent memory，并通过一个多模态计划结合 pgvector HNSW 搜索、BM25 风格文本匹配、图边邻近度、JSONB 元数据过滤、时间过滤和 outcome confidence 进行检索。它是 SQL-only 扩展，依赖 `vector`，安装到 `pgmnemo` schema；v0.12.1 control 文件中标记为 trusted，且不需要 superuser 权限。

v0.12.1 保留 v0.12.0 的 typed write API，并调整 `guard_no_test_project()`：项目 ID 下限检查改为通过 `pgmnemo.test_project_floor` 显式开启；默认值 `0` 表示禁用该检查。

### 安装

```sql
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pgmnemo CASCADE;

SELECT pgmnemo.version();
SELECT * FROM pgmnemo.stats();
```

### 摄入 Lessons

```sql
SELECT pgmnemo.ingest(
  p_role        := 'developer',
  p_project_id  := 1,
  p_topic       := 'security',
  p_lesson_text := 'Rotate JWT signing keys after a key-compromise incident.',
  p_importance  := 4,
  p_embedding   := NULL,
  p_commit_sha  := 'abc1234',
  p_metadata    := '{"source":"incident-runbook"}'::jsonb
);
```

`pgmnemo.ingest()` 是基础写入路径。它会应用 provenance gate，在提供 embedding 时校验 1024 维度，按 `pgmnemo.max_query_text_chars` 截断过长 lesson 文本，并在存在来源信息时写入 `verified_at`。

### Provenance Gate

```sql
SHOW pgmnemo.gate_strict;

SET pgmnemo.gate_strict = 'enforce';
SET pgmnemo.gate_strict = 'warn';
SET pgmnemo.gate_strict = 'off';
```

当 `pgmnemo.gate_strict = 'enforce'` 时，缺少 `commit_sha` 和 `artifact_hash` 的写入会被拒绝。`warn` 会接受写入但产生审计警告，`off` 则关闭 gate。

v0.12.1 的 test-project guard 需要显式开启：

```sql
SHOW pgmnemo.test_project_floor;  -- default 0
SET pgmnemo.test_project_floor = '1000000';
```

默认 `0` 表示禁用生产项目下限检查。测试框架如果保留低 project ID，可设置为正数。

### 召回

```sql
SELECT lesson_id, topic, lesson_text, score
FROM pgmnemo.recall_fast(
  '<1024-dimensional vector literal>'::vector(1024),
  10,
  'developer',
  1,
  'dag-2026-abc',
  ARRAY['note', 'fact']
);

SELECT lesson_id, topic, score, vec_score, bm25_score, rrf_score, match_confidence
FROM pgmnemo.recall_hybrid(
  '<1024-dimensional vector literal>'::vector(1024),
  'JWT rotation key compromise',
  10,
  'developer',
  1,
  0.4,
  0.4,
  60,
  'dag-2026-abc',
  ARRAY['note', 'fact']
);
```

当同时提供文本和 embedding，且 `pgmnemo.disable_hybrid` 为 false 时，`recall_lessons()` 会路由到 hybrid recall。`exclude_dag_id` 用于避免召回同一 workflow run 产生的记录，`p_content_types` 则过滤 typed memories。

召回函数默认会更新 `last_recalled_at` 并递增 `recall_count`。只读分析时可以关闭该副作用：

```sql
SET pgmnemo.track_recall_recency = 'off';
```

### Locate 与 Expand

```sql
SELECT *
FROM pgmnemo.navigate_locate(
  NULL::vector(1024),
  'JWT rotation',
  2000,
  '{"topic":"security"}'::jsonb,
  1
);

SELECT *
FROM pgmnemo.navigate_locate_dispatch(
  query_text            := 'JWT rotation',
  content_type_dispatch := 'entity',
  project_id_filter     := 1,
  token_budget_chars    := 2000
);

SELECT *
FROM pgmnemo.navigate_expand_typed(
  ARRAY[1001, 1002]::bigint[],
  graph_expand_depth := 1,
  relation_types     := ARRAY['CAUSED_BY', 'DERIVED_FROM']
);
```

用 `navigate_locate()` 在字符预算内找候选 ID，再用 expand 函数只获取被选中 ID 的完整内容和图邻居。

### Typed Writes

```sql
SELECT pgmnemo.canonical_slug('concept', 'JWT Rotation');

SELECT *
FROM pgmnemo.remember_fact(
  p_role            := 'developer',
  p_entity_key      := 'concept:jwt_rotation',
  p_property        := 'runbook',
  p_value           := 'Rotate signing secrets within 24 hours after compromise.',
  p_confidence      := 0.82,
  p_has_contact_pii := false,
  p_source_type     := 'agent_authored',
  p_project_id      := 1,
  p_commit_sha      := 'abc1234'
);

SELECT pgmnemo.remember_event(
  p_role        := 'developer',
  p_entity_key  := 'concept:jwt_rotation',
  p_event_label := 'incident_response',
  p_event_body  := 'Rotation procedure validated during the July drill.',
  p_project_id  := 1,
  p_commit_sha  := 'abc1234'
);

SELECT pgmnemo.remember_relation(
  p_role          := 'developer',
  p_from_key      := 'concept:jwt_rotation',
  p_to_key        := 'concept:key_compromise',
  p_relation_type := 'MITIGATES',
  p_project_id    := 1,
  p_commit_sha    := 'abc1234'
);
```

`remember_fact()` 会替换同一 entity/property 的旧 active fact，`remember_event()` 是 append-only，`remember_relation()` 写入关系记忆和图边。

### 图边、强化与维护

```sql
SELECT pgmnemo.add_edge(1001, 1002, 'CAUSED_BY', 0.85, '{"run_id":7320}'::jsonb);

SELECT pgmnemo.reinforce(1001, 'success');
SELECT pgmnemo.reinforce(ARRAY[1001, 1002]::bigint[], 'failure');

SELECT pgmnemo.reembed(1001, '<1024-dimensional vector literal>'::vector(1024));
SELECT pgmnemo.recompute_content(1001, 'Updated lesson text.');
```

常用设置包括 `pgmnemo.gate_strict`、`pgmnemo.include_unverified`、`pgmnemo.ef_search`、`pgmnemo.disable_hybrid`、`pgmnemo.recency_weight`、`pgmnemo.importance_weight`、`pgmnemo.graph_proximity_weight`、`pgmnemo.temporal_boost`、`pgmnemo.confidence_boost_weight`、`pgmnemo.track_recall_recency`、`pgmnemo.max_query_text_chars`、`pgmnemo.tenant_id` 和 `pgmnemo.test_project_floor`。

### 注意事项

- PGXN 元数据声明 `pgmnemo` 依赖 `vector >= 0.7.0`。
- 当前 SQL 定义中的 embedding 预期为 1024 维。
- 默认 provenance gate 是有意设计。迁移旧 memory 行时优先使用 `warn`，不要直接长期使用 `off`。
- 召回函数可能写入 recency 元数据；只读诊断时应关闭 `pgmnemo.track_recall_recency`。
