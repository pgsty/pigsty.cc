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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_durable-0.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_durable-0.2.2.tar.gz</div>
    <div class="ext-card__desc">pg_durable-0.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_durable`**](/ext/e/pg_durable) | `0.2.2` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2870  | [**`pg_durable`**](/ext/e/pg_durable) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `df` |
{.ext-table}


> Requires shared_preload_libraries=pg_durable and a superuser worker role. Upstream README targets PG17; DEB validated PG14-18 on u24a arm64, RPM spec targets PG14-18; pgrx patched to 0.18.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "14,15,16,17,18" >}} | `pg_durable` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "14,15,16,17,18" >}} | `pg_durable_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-durable` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
@ el8.x86_64 18 pg_durable_18 pg_durable_18-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 5.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_18-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_durable_18 pg_durable_18-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 4.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_18-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_durable_18 pg_durable_18-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_18-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_durable_18 pg_durable_18-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_18-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_durable_18 pg_durable_18-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_18-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_durable_18 pg_durable_18-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_18-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-durable postgresql-18-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb pigsty 0.2.2 3.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-18-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_durable_17 pg_durable_17-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 5.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_17-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_durable_17 pg_durable_17-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 4.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_17-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_durable_17 pg_durable_17-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_17-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_durable_17 pg_durable_17-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_17-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_durable_17 pg_durable_17-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_17-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_durable_17 pg_durable_17-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_17-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-durable postgresql-17-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb pigsty 0.2.2 3.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-17-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_durable_16 pg_durable_16-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 5.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_16-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_durable_16 pg_durable_16-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 4.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_16-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_durable_16 pg_durable_16-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_16-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_durable_16 pg_durable_16-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_16-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_durable_16 pg_durable_16-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_16-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_durable_16 pg_durable_16-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_16-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-durable postgresql-16-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb pigsty 0.2.2 3.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-16-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_durable_15 pg_durable_15-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 5.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_15-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_durable_15 pg_durable_15-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 4.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_15-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_durable_15 pg_durable_15-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_15-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_durable_15 pg_durable_15-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_15-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_durable_15 pg_durable_15-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_15-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_durable_15 pg_durable_15-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_15-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-durable postgresql-15-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb pigsty 0.2.2 3.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-15-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_durable_14 pg_durable_14-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 5.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_durable_14-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_durable_14 pg_durable_14-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 4.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_durable_14-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_durable_14 pg_durable_14-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_durable_14-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_durable_14 pg_durable_14-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_durable_14-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_durable_14 pg_durable_14-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 5.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_durable_14-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_durable_14 pg_durable_14-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 5.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_durable_14-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 4.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 4.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb pigsty 0.2.2 4.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-durable postgresql-14-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb pigsty 0.2.2 3.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-durable/postgresql-14-pg-durable_0.2.2-2PIGSTY~resolute_arm64.deb
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

来源：[pg_durable v0.2.2 README](https://github.com/microsoft/pg_durable/blob/v0.2.2/README.md)、[User Guide](https://github.com/microsoft/pg_durable/blob/v0.2.2/USER_GUIDE.md)、[control file](https://github.com/microsoft/pg_durable/blob/v0.2.2/pg_durable.control)、[GUC definitions](https://github.com/microsoft/pg_durable/blob/v0.2.2/src/lib.rs)。

## 用法

`pg_durable` 在 PostgreSQL 内运行持久、容错的 SQL 工作流。工作流由 SQL 字符串、函数和 DSL 操作符组成，并通过 `df.start()` 提交。状态会持久化在 PostgreSQL 中，因此崩溃或重启后已完成的步骤不会被重复执行。

`pg_durable` 必须通过 `shared_preload_libraries` 加载，然后重启 PostgreSQL。它的后台 worker 会连接到 `pg_durable.database` 指定的数据库，并以 `pg_durable.worker_role` 运行；上游默认值分别为 `postgres` 和 `azuresu`，且 worker role 必须是 superuser。

### 启用并授权访问

```sql
CREATE EXTENSION pg_durable;

SELECT df.grant_usage('app_role');
```

`CREATE EXTENSION` 不会把 usage 授给 `PUBLIC`。请为应用角色使用 `df.grant_usage()`，并在扩展升级后重新执行，确保新增加的函数也被覆盖。后台 worker 会在扩展创建后异步初始化；如果 `df.*` 调用报告 worker 尚未初始化，可以稍后重试。

### 启动并监控工作流

```sql
SELECT df.start('SELECT ''Hello, durable world!''', 'hello-job');

SELECT *
FROM df.list_instances();

SELECT df.status('a1b2c3d4');
SELECT df.result('a1b2c3d4');
SELECT df.cancel('a1b2c3d4', 'No longer needed');
```

`df.start()` 返回一个 instance ID。使用该 ID 调用 `df.status()`、`df.result()`、`df.cancel()`、`df.signal()` 和 `df.explain()`。

### 组合 SQL 步骤

```sql
-- Run one step, name its result, then substitute it in the next step.
SELECT df.start(
  'SELECT 100 AS amount' |=> 'total'
  ~> 'SELECT $total * 2 AS doubled',
  'double-total'
);

-- Branch on a SQL condition.
SELECT df.start(
  'SELECT count(*) > 10 FROM orders'
    ?> 'SELECT ''high volume'''
    !> 'SELECT ''low volume''',
  'order-volume'
);

-- Run in parallel and wait for both branches.
SELECT df.start(
  'SELECT refresh_accounts()' & 'SELECT refresh_orders()',
  'parallel-refresh'
);
```

核心操作符包括表示顺序执行的 `~>`、为结果命名的 `|=>`、join 的 `&`、race 的 `|`、条件分支 `?>` 和 `!>`，以及循环 `@>`。

### 定时器、计划任务与信号

```sql
SELECT df.start(
  @> (
    df.wait_for_schedule('0 * * * *')
    ~> 'SELECT run_hourly_rollup()'
  ),
  'hourly-rollup'
);

SELECT df.start(
  'SELECT create_invoice()' |=> 'invoice'
  ~> df.wait_for_signal('approval', 86400)
  ~> 'SELECT finalize_invoice($invoice.id)',
  'invoice-approval'
);
```

常用 DSL 函数包括 `df.sleep(seconds)`、`df.wait_for_schedule(cron)`、`df.wait_for_signal(name, timeout)`、`df.signal(id, name, data)`、`df.join()`、`df.race()`、`df.if()`、`df.loop()` 和 `df.explain()`。

### 配置与注意事项

- 必需 preload：把 `pg_durable` 加入 `shared_preload_libraries` 并重启 PostgreSQL。
- `pg_durable.database` 必须指向创建该扩展的数据库；工作流不会在其他数据库中被处理。
- `pg_durable.worker_role` 必须存在且为 superuser，因为 worker 会绕过 RLS 来管理所有用户的实例。
- 连接相关 GUC 包括 `pg_durable.max_management_connections`、`pg_durable.max_duroxide_connections`、`pg_durable.max_user_connections` 和 `pg_durable.execution_acquire_timeout`。
- `df.http()` 会执行出站 HTTP 工作，除非使用 `df.grant_usage(..., include_http => true)`，否则不会包含在标准授权中。
- 上游将 v0.2.2 标记为早期开发版本，尚不适合生产环境。
