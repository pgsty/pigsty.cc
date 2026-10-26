---
title: "addressing_dictionary"
linkTitle: "addressing_dictionary"
description: "面向地址缩写归一化的全文检索词典与配置"
weight: 2270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pramsey/pgsql-addressing-dictionary">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pramsey/pgsql-addressing-dictionary</div>
    <div class="ext-card__desc">https://github.com/pramsey/pgsql-addressing-dictionary</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/addressing_dictionary-1.1-bf3590e038d8.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">addressing_dictionary-1.1-bf3590e038d8.tar.gz</div>
    <div class="ext-card__desc">addressing_dictionary-1.1-bf3590e038d8.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`addressing_dictionary`**](/ext/e/addressing_dictionary) | `1.1` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2270  | [**`addressing_dictionary`**](/ext/e/addressing_dictionary) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`address_standardizer`](/ext/e/address_standardizer) [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) [`unaccent`](/ext/e/unaccent) [`hunspell_en_us`](/ext/e/hunspell_en_us) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL and dictionary data only; no shared library. PostgreSQL 14-18 verified in PGSTY builds; upstream declares no current major-version matrix.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `addressing_dictionary` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `addressing_dictionary_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-addressing-dictionary` | - |
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
@ el8.x86_64 18 addressing_dictionary_18 addressing_dictionary_18-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/addressing_dictionary_18-1.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 addressing_dictionary_18 addressing_dictionary_18-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/addressing_dictionary_18-1.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 addressing_dictionary_18 addressing_dictionary_18-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/addressing_dictionary_18-1.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 addressing_dictionary_18 addressing_dictionary_18-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/addressing_dictionary_18-1.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 addressing_dictionary_18 addressing_dictionary_18-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/addressing_dictionary_18-1.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 addressing_dictionary_18 addressing_dictionary_18-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/addressing_dictionary_18-1.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-addressing-dictionary postgresql-18-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-18-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ el8.x86_64 17 addressing_dictionary_17 addressing_dictionary_17-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/addressing_dictionary_17-1.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 addressing_dictionary_17 addressing_dictionary_17-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/addressing_dictionary_17-1.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 addressing_dictionary_17 addressing_dictionary_17-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/addressing_dictionary_17-1.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 addressing_dictionary_17 addressing_dictionary_17-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/addressing_dictionary_17-1.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 addressing_dictionary_17 addressing_dictionary_17-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/addressing_dictionary_17-1.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 addressing_dictionary_17 addressing_dictionary_17-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/addressing_dictionary_17-1.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-addressing-dictionary postgresql-17-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-17-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ el8.x86_64 16 addressing_dictionary_16 addressing_dictionary_16-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/addressing_dictionary_16-1.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 addressing_dictionary_16 addressing_dictionary_16-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/addressing_dictionary_16-1.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 addressing_dictionary_16 addressing_dictionary_16-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/addressing_dictionary_16-1.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 addressing_dictionary_16 addressing_dictionary_16-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/addressing_dictionary_16-1.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 addressing_dictionary_16 addressing_dictionary_16-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/addressing_dictionary_16-1.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 addressing_dictionary_16 addressing_dictionary_16-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/addressing_dictionary_16-1.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-addressing-dictionary postgresql-16-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-16-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ el8.x86_64 15 addressing_dictionary_15 addressing_dictionary_15-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/addressing_dictionary_15-1.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 addressing_dictionary_15 addressing_dictionary_15-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/addressing_dictionary_15-1.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 addressing_dictionary_15 addressing_dictionary_15-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/addressing_dictionary_15-1.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 addressing_dictionary_15 addressing_dictionary_15-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/addressing_dictionary_15-1.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 addressing_dictionary_15 addressing_dictionary_15-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/addressing_dictionary_15-1.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 addressing_dictionary_15 addressing_dictionary_15-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/addressing_dictionary_15-1.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-addressing-dictionary postgresql-15-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 3.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-15-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ el8.x86_64 14 addressing_dictionary_14 addressing_dictionary_14-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/addressing_dictionary_14-1.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 addressing_dictionary_14 addressing_dictionary_14-1.1-1PGSTY.el8.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/addressing_dictionary_14-1.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 addressing_dictionary_14 addressing_dictionary_14-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/addressing_dictionary_14-1.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 addressing_dictionary_14 addressing_dictionary_14-1.1-1PGSTY.el9.noarch.rpm pigsty 1.1 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/addressing_dictionary_14-1.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 addressing_dictionary_14 addressing_dictionary_14-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/addressing_dictionary_14-1.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 addressing_dictionary_14 addressing_dictionary_14-1.1-1PGSTY.el10.noarch.rpm pigsty 1.1 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/addressing_dictionary_14-1.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~trixie_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~jammy_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~noble_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-addressing-dictionary postgresql-14-addressing-dictionary_1.1-1PGSTY~resolute_all.deb pigsty 1.1 4.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/addressing-dictionary/postgresql-14-addressing-dictionary_1.1-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `addressing_dictionary` 扩展的 RPM / DEB 包：

