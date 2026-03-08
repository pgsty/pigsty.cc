---
title: "pg_bigm"
linkTitle: "pg_bigm"
description: "基于二字组的多语言全文检索扩展"
weight: 2120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgbigm/pg_bigm">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgbigm/pg_bigm</div>
    <div class="ext-card__desc">https://github.com/pgbigm/pg_bigm</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_bigm-1.2-20250903.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_bigm-1.2-20250903.tar.gz</div>
    <div class="ext-card__desc">pg_bigm-1.2-20250903.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_bigm`**](/ext/e/pg_bigm) | `1.2` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2120  | [**`pg_bigm`**](/ext/e/pg_bigm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`zhparser`](/ext/e/zhparser) [`pg_trgm`](/ext/e/pg_trgm) [`pgroonga_database`](/ext/e/pgroonga_database) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`rum`](/ext/e/rum) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_bigm` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_bigm_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-bigm` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.2 2 | AVAIL PGDG 1.2 3 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 |
| el8.aarch64 | AVAIL PGDG 1.2 2 | AVAIL PGDG 1.2 3 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 |
| el9.x86_64 | AVAIL PGDG 1.2 2 | AVAIL PGDG 1.2 3 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 |
| el9.aarch64 | AVAIL PGDG 1.2 2 | AVAIL PGDG 1.2 3 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 |
| el10.x86_64 | AVAIL PGDG 1.2 2 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 |
| el10.aarch64 | AVAIL PGDG 1.2 2 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 | AVAIL PGDG 1.2 4 |
| d12.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
@ el8.x86_64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_bigm_18-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bigm_18-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_bigm_18-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bigm_18-1.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 21.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_bigm_18-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bigm_18-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_bigm_18-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bigm_18-1.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_bigm_18-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_18-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_bigm_18-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_18-1.2-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 28.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 28.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 28.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 28.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 29.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 29.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 29.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 29.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_bigm_17-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel8.x86_64.rpm pgdg 1.2 18.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_bigm_17-1.2_20240606-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bigm_17-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_bigm_17-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel8.aarch64.rpm pgdg 1.2 18.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_bigm_17-1.2_20240606-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bigm_17-1.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_bigm_17-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel9.x86_64.rpm pgdg 1.2 18.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_bigm_17-1.2_20240606-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bigm_17-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_bigm_17-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel9.aarch64.rpm pgdg 1.2 18.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_bigm_17-1.2_20240606-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bigm_17-1.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_bigm_17-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_bigm_17-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_17-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_17-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_bigm_17-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 20.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_bigm_17-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_17-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_17-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_bigm_16-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_bigm_16-1.2_20240606-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bigm_16-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_bigm_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_bigm_16-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_bigm_16-1.2_20240606-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bigm_16-1.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_bigm_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_bigm_16-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_bigm_16-1.2_20240606-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bigm_16-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_bigm_16-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_bigm_16-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_bigm_16-1.2_20240606-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bigm_16-1.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_bigm_16-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_bigm_16-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_bigm_16-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_16-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_16-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_bigm_16-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 21.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_bigm_16-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_16-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_16-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_bigm_15-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_bigm_15-1.2_20240606-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bigm_15-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_bigm_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_bigm_15-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_bigm_15-1.2_20240606-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bigm_15-1.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_bigm_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_bigm_15-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_bigm_15-1.2_20240606-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bigm_15-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_bigm_15-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_bigm_15-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_bigm_15-1.2_20240606-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bigm_15-1.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_bigm_15-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_bigm_15-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_bigm_15-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_15-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_15-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_bigm_15-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 21.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_bigm_15-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_15-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_15-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_bigm_14-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_bigm_14-1.2_20240606-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bigm_14-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_bigm_14-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_bigm_14-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_bigm_14-1.2_20240606-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bigm_14-1.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_bigm_14-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_bigm_14-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_bigm_14-1.2_20240606-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bigm_14-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_bigm_14-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_bigm_14-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_bigm_14-1.2_20240606-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bigm_14-1.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_bigm_14-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_bigm_14-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_bigm_14-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_14-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bigm_14-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_bigm_14-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 21.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_bigm_14-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_14-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bigm_14-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_bigm` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_bigm         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_bigm` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_bigm;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_bigm -v 18  # PG 18
pig ext install -y pg_bigm -v 17  # PG 17
pig ext install -y pg_bigm -v 16  # PG 16
pig ext install -y pg_bigm -v 15  # PG 15
pig ext install -y pg_bigm -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_bigm_18       # PG 18
dnf install -y pg_bigm_17       # PG 17
dnf install -y pg_bigm_16       # PG 16
dnf install -y pg_bigm_15       # PG 15
dnf install -y pg_bigm_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-bigm   # PG 18
apt install -y postgresql-17-pg-bigm   # PG 17
apt install -y postgresql-16-pg-bigm   # PG 16
apt install -y postgresql-15-pg-bigm   # PG 15
apt install -y postgresql-14-pg-bigm   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_bigm;
```
