---
title: "pg_tiktoken"
linkTitle: "pg_tiktoken"
description: "在PostgreSQL中计算OpenAI使用的Token数"
weight: 1870
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kelvich/pg_tiktoken">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kelvich/pg_tiktoken</div>
    <div class="ext-card__desc">https://github.com/kelvich/pg_tiktoken</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_tiktoken-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tiktoken-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_tiktoken-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tiktoken`**](/ext/e/pg_tiktoken) | `0.0.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1870  | [**`pg_tiktoken`**](/ext/e/pg_tiktoken) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`vectorize`](/ext/e/vectorize) [`pg_summarize`](/ext/e/pg_summarize) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_graphql`](/ext/e/pg_graphql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tiktoken` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tiktoken_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tiktoken` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_tiktoken_18 pg_tiktoken_18-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tiktoken_18-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tiktoken_18 pg_tiktoken_18-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tiktoken_18-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tiktoken_18 pg_tiktoken_18-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tiktoken_18-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tiktoken_18 pg_tiktoken_18-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tiktoken_18-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tiktoken_18 pg_tiktoken_18-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tiktoken_18-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tiktoken_18 pg_tiktoken_18-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tiktoken_18-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tiktoken postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-18-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_tiktoken_17 pg_tiktoken_17-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tiktoken_17-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tiktoken_17 pg_tiktoken_17-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tiktoken_17-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tiktoken_17 pg_tiktoken_17-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tiktoken_17-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tiktoken_17 pg_tiktoken_17-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tiktoken_17-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tiktoken_17 pg_tiktoken_17-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tiktoken_17-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tiktoken_17 pg_tiktoken_17-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tiktoken_17-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tiktoken postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-17-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_tiktoken_16 pg_tiktoken_16-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tiktoken_16-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tiktoken_16 pg_tiktoken_16-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tiktoken_16-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tiktoken_16 pg_tiktoken_16-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tiktoken_16-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tiktoken_16 pg_tiktoken_16-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tiktoken_16-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tiktoken_16 pg_tiktoken_16-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tiktoken_16-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tiktoken_16 pg_tiktoken_16-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tiktoken_16-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tiktoken postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-16-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_tiktoken_15 pg_tiktoken_15-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tiktoken_15-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tiktoken_15 pg_tiktoken_15-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tiktoken_15-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tiktoken_15 pg_tiktoken_15-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tiktoken_15-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tiktoken_15 pg_tiktoken_15-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tiktoken_15-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tiktoken_15 pg_tiktoken_15-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tiktoken_15-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tiktoken_15 pg_tiktoken_15-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tiktoken_15-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tiktoken postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-15-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_tiktoken_14 pg_tiktoken_14-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tiktoken_14-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_tiktoken_14 pg_tiktoken_14-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tiktoken_14-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_tiktoken_14 pg_tiktoken_14-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 1.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tiktoken_14-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_tiktoken_14 pg_tiktoken_14-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tiktoken_14-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_tiktoken_14 pg_tiktoken_14-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 1.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tiktoken_14-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_tiktoken_14 pg_tiktoken_14-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 1.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tiktoken_14-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 1.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 1.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tiktoken postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 1.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-tiktoken/postgresql-14-pg-tiktoken_0.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tiktoken` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tiktoken         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tiktoken` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tiktoken;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tiktoken -v 18  # PG 18
pig ext install -y pg_tiktoken -v 17  # PG 17
pig ext install -y pg_tiktoken -v 16  # PG 16
pig ext install -y pg_tiktoken -v 15  # PG 15
pig ext install -y pg_tiktoken -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_tiktoken_18       # PG 18
dnf install -y pg_tiktoken_17       # PG 17
dnf install -y pg_tiktoken_16       # PG 16
dnf install -y pg_tiktoken_15       # PG 15
dnf install -y pg_tiktoken_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-tiktoken   # PG 18
apt install -y postgresql-17-pg-tiktoken   # PG 17
apt install -y postgresql-16-pg-tiktoken   # PG 16
apt install -y postgresql-15-pg-tiktoken   # PG 15
apt install -y postgresql-14-pg-tiktoken   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_tiktoken;
```



## 用法

> [pg_tiktoken](https://github.com/kelvich/pg_tiktoken)：用于 PostgreSQL 中 OpenAI 模型的 tiktoken 分词器。
> 来源：[README.md](https://raw.githubusercontent.com/kelvich/pg_tiktoken/main/README.md)

`pg_tiktoken` 是一个 PostgreSQL 扩展，使用 OpenAI 的 [tiktoken](https://github.com/openai/tiktoken) 库提供输入分词功能。它允许你直接在 SQL 中计数和编码 token，这在处理 OpenAI 模型的输入长度限制时非常有用。


--------

### 函数

#### tiktoken_count

计算给定编码或模型的 token 数量：

```sql
SELECT tiktoken_count('p50k_edit', 'A long time ago in a galaxy far, far away');
 tiktoken_count
----------------
             11
(1 row)
```

#### tiktoken_encode

获取给定编码或模型的 token ID：

```sql
SELECT tiktoken_encode('cl100k_base', 'A long time ago in a galaxy far, far away');
                  tiktoken_encode
----------------------------------------------------
 {32,1317,892,4227,304,264,34261,3117,11,3117,3201}
(1 row)
```

`tiktoken_count` 和 `tiktoken_encode` 的第一个参数都可以接受编码名称或 OpenAI 模型名称。


--------

### 支持的模型

| 编码名称 | OpenAI 模型 |
|----------|-------------|
| `cl100k_base` | ChatGPT 模型, `text-embedding-ada-002` |
| `p50k_base` | 代码模型, `text-davinci-002`, `text-davinci-003` |
| `p50k_edit` | 编辑模型如 `text-davinci-edit-001`, `code-davinci-edit-001` |
| `r50k_base`（或 `gpt2`） | GPT-3 模型如 `davinci` |
