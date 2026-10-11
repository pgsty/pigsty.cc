---
title: "pg_local_cache"
linkTitle: "pg_local_cache"
description: "通过 RESP2 MGET 提供 PostgreSQL 主键整行读取的事务感知共享内存缓存"
weight: 2890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/profundium/pg_local_cache">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">profundium/pg_local_cache</div>
    <div class="ext-card__desc">https://github.com/profundium/pg_local_cache</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_local_cache-3.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_local_cache-3.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_local_cache-3.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_local_cache`**](/ext/e/pg_local_cache) | `3.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2890  | [**`pg_local_cache`**](/ext/e/pg_local_cache) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `local_cache` |
{.ext-table}


> PG14-18; requires preload.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_local_cache` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_local_cache_$v` | `openssl-libs` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-local-cache` | `libssl3 | libssl3t64` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
@ el8.x86_64 18 pg_local_cache_18 pg_local_cache_18-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 187.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_local_cache_18-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_local_cache_18 pg_local_cache_18-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 182.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_local_cache_18-2.0.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_local_cache_18 pg_local_cache_18-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 189.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_local_cache_18-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_local_cache_18 pg_local_cache_18-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 185.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_local_cache_18-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_local_cache_18 pg_local_cache_18-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 190.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_local_cache_18-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_local_cache_18 pg_local_cache_18-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 185.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_local_cache_18-2.0.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb pigsty 2.0.4 173.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb pigsty 2.0.4 168.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb pigsty 2.0.4 173.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb pigsty 2.0.4 168.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb pigsty 2.0.4 187.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb pigsty 2.0.4 182.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb pigsty 2.0.4 180.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb pigsty 2.0.4 177.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb pigsty 2.0.4 178.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-local-cache postgresql-18-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb pigsty 2.0.4 175.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-18-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_local_cache_17 pg_local_cache_17-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 187.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_local_cache_17-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_local_cache_17 pg_local_cache_17-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 182.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_local_cache_17-2.0.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_local_cache_17 pg_local_cache_17-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 188.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_local_cache_17-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_local_cache_17 pg_local_cache_17-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 185.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_local_cache_17-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_local_cache_17 pg_local_cache_17-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 189.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_local_cache_17-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_local_cache_17 pg_local_cache_17-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 185.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_local_cache_17-2.0.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb pigsty 2.0.4 173.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb pigsty 2.0.4 167.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb pigsty 2.0.4 173.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb pigsty 2.0.4 168.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb pigsty 2.0.4 204.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb pigsty 2.0.4 200.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb pigsty 2.0.4 180.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb pigsty 2.0.4 177.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb pigsty 2.0.4 177.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-local-cache postgresql-17-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb pigsty 2.0.4 175.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-17-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_local_cache_16 pg_local_cache_16-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 187.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_local_cache_16-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_local_cache_16 pg_local_cache_16-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 182.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_local_cache_16-2.0.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_local_cache_16 pg_local_cache_16-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 188.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_local_cache_16-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_local_cache_16 pg_local_cache_16-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 185.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_local_cache_16-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_local_cache_16 pg_local_cache_16-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 189.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_local_cache_16-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_local_cache_16 pg_local_cache_16-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 185.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_local_cache_16-2.0.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb pigsty 2.0.4 173.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb pigsty 2.0.4 167.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb pigsty 2.0.4 173.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb pigsty 2.0.4 168.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb pigsty 2.0.4 203.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb pigsty 2.0.4 199.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb pigsty 2.0.4 180.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb pigsty 2.0.4 177.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb pigsty 2.0.4 178.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-local-cache postgresql-16-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb pigsty 2.0.4 174.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-16-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_local_cache_15 pg_local_cache_15-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 188.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_local_cache_15-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_local_cache_15 pg_local_cache_15-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 183.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_local_cache_15-2.0.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_local_cache_15 pg_local_cache_15-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 190.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_local_cache_15-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_local_cache_15 pg_local_cache_15-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 188.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_local_cache_15-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_local_cache_15 pg_local_cache_15-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 191.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_local_cache_15-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_local_cache_15 pg_local_cache_15-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 188.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_local_cache_15-2.0.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb pigsty 2.0.4 174.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb pigsty 2.0.4 169.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb pigsty 2.0.4 174.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb pigsty 2.0.4 169.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb pigsty 2.0.4 204.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb pigsty 2.0.4 201.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb pigsty 2.0.4 182.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb pigsty 2.0.4 179.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb pigsty 2.0.4 180.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-local-cache postgresql-15-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb pigsty 2.0.4 176.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-15-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_local_cache_14 pg_local_cache_14-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 188.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_local_cache_14-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_local_cache_14 pg_local_cache_14-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 184.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_local_cache_14-2.0.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_local_cache_14 pg_local_cache_14-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 190.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_local_cache_14-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_local_cache_14 pg_local_cache_14-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 189.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_local_cache_14-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_local_cache_14 pg_local_cache_14-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 191.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_local_cache_14-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_local_cache_14 pg_local_cache_14-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 189.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_local_cache_14-2.0.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb pigsty 2.0.4 174.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb pigsty 2.0.4 169.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb pigsty 2.0.4 174.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb pigsty 2.0.4 170.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb pigsty 2.0.4 200.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb pigsty 2.0.4 199.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb pigsty 2.0.4 182.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb pigsty 2.0.4 181.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb pigsty 2.0.4 179.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-local-cache postgresql-14-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb pigsty 2.0.4 178.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-local-cache/postgresql-14-pg-local-cache_2.0.4-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_local_cache` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_local_cache         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_local_cache` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_local_cache;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_local_cache -v 18  # PG 18
pig ext install -y pg_local_cache -v 17  # PG 17
pig ext install -y pg_local_cache -v 16  # PG 16
pig ext install -y pg_local_cache -v 15  # PG 15
pig ext install -y pg_local_cache -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_local_cache_18       # PG 18
dnf install -y pg_local_cache_17       # PG 17
dnf install -y pg_local_cache_16       # PG 16
dnf install -y pg_local_cache_15       # PG 15
dnf install -y pg_local_cache_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-local-cache   # PG 18
apt install -y postgresql-17-pg-local-cache   # PG 17
apt install -y postgresql-16-pg-local-cache   # PG 16
apt install -y postgresql-15-pg-local-cache   # PG 15
apt install -y postgresql-14-pg-local-cache   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_local_cache';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_local_cache;
```

