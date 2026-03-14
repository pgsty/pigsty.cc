---
title: "shacrypt"
linkTitle: "shacrypt"
description: "实现SHA256-CRYPT与SHA512-CRYPT密钥加密算法"
weight: 4440
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dverite/postgres-shacrypt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dverite/postgres-shacrypt</div>
    <div class="ext-card__desc">https://github.com/dverite/postgres-shacrypt</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgres_shacrypt-1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgres_shacrypt-1.1.tar.gz</div>
    <div class="ext-card__desc">postgres_shacrypt-1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`shacrypt`**](/ext/e/shacrypt) | `1.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4440  | [**`shacrypt`**](/ext/e/shacrypt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hashlib`](/ext/e/hashlib) [`xxhash`](/ext/e/xxhash) [`cryptint`](/ext/e/cryptint) [`pguecc`](/ext/e/pguecc) [`pgcrypto`](/ext/e/pgcrypto) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `shacrypt` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `shacrypt_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-shacrypt` | - |
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
@ el8.x86_64 18 shacrypt_18 shacrypt_18-1.1-2PIGSTY.el8.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/shacrypt_18-1.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 shacrypt_18 shacrypt_18-1.1-2PIGSTY.el8.aarch64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/shacrypt_18-1.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 shacrypt_18 shacrypt_18-1.1-2PIGSTY.el9.x86_64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/shacrypt_18-1.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 shacrypt_18 shacrypt_18-1.1-2PIGSTY.el9.aarch64.rpm pigsty 1.1 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/shacrypt_18-1.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 shacrypt_18 shacrypt_18-1.1-2PIGSTY.el10.x86_64.rpm pigsty 1.1 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/shacrypt_18-1.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 shacrypt_18 shacrypt_18-1.1-2PIGSTY.el10.aarch64.rpm pigsty 1.1 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/shacrypt_18-1.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-shacrypt postgresql-18-shacrypt_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-18-shacrypt_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 shacrypt_17 shacrypt_17-1.1-2PIGSTY.el8.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/shacrypt_17-1.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 shacrypt_17 shacrypt_17-1.1-2PIGSTY.el8.aarch64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/shacrypt_17-1.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 shacrypt_17 shacrypt_17-1.1-2PIGSTY.el9.x86_64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/shacrypt_17-1.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 shacrypt_17 shacrypt_17-1.1-2PIGSTY.el9.aarch64.rpm pigsty 1.1 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/shacrypt_17-1.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 shacrypt_17 shacrypt_17-1.1-2PIGSTY.el10.x86_64.rpm pigsty 1.1 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/shacrypt_17-1.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 shacrypt_17 shacrypt_17-1.1-2PIGSTY.el10.aarch64.rpm pigsty 1.1 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/shacrypt_17-1.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-shacrypt postgresql-17-shacrypt_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-17-shacrypt_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 shacrypt_16 shacrypt_16-1.1-2PIGSTY.el8.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/shacrypt_16-1.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 shacrypt_16 shacrypt_16-1.1-2PIGSTY.el8.aarch64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/shacrypt_16-1.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 shacrypt_16 shacrypt_16-1.1-2PIGSTY.el9.x86_64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/shacrypt_16-1.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 shacrypt_16 shacrypt_16-1.1-2PIGSTY.el9.aarch64.rpm pigsty 1.1 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/shacrypt_16-1.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 shacrypt_16 shacrypt_16-1.1-2PIGSTY.el10.x86_64.rpm pigsty 1.1 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/shacrypt_16-1.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 shacrypt_16 shacrypt_16-1.1-2PIGSTY.el10.aarch64.rpm pigsty 1.1 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/shacrypt_16-1.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-shacrypt postgresql-16-shacrypt_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-16-shacrypt_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 shacrypt_15 shacrypt_15-1.1-2PIGSTY.el8.x86_64.rpm pigsty 1.1 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/shacrypt_15-1.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 shacrypt_15 shacrypt_15-1.1-2PIGSTY.el8.aarch64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/shacrypt_15-1.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 shacrypt_15 shacrypt_15-1.1-2PIGSTY.el9.x86_64.rpm pigsty 1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/shacrypt_15-1.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 shacrypt_15 shacrypt_15-1.1-2PIGSTY.el9.aarch64.rpm pigsty 1.1 19.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/shacrypt_15-1.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 shacrypt_15 shacrypt_15-1.1-2PIGSTY.el10.x86_64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/shacrypt_15-1.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 shacrypt_15 shacrypt_15-1.1-2PIGSTY.el10.aarch64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/shacrypt_15-1.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-shacrypt postgresql-15-shacrypt_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-15-shacrypt_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 shacrypt_14 shacrypt_14-1.1-2PIGSTY.el8.x86_64.rpm pigsty 1.1 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/shacrypt_14-1.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 shacrypt_14 shacrypt_14-1.1-2PIGSTY.el8.aarch64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/shacrypt_14-1.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 shacrypt_14 shacrypt_14-1.1-2PIGSTY.el9.x86_64.rpm pigsty 1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/shacrypt_14-1.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 shacrypt_14 shacrypt_14-1.1-2PIGSTY.el9.aarch64.rpm pigsty 1.1 19.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/shacrypt_14-1.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 shacrypt_14 shacrypt_14-1.1-2PIGSTY.el10.x86_64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/shacrypt_14-1.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 shacrypt_14 shacrypt_14-1.1-2PIGSTY.el10.aarch64.rpm pigsty 1.1 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/shacrypt_14-1.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 2.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-shacrypt postgresql-14-shacrypt_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 2.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgres-shacrypt/postgresql-14-shacrypt_1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `shacrypt` 扩展的 RPM / DEB 包：

