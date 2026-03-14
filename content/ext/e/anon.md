---
title: "anon"
linkTitle: "anon"
description: "数据匿名化处理工具"
weight: 7050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://gitlab.com/dalibo/postgresql_anonymizer/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://gitlab.com/dalibo/postgresql_anonymizer/</div>
    <div class="ext-card__desc">https://gitlab.com/dalibo/postgresql_anonymizer/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_anon-3.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_anon-3.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_anon-3.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_anon`**](/ext/e/anon) | `3.0.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7050  | [**`anon`**](/ext/e/anon) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `anon` |
{.ext-table}

| **相关扩展** | [`faker`](/ext/e/faker) [`pgsodium`](/ext/e/pgsodium) [`pgcrypto`](/ext/e/pgcrypto) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_tde`](/ext/e/pg_tde) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_anon` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_anon_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-anon` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 | AVAIL PIGSTY 3.0.1 1 |
@ el8.x86_64 18 pg_anon_18 pg_anon_18-3.0.1-1PIGSTY.el8.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_18-3.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_anon_18 pg_anon_18-3.0.1-1PIGSTY.el8.aarch64.rpm pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_18-3.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_anon_18 pg_anon_18-3.0.1-1PIGSTY.el9.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_18-3.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_anon_18 pg_anon_18-3.0.1-1PIGSTY.el9.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_18-3.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_anon_18 pg_anon_18-3.0.1-1PIGSTY.el10.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_18-3.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_anon_18 pg_anon_18-3.0.1-1PIGSTY.el10.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_18-3.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-18-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_anon_17 pg_anon_17-3.0.1-1PIGSTY.el8.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_17-3.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_anon_17 pg_anon_17-3.0.1-1PIGSTY.el8.aarch64.rpm pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_17-3.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_anon_17 pg_anon_17-3.0.1-1PIGSTY.el9.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_17-3.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_anon_17 pg_anon_17-3.0.1-1PIGSTY.el9.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_17-3.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_anon_17 pg_anon_17-3.0.1-1PIGSTY.el10.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_17-3.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_anon_17 pg_anon_17-3.0.1-1PIGSTY.el10.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_17-3.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-17-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_anon_16 pg_anon_16-3.0.1-1PIGSTY.el8.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_16-3.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_anon_16 pg_anon_16-3.0.1-1PIGSTY.el8.aarch64.rpm pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_16-3.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_anon_16 pg_anon_16-3.0.1-1PIGSTY.el9.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_16-3.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_anon_16 pg_anon_16-3.0.1-1PIGSTY.el9.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_16-3.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_anon_16 pg_anon_16-3.0.1-1PIGSTY.el10.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_16-3.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_anon_16 pg_anon_16-3.0.1-1PIGSTY.el10.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_16-3.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-16-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_anon_15 pg_anon_15-3.0.1-1PIGSTY.el8.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_15-3.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_anon_15 pg_anon_15-3.0.1-1PIGSTY.el8.aarch64.rpm pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_15-3.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_anon_15 pg_anon_15-3.0.1-1PIGSTY.el9.x86_64.rpm pigsty 3.0.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_15-3.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_anon_15 pg_anon_15-3.0.1-1PIGSTY.el9.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_15-3.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_anon_15 pg_anon_15-3.0.1-1PIGSTY.el10.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_15-3.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_anon_15 pg_anon_15-3.0.1-1PIGSTY.el10.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_15-3.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-15-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_anon_14 pg_anon_14-3.0.1-1PIGSTY.el8.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_14-3.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_anon_14 pg_anon_14-3.0.1-1PIGSTY.el8.aarch64.rpm pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_14-3.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_anon_14 pg_anon_14-3.0.1-1PIGSTY.el9.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_14-3.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_anon_14 pg_anon_14-3.0.1-1PIGSTY.el9.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_14-3.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_anon_14 pg_anon_14-3.0.1-1PIGSTY.el10.x86_64.rpm pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_14-3.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_anon_14 pg_anon_14-3.0.1-1PIGSTY.el10.aarch64.rpm pigsty 3.0.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_14-3.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb pigsty 3.0.1 2.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb pigsty 3.0.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb pigsty 3.0.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-14-pg-anon_3.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_anon` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_anon         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_anon` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_anon;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_anon -v 18  # PG 18
pig ext install -y pg_anon -v 17  # PG 17
pig ext install -y pg_anon -v 16  # PG 16
pig ext install -y pg_anon -v 15  # PG 15
pig ext install -y pg_anon -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_anon_18       # PG 18
dnf install -y pg_anon_17       # PG 17
dnf install -y pg_anon_16       # PG 16
dnf install -y pg_anon_15       # PG 15
dnf install -y pg_anon_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-anon   # PG 18
apt install -y postgresql-17-pg-anon   # PG 17
apt install -y postgresql-16-pg-anon   # PG 16
apt install -y postgresql-15-pg-anon   # PG 15
apt install -y postgresql-14-pg-anon   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'anon';
```


