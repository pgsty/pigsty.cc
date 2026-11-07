---
title: "pg_warren"
linkTitle: "pg_warren"
description: "基于 PostgreSQL 表的版本化图遍历与图计算"
weight: 2645
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ExaDev/pg_warren">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ExaDev/pg_warren</div>
    <div class="ext-card__desc">https://github.com/ExaDev/pg_warren</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_warren-0.8.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_warren-0.8.0.tar.gz</div>
    <div class="ext-card__desc">pg_warren-0.8.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_warren`**](/ext/e/pg_warren) | `0.8.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2645  | [**`pg_warren`**](/ext/e/pg_warren) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `warren` |
{.ext-table .wide .expand}


> Shared cache preload on PG15–16


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.0` | {{< pgvers "15,16,17,18" >}} | `pg_warren` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.0` | {{< pgvers "15,16,17,18" >}} | `pg_warren_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.0` | {{< pgvers "15,16,17,18" >}} | `postgresql-$v-pg-warren` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | AVAIL PIGSTY 0.8.0 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_warren_18 pg_warren_18-0.8.0-1PGSTY.el8.x86_64.rpm pigsty 0.8.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_warren_18-0.8.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_warren_18 pg_warren_18-0.8.0-1PGSTY.el8.aarch64.rpm pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_warren_18-0.8.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_warren_18 pg_warren_18-0.8.0-1PGSTY.el9.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_warren_18-0.8.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_warren_18 pg_warren_18-0.8.0-1PGSTY.el9.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_warren_18-0.8.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_warren_18 pg_warren_18-0.8.0-1PGSTY.el10.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_warren_18-0.8.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_warren_18 pg_warren_18-0.8.0-1PGSTY.el10.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_warren_18-0.8.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb pigsty 0.8.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~noble_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~noble_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-warren postgresql-18-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-18-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_warren_17 pg_warren_17-0.8.0-1PGSTY.el8.x86_64.rpm pigsty 0.8.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_warren_17-0.8.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_warren_17 pg_warren_17-0.8.0-1PGSTY.el8.aarch64.rpm pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_warren_17-0.8.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_warren_17 pg_warren_17-0.8.0-1PGSTY.el9.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_warren_17-0.8.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_warren_17 pg_warren_17-0.8.0-1PGSTY.el9.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_warren_17-0.8.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_warren_17 pg_warren_17-0.8.0-1PGSTY.el10.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_warren_17-0.8.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_warren_17 pg_warren_17-0.8.0-1PGSTY.el10.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_warren_17-0.8.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb pigsty 0.8.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~noble_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~noble_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-warren postgresql-17-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-17-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_warren_16 pg_warren_16-0.8.0-1PGSTY.el8.x86_64.rpm pigsty 0.8.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_warren_16-0.8.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_warren_16 pg_warren_16-0.8.0-1PGSTY.el8.aarch64.rpm pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_warren_16-0.8.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_warren_16 pg_warren_16-0.8.0-1PGSTY.el9.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_warren_16-0.8.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_warren_16 pg_warren_16-0.8.0-1PGSTY.el9.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_warren_16-0.8.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_warren_16 pg_warren_16-0.8.0-1PGSTY.el10.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_warren_16-0.8.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_warren_16 pg_warren_16-0.8.0-1PGSTY.el10.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_warren_16-0.8.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb pigsty 0.8.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~noble_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~noble_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-warren postgresql-16-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-16-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_warren_15 pg_warren_15-0.8.0-1PGSTY.el8.x86_64.rpm pigsty 0.8.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_warren_15-0.8.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_warren_15 pg_warren_15-0.8.0-1PGSTY.el8.aarch64.rpm pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_warren_15-0.8.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_warren_15 pg_warren_15-0.8.0-1PGSTY.el9.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_warren_15-0.8.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_warren_15 pg_warren_15-0.8.0-1PGSTY.el9.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_warren_15-0.8.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_warren_15 pg_warren_15-0.8.0-1PGSTY.el10.x86_64.rpm pigsty 0.8.0 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_warren_15-0.8.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_warren_15 pg_warren_15-0.8.0-1PGSTY.el10.aarch64.rpm pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_warren_15-0.8.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb pigsty 0.8.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb pigsty 0.8.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb pigsty 0.8.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~noble_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~noble_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb pigsty 0.8.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-warren postgresql-15-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb pigsty 0.8.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-warren/postgresql-15-pg-warren_0.8.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_warren` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_warren         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_warren` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_warren;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_warren -v 18  # PG 18
pig ext install -y pg_warren -v 17  # PG 17
pig ext install -y pg_warren -v 16  # PG 16
pig ext install -y pg_warren -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_warren_18       # PG 18
dnf install -y pg_warren_17       # PG 17
dnf install -y pg_warren_16       # PG 16
dnf install -y pg_warren_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-warren   # PG 18
apt install -y postgresql-17-pg-warren   # PG 17
apt install -y postgresql-16-pg-warren   # PG 16
apt install -y postgresql-15-pg-warren   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_warren;
```

## 用法

来源：

- [官方说明](https://github.com/ExaDev/pg_warren/blob/v0.8.0/README.md)
- [控制文件](https://github.com/ExaDev/pg_warren/blob/v0.8.0/crates/pg_warren/pg_warren.control)
- [SQL 接口](https://github.com/ExaDev/pg_warren/blob/v0.8.0/sql/pg_warren--0.8.0.sql)
- [限制与共享缓存](https://github.com/ExaDev/pg_warren/blob/v0.8.0/docs/limits.md)

`pg_warren` 0.8.0 从普通 PostgreSQL 表构建版本化邻接快照，用于图遍历与图计算。它支持 PostgreSQL 15–18，图版本、向量及其变更都参与 PostgreSQL 事务。遍历读取已构建的快照；源表发生变化后需要显式刷新。

### 核心流程

这是可信扩展，在数据库上拥有 `CREATE` 权限的角色可以安装。基本图由节点查询与边查询定义：

```sql
CREATE EXTENSION pg_warren;
CREATE TABLE people (id bigint PRIMARY KEY, name text);
CREATE TABLE follows (src bigint, dst bigint);
INSERT INTO people VALUES (1, 'Ada'), (2, 'Bob'), (3, 'Cy');
INSERT INTO follows VALUES (1, 2), (2, 3);
SELECT warren.create_graph('social',
  'SELECT id FROM public.people', 'SELECT src, dst FROM public.follows');
