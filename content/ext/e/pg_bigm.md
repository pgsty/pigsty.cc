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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_bigm-1.2-20250903.tar.gz">
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
| 2120  | [**`pg_bigm`**](/ext/e/pg_bigm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
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
@ el8.x86_64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_bigm_18-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bigm_18-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_bigm_18-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bigm_18-1.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_bigm_18-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bigm_18-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_bigm_18-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bigm_18-1.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_bigm_18-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_18-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_bigm_18 pg_bigm_18-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_bigm_18-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_bigm_18 pg_bigm_18-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_18-1.2-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 28.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 28.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 28.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 29.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-bigm postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 29.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-18-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_bigm_17-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel8.x86_64.rpm pgdg 1.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_bigm_17-1.2_20240606-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bigm_17-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_bigm_17-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel8.aarch64.rpm pgdg 1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_bigm_17-1.2_20240606-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bigm_17-1.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_bigm_17-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel9.x86_64.rpm pgdg 1.2 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_bigm_17-1.2_20240606-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bigm_17-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_bigm_17-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-2PGDG.rhel9.aarch64.rpm pgdg 1.2 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_bigm_17-1.2_20240606-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bigm_17-1.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_bigm_17-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_bigm_17-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_17-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_bigm_17 pg_bigm_17-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_17-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_bigm_17-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_bigm_17-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_17-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_bigm_17 pg_bigm_17-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_17-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-bigm postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-17-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_bigm_16-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_bigm_16-1.2_20240606-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bigm_16-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_bigm_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_bigm_16-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_bigm_16-1.2_20240606-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bigm_16-1.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_bigm_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_bigm_16-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_bigm_16-1.2_20240606-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bigm_16-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_bigm_16-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_bigm_16-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_bigm_16-1.2_20240606-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bigm_16-1.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_bigm_16-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_bigm_16-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_bigm_16-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_16-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_bigm_16 pg_bigm_16-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_16-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_bigm_16-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_bigm_16-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_16-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_bigm_16 pg_bigm_16-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_16-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-bigm postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-16-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_bigm_15-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_bigm_15-1.2_20240606-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bigm_15-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_bigm_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_bigm_15-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_bigm_15-1.2_20240606-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bigm_15-1.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_bigm_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_bigm_15-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_bigm_15-1.2_20240606-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bigm_15-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_bigm_15-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_bigm_15-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_bigm_15-1.2_20240606-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bigm_15-1.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_bigm_15-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_bigm_15-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_bigm_15-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_15-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_bigm_15 pg_bigm_15-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_15-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_bigm_15-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_bigm_15-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_15-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_bigm_15 pg_bigm_15-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_15-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-bigm postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-15-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel8.x86_64.rpm pgdg 1.2 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_bigm_14-1.2_20250903-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_bigm_14-1.2_20240606-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el8.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bigm_14-1.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 18.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_bigm_14-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel8.aarch64.rpm pgdg 1.2 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_bigm_14-1.2_20250903-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_bigm_14-1.2_20240606-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el8.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bigm_14-1.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_bigm_14-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel9.x86_64.rpm pgdg 1.2 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_bigm_14-1.2_20250903-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_bigm_14-1.2_20240606-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el9.x86_64.rpm pigsty 1.2 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bigm_14-1.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_bigm_14-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel9.aarch64.rpm pgdg 1.2 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_bigm_14-1.2_20250903-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_bigm_14-1.2_20240606-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el9.aarch64.rpm pigsty 1.2 19.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bigm_14-1.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_bigm_14-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel10.x86_64.rpm pgdg 1.2 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_bigm_14-1.2_20250903-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-3PGDG.rhel10.x86_64.rpm pgdg 1.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_bigm_14-1.2_20240606-3PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el10.x86_64.rpm pigsty 1.2 20.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_14-1.2-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_bigm_14 pg_bigm_14-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bigm_14-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20250903-1PGDG.rhel10.aarch64.rpm pgdg 1.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_bigm_14-1.2_20250903-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2_20240606-3PGDG.rhel10.aarch64.rpm pgdg 1.2 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_bigm_14-1.2_20240606-3PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-2PIGSTY.el10.aarch64.rpm pigsty 1.2 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_14-1.2-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_bigm_14 pg_bigm_14-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bigm_14-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb pigsty 1.2 27.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb pigsty 1.2 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb pigsty 1.2 27.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb pigsty 1.2 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb pigsty 1.2 32.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb pigsty 1.2 31.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb pigsty 1.2 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-bigm postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb pigsty 1.2 28.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bigm/postgresql-14-pg-bigm_1.2-20250903PIGSTY~noble_arm64.deb
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


**预加载配置**：

```bash
shared_preload_libraries = 'pg_bigm';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_bigm;
```



## 用法

> [pg_bigm 文档](https://pgbigm.osdn.jp/pg_bigm_en-1-2.html) | [GitHub: pgbigm/pg_bigm](https://github.com/pgbigm/pg_bigm)

`pg_bigm` 模块为 PostgreSQL 提供全文搜索能力。该模块允许用户创建 **2-gram**（bigram）索引以加速全文搜索。

## 功能特性

- **Bigram 索引**：为文本列创建 2-gram（bigram）GIN 索引
- **更快的 LIKE 搜索**：加速 `LIKE` 查询，包括前缀、后缀和子串搜索
- **全语言支持**：无需额外配置即可支持所有语言，包括中日韩（CJK）
- **简单 API**：提供相似度搜索函数和运算符

## 函数与运算符

### 函数

| 函数 | 返回类型 | 说明 |
|------|----------|------|
| `likequery(text)` | `text` | 根据关键词生成全文搜索查询 |
| `show_bigm(text)` | `text[]` | 显示给定字符串中的所有 2-gram |
| `pg_gin_pending_stats(regclass)` | `record` | 返回 GIN 索引待处理列表中的页面数和元组数 |

### 运算符

| 运算符 | 说明 |
|--------|------|
| `text =% text` | 当左右操作数的相似度大于等于 `pg_bigm.similarity_limit` 时返回 true |

## GUC 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `pg_bigm.last_update` | `text` | - | 显示模块的最后更新日期（只读） |
| `pg_bigm.enable_recheck` | `bool` | `on` | 控制索引扫描时是否执行复查 |
| `pg_bigm.gin_key_limit` | `int` | `0` | 限制全文搜索使用的最大 bigram 数量。0 表示无限制 |
| `pg_bigm.similarity_limit` | `real` | `0.3` | 设置 `=%` 运算符的最小相似度阈值 |

## 示例

### 基本全文搜索

```sql
-- 创建扩展
CREATE EXTENSION pg_bigm;

-- 创建含文本数据的表
CREATE TABLE documents (id serial PRIMARY KEY, content text);
INSERT INTO documents (content) VALUES
  ('PostgreSQL is a powerful database'),
  ('Full text search with bigram indexing'),
  ('Japanese text: 日本語テキスト検索');

-- 创建 bigram 索引
CREATE INDEX docs_bigm_idx ON documents USING gin (content gin_bigm_ops);

-- 使用 LIKE 搜索
SELECT * FROM documents WHERE content LIKE '%search%';

-- 使用 likequery 函数搜索
SELECT * FROM documents WHERE content LIKE likequery('database');
```

### 相似度搜索

```sql
-- 显示字符串的 bigram
SELECT show_bigm('PostgreSQL');

-- 相似度搜索
SET pg_bigm.similarity_limit = 0.2;
SELECT * FROM documents WHERE content =% 'database search';
```

### 与 pg_trgm 的比较

pg_bigm 相比内置的 `pg_trgm` 有以下优势：

| 特性 | pg_bigm | pg_trgm |
|------|---------|---------|
| N-gram 类型 | 2-gram（bigram） | 3-gram（trigram） |
| 最小搜索字符串 | 1 个字符 | 3 个字符 |
| 非字母语言 | 完全支持 | 有限支持 |
| LIKE 搜索类型 | 前缀、后缀和子串 | 前缀、后缀和子串 |

详细文档包括高级用法和性能调优，请参见 [pg_bigm 官方文档](https://pgbigm.osdn.jp/pg_bigm_en-1-2.html)。
