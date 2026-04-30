---
title: "pg_isok"
linkTitle: "pg_isok"
description: "基于查询的数据完整性管理与软告警扩展"
weight: 4340
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/kop/pg_isok">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/kop/pg_isok</div>
    <div class="ext-card__desc">https://codeberg.org/kop/pg_isok</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_isok-1.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_isok-1.4.1.tar.gz</div>
    <div class="ext-card__desc">pg_isok-1.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_isok`**](/ext/e/pg_isok) | `1.4.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4340  | [**`pg_isok`**](/ext/e/pg_isok) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> superuser=false, but this is not a trusted extension.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_isok` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_isok_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-isok` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_isok_18 pg_isok_18-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_isok_18-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_isok_18 pg_isok_18-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 63.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_isok_18-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_isok_18 pg_isok_18-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_isok_18-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_isok_18 pg_isok_18-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_isok_18-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_isok_18 pg_isok_18-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_isok_18-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_isok_18 pg_isok_18-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_isok_18-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-isok postgresql-18-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-18-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_isok_17 pg_isok_17-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_isok_17-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_isok_17 pg_isok_17-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 63.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_isok_17-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_isok_17 pg_isok_17-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_isok_17-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_isok_17 pg_isok_17-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_isok_17-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_isok_17 pg_isok_17-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_isok_17-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_isok_17 pg_isok_17-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_isok_17-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-isok postgresql-17-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-17-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_isok_16 pg_isok_16-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_isok_16-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_isok_16 pg_isok_16-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 63.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_isok_16-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_isok_16 pg_isok_16-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_isok_16-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_isok_16 pg_isok_16-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_isok_16-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_isok_16 pg_isok_16-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_isok_16-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_isok_16 pg_isok_16-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_isok_16-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-isok postgresql-16-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-16-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_isok_15 pg_isok_15-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_isok_15-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_isok_15 pg_isok_15-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 63.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_isok_15-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_isok_15 pg_isok_15-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_isok_15-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_isok_15 pg_isok_15-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_isok_15-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_isok_15 pg_isok_15-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_isok_15-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_isok_15 pg_isok_15-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_isok_15-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-isok postgresql-15-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-15-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_isok_14 pg_isok_14-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 63.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_isok_14-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_isok_14 pg_isok_14-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 63.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_isok_14-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_isok_14 pg_isok_14-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_isok_14-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_isok_14 pg_isok_14-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 60.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_isok_14-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_isok_14 pg_isok_14-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_isok_14-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_isok_14 pg_isok_14-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 60.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_isok_14-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 56.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 57.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-isok postgresql-14-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 56.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-isok/postgresql-14-pg-isok_1.4.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_isok` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_isok         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_isok` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_isok;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_isok -v 18  # PG 18
pig ext install -y pg_isok -v 17  # PG 17
pig ext install -y pg_isok -v 16  # PG 16
pig ext install -y pg_isok -v 15  # PG 15
pig ext install -y pg_isok -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_isok_18       # PG 18
dnf install -y pg_isok_17       # PG 17
dnf install -y pg_isok_16       # PG 16
dnf install -y pg_isok_15       # PG 15
dnf install -y pg_isok_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-isok   # PG 18
apt install -y postgresql-17-pg-isok   # PG 17
apt install -y postgresql-16-pg-isok   # PG 16
apt install -y postgresql-15-pg-isok   # PG 15
apt install -y postgresql-14-pg-isok   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_isok;
```

## 用法

来源: [official repo](https://codeberg.org/kop/pg_isok), [official docs home](https://codeberg.org/kop/pg_isok/src/branch/main/doc_src/index.html), [official reference source](https://codeberg.org/kop/pg_isok/src/branch/main/doc_src/isok.xml)

`pg_isok` 是一个基于查询的数据完整性与监控扩展。它不会只报告当前看起来可疑的行，而是保存先前结果，并在后续运行时聚焦于尚未解决或尚未延期的变化。

```sql
CREATE SCHEMA isok;
CREATE EXTENSION pg_isok SCHEMA isok;

SELECT *
FROM isok.run_isok_queries()
AS problems;
```

### 核心对象

- `ISOK_QUERIES`：存储监控查询及其执行设置。
- `ISOK_RESULTS`：存储被报告的行，以及它们是否已解决或已延期。
- `run_isok_queries()`：运行所有启用的检查。
- `run_isok_queries($$VALUES ('check_name')$$)`：只运行指定的检查。

### 典型流程

运行一个具名检查：

```sql
SELECT *
FROM isok.run_isok_queries($$VALUES ('new_countries')$$)
AS problems;
```

通过更新 `ISOK_RESULTS` 接受或推迟一个已知告警：

```sql
UPDATE isok.isok_results
SET deferred_to = 'infinity'
WHERE iqname = 'new_countries';
```

当某个条件不再需要关注时使用 `resolved`；当它应该隐藏到将来某个时间时使用 `deferred_to`。

### 适用场景

- 导入后的数据清理
- 监控不常见但有时可接受的模式
- “软触发器”式的审查流程，即硬约束过于严格时的替代方案

### 注意事项

- 上游建议将它安装在独立 schema 中，并在调用时显式带上 schema。
- 文档将其描述为纯 SQL 扩展，这在受管 PostgreSQL 服务限制 C 扩展时很有价值。
- 本仓库的包元数据显示 `superuser=false`，但上游并未把它记录为 trusted extension；应保守对待安装权限。