SELECT warren.refresh('social');
SELECT * FROM warren.bfs('social', ARRAY[1::bigint], 3);
SELECT warren.pagerank('social', 'rank');
SELECT * FROM warren.vector_topk('social', 'rank', 3, NULL::bigint);
```

图会保存源查询。修改源表后执行 `warren.refresh`，使用 `warren.info` 查看版本，使用 `warren.diff` 比较差异。版本构建与切换会随外层事务一起回滚。

### 遍历与计算

| 接口 | 用途 |
| --- | --- |
| `warren.bfs`、`warren.shortest_path` | 广度优先遍历与最短路径 |
| `warren.pagerank`、`warren.components` | 节点排名与连通分量 |
| `warren.leiden` | 社区发现 |
| `warren.spmv`、`warren.gather` | 将图计算组合到 SQL 中 |
| `warren.vector_topk` | 读取已存向量中最大的值 |
| `warren.shared_cache`、`warren.backends` | 检查共享条目与后端缓存使用情况 |

标识符类型必须与图一致。没有节点标识符参数的函数可能需要 `NULL::bigint` 这样的类型示例值。0.8.0 的 PageRank 与 Leiden 使用原生计算内核，将结果写入命名向量。

### 内存与预加载

PostgreSQL 17–18 会在首次使用时初始化共享缓存。PostgreSQL 15–16 要在后端间共享图数据，需要配置以下参数并重启服务器：

```ini
shared_preload_libraries = 'pg_warren'
```

PostgreSQL 15–16 未预加载时仍可执行图操作，但使用各后端的私有缓存。如果已有预加载列表，应将该库追加到列表中。

`warren.shared_cache_memory` 限制整个集群的共享缓存，重新加载配置后生效。`warren.max_cache_memory`、`warren.max_compute_memory` 与 `warren.max_build_memory` 分别限制私有缓存、计算与构建分配，不是同一个总内存预算。`warren.threads` 控制计算并行度。Linux 上的共享条目还需要足够的 `/dev/shm` 空间，放不下的条目会退回私有缓存。

### 访问、备份与升级

源查询以图所有者身份执行，并使用保存的 `search_path`。应显式限定源对象模式，并使用受控模式。公共函数检查图访问权限；安装扩展不会授予私有目录表的直接访问权。

应以超级用户转储，包含图目录、版本与向量，并在恢复前建立所需的所有者和读取者角色。从源表重建图不能保留历史图版本。安装新库文件后，在每个使用该扩展的数据库执行 `ALTER EXTENSION pg_warren UPDATE`。删除扩展会删除已存图。该项目尚未到 1.0，不会增量维护图快照。
