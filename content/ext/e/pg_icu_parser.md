---
title: "pg_icu_parser"
linkTitle: "pg_icu_parser"
description: "使用 ICU 边界分析的全文搜索解析器"
weight: 2300
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/IgKh/pg_icu_parser">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">IgKh/pg_icu_parser</div>
    <div class="ext-card__desc">https://github.com/IgKh/pg_icu_parser</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_icu_parser-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_icu_parser-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_icu_parser-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_icu_parser`**](/ext/e/pg_icu_parser) | `1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mpl20" href="/ext/license#mpl20">MPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2300  | [**`pg_icu_parser`**](/ext/e/pg_icu_parser) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_jieba`](/ext/e/pg_jieba) [`pg_cjk_parser`](/ext/e/pg_cjk_parser) [`pg_fts`](/ext/e/pg_fts) [`pgroonga`](/ext/e/pgroonga) [`zhparser`](/ext/e/zhparser) [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL/control version 1.0; upstream release 1.0.0. Local RPM/DEB builds support PG14-18 with a PG18 encoding-API compatibility patch and explicit ICU linkage. ts_headline is unsupported. PIGSTY PG14-18 packages verified across EL8/9/10, Debian 12/13 and Ubuntu 22.04/24.04/26.04 on x86_64/amd64 and aarch64/arm64; all 16 platforms imported into the local PIGSTY repository.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_icu_parser` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_icu_parser_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-icu-parser` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pg_icu_parser_18 pg_icu_parser_18-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_icu_parser_18-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_icu_parser_18 pg_icu_parser_18-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_icu_parser_18-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_icu_parser_18 pg_icu_parser_18-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_icu_parser_18-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_icu_parser_18 pg_icu_parser_18-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_icu_parser_18-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_icu_parser_18 pg_icu_parser_18-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_icu_parser_18-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_icu_parser_18 pg_icu_parser_18-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_icu_parser_18-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 20.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 20.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-icu-parser postgresql-18-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-18-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_icu_parser_17 pg_icu_parser_17-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_icu_parser_17-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_icu_parser_17 pg_icu_parser_17-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_icu_parser_17-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_icu_parser_17 pg_icu_parser_17-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_icu_parser_17-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_icu_parser_17 pg_icu_parser_17-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_icu_parser_17-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_icu_parser_17 pg_icu_parser_17-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_icu_parser_17-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_icu_parser_17 pg_icu_parser_17-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_icu_parser_17-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 20.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 20.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-icu-parser postgresql-17-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-17-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_icu_parser_16 pg_icu_parser_16-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_icu_parser_16-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_icu_parser_16 pg_icu_parser_16-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_icu_parser_16-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_icu_parser_16 pg_icu_parser_16-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_icu_parser_16-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_icu_parser_16 pg_icu_parser_16-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_icu_parser_16-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_icu_parser_16 pg_icu_parser_16-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_icu_parser_16-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_icu_parser_16 pg_icu_parser_16-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_icu_parser_16-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 20.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-icu-parser postgresql-16-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-16-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_icu_parser_15 pg_icu_parser_15-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_icu_parser_15-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_icu_parser_15 pg_icu_parser_15-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_icu_parser_15-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_icu_parser_15 pg_icu_parser_15-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 28.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_icu_parser_15-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_icu_parser_15 pg_icu_parser_15-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_icu_parser_15-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_icu_parser_15 pg_icu_parser_15-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_icu_parser_15-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_icu_parser_15 pg_icu_parser_15-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_icu_parser_15-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 20.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 20.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 20.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-icu-parser postgresql-15-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-15-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_icu_parser_14 pg_icu_parser_14-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_icu_parser_14-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_icu_parser_14 pg_icu_parser_14-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_icu_parser_14-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_icu_parser_14 pg_icu_parser_14-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 28.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_icu_parser_14-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_icu_parser_14 pg_icu_parser_14-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_icu_parser_14-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_icu_parser_14 pg_icu_parser_14-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 28.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_icu_parser_14-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_icu_parser_14 pg_icu_parser_14-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_icu_parser_14-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 20.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 20.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-icu-parser postgresql-14-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 20.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-icu-parser/postgresql-14-pg-icu-parser_1.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_icu_parser` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_icu_parser         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_icu_parser` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_icu_parser;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_icu_parser -v 18  # PG 18
pig ext install -y pg_icu_parser -v 17  # PG 17
pig ext install -y pg_icu_parser -v 16  # PG 16
pig ext install -y pg_icu_parser -v 15  # PG 15
pig ext install -y pg_icu_parser -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_icu_parser_18       # PG 18
dnf install -y pg_icu_parser_17       # PG 17
dnf install -y pg_icu_parser_16       # PG 16
dnf install -y pg_icu_parser_15       # PG 15
dnf install -y pg_icu_parser_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-icu-parser   # PG 18
apt install -y postgresql-17-pg-icu-parser   # PG 17
apt install -y postgresql-16-pg-icu-parser   # PG 16
apt install -y postgresql-15-pg-icu-parser   # PG 15
apt install -y postgresql-14-pg-icu-parser   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_icu_parser;
```

## 用法

来源：

- [PGXN 官方文档](https://pgxn.org/dist/pg_icu_parser/1.0.0/)

`pg_icu_parser` 提供采用 ICU Unicode 单词边界分析的 `icu_parser` 全文搜索解析器。它适用于中文、日文、韩文和希伯来文等语言，因为 PostgreSQL 默认解析器以空白和模式为中心，可能无法产生合适的单词边界。

### 核心流程

服务器必须是 PostgreSQL 10 或更高版本，并且构建时已经启用 ICU。创建扩展后，建立使用该解析器的文本搜索配置，再映射所需的词元类型：

```sql
CREATE EXTENSION pg_icu_parser;

CREATE TEXT SEARCH CONFIGURATION sample (PARSER = icu_parser);
ALTER TEXT SEARCH CONFIGURATION sample
  ADD MAPPING FOR word WITH english_stem;
ALTER TEXT SEARCH CONFIGURATION sample
  ADD MAPPING FOR number, ideo, kana WITH simple;

SELECT to_tsvector('sample', '東京でPostgreSQLを使う');
```

应为实际语言选择词典；上面的 `english_stem` 只用于演示映射语法。

### 解析器接口

- `word`、`number`、`kana`、`ideo` 和 `blank` 是 `icu_parser` 输出的词元类型。
- `pg_icu_parser.locale` 选择 ICU locale，默认值为 `en`。上游指出单词边界规则通常不依赖 locale，因此只有在验证了具体需求后才应修改。
- 任意 PostgreSQL 文本搜索词典都可以映射到这些输出词元类型。

### 取舍

- 解析器要求 PostgreSQL 构建已经包含 ICU；创建扩展无法为未启用 ICU 的服务器补上该能力。
- 与默认解析器相比，它输出的词元类型更少、更粗，也不会把 URL、电子邮件等特殊模式识别为独立类别。
- 当前审阅的版本不支持 `ts_headline`。
- 上游报告其速度慢于默认解析器，而数据库编码为 UTF-8 时转换开销会较低。应在目标系统上用有代表性的文档和查询形态进行基准测试。
- 修改解析器映射或 locale 行为后，应重建已存储的 `tsvector` 值和依赖索引，避免新旧行采用不同分词规则。
