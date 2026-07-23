---
title: "pg_pinyin"
linkTitle: "pg_pinyin"
description: "PostgreSQL 拼音转写与检索辅助扩展"
weight: 2190
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aiyou178/pg_pinyin">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aiyou178/pg_pinyin</div>
    <div class="ext-card__desc">https://github.com/aiyou178/pg_pinyin</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_pinyin-0.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_pinyin-0.0.5.tar.gz</div>
    <div class="ext-card__desc">pg_pinyin-0.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_pinyin`**](/ext/e/pg_pinyin) | `0.0.5` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2190  | [**`pg_pinyin`**](/ext/e/pg_pinyin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | `pinyin` |
{.ext-table}

| **相关扩展** | [`zhparser`](/ext/e/zhparser) [`pg_search`](/ext/e/pg_search) [`pg_trgm`](/ext/e/pg_trgm) [`pg_bigm`](/ext/e/pg_bigm) [`pgroonga`](/ext/e/pgroonga) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> optional tokenizer-input overload can integrate with pg_search.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_pinyin` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_pinyin_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pinyin` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
@ el8.x86_64 18 pg_pinyin_18 pg_pinyin_18-0.0.5-1PIGSTY.el8.x86_64.rpm pigsty 0.0.5 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pinyin_18-0.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_pinyin_18 pg_pinyin_18-0.0.5-1PIGSTY.el8.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pinyin_18-0.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_pinyin_18 pg_pinyin_18-0.0.5-1PIGSTY.el9.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pinyin_18-0.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_pinyin_18 pg_pinyin_18-0.0.5-1PIGSTY.el9.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pinyin_18-0.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_pinyin_18 pg_pinyin_18-0.0.5-1PIGSTY.el10.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pinyin_18-0.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_pinyin_18 pg_pinyin_18-0.0.5-1PIGSTY.el10.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pinyin_18-0.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~noble_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~noble_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pinyin postgresql-18-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-18-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_pinyin_17 pg_pinyin_17-0.0.5-1PIGSTY.el8.x86_64.rpm pigsty 0.0.5 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pinyin_17-0.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_pinyin_17 pg_pinyin_17-0.0.5-1PIGSTY.el8.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pinyin_17-0.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_pinyin_17 pg_pinyin_17-0.0.5-1PIGSTY.el9.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pinyin_17-0.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_pinyin_17 pg_pinyin_17-0.0.5-1PIGSTY.el9.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pinyin_17-0.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_pinyin_17 pg_pinyin_17-0.0.5-1PIGSTY.el10.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pinyin_17-0.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_pinyin_17 pg_pinyin_17-0.0.5-1PIGSTY.el10.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pinyin_17-0.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~noble_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~noble_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pinyin postgresql-17-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-17-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_pinyin_16 pg_pinyin_16-0.0.5-1PIGSTY.el8.x86_64.rpm pigsty 0.0.5 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pinyin_16-0.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_pinyin_16 pg_pinyin_16-0.0.5-1PIGSTY.el8.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pinyin_16-0.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_pinyin_16 pg_pinyin_16-0.0.5-1PIGSTY.el9.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pinyin_16-0.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_pinyin_16 pg_pinyin_16-0.0.5-1PIGSTY.el9.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pinyin_16-0.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_pinyin_16 pg_pinyin_16-0.0.5-1PIGSTY.el10.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pinyin_16-0.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_pinyin_16 pg_pinyin_16-0.0.5-1PIGSTY.el10.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pinyin_16-0.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~noble_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~noble_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pinyin postgresql-16-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-16-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_pinyin_15 pg_pinyin_15-0.0.5-1PIGSTY.el8.x86_64.rpm pigsty 0.0.5 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pinyin_15-0.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_pinyin_15 pg_pinyin_15-0.0.5-1PIGSTY.el8.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pinyin_15-0.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_pinyin_15 pg_pinyin_15-0.0.5-1PIGSTY.el9.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pinyin_15-0.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_pinyin_15 pg_pinyin_15-0.0.5-1PIGSTY.el9.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pinyin_15-0.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_pinyin_15 pg_pinyin_15-0.0.5-1PIGSTY.el10.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pinyin_15-0.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_pinyin_15 pg_pinyin_15-0.0.5-1PIGSTY.el10.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pinyin_15-0.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~noble_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~noble_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pinyin postgresql-15-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-15-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_pinyin_14 pg_pinyin_14-0.0.5-1PIGSTY.el8.x86_64.rpm pigsty 0.0.5 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pinyin_14-0.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_pinyin_14 pg_pinyin_14-0.0.5-1PIGSTY.el8.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pinyin_14-0.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_pinyin_14 pg_pinyin_14-0.0.5-1PIGSTY.el9.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pinyin_14-0.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_pinyin_14 pg_pinyin_14-0.0.5-1PIGSTY.el9.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pinyin_14-0.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_pinyin_14 pg_pinyin_14-0.0.5-1PIGSTY.el10.x86_64.rpm pigsty 0.0.5 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pinyin_14-0.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_pinyin_14 pg_pinyin_14-0.0.5-1PIGSTY.el10.aarch64.rpm pigsty 0.0.5 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pinyin_14-0.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb pigsty 0.0.5 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~noble_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~noble_arm64.deb pigsty 0.0.5 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb pigsty 0.0.5 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pinyin postgresql-14-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb pigsty 0.0.5 2.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pinyin/postgresql-14-pinyin_0.0.5-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_pinyin` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_pinyin         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_pinyin` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_pinyin;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_pinyin -v 18  # PG 18
pig ext install -y pg_pinyin -v 17  # PG 17
pig ext install -y pg_pinyin -v 16  # PG 16
pig ext install -y pg_pinyin -v 15  # PG 15
pig ext install -y pg_pinyin -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_pinyin_18       # PG 18
dnf install -y pg_pinyin_17       # PG 17
dnf install -y pg_pinyin_16       # PG 16
dnf install -y pg_pinyin_15       # PG 15
dnf install -y pg_pinyin_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pinyin   # PG 18
apt install -y postgresql-17-pinyin   # PG 17
apt install -y postgresql-16-pinyin   # PG 16
apt install -y postgresql-15-pinyin   # PG 15
apt install -y postgresql-14-pinyin   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_pinyin;
```

