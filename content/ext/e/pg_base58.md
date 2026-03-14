---
title: "pg_base58"
linkTitle: "pg_base58"
description: "Base58 编码/解码函数"
weight: 4830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Fell-x27/pg_base58">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Fell-x27/pg_base58</div>
    <div class="ext-card__desc">https://github.com/Fell-x27/pg_base58</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_base58-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_base58-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_base58-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_base58`**](/ext/e/pg_base58) | `0.0.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4830  | [**`pg_base58`**](/ext/e/pg_base58) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`url_encode`](/ext/e/url_encode) [`pg_cardano`](/ext/e/pg_cardano) [`base36`](/ext/e/base36) [`base62`](/ext/e/base62) [`pg_polyline`](/ext/e/pg_polyline) [`uri`](/ext/e/uri) [`pg_curl`](/ext/e/pg_curl) [`pg_rewrite`](/ext/e/pg_rewrite) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_base58` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_base58_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-base58` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_base58_18 pg_base58_18-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 288.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base58_18-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_base58_18 pg_base58_18-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 184.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base58_18-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_base58_18 pg_base58_18-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 303.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base58_18-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_base58_18 pg_base58_18-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 197.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base58_18-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_base58_18 pg_base58_18-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 303.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base58_18-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_base58_18 pg_base58_18-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 196.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base58_18-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 236.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 141.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 236.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 141.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 267.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 163.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 265.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-base58 postgresql-18-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 162.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-18-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_base58_17 pg_base58_17-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 288.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base58_17-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_base58_17 pg_base58_17-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 184.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base58_17-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_base58_17 pg_base58_17-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 302.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base58_17-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_base58_17 pg_base58_17-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 197.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base58_17-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_base58_17 pg_base58_17-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 303.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base58_17-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_base58_17 pg_base58_17-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 196.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base58_17-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 236.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 141.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 236.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 141.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 267.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 163.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 264.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-base58 postgresql-17-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 162.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-17-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_base58_16 pg_base58_16-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 288.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base58_16-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_base58_16 pg_base58_16-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 184.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base58_16-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_base58_16 pg_base58_16-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 302.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base58_16-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_base58_16 pg_base58_16-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 197.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base58_16-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_base58_16 pg_base58_16-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 303.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base58_16-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_base58_16 pg_base58_16-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 196.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base58_16-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 236.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 141.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 236.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 141.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 267.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 164.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 265.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-base58 postgresql-16-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 163.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-16-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_base58_15 pg_base58_15-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 287.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base58_15-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_base58_15 pg_base58_15-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 184.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base58_15-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_base58_15 pg_base58_15-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 302.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base58_15-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_base58_15 pg_base58_15-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 197.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base58_15-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_base58_15 pg_base58_15-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 302.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base58_15-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_base58_15 pg_base58_15-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 196.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base58_15-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 236.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 141.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 236.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 141.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 267.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 163.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 264.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-base58 postgresql-15-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 163.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-15-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_base58_14 pg_base58_14-0.0.1-2PIGSTY.el8.x86_64.rpm pigsty 0.0.1 287.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base58_14-0.0.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_base58_14 pg_base58_14-0.0.1-2PIGSTY.el8.aarch64.rpm pigsty 0.0.1 184.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base58_14-0.0.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_base58_14 pg_base58_14-0.0.1-2PIGSTY.el9.x86_64.rpm pigsty 0.0.1 302.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base58_14-0.0.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_base58_14 pg_base58_14-0.0.1-2PIGSTY.el9.aarch64.rpm pigsty 0.0.1 196.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base58_14-0.0.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_base58_14 pg_base58_14-0.0.1-2PIGSTY.el10.x86_64.rpm pigsty 0.0.1 302.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base58_14-0.0.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_base58_14 pg_base58_14-0.0.1-2PIGSTY.el10.aarch64.rpm pigsty 0.0.1 196.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base58_14-0.0.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 236.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 141.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 236.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 141.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 267.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 163.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 265.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-base58 postgresql-14-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 162.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-base58/postgresql-14-pg-base58_0.0.1-3PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_base58` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_base58         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_base58` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_base58;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_base58 -v 18  # PG 18
pig ext install -y pg_base58 -v 17  # PG 17
pig ext install -y pg_base58 -v 16  # PG 16
pig ext install -y pg_base58 -v 15  # PG 15
pig ext install -y pg_base58 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_base58_18       # PG 18
dnf install -y pg_base58_17       # PG 17
dnf install -y pg_base58_16       # PG 16
dnf install -y pg_base58_15       # PG 15
dnf install -y pg_base58_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-base58   # PG 18
apt install -y postgresql-17-pg-base58   # PG 17
apt install -y postgresql-16-pg-base58   # PG 16
apt install -y postgresql-15-pg-base58   # PG 15
apt install -y postgresql-14-pg-base58   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_base58;
```



## 用法

> [pg_base58: PostgreSQL 的 Base58 编解码函数](https://github.com/Fell-x27/pg_base58)

提供使用 Base58 编码对数据进行编码和解码的函数。

```sql
CREATE EXTENSION pg_base58;
```

### 函数

| 函数 | 说明 |
|---|---|
| `base58_encode(bytea)` | 将 bytea 数据编码为 Base58 文本 |
| `base58_decode(text)` | 将 Base58 文本解码为 bytea |

### 示例

```sql
-- 将字符串编码为 Base58
SELECT base58_encode('hello'::bytea);
-- 'Cn8eVZg'

-- 将 Base58 字符串解码
SELECT base58_decode('Cn8eVZg');
-- '\x68656c6c6f'  (即 'hello')

-- 往返转换
SELECT convert_from(base58_decode(base58_encode('hello'::bytea)), 'UTF8');
-- 'hello'
```
