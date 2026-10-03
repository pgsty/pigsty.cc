---
title: "pg_tokenizer"
linkTitle: "pg_tokenizer"
description: "用于全文检索的分词器"
weight: 2160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supervc-stack/pg_tokenizer.rs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supervc-stack/pg_tokenizer.rs</div>
    <div class="ext-card__desc">https://github.com/supervc-stack/pg_tokenizer.rs</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tokenizer.rs-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tokenizer.rs-0.1.1.tar.gz</div>
    <div class="ext-card__desc">pg_tokenizer.rs-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tokenizer`**](/ext/e/pg_tokenizer) | `0.1.1` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2160  | [**`pg_tokenizer`**](/ext/e/pg_tokenizer) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `tokenizer_catalog` |
{.ext-table}

| **相关扩展** | [`pgroonga`](/ext/e/pgroonga) [`pg_jieba`](/ext/e/pg_jieba) [`pg_cjk_parser`](/ext/e/pg_cjk_parser) [`zhparser`](/ext/e/zhparser) [`pg_bigm`](/ext/e/pg_bigm) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`pg_tiktoken_c`](/ext/e/pg_tiktoken_c) [`unaccent`](/ext/e/unaccent) [`dict_xsyn`](/ext/e/dict_xsyn) [`dict_int`](/ext/e/dict_int) [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) [`pg_kazsearch`](/ext/e/pg_kazsearch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 fix by Vonng.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tokenizer` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_tokenizer_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tokenizer` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
@ el8.x86_64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-3PIGSTY.el8.x86_64.rpm pigsty 0.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_18-0.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-3PIGSTY.el8.aarch64.rpm pigsty 0.1.1 13.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_18-0.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-3PIGSTY.el9.x86_64.rpm pigsty 0.1.1 12.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_18-0.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-3PIGSTY.el9.aarch64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_18-0.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-3PIGSTY.el10.x86_64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_18-0.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tokenizer_18 pg_tokenizer_18-0.1.1-3PIGSTY.el10.aarch64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_18-0.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb pigsty 0.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-tokenizer postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-18-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-3PIGSTY.el8.x86_64.rpm pigsty 0.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_17-0.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-3PIGSTY.el8.aarch64.rpm pigsty 0.1.1 13.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_17-0.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-3PIGSTY.el9.x86_64.rpm pigsty 0.1.1 12.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_17-0.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-3PIGSTY.el9.aarch64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_17-0.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-3PIGSTY.el10.x86_64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_17-0.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tokenizer_17 pg_tokenizer_17-0.1.1-3PIGSTY.el10.aarch64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_17-0.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb pigsty 0.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-tokenizer postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-17-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-3PIGSTY.el8.x86_64.rpm pigsty 0.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_16-0.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-3PIGSTY.el8.aarch64.rpm pigsty 0.1.1 13.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_16-0.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-3PIGSTY.el9.x86_64.rpm pigsty 0.1.1 12.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_16-0.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-3PIGSTY.el9.aarch64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_16-0.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-3PIGSTY.el10.x86_64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_16-0.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tokenizer_16 pg_tokenizer_16-0.1.1-3PIGSTY.el10.aarch64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_16-0.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb pigsty 0.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-tokenizer postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-16-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-3PIGSTY.el8.x86_64.rpm pigsty 0.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_15-0.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-3PIGSTY.el8.aarch64.rpm pigsty 0.1.1 13.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_15-0.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-3PIGSTY.el9.x86_64.rpm pigsty 0.1.1 12.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_15-0.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-3PIGSTY.el9.aarch64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_15-0.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-3PIGSTY.el10.x86_64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_15-0.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tokenizer_15 pg_tokenizer_15-0.1.1-3PIGSTY.el10.aarch64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_15-0.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-tokenizer postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-15-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-3PIGSTY.el8.x86_64.rpm pigsty 0.1.1 13.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tokenizer_14-0.1.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-3PIGSTY.el8.aarch64.rpm pigsty 0.1.1 13.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tokenizer_14-0.1.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-3PIGSTY.el9.x86_64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tokenizer_14-0.1.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-3PIGSTY.el9.aarch64.rpm pigsty 0.1.1 12.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tokenizer_14-0.1.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-3PIGSTY.el10.x86_64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tokenizer_14-0.1.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_tokenizer_14 pg_tokenizer_14-0.1.1-3PIGSTY.el10.aarch64.rpm pigsty 0.1.1 12.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tokenizer_14-0.1.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb pigsty 0.1.1 11.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb pigsty 0.1.1 10.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb pigsty 0.1.1 12.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb pigsty 0.1.1 12.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-tokenizer postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb pigsty 0.1.1 12.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tokenizer/postgresql-14-pg-tokenizer_0.1.1-3PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tokenizer` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tokenizer         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tokenizer` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_tokenizer;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_tokenizer -v 18  # PG 18
pig ext install -y pg_tokenizer -v 17  # PG 17
pig ext install -y pg_tokenizer -v 16  # PG 16
pig ext install -y pg_tokenizer -v 15  # PG 15
pig ext install -y pg_tokenizer -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_tokenizer_18       # PG 18
dnf install -y pg_tokenizer_17       # PG 17
dnf install -y pg_tokenizer_16       # PG 16
dnf install -y pg_tokenizer_15       # PG 15
dnf install -y pg_tokenizer_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-tokenizer   # PG 18
apt install -y postgresql-17-pg-tokenizer   # PG 17
apt install -y postgresql-16-pg-tokenizer   # PG 16
apt install -y postgresql-15-pg-tokenizer   # PG 15
apt install -y postgresql-14-pg-tokenizer   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tokenizer';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tokenizer;
```