```bash
pig build pkg shacrypt         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `shacrypt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install shacrypt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y shacrypt -v 18  # PG 18
pig ext install -y shacrypt -v 17  # PG 17
pig ext install -y shacrypt -v 16  # PG 16
pig ext install -y shacrypt -v 15  # PG 15
pig ext install -y shacrypt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y shacrypt_18       # PG 18
dnf install -y shacrypt_17       # PG 17
dnf install -y shacrypt_16       # PG 16
dnf install -y shacrypt_15       # PG 15
dnf install -y shacrypt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-shacrypt   # PG 18
apt install -y postgresql-17-shacrypt   # PG 17
apt install -y postgresql-16-shacrypt   # PG 16
apt install -y postgresql-15-shacrypt   # PG 15
apt install -y postgresql-14-shacrypt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION shacrypt;
```



## 用法

> [shacrypt: PostgreSQL 的 SHA-crypt 密码哈希](https://github.com/dverite/postgres-shacrypt)

按照 [SHA-crypt 规范](https://www.akkadia.org/drepper/SHA-crypt.txt) 生成 SHA256-CRYPT 和 SHA512-CRYPT 密码哈希。

### 函数

#### `sha256_crypt(key text, salt text) RETURNS text`

```sql
SELECT sha256_crypt('clearpassword', 'somesalt');
-- $5$somesalt$l3SlbI688JBlRS9RWFC1EwZLNJqfQKcrF3yhcbc7ffA
```

使用自定义轮数：

```sql
SELECT sha256_crypt('clearpassword', '$5$rounds=10000$somesalt');
-- $5$rounds=10000$somesalt$OekH6Tu7EOJIAvxKJ4Ko4bG0DxgO83gZODJLTTjXJi5
```

#### `sha512_crypt(key text, salt text) RETURNS text`

```sql
SELECT sha512_crypt('clearpassword', 'somesalt');
-- $6$somesalt$dDcgWMHOtvHI6qT/Khi3uaaxXN6v4N9bnOeWFl/Y6K3pzxi/...
```

### 盐值格式

- 简单盐值：`'somesalt'`
- 带算法前缀：`'$5$somesalt'`（SHA-256）或 `'$6$somesalt'`（SHA-512）
- 带自定义轮数：`'$5$rounds=10000$somesalt'`
