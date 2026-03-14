---
title: "pgsmcrypto"
linkTitle: "pgsmcrypto"
description: "为PostgreSQL提供商密算法支持：SM2,SM3,SM4"
weight: 7060
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/zhuobie/pgsmcrypto">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">zhuobie/pgsmcrypto</div>
    <div class="ext-card__desc">https://github.com/zhuobie/pgsmcrypto</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsmcrypto-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsmcrypto-0.1.1.tar.gz</div>
    <div class="ext-card__desc">pgsmcrypto-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsmcrypto`**](/ext/e/pgsmcrypto) | `0.1.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7060  | [**`pgsmcrypto`**](/ext/e/pgsmcrypto) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgsodium`](/ext/e/pgsodium) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) [`pg_tde`](/ext/e/pg_tde) [`sslutils`](/ext/e/sslutils) [`faker`](/ext/e/faker) [`uuid-ossp`](/ext/e/uuid-ossp) [`lo`](/ext/e/lo) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pgsmcrypto` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pgsmcrypto_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsmcrypto` | - |
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
@ el8.x86_64 18 pgsmcrypto_18 pgsmcrypto_18-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 845.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsmcrypto_18-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgsmcrypto_18 pgsmcrypto_18-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 667.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsmcrypto_18-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgsmcrypto_18 pgsmcrypto_18-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 877.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsmcrypto_18-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgsmcrypto_18 pgsmcrypto_18-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 727.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsmcrypto_18-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgsmcrypto_18 pgsmcrypto_18-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 884.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsmcrypto_18-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgsmcrypto_18 pgsmcrypto_18-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 736.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsmcrypto_18-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 705.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 531.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 707.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 532.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 800.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 644.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 799.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgsmcrypto postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 631.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-18-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgsmcrypto_17 pgsmcrypto_17-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 845.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsmcrypto_17-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgsmcrypto_17 pgsmcrypto_17-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 667.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsmcrypto_17-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgsmcrypto_17 pgsmcrypto_17-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 877.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsmcrypto_17-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgsmcrypto_17 pgsmcrypto_17-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 727.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsmcrypto_17-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgsmcrypto_17 pgsmcrypto_17-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 884.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsmcrypto_17-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgsmcrypto_17 pgsmcrypto_17-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 736.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsmcrypto_17-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 706.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 531.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 707.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 532.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 801.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 642.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 797.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgsmcrypto postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 631.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-17-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgsmcrypto_16 pgsmcrypto_16-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 845.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsmcrypto_16-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgsmcrypto_16 pgsmcrypto_16-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 667.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsmcrypto_16-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgsmcrypto_16 pgsmcrypto_16-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 877.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsmcrypto_16-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgsmcrypto_16 pgsmcrypto_16-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 727.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsmcrypto_16-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgsmcrypto_16 pgsmcrypto_16-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 883.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsmcrypto_16-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgsmcrypto_16 pgsmcrypto_16-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 735.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsmcrypto_16-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 709.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 532.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 709.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 532.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 802.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 643.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 793.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgsmcrypto postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 631.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-16-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgsmcrypto_15 pgsmcrypto_15-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 845.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsmcrypto_15-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgsmcrypto_15 pgsmcrypto_15-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 667.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsmcrypto_15-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgsmcrypto_15 pgsmcrypto_15-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 875.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsmcrypto_15-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgsmcrypto_15 pgsmcrypto_15-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 726.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsmcrypto_15-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgsmcrypto_15 pgsmcrypto_15-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 880.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsmcrypto_15-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgsmcrypto_15 pgsmcrypto_15-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 735.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsmcrypto_15-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 706.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 532.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 707.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 532.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 803.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 643.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 795.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgsmcrypto postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 631.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-15-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgsmcrypto_14 pgsmcrypto_14-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 845.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsmcrypto_14-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgsmcrypto_14 pgsmcrypto_14-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 667.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsmcrypto_14-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgsmcrypto_14 pgsmcrypto_14-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 875.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsmcrypto_14-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgsmcrypto_14 pgsmcrypto_14-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 727.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsmcrypto_14-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgsmcrypto_14 pgsmcrypto_14-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 884.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsmcrypto_14-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgsmcrypto_14 pgsmcrypto_14-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 736.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsmcrypto_14-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 705.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 531.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 705.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 532.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 800.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 644.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 796.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgsmcrypto postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 631.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsmcrypto/postgresql-14-pgsmcrypto_0.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsmcrypto` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgsmcrypto         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgsmcrypto` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsmcrypto;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsmcrypto -v 18  # PG 18
pig ext install -y pgsmcrypto -v 17  # PG 17
pig ext install -y pgsmcrypto -v 16  # PG 16
pig ext install -y pgsmcrypto -v 15  # PG 15
pig ext install -y pgsmcrypto -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsmcrypto_18       # PG 18
dnf install -y pgsmcrypto_17       # PG 17
dnf install -y pgsmcrypto_16       # PG 16
dnf install -y pgsmcrypto_15       # PG 15
dnf install -y pgsmcrypto_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsmcrypto   # PG 18
apt install -y postgresql-17-pgsmcrypto   # PG 17
apt install -y postgresql-16-pgsmcrypto   # PG 16
apt install -y postgresql-15-pgsmcrypto   # PG 15
apt install -y postgresql-14-pgsmcrypto   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgsmcrypto;
```