**创建扩展**：

```sql
CREATE EXTENSION anon;
```



## 用法

> [anon: PostgreSQL 匿名化与数据脱敏](https://gitlab.com/dalibo/postgresql_anonymizer/)

`postgresql_anonymizer`（扩展名：`anon`）使用声明式方法对个人身份信息（PII）进行脱敏或替换。脱敏规则直接通过安全标签在数据库模式中定义。

```sql
CREATE EXTENSION IF NOT EXISTS anon CASCADE;
SELECT anon.init();
```

### 声明脱敏规则

```sql
SECURITY LABEL FOR anon ON COLUMN player.name
  IS 'MASKED WITH FUNCTION anon.fake_last_name()';

SECURITY LABEL FOR anon ON COLUMN player.id
  IS 'MASKED WITH VALUE NULL';
```

### 静态脱敏

永久替换数据库中的 PII：

```sql
SECURITY LABEL FOR anon ON COLUMN customer.full_name
  IS 'MASKED WITH FUNCTION anon.fake_first_name() || '' '' || anon.fake_last_name()';

SECURITY LABEL FOR anon ON COLUMN customer.birth
  IS 'MASKED WITH FUNCTION anon.random_date_between(''1920-01-01''::DATE, now())';

SELECT anon.anonymize_database();
-- 也可使用：anon.anonymize_table()、anon.anonymize_column()
```

### 动态脱敏

对特定角色隐藏 PII，其他角色可见原始数据：

```sql
SELECT anon.start_dynamic_masking();

CREATE ROLE skynet LOGIN;
SECURITY LABEL FOR anon ON ROLE skynet IS 'MASKED';

SECURITY LABEL FOR anon ON COLUMN people.lastname
  IS 'MASKED WITH FUNCTION anon.fake_last_name()';

SECURITY LABEL FOR anon ON COLUMN people.phone
  IS 'MASKED WITH FUNCTION anon.partial(phone, 2, $$******$$, 2)';
```

当 `skynet` 查询该表时，会自动返回脱敏后的数据。

### 匿名导出

```bash
pg_dump_anon.sh -h localhost -p 5432 -U bob bob_db > dump.sql
```

### 常用脱敏函数

| 函数 | 描述 |
|----------|-------------|
| `anon.fake_first_name()` | 随机名字 |
| `anon.fake_last_name()` | 随机姓氏 |
| `anon.fake_company()` | 随机公司名 |
| `anon.random_date_between(d1, d2)` | 范围内随机日期 |
| `anon.random_zip()` | 随机邮政编码 |
| `anon.partial(value, prefix, padding, suffix)` | 部分混淆 |
| `anon.random_string(n)` | 长度为 n 的随机字符串 |
| `anon.random_int_between(i1, i2)` | 范围内随机整数 |
