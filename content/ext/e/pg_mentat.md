---
title: "pg_mentat"
linkTitle: "pg_mentat"
description: "在 PostgreSQL 内提供兼容 Datomic 的数据模型与 Datalog 查询引擎"
weight: 2980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/mentat">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/mentat</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/mentat</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_mentat-1.10.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_mentat-1.10.1.tar.gz</div>
    <div class="ext-card__desc">pg_mentat-1.10.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_mentat`**](/ext/e/pg_mentat) | `1.10.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2980  | [**`pg_mentat`**](/ext/e/pg_mentat) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `mentat` |
{.ext-table}

| **相关扩展** | [`pg_fts`](/ext/e/pg_fts) `pg_tre` `pg_infer` [`rum`](/ext/e/rum) [`pg_trgm`](/ext/e/pg_trgm) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`vector`](/ext/e/vector) [`postgis`](/ext/e/postgis) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> No mentatd binary; integrations are optional. pgrx 0.19.2.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_mentat` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_mentat_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-mentat` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 | AVAIL PIGSTY 1.10.1 1 |
@ el8.x86_64 18 pg_mentat_18 pg_mentat_18-1.10.1-1PGSTY.el8.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_18-1.10.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_mentat_18 pg_mentat_18-1.10.1-1PGSTY.el8.aarch64.rpm pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_18-1.10.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_mentat_18 pg_mentat_18-1.10.1-1PGSTY.el9.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_18-1.10.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_mentat_18 pg_mentat_18-1.10.1-1PGSTY.el9.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_18-1.10.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_mentat_18 pg_mentat_18-1.10.1-1PGSTY.el10.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_18-1.10.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_mentat_18 pg_mentat_18-1.10.1-1PGSTY.el10.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_18-1.10.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_mentat_17 pg_mentat_17-1.10.1-1PGSTY.el8.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_17-1.10.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_mentat_17 pg_mentat_17-1.10.1-1PGSTY.el8.aarch64.rpm pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_17-1.10.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_mentat_17 pg_mentat_17-1.10.1-1PGSTY.el9.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_17-1.10.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_mentat_17 pg_mentat_17-1.10.1-1PGSTY.el9.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_17-1.10.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_mentat_17 pg_mentat_17-1.10.1-1PGSTY.el10.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_17-1.10.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_mentat_17 pg_mentat_17-1.10.1-1PGSTY.el10.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_17-1.10.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_mentat_16 pg_mentat_16-1.10.1-1PGSTY.el8.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_16-1.10.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_mentat_16 pg_mentat_16-1.10.1-1PGSTY.el8.aarch64.rpm pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_16-1.10.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_mentat_16 pg_mentat_16-1.10.1-1PGSTY.el9.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_16-1.10.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_mentat_16 pg_mentat_16-1.10.1-1PGSTY.el9.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_16-1.10.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_mentat_16 pg_mentat_16-1.10.1-1PGSTY.el10.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_16-1.10.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_mentat_16 pg_mentat_16-1.10.1-1PGSTY.el10.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_16-1.10.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_mentat_15 pg_mentat_15-1.10.1-1PGSTY.el8.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_15-1.10.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_mentat_15 pg_mentat_15-1.10.1-1PGSTY.el8.aarch64.rpm pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_15-1.10.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_mentat_15 pg_mentat_15-1.10.1-1PGSTY.el9.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_15-1.10.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_mentat_15 pg_mentat_15-1.10.1-1PGSTY.el9.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_15-1.10.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_mentat_15 pg_mentat_15-1.10.1-1PGSTY.el10.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_15-1.10.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_mentat_15 pg_mentat_15-1.10.1-1PGSTY.el10.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_15-1.10.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb pigsty 1.10.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb pigsty 1.10.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_mentat_14 pg_mentat_14-1.10.1-1PGSTY.el8.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_14-1.10.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_mentat_14 pg_mentat_14-1.10.1-1PGSTY.el8.aarch64.rpm pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_14-1.10.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_mentat_14 pg_mentat_14-1.10.1-1PGSTY.el9.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_14-1.10.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_mentat_14 pg_mentat_14-1.10.1-1PGSTY.el9.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_14-1.10.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_mentat_14 pg_mentat_14-1.10.1-1PGSTY.el10.x86_64.rpm pigsty 1.10.1 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_14-1.10.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_mentat_14 pg_mentat_14-1.10.1-1PGSTY.el10.aarch64.rpm pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_14-1.10.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb pigsty 1.10.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb pigsty 1.10.1 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb pigsty 1.10.1 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb pigsty 1.10.1 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb pigsty 1.10.1 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.10.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_mentat` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_mentat         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_mentat` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_mentat;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_mentat -v 18  # PG 18
pig ext install -y pg_mentat -v 17  # PG 17
pig ext install -y pg_mentat -v 16  # PG 16
pig ext install -y pg_mentat -v 15  # PG 15
pig ext install -y pg_mentat -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_mentat_18       # PG 18
dnf install -y pg_mentat_17       # PG 17
dnf install -y pg_mentat_16       # PG 16
dnf install -y pg_mentat_15       # PG 15
dnf install -y pg_mentat_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-mentat   # PG 18
apt install -y postgresql-17-pg-mentat   # PG 17
apt install -y postgresql-16-pg-mentat   # PG 16
apt install -y postgresql-15-pg-mentat   # PG 15
apt install -y postgresql-14-pg-mentat   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_mentat;
```

## 用法

来源：

- [v1.10.1 README](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/README.md)
- [v1.10.1 extension control](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/pg_mentat.control)
- [v1.10.1 changelog](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/CHANGELOG.md)
- [v1.9.1 dump repair](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/sql/pg_mentat--1.9.0--1.9.1.sql)
- [v1.10.1 SQL aliases](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/sql/07_function_aliases.sql)
- [v1.10.1 history functions](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/src/functions/time_travel.rs)
- [v1.10.1 excision function](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/src/functions/excision.rs)
- [v1.10.1 transaction functions](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/src/functions/transact.rs)
- [v1.10.1 subscriptions](https://codeberg.org/gregburd/mentat/src/tag/v1.10.1/crates/pg/pg_mentat/src/functions/subscriptions.rs)

`pg_mentat` 在 PostgreSQL 内实现与 Datomic 兼容的数据模型和 Datalog 查询引擎。它将不可变事实存储为有类型的 datom，并通过 SQL 函数提供模式事务、Datalog 查询、pull 表达式、时间旅行、事务历史和永久切除功能。它适用于需要这种模型的应用；并非关系表或 SQL 的透明替代品。

### 安装并定义模式

```sql
CREATE EXTENSION pg_mentat;

