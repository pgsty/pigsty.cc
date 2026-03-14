---
title: "pg_enigma"
linkTitle: "pg_enigma"
description: "PostgreSQL 加密数据类型"
weight: 7070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/SoftwareLibreMx/pg_enigma">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">SoftwareLibreMx/pg_enigma</div>
    <div class="ext-card__desc">https://github.com/SoftwareLibreMx/pg_enigma</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_enigma-0.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_enigma-0.5.0.tar.gz</div>
    <div class="ext-card__desc">pg_enigma-0.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_enigma`**](/ext/e/pg_enigma) | `0.5.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7070  | [**`pg_enigma`**](/ext/e/pg_enigma) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgsodium`](/ext/e/pgsodium) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) [`pg_tde`](/ext/e/pg_tde) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_enigma` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_enigma_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-enigma` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
@ el8.x86_64 18 pg_enigma_18 pg_enigma_18-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_enigma_18-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_enigma_18 pg_enigma_18-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_enigma_18-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_enigma_18 pg_enigma_18-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_enigma_18-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_enigma_18 pg_enigma_18-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_enigma_18-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_enigma_18 pg_enigma_18-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_enigma_18-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_enigma_18 pg_enigma_18-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_enigma_18-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-enigma postgresql-18-enigma_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-18-enigma_0.5.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_enigma_17 pg_enigma_17-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_enigma_17-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_enigma_17 pg_enigma_17-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_enigma_17-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_enigma_17 pg_enigma_17-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_enigma_17-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_enigma_17 pg_enigma_17-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_enigma_17-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_enigma_17 pg_enigma_17-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_enigma_17-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_enigma_17 pg_enigma_17-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_enigma_17-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-enigma postgresql-17-enigma_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-17-enigma_0.5.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_enigma_16 pg_enigma_16-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_enigma_16-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_enigma_16 pg_enigma_16-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_enigma_16-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_enigma_16 pg_enigma_16-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_enigma_16-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_enigma_16 pg_enigma_16-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_enigma_16-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_enigma_16 pg_enigma_16-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_enigma_16-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_enigma_16 pg_enigma_16-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_enigma_16-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-enigma postgresql-16-enigma_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-16-enigma_0.5.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_enigma_15 pg_enigma_15-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_enigma_15-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_enigma_15 pg_enigma_15-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_enigma_15-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_enigma_15 pg_enigma_15-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_enigma_15-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_enigma_15 pg_enigma_15-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_enigma_15-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_enigma_15 pg_enigma_15-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_enigma_15-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_enigma_15 pg_enigma_15-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_enigma_15-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-enigma postgresql-15-enigma_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-15-enigma_0.5.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_enigma_14 pg_enigma_14-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_enigma_14-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_enigma_14 pg_enigma_14-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_enigma_14-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_enigma_14 pg_enigma_14-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_enigma_14-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_enigma_14 pg_enigma_14-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_enigma_14-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_enigma_14 pg_enigma_14-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_enigma_14-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_enigma_14 pg_enigma_14-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_enigma_14-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 3.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-enigma postgresql-14-enigma_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 1.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-enigma/postgresql-14-enigma_0.5.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_enigma` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_enigma         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_enigma` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_enigma;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_enigma -v 18  # PG 18
pig ext install -y pg_enigma -v 17  # PG 17
pig ext install -y pg_enigma -v 16  # PG 16
pig ext install -y pg_enigma -v 15  # PG 15
pig ext install -y pg_enigma -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_enigma_18       # PG 18
dnf install -y pg_enigma_17       # PG 17
dnf install -y pg_enigma_16       # PG 16
dnf install -y pg_enigma_15       # PG 15
dnf install -y pg_enigma_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-enigma   # PG 18
apt install -y postgresql-17-enigma   # PG 17
apt install -y postgresql-16-enigma   # PG 16
apt install -y postgresql-15-enigma   # PG 15
apt install -y postgresql-14-enigma   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_enigma;
```




## 用法

> [pg_enigma: 使用 PGP 和 RSA 密钥的 PostgreSQL 加密数据类型](https://github.com/SoftwareLibreMx/pg_enigma)

`pg_enigma` 为 PostgreSQL 提供 `Enigma` 加密数据类型，使用 PGP 或 OpenSSL RSA 密钥对静态数据进行加密。数据以加密形式存储，仅在私钥加载到内存中时才进行解密。

```sql
CREATE EXTENSION IF NOT EXISTS pg_enigma;
```

### PGP 密钥加密

```sql
-- 创建带加密列的表（密钥槽 2）
CREATE TABLE test_pgp (
    id SERIAL,
    val Enigma(2)
);

-- 加载公钥用于加密
SELECT set_public_key_from_file(2, '/path/to/public-key.asc');

-- 插入数据（自动使用公钥加密）
INSERT INTO test_pgp (val) VALUES ('A secret value'::Text);

-- 没有私钥时，SELECT 返回加密的 PGP 消息
SELECT * FROM test_pgp;

-- 加载私钥以启用解密
SELECT set_private_key_from_file(2, '/path/to/private-key.asc', 'passphrase');

-- 现在 SELECT 返回解密的明文
SELECT * FROM test_pgp;
-- id |      val
-- ----+----------------
--   1 | A secret value

-- 从内存中移除私钥
SELECT forget_private_key(2);
-- 后续 SELECT 再次返回加密数据
```

### RSA 密钥加密

```sql
CREATE TABLE test_rsa (
    id SERIAL,
    val Enigma(3)
);

SELECT set_public_key_from_file(3, '/path/to/alice_public.pem');
INSERT INTO test_rsa (val) VALUES ('Another secret value'::Text);

SELECT set_private_key_from_file(3, '/path/to/alice_private.pem', 'passphrase');
SELECT * FROM test_rsa;

SELECT forget_private_key(3);
```

### 函数

| 函数 | 描述 |
|------|------|
| `set_public_key_from_file(slot, path)` | 加载公钥用于加密 |
| `set_private_key_from_file(slot, path, passphrase)` | 加载私钥用于解密 |
| `forget_private_key(slot)` | 从内存中移除私钥 |
