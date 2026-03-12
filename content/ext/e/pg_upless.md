---
title: "pg_upless"
linkTitle: "pg_upless"
description: "检测表上的无用UPDATE"
weight: 5180
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rodo/pg_upless">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rodo/pg_upless</div>
    <div class="ext-card__desc">https://github.com/rodo/pg_upless</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_upless-0.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_upless-0.0.3.tar.gz</div>
    <div class="ext-card__desc">pg_upless-0.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_upless`**](/ext/e/pg_upless) | `0.0.3` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5180  | [**`pg_upless`**](/ext/e/pg_upless) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_readonly`](/ext/e/pg_readonly) [`pg_savior`](/ext/e/pg_savior) [`safeupdate`](/ext/e/safeupdate) [`pg_permissions`](/ext/e/pg_permissions) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_drop_events`](/ext/e/pg_drop_events) [`table_log`](/ext/e/table_log) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_upless` | `plpgsql` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_upless_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-upless` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
@ el8.x86_64 18 pg_upless_18 pg_upless_18-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_upless_18-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_upless_18 pg_upless_18-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_upless_18-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_upless_18 pg_upless_18-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_upless_18-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_upless_18 pg_upless_18-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 11.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_upless_18-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_upless_18 pg_upless_18-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_upless_18-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_upless_18 pg_upless_18-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_upless_18-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 4.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-upless postgresql-18-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-18-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_upless_17 pg_upless_17-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_upless_17-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_upless_17 pg_upless_17-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_upless_17-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_upless_17 pg_upless_17-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_upless_17-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_upless_17 pg_upless_17-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 11.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_upless_17-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_upless_17 pg_upless_17-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_upless_17-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_upless_17 pg_upless_17-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_upless_17-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-upless postgresql-17-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-17-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_upless_16 pg_upless_16-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_upless_16-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_upless_16 pg_upless_16-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_upless_16-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_upless_16 pg_upless_16-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_upless_16-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_upless_16 pg_upless_16-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 11.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_upless_16-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_upless_16 pg_upless_16-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_upless_16-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_upless_16 pg_upless_16-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_upless_16-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-upless postgresql-16-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-16-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_upless_15 pg_upless_15-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_upless_15-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_upless_15 pg_upless_15-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_upless_15-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_upless_15 pg_upless_15-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_upless_15-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_upless_15 pg_upless_15-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 11.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_upless_15-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_upless_15 pg_upless_15-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_upless_15-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_upless_15 pg_upless_15-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_upless_15-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-upless postgresql-15-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-15-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_upless_14 pg_upless_14-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_upless_14-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_upless_14 pg_upless_14-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_upless_14-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_upless_14 pg_upless_14-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_upless_14-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_upless_14 pg_upless_14-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 11.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_upless_14-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_upless_14 pg_upless_14-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_upless_14-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_upless_14 pg_upless_14-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 11.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_upless_14-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 5.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-upless postgresql-14-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 4.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-upless/postgresql-14-pg-upless_0.0.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_upless` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_upless         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_upless` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_upless;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_upless -v 18  # PG 18
pig ext install -y pg_upless -v 17  # PG 17
pig ext install -y pg_upless -v 16  # PG 16
pig ext install -y pg_upless -v 15  # PG 15
pig ext install -y pg_upless -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_upless_18       # PG 18
dnf install -y pg_upless_17       # PG 17
dnf install -y pg_upless_16       # PG 16
dnf install -y pg_upless_15       # PG 15
dnf install -y pg_upless_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-upless   # PG 18
apt install -y postgresql-17-pg-upless   # PG 17
apt install -y postgresql-16-pg-upless   # PG 16
apt install -y postgresql-15-pg-upless   # PG 15
apt install -y postgresql-14-pg-upless   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_upless CASCADE;  -- 依赖: plpgsql
```



## 用法

> [pg_upless: 检测无效 UPDATE](https://github.com/rodo/pg_upless)

pg_upless 检测不改变任何实际值的 UPDATE 语句（ORM 中常见）。它通过在监控表上安装触发器并收集统计信息来工作。它作为诊断工具使用，不适合长期启用。

### 开始监控

```sql
-- 监控特定表
SELECT pg_upless_start('public', 'boats');

-- 监控模式中的所有表
SELECT pg_upless_start('public');
```

### 停止监控

```sql
-- 停止监控特定表
SELECT pg_upless_stop('public', 'boats');

-- 停止监控模式中的所有表
SELECT pg_upless_stop('public');
```

### 查看统计信息

该扩展在 `pg_upless` 模式中创建两个表：

- **`pg_upless_stats`** -- 存储每个表的总更新次数与无效更新次数
- **`pg_upless_start_time`** -- 记录监控开始时间（用于速率计算）
