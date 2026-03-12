---
title: "pg_xenophile"
linkTitle: "pg_xenophile"
description: "PostgreSQL i8n与l10n工具包"
weight: 3610
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_xenophile">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_xenophile</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_xenophile</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_xenophile-0.8.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_xenophile-0.8.3.tar.gz</div>
    <div class="ext-card__desc">pg_xenophile-0.8.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_xenophile`**](/ext/e/pg_xenophile) | `0.8.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3610  | [**`pg_xenophile`**](/ext/e/pg_xenophile) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `xeno` |
| 3611  | [**`l10n_table_dependent_extension`**](/ext/e/l10n_table_dependent_extension) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`country`](/ext/e/country) [`currency`](/ext/e/currency) [`icu_ext`](/ext/e/icu_ext) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_xenophile` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_xenophile_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-xenophile` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
@ el8.x86_64 18 pg_xenophile_18 pg_xenophile_18-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_xenophile_18-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_xenophile_18 pg_xenophile_18-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_xenophile_18-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_xenophile_18 pg_xenophile_18-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_xenophile_18-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_xenophile_18 pg_xenophile_18-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 47.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_xenophile_18-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_xenophile_18 pg_xenophile_18-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_xenophile_18-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_xenophile_18 pg_xenophile_18-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_xenophile_18-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb pigsty 0.8.3 45.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb pigsty 0.8.3 48.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-xenophile postgresql-18-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-18-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_xenophile_17 pg_xenophile_17-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_xenophile_17-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_xenophile_17 pg_xenophile_17-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_xenophile_17-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_xenophile_17 pg_xenophile_17-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_xenophile_17-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_xenophile_17 pg_xenophile_17-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 47.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_xenophile_17-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_xenophile_17 pg_xenophile_17-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_xenophile_17-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_xenophile_17 pg_xenophile_17-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_xenophile_17-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-xenophile postgresql-17-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-17-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_xenophile_16 pg_xenophile_16-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_xenophile_16-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_xenophile_16 pg_xenophile_16-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_xenophile_16-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_xenophile_16 pg_xenophile_16-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_xenophile_16-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_xenophile_16 pg_xenophile_16-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 47.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_xenophile_16-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_xenophile_16 pg_xenophile_16-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_xenophile_16-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_xenophile_16 pg_xenophile_16-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_xenophile_16-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb pigsty 0.8.3 48.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-xenophile postgresql-16-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-16-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_xenophile_15 pg_xenophile_15-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_xenophile_15-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_xenophile_15 pg_xenophile_15-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_xenophile_15-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_xenophile_15 pg_xenophile_15-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_xenophile_15-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_xenophile_15 pg_xenophile_15-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_xenophile_15-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_xenophile_15 pg_xenophile_15-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_xenophile_15-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_xenophile_15 pg_xenophile_15-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_xenophile_15-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-xenophile postgresql-15-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-15-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_xenophile_14 pg_xenophile_14-0.8.3-1PIGSTY.el8.x86_64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_xenophile_14-0.8.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_xenophile_14 pg_xenophile_14-0.8.3-1PIGSTY.el8.aarch64.rpm pigsty 0.8.3 49.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_xenophile_14-0.8.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_xenophile_14 pg_xenophile_14-0.8.3-1PIGSTY.el9.x86_64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_xenophile_14-0.8.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_xenophile_14 pg_xenophile_14-0.8.3-1PIGSTY.el9.aarch64.rpm pigsty 0.8.3 47.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_xenophile_14-0.8.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_xenophile_14 pg_xenophile_14-0.8.3-1PIGSTY.el10.x86_64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_xenophile_14-0.8.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_xenophile_14 pg_xenophile_14-0.8.3-1PIGSTY.el10.aarch64.rpm pigsty 0.8.3 47.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_xenophile_14-0.8.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb pigsty 0.8.3 46.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb pigsty 0.8.3 48.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-xenophile postgresql-14-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb pigsty 0.8.3 48.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-xenophile/postgresql-14-pg-xenophile_0.8.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_xenophile` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_xenophile         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_xenophile` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_xenophile;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_xenophile -v 18  # PG 18
pig ext install -y pg_xenophile -v 17  # PG 17
pig ext install -y pg_xenophile -v 16  # PG 16
pig ext install -y pg_xenophile -v 15  # PG 15
pig ext install -y pg_xenophile -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_xenophile_18       # PG 18
dnf install -y pg_xenophile_17       # PG 17
dnf install -y pg_xenophile_16       # PG 16
dnf install -y pg_xenophile_15       # PG 15
dnf install -y pg_xenophile_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-xenophile   # PG 18
apt install -y postgresql-17-pg-xenophile   # PG 17
apt install -y postgresql-16-pg-xenophile   # PG 16
apt install -y postgresql-15-pg-xenophile   # PG 15
apt install -y postgresql-14-pg-xenophile   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_xenophile;
```



## 用法

> [pg_xenophile: 国际化 (i18n) 与本地化 (l10n) 工具集](https://github.com/bigsmoke/pg_xenophile)

`pg_xenophile` 扩展提供 i18n/l10n 基础设施，包括国家、语言和货币的参考数据，以及自动化的本地化表管理。

```sql
CREATE EXTENSION pg_xenophile CASCADE;
```

所有对象位于 `xeno` 模式中（不可重定位）。

### 参考表

- **`xeno.country`**：ISO 3166-1 代码，包含国际电话区号和货币信息
- **`xeno.lang`**：ISO 639-1 语言代码
- **`xeno.currency`**：ISO 4217 货币代码及符号
- **`xeno.country_subdivision`**：ISO 3166-2 行政区划代码
- **`xeno.eu_country`**：欧盟成员国追踪
- **`xeno.country_postal_code_pattern`**：邮政编码验证规则

### 本地化表

该扩展自动管理翻译表。向 `xeno.l10n_table` 插入记录即可注册一个可翻译的基表：

```sql
INSERT INTO xeno.l10n_table (base_table_schema, base_table_name)
VALUES ('public', 'products');
```

这会自动创建配套的 `products_l10n` 表和特定语言的视图。

### 便捷视图

- `xeno.country_l10n_en`：英文国家名称
- `xeno.lang_l10n_en`：英文语言名称
- `xeno.country_subdivision_l10n_en`：英文行政区划名称

### 配置

```sql
SET pg_xenophile.base_lang_code = 'en';
SET pg_xenophile.user_lang_code = 'en';
SET pg_xenophile.target_lang_codes = '{nl,fr,de}';
```