```bash
pig build pkg addressing_dictionary         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `addressing_dictionary` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install addressing_dictionary;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y addressing_dictionary -v 18  # PG 18
pig ext install -y addressing_dictionary -v 17  # PG 17
pig ext install -y addressing_dictionary -v 16  # PG 16
pig ext install -y addressing_dictionary -v 15  # PG 15
pig ext install -y addressing_dictionary -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y addressing_dictionary_18       # PG 18
dnf install -y addressing_dictionary_17       # PG 17
dnf install -y addressing_dictionary_16       # PG 16
dnf install -y addressing_dictionary_15       # PG 15
dnf install -y addressing_dictionary_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-addressing-dictionary   # PG 18
apt install -y postgresql-17-addressing-dictionary   # PG 17
apt install -y postgresql-16-addressing-dictionary   # PG 16
apt install -y postgresql-15-addressing-dictionary   # PG 15
apt install -y postgresql-14-addressing-dictionary   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION addressing_dictionary;
```

## 用法

来源：

- [官方 README](https://github.com/pramsey/pgsql-addressing-dictionary/blob/master/README.md)
- [扩展控制文件](https://github.com/pramsey/pgsql-addressing-dictionary/blob/master/addressing_dictionary.control)
- [1.1 版扩展 SQL](https://github.com/pramsey/pgsql-addressing-dictionary/blob/master/addressing_dictionary--1.1.sql)
- [PostgreSQL 文本搜索词典文档](https://www.postgresql.org/docs/current/textsearch-dictionaries.html)

addressing_dictionary 安装面向地址的全文搜索配置与词典。它适合在本地地址近似检索中，把街道类型、方向和序数的不同写法归一为可比较的词位；它不是地理编码器，也不能替代地址解析与校验。

### 核心流程

在数据库中安装一次扩展，用所提供的配置归一化地址文本，并让索引表达式与查询表达式保持一致。

```sql
CREATE EXTENSION addressing_dictionary;

SELECT to_tsvector('addressing_en', '1234 n main st');

CREATE INDEX address_search_idx
ON address_book
USING gin (to_tsvector('addressing_en', full_address));

SELECT *
FROM address_book
WHERE to_tsvector('addressing_en', full_address)
      @@ plainto_tsquery('addressing_en', '1234 north main street');
```

1.1 版会保留方向缩写，同时产生展开形式，因此单字母的北向标记可以输出两种形式。这种设计刻意保留歧义，而不会假定每次出现都只有一种含义。

### 已安装对象

- 英文配置把地址标记的同义词词典、停用词词典和叙词表组合起来。
- 法文配置安装对应的法文文本搜索对象。
- 两套配置都复制自 PostgreSQL 的简单配置，因此通过扩展的数据文件归一化，而不是使用通用语言词干提取器。

### 运维边界

该扩展可重定位，不需要预加载或重启。所有可能执行查询或恢复扩展的服务器都必须安装其词典、同义词、停用词和叙词表文件。

全文匹配属于启发式方法。缩写可能有歧义，全国范围的数据也可能产生大量误匹配或重复候选。应把它用于改进候选检索，尤其是范围有限的城市或地区；对正确性有要求时，仍需另外使用结构化地址或地理空间检查。
