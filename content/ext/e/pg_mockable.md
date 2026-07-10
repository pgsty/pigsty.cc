---
title: "pg_mockable"
linkTitle: "pg_mockable"
description: "为测试创建可 Mock 的 PostgreSQL 函数包装器"
weight: 3120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_mockable">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_mockable</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_mockable</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_mockable-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_mockable-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_mockable-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_mockable`**](/ext/e/pg_mockable) | `1.1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3120  | [**`pg_mockable`**](/ext/e/pg_mockable) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `mockable` |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_mockable` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_mockable_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-mockable` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el8.x86_64 18 pg_mockable_18 pg_mockable_18-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mockable_18-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_mockable_18 pg_mockable_18-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mockable_18-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_mockable_18 pg_mockable_18-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mockable_18-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_mockable_18 pg_mockable_18-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mockable_18-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_mockable_18 pg_mockable_18-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mockable_18-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_mockable_18 pg_mockable_18-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mockable_18-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-mockable postgresql-18-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-18-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pg_mockable_17 pg_mockable_17-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mockable_17-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_mockable_17 pg_mockable_17-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mockable_17-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_mockable_17 pg_mockable_17-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mockable_17-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_mockable_17 pg_mockable_17-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mockable_17-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_mockable_17 pg_mockable_17-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mockable_17-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_mockable_17 pg_mockable_17-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mockable_17-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-mockable postgresql-17-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-17-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pg_mockable_16 pg_mockable_16-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mockable_16-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_mockable_16 pg_mockable_16-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mockable_16-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_mockable_16 pg_mockable_16-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mockable_16-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_mockable_16 pg_mockable_16-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mockable_16-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_mockable_16 pg_mockable_16-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mockable_16-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_mockable_16 pg_mockable_16-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mockable_16-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-mockable postgresql-16-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-16-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pg_mockable_15 pg_mockable_15-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mockable_15-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_mockable_15 pg_mockable_15-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mockable_15-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_mockable_15 pg_mockable_15-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mockable_15-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_mockable_15 pg_mockable_15-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mockable_15-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_mockable_15 pg_mockable_15-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mockable_15-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_mockable_15 pg_mockable_15-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mockable_15-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-mockable postgresql-15-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-15-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pg_mockable_14 pg_mockable_14-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mockable_14-1.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_mockable_14 pg_mockable_14-1.1.0-1PIGSTY.el8.noarch.rpm pigsty 1.1.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mockable_14-1.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_mockable_14 pg_mockable_14-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mockable_14-1.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_mockable_14 pg_mockable_14-1.1.0-1PIGSTY.el9.noarch.rpm pigsty 1.1.0 27.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mockable_14-1.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_mockable_14 pg_mockable_14-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mockable_14-1.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_mockable_14 pg_mockable_14-1.1.0-1PIGSTY.el10.noarch.rpm pigsty 1.1.0 27.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mockable_14-1.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-mockable postgresql-14-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mockable/postgresql-14-pg-mockable_1.1.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_mockable` 扩展的 DEB 包：

```bash
pig build pkg pg_mockable         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_mockable` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_mockable;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_mockable -v 18  # PG 18
pig ext install -y pg_mockable -v 17  # PG 17
pig ext install -y pg_mockable -v 16  # PG 16
pig ext install -y pg_mockable -v 15  # PG 15
pig ext install -y pg_mockable -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_mockable_18       # PG 18
dnf install -y pg_mockable_17       # PG 17
dnf install -y pg_mockable_16       # PG 16
dnf install -y pg_mockable_15       # PG 15
dnf install -y pg_mockable_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-mockable   # PG 18
apt install -y postgresql-17-pg-mockable   # PG 17
apt install -y postgresql-16-pg-mockable   # PG 16
apt install -y postgresql-15-pg-mockable   # PG 15
apt install -y postgresql-14-pg-mockable   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_mockable;
```




## 用法

> 来源：[pg_mockable upstream README](https://github.com/bigsmoke/pg_mockable/blob/v1.1.0/README.md)、[v1.1.0 tag](https://github.com/bigsmoke/pg_mockable/tree/v1.1.0)、[PGXN pg_mockable](https://pgxn.org/dist/pg_mockable/)、本地源码归档 `pg_mockable-1.1.0.tar.gz`。

`pg_mockable` 用于为 PostgreSQL 函数创建可 Mock 的包装函数。它主要面向数据库测试：应用代码调用稳定的包装函数，而测试可以临时替换包装函数的返回值。

```sql
CREATE EXTENSION pg_mockable CASCADE;
```

该扩展会安装到固定的 `mockable` schema 中，且不可重定位。

### Mock 内置时间函数

`mockable.now()` 已经预先创建，因为 Mock `now()` 也会覆盖该扩展暴露的一组当前时间包装函数。

```sql
SELECT mockable.now();