## 用法

来源：

- [pg_pinyin v0.0.5 README](https://github.com/aiyou178/pg_pinyin/blob/v0.0.5/readme.md)
- [pg_pinyin v0.0.5 control file](https://github.com/aiyou178/pg_pinyin/blob/v0.0.5/pg_pinyin.control)
- [0.0.4到0.0.5升级SQL](https://github.com/aiyou178/pg_pinyin/blob/v0.0.5/pg_pinyin--0.0.4--0.0.5.sql)

pg_pinyin 对中文文本进行拉丁化，并提供分词器和查询辅助工具，适用于搜索应用。使用 pg_pinyin 可以创建稳定的拼音搜索键、分汉字文本或扩展拼音输入为 pg_search 正则表达式查询。

版本 0.0.5 主要是打包和工具链更新；其升级脚本未对 SQL 系统目录进行更改，因此用户面向的 API 与 0.0.4 保持兼容。

### 创建扩展

    CREATE EXTENSION pg_pinyin;

该扩展是可重定位的，并不需要 shared_preload_libraries 或服务器重启。

### 拉丁化文本

逐字符拉丁化或使用词感知分割：

    SELECT pinyin_char_romanize('重庆');
    SELECT pinyin_word_romanize('重庆火锅');
    SELECT pinyin_word_romanize('重庆火锅', ' ');

这两个函数接受一个可选后缀，该后缀插入到每个发出的拼音单元之后。字符模式是每字符确定性的；词模式使用捆绑的词典来解决上下文发音。

### 使用 pg_search 分词器输入

当安装了 pg_search 时，词拉丁化也接受 pg_search 分词器的结果：

    SELECT pinyin_word_romanize(
      description::pdb.icu::text[]
    )
    FROM documents;

该重载返回拉丁化文本；它不暴露每分词一行的 API。在不需要 pg_search 分词的情况下使用纯文本重载。

### 构建一个 pg_search 查询

如果在安装 pg_pinyin 之前已安装了 pg_search，pg_pinyin 提供了一个类型化的重载，返回 pdb.query：

    SELECT *
    FROM documents
    WHERE id @@@ pinyin_regex_phrase(
      'chong qing',
      slope => 1,
      max_expansions => 64,
      generated_pinyin => true
    );

如果未安装 pg_search，则相同的入口点将作为错误报告的占位符而不是静默返回不同类型的值。在升级后按预期顺序安装依赖项并测试函数签名。

### 对象索引

- pinyin_char_romanize(text [, suffix]) 返回基于字符的拼音文本。
- pinyin_word_romanize(text [, suffix]) 返回词典分割的拼音文本。
- pinyin_word_romanize(tokenizer_input [, suffix]) 接受一个 pg_search 分词器结果。
- pinyin_regex_phrase(text, slope, max_expansions, generated_pinyin) 当该集成可用时，构建一个 pg_search 拼音短语查询。
- pinyin_regex_phrase_patterns 是一个内部模式构建辅助函数；请优先使用公共查询函数。

### 运行注意事项

扩展在其 pinyin 模式中自带生成的字符和词字典。将这些表视为由扩展管理的数据，而不是应用程序表。拉丁化是规范化，不是翻译，并且可能需要应用端审查以处理模糊或领域特定的读音。
