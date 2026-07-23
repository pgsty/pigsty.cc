---
title: "pg_jieba"
linkTitle: "pg_jieba"
description: "基于 cppjieba 的中文全文检索分词器"
weight: 2240
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jaiminpan/pg_jieba">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jaiminpan/pg_jieba</div>
    <div class="ext-card__desc">https://github.com/jaiminpan/pg_jieba</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_jieba-2.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_jieba-2.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_jieba-2.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_jieba`**](/ext/e/pg_jieba) | `1.1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license bsd3clause" href="/ext/license#bsd3clause">BSD-3-Clause</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2240  | [**`pg_jieba`**](/ext/e/pg_jieba) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cjk_parser`](/ext/e/pg_cjk_parser) [`zhparser`](/ext/e/zhparser) [`pg_bigm`](/ext/e/pg_bigm) [`pgroonga`](/ext/e/pgroonga) [`pg_tokenizer`](/ext/e/pg_tokenizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package 2.0.1 ships extension version 1.1.0, vendors cppjieba commit 45809955, and fixes the LexDescr terminator allocation.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_jieba` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_jieba_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-jieba` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 | AVAIL PIGSTY 2.0.1 1 |
@ el8.x86_64 18 pg_jieba_18 pg_jieba_18-2.0.1-1PIGSTY.el8.x86_64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jieba_18-2.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_jieba_18 pg_jieba_18-2.0.1-1PIGSTY.el8.aarch64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jieba_18-2.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_jieba_18 pg_jieba_18-2.0.1-1PIGSTY.el9.x86_64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jieba_18-2.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_jieba_18 pg_jieba_18-2.0.1-1PIGSTY.el9.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jieba_18-2.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_jieba_18 pg_jieba_18-2.0.1-1PIGSTY.el10.x86_64.rpm pigsty 2.0.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jieba_18-2.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_jieba_18 pg_jieba_18-2.0.1-1PIGSTY.el10.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jieba_18-2.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-jieba postgresql-18-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-18-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_jieba_17 pg_jieba_17-2.0.1-1PIGSTY.el8.x86_64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jieba_17-2.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_jieba_17 pg_jieba_17-2.0.1-1PIGSTY.el8.aarch64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jieba_17-2.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_jieba_17 pg_jieba_17-2.0.1-1PIGSTY.el9.x86_64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jieba_17-2.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_jieba_17 pg_jieba_17-2.0.1-1PIGSTY.el9.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jieba_17-2.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_jieba_17 pg_jieba_17-2.0.1-1PIGSTY.el10.x86_64.rpm pigsty 2.0.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jieba_17-2.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_jieba_17 pg_jieba_17-2.0.1-1PIGSTY.el10.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jieba_17-2.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-jieba postgresql-17-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-17-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_jieba_16 pg_jieba_16-2.0.1-1PIGSTY.el8.x86_64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jieba_16-2.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_jieba_16 pg_jieba_16-2.0.1-1PIGSTY.el8.aarch64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jieba_16-2.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_jieba_16 pg_jieba_16-2.0.1-1PIGSTY.el9.x86_64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jieba_16-2.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_jieba_16 pg_jieba_16-2.0.1-1PIGSTY.el9.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jieba_16-2.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_jieba_16 pg_jieba_16-2.0.1-1PIGSTY.el10.x86_64.rpm pigsty 2.0.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jieba_16-2.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_jieba_16 pg_jieba_16-2.0.1-1PIGSTY.el10.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jieba_16-2.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-jieba postgresql-16-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-16-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_jieba_15 pg_jieba_15-2.0.1-1PIGSTY.el8.x86_64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jieba_15-2.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_jieba_15 pg_jieba_15-2.0.1-1PIGSTY.el8.aarch64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jieba_15-2.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_jieba_15 pg_jieba_15-2.0.1-1PIGSTY.el9.x86_64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jieba_15-2.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_jieba_15 pg_jieba_15-2.0.1-1PIGSTY.el9.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jieba_15-2.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_jieba_15 pg_jieba_15-2.0.1-1PIGSTY.el10.x86_64.rpm pigsty 2.0.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jieba_15-2.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_jieba_15 pg_jieba_15-2.0.1-1PIGSTY.el10.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jieba_15-2.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-jieba postgresql-15-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-15-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_jieba_14 pg_jieba_14-2.0.1-1PIGSTY.el8.x86_64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jieba_14-2.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_jieba_14 pg_jieba_14-2.0.1-1PIGSTY.el8.aarch64.rpm pigsty 2.0.1 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jieba_14-2.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_jieba_14 pg_jieba_14-2.0.1-1PIGSTY.el9.x86_64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jieba_14-2.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_jieba_14 pg_jieba_14-2.0.1-1PIGSTY.el9.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jieba_14-2.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_jieba_14 pg_jieba_14-2.0.1-1PIGSTY.el10.x86_64.rpm pigsty 2.0.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jieba_14-2.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_jieba_14 pg_jieba_14-2.0.1-1PIGSTY.el10.aarch64.rpm pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jieba_14-2.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb pigsty 2.0.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-jieba postgresql-14-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb pigsty 2.0.1 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-jieba/postgresql-14-pg-jieba_2.0.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_jieba` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_jieba         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_jieba` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_jieba;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_jieba -v 18  # PG 18
pig ext install -y pg_jieba -v 17  # PG 17
pig ext install -y pg_jieba -v 16  # PG 16
pig ext install -y pg_jieba -v 15  # PG 15
pig ext install -y pg_jieba -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_jieba_18       # PG 18
dnf install -y pg_jieba_17       # PG 17
dnf install -y pg_jieba_16       # PG 16
dnf install -y pg_jieba_15       # PG 15
dnf install -y pg_jieba_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-jieba   # PG 18
apt install -y postgresql-17-pg-jieba   # PG 17
apt install -y postgresql-16-pg-jieba   # PG 16
apt install -y postgresql-15-pg-jieba   # PG 15
apt install -y postgresql-14-pg-jieba   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_jieba;
```

## 用法

来源：

- [官方v2.0.1 README](https://github.com/jaiminpan/pg_jieba/blob/v2.0.1/README.md)
- [扩展控制文件](https://github.com/jaiminpan/pg_jieba/blob/v2.0.1/pg_jieba.control)
- [SQL解析器和配置定义](https://github.com/jaiminpan/pg_jieba/blob/v2.0.1/pg_jieba.sql)

`pg_jieba` 将基于 Jieba 的中文分词功能添加到 PostgreSQL 全文搜索中。上游的 `v2.0.1` 源代码发布安装了 SQL 扩展版本 `1.1.0`，其控制文件记录了这一点。它提供了独立的文档和查询解析器以及现成可用的文字搜索配置。

### 核心工作流程

```sql
CREATE EXTENSION pg_jieba;

