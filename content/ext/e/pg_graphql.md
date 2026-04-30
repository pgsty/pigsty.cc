---
title: "pg_graphql"
linkTitle: "pg_graphql"
description: "PG内的GraphQL支持"
weight: 2750
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/pg_graphql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/pg_graphql</div>
    <div class="ext-card__desc">https://github.com/supabase/pg_graphql</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_graphql-1.5.12.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_graphql-1.5.12.tar.gz</div>
    <div class="ext-card__desc">pg_graphql-1.5.12.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_graphql`**](/ext/e/pg_graphql) | `1.5.12` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2750  | [**`pg_graphql`**](/ext/e/pg_graphql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `graphql` |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_net`](/ext/e/pg_net) [`http`](/ext/e/http) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`wrappers`](/ext/e/wrappers) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> not an official release by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.12` | {{< pgvers "18,17,16,15,14" >}} | `pg_graphql` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.12` | {{< pgvers "18,17,16,15,14" >}} | `pg_graphql_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.12` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-graphql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| el8.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| el9.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| el9.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| el10.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| el10.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| d12.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| d12.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| d13.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| d13.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| u22.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| u22.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| u24.x86_64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| u24.aarch64 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 | AVAIL PIGSTY 1.5.12 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_graphql_18 pg_graphql_18-1.5.12-1PIGSTY.el8.x86_64.rpm pigsty 1.5.12 871.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_graphql_18-1.5.12-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_graphql_18 pg_graphql_18-1.5.12-1PIGSTY.el8.aarch64.rpm pigsty 1.5.12 693.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_graphql_18-1.5.12-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_graphql_18 pg_graphql_18-1.5.12-1PIGSTY.el9.x86_64.rpm pigsty 1.5.12 880.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_graphql_18-1.5.12-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_graphql_18 pg_graphql_18-1.5.12-1PIGSTY.el9.aarch64.rpm pigsty 1.5.12 739.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_graphql_18-1.5.12-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_graphql_18 pg_graphql_18-1.5.12-1PIGSTY.el10.x86_64.rpm pigsty 1.5.12 880.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_graphql_18-1.5.12-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_graphql_18 pg_graphql_18-1.5.12-1PIGSTY.el10.aarch64.rpm pigsty 1.5.12 739.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_graphql_18-1.5.12-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb pigsty 1.5.12 727.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb pigsty 1.5.12 566.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb pigsty 1.5.12 728.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb pigsty 1.5.12 564.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb pigsty 1.5.12 803.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb pigsty 1.5.12 661.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb pigsty 1.5.12 795.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-graphql postgresql-18-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb pigsty 1.5.12 654.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-18-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_graphql_17 pg_graphql_17-1.5.12-1PIGSTY.el8.x86_64.rpm pigsty 1.5.12 872.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_graphql_17-1.5.12-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_graphql_17 pg_graphql_17-1.5.12-1PIGSTY.el8.aarch64.rpm pigsty 1.5.12 693.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_graphql_17-1.5.12-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_graphql_17 pg_graphql_17-1.5.12-1PIGSTY.el9.x86_64.rpm pigsty 1.5.12 881.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_graphql_17-1.5.12-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_graphql_17 pg_graphql_17-1.5.12-1PIGSTY.el9.aarch64.rpm pigsty 1.5.12 739.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_graphql_17-1.5.12-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_graphql_17 pg_graphql_17-1.5.12-1PIGSTY.el10.x86_64.rpm pigsty 1.5.12 879.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_graphql_17-1.5.12-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_graphql_17 pg_graphql_17-1.5.12-1PIGSTY.el10.aarch64.rpm pigsty 1.5.12 739.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_graphql_17-1.5.12-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb pigsty 1.5.12 728.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb pigsty 1.5.12 566.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb pigsty 1.5.12 728.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb pigsty 1.5.12 564.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb pigsty 1.5.12 803.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb pigsty 1.5.12 661.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb pigsty 1.5.12 795.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-graphql postgresql-17-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb pigsty 1.5.12 654.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-17-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_graphql_16 pg_graphql_16-1.5.12-1PIGSTY.el8.x86_64.rpm pigsty 1.5.12 871.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_graphql_16-1.5.12-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_graphql_16 pg_graphql_16-1.5.12-1PIGSTY.el8.aarch64.rpm pigsty 1.5.12 692.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_graphql_16-1.5.12-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_graphql_16 pg_graphql_16-1.5.12-1PIGSTY.el9.x86_64.rpm pigsty 1.5.12 880.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_graphql_16-1.5.12-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_graphql_16 pg_graphql_16-1.5.12-1PIGSTY.el9.aarch64.rpm pigsty 1.5.12 739.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_graphql_16-1.5.12-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_graphql_16 pg_graphql_16-1.5.12-1PIGSTY.el10.x86_64.rpm pigsty 1.5.12 880.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_graphql_16-1.5.12-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_graphql_16 pg_graphql_16-1.5.12-1PIGSTY.el10.aarch64.rpm pigsty 1.5.12 739.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_graphql_16-1.5.12-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb pigsty 1.5.12 728.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb pigsty 1.5.12 563.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb pigsty 1.5.12 727.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb pigsty 1.5.12 564.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb pigsty 1.5.12 803.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb pigsty 1.5.12 661.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb pigsty 1.5.12 795.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-graphql postgresql-16-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb pigsty 1.5.12 654.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-16-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_graphql_15 pg_graphql_15-1.5.12-1PIGSTY.el8.x86_64.rpm pigsty 1.5.12 871.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_graphql_15-1.5.12-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_graphql_15 pg_graphql_15-1.5.12-1PIGSTY.el8.aarch64.rpm pigsty 1.5.12 692.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_graphql_15-1.5.12-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_graphql_15 pg_graphql_15-1.5.12-1PIGSTY.el9.x86_64.rpm pigsty 1.5.12 879.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_graphql_15-1.5.12-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_graphql_15 pg_graphql_15-1.5.12-1PIGSTY.el9.aarch64.rpm pigsty 1.5.12 739.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_graphql_15-1.5.12-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_graphql_15 pg_graphql_15-1.5.12-1PIGSTY.el10.x86_64.rpm pigsty 1.5.12 879.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_graphql_15-1.5.12-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_graphql_15 pg_graphql_15-1.5.12-1PIGSTY.el10.aarch64.rpm pigsty 1.5.12 739.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_graphql_15-1.5.12-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb pigsty 1.5.12 728.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb pigsty 1.5.12 564.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb pigsty 1.5.12 728.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb pigsty 1.5.12 564.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb pigsty 1.5.12 803.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb pigsty 1.5.12 661.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb pigsty 1.5.12 798.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-graphql postgresql-15-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb pigsty 1.5.12 654.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-15-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_graphql_14 pg_graphql_14-1.5.12-1PIGSTY.el8.x86_64.rpm pigsty 1.5.12 871.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_graphql_14-1.5.12-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_graphql_14 pg_graphql_14-1.5.12-1PIGSTY.el8.aarch64.rpm pigsty 1.5.12 692.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_graphql_14-1.5.12-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_graphql_14 pg_graphql_14-1.5.12-1PIGSTY.el9.x86_64.rpm pigsty 1.5.12 879.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_graphql_14-1.5.12-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_graphql_14 pg_graphql_14-1.5.12-1PIGSTY.el9.aarch64.rpm pigsty 1.5.12 739.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_graphql_14-1.5.12-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_graphql_14 pg_graphql_14-1.5.12-1PIGSTY.el10.x86_64.rpm pigsty 1.5.12 880.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_graphql_14-1.5.12-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_graphql_14 pg_graphql_14-1.5.12-1PIGSTY.el10.aarch64.rpm pigsty 1.5.12 739.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_graphql_14-1.5.12-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb pigsty 1.5.12 728.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb pigsty 1.5.12 563.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb pigsty 1.5.12 728.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb pigsty 1.5.12 566.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb pigsty 1.5.12 802.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb pigsty 1.5.12 661.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb pigsty 1.5.12 796.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-graphql postgresql-14-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb pigsty 1.5.12 654.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-graphql/postgresql-14-pg-graphql_1.5.12-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_graphql` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_graphql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_graphql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_graphql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_graphql -v 18  # PG 18
pig ext install -y pg_graphql -v 17  # PG 17
pig ext install -y pg_graphql -v 16  # PG 16
pig ext install -y pg_graphql -v 15  # PG 15
pig ext install -y pg_graphql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_graphql_18       # PG 18
dnf install -y pg_graphql_17       # PG 17
dnf install -y pg_graphql_16       # PG 16
dnf install -y pg_graphql_15       # PG 15
dnf install -y pg_graphql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-graphql   # PG 18
apt install -y postgresql-17-pg-graphql   # PG 17
apt install -y postgresql-16-pg-graphql   # PG 16
apt install -y postgresql-15-pg-graphql   # PG 15
apt install -y postgresql-14-pg-graphql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_graphql;
```




