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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresql_anonymizer-3.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresql_anonymizer-3.1.1.tar.gz</div>
    <div class="ext-card__desc">postgresql_anonymizer-3.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_anon`**](/ext/e/anon) | `3.1.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7070  | [**`anon`**](/ext/e/anon) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `anon` |
{.ext-table}

| **相关扩展** | [`faker`](/ext/e/faker) [`pgsodium`](/ext/e/pgsodium) [`pgcrypto`](/ext/e/pgcrypto) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_tde`](/ext/e/pg_tde) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pgrx patched to 0.18.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_anon` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_anon_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-anon` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| u26.x86_64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
| u26.aarch64 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 | AVAIL PIGSTY 3.1.1 1 |
@ el8.x86_64 18 pg_anon_18 pg_anon_18-3.1.1-1PIGSTY.el8.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_18-3.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_anon_18 pg_anon_18-3.1.1-1PIGSTY.el8.aarch64.rpm pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_18-3.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_anon_18 pg_anon_18-3.1.1-1PIGSTY.el9.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_18-3.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_anon_18 pg_anon_18-3.1.1-1PIGSTY.el9.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_18-3.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_anon_18 pg_anon_18-3.1.1-1PIGSTY.el10.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_18-3.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_anon_18 pg_anon_18-3.1.1-1PIGSTY.el10.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_18-3.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-anon postgresql-18-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-18-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_anon_17 pg_anon_17-3.1.1-1PIGSTY.el8.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_17-3.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_anon_17 pg_anon_17-3.1.1-1PIGSTY.el8.aarch64.rpm pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_17-3.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_anon_17 pg_anon_17-3.1.1-1PIGSTY.el9.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_17-3.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_anon_17 pg_anon_17-3.1.1-1PIGSTY.el9.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_17-3.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_anon_17 pg_anon_17-3.1.1-1PIGSTY.el10.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_17-3.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_anon_17 pg_anon_17-3.1.1-1PIGSTY.el10.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_17-3.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-anon postgresql-17-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-17-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_anon_16 pg_anon_16-3.1.1-1PIGSTY.el8.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_16-3.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_anon_16 pg_anon_16-3.1.1-1PIGSTY.el8.aarch64.rpm pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_16-3.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_anon_16 pg_anon_16-3.1.1-1PIGSTY.el9.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_16-3.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_anon_16 pg_anon_16-3.1.1-1PIGSTY.el9.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_16-3.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_anon_16 pg_anon_16-3.1.1-1PIGSTY.el10.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_16-3.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_anon_16 pg_anon_16-3.1.1-1PIGSTY.el10.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_16-3.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-anon postgresql-16-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-16-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_anon_15 pg_anon_15-3.1.1-1PIGSTY.el8.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_15-3.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_anon_15 pg_anon_15-3.1.1-1PIGSTY.el8.aarch64.rpm pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_15-3.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_anon_15 pg_anon_15-3.1.1-1PIGSTY.el9.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_15-3.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_anon_15 pg_anon_15-3.1.1-1PIGSTY.el9.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_15-3.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_anon_15 pg_anon_15-3.1.1-1PIGSTY.el10.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_15-3.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_anon_15 pg_anon_15-3.1.1-1PIGSTY.el10.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_15-3.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-anon postgresql-15-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-15-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_anon_14 pg_anon_14-3.1.1-1PIGSTY.el8.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_anon_14-3.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_anon_14 pg_anon_14-3.1.1-1PIGSTY.el8.aarch64.rpm pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_anon_14-3.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_anon_14 pg_anon_14-3.1.1-1PIGSTY.el9.x86_64.rpm pigsty 3.1.1 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_anon_14-3.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_anon_14 pg_anon_14-3.1.1-1PIGSTY.el9.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_anon_14-3.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_anon_14 pg_anon_14-3.1.1-1PIGSTY.el10.x86_64.rpm pigsty 3.1.1 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_anon_14-3.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_anon_14 pg_anon_14-3.1.1-1PIGSTY.el10.aarch64.rpm pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_anon_14-3.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb pigsty 3.1.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb pigsty 3.1.1 2.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb pigsty 3.1.1 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb pigsty 3.1.1 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-anon postgresql-14-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb pigsty 3.1.1 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-anon/postgresql-14-pg-anon_3.1.1-1PIGSTY~resolute_arm64.deb
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

> 来源：[overview](https://postgresql-anonymizer.readthedocs.io/en/stable/)、[static masking](https://postgresql-anonymizer.readthedocs.io/en/stable/static_masking/)、[dynamic masking](https://postgresql-anonymizer.readthedocs.io/en/stable/dynamic_masking/)、[anonymous dumps](https://postgresql-anonymizer.readthedocs.io/en/stable/anonymous_dumps/)、[masking functions](https://postgresql-anonymizer.readthedocs.io/en/stable/masking_functions/)、[release 3.1.1](https://gitlab.com/dalibo/postgresql_anonymizer/-/releases/3.1.1)

`anon` 使用 `SECURITY LABEL FOR anon` 声明脱敏规则。官方文档描述了六种脱敏方法：anonymous dumps、static masking、dynamic masking、replica masking、masking views 和 masking data wrappers。

### 初始化与声明规则

```sql
CREATE EXTENSION IF NOT EXISTS anon CASCADE;
SELECT anon.init();

