---
title: "pg_fsql"
linkTitle: "pg_fsql"
description: "支持 JSONB 驱动执行的递归 SQL 模板引擎"
weight: 4110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/yurc/pg_fsql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">yurc/pg_fsql</div>
    <div class="ext-card__desc">https://github.com/yurc/pg_fsql</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_fsql-1.1.0.zip">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_fsql-1.1.0.zip</div>
    <div class="ext-card__desc">pg_fsql-1.1.0.zip</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_fsql`**](/ext/e/pg_fsql) | `1.1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4110  | [**`pg_fsql`**](/ext/e/pg_fsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsql` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`plpgsql`](/ext/e/plpgsql) [`pg_readme`](/ext/e/pg_readme) [`schedoc`](/ext/e/schedoc) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> shared_preload_libraries is optional and only needed for session-start GUC availability.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_fsql` | `plpgsql` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_fsql_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-fsql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el8.x86_64 18 pg_fsql_18 pg_fsql_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fsql_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_fsql_18 pg_fsql_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fsql_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_fsql_18 pg_fsql_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fsql_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_fsql_18 pg_fsql_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fsql_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_fsql_18 pg_fsql_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fsql_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_fsql_18 pg_fsql_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fsql_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 25.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-fsql postgresql-18-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-18-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_fsql_17 pg_fsql_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fsql_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_fsql_17 pg_fsql_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fsql_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_fsql_17 pg_fsql_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fsql_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_fsql_17 pg_fsql_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fsql_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_fsql_17 pg_fsql_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fsql_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_fsql_17 pg_fsql_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fsql_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 26.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fsql postgresql-17-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 25.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-17-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_fsql_16 pg_fsql_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fsql_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_fsql_16 pg_fsql_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fsql_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_fsql_16 pg_fsql_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fsql_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_fsql_16 pg_fsql_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fsql_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_fsql_16 pg_fsql_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fsql_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_fsql_16 pg_fsql_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fsql_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 26.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-fsql postgresql-16-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 25.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-16-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_fsql_15 pg_fsql_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fsql_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_fsql_15 pg_fsql_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fsql_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_fsql_15 pg_fsql_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fsql_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_fsql_15 pg_fsql_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fsql_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_fsql_15 pg_fsql_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fsql_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_fsql_15 pg_fsql_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fsql_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 25.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 26.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-fsql postgresql-15-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-15-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_fsql_14 pg_fsql_14-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fsql_14-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_fsql_14 pg_fsql_14-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fsql_14-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_fsql_14 pg_fsql_14-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fsql_14-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_fsql_14 pg_fsql_14-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fsql_14-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_fsql_14 pg_fsql_14-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fsql_14-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_fsql_14 pg_fsql_14-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fsql_14-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 24.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 26.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-fsql postgresql-14-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 25.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fsql/postgresql-14-pg-fsql_1.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_fsql` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_fsql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_fsql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_fsql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_fsql -v 18  # PG 18
pig ext install -y pg_fsql -v 17  # PG 17
pig ext install -y pg_fsql -v 16  # PG 16
pig ext install -y pg_fsql -v 15  # PG 15
pig ext install -y pg_fsql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_fsql_18       # PG 18
dnf install -y pg_fsql_17       # PG 17
dnf install -y pg_fsql_16       # PG 16
dnf install -y pg_fsql_15       # PG 15
dnf install -y pg_fsql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-fsql   # PG 18
apt install -y postgresql-17-pg-fsql   # PG 17
apt install -y postgresql-16-pg-fsql   # PG 16
apt install -y postgresql-15-pg-fsql   # PG 15
apt install -y postgresql-14-pg-fsql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_fsql CASCADE;  -- 依赖: plpgsql
```


## 用法

> 语法：
>
> ```sql
> CREATE EXTENSION pg_fsql;
> INSERT INTO fsql.templates (path, cmd, body)
> VALUES ('user_count', 'exec',
>         'SELECT jsonb_build_object(''total'', count(*)) FROM users WHERE status = {d[status]!r}');
> SELECT fsql.run('user_count', '{"status":"active"}');
> ```
>
> 来源：[README](https://github.com/yurc/pg_fsql)

`pg_fsql` 是 PostgreSQL 的递归 SQL 模板引擎。它将 C 级占位符渲染、PL/pgSQL 模板执行、层级化模板组合以及可选的 SPI 计划缓存结合在一起。上游强调它不需要超级用户权限。

## 核心对象

扩展会安装两个主要目录表：

```sql
fsql.templates (
    path varchar(500) primary key,
    cmd varchar(50),
    body text,
    defaults text,
    cached boolean default false
)

fsql.params (
    key_param varchar(255) primary key,
    type_param varchar(255) not null
)
```

`path` 采用点号分隔，用于定义模板层级。

## 模板命令

README 记录了六种命令类型：

- `exec`：执行 SQL 并返回 `jsonb`
- `ref`：重定向到另一个模板
- `if`：选择子分支
- `exec_tpl`：执行 SQL 后将结果重新渲染为模板
- `map`：将子模板收集为 JSON 对象
- `NULL`：插入到父模板中的文本片段

## 占位符

渲染器支持以下占位符：

- `{d[key]}`
- `{d[key]!r}`，对应 `quote_literal`
- `{d[key]!j}`，对应 JSONB 字面量
- `{d[key]!i}`，对应 `quote_identifier`

特殊键 `_self` 会注入完整的输入 JSON 对象。

## 公共 API

上游公开函数包括：

- `fsql.run(path, data, debug)`：执行模板树
- `fsql.render(path, data)`：预览渲染后的 SQL
- `fsql.tree(path)`：查看层级结构
- `fsql.explain(path, data)`：跟踪展开过程
- `fsql.validate()`：检查模板
- `fsql.depends_on(path)`：查看依赖关系
- `fsql.clear_cache()`：释放缓存的 SPI 计划

## 示例

```sql
INSERT INTO fsql.templates (path, cmd, body) VALUES
    ('report', 'exec',
     'SELECT jsonb_build_object(''data'', array_agg(row_to_json(t)))
      FROM (SELECT {d[cols]} FROM {d[src]} {d[where]}) t'),
    ('report.cols',  NULL, 'id, name, email'),
    ('report.src',   NULL, 'customers'),
    ('report.where', NULL, 'WHERE city = {d[city]!r}');

SELECT fsql.run('report', '{"city":"Moscow"}');
SELECT fsql.render('report', '{"city":"Moscow"}');
```

## 需求

README 列出的要求包括 PostgreSQL 14+、`plpgsql`，以及 `gcc`、`make` 和 PostgreSQL server development headers 等标准构建依赖。
