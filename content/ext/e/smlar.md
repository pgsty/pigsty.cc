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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/smlar-1.0.tar.gz">
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
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 smlar_18 smlar_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/smlar_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 smlar_18 smlar_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/smlar_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 smlar_18 smlar_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/smlar_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 smlar_18 smlar_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/smlar_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 smlar_18 smlar_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/smlar_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 smlar_18 smlar_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/smlar_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 77.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 76.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 74.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-smlar postgresql-18-smlar_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 74.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-18-smlar_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 smlar_17 smlar_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/smlar_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 smlar_17 smlar_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/smlar_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 smlar_17 smlar_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/smlar_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 smlar_17 smlar_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/smlar_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 smlar_17 smlar_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/smlar_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 smlar_17 smlar_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/smlar_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 85.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 74.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-smlar postgresql-17-smlar_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 74.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-17-smlar_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 smlar_16 smlar_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/smlar_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 smlar_16 smlar_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/smlar_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 smlar_16 smlar_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/smlar_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 smlar_16 smlar_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/smlar_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 smlar_16 smlar_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/smlar_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 smlar_16 smlar_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/smlar_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 71.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 85.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 74.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-smlar postgresql-16-smlar_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 74.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-16-smlar_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 smlar_15 smlar_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 35.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/smlar_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 smlar_15 smlar_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/smlar_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 smlar_15 smlar_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/smlar_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 smlar_15 smlar_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/smlar_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 smlar_15 smlar_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/smlar_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 smlar_15 smlar_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/smlar_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 72.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 86.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 74.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-smlar postgresql-15-smlar_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 73.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-15-smlar_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 smlar_14 smlar_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/smlar_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 smlar_14 smlar_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 33.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/smlar_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 smlar_14 smlar_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/smlar_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 smlar_14 smlar_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 32.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/smlar_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 smlar_14 smlar_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/smlar_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 smlar_14 smlar_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 33.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/smlar_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 72.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 70.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 70.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 86.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 84.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 75.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 74.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 74.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-smlar postgresql-14-smlar_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 73.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/smlar/postgresql-14-smlar_1.0-1PIGSTY~resolute_arm64.deb
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



## 用法

> [smlar](https://github.com/jirutka/smlar)：PostgreSQL 数组的高效相似度搜索。
> 来源：[README](https://github.com/jirutka/smlar/blob/master/README)

`smlar` 扩展提供 PostgreSQL 数组上的高效相似度搜索，支持可配置的相似度公式、GiST 和 GIN 索引，以及 TF/IDF 加权。


--------

## 函数

```
float4 smlar(anyarray, anyarray)
```
计算两个数组的相似度。数组应为相同类型。

```
float4 smlar(anyarray, anyarray, bool useIntersect)
```
计算两个复合类型数组的相似度。复合类型格式如下：

```sql
CREATE TYPE type_name AS (element_name anytype, weight_name FLOAT4);
```

`useIntersect` 选项指定分母中仅使用交集元素。

```
float4 smlar(anyarray a, anyarray b, text formula)
```
通过给定公式计算两个数组的相似度。公式中的预定义变量：

- `N.i` -- 两个数组中的公共元素数量（交集）
- `N.a` -- 第一个数组中的唯一元素数量
- `N.b` -- 第二个数组中的唯一元素数量

示例：

```sql
SELECT smlar('{1,4,6}'::int[], '{5,4,6}');
SELECT smlar('{1,4,6}'::int[], '{5,4,6}', 'N.i / sqrt(N.a * N.b)');
-- 这两个调用是等价的。
```

```
anyarray % anyarray
```
如果数组的相似度大于阈值限制则返回 true。

```
text[] tsvector2textarray(tsvector)
```
将 tsvector 类型转换为文本数组。

```
anyarray array_unique(anyarray)
```
排序并去重数组。

```
float4 inarray(anyarray, anyelement)
```
如果第二个参数不存在于第一个参数中返回零，否则返回 1.0。

```
float4 inarray(anyarray, anyelement, float4, float4)
```
如果第二个参数不存在于第一个参数中返回第四个参数，否则返回第三个参数。


--------

## GUC 配置变量

```
smlar.threshold  FLOAT
```
相似度低于阈值的数组不被 `%` 运算视为相似。

```
smlar.persistent_cache  BOOL
```
全局统计缓存存储在事务无关的内存中。

```
smlar.type  STRING
```
相似度公式类型：`cosine`（默认）、`tfidf`、`overlap`。

```
smlar.stattable  STRING
```
存储集合级统计数据的表名。表应定义为：

```sql
CREATE TABLE table_name (
    value   data_type UNIQUE,
    ndoc    int4 (or bigint)  NOT NULL CHECK (ndoc > 0)
);
```

值为 null 的行表示文档总数。仅用于 `smlar.type = 'tfidf'`。

```
smlar.tf_method  STRING
```
词频计算方法。取值：
- `"n"` -- 简单计数（默认）
- `"log"` -- 1 + log(n)
- `"const"` -- TF 等于 1

仅用于 `smlar.type = 'tfidf'`。

```
smlar.idf_plus_one  BOOL
```
如果为 false（默认），idf 计算为 `log(d/df)`。如果为 true，计算为 `log(1+d/df)`。仅用于 `smlar.type = 'tfidf'`。

强烈建议在 `postgresql.conf` 中添加：

```
smlar.threshold = 0.6  # 或其他 > 0 且 < 1 的值
```


--------

## GiST/GIN 索引支持

`%` 和 `&&` 操作支持多种数组类型的 GiST 和 GIN 索引：

| 数组类型 | GIN 操作符类 | GiST 操作符类 |
|----------|-------------|--------------|
| `bit[]` | `_bit_sml_ops` | |
| `bytea[]` | `_bytea_sml_ops` | `_bytea_sml_ops` |
| `char[]` | `_char_sml_ops` | `_char_sml_ops` |
| `cidr[]` | `_cidr_sml_ops` | `_cidr_sml_ops` |
| `date[]` | `_date_sml_ops` | `_date_sml_ops` |
| `float4[]` | `_float4_sml_ops` | `_float4_sml_ops` |
| `float8[]` | `_float8_sml_ops` | `_float8_sml_ops` |
| `inet[]` | `_inet_sml_ops` | `_inet_sml_ops` |
| `int2[]` | `_int2_sml_ops` | `_int2_sml_ops` |
| `int4[]` | `_int4_sml_ops` | `_int4_sml_ops` |
| `int8[]` | `_int8_sml_ops` | `_int8_sml_ops` |
| `interval[]` | `_interval_sml_ops` | `_interval_sml_ops` |
| `macaddr[]` | `_macaddr_sml_ops` | `_macaddr_sml_ops` |
| `money[]` | `_money_sml_ops` | |
| `numeric[]` | `_numeric_sml_ops` | `_numeric_sml_ops` |
| `oid[]` | `_oid_sml_ops` | `_oid_sml_ops` |
| `text[]` | `_text_sml_ops` | `_text_sml_ops` |
| `time[]` | `_time_sml_ops` | `_time_sml_ops` |
| `timestamp[]` | `_timestamp_sml_ops` | `_timestamp_sml_ops` |
| `timestamptz[]` | `_timestamptz_sml_ops` | `_timestamptz_sml_ops` |
| `timetz[]` | `_timetz_sml_ops` | `_timetz_sml_ops` |
| `varbit[]` | `_varbit_sml_ops` | |
| `varchar[]` | `_varchar_sml_ops` | `_varchar_sml_ops` |