SELECT to_tsvector(
    'jiebacfg',
    '小明硕士毕业于中国科学院计算所，后在日本京都大学深造'
);

SELECT plainto_tsquery('jiebaqry', '云计算专家');
```

使用 `jiebacfg` 构建可搜索的文档向量，并使用 `jiebaqry` 分段用户查询：

```sql
ALTER TABLE articles
ADD COLUMN search_vector tsvector
GENERATED ALWAYS AS (to_tsvector('jiebacfg', body)) STORED;

CREATE INDEX articles_search_idx
ON articles USING GIN (search_vector);

SELECT title
FROM articles
WHERE search_vector @@ plainto_tsquery('jiebaqry', '中文全文检索');
```

### 对象索引

- `jieba`: 文档文本搜索解析器。
- `jiebaqry`: 查询导向的文字搜索解析器。
- `jiebacfg`: 使用 `jieba` 和 `jieba_stem` 的文档文字搜索配置。
- `jiebaqry`: 同名的查询解析器文字搜索配置。
- `jieba_stem`: 包含 Jieba 停用词的简单字典，用于解析器的标记类别。

### 自定义词典和注意事项

上游从 PostgreSQL 的 `jieba.user.dict.utf8` 目录读取一个名为 `tsearch_data` 的自定义词典。条目可能包含一个单词及其可选的词性标签：

```text
云计算
韩玉鉴赏
蓝翔 nz
```

- v2.x 源代码需要 C++11 兼容编译器，因为其捆绑了 `cppjieba` 依赖。
- 上游发布的兼容性测试已过时且有限。针对生产中使用的具体 PostgreSQL 主版本构建和回归测试该包。
- 更改词典会改变分词结果。当字典输出变化时，请重新计算存储的 `tsvector` 值并重建相关索引。
