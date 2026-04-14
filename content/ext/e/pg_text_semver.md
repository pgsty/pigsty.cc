---
title: "pg_text_semver"
linkTitle: "pg_text_semver"
description: "PostgreSQL 语义版本域类型与比较运算符"
weight: 3520
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_text_semver">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_text_semver</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_text_semver</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_text_semver-1.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_text_semver-1.2.1.tar.gz</div>
    <div class="ext-card__desc">pg_text_semver-1.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_text_semver`**](/ext/e/pg_text_semver) | `1.2.1` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3520  | [**`pg_text_semver`**](/ext/e/pg_text_semver) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_text_semver` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_text_semver_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-text-semver` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 | AVAIL PIGSTY 1.2.1 1 |
@ el8.x86_64 18 pg_text_semver_18 pg_text_semver_18-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_text_semver_18-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_text_semver_18 pg_text_semver_18-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 21.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_text_semver_18-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_text_semver_18 pg_text_semver_18-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_text_semver_18-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_text_semver_18 pg_text_semver_18-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_text_semver_18-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_text_semver_18 pg_text_semver_18-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_text_semver_18-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_text_semver_18 pg_text_semver_18-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_text_semver_18-1.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-text-semver postgresql-18-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-18-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_text_semver_17 pg_text_semver_17-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_text_semver_17-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_text_semver_17 pg_text_semver_17-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 21.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_text_semver_17-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_text_semver_17 pg_text_semver_17-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_text_semver_17-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_text_semver_17 pg_text_semver_17-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_text_semver_17-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_text_semver_17 pg_text_semver_17-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_text_semver_17-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_text_semver_17 pg_text_semver_17-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_text_semver_17-1.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-text-semver postgresql-17-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-17-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_text_semver_16 pg_text_semver_16-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_text_semver_16-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_text_semver_16 pg_text_semver_16-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 21.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_text_semver_16-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_text_semver_16 pg_text_semver_16-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_text_semver_16-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_text_semver_16 pg_text_semver_16-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_text_semver_16-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_text_semver_16 pg_text_semver_16-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_text_semver_16-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_text_semver_16 pg_text_semver_16-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_text_semver_16-1.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-text-semver postgresql-16-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-16-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_text_semver_15 pg_text_semver_15-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_text_semver_15-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_text_semver_15 pg_text_semver_15-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 21.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_text_semver_15-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_text_semver_15 pg_text_semver_15-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_text_semver_15-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_text_semver_15 pg_text_semver_15-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_text_semver_15-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_text_semver_15 pg_text_semver_15-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_text_semver_15-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_text_semver_15 pg_text_semver_15-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_text_semver_15-1.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-text-semver postgresql-15-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-15-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_text_semver_14 pg_text_semver_14-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_text_semver_14-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_text_semver_14 pg_text_semver_14-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 21.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_text_semver_14-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_text_semver_14 pg_text_semver_14-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_text_semver_14-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_text_semver_14 pg_text_semver_14-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_text_semver_14-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_text_semver_14 pg_text_semver_14-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_text_semver_14-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_text_semver_14 pg_text_semver_14-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_text_semver_14-1.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-text-semver postgresql-14-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-text-semver/postgresql-14-pg-text-semver_1.2.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_text_semver` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_text_semver         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_text_semver` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_text_semver;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_text_semver -v 18  # PG 18
pig ext install -y pg_text_semver -v 17  # PG 17
pig ext install -y pg_text_semver -v 16  # PG 16
pig ext install -y pg_text_semver -v 15  # PG 15
pig ext install -y pg_text_semver -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_text_semver_18       # PG 18
dnf install -y pg_text_semver_17       # PG 17
dnf install -y pg_text_semver_16       # PG 16
dnf install -y pg_text_semver_15       # PG 15
dnf install -y pg_text_semver_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-text-semver   # PG 18
apt install -y postgresql-17-pg-text-semver   # PG 17
apt install -y postgresql-16-pg-text-semver   # PG 16
apt install -y postgresql-15-pg-text-semver   # PG 15
apt install -y postgresql-14-pg-text-semver   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_text_semver;
```

## 用法

- 来源: [GitHub 仓库](https://github.com/bigsmoke/pg_text_semver), [README](https://github.com/bigsmoke/pg_text_semver/blob/master/README.md)
- `pg_text_semver` 在 PostgreSQL `text` 之上实现了语义化版本规范 2.0.0，使用 `semver` 域以及相关辅助类型和函数。

```sql
CREATE EXTENSION pg_text_semver;
```

## 核心流程

README 强调了以下能力：

- 使用常规比较运算符比较 `semver` 值
- 直接调用 `semver_cmp(semver, semver)`
- 使用 `semver_regexp()` 校验并检查版本字符串
- 将解析后的值转换为 `semver_parsed` 以便排序和建索引
- 使用 `semver_prerelease` 进行预发布版本校验和比较

## 示例

上游 README 会引导读者查看 `test__pg_text_semver()` 过程，以获取类型、运算符和函数的具体示例。它还说明该扩展提供独立的 `semver_parsed` 类型，可序列化回 `semver` 或 `text`。

## 备注

README 将本项目与基于 C 的 `semver` 扩展作了对比：`pg_text_semver` 始终基于 `text` 域实现，重点是一个简洁、贴近规范的实现。
