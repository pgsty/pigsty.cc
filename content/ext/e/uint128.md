---
title: "uint128"
linkTitle: "uint128"
description: "原生128位无符号整型数据类型"
weight: 3740
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pg-uint/pg-uint128">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pg-uint/pg-uint128</div>
    <div class="ext-card__desc">https://github.com/pg-uint/pg-uint128</div>
  </a>
  <a class="ext-card ext-card--source" href="pg-uint128-1.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-uint128-1.2.0.tar.gz</div>
    <div class="ext-card__desc">pg-uint128-1.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_uint128`**](/ext/e/uint128) | `1.2.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3740  | [**`uint128`**](/ext/e/uint128) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> breaks on el8 since 1.1 ,fix el8 build problem by adding __has_builtin marco


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_uint128` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_uint128_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-uint128` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
@ el8.x86_64 18 pg_uint128_18 pg_uint128_18-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_uint128_18-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_uint128_18 pg_uint128_18-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 176.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_uint128_18-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_uint128_18 pg_uint128_18-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 170.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_uint128_18-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_uint128_18 pg_uint128_18-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 161.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_uint128_18-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_uint128_18 pg_uint128_18-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 169.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_uint128_18-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_uint128_18 pg_uint128_18-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 163.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_uint128_18-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 328.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 318.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 327.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 319.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 365.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 357.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 355.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 352.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_uint128_17 pg_uint128_17-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_uint128_17-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_uint128_17 pg_uint128_17-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 176.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_uint128_17-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_uint128_17 pg_uint128_17-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 169.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_uint128_17-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_uint128_17 pg_uint128_17-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 161.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_uint128_17-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_uint128_17 pg_uint128_17-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 169.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_uint128_17-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_uint128_17 pg_uint128_17-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 163.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_uint128_17-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 327.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 327.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 320.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 384.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 373.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 355.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 352.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_uint128_16 pg_uint128_16-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_uint128_16-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_uint128_16 pg_uint128_16-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 176.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_uint128_16-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_uint128_16 pg_uint128_16-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 170.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_uint128_16-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_uint128_16 pg_uint128_16-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 161.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_uint128_16-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_uint128_16 pg_uint128_16-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 169.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_uint128_16-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_uint128_16 pg_uint128_16-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 164.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_uint128_16-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 327.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 318.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 326.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 319.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 381.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 371.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 354.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 352.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_uint128_15 pg_uint128_15-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_uint128_15-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_uint128_15 pg_uint128_15-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 176.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_uint128_15-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_uint128_15 pg_uint128_15-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 170.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_uint128_15-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_uint128_15 pg_uint128_15-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 161.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_uint128_15-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_uint128_15 pg_uint128_15-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 172.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_uint128_15-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_uint128_15 pg_uint128_15-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 164.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_uint128_15-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 331.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 322.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 331.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 324.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 383.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 374.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 359.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 356.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_uint128_14 pg_uint128_14-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_uint128_14-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_uint128_14 pg_uint128_14-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 176.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_uint128_14-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_uint128_14 pg_uint128_14-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 171.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_uint128_14-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_uint128_14 pg_uint128_14-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 161.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_uint128_14-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_uint128_14 pg_uint128_14-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 171.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_uint128_14-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_uint128_14 pg_uint128_14-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 165.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_uint128_14-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 331.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 322.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 331.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 324.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 383.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 374.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 359.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-uint128 postgresql-14-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 356.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-14-pg-uint128_1.2.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_uint128` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_uint128         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_uint128` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_uint128;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_uint128 -v 18  # PG 18
pig ext install -y pg_uint128 -v 17  # PG 17
pig ext install -y pg_uint128 -v 16  # PG 16
pig ext install -y pg_uint128 -v 15  # PG 15
pig ext install -y pg_uint128 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_uint128_18       # PG 18
dnf install -y pg_uint128_17       # PG 17
dnf install -y pg_uint128_16       # PG 16
dnf install -y pg_uint128_15       # PG 15
dnf install -y pg_uint128_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-uint128   # PG 18
apt install -y postgresql-17-pg-uint128   # PG 17
apt install -y postgresql-16-pg-uint128   # PG 16
apt install -y postgresql-15-pg-uint128   # PG 15
apt install -y postgresql-14-pg-uint128   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION uint128;
```