## 用法

来源：

- [README.md](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/README.md)
- [pg_local_cache.control](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/pg_local_cache.control)
- [sql/pg_local_cache--3.1.0.sql](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/sql/pg_local_cache--3.1.0.sql)
- [sql/pg_local_cache--2.0.4--3.0.0.sql](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/sql/pg_local_cache--2.0.4--3.0.0.sql)
- [docs/UPGRADING.md](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/docs/UPGRADING.md)
- [CHANGELOG.md](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/CHANGELOG.md)
- [3.0.0 to 3.1.0 upgrade](https://api.pgxn.org/src/pg_local_cache/pg_local_cache-3.1.0/sql/pg_local_cache--3.0.0--3.1.0.sql)

`pg_local_cache` 3.1.0 在有容量边界的共享内存中按完整主键缓存整行。缓存读取现通过认证的 RESP MGET 完成；SQL `local_cache.mget` 已被移除，普通 SELECT 也不会被改写。PostgreSQL 仍是持久化数据的权威来源。

### 核心用法

```ini
shared_preload_libraries = 'pg_local_cache'
pg_local_cache.database = 'app'
pg_local_cache.role = 'local_cache_worker'
pg_local_cache.bind_address = '127.0.0.1'
pg_local_cache.port = 6380
pg_local_cache.auth_token_file = '/secure/path/token'
```

```sql
CREATE EXTENSION pg_local_cache;
CREATE TABLE public.items (id bigint PRIMARY KEY, value text);
INSERT INTO public.items VALUES (42, 'example');
SELECT local_cache.attach_table('public.items'::regclass);
SELECT local_cache.health();
```

RESP 连接认证后：

```text
MGET CRUD:app.public.items:{"id":42} CRUD:app.public.items:{"id":7}
```

### 运行边界

将库追加到已有预加载列表，建立专用工作角色并按文档授予元数据与表权限，保护令牌文件，然后重启。超级用户在固定模式 `local_cache` 中创建扩展，仅注册受支持的永久主键表。RESP MGET 保留键顺序与重复项，缺失行返回 null。工作进程使用配置好的数据库角色，不继承客户端 SQL 权限、事务或快照。连接、投影、行锁及需要会话语义的读取仍应使用普通 SQL。

`local_cache.attach_table` 安装失效触发器，`local_cache.detach_table` 删除映射，`local_cache.reconcile_table` 在 DDL 或权限变化后重新验证映射。`local_cache.health`、`local_cache.stats` 和 `local_cache.metrics` 报告就绪状态与资源使用。普通 PostgreSQL 写入会使相关缓存失效。RLS、分区表及继承表不在文档支持范围内，也不提供 TTL 或分布式缓存协调。

支持 PostgreSQL 14–18 上的单个可写主库。非回环监听要求启用 `pg_local_cache.tls`，或明确选择 `pg_local_cache.allow_plaintext_network`。TLS 使用独立证书与私钥配置，设置 CA 可启用双向 TLS；可重新加载的 `pg_local_cache.enabled` 开关可禁用缓存。

从 2.x 升级前，先将 SQL MGET 调用迁移到 RESP 授权模型。安装匹配的 3.1.0 文件，配置监听安全并重启，确认库版本与监听就绪后，在各受影响数据库执行 `ALTER EXTENSION pg_local_cache UPDATE`。依赖被移除函数或旧 metrics 返回类型的对象可能阻止迁移；脚本有意不使用 CASCADE。上游未提供降级脚本。

### 从 3.0.0 升级到 3.1.0

3.1.0 修改共享内存布局，并修复旧值读取竞争和工作进程内存泄漏。安装匹配库后重启 PostgreSQL，再在各数据库升级扩展；SQL 迁移本身不改变对象或已附加的表映射。之后核对 `pg_local_cache.binary_version` 和 `local_cache.health()`。

`pg_local_cache.cache_entries` 现在计数描述符，实际字节容量由 slab 存储决定。重启前应检查 `pg_local_cache.lock_partitions`、脏标记上限、新增的 `pg_local_cache.max_deferred_misses`、客户端槽位和进程文件描述符上限。MGET 会合并重复的缓存缺失项，但 single-flight 等待者可能使用后续事务，因此完整响应不保证来自同一个快照。
