---
title: "pg_rrf"
linkTitle: "pg_rrf"
description: "混合检索的倒数排序融合函数"
weight: 1845
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/yuiseki/pg_rrf">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">yuiseki/pg_rrf</div>
    <div class="ext-card__desc">https://github.com/yuiseki/pg_rrf</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_rrf-0.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_rrf-0.0.3.tar.gz</div>
    <div class="ext-card__desc">pg_rrf-0.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_rrf`**](/ext/e/pg_rrf) | `0.0.3` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1845  | [**`pg_rrf`**](/ext/e/pg_rrf) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> manually upgraded PGRX from 0.16.1 to 0.17.0 by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "17,16,15,14" >}} | `pg_rrf` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "17,16,15,14" >}} | `pg_rrf_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pg-rrf` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el8.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
@ el8.x86_64 17 pg_rrf_17 pg_rrf_17-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 314.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrf_17-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_rrf_17 pg_rrf_17-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 209.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrf_17-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_rrf_17 pg_rrf_17-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 329.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrf_17-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_rrf_17 pg_rrf_17-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 222.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrf_17-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_rrf_17 pg_rrf_17-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 330.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrf_17-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_rrf_17 pg_rrf_17-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 222.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrf_17-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 256.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 159.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 256.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 159.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 290.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 184.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 287.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-rrf postgresql-17-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 183.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-17-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_rrf_16 pg_rrf_16-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 314.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrf_16-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_rrf_16 pg_rrf_16-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 208.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrf_16-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_rrf_16 pg_rrf_16-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 329.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrf_16-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_rrf_16 pg_rrf_16-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 223.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrf_16-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_rrf_16 pg_rrf_16-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 330.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrf_16-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_rrf_16 pg_rrf_16-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 222.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrf_16-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 257.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 159.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 256.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 159.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 290.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 184.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 287.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-rrf postgresql-16-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 183.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-16-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_rrf_15 pg_rrf_15-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 314.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrf_15-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_rrf_15 pg_rrf_15-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 209.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrf_15-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_rrf_15 pg_rrf_15-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 329.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrf_15-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_rrf_15 pg_rrf_15-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 222.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrf_15-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_rrf_15 pg_rrf_15-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 330.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrf_15-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_rrf_15 pg_rrf_15-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 222.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrf_15-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 256.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 159.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 256.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 159.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 290.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 184.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 287.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-rrf postgresql-15-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 183.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-15-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_rrf_14 pg_rrf_14-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 314.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrf_14-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_rrf_14 pg_rrf_14-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 209.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrf_14-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_rrf_14 pg_rrf_14-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 329.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrf_14-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_rrf_14 pg_rrf_14-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 223.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrf_14-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_rrf_14 pg_rrf_14-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 330.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrf_14-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_rrf_14 pg_rrf_14-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 223.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrf_14-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 256.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 159.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 256.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 159.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 289.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 184.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 287.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-rrf postgresql-14-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 183.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rrf/postgresql-14-pg-rrf_0.0.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_rrf` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_rrf         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_rrf` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_rrf;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_rrf -v 17  # PG 17
pig ext install -y pg_rrf -v 16  # PG 16
pig ext install -y pg_rrf -v 15  # PG 15
pig ext install -y pg_rrf -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_rrf_17       # PG 17
dnf install -y pg_rrf_16       # PG 16
dnf install -y pg_rrf_15       # PG 15
dnf install -y pg_rrf_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-pg-rrf   # PG 17
apt install -y postgresql-16-pg-rrf   # PG 16
apt install -y postgresql-15-pg-rrf   # PG 15
apt install -y postgresql-14-pg-rrf   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_rrf;
```

## 用法
> 来源: [README](https://github.com/yuiseki/pg_rrf/blob/main/README.md) 和 [项目仓库](https://github.com/yuiseki/pg_rrf)。

`pg_rrf` 提供互惠排名融合（Reciprocal Rank Fusion，RRF）函数，用于混合检索场景下的分数融合。
它的重点是合并多个有序候选列表，而不需要手写 `FULL OUTER JOIN` / `COALESCE` 之类的连接逻辑。

### 核心函数

- `rrf(rank_a, rank_b, k)`
- `rrf3(rank_a, rank_b, rank_c, k)`
- `rrf_fuse(ids_a bigint[], ids_b bigint[], k int default 60)`
- `rrfn(ranks bigint[], k int)`

README 还说明了这些分数辅助函数的行为：

- 缺失的排名会被忽略
- `<= 0` 的排名会被忽略
- `k <= 0` 时会报错

### 示例

```sql
CREATE EXTENSION pg_rrf;

SELECT rrf(1, 2, 60) AS rrf_12;
SELECT rrf3(1, 2, 3, 60) AS rrf_123;
SELECT rrfn(ARRAY[1, 2, 3], 60) AS rrfn_123;
SELECT *
FROM rrf_fuse(ARRAY[10, 20, 30], ARRAY[20, 40], 60)
ORDER BY score DESC;
```

### 混合检索模式

上游 README 将 `rrf_fuse` 作为手工融合查询的替代方案：

```sql
WITH fused AS (
  SELECT *
  FROM rrf_fuse(
    ARRAY(SELECT id FROM docs ORDER BY bm25_score DESC LIMIT 100),
    ARRAY(SELECT id FROM docs ORDER BY embedding <=> :qvec LIMIT 100),
    60
  )
)
SELECT d.*, fused.score
FROM fused
JOIN docs d USING (id)
ORDER BY fused.score DESC
LIMIT 20;
```

### 需求

- PostgreSQL 14-17
- Docker 和 Docker Compose v2

README 说明构建与测试流程都在 Docker 中运行，因此该包工作流不依赖本地 PostgreSQL 或 Rust 工具链。