## 用法

> [pgsmcrypto: PostgreSQL 国密算法扩展](https://github.com/zhuobie/pgsmcrypto)

`pgsmcrypto` 为 PostgreSQL 提供中国国密（SM 系列）算法，包括 SM3 哈希、SM2 非对称加密/签名和 SM4 对称加密。

```sql
CREATE EXTENSION pgsmcrypto;
```

### SM3 消息摘要

```sql
SELECT sm3_hash_string('abc');              -- 返回64字符十六进制字符串（32字节）
SELECT sm3_hash('abc'::bytea);              -- 对 bytea 输入求哈希
SELECT sm3_hash(E'\\x616263');              -- 对原始十六进制输入求哈希
```

### SM2 非对称加密

#### 密钥生成

```sql
SELECT sm2_gen_keypair();                   -- 返回 {私钥, 公钥} 数组
SELECT sm2_privkey_valid('f774...');        -- 验证私钥（1=有效）
SELECT sm2_pubkey_valid('8093...');         -- 验证公钥（1=有效）
SELECT sm2_pk_from_sk('f774...');           -- 从私钥派生公钥
```

#### 密钥导出/导入（PEM）

```sql
SELECT sm2_keypair_to_pem_bytes('f774...');       -- 私钥转 PEM
SELECT sm2_pubkey_to_pem_bytes('8093...');        -- 公钥转 PEM
SELECT sm2_keypair_from_pem_bytes(pem_bytes);     -- 从 PEM 导入
SELECT sm2_pubkey_from_pem_bytes(pem_bytes);      -- 从 PEM 导入公钥
```

#### 签名与验签

```sql
-- 裸签名/验签（直接签名消息）
WITH s AS (
    SELECT sm2_sign_raw('abc'::bytea, 'f774...') AS sig
)
SELECT sm2_verify_raw('abc'::bytea, sig, '8093...') FROM s;

-- 标准签名/验签（SM2规范，带 id + SM3 摘要）
WITH s AS (
    SELECT sm2_sign('myid'::bytea, 'abc'::bytea, 'f774...') AS sig
)
SELECT sm2_verify('myid'::bytea, 'abc'::bytea, sig, '8093...') FROM s;
```

#### 加密与解密

```sql
-- 标准加密/解密
WITH c AS (
    SELECT sm2_encrypt('abc'::bytea, '8093...') AS enc
)
SELECT sm2_decrypt(enc, 'f774...') FROM c;

-- 还提供：sm2_encrypt_c1c2c3、sm2_encrypt_asna1、sm2_encrypt_hex、sm2_encrypt_base64
-- 以及对应的解密变体
```

### SM4 对称加密

```sql
-- ECB 模式（密钥必须为16字节）
SELECT sm4_encrypt_ecb('abc'::bytea, '1234567812345678'::bytea);
SELECT sm4_decrypt_ecb(encrypted, '1234567812345678'::bytea);

-- CBC 模式（密钥和 IV 必须为16字节）
SELECT sm4_encrypt_cbc('abc'::bytea, '1234567812345678'::bytea, '0000000000000000'::bytea);
SELECT sm4_decrypt_cbc(encrypted, '1234567812345678'::bytea, '0000000000000000'::bytea);
```
