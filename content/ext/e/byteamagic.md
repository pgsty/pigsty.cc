---
title: "byteamagic"
linkTitle: "byteamagic"
description: "从 PostgreSQL bytea 值检测 MIME 类型与文件格式"
weight: 4275
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/nmandery/pg_byteamagic">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">nmandery/pg_byteamagic</div>
    <div class="ext-card__desc">https://github.com/nmandery/pg_byteamagic</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_byteamagic-0.2.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_byteamagic-0.2.4.tar.gz</div>
    <div class="ext-card__desc">pg_byteamagic-0.2.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_byteamagic`**](/ext/e/byteamagic) | `0.2.4` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4275  | [**`byteamagic`**](/ext/e/byteamagic) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> Extension name is byteamagic; package name is pg_byteamagic.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_byteamagic` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_byteamagic_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-byteamagic` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 | AVAIL PIGSTY 0.2.4 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_byteamagic_18 pg_byteamagic_18-0.2.4-1PIGSTY.el8.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_byteamagic_18-0.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_byteamagic_18 pg_byteamagic_18-0.2.4-1PIGSTY.el8.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_byteamagic_18-0.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_byteamagic_18 pg_byteamagic_18-0.2.4-1PIGSTY.el9.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_byteamagic_18-0.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_byteamagic_18 pg_byteamagic_18-0.2.4-1PIGSTY.el9.aarch64.rpm pigsty 0.2.4 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_byteamagic_18-0.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_byteamagic_18 pg_byteamagic_18-0.2.4-1PIGSTY.el10.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_byteamagic_18-0.2.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_byteamagic_18 pg_byteamagic_18-0.2.4-1PIGSTY.el10.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_byteamagic_18-0.2.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb pigsty 0.2.4 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb pigsty 0.2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb pigsty 0.2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-byteamagic postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-18-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_byteamagic_17 pg_byteamagic_17-0.2.4-1PIGSTY.el8.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_byteamagic_17-0.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_byteamagic_17 pg_byteamagic_17-0.2.4-1PIGSTY.el8.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_byteamagic_17-0.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_byteamagic_17 pg_byteamagic_17-0.2.4-1PIGSTY.el9.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_byteamagic_17-0.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_byteamagic_17 pg_byteamagic_17-0.2.4-1PIGSTY.el9.aarch64.rpm pigsty 0.2.4 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_byteamagic_17-0.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_byteamagic_17 pg_byteamagic_17-0.2.4-1PIGSTY.el10.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_byteamagic_17-0.2.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_byteamagic_17 pg_byteamagic_17-0.2.4-1PIGSTY.el10.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_byteamagic_17-0.2.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb pigsty 0.2.4 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb pigsty 0.2.4 10.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-byteamagic postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-17-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_byteamagic_16 pg_byteamagic_16-0.2.4-1PIGSTY.el8.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_byteamagic_16-0.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_byteamagic_16 pg_byteamagic_16-0.2.4-1PIGSTY.el8.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_byteamagic_16-0.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_byteamagic_16 pg_byteamagic_16-0.2.4-1PIGSTY.el9.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_byteamagic_16-0.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_byteamagic_16 pg_byteamagic_16-0.2.4-1PIGSTY.el9.aarch64.rpm pigsty 0.2.4 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_byteamagic_16-0.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_byteamagic_16 pg_byteamagic_16-0.2.4-1PIGSTY.el10.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_byteamagic_16-0.2.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_byteamagic_16 pg_byteamagic_16-0.2.4-1PIGSTY.el10.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_byteamagic_16-0.2.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb pigsty 0.2.4 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb pigsty 0.2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb pigsty 0.2.4 10.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-byteamagic postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb pigsty 0.2.4 10.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-16-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_byteamagic_15 pg_byteamagic_15-0.2.4-1PIGSTY.el8.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_byteamagic_15-0.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_byteamagic_15 pg_byteamagic_15-0.2.4-1PIGSTY.el8.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_byteamagic_15-0.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_byteamagic_15 pg_byteamagic_15-0.2.4-1PIGSTY.el9.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_byteamagic_15-0.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_byteamagic_15 pg_byteamagic_15-0.2.4-1PIGSTY.el9.aarch64.rpm pigsty 0.2.4 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_byteamagic_15-0.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_byteamagic_15 pg_byteamagic_15-0.2.4-1PIGSTY.el10.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_byteamagic_15-0.2.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_byteamagic_15 pg_byteamagic_15-0.2.4-1PIGSTY.el10.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_byteamagic_15-0.2.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb pigsty 0.2.4 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb pigsty 0.2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb pigsty 0.2.4 10.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-byteamagic postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-15-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_byteamagic_14 pg_byteamagic_14-0.2.4-1PIGSTY.el8.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_byteamagic_14-0.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_byteamagic_14 pg_byteamagic_14-0.2.4-1PIGSTY.el8.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_byteamagic_14-0.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_byteamagic_14 pg_byteamagic_14-0.2.4-1PIGSTY.el9.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_byteamagic_14-0.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_byteamagic_14 pg_byteamagic_14-0.2.4-1PIGSTY.el9.aarch64.rpm pigsty 0.2.4 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_byteamagic_14-0.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_byteamagic_14 pg_byteamagic_14-0.2.4-1PIGSTY.el10.x86_64.rpm pigsty 0.2.4 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_byteamagic_14-0.2.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_byteamagic_14 pg_byteamagic_14-0.2.4-1PIGSTY.el10.aarch64.rpm pigsty 0.2.4 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_byteamagic_14-0.2.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb pigsty 0.2.4 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb pigsty 0.2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb pigsty 0.2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb pigsty 0.2.4 10.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb pigsty 0.2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-byteamagic postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb pigsty 0.2.4 10.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-byteamagic/postgresql-14-pg-byteamagic_0.2.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_byteamagic` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_byteamagic         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_byteamagic` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_byteamagic;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_byteamagic -v 18  # PG 18
pig ext install -y pg_byteamagic -v 17  # PG 17
pig ext install -y pg_byteamagic -v 16  # PG 16
pig ext install -y pg_byteamagic -v 15  # PG 15
pig ext install -y pg_byteamagic -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_byteamagic_18       # PG 18
dnf install -y pg_byteamagic_17       # PG 17
dnf install -y pg_byteamagic_16       # PG 16
dnf install -y pg_byteamagic_15       # PG 15
dnf install -y pg_byteamagic_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-byteamagic   # PG 18
apt install -y postgresql-17-pg-byteamagic   # PG 17
apt install -y postgresql-16-pg-byteamagic   # PG 16
apt install -y postgresql-15-pg-byteamagic   # PG 15
apt install -y postgresql-14-pg-byteamagic   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION byteamagic;
```