SELECT mentat.t('[
  {:db/ident       :person/name
   :db/valueType   :db.type/string
   :db/cardinality :db.cardinality/one}
  {:db/ident       :person/age
   :db/valueType   :db.type/long
   :db/cardinality :db.cardinality/one}
]');
```

推荐使用的便捷别名位于 `mentat` 模式中。新属性必须先通过模式事务写入，随后事实才能使用它们。

### 写入并查询数据

```sql
SELECT mentat.t('[
  {:person/name "Alice" :person/age 30}
  {:person/name "Bob"   :person/age 25}
]');

SELECT mentat.q('
  [:find ?name ?age
   :where [?e :person/name ?name]
          [?e :person/age ?age]
          [(> ?age 28)]]
');
```

`mentat.t(edn)` 执行 ACID 事务并返回事务报告。`mentat.q(query, inputs)` 将 Datalog 查询编译为 PostgreSQL 执行计划。请使用 EDN 参数和输入绑定，不要把应用字符串插入查询文本。

### Pull、历史记录与假设事务

```sql
SELECT mentat.pull('[*]', 10001);
SELECT public.log('default', 1000001, 1000010);
SELECT public.diff(
  'default', 1000003, 1000007,
  '[:find ?name :where [?e :person/name ?name]]',
  '{}'::jsonb
);

SELECT public.mentat_with('[
  {:person/name "Alice" :person/age 31}
]');
```

`mentat.pull` 返回实体形态的 JSON。`public.log` 返回事务区间内的历史，`public.diff` 比较指定 Datalog 查询在两个事务时点的结果，五个参数都必须提供。`public.mentat_with` 评估事务但不持久化。这些辅助函数在 v1.10.1 中导出到 public 模式，没有 mentat 模式别名。应使用自己存储中的实体和事务 ID。查询还可以使用文档所述的数据库参数，以某个事务时点或从某个事务之后开始求值。

永久切除有意与通常的不可变历史机制分开：

```sql
SELECT public.mentat_excise(ARRAY[10042]::bigint[], 'default', NULL);
```

执行切除前请检查目标实体和备份；该操作会永久移除 datom，适用于隐私擦除等要求。第一个参数是实体 ID 数组。实体所在分区必须允许切除；模式实体受保护，同批切除范围外的实体引用可能阻止操作。

### 重要对象

- `mentat.t(edn)`：写入模式或数据事务。
- `mentat.q(query, inputs)`：执行 Datalog。
- `mentat.pull(pattern, eid)` 和 `mentat.pull_many(pattern, eids)`：以实体形态读取数据。
- `mentat.entity(eid)` 和 `mentat.schema()`：检查实体或当前模式。
- `public.log(...)` 和 `public.diff(...)`：检查事务历史和查询结果变化。
- `mentat.stats()`、`mentat.storage()` 和 `mentat.cache_stats()`：运行状态检查。
- `public.subscribe(...)`：通过 PostgreSQL `LISTEN`/`NOTIFY` 提供响应式查询通知。

该扩展在 `mentat` 模式下的窄表中存储有类型的 datom，包括引用、整数、字符串、布尔、浮点、时刻、关键字、UUID 和字节值。

### 较早版本的安全修复

1.6.2 修复深层 EDN 嵌套导致栈耗尽、普通用户设置受限参数导致查询失败，以及 UTC 解码错误。可选的 `script` 构建特性提供类 Clojure 求值，默认关闭。上游说明所有更早版本（包括 1.5.7）均受 EDN 嵌套缺陷影响：后端崩溃可能断开全部客户端并触发崩溃恢复。升级已有部署时，应检查已安装的扩展版本。

### 要求与注意事项

- 上游 v1.10.1 支持 PostgreSQL 13-18。当前 Pigsty 软件包面向 PostgreSQL 14-18，并使用 pgrx 0.19.2 重新构建；上游标签源码声明使用 pgrx 0.17。请将打包后的二进制作为兼容性边界。
- 该扩展不可重定位，也不要求 `shared_preload_libraries`。
- 可选的 `mentatd` HTTP/Datomic 线协议守护进程是上游配套程序，不包含在 Pigsty `pg_mentat` 软件包中。仅通过 SQL 使用扩展并不需要它。
- Datalog 编译、递归 pull、全文属性、订阅和历史记录可能呈现截然不同的成本特征。请使用文档所述的 explain 辅助函数检查生成的 SQL，并在代表性数据上进行基准测试。
- 切除操作绕过通常的不可变历史模型。请限制权限并审计其使用。

### 1.10.1 API 与索引

项目已迁移到 gregburd/mentat。新的核心函数为 `edn_t`、`edn_q`、`edn_pull` 和可选脚本接口 `edn_eval`；`mentat.t`、`mentat.q` 便利别名继续可用，旧的 `mentat_*` 名称已弃用。`edn_q_rows` 每行返回一个 JSONB 数组，但一次调用仍会在内存中生成完整结果。

`mentat.auto_index` 可设为 `off`、`schema`（默认）或 `adaptive`。当前值表会建立 AVET 索引；自适应模式管理历史属性的部分索引，记录在 `mentat.managed_indexes` 中。`mentat_tune_indexes` 默认只报告计划，显式关闭 dry-run 后才应用；仅回收自己管理的索引，默认空闲窗口为 7 天。

聚合改为 Datalog 集合语义：对 1、1、1、3 求和得到 4，而不是 6；需要保留实体多重性时加入 `:with ?e`。升级前应复核依赖旧结果的查询。

### 升级与逻辑备份

1.9.1 修复了一项重要备份缺陷：更早版本未注册扩展成员表的数据，`pg_dump` 的逻辑备份会漏掉 mentat 数据，恢复后存储为空。升级后应立即重新生成并验证逻辑备份；旧备份不会自动得到修复。物理备份不受该缺陷影响。

安装新版文件后，通过升级链更新到 1.10.1。升级会建立索引并可能阻塞写入，应安排维护窗口：

```sql
ALTER EXTENSION pg_mentat UPDATE TO '1.10.1';
```

已部署数据库仍需执行 SQL 扩展升级并验证新的逻辑备份。
