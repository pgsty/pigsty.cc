---
title: "zhparser"
linkTitle: "zhparser"
description: "中文分词，全文搜索解析器"
weight: 2130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/amutu/zhparser">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">amutu/zhparser</div>
    <div class="ext-card__desc">https://github.com/amutu/zhparser</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/zhparser-2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">zhparser-2.3.tar.gz</div>
    <div class="ext-card__desc">zhparser-2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`zhparser`**](/ext/e/zhparser) | `2.3` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2130  | [**`zhparser`**](/ext/e/zhparser) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_trgm`](/ext/e/pg_trgm) [`rum`](/ext/e/rum) [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_bigm`](/ext/e/pg_bigm) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`vchord_bm25`](/ext/e/vchord_bm25) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3` | {{< pgvers "18,17,16,15,14" >}} | `zhparser` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3` | {{< pgvers "18,17,16,15,14" >}} | `zhparser_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-zhparser` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| el8.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| el9.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| el9.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| el10.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| el10.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| d12.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| d12.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| d13.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| d13.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| u22.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| u22.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| u24.x86_64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| u24.aarch64 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 | AVAIL PIGSTY 2.3 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/zhparser_18-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/zhparser_18-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/zhparser_18-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/zhparser_18-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/zhparser_18-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/zhparser_18-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/zhparser_17-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/zhparser_17-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/zhparser_17-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/zhparser_17-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/zhparser_17-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/zhparser_17-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/zhparser_16-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/zhparser_16-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/zhparser_16-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/zhparser_16-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/zhparser_16-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/zhparser_16-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/zhparser_15-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/zhparser_15-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/zhparser_15-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/zhparser_15-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/zhparser_15-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/zhparser_15-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/zhparser_14-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/zhparser_14-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/zhparser_14-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/zhparser_14-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/zhparser_14-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/zhparser_14-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `zhparser` 扩展的 RPM / DEB 包：

```bash
pig build pkg zhparser         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `zhparser` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install zhparser;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y zhparser -v 18  # PG 18
pig ext install -y zhparser -v 17  # PG 17
pig ext install -y zhparser -v 16  # PG 16
pig ext install -y zhparser -v 15  # PG 15
pig ext install -y zhparser -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y zhparser_18       # PG 18
dnf install -y zhparser_17       # PG 17
dnf install -y zhparser_16       # PG 16
dnf install -y zhparser_15       # PG 15
dnf install -y zhparser_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-zhparser   # PG 18
apt install -y postgresql-17-zhparser   # PG 17
apt install -y postgresql-16-zhparser   # PG 16
apt install -y postgresql-15-zhparser   # PG 15
apt install -y postgresql-14-zhparser   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION zhparser;
```



## 用法

> [GitHub: amutu/zhparser](https://github.com/amutu/zhparser)

`zhparser` 是基于 SCWS（Simple Chinese Word Segmentation）分词库的 PostgreSQL 中文全文搜索扩展。

## 功能特性

- 为 PostgreSQL 全文搜索提供中文分词
- 基于 SCWS（简易中文分词）库
- 支持自定义词典（TXT 和 XDB 格式）
- 数据库级自定义词表（v2.1 起）
- 多个可调参数控制分词行为

## 快速开始

```sql
-- 创建扩展
CREATE EXTENSION zhparser;

-- 创建使用 zhparser 的文本搜索配置
CREATE TEXT SEARCH CONFIGURATION chinese (PARSER = zhparser);

-- 添加词类映射
ALTER TEXT SEARCH CONFIGURATION chinese ADD MAPPING FOR n,v,a,i,e,l WITH simple;

-- 测试中文分词
SELECT to_tsvector('chinese', '小明硕士毕业于中国科学院计算所，后在日本京都大学深造');

-- 创建表和中文全文搜索索引
CREATE TABLE articles (id serial PRIMARY KEY, title text, body text);

CREATE INDEX articles_body_idx ON articles
  USING gin (to_tsvector('chinese', body));

-- 中文全文搜索查询
SELECT * FROM articles
  WHERE to_tsvector('chinese', body) @@ to_tsquery('chinese', '中国');
```

## 配置参数

zhparser 提供多个 GUC 参数控制分词行为：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `zhparser.punctuation_ignore` | `off` | 忽略所有标点符号 |
| `zhparser.seg_with_duality` | `off` | 对长词进行二元分词 |
| `zhparser.dict_in_memory` | `off` | 将整个词典加载到内存 |
| `zhparser.multi_short` | `off` | 短词复合分词 |
| `zhparser.multi_duality` | `off` | 二元复合分词 |
| `zhparser.multi_zmain` | `off` | 首次复合分词中的关键词 |
| `zhparser.multi_zall` | `off` | 使用所有复合分词 |

## 词类

zhparser 支持 SCWS 的以下词类：

| 代码 | 说明 |
|------|------|
| `a` | 形容词 |
| `b` | 区别词 |
| `c` | 连词 |
| `d` | 副词 |
| `e` | 叹词 |
| `f` | 方位词 |
| `g` | 词根 |
| `h` | 前缀 |
| `i` | 成语 |
| `j` | 简称 |
| `k` | 后缀 |
| `l` | 临时习语 |
| `m` | 数词 |
| `n` | 名词 |
| `o` | 拟声词 |
| `p` | 介词 |
| `q` | 量词 |
| `r` | 代词 |
| `s` | 处所词 |
| `t` | 时间词 |
| `u` | 助词 |
| `v` | 动词 |
| `w` | 标点符号 |
| `x` | 未知 |
| `y` | 语气词 |
| `z` | 状态词 |

## 自定义词典

### 基于文件的词典

将自定义词典文件放在共享目录（通常为 `$SHAREDIR/tsearch_data/`）：

- TXT 格式：每行一个词
- XDB 格式：编译后的 SCWS 词典格式

自定义词典优先于内置词典。

### 数据库级自定义词（v2.1+）

```sql
-- 通过 zhparser 内置表添加自定义词
INSERT INTO zhparser.zhprs_custom_word VALUES ('中国科学院计算所');

-- 重新加载自定义词典（同步后需重新连接才能生效）
SELECT sync_zhprs_custom_word();

-- 验证带自定义词的分词结果
SELECT to_tsvector('chinese', '小明硕士毕业于中国科学院计算所');
```

## Docker 快速启动

```bash
docker run --name pgzhparser -d \
  -e POSTGRES_PASSWORD=somepassword \
  zhparser/zhparser:bookworm-16
```