## 用法

来源: [official repo](https://github.com/nmandery/pg_byteamagic), [official doc](https://raw.githubusercontent.com/nmandery/pg_byteamagic/master/doc/byteamagic.md)

`byteamagic` 会对 `bytea` 值运行 `libmagic`，因此 PostgreSQL 可以识别数据库中 blob 的 MIME 类型或人类可读文件类型。包名是 `pg_byteamagic`，但扩展名是 `byteamagic`。

```sql
CREATE EXTENSION byteamagic;

SELECT byteamagic_mime(data) FROM files;
SELECT byteamagic_text(data) FROM files;
```

### 函数

- `byteamagic_mime(bytea) returns text`: 返回 MIME 类型，对应 `file --mime-type`。
- `byteamagic_text(bytea) returns text`: 返回描述性的文件类型文本，对应 `file`。

### 常见用法

```sql
SELECT
  id,
  byteamagic_mime(blob) AS mime,
  byteamagic_text(blob) AS kind
FROM uploads;
```

### 注意事项

- 它只检查 `bytea` 内容；没有运算符、自定义类型或额外的 SQL 管理对象。
- 构建或安装需要 PostgreSQL 开发头文件，以及系统 `libmagic` 开发包。
- 上游文档非常简略；当前面向用户的行为与长期存在的文档页一致。
