---
title: "vgram"
linkTitle: "vgram"
description: "用于 LIKE/ILIKE 检索的可变长度字组 GIN 索引与统计信息"
weight: 2130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/akorotkov/vgram">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">akorotkov/vgram</div>
    <div class="ext-card__desc">https://github.com/akorotkov/vgram</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/vgram-1.0-babae3775c9c.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">vgram-1.0-babae3775c9c.tar.gz</div>
    <div class="ext-card__desc">vgram-1.0-babae3775c9c.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`vgram`**](/ext/e/vgram) | `1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2130  | [**`vgram`**](/ext/e/vgram) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_trgm`](/ext/e/pg_trgm) [`pg_bigm`](/ext/e/pg_bigm) [`biscuit`](/ext/e/biscuit) [`pgroonga`](/ext/e/pgroonga) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Collect corpus-specific q-gram statistics before creating the GIN index; upstream supports PostgreSQL 13+.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `vgram` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `vgram_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-vgram` | - |
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
@ el8.x86_64 18 vgram_18 vgram_18-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 49.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vgram_18-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vgram_18 vgram_18-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 49.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vgram_18-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vgram_18 vgram_18-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 50.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vgram_18-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vgram_18 vgram_18-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vgram_18-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vgram_18 vgram_18-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 50.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vgram_18-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vgram_18 vgram_18-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 50.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vgram_18-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 40.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 40.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 39.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vgram postgresql-18-vgram_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 39.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-18-vgram_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 vgram_17 vgram_17-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 49.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vgram_17-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vgram_17 vgram_17-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 49.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vgram_17-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vgram_17 vgram_17-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vgram_17-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vgram_17 vgram_17-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vgram_17-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vgram_17 vgram_17-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vgram_17-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vgram_17 vgram_17-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vgram_17-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 43.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 43.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 39.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-vgram postgresql-17-vgram_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 39.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-17-vgram_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 vgram_16 vgram_16-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 49.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vgram_16-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vgram_16 vgram_16-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 49.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vgram_16-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vgram_16 vgram_16-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vgram_16-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vgram_16 vgram_16-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vgram_16-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vgram_16 vgram_16-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vgram_16-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vgram_16 vgram_16-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 50.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vgram_16-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 43.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 43.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 39.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-vgram postgresql-16-vgram_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 39.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-16-vgram_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 vgram_15 vgram_15-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vgram_15-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vgram_15 vgram_15-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 49.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vgram_15-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vgram_15 vgram_15-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vgram_15-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vgram_15 vgram_15-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vgram_15-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vgram_15 vgram_15-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 50.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vgram_15-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vgram_15 vgram_15-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 50.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vgram_15-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 38.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 38.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 38.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 44.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 44.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 39.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 40.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-vgram postgresql-15-vgram_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-15-vgram_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 vgram_14 vgram_14-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vgram_14-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vgram_14 vgram_14-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 49.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vgram_14-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vgram_14 vgram_14-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vgram_14-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vgram_14 vgram_14-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 50.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vgram_14-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vgram_14 vgram_14-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 50.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vgram_14-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vgram_14 vgram_14-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 50.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vgram_14-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 41.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 41.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 41.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 41.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 47.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 47.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 43.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 43.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 42.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-vgram postgresql-14-vgram_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 42.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vgram/postgresql-14-vgram_1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `vgram` 扩展的 RPM / DEB 包：

```bash
pig build pkg vgram         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `vgram` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install vgram;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y vgram -v 18  # PG 18
pig ext install -y vgram -v 17  # PG 17
pig ext install -y vgram -v 16  # PG 16
pig ext install -y vgram -v 15  # PG 15
pig ext install -y vgram -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y vgram_18       # PG 18
dnf install -y vgram_17       # PG 17
dnf install -y vgram_16       # PG 16
dnf install -y vgram_15       # PG 15
dnf install -y vgram_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-vgram   # PG 18
apt install -y postgresql-17-vgram   # PG 17
apt install -y postgresql-16-vgram   # PG 16
apt install -y postgresql-15-vgram   # PG 15
apt install -y postgresql-14-vgram   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION vgram;
```

## 用法

来源：

- [官方 README](https://github.com/akorotkov/vgram/blob/babae3775c9c21bcf66f55c434642af3eeb0ce0d/README.md)
- [官方扩展 SQL](https://github.com/akorotkov/vgram/blob/babae3775c9c21bcf66f55c434642af3eeb0ce0d/vgram--1.0.sql)
- [官方 GIN 实现](https://github.com/akorotkov/vgram/blob/babae3775c9c21bcf66f55c434642af3eeb0ce0d/vgram_gin.c)

`vgram` 使用由可变长度 q-gram 构建的 GIN 索引加速 `LIKE` 和 `ILIKE` 子串检索。与固定三元组不同，它从目标语料学习常见短 gram，并索引更长或更少见的 gram，因此可能针对特定数据分布获得更好的选择性。

### 构建语料专用索引

版本 `1.0` 要求 PostgreSQL 13 或更高版本。在 psql 中收集常见 gram、保存结果，并把它传给 `vgram_gin_ops` 选项：

```sql
CREATE EXTENSION vgram;

SELECT qgram_stat(title, 2, 4, 0.05) AS vgrams
FROM documents
\gset

CREATE INDEX documents_title_vgram_idx
ON documents USING gin (
  title vgram_gin_ops (minq=2, maxq=4, vgrams=:'vgrams')
);

SELECT *
FROM documents
WHERE title ILIKE '%indexing%';
```

`minq` 和 `maxq` 限制提取 gram 的长度。传给 `qgram_stat()` 的阈值把语料频率达到或超过该值的 gram 标记为过于常见，不纳入索引。可用 `get_vgrams()` 检查某个候选值和已学习 gram 数组的提取结果。

### 对象与高级统计

- `qgram_stat(text, int, int, float8)` 聚合常见 q-gram。
- `get_vgrams(text, int, int, text[])` 展示从文本中选出的 gram。
- `vgram_gin_ops` 为普通 `text` 的 `LIKE` 与 `ILIKE` 建立索引。
- `vgram_text` 与文本兼容，但会安装自定义频率统计与选择性估算。
- `vgram_gin_ops2` 是 `vgram_text` 的 GIN 运算符类。

### 维护边界

学习得到的选项数组会嵌入索引定义，而且可能非常大。它只反映构建时样本；语言或分布发生重大变化后，需要重新收集统计、比较召回与计划，并通常执行 `REINDEX` 或创建替代索引。GIN 候选仍会复查，但过于常见或太短的模式仍可能退化成大范围扫描。应评估构建耗时、索引大小、写放大、待处理列表行为、VACUUM、排序规则、多字节文本、大小写折叠和规划器估算。还要保留可复现的训练查询与参数，确保副本和重建环境使用相同的运算符类选项。
