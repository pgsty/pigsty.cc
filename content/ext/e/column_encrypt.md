---
title: "column_encrypt"
linkTitle: "column_encrypt"
description: "透明列级加密扩展，提供 encrypted_text 与 encrypted_bytea 类型"
weight: 7030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vibhorkum/column_encrypt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vibhorkum/column_encrypt</div>
    <div class="ext-card__desc">https://github.com/vibhorkum/column_encrypt</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/column_encrypt-4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">column_encrypt-4.0.tar.gz</div>
    <div class="ext-card__desc">column_encrypt-4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`column_encrypt`**](/ext/e/column_encrypt) | `4.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7030  | [**`column_encrypt`**](/ext/e/column_encrypt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `encrypt` |
{.ext-table}

| **相关扩展** | [`pgcrypto`](/ext/e/pgcrypto) [`pg_enigma`](/ext/e/pg_enigma) [`pgsodium`](/ext/e/pgsodium) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) [`pg_tde`](/ext/e/pg_tde) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`sslutils`](/ext/e/sslutils) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> fixed encrypt schema; create schema encrypt before CREATE EXTENSION; preload column_encrypt;


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0` | {{< pgvers "18,17,16,15,14" >}} | `column_encrypt` | `pgcrypto` |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0` | {{< pgvers "18,17,16,15,14" >}} | `column_encrypt_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-column-encrypt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| el8.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| el9.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| el9.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| el10.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| el10.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
@ el8.x86_64 18 column_encrypt_18 column_encrypt_18-4.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0 55.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/column_encrypt_18-4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 column_encrypt_18 column_encrypt_18-4.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0 54.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/column_encrypt_18-4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 column_encrypt_18 column_encrypt_18-4.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0 51.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/column_encrypt_18-4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 column_encrypt_18 column_encrypt_18-4.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/column_encrypt_18-4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 column_encrypt_18 column_encrypt_18-4.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0 51.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/column_encrypt_18-4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 column_encrypt_18 column_encrypt_18-4.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0 51.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/column_encrypt_18-4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 61.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb pigsty 4.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb pigsty 4.0 61.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 63.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 62.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 62.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 61.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 column_encrypt_17 column_encrypt_17-4.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0 55.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/column_encrypt_17-4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 column_encrypt_17 column_encrypt_17-4.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0 54.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/column_encrypt_17-4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 column_encrypt_17 column_encrypt_17-4.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0 51.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/column_encrypt_17-4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 column_encrypt_17 column_encrypt_17-4.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/column_encrypt_17-4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 column_encrypt_17 column_encrypt_17-4.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0 51.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/column_encrypt_17-4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 column_encrypt_17 column_encrypt_17-4.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0 51.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/column_encrypt_17-4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 61.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb pigsty 4.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb pigsty 4.0 61.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 64.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 64.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 62.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 61.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 column_encrypt_16 column_encrypt_16-4.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0 55.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/column_encrypt_16-4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 column_encrypt_16 column_encrypt_16-4.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0 54.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/column_encrypt_16-4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 column_encrypt_16 column_encrypt_16-4.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0 51.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/column_encrypt_16-4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 column_encrypt_16 column_encrypt_16-4.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/column_encrypt_16-4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 column_encrypt_16 column_encrypt_16-4.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0 51.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/column_encrypt_16-4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 column_encrypt_16 column_encrypt_16-4.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0 51.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/column_encrypt_16-4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 61.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb pigsty 4.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb pigsty 4.0 61.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 64.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 64.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 62.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 61.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 column_encrypt_15 column_encrypt_15-4.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0 55.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/column_encrypt_15-4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 column_encrypt_15 column_encrypt_15-4.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0 55.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/column_encrypt_15-4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 column_encrypt_15 column_encrypt_15-4.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0 51.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/column_encrypt_15-4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 column_encrypt_15 column_encrypt_15-4.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0 51.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/column_encrypt_15-4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 column_encrypt_15 column_encrypt_15-4.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0 52.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/column_encrypt_15-4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 column_encrypt_15 column_encrypt_15-4.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0 52.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/column_encrypt_15-4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 61.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb pigsty 4.0 62.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb pigsty 4.0 61.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 65.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 64.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 62.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 column_encrypt_14 column_encrypt_14-4.0-1PIGSTY.el8.x86_64.rpm pigsty 4.0 55.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/column_encrypt_14-4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 column_encrypt_14 column_encrypt_14-4.0-1PIGSTY.el8.aarch64.rpm pigsty 4.0 55.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/column_encrypt_14-4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 column_encrypt_14 column_encrypt_14-4.0-1PIGSTY.el9.x86_64.rpm pigsty 4.0 51.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/column_encrypt_14-4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 column_encrypt_14 column_encrypt_14-4.0-1PIGSTY.el9.aarch64.rpm pigsty 4.0 51.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/column_encrypt_14-4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 column_encrypt_14 column_encrypt_14-4.0-1PIGSTY.el10.x86_64.rpm pigsty 4.0 52.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/column_encrypt_14-4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 column_encrypt_14 column_encrypt_14-4.0-1PIGSTY.el10.aarch64.rpm pigsty 4.0 51.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/column_encrypt_14-4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 61.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb pigsty 4.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb pigsty 4.0 61.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 65.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 64.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 62.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `column_encrypt` 扩展的 RPM / DEB 包：

```bash
pig build pkg column_encrypt         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `column_encrypt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install column_encrypt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y column_encrypt -v 18  # PG 18
pig ext install -y column_encrypt -v 17  # PG 17
pig ext install -y column_encrypt -v 16  # PG 16
pig ext install -y column_encrypt -v 15  # PG 15
pig ext install -y column_encrypt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y column_encrypt_18       # PG 18
dnf install -y column_encrypt_17       # PG 17
dnf install -y column_encrypt_16       # PG 16
dnf install -y column_encrypt_15       # PG 15
dnf install -y column_encrypt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-column-encrypt   # PG 18
apt install -y postgresql-17-column-encrypt   # PG 17
apt install -y postgresql-16-column-encrypt   # PG 16
apt install -y postgresql-15-column-encrypt   # PG 15
apt install -y postgresql-14-column-encrypt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'column_encrypt';
```


**创建扩展**：

```sql
CREATE EXTENSION column_encrypt CASCADE;  -- 依赖: pgcrypto
```
