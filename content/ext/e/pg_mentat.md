---
title: "pg_mentat"
linkTitle: "pg_mentat"
description: "在 PostgreSQL 内提供兼容 Datomic 的数据模型与 Datalog 查询引擎"
weight: 2980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/pg_mentat">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/pg_mentat</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/pg_mentat</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_mentat-1.5.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_mentat-1.5.7.tar.gz</div>
    <div class="ext-card__desc">pg_mentat-1.5.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_mentat`**](/ext/e/pg_mentat) | `1.5.7` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2980  | [**`pg_mentat`**](/ext/e/pg_mentat) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `mentat` |
{.ext-table}

| **相关扩展** | [`pg_fts`](/ext/e/pg_fts) `pg_tre` `pg_infer` [`rum`](/ext/e/rum) [`pg_trgm`](/ext/e/pg_trgm) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`vector`](/ext/e/vector) [`postgis`](/ext/e/postgis) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> The PIGSTY package omits optional mentatd and installs no user-facing binary; listed integrations are soft dependencies. Effective build uses pgrx 0.19.1, migrated from upstream 0.17.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_mentat` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_mentat_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-mentat` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| el8.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| el9.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| el9.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| el10.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| el10.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| d12.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| d12.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| d13.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| d13.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| u22.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| u22.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| u24.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| u24.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| u26.x86_64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
| u26.aarch64 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 | AVAIL PIGSTY 1.5.7 1 |
@ el8.x86_64 18 pg_mentat_18 pg_mentat_18-1.5.7-1PIGSTY.el8.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_18-1.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_mentat_18 pg_mentat_18-1.5.7-1PIGSTY.el8.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_18-1.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_mentat_18 pg_mentat_18-1.5.7-1PIGSTY.el9.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_18-1.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_mentat_18 pg_mentat_18-1.5.7-1PIGSTY.el9.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_18-1.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_mentat_18 pg_mentat_18-1.5.7-1PIGSTY.el10.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_18-1.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_mentat_18 pg_mentat_18-1.5.7-1PIGSTY.el10.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_18-1.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb pigsty 1.5.7 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb pigsty 1.5.7 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb pigsty 1.5.7 2.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb pigsty 1.5.7 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-mentat postgresql-18-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-18-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_mentat_17 pg_mentat_17-1.5.7-1PIGSTY.el8.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_17-1.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_mentat_17 pg_mentat_17-1.5.7-1PIGSTY.el8.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_17-1.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_mentat_17 pg_mentat_17-1.5.7-1PIGSTY.el9.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_17-1.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_mentat_17 pg_mentat_17-1.5.7-1PIGSTY.el9.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_17-1.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_mentat_17 pg_mentat_17-1.5.7-1PIGSTY.el10.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_17-1.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_mentat_17 pg_mentat_17-1.5.7-1PIGSTY.el10.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_17-1.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb pigsty 1.5.7 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb pigsty 1.5.7 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb pigsty 1.5.7 2.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-mentat postgresql-17-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-17-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_mentat_16 pg_mentat_16-1.5.7-1PIGSTY.el8.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_16-1.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_mentat_16 pg_mentat_16-1.5.7-1PIGSTY.el8.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_16-1.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_mentat_16 pg_mentat_16-1.5.7-1PIGSTY.el9.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_16-1.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_mentat_16 pg_mentat_16-1.5.7-1PIGSTY.el9.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_16-1.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_mentat_16 pg_mentat_16-1.5.7-1PIGSTY.el10.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_16-1.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_mentat_16 pg_mentat_16-1.5.7-1PIGSTY.el10.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_16-1.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb pigsty 1.5.7 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb pigsty 1.5.7 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb pigsty 1.5.7 2.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-mentat postgresql-16-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-16-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_mentat_15 pg_mentat_15-1.5.7-1PIGSTY.el8.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_15-1.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_mentat_15 pg_mentat_15-1.5.7-1PIGSTY.el8.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_15-1.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_mentat_15 pg_mentat_15-1.5.7-1PIGSTY.el9.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_15-1.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_mentat_15 pg_mentat_15-1.5.7-1PIGSTY.el9.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_15-1.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_mentat_15 pg_mentat_15-1.5.7-1PIGSTY.el10.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_15-1.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_mentat_15 pg_mentat_15-1.5.7-1PIGSTY.el10.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_15-1.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb pigsty 1.5.7 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb pigsty 1.5.7 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-mentat postgresql-15-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-15-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_mentat_14 pg_mentat_14-1.5.7-1PIGSTY.el8.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_mentat_14-1.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_mentat_14 pg_mentat_14-1.5.7-1PIGSTY.el8.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_mentat_14-1.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_mentat_14 pg_mentat_14-1.5.7-1PIGSTY.el9.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_mentat_14-1.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_mentat_14 pg_mentat_14-1.5.7-1PIGSTY.el9.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_mentat_14-1.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_mentat_14 pg_mentat_14-1.5.7-1PIGSTY.el10.x86_64.rpm pigsty 1.5.7 2.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_mentat_14-1.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_mentat_14 pg_mentat_14-1.5.7-1PIGSTY.el10.aarch64.rpm pigsty 1.5.7 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_mentat_14-1.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb pigsty 1.5.7 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb pigsty 1.5.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb pigsty 1.5.7 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb pigsty 1.5.7 2.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-mentat postgresql-14-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb pigsty 1.5.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-mentat/postgresql-14-pg-mentat_1.5.7-1PIGSTY~resolute_arm64.deb
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

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
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

- [pg_mentat v1.5.7 README](https://codeberg.org/gregburd/pg_mentat/src/tag/v1.5.7/README.md)
- [pg_mentat v1.5.7 控制文件](https://codeberg.org/gregburd/pg_mentat/src/tag/v1.5.7/pg_mentat/pg_mentat.control)
- [pg_mentat v1.5.6 到 v1.5.7 升级 SQL](https://codeberg.org/gregburd/pg_mentat/src/tag/v1.5.7/pg_mentat/sql/pg_mentat--1.5.6--1.5.7.sql)
- [Pigsty 软件包矩阵](https://pgext.cloud/ext/pg_mentat)

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
SELECT mentat.log('default', 1000001, 1000010);
SELECT mentat.diff('default', 1000003, 1000007);

SELECT mentat.mentat_with('[
  {:person/name "Alice" :person/age 31}
]');
```

