---
title: "anon"
linkTitle: "anon"
description: "数据匿名化处理工具"
weight: 7070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://gitlab.com/dalibo/postgresql_anonymizer/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://gitlab.com/dalibo/postgresql_anonymizer/</div>
    <div class="ext-card__desc">https://gitlab.com/dalibo/postgresql_anonymizer/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresql_anonymizer-3.1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresql_anonymizer-3.1.3.tar.gz</div>
    <div class="ext-card__desc">postgresql_anonymizer-3.1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_anon`**](/ext/e/anon) | `3.1.3` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7070  | [**`anon`**](/ext/e/anon) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `anon` |
{.ext-table}

| **相关扩展** | [`faker`](/ext/e/faker) [`pgsodium`](/ext/e/pgsodium) [`pgcrypto`](/ext/e/pgcrypto) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_tde`](/ext/e/pg_tde) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_anon` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_anon_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-anon` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| el8.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| el9.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| el9.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| el10.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| el10.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| d12.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| d12.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| d13.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| d13.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| u22.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| u22.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| u24.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| u24.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| u26.x86_64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
| u26.aarch64 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 | AVAIL PIGSTY 3.1.3 1 |
@ el8.x86_64 18 pg_anon_18 pg_anon_18-3.1.3-2PIGSTY.el8.x86_64.rpm pigsty 3.1.3 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_18-3.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_anon_18 pg_anon_18-3.1.3-2PIGSTY.el8.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_18-3.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_anon_18 pg_anon_18-3.1.3-2PIGSTY.el9.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_18-3.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_anon_18 pg_anon_18-3.1.3-2PIGSTY.el9.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_18-3.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_anon_18 pg_anon_18-3.1.3-2PIGSTY.el10.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_18-3.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_anon_18 pg_anon_18-3.1.3-2PIGSTY.el10.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_18-3.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb pigsty 3.1.3 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_anon_17 pg_anon_17-3.1.3-2PIGSTY.el8.x86_64.rpm pigsty 3.1.3 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_17-3.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_anon_17 pg_anon_17-3.1.3-2PIGSTY.el8.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_17-3.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_anon_17 pg_anon_17-3.1.3-2PIGSTY.el9.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_17-3.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_anon_17 pg_anon_17-3.1.3-2PIGSTY.el9.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_17-3.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_anon_17 pg_anon_17-3.1.3-2PIGSTY.el10.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_17-3.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_anon_17 pg_anon_17-3.1.3-2PIGSTY.el10.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_17-3.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb pigsty 3.1.3 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_anon_16 pg_anon_16-3.1.3-2PIGSTY.el8.x86_64.rpm pigsty 3.1.3 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_16-3.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_anon_16 pg_anon_16-3.1.3-2PIGSTY.el8.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_16-3.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_anon_16 pg_anon_16-3.1.3-2PIGSTY.el9.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_16-3.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_anon_16 pg_anon_16-3.1.3-2PIGSTY.el9.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_16-3.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_anon_16 pg_anon_16-3.1.3-2PIGSTY.el10.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_16-3.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_anon_16 pg_anon_16-3.1.3-2PIGSTY.el10.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_16-3.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb pigsty 3.1.3 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_anon_15 pg_anon_15-3.1.3-2PIGSTY.el8.x86_64.rpm pigsty 3.1.3 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_15-3.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_anon_15 pg_anon_15-3.1.3-2PIGSTY.el8.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_15-3.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_anon_15 pg_anon_15-3.1.3-2PIGSTY.el9.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_15-3.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_anon_15 pg_anon_15-3.1.3-2PIGSTY.el9.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_15-3.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_anon_15 pg_anon_15-3.1.3-2PIGSTY.el10.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_15-3.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_anon_15 pg_anon_15-3.1.3-2PIGSTY.el10.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_15-3.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb pigsty 3.1.3 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb pigsty 3.1.3 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_anon_14 pg_anon_14-3.1.3-2PIGSTY.el8.x86_64.rpm pigsty 3.1.3 3.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_14-3.1.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_anon_14 pg_anon_14-3.1.3-2PIGSTY.el8.aarch64.rpm pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_14-3.1.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_anon_14 pg_anon_14-3.1.3-2PIGSTY.el9.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_14-3.1.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_anon_14 pg_anon_14-3.1.3-2PIGSTY.el9.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_14-3.1.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_anon_14 pg_anon_14-3.1.3-2PIGSTY.el10.x86_64.rpm pigsty 3.1.3 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_14-3.1.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_anon_14 pg_anon_14-3.1.3-2PIGSTY.el10.aarch64.rpm pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_14-3.1.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb pigsty 3.1.3 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb pigsty 3.1.3 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb pigsty 3.1.3 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb pigsty 3.1.3 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb pigsty 3.1.3 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb pigsty 3.1.3 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.3-1PIGSTY~resolute_arm64.deb
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

