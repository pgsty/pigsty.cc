---
title: "pg_dispatch"
linkTitle: "pg_dispatch"
description: "基于 pg_cron 的异步 SQL 分发器"
weight: 1100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Snehil-Shah/pg_dispatch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Snehil-Shah/pg_dispatch</div>
    <div class="ext-card__desc">https://github.com/Snehil-Shah/pg_dispatch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_dispatch-0.1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_dispatch-0.1.5.tar.gz</div>
    <div class="ext-card__desc">pg_dispatch-0.1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dispatch`**](/ext/e/pg_dispatch) | `0.1.5` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1100  | [**`pg_dispatch`**](/ext/e/pg_dispatch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgcrypto`](/ext/e/pgcrypto) [`pg_cron`](/ext/e/pg_cron) [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_later`](/ext/e/pg_later) [`pg_background`](/ext/e/pg_background) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Pure SQL extension; runtime also needs pgcrypto from contrib in addition to pg_cron.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_dispatch` | `pgcrypto`, `pg_cron` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_dispatch_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-dispatch` | `postgresql-$v-cron` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
@ el8.x86_64 18 pg_dispatch_18 pg_dispatch_18-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dispatch_18-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_dispatch_18 pg_dispatch_18-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dispatch_18-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_dispatch_18 pg_dispatch_18-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dispatch_18-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_dispatch_18 pg_dispatch_18-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dispatch_18-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_dispatch_18 pg_dispatch_18-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dispatch_18-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_dispatch_18 pg_dispatch_18-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dispatch_18-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-dispatch postgresql-18-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-18-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_dispatch_17 pg_dispatch_17-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dispatch_17-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_dispatch_17 pg_dispatch_17-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dispatch_17-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_dispatch_17 pg_dispatch_17-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dispatch_17-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_dispatch_17 pg_dispatch_17-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dispatch_17-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_dispatch_17 pg_dispatch_17-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dispatch_17-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_dispatch_17 pg_dispatch_17-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dispatch_17-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-dispatch postgresql-17-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-17-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_dispatch_16 pg_dispatch_16-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dispatch_16-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_dispatch_16 pg_dispatch_16-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dispatch_16-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_dispatch_16 pg_dispatch_16-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dispatch_16-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_dispatch_16 pg_dispatch_16-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dispatch_16-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_dispatch_16 pg_dispatch_16-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dispatch_16-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_dispatch_16 pg_dispatch_16-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dispatch_16-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-dispatch postgresql-16-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-16-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_dispatch_15 pg_dispatch_15-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dispatch_15-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_dispatch_15 pg_dispatch_15-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dispatch_15-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_dispatch_15 pg_dispatch_15-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dispatch_15-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_dispatch_15 pg_dispatch_15-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dispatch_15-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_dispatch_15 pg_dispatch_15-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dispatch_15-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_dispatch_15 pg_dispatch_15-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dispatch_15-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-dispatch postgresql-15-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-15-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_dispatch_14 pg_dispatch_14-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dispatch_14-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_dispatch_14 pg_dispatch_14-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dispatch_14-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_dispatch_14 pg_dispatch_14-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 10.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dispatch_14-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_dispatch_14 pg_dispatch_14-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dispatch_14-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_dispatch_14 pg_dispatch_14-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dispatch_14-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_dispatch_14 pg_dispatch_14-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dispatch_14-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 4.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-dispatch postgresql-14-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 3.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dispatch/postgresql-14-pg-dispatch_0.1.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_dispatch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_dispatch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_dispatch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dispatch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dispatch -v 18  # PG 18
pig ext install -y pg_dispatch -v 17  # PG 17
pig ext install -y pg_dispatch -v 16  # PG 16
pig ext install -y pg_dispatch -v 15  # PG 15
pig ext install -y pg_dispatch -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dispatch_18       # PG 18
dnf install -y pg_dispatch_17       # PG 17
dnf install -y pg_dispatch_16       # PG 16
dnf install -y pg_dispatch_15       # PG 15
dnf install -y pg_dispatch_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-dispatch   # PG 18
apt install -y postgresql-17-pg-dispatch   # PG 17
apt install -y postgresql-16-pg-dispatch   # PG 16
apt install -y postgresql-15-pg-dispatch   # PG 15
apt install -y postgresql-14-pg-dispatch   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_dispatch CASCADE;  -- 依赖: pgcrypto, pg_cron
```


## 用法

> 语法：
>
> ```sql
> CREATE EXTENSION "Snehil_Shah@pg_dispatch";
> SELECT pgdispatch.fire('SELECT pg_sleep(40);');
> SELECT pgdispatch.snooze('SELECT pg_sleep(20);', '20 seconds');
> ```
>
> 来源：[README](https://github.com/Snehil-Shah/pg_dispatch)，[database.dev 页面](https://database.dev/Snehil_Shah/pg_dispatch)

`pg_dispatch` 是 PostgreSQL 的异步 SQL 调度器。它被设计为兼容 TLE 的 `pg_later` 替代方案，构建在 `pg_cron` 之上，因此可用于 Supabase 和 AWS RDS 等受限环境。

## 先决条件

上游 README 列出了以下要求：

- PostgreSQL 13 或更高版本
- `pg_cron` 1.5.0 或更高版本
- `pgcrypto`

## 安装

文档中给出的 TLE 安装路径如下：

```sql
SELECT dbdev.install(Snehil_Shah@pg_dispatch);
CREATE EXTENSION "Snehil_Shah@pg_dispatch";
```

README 提醒，该扩展会安装到 `pgdispatch` 模式中，如果系统里已经存在同名模式，可能会发生命名空间冲突。

## 函数

### `pgdispatch.fire(command text)`

异步派发一条 SQL 命令：

```sql
SELECT pgdispatch.fire('SELECT pg_sleep(40);');
```

### `pgdispatch.snooze(command text, delay interval)`

延迟派发一条 SQL 命令：

```sql
SELECT pgdispatch.snooze('SELECT pg_sleep(20);', '20 seconds');
```

README 指出，这个延迟调度是异步完成的，不会阻塞主事务。

## 适用场景

该项目主要用于数据库内的异步副作用，尤其适合 PL/pgSQL 或触发器流程。示例场景是把昂贵的通知或分析任务从 `AFTER INSERT` 触发器中拆出去，让主 RPC 或应用请求更快返回。