`mentat.pull` 返回实体形态的 JSON。`mentat.log` 和 `mentat.diff` 提供事务历史，`mentat.mentat_with` 则评估事务但不持久化。查询还可以使用文档所述的数据库参数，以某个事务时点或从某个事务之后开始求值。

永久切除有意与通常的不可变历史机制分开：

```sql
SELECT mentat.mentat_excise('default', 10042, NULL);
```

执行切除前请检查目标实体和备份；该操作会永久移除 datom，适用于隐私擦除等要求。

### 重要对象

- `mentat.t(edn)`：写入模式或数据事务。
- `mentat.q(query, inputs)`：执行 Datalog。
- `mentat.pull(pattern, eid)` 和 `mentat.pull_many(pattern, eids)`：以实体形态读取数据。
- `mentat.entity(eid)` 和 `mentat.schema()`：检查实体或当前模式。
- `mentat.log(...)` 和 `mentat.diff(...)`：检查事务历史。
- `mentat.stats()`、`mentat.storage()` 和 `mentat.cache_stats()`：运行状态检查。
- `mentat.subscribe(...)`：通过 PostgreSQL `LISTEN`/`NOTIFY` 提供响应式查询通知。

该扩展在 `mentat` 模式下的窄表中存储有类型的 datom，包括引用、整数、字符串、布尔、浮点、时刻、关键字、UUID 和字节值。

### 要求与注意事项

- 上游 v1.5.7 支持 PostgreSQL 13-18。当前 Pigsty 软件包面向 PostgreSQL 14-18，并使用 pgrx 0.19.1 重新构建；上游标签源码声明使用 pgrx 0.17。请将打包后的二进制作为兼容性边界。
- 该扩展不可重定位，也不要求 `shared_preload_libraries`。
- 可选的 `mentatd` HTTP/Datomic 线协议守护进程是上游配套程序，不包含在 Pigsty `pg_mentat` 软件包中。仅通过 SQL 使用扩展并不需要它。
- Datalog 编译、递归 pull、全文属性、订阅和历史记录可能呈现截然不同的成本特征。请使用文档所述的 explain 辅助函数检查生成的 SQL，并在代表性数据上进行基准测试。
- 切除操作绕过通常的不可变历史模型。请限制权限并审计其使用。
