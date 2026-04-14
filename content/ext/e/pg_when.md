---
title: "pg_when"
linkTitle: "pg_when"
description: "PostgreSQL 自然语言时间解析扩展"
weight: 1120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/frectonz/pg-when">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">frectonz/pg-when</div>
    <div class="ext-card__desc">https://github.com/frectonz/pg-when</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_when-0.1.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_when-0.1.9.tar.gz</div>
    <div class="ext-card__desc">pg_when-0.1.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_when`**](/ext/e/pg_when) | `0.1.9` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1120  | [**`pg_when`**](/ext/e/pg_when) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> manually upgraded PGRX from 0.15.0 to 0.17.0 by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "18,17,16,15,14,13" >}} | `pg_when` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "18,17,16,15,14,13" >}} | `pg_when_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "18,17,16,15,14,13" >}} | `postgresql-$v-pg-when` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
@ el8.x86_64 18 pg_when_18 pg_when_18-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 439.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_18-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_when_18 pg_when_18-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 328.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_18-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_when_18 pg_when_18-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 456.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_18-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_when_18 pg_when_18-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 347.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_18-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_when_18 pg_when_18-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 456.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_18-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_when_18 pg_when_18-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 347.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_18-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 364.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 259.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 364.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 259.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 406.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 298.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 403.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 296.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_when_17 pg_when_17-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 439.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_17-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_when_17 pg_when_17-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 328.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_17-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_when_17 pg_when_17-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 456.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_17-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_when_17 pg_when_17-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 348.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_17-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_when_17 pg_when_17-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 456.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_17-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_when_17 pg_when_17-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 347.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_17-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 364.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 259.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 364.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 259.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 406.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 298.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 403.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 296.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_when_16 pg_when_16-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 439.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_16-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_when_16 pg_when_16-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 328.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_16-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_when_16 pg_when_16-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 456.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_16-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_when_16 pg_when_16-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 348.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_16-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_when_16 pg_when_16-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 456.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_16-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_when_16 pg_when_16-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 347.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_16-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 363.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 259.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 364.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 259.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 406.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 298.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 403.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 296.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_when_15 pg_when_15-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 439.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_15-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_when_15 pg_when_15-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 328.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_15-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_when_15 pg_when_15-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 456.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_15-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_when_15 pg_when_15-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 348.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_15-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_when_15 pg_when_15-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 456.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_15-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_when_15 pg_when_15-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 347.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_15-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 364.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 259.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 363.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 259.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 406.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 298.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 403.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 296.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_when_14 pg_when_14-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 439.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_14-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_when_14 pg_when_14-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 328.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_14-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_when_14 pg_when_14-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 455.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_14-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_when_14 pg_when_14-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 348.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_14-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_when_14 pg_when_14-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 456.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_14-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_when_14 pg_when_14-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 347.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_14-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 364.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 259.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 364.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 259.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 406.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 298.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 403.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 296.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_when` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_when         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_when` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_when;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_when -v 18  # PG 18
pig ext install -y pg_when -v 17  # PG 17
pig ext install -y pg_when -v 16  # PG 16
pig ext install -y pg_when -v 15  # PG 15
pig ext install -y pg_when -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_when_18       # PG 18
dnf install -y pg_when_17       # PG 17
dnf install -y pg_when_16       # PG 16
dnf install -y pg_when_15       # PG 15
dnf install -y pg_when_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-when   # PG 18
apt install -y postgresql-17-pg-when   # PG 17
apt install -y postgresql-16-pg-when   # PG 16
apt install -y postgresql-15-pg-when   # PG 15
apt install -y postgresql-14-pg-when   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_when;
```

## 用法
> 来源: [README](https://github.com/frectonz/pg-when/blob/main/README.md) 和 [项目仓库](https://github.com/frectonz/pg-when)。

`pg-when` 是一个 PostgreSQL 扩展，用于根据自然语言短语生成时间值。
它通过同一份解析结果提供多种返回格式：`when_is`、`seconds_at`、`millis_at`、`micros_at` 和 `nanos_at`。

查询语法最多由三部分组成：

```sql
SELECT when_is('<date> at <time> in <timezone>');
SELECT when_is('<date>');
SELECT when_is('<time> in <timezone>');
SELECT when_is('<date> at <time>');
```

如果未指定时区，扩展默认使用 UTC。

### 支持的组件

`<date>` 可以是相对日期，也可以是精确日期。

README 中列出的相对日期示例包括：

- `today`
- `yesterday`
- `tomorrow`
- `next week`
- `last month`
- `this friday`
- `5 days ago`
- `in 2 years`

精确日期可以写成以下格式：

- `YYYY-MM-DD` 或 `YYYY/MM/DD`
- `DD-MM-YYYY` 或 `DD/MM/YYYY`
- `Month D, YYYY`
- `D Month YYYY`

`<time>` 也可以是相对时间或精确时间。

相对时间示例包括：

- `noon`
- `midnight`
- `morning`
- `evening`
- `next hour`
- `previous minute`
- `this hour`

精确时间可以用 12 小时制或 24 小时制表示，例如 `8:30 pm` 或 `15:45`。

时区既支持 IANA 名称，也支持 UTC 偏移量，例如 `America/New_York` 或 `UTC-08:00`。

### 示例

```sql
SELECT when_is('5 days ago at this hour in Asia/Tokyo');
SELECT when_is('next friday at 8:00 pm in America/New_York');
SELECT when_is('in 2 months at midnight in UTC-8');
SELECT when_is('last monday at 22:30');
SELECT when_is('December 31, 2026 at evening');
```

### 部署

上游 README 展示了 PostgreSQL 13 到 18 的 Docker 镜像。
这与本仓库中的包元数据一致。
