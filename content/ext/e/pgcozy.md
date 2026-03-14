---
title: "pgcozy"
linkTitle: "pgcozy"
description: "根据先前的pg_buffercache快照预热内存缓冲区"
weight: 5190
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vventirozos/pgcozy">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vventirozos/pgcozy</div>
    <div class="ext-card__desc">https://github.com/vventirozos/pgcozy</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgcozy-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgcozy-1.0.tar.gz</div>
    <div class="ext-card__desc">pgcozy-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgcozy`**](/ext/e/pgcozy) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5190  | [**`pgcozy`**](/ext/e/pgcozy) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_prewarm`](/ext/e/pg_prewarm) [`pgfincore`](/ext/e/pgfincore) [`pg_cooldown`](/ext/e/pg_cooldown) [`pg_prewarm`](/ext/e/pg_prewarm) [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) [`pg_visibility`](/ext/e/pg_visibility) [`system_stats`](/ext/e/system_stats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgcozy` | `pg_buffercache`, `pg_prewarm` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgcozy_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgcozy` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pgcozy_18 pgcozy_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcozy_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgcozy_18 pgcozy_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcozy_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgcozy_18 pgcozy_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcozy_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgcozy_18 pgcozy_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcozy_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgcozy_18 pgcozy_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcozy_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgcozy_18 pgcozy_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcozy_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgcozy postgresql-18-pgcozy_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-18-pgcozy_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgcozy_17 pgcozy_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcozy_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgcozy_17 pgcozy_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcozy_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgcozy_17 pgcozy_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcozy_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgcozy_17 pgcozy_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcozy_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgcozy_17 pgcozy_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcozy_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgcozy_17 pgcozy_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcozy_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgcozy postgresql-17-pgcozy_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-17-pgcozy_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgcozy_16 pgcozy_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcozy_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgcozy_16 pgcozy_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcozy_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgcozy_16 pgcozy_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcozy_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgcozy_16 pgcozy_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcozy_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgcozy_16 pgcozy_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcozy_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgcozy_16 pgcozy_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcozy_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgcozy postgresql-16-pgcozy_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-16-pgcozy_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgcozy_15 pgcozy_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcozy_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgcozy_15 pgcozy_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcozy_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgcozy_15 pgcozy_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcozy_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgcozy_15 pgcozy_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcozy_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgcozy_15 pgcozy_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcozy_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgcozy_15 pgcozy_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcozy_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgcozy postgresql-15-pgcozy_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-15-pgcozy_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgcozy_14 pgcozy_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcozy_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgcozy_14 pgcozy_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcozy_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgcozy_14 pgcozy_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcozy_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgcozy_14 pgcozy_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 10.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcozy_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgcozy_14 pgcozy_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcozy_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgcozy_14 pgcozy_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 10.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcozy_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgcozy postgresql-14-pgcozy_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcozy/postgresql-14-pgcozy_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgcozy` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgcozy         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgcozy` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgcozy;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgcozy -v 18  # PG 18
pig ext install -y pgcozy -v 17  # PG 17
pig ext install -y pgcozy -v 16  # PG 16
pig ext install -y pgcozy -v 15  # PG 15
pig ext install -y pgcozy -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgcozy_18       # PG 18
dnf install -y pgcozy_17       # PG 17
dnf install -y pgcozy_16       # PG 16
dnf install -y pgcozy_15       # PG 15
dnf install -y pgcozy_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgcozy   # PG 18
apt install -y postgresql-17-pgcozy   # PG 17
apt install -y postgresql-16-pgcozy   # PG 16
apt install -y postgresql-15-pgcozy   # PG 15
apt install -y postgresql-14-pgcozy   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgcozy CASCADE;  -- 依赖: pg_buffercache, pg_prewarm
```



## 用法

> [pgcozy: 根据之前的 pg_buffercache 快照预热 PostgreSQL 共享缓冲区](https://github.com/vventirozos/pgcozy)

pgcozy 对当前共享缓冲区状态进行快照，并可稍后从这些快照恢复（预热）缓冲区。需要 `pg_buffercache` 和 `pg_prewarm` 扩展。

### 初始化

```sql
SELECT pgcozy_init();
```

创建 `pgcozy` 模式，包含 `snapshots` 表和 `cozy_type` 类型。

### 拍摄快照

```sql
-- 快照使用次数 >= 3 的缓冲页（热度 1-5）
SELECT pgcozy_snapshot(3);

-- 快照所有缓冲页（热度 = 0）
SELECT pgcozy_snapshot(0);
```

快照以 JSONB 格式存储在 `pgcozy.snapshots` 中，包含列：`id`、`snapshot_date`、`snapshot`。每条记录包含 `table_name`、`block_no` 和 `popularity`。

### 从快照预热

```sql
-- 从特定快照 ID 预热
SELECT pgcozy_warm(1);

-- 从最新快照预热
SELECT pgcozy_warm(0);
```

### 查看快照

```sql
SELECT id, snapshot_date FROM pgcozy.snapshots;
```

快照以 JSONB 存储，可以查看、备份或在服务器之间传输。