来源：

- [PostgreSQL Anonymizer 3.1.3 README](https://gitlab.com/dalibo/postgresql_anonymizer/-/blob/3.1.3/README.md)
- [Masking functions](https://gitlab.com/dalibo/postgresql_anonymizer/-/blob/3.1.3/docs/masking_functions.md)
- [3.1.3 changelog](https://gitlab.com/dalibo/postgresql_anonymizer/-/blob/3.1.3/CHANGELOG.md)
- [Official documentation](https://postgresql-anonymizer.readthedocs.io/en/stable/)

`anon` 是 PostgreSQL Anonymizer，它应用声明式的遮掩规则以实现受保护查询的访问，并生成匿名化数据集。同时提供伪名化和随机响应辅助功能。在必须保持现实数据有用性而不暴露原始敏感值时使用它；将遮掩策略、角色授权以及未遮掩数据库的访问视为安全边界的一部分。

### 核心工作流程

在目标数据库会话中加载 `anon`，安装扩展并启用透明动态遮掩。新连接会自动获取数据库级别的设置。

```sql
ALTER DATABASE app SET session_preload_libraries = 'anon';

\connect app
CREATE EXTENSION anon;
ALTER DATABASE app SET anon.transparent_dynamic_masking = true;
```

将登录标记为被遮掩，并将遮掩规则附加到敏感列上：

```sql
CREATE ROLE reporting LOGIN;
SECURITY LABEL FOR anon ON ROLE reporting IS 'MASKED';
GRANT pg_read_all_data TO reporting;

SECURITY LABEL FOR anon ON COLUMN customer.last_name
  IS 'MASKED WITH FUNCTION anon.dummy_last_name()';
SECURITY LABEL FOR anon ON COLUMN customer.phone
  IS 'MASKED WITH FUNCTION anon.partial(phone, 2, $$******$$, 2)';
```

以 `reporting` 身份执行的查询会看到变换后的值。特权用户仍然可以看到原始值，因此不要授予被遮掩的角色绕过策略的路径。

### 遮掩策略

- **动态遮掩** 对标记为 `MASKED` 的角色转换结果而无需重写表。
- **静态遮掩** 永久性地重写选定的数据，并适用于一次性开发或测试副本。
- **匿名导出和复制体** 生成经过净化的导出或下游副本。
- **遮掩视图和数据包装器** 展示一个故意减少或转换后的投影。
- **伪名化** 在必须保持一致性的连接或重复值时使用确定性变换。

### 关键对象

- `anon.dummy_*`、`anon.random_*` 和 `anon.partial(...)` 生成或部分遮掩值。
- `anon.hash(text)` 和 `anon.digest(text, text, text)` 提供确定性转换。在 3.1.2 版本中，它们被标记为 `RESTRICTED` 以限制暴力破解暴露。
- `anon.ldp_grrm(value, epsilon, max_v)` 和 `anon.ldp_grrm_pttt(value, truth_probability, max_v)` 实现了局部差分隐私的通用随机响应。
- `anon.ldp_truth_probability(...)` 和 `anon.ldp_lie_probability(...)` 用于检查随机响应概率。
- 角色和列上的安全标签定义谁被遮掩以及每个值如何转换。

### 运营注意事项

`anon` 是超级用户安装且不可重定位的。使用与预期消费者相同的授权和连接路径测试每项策略。随机化不是自动确定性的；当需要稳定相等时，请使用确认的伪名化函数。静态匿名化是破坏性的，因此在副本上运行它并在之后验证约束条件和应用程序行为。

版本 3.1.3 重新运行缺失的 ARM 构建并更改发布元数据，没有新的 SQL 工作流。自 3.1.1 版本以来的主要差异在于对 `anon.hash` 和 `anon.digest` 的 3.1.2 安全强化；使用这些函数的部署应升级而不是依赖旧标签。
