---
title: "pg_cooldown"
linkTitle: "pg_cooldown"
description: "从缓冲区中移除特定关系的页面"
weight: 5070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rbergm/pg_cooldown">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rbergm/pg_cooldown</div>
    <div class="ext-card__desc">https://github.com/rbergm/pg_cooldown</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_cooldown-0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_cooldown-0.1.tar.gz</div>
    <div class="ext-card__desc">pg_cooldown-0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_cooldown`**](/ext/e/pg_cooldown) | `0.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5070  | [**`pg_cooldown`**](/ext/e/pg_cooldown) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgfincore`](/ext/e/pgfincore) [`pgcozy`](/ext/e/pgcozy) [`pg_prewarm`](/ext/e/pg_prewarm) [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) [`system_stats`](/ext/e/system_stats) [`pgmeminfo`](/ext/e/pgmeminfo) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_cooldown` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_cooldown_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-cooldown` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_cooldown_18 pg_cooldown_18-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cooldown_18-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_cooldown_18 pg_cooldown_18-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cooldown_18-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_cooldown_18 pg_cooldown_18-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cooldown_18-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_cooldown_18 pg_cooldown_18-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cooldown_18-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_cooldown_18 pg_cooldown_18-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cooldown_18-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_cooldown_18 pg_cooldown_18-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cooldown_18-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb pigsty 0.1 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-cooldown postgresql-18-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb pigsty 0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-18-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_cooldown_17 pg_cooldown_17-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cooldown_17-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_cooldown_17 pg_cooldown_17-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cooldown_17-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_cooldown_17 pg_cooldown_17-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cooldown_17-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_cooldown_17 pg_cooldown_17-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cooldown_17-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_cooldown_17 pg_cooldown_17-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cooldown_17-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_cooldown_17 pg_cooldown_17-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cooldown_17-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-cooldown postgresql-17-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb pigsty 0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-17-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_cooldown_16 pg_cooldown_16-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cooldown_16-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_cooldown_16 pg_cooldown_16-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cooldown_16-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_cooldown_16 pg_cooldown_16-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cooldown_16-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_cooldown_16 pg_cooldown_16-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cooldown_16-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_cooldown_16 pg_cooldown_16-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cooldown_16-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_cooldown_16 pg_cooldown_16-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 16.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cooldown_16-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-cooldown postgresql-16-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb pigsty 0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-16-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_cooldown_15 pg_cooldown_15-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cooldown_15-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_cooldown_15 pg_cooldown_15-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cooldown_15-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_cooldown_15 pg_cooldown_15-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cooldown_15-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_cooldown_15 pg_cooldown_15-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cooldown_15-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_cooldown_15 pg_cooldown_15-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cooldown_15-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_cooldown_15 pg_cooldown_15-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 16.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cooldown_15-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb pigsty 0.1 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-cooldown postgresql-15-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb pigsty 0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-15-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_cooldown_14 pg_cooldown_14-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cooldown_14-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_cooldown_14 pg_cooldown_14-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 16.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cooldown_14-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_cooldown_14 pg_cooldown_14-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cooldown_14-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_cooldown_14 pg_cooldown_14-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 16.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cooldown_14-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_cooldown_14 pg_cooldown_14-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cooldown_14-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_cooldown_14 pg_cooldown_14-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 16.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cooldown_14-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb pigsty 0.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb pigsty 0.1 11.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb pigsty 0.1 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb pigsty 0.1 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb pigsty 0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-cooldown postgresql-14-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb pigsty 0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cooldown/postgresql-14-pg-cooldown_0.1-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_cooldown` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_cooldown         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_cooldown` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_cooldown;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_cooldown -v 18  # PG 18
pig ext install -y pg_cooldown -v 17  # PG 17
pig ext install -y pg_cooldown -v 16  # PG 16
pig ext install -y pg_cooldown -v 15  # PG 15
pig ext install -y pg_cooldown -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_cooldown_18       # PG 18
dnf install -y pg_cooldown_17       # PG 17
dnf install -y pg_cooldown_16       # PG 16
dnf install -y pg_cooldown_15       # PG 15
dnf install -y pg_cooldown_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-cooldown   # PG 18
apt install -y postgresql-17-pg-cooldown   # PG 17
apt install -y postgresql-16-pg-cooldown   # PG 16
apt install -y postgresql-15-pg-cooldown   # PG 15
apt install -y postgresql-14-pg-cooldown   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_cooldown;
```



## 用法

> [pg_cooldown: 从共享缓冲区中移除特定关系的缓存页](https://github.com/rbergm/pg_cooldown)

pg_cooldown 是 `pg_prewarm` 的互补工具：它从共享缓冲区中移除特定关系的所有缓存页，适用于研究和测试中模拟冷启动场景。

### 从共享缓冲区中移除页面

```sql
-- 移除表的所有数据页
SELECT pg_cooldown('my_relation');

-- 移除主键索引的页面
SELECT pg_cooldown('my_relation_pkey');

-- 移除任意索引的页面
SELECT pg_cooldown('my_index_name');
```
