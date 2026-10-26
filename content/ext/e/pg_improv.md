---
title: "pg_improv"
linkTitle: "pg_improv"
description: "基于 PostgreSQL 表的增量多维模型与公式函数。"
weight: 2580
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/improv">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/improv</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/improv</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/improv-0.10.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">improv-0.10.0.tar.gz</div>
    <div class="ext-card__desc">improv-0.10.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_improv`**](/ext/e/pg_improv) | `0.10.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20 or mit" href="/ext/license#apache20ormit">Apache-2.0 OR MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2580  | [**`pg_improv`**](/ext/e/pg_improv) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `improv` |
{.ext-table}


> Superuser install. Default logical mode needs preload/restart, wal_level=logical and a configured worker database; trigger/manual work without preload, commit mode needs session/server preload. Logical slots retain WAL; results are asynchronous. Builds use pgrx 0.19.3; upstream uses 0.17.0. Numeric model values use float8.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.10.0` | {{< pgvers "15,16,17,18" >}} | `pg_improv` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.10.0` | {{< pgvers "15,16,17,18" >}} | `pg_improv_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.10.0` | {{< pgvers "15,16,17,18" >}} | `postgresql-$v-pg-improv` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | AVAIL PIGSTY 0.10.0 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_improv_18 pg_improv_18-0.10.0-1PGSTY.el8.x86_64.rpm pigsty 0.10.0 4.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_improv_18-0.10.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_improv_18 pg_improv_18-0.10.0-1PGSTY.el8.aarch64.rpm pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_improv_18-0.10.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_improv_18 pg_improv_18-0.10.0-1PGSTY.el9.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_improv_18-0.10.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_improv_18 pg_improv_18-0.10.0-1PGSTY.el9.aarch64.rpm pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_improv_18-0.10.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_improv_18 pg_improv_18-0.10.0-1PGSTY.el10.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_improv_18-0.10.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_improv_18 pg_improv_18-0.10.0-1PGSTY.el10.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_improv_18-0.10.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-improv postgresql-18-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-18-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_improv_17 pg_improv_17-0.10.0-1PGSTY.el8.x86_64.rpm pigsty 0.10.0 4.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_improv_17-0.10.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_improv_17 pg_improv_17-0.10.0-1PGSTY.el8.aarch64.rpm pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_improv_17-0.10.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_improv_17 pg_improv_17-0.10.0-1PGSTY.el9.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_improv_17-0.10.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_improv_17 pg_improv_17-0.10.0-1PGSTY.el9.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_improv_17-0.10.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_improv_17 pg_improv_17-0.10.0-1PGSTY.el10.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_improv_17-0.10.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_improv_17 pg_improv_17-0.10.0-1PGSTY.el10.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_improv_17-0.10.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-improv postgresql-17-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-17-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_improv_16 pg_improv_16-0.10.0-1PGSTY.el8.x86_64.rpm pigsty 0.10.0 4.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_improv_16-0.10.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_improv_16 pg_improv_16-0.10.0-1PGSTY.el8.aarch64.rpm pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_improv_16-0.10.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_improv_16 pg_improv_16-0.10.0-1PGSTY.el9.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_improv_16-0.10.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_improv_16 pg_improv_16-0.10.0-1PGSTY.el9.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_improv_16-0.10.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_improv_16 pg_improv_16-0.10.0-1PGSTY.el10.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_improv_16-0.10.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_improv_16 pg_improv_16-0.10.0-1PGSTY.el10.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_improv_16-0.10.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-improv postgresql-16-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-16-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_improv_15 pg_improv_15-0.10.0-1PGSTY.el8.x86_64.rpm pigsty 0.10.0 4.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_improv_15-0.10.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_improv_15 pg_improv_15-0.10.0-1PGSTY.el8.aarch64.rpm pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_improv_15-0.10.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_improv_15 pg_improv_15-0.10.0-1PGSTY.el9.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_improv_15-0.10.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_improv_15 pg_improv_15-0.10.0-1PGSTY.el9.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_improv_15-0.10.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_improv_15 pg_improv_15-0.10.0-1PGSTY.el10.x86_64.rpm pigsty 0.10.0 4.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_improv_15-0.10.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_improv_15 pg_improv_15-0.10.0-1PGSTY.el10.aarch64.rpm pigsty 0.10.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_improv_15-0.10.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb pigsty 0.10.0 3.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb pigsty 0.10.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~noble_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~noble_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb pigsty 0.10.0 4.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-improv postgresql-15-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb pigsty 0.10.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-improv/postgresql-15-pg-improv_0.10.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_improv` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_improv         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_improv` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_improv;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_improv -v 18  # PG 18
pig ext install -y pg_improv -v 17  # PG 17
pig ext install -y pg_improv -v 16  # PG 16
pig ext install -y pg_improv -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_improv_18       # PG 18
dnf install -y pg_improv_17       # PG 17
dnf install -y pg_improv_16       # PG 16
dnf install -y pg_improv_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-improv   # PG 18
apt install -y postgresql-17-pg-improv   # PG 17
apt install -y postgresql-16-pg-improv   # PG 16
apt install -y postgresql-15-pg-improv   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_improv;
```

## 用法

来源：

- [官方资料](https://api.pgxn.org/src/pg_improv/pg_improv-0.10.0/crates/pg_improv/README.md)
- [官方资料](https://api.pgxn.org/src/pg_improv/pg_improv-0.10.0/crates/pg_improv/pg_improv.control)
- [官方资料](https://api.pgxn.org/src/pg_improv/pg_improv-0.10.0/crates/pg_improv/Cargo.toml)

`pg_improv` 0.10.0 将 PostgreSQL 表绑定到多维模型，计算公式并物化结果。它支持 PostgreSQL 15–18，安装需要超级用户。以下示例使用手工同步模式，无需预加载库。

### 核心流程

```sql
CREATE EXTENSION pg_improv;
CREATE TABLE sales (quarter text, price float8, qty float8);
INSERT INTO sales VALUES ('Q1', 10, 100), ('Q2', 12, 200);
SELECT improv.create_model('plan');
SELECT improv.set_sync_mode('plan', 'manual');
SELECT improv.bind_category('plan', 'Time', 'sales', 'quarter');
SELECT improv.bind_measure('plan', 'Price', 'sales', 'price');
SELECT improv.bind_measure('plan', 'Quantity', 'sales', 'qty');
SELECT improv.define('plan', 'Revenue = Price * Quantity');
SELECT improv.recalc('plan');
SELECT * FROM improv_plan.revenue;
SELECT * FROM improv.status('plan');
```

先绑定类别，再绑定对应度量。重复坐标需要显式聚合，空值不会生成模型单元。结果表位于模型专属模式中。`improv.define` 可用 `replace => true` 替换公式，`improv.recalc` 返回发生变化的结果行数。

### 同步模式

`improv.set_sync_mode` 选择手工、触发器、提交或逻辑同步。触发器模式无需预加载；提交模式需要会话或服务器预加载。默认的逻辑模式要求配置 `shared_preload_libraries`、重启服务器、启用 `wal_level=logical`，并正确设置工作进程使用的 `improv.database`。逻辑同步结果异步可见；事务内需要立即看到当前结果时，应显式重算。

监控 `improv.status`，并通过 `max_slot_wal_keep_size` 限制保留的 WAL。工作进程停滞时，逻辑复制槽可能持续保留 WAL。绑定表可能创建发布并修改复制身份，启用逻辑模式前应评估这些影响。

### 公式与维护边界

`improv` 语言支持标量公式与模型表达式，但不能执行任意 SQL 调用或外部 I/O。公式错误通常转换为空值，`improv.raise_errors` 可以改变该策略。数值和大整数通过浮点运算求值，超过 2^53 的精度需要特别注意。`improv.max_cells` 限制载入的输入单元数。

使用数据库转储备份模型定义与结果状态，并演练恢复；逻辑模式恢复后需要新建复制槽并重算。升级库时需重启已预加载的进程，并更新扩展 SQL。模型计算结果与应用事务中的权威源表是不同层次的数据。