SELECT mockable.mock(
  'pg_catalog.now()',
  '2026-06-17 10:00:00+08'::timestamptz
);

SELECT mockable.now();
SELECT mockable.current_timestamp();
SELECT mockable.current_date();

CALL mockable.unmock('pg_catalog.now()');
```

`mockable.mock(regprocedure, anyelement)` 会保存 mock 值并返回它。`mockable.unmock(regprocedure)` 会清除 mock，并让包装函数恢复为调用原始函数。

### 包装应用函数

使用 `mockable.wrap_function()` 在 `mockable` schema 中创建一个薄包装函数：

```sql
CREATE SCHEMA app;

CREATE FUNCTION app.answer()
RETURNS int
LANGUAGE sql
RETURN 42;

SELECT mockable.wrap_function('app.answer()');

SELECT mockable.answer();                 -- 42
SELECT mockable.mock('app.answer()', 7);   -- 7
SELECT mockable.answer();                 -- 7

CALL mockable.unmock('app.answer()');
SELECT mockable.answer();                 -- 42
```

第一个参数是 `regprocedure`，因此函数存在重载时需要写出参数类型：

```sql
SELECT mockable.wrap_function('pg_catalog.current_setting(text, boolean)');
```

如果自动生成包装函数不够用，可以把精确的 `CREATE OR REPLACE FUNCTION` 语句作为第二个参数传入：

```sql
SELECT mockable.wrap_function(
  'app.answer()',
  $$
  CREATE OR REPLACE FUNCTION mockable.answer()
  RETURNS int
  LANGUAGE sql
  RETURN app.answer();
  $$
);
```

版本 1.1.0 还通过 `mockable.wrap_function(...)` 的 `raise_debug_messages$` 参数和 `mock_memory.raise_debug_messages` 列，为 wrapped/mockable routines 增加可选 debug logging。

### Mock 生命周期

默认 mock 生命周期是事务级的。若值需要跨 dump/restore 或后续事务保留，可以在创建包装函数时使用持久生命周期：

```sql
SELECT mockable.wrap_function(
  'app.answer()',
  mock_duration$ => 'PERSISTENT'
);
```

测试夹具不再需要持久 mock 时，应显式清除：

```sql
CALL mockable.unmock('app.answer()');
```

### Search Path 注意事项

应用代码必须实际调用包装函数，例如 `mockable.now()` 或 `mockable.answer()`，mock 才会生效。某些 PL/pgSQL 代码可以通过调整 `search_path` 重定向，但表默认值等表达式会被编译为函数 OID；事后再把 `mockable` 加进 `search_path` 不会改写这些引用。需要可测试的代码应优先显式调用 `mockable.*`。

### 注意事项

- 版本 1.1.0 支持 PostgreSQL 14-18。它是 SQL 扩展，不需要 `shared_preload_libraries`。
- `pg_mockable` 拥有 `mockable` schema；control 文件不支持把它安装到其他 schema。
- 包装函数权限来自被包装的原函数。上游测试会验证：包装一个私有函数不会把执行权限授予原本无法调用该函数的角色。