## 用法

> [pg_graphql: 为数据库内置 GraphQL 支持](https://github.com/supabase/pg_graphql)

`pg_graphql` 从现有的 SQL 模式反射生成 GraphQL 模式，无需额外的服务器或中间件即可直接在 PostgreSQL 内部执行 GraphQL 查询。

### 模式反射

表、外键和枚举类型会自动映射为 GraphQL 类型：

```sql
CREATE TABLE account (
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL,
    created_at timestamp NOT NULL
);

CREATE TABLE blog (
    id serial PRIMARY KEY,
    owner_id integer NOT NULL REFERENCES account(id),
    name varchar(255) NOT NULL,
    description varchar(255)
);

CREATE TYPE blog_post_status AS ENUM ('PENDING', 'RELEASED');

CREATE TABLE blog_post (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    blog_id integer NOT NULL REFERENCES blog(id),
    title varchar(255) NOT NULL,
    body varchar(10000),
    status blog_post_status NOT NULL,
    created_at timestamp NOT NULL
);
```

此模式会自动生成 GraphQL 类型（`Account`、`Blog`、`BlogPost`），关系由外键推导而来。

### 命名转换

启用 snake_case 到 camelCase/PascalCase 的自动转换：

```sql
COMMENT ON SCHEMA public IS e'@graphql({"inflect_names": true})';
```

### 查询

通过 `graphql.resolve` 函数执行 GraphQL 查询：

```sql
SELECT graphql.resolve($$
    {
      accountCollection(first: 1) {
        edges {
          node {
            id
            email
            blogCollection {
              edges {
                node {
                  name
                  blogPostCollection(filter: { status: { eq: RELEASED } }) {
                    edges {
                      node {
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
$$);
```

### 功能特性

- 表查询以可分页集合的形式出现在根 `Query` 类型上
- 外键关系自动创建嵌套查询字段
- 变更操作支持批量插入、更新和删除
- 内置过滤、排序和分页功能
- 遵守 PostgreSQL 行级安全（RLS）策略
