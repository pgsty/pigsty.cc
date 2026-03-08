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
  <a class="ext-card ext-card--source" href="zhparser-2.3.tar.gz">
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
@ el8.x86_64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/zhparser_18-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/zhparser_18-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/zhparser_18-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/zhparser_18-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/zhparser_18-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 zhparser_18 zhparser_18-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/zhparser_18-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-zhparser postgresql-18-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-18-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/zhparser_17-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/zhparser_17-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/zhparser_17-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/zhparser_17-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/zhparser_17-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 zhparser_17 zhparser_17-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/zhparser_17-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-zhparser postgresql-17-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-17-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/zhparser_16-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/zhparser_16-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/zhparser_16-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/zhparser_16-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/zhparser_16-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 zhparser_16 zhparser_16-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/zhparser_16-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-zhparser postgresql-16-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-16-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/zhparser_15-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/zhparser_15-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/zhparser_15-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/zhparser_15-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/zhparser_15-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 zhparser_15 zhparser_15-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/zhparser_15-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-zhparser postgresql-15-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-15-zhparser_2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el8.x86_64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/zhparser_14-2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el8.aarch64.rpm pigsty 2.3 4.7MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/zhparser_14-2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el9.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/zhparser_14-2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el9.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/zhparser_14-2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el10.x86_64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/zhparser_14-2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 zhparser_14 zhparser_14-2.3-1PIGSTY.el10.aarch64.rpm pigsty 2.3 4.3MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/zhparser_14-2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~bookworm_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~bookworm_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~trixie_amd64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~trixie_arm64.deb pigsty 2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~jammy_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~jammy_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~noble_amd64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-zhparser postgresql-14-zhparser_2.3-1PIGSTY~noble_arm64.deb pigsty 2.3 4.3MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/z/zhparser/postgresql-14-zhparser_2.3-1PIGSTY~noble_arm64.deb
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