SECURITY LABEL FOR anon ON COLUMN customer.full_name
IS 'MASKED WITH FUNCTION anon.dummy_name()';

SECURITY LABEL FOR anon ON COLUMN customer.employer
IS 'MASKED WITH FUNCTION anon.dummy_company_name()';

SECURITY LABEL FOR anon ON COLUMN customer.phone
IS 'MASKED WITH FUNCTION anon.partial(phone, 2, $$******$$, 2)';
```

### 静态脱敏

静态脱敏会原地改写已存储的数据：

```sql
SELECT anon.anonymize_database();
-- See also: anon.anonymize_table(), anon.anonymize_column()
-- For larger databases: anon.anonymize_database_parallel(worker_count)
```

静态脱敏文档还覆盖 shuffling、噪声注入，以及面向较大数据集的并行脱敏。并行静态脱敏受 `anon.max_bg_workers` 和服务器 `max_worker_processes` 限制。

### 动态脱敏

动态脱敏只对标记为 masked 的角色隐藏值：

```sql
ALTER DATABASE demo SET session_preload_libraries = 'anon';
ALTER DATABASE demo SET anon.transparent_dynamic_masking TO true;

CREATE ROLE skynet LOGIN;
SECURITY LABEL FOR anon ON ROLE skynet IS 'MASKED';
GRANT pg_read_all_data TO skynet;

SECURITY LABEL FOR anon ON COLUMN people.lastname
IS 'MASKED WITH FUNCTION anon.dummy_last_name()';
```

当 `skynet` 查询该表时，会返回脱敏值而不是原始值。

### 匿名导出与伪名化

当前文档推荐通过 masked role 和 `pg_dump` 做透明匿名导出。较早的辅助工具 `pg_dump_anon.sh` 和 `pg_dump_anon` 已明确标记为 deprecated。

对于 PostgreSQL 17 及之后版本，导出示例使用 `--exclude-extension="anon"` 搭配 `--no-security-labels`；较旧的 `pg_dump` 版本需要另一种 extension 选择方式，例如 `--extension plpgsql`。

对于导出中的稳定键重映射，文档列出了：

- `anon.pseudo_shift(bigint)`
- `anon.pseudo_xor(bigint)`
- `anon.set_shift()`

### 常用函数与注意事项

函数目录中的常用脱敏辅助函数包括：

- `anon.dummy_first_name()`
- `anon.dummy_last_name()`
- `anon.dummy_company_name()`
- `anon.random_zip()`
- `anon.random_date_between(date, date)`
- `anon.partial(value, prefix, mask, suffix)`

官方文档中的注意事项：

- dynamic masking 需要在 masked role 会话使用前完成 preload/configuration
- static masking 会破坏原始值
- pseudonymization 不等同于 anonymization
- 版本 3.1.1 是针对 CVE-2026-11945 的 security release，并从 import/export 行为中移除 conditional randomization；应尽快从 3.0.x 升级。