## 用法

来源：

- [0.1.1 control](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/pg_tokenizer.control)
- [Installation and preload](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/01-installation.md)
- [Tokenizer usage](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/04-usage.md)
- [Reference and n-grams](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/00-reference.md)
- [Models](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/06-model.md)
- [Cache limitations](https://github.com/supervc-stack/pg_tokenizer.rs/blob/0.1.1/docs/07-limitation.md)

`pg_tokenizer` 为搜索应用将文本转换成词元 ID，常与 VectorChord-BM25 配合使用。分词器由文本分析器和词汇模型组成。扩展要求共享预加载，并将 SQL 对象安装在固定的 `tokenizer_catalog` 模式中。

### 启用与分词

将库加入已有预加载列表并重启 PostgreSQL：

```conf
shared_preload_libraries = 'pg_tokenizer'
```

```sql
CREATE EXTENSION pg_tokenizer;
SET search_path = public, tokenizer_catalog;

SELECT create_tokenizer('english', $$
model = "llmlingua2"
$$);
SELECT tokenize('PostgreSQL full text search', 'english');
```

`tokenize(text, text)` 返回整数词元 ID，不是相关性分数，也不是每个词元一行。安装 BM25 伴随扩展后，可以将返回数组转换为其稀疏向量类型。

### 分析中文文本

Jieba 是 **预分词器**，不是名为 jieba 的内置词汇模型。应为语料创建文本分析器和自定义模型：

```sql
CREATE TABLE documents (
    id bigserial PRIMARY KEY,
    passage text,
    token_ids integer[]
);
SELECT create_text_analyzer('chinese', $$
[pre_tokenizer.jieba]
$$);
SELECT create_custom_model_tokenizer_and_trigger(
    tokenizer_name => 'zh_tokenizer',
    model_name => 'zh_model',
    text_analyzer_name => 'chinese',
    table_name => 'documents',
    source_column => 'passage',
    target_column => 'token_ids'
);
INSERT INTO documents(passage) VALUES ('PostgreSQL全文检索');
SELECT tokenize('数据库', 'zh_tokenizer');
```

辅助函数从源列学习词汇，并创建触发器维护词元 ID。文档与查询应使用相同的分词器和模型。日文需要显式创建并配置词典的 Lindera 模型，不能直接套用其他分词接口中的裸模型名称。

### 对象与配置索引

- `create_tokenizer`、`drop_tokenizer`、`tokenize`：管理和执行分词器。
- `create_text_analyzer`、`apply_text_analyzer`：执行字符过滤、预分词和词元过滤。
- `create_custom_model_tokenizer_and_trigger`、`create_lindera_model`、`create_huggingface_model`：创建语料模型或导入模型。
- `create_stopwords`、`create_synonym`：管理词典。
- 内置模型包含 `llmlingua2`、`bert_base_uncased`、`wiki_tocken` 和 `gemma2b`。
- 0.1.1 新增 `ngram` 词元过滤器，`min_gram` 和 `max_gram` 范围为 1 到 255，`preserve_original` 默认为 false。配置使用 TOML。

### 升级与缓存边界

```sql
ALTER EXTENSION pg_tokenizer UPDATE TO '0.1.1';
```

替换预加载库后，应先重启 PostgreSQL，再更新数据库对象。0.1.0 到 0.1.1 的迁移没有新增 SQL 对象，行为变化在库文件中。文本分析器、模型及分词器按连接缓存，缓存不遵循事务隔离或回滚。回滚后若对象仍留在缓存中，可以重新连接或使用对应删除函数清理。扩展创建后不可重定位。它提供分词，排序及搜索索引由消费这些词元的扩展实现。
