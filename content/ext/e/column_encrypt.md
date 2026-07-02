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
| u26.x86_64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
| u26.aarch64 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 | AVAIL PIGSTY 4.0 1 |
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
@ u26.x86_64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb pigsty 4.0 62.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-column-encrypt postgresql-18-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb pigsty 4.0 62.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-18-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb
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
@ u26.x86_64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb pigsty 4.0 62.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-column-encrypt postgresql-17-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb pigsty 4.0 62.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-17-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb
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
@ u26.x86_64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb pigsty 4.0 62.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-column-encrypt postgresql-16-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb pigsty 4.0 62.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-16-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb
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
@ u26.x86_64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb pigsty 4.0 62.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-column-encrypt postgresql-15-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb pigsty 4.0 62.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-15-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb
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
@ u26.x86_64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb pigsty 4.0 62.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-column-encrypt postgresql-14-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb pigsty 4.0 62.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/column-encrypt/postgresql-14-column-encrypt_4.0-1PIGSTY~resolute_arm64.deb
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




## 用法

来源：[README](https://github.com/vibhorkum/column_encrypt/blob/master/README.md)，[v4.0 release](https://github.com/vibhorkum/column_encrypt/releases/tag/v4.0)，[SQL objects](https://github.com/vibhorkum/column_encrypt/blob/master/column_encrypt--4.0.sql)

`column_encrypt` 为 PostgreSQL 提供透明列级加密。它定义 `encrypted_text` 和 `encrypted_bytea` 类型，通过类型输入函数加密写入值，通过输出函数解密读取值，并在 `encrypt` schema 中管理数据加密密钥。

### 启用

先在服务器启动时加载共享库，重启 PostgreSQL，然后创建 schema 和扩展：

```conf
shared_preload_libraries = 'column_encrypt'
```

```sql
CREATE EXTENSION pgcrypto;
CREATE SCHEMA IF NOT EXISTS encrypt;
CREATE EXTENSION column_encrypt;
```

可以把 `encrypt` 加入 `search_path`，也可以显式使用 schema 前缀。

### 注册与加载密钥

```sql
SELECT encrypt.register_key('my-secret-data-key', 'my-master-passphrase');
SELECT encrypt.load_key('my-master-passphrase');

SELECT * FROM encrypt.keys();
SELECT * FROM encrypt.status();
```

扩展使用两层密钥模型，包括密钥加密密钥和数据加密密钥。密文携带 key version 头部，因此轮换密钥后仍可解密旧值。

### 加密列

```sql
CREATE TABLE secure_data (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  ssn encrypt.encrypted_text,
  payload encrypt.encrypted_bytea
);

INSERT INTO secure_data (ssn, payload)
VALUES ('888-999-2045', decode('aabbcc', 'hex'));

SELECT id, ssn FROM secure_data;
```

当前会话没有加载密钥时，读取加密值会报解密错误。

### 密钥操作

常用函数包括 `encrypt.activate_key`、`encrypt.revoke_key`、`encrypt.rotate`、`encrypt.verify`、`encrypt.unload_key`、`encrypt.loaded_cipher_key_versions`、`encrypt.blind_index`。

不能直接暴露明文值的查找场景，可以使用 blind index：

```sql
SELECT encrypt.blind_index('888-999-2045', 'lookup-hmac-key');
```

### 注意事项

扩展有意拒绝加密值的 binary send/receive。相等和哈希语义基于解密后的明文；不支持范围排序。从旧的密文哈希语义升级后，需要重建加密列上的哈希索引。
