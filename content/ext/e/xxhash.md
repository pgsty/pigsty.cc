---
title: "xxhash"
linkTitle: "xxhash"
description: "xxhash哈希函数包"
weight: 4430
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hatarist/pg_xxhash">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hatarist/pg_xxhash</div>
    <div class="ext-card__desc">https://github.com/hatarist/pg_xxhash</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_xxhash-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_xxhash-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_xxhash-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_xxhash`**](/ext/e/xxhash) | `0.0.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4430  | [**`xxhash`**](/ext/e/xxhash) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hashlib`](/ext/e/hashlib) [`shacrypt`](/ext/e/shacrypt) [`pgcrypto`](/ext/e/pgcrypto) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_xxhash` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_xxhash_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-xxhash` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_xxhash_18 pg_xxhash_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_xxhash_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_xxhash_18 pg_xxhash_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_xxhash_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_xxhash_18 pg_xxhash_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_xxhash_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_xxhash_18 pg_xxhash_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_xxhash_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_xxhash_18 pg_xxhash_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_xxhash_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_xxhash_18 pg_xxhash_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_xxhash_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 69.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 73.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 73.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 75.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 76.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 62.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 67.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 63.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-xxhash postgresql-18-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 68.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-18-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_xxhash_17 pg_xxhash_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_xxhash_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_xxhash_17 pg_xxhash_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_xxhash_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_xxhash_17 pg_xxhash_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_xxhash_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_xxhash_17 pg_xxhash_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_xxhash_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_xxhash_17 pg_xxhash_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_xxhash_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_xxhash_17 pg_xxhash_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_xxhash_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 73.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 73.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 76.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 78.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 62.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 67.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 63.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-xxhash postgresql-17-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 68.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-17-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_xxhash_16 pg_xxhash_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_xxhash_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_xxhash_16 pg_xxhash_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 30.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_xxhash_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_xxhash_16 pg_xxhash_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_xxhash_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_xxhash_16 pg_xxhash_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_xxhash_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_xxhash_16 pg_xxhash_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_xxhash_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_xxhash_16 pg_xxhash_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_xxhash_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 73.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 73.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 76.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 78.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 62.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 67.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 63.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-xxhash postgresql-16-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 68.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-16-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_xxhash_15 pg_xxhash_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 31.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_xxhash_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_xxhash_15 pg_xxhash_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 31.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_xxhash_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_xxhash_15 pg_xxhash_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_xxhash_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_xxhash_15 pg_xxhash_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 30.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_xxhash_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_xxhash_15 pg_xxhash_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_xxhash_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_xxhash_15 pg_xxhash_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_xxhash_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 70.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 73.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 69.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 74.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 87.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 89.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 73.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 78.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 74.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-xxhash postgresql-15-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 79.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-15-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_xxhash_14 pg_xxhash_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 31.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_xxhash_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_xxhash_14 pg_xxhash_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 31.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_xxhash_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_xxhash_14 pg_xxhash_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_xxhash_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_xxhash_14 pg_xxhash_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 30.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_xxhash_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_xxhash_14 pg_xxhash_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_xxhash_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_xxhash_14 pg_xxhash_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_xxhash_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 69.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 74.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 69.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 74.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 87.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 89.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 73.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 78.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 74.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-xxhash postgresql-14-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 79.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-xxhash/postgresql-14-pg-xxhash_0.0.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_xxhash` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_xxhash         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_xxhash` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_xxhash;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_xxhash -v 18  # PG 18
pig ext install -y pg_xxhash -v 17  # PG 17
pig ext install -y pg_xxhash -v 16  # PG 16
pig ext install -y pg_xxhash -v 15  # PG 15
pig ext install -y pg_xxhash -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_xxhash_18       # PG 18
dnf install -y pg_xxhash_17       # PG 17
dnf install -y pg_xxhash_16       # PG 16
dnf install -y pg_xxhash_15       # PG 15
dnf install -y pg_xxhash_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-xxhash   # PG 18
apt install -y postgresql-17-pg-xxhash   # PG 17
apt install -y postgresql-16-pg-xxhash   # PG 16
apt install -y postgresql-15-pg-xxhash   # PG 15
apt install -y postgresql-14-pg-xxhash   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION xxhash;
```



## 用法

> [xxhash: PostgreSQL 的 xxHash 哈希函数](https://github.com/hatarist/pg_xxhash)

提供 xxHash 非加密哈希函数，返回十六进制字符串或 bytea。

### 文本输出函数

```sql
SELECT xxh32('https://example.com');     -- 'ba15a4a8'
SELECT xxh64('https://example.com');     -- 'b131752760b48654'
SELECT xxh3_64('https://example.com');   -- '9398cc7c078760e6'
SELECT xxh128('https://example.com');    -- '4879d6aa9d88e9c7a169c008892d4829'
```

### 二进制输出函数

```sql
SELECT xxh32b('https://example.com');    -- \xba15a4a8
SELECT xxh64b('https://example.com');    -- \xb131752760b48654
SELECT xxh3_64b('https://example.com');  -- \x9398cc7c078760e6
SELECT xxh128b('https://example.com');   -- \x4879d6aa9d88e9c7a169c008892d4829
```

### 可用函数

| 函数 | 位数 | 输出 |
|------|------|------|
| `xxh32(text)` | 32 | 十六进制文本 |
| `xxh64(text)` | 64 | 十六进制文本 |
| `xxh3_64(text)` | 64 | 十六进制文本 |
| `xxh128(text)` | 128 | 十六进制文本 |
| `xxh32b(text)` | 32 | bytea |
| `xxh64b(text)` | 64 | bytea |
| `xxh3_64b(text)` | 64 | bytea |
| `xxh128b(text)` | 128 | bytea |
