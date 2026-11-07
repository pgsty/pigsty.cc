---
title: "pg_lion"
linkTitle: "pg_lion"
description: "用于过滤、计数与聚合的 Roaring 位图倒排索引"
weight: 2715
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cgkanchi/pg_lion">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cgkanchi/pg_lion</div>
    <div class="ext-card__desc">https://github.com/cgkanchi/pg_lion</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_lion-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_lion-0.3.0.tar.gz</div>
    <div class="ext-card__desc">pg_lion-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_lion`**](/ext/e/pg_lion) | `0.3.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2715  | [**`pg_lion`**](/ext/e/pg_lion) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2716  | [**`pg_lion_citext`**](/ext/e/pg_lion_citext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2717  | [**`pg_lion_vector`**](/ext/e/pg_lion_vector) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** |  |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_lion_citext`](/ext/e/pg_lion_citext) [`pg_lion_vector`](/ext/e/pg_lion_vector) |
{.ext-table .ext-table--rel}


> Custom WAL requires preload.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `pg_lion` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `pg_lion_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-lion` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_lion_18 pg_lion_18-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lion_18-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_lion_18 pg_lion_18-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lion_18-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_lion_18 pg_lion_18-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lion_18-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_lion_18 pg_lion_18-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lion_18-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_lion_18 pg_lion_18-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lion_18-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_lion_18 pg_lion_18-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lion_18-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-lion postgresql-18-pg-lion_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lion/postgresql-18-pg-lion_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_lion_17 pg_lion_17-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lion_17-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_lion_17 pg_lion_17-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lion_17-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_lion_17 pg_lion_17-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lion_17-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_lion_17 pg_lion_17-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lion_17-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_lion_17 pg_lion_17-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lion_17-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_lion_17 pg_lion_17-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lion_17-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-lion postgresql-17-pg-lion_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lion/postgresql-17-pg-lion_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_lion_16 pg_lion_16-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lion_16-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_lion_16 pg_lion_16-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lion_16-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_lion_16 pg_lion_16-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lion_16-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_lion_16 pg_lion_16-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lion_16-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_lion_16 pg_lion_16-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lion_16-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_lion_16 pg_lion_16-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lion_16-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-lion postgresql-16-pg-lion_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lion/postgresql-16-pg-lion_0.3.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_lion` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_lion         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_lion` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_lion;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_lion -v 18  # PG 18
pig ext install -y pg_lion -v 17  # PG 17
pig ext install -y pg_lion -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_lion_18       # PG 18
dnf install -y pg_lion_17       # PG 17
dnf install -y pg_lion_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-lion   # PG 18
apt install -y postgresql-17-pg-lion   # PG 17
apt install -y postgresql-16-pg-lion   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_lion;
```

## 用法

来源：

- [README](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/README.md)
- [参考手册](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/docs/REFERENCE.md)
- [扩展控制文件](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/pg_lion.control)

`pg_lion` 0.3.0 为 PostgreSQL 16 及以上版本提供 Roaring 位图倒排索引，用于过滤、计数与分组聚合。它支持堆表，查询沿用 PostgreSQL 原有运算符；默认的通用 WAL 模式不需要预加载。

### 核心流程

为过滤与分组使用的列创建 `lion` 索引。经过清理、所有行均可见的页面允许计数避免访问堆；最近修改过的页面可能仍需到堆中检查可见性。

```sql
CREATE EXTENSION pg_lion;
CREATE TABLE lion_events (country text, amount integer);
INSERT INTO lion_events VALUES ('JP', 10), ('JP', 20), ('NZ', 30);
CREATE INDEX lion_country ON lion_events USING lion (country);
CREATE INDEX lion_amount ON lion_events USING lion (amount) WITH (slices = on);
VACUUM ANALYZE lion_events;
SELECT count(*), sum(amount) FROM lion_events WHERE country = 'JP';
SELECT country, count(*) FROM lion_events GROUP BY country;
```

支持标量相等、范围、`IN`、空值判断及组合条件。`lion` 也可索引数组、`jsonb` 和 `tsvector`；`lion_bm25_score` 用于全文匹配排序。针对 JSON 字段的表达式索引可以支持默认 `jsonb` 索引无法处理的分组。

### 选项与诊断

| 对象 | 用途 |
| --- | --- |
| `summaries = auto` | 预先合并位图，加速包含大量不同值的范围查询。 |
| `slices = on` | 保存位切片，支持整数、日期与时间值的过滤聚合；增加写入和存储成本。 |
| `lion_index_count(index, key)` | 通过指定索引统计某个键的行数。 |
| `lion_index_stats(index)` | 查看索引统计信息；初始授权给 `pg_stat_scan_tables`。 |
| `lion_index_verify(index, true)` | 检查结构与堆覆盖情况；属于受限诊断函数。 |
| `lion_index_wal_mode(index)` | 返回 `generic` 或 `rmgr`；属于受限诊断函数。 |

`pg_lion_citext` 添加 `citext` 运算符类。`pg_lion_vector` 添加 `lionvec` 访问方法，依赖 pgvector 0.7 或更新版本。这两个伴随扩展随父扩展一起分发，分别启用。

### WAL 与运行边界

创建这些扩展需要超级用户。可选的 `shared_preload_libraries = 'pg_lion'` 配置加服务器重启会启用自定义 WAL 资源管理器（默认 ID 为 170）。以该模式创建的索引在重建前，写入与 `VACUUM` 均依赖预加载；修改设置前先检查 `lion_index_wal_mode`。

只要旧的自定义 WAL 仍可能被回放，就需要在相关实例上保留预加载，包括备用库和归档恢复。`REINDEX` 不会改写历史 WAL。移除预加载前，应在动态库仍预加载时，将所有 `rmgr` 索引以 `wal_mode = generic` 重建，并核对各 WAL 回放使用方。

不支持唯一索引或 `INCLUDE` 列，且仅支持堆表。唯一性约束与普通有序扫描仍应使用 B-tree。加载动态库会安装规划器钩子，并可能影响其他查询的估算。为写密集型负载添加索引或位切片前应先测量。

1.0 之前的磁盘格式可能变化，应遵循各版本的 `REINDEX` 要求。0.3.0 之前的构建没有扩展升级路径：上游要求重新创建扩展及其索引。0.3.0 只提供安装脚本。
