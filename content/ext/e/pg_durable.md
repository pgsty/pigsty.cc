---
title: "pg_durable"
linkTitle: "pg_durable"
description: "在 PostgreSQL 中使用 SQL 定义可持久化、可恢复的长时间运行函数"
weight: 2870
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/microsoft/pg_durable">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">microsoft/pg_durable</div>
    <div class="ext-card__desc">https://github.com/microsoft/pg_durable</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_durable-0.2.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_durable-0.2.7.tar.gz</div>
    <div class="ext-card__desc">pg_durable-0.2.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_durable`**](/ext/e/pg_durable) | `0.2.7` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2870  | [**`pg_durable`**](/ext/e/pg_durable) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_task`](/ext/e/pg_task) [`pgmq`](/ext/e/pgmq) [`pg_background`](/ext/e/pg_background) [`ulak`](/ext/e/ulak) [`pgmb`](/ext/e/pgmb) [`pg_later`](/ext/e/pg_later) [`pg_dispatch`](/ext/e/pg_dispatch) [`pg_retry`](/ext/e/pg_retry) [`fsm_core`](/ext/e/fsm_core) [`pglock`](/ext/e/pglock) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires preload and a superuser worker role; pgrx 0.19.2.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_durable` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_durable_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-durable` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
@ el8.x86_64 18 pg_durable_18 pg_durable_18-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_18-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_durable_18 pg_durable_18-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_18-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_durable_18 pg_durable_18-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_18-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_durable_18 pg_durable_18-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_18-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_durable_18 pg_durable_18-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_18-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_durable_18 pg_durable_18-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_18-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_durable_17 pg_durable_17-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_17-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_durable_17 pg_durable_17-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_17-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_durable_17 pg_durable_17-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_17-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_durable_17 pg_durable_17-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_17-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_durable_17 pg_durable_17-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_17-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_durable_17 pg_durable_17-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_17-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_durable_16 pg_durable_16-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_16-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_durable_16 pg_durable_16-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_16-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_durable_16 pg_durable_16-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_16-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_durable_16 pg_durable_16-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_16-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_durable_16 pg_durable_16-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_16-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_durable_16 pg_durable_16-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_16-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_durable_15 pg_durable_15-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_15-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_durable_15 pg_durable_15-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_15-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_durable_15 pg_durable_15-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_15-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_durable_15 pg_durable_15-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_15-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_durable_15 pg_durable_15-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_15-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_durable_15 pg_durable_15-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_15-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_durable_14 pg_durable_14-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 4.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_14-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_durable_14 pg_durable_14-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 4.3MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_14-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_durable_14 pg_durable_14-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_14-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_durable_14 pg_durable_14-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_14-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_durable_14 pg_durable_14-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 4.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_14-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_durable_14 pg_durable_14-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 4.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_14-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.3-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_durable` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_durable         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_durable` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_durable;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_durable -v 18  # PG 18
pig ext install -y pg_durable -v 17  # PG 17
pig ext install -y pg_durable -v 16  # PG 16
pig ext install -y pg_durable -v 15  # PG 15
pig ext install -y pg_durable -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_durable_18       # PG 18
dnf install -y pg_durable_17       # PG 17
dnf install -y pg_durable_16       # PG 16
dnf install -y pg_durable_15       # PG 15
dnf install -y pg_durable_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-durable   # PG 18
apt install -y postgresql-17-pg-durable   # PG 17
apt install -y postgresql-16-pg-durable   # PG 16
apt install -y postgresql-15-pg-durable   # PG 15
apt install -y postgresql-14-pg-durable   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_durable';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_durable;
```

## 用法

来源：

- [PGXN 0.2.6 README](https://pgxn.org/dist/pg_durable/0.2.6/README.html)
- [0.2.6 用户指南](https://api.pgxn.org/src/pg_durable/pg_durable-0.2.6/USER_GUIDE.md)
- [0.2.6 变更日志](https://api.pgxn.org/src/pg_durable/pg_durable-0.2.6/CHANGELOG.md)
- [pg_durable 控制文件](https://api.pgxn.org/src/pg_durable/pg_durable-0.2.6/pg_durable.control)
- [0.2.5 至 0.2.6 升级 SQL](https://api.pgxn.org/src/pg_durable/pg_durable-0.2.6/sql/pg_durable--0.2.5--0.2.6.sql)

`pg_durable` 在PostgreSQL中运行持久、容错的SQL工作流。一个工作流是一系列SQL步骤、定时器、信号、条件和并行分支组成的图，通过`df.start()`提交。执行状态会在PostgreSQL中进行检查点记录，因此在崩溃、重启或重试后不会重复已完成的步骤。

### 启用和授权访问

预加载工作进程，如果默认设置不合适，则选择其数据库和超级用户角色，然后重启PostgreSQL：

```conf
shared_preload_libraries = 'pg_durable'
pg_durable.database = 'postgres'
pg_durable.worker_role = 'postgres'
```

在`pg_durable.database`中创建扩展，并授予应用程序登录角色访问权限：

```sql
CREATE EXTENSION pg_durable;
SELECT df.grant_usage('app_role');
```

工作进程角色必须是超级用户，因为它会管理所有用户的实例并绕过行级安全。调用`df.start()`的角色必须具有`LOGIN`权限，因为工作流SQL是通过该捕获角色认证的连接执行的。

### 构建和运行一个工作流

```sql
SELECT df.start(
    'SELECT 100 AS amount' |=> 'total'
    ~> 'SELECT $total.amount * 2 AS doubled',
    'double-total'
);
```

`df.start()`返回实例ID。使用它来监控或控制运行：

```sql
SELECT df.status('a1b2c3d4');
SELECT df.result('a1b2c3d4');
SELECT * FROM df.instance_nodes('a1b2c3d4');
SELECT * FROM df.instance_executions('a1b2c3d4', 20);
SELECT df.cancel('a1b2c3d4', 'No longer needed');
```

### DSL索引

- `~>` 用于序列化步骤；`|=>` 为`$name`、`$name.column` 或 `$name.*` 替换命名结果。
- `&` / `df.join()` 等待并行分支；`|` / `df.race()` 保留第一个结果。
- `?>` 和 `!>` / `df.if()` 选择条件分支；`@>` / `df.loop()` 重复一个图。
- `df.sleep()`、`df.wait_for_schedule()` 和 `df.wait_for_signal()` 使等待持久化。
- `df.signal()`、`df.wait_for_completion()`、`df.explain()` 及实例检查函数操作正在运行或存储的实例。
- `df.setvar()`、`df.getvar()`、`df.unsetvar()` 和 `df.clearvars()` 管理在调用`df.start()`时捕获的用户变量。

### 0.2.6 版本边界

- 上游源码安装与发布镜像使用 `pgrx` 0.16.1，支持 PostgreSQL 17 与 18。扩展仍要求 `shared_preload_libraries`、重启以及超级用户工作角色。
- 经由 0.2.4 与 0.2.5 的升级包含会破坏重放的工作流变更。升级前应排空或取消运行中的 JOIN、RACE、循环与 `df.wait_for_schedule()` 工作；0.2.4 的 `df.nodes` 键迁移还会获取 `ACCESS EXCLUSIVE` 锁。
- `df.start(..., transaction_mode => 'new')` 会在调用者事务之外持久化独立启动。集群默认最多并发启动两个，由 `pg_durable.max_new_transaction_starts` 与 `pg_durable.new_transaction_start_timeout` 控制。
- 0.2.6 从左到右只解析一次变量替换，所以变量值引入的令牌形文本不会再次扫描。它仍是原始 SQL 替换；绝不能把不可信输入放进 `{name}` 变量。通过 `$name` 的命名步骤结果替换会执行 SQL 转义。
- 未公开的 `df.ensure_durofut(text)` 辅助函数已移除。升级前应删除或改写客户自有的依赖对象。
- 在 `ALTER EXTENSION ... UPDATE` 后重新运行 `df.grant_usage()`，因为对全部函数的授权不会自动覆盖后来新增的函数。
- `df.http()` 与 `df.http_multipart()` 的可用性和出站策略是编译时特性。其限制不会沙箱化任意 SQL 或其他已安装扩展。
- 项目仍处于 1.0 之前，上游发布的 Docker 镜像用于评估与学习，而不是生产。应阅读每个相邻版本的升级警告，不要假设未经测试的跨版本跳跃可安全重放。
