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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_durable-0.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_durable-0.2.3.tar.gz</div>
    <div class="ext-card__desc">pg_durable-0.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_durable`**](/ext/e/pg_durable) | `0.2.3` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2870  | [**`pg_durable`**](/ext/e/pg_durable) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `df` |
{.ext-table}


> Requires shared_preload_libraries=pg_durable and a superuser worker role.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_durable` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_durable_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-durable` | - |
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_durable;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_durable -v 18  # PG 18
pig ext install -y pg_durable -v 17  # PG 17
pig ext install -y pg_durable -v 16  # PG 16
pig ext install -y pg_durable -v 15  # PG 15
pig ext install -y pg_durable -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_durable_18       # PG 18
dnf install -y pg_durable_17       # PG 17
dnf install -y pg_durable_16       # PG 16
dnf install -y pg_durable_15       # PG 15
dnf install -y pg_durable_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-durable   # PG 18
apt install -y postgresql-17-pg-durable   # PG 17
apt install -y postgresql-16-pg-durable   # PG 16
apt install -y postgresql-15-pg-durable   # PG 15
apt install -y postgresql-14-pg-durable   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


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

- [官方v0.2.3 README](https://github.com/microsoft/pg_durable/blob/v0.2.3/README.md)
- [v0.2.3用户指南](https://github.com/microsoft/pg_durable/blob/v0.2.3/USER_GUIDE.md)
- [v0.2.3发布说明](https://github.com/microsoft/pg_durable/releases/tag/v0.2.3)
- [从v0.2.2到v0.2.3的升级SQL](https://github.com/microsoft/pg_durable/blob/v0.2.3/sql/pg_durable--0.2.2--0.2.3.sql)

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

### v0.2.3边界

- 新鲜安装v0.2.3将提供程序对象放置在`_duroxide`中；从0.2.2或更早版本升级后保留`duroxide`。`df.duroxide_schema()`报告当前活动的模式。
- 深度超过256级或节点数大于10,000的工作流被拒绝。条件查询返回空行时评估为假。
- 在执行`df.grant_usage()`后重新运行`ALTER EXTENSION ... UPDATE`，因为所有函数上的权限不会自动包含后来添加的函数。
- `{name}`变量替换是原始SQL文本替换；不要将不可信输入放置在这样的变量中。通过`$name`进行命名步骤结果替换执行SQL转义。
- `df.http()`可用性和出站策略是编译时特性。其限制不会对任意SQL或其他已安装的扩展进行沙盒化。
- 上游将该项目标记为预览版，发布的v0.2.3 Docker镜像用于评估和学习而非生产环境。
