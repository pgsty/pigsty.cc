---
title: "smlar"
linkTitle: "smlar"
description: "高效的相似度搜索函数"
weight: 1850
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jirutka/smlar">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jirutka/smlar</div>
    <div class="ext-card__desc">https://github.com/jirutka/smlar</div>
  </a>
  <a class="ext-card ext-card--source" href="smlar-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">smlar-1.0.tar.gz</div>
    <div class="ext-card__desc">smlar-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`smlar`**](/ext/e/smlar) | `1.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1850  | [**`smlar`**](/ext/e/smlar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_similarity`](/ext/e/pg_similarity) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`pg_trgm`](/ext/e/pg_trgm) [`intarray`](/ext/e/intarray) [`vector`](/ext/e/vector) [`pg_bigm`](/ext/e/pg_bigm) [`unaccent`](/ext/e/unaccent) [`vchord`](/ext/e/vchord) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> fix pg18 break issue by https://github.com/Vonng/smlar


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `smlar` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `smlar_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-smlar` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 smlar_18 smlar_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/smlar_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 smlar_18 smlar_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/smlar_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 smlar_18 smlar_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 33.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/smlar_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 smlar_18 smlar_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/smlar_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 smlar_18 smlar_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/smlar_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 smlar_18 smlar_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/smlar_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 77.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 76.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 smlar_17 smlar_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/smlar_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 smlar_17 smlar_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/smlar_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 smlar_17 smlar_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 33.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/smlar_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 smlar_17 smlar_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/smlar_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 smlar_17 smlar_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/smlar_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 smlar_17 smlar_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/smlar_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 85.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 smlar_16 smlar_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/smlar_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 smlar_16 smlar_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/smlar_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 smlar_16 smlar_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 33.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/smlar_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 smlar_16 smlar_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/smlar_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 smlar_16 smlar_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/smlar_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 smlar_16 smlar_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/smlar_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 71.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 85.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 smlar_15 smlar_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 35.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/smlar_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 smlar_15 smlar_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/smlar_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 smlar_15 smlar_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/smlar_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 smlar_15 smlar_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/smlar_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 smlar_15 smlar_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/smlar_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 smlar_15 smlar_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/smlar_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 72.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 86.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 smlar_14 smlar_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 35.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/smlar_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 smlar_14 smlar_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/smlar_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 smlar_14 smlar_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/smlar_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 smlar_14 smlar_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/smlar_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 smlar_14 smlar_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/smlar_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 smlar_14 smlar_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/smlar_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 72.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 86.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `smlar` 扩展的 RPM / DEB 包：

```bash
pig build pkg smlar         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `smlar` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install smlar;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y smlar -v 18  # PG 18
pig ext install -y smlar -v 17  # PG 17
pig ext install -y smlar -v 16  # PG 16
pig ext install -y smlar -v 15  # PG 15
pig ext install -y smlar -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y smlar_18       # PG 18
dnf install -y smlar_17       # PG 17
dnf install -y smlar_16       # PG 16
dnf install -y smlar_15       # PG 15
dnf install -y smlar_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-smlar   # PG 18
apt install -y postgresql-17-smlar   # PG 17
apt install -y postgresql-16-smlar   # PG 16
apt install -y postgresql-15-smlar   # PG 15
apt install -y postgresql-14-smlar   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION smlar;
```
