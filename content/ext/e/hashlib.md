---
title: "hashlib"
linkTitle: "hashlib"
description: "稳定哈希函数包"
weight: 4400
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/markokr/pghashlib">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">markokr/pghashlib</div>
    <div class="ext-card__desc">https://github.com/markokr/pghashlib</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_hashlib-1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_hashlib-1.1.tar.gz</div>
    <div class="ext-card__desc">pg_hashlib-1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_hashlib`**](/ext/e/hashlib) | `1.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4400  | [**`hashlib`**](/ext/e/hashlib) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`xxhash`](/ext/e/xxhash) [`shacrypt`](/ext/e/shacrypt) [`cryptint`](/ext/e/cryptint) [`pguecc`](/ext/e/pguecc) [`pgcrypto`](/ext/e/pgcrypto) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> build-deps: python3-docutils


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_hashlib` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_hashlib_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-hashlib` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
@ el8.x86_64 18 pg_hashlib_18 pg_hashlib_18-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_hashlib_18-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_hashlib_18 pg_hashlib_18-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_hashlib_18-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_hashlib_18 pg_hashlib_18-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_hashlib_18-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_hashlib_18 pg_hashlib_18-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_hashlib_18-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_hashlib_18 pg_hashlib_18-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_hashlib_18-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_hashlib_18 pg_hashlib_18-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_hashlib_18-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 45.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 46.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 46.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 49.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 49.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 47.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-hashlib postgresql-18-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 48.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-18-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_hashlib_17 pg_hashlib_17-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_hashlib_17-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_hashlib_17 pg_hashlib_17-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_hashlib_17-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_hashlib_17 pg_hashlib_17-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_hashlib_17-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_hashlib_17 pg_hashlib_17-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_hashlib_17-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_hashlib_17 pg_hashlib_17-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_hashlib_17-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_hashlib_17 pg_hashlib_17-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_hashlib_17-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 46.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 49.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 50.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 48.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-hashlib postgresql-17-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 48.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-17-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_hashlib_16 pg_hashlib_16-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_hashlib_16-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_hashlib_16 pg_hashlib_16-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_hashlib_16-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_hashlib_16 pg_hashlib_16-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_hashlib_16-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_hashlib_16 pg_hashlib_16-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_hashlib_16-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_hashlib_16 pg_hashlib_16-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_hashlib_16-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_hashlib_16 pg_hashlib_16-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_hashlib_16-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 46.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 49.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 50.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 48.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-hashlib postgresql-16-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 48.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-16-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_hashlib_15 pg_hashlib_15-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 27.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_hashlib_15-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_hashlib_15 pg_hashlib_15-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_hashlib_15-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_hashlib_15 pg_hashlib_15-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 27.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_hashlib_15-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_hashlib_15 pg_hashlib_15-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_hashlib_15-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_hashlib_15 pg_hashlib_15-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_hashlib_15-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_hashlib_15 pg_hashlib_15-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_hashlib_15-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 45.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 45.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 46.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 50.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 50.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 48.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-hashlib postgresql-15-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 48.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-15-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_hashlib_14 pg_hashlib_14-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 27.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_hashlib_14-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_hashlib_14 pg_hashlib_14-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_hashlib_14-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_hashlib_14 pg_hashlib_14-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 27.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_hashlib_14-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_hashlib_14 pg_hashlib_14-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_hashlib_14-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_hashlib_14 pg_hashlib_14-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_hashlib_14-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_hashlib_14 pg_hashlib_14-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_hashlib_14-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 45.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 50.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 50.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 48.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-hashlib postgresql-14-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 48.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-hashlib/postgresql-14-pg-hashlib_1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_hashlib` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_hashlib         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_hashlib` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_hashlib;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_hashlib -v 18  # PG 18
pig ext install -y pg_hashlib -v 17  # PG 17
pig ext install -y pg_hashlib -v 16  # PG 16
pig ext install -y pg_hashlib -v 15  # PG 15
pig ext install -y pg_hashlib -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_hashlib_18       # PG 18
dnf install -y pg_hashlib_17       # PG 17
dnf install -y pg_hashlib_16       # PG 16
dnf install -y pg_hashlib_15       # PG 15
dnf install -y pg_hashlib_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-hashlib   # PG 18
apt install -y postgresql-17-pg-hashlib   # PG 17
apt install -y postgresql-16-pg-hashlib   # PG 16
apt install -y postgresql-15-pg-hashlib   # PG 15
apt install -y postgresql-14-pg-hashlib   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hashlib;
```



## 用法

> [hashlib: PostgreSQL 的稳定哈希函数库](https://github.com/markokr/pghashlib)

提供实现不会随 PostgreSQL 版本变化的稳定哈希函数。

### 字符串哈希（32 位）

```sql
SELECT hash_string('hello', 'crc32');
SELECT hash_string('hello', 'murmur3');
```

使用可选的初始值：

```sql
SELECT hash_string('hello', 'crc32', 42);
```

### 字符串哈希（64 位）

```sql
SELECT hash64_string('hello', 'city64');
SELECT hash64_string('hello', 'siphash24');
SELECT hash64_string('hello', 'lookup3');
```

### 字符串哈希（128 位）

```sql
SELECT hash128_string('hello', 'md5');
SELECT hash128_string('hello', 'city128');
SELECT hash128_string('hello', 'spooky');
```

### 整数哈希

```sql
SELECT hash_int4(42);        -- 32 位整数的 32 位哈希
SELECT hash_int8(42::bigint); -- 64 位整数的 64 位哈希
```

### 可用算法

| 算法 | CPU 无关 | 位数 | 描述 |
|------|----------|------|------|
| `crc32` | 是 | 32 | CRC32 |
| `murmur3` | 否 | 32 | MurmurHash v3 |
| `md5` | 是 | 128 | MD5 |
| `city64` | 否 | 64 | CityHash64 |
| `city128` | 否 | 128 | CityHash128 |
| `siphash24` | 是 | 64 | SipHash-2-4 |
| `spooky` | 否 | 128 | SpookyHash |
| `lookup2` | 否 | 64 | Jenkins lookup2 |
| `lookup3` | 否 | 64 | Jenkins lookup3 CPU 原生字节序 |
| `lookup3be` | 是 | 64 | Jenkins lookup3 大端字节序 |
| `lookup3le` | 是 | 64 | Jenkins lookup3 小端字节序 |
| `pgsql84` | 否 | 64 | Postgres 8.4+ 中修改的 lookup3 |

整数算法：`wang32`、`wang32mult`、`jenkins`（32 位）；`wang64`、`wang64to32`（64 位）。所有整数算法都是可逆的（1:1 映射），适合在唯一 ID 上创建随机排序。
