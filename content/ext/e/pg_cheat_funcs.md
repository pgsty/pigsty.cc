---
title: "pg_cheat_funcs"
linkTitle: "pg_cheat_funcs"
description: "一些超级实用的作弊函数"
weight: 5220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/MasaoFujii/pg_cheat_funcs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">MasaoFujii/pg_cheat_funcs</div>
    <div class="ext-card__desc">https://github.com/MasaoFujii/pg_cheat_funcs</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_cheat_funcs-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_cheat_funcs-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_cheat_funcs-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_cheat_funcs`**](/ext/e/pg_cheat_funcs) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5220  | [**`pg_cheat_funcs`**](/ext/e/pg_cheat_funcs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_crash`](/ext/e/pg_crash) [`pg_snakeoil`](/ext/e/pg_snakeoil) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pg_savior`](/ext/e/pg_savior) [`pg_surgery`](/ext/e/pg_surgery) [`adminpack`](/ext/e/adminpack) [`pageinspect`](/ext/e/pageinspect) [`pg_repack`](/ext/e/pg_repack) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_cheat_funcs` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_cheat_funcs_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-cheat-funcs` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pg_cheat_funcs_18 pg_cheat_funcs_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 48.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cheat_funcs_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_cheat_funcs_18 pg_cheat_funcs_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 48.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cheat_funcs_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_cheat_funcs_18 pg_cheat_funcs_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 53.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cheat_funcs_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_cheat_funcs_18 pg_cheat_funcs_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 53.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cheat_funcs_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_cheat_funcs_18 pg_cheat_funcs_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 53.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cheat_funcs_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_cheat_funcs_18 pg_cheat_funcs_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 53.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cheat_funcs_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 93.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 92.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 93.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 92.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 118.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 118.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 111.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-cheat-funcs postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 110.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-18-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_cheat_funcs_17 pg_cheat_funcs_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 48.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cheat_funcs_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_cheat_funcs_17 pg_cheat_funcs_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 48.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cheat_funcs_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_cheat_funcs_17 pg_cheat_funcs_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 53.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cheat_funcs_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_cheat_funcs_17 pg_cheat_funcs_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 53.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cheat_funcs_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_cheat_funcs_17 pg_cheat_funcs_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 53.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cheat_funcs_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_cheat_funcs_17 pg_cheat_funcs_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 53.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cheat_funcs_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 93.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 93.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 93.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 93.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 124.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 123.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 111.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-cheat-funcs postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 110.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-17-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_cheat_funcs_16 pg_cheat_funcs_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 48.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cheat_funcs_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_cheat_funcs_16 pg_cheat_funcs_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 48.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cheat_funcs_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_cheat_funcs_16 pg_cheat_funcs_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 53.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cheat_funcs_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_cheat_funcs_16 pg_cheat_funcs_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 53.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cheat_funcs_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_cheat_funcs_16 pg_cheat_funcs_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 53.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cheat_funcs_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_cheat_funcs_16 pg_cheat_funcs_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 53.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cheat_funcs_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 93.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 93.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 93.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 93.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 123.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 123.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 111.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-cheat-funcs postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 110.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-16-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_cheat_funcs_15 pg_cheat_funcs_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 49.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cheat_funcs_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_cheat_funcs_15 pg_cheat_funcs_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 48.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cheat_funcs_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_cheat_funcs_15 pg_cheat_funcs_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 53.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cheat_funcs_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_cheat_funcs_15 pg_cheat_funcs_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 53.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cheat_funcs_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_cheat_funcs_15 pg_cheat_funcs_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 53.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cheat_funcs_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_cheat_funcs_15 pg_cheat_funcs_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 53.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cheat_funcs_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 94.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 93.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 94.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 93.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 124.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 124.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 112.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-cheat-funcs postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 111.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-15-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_cheat_funcs_14 pg_cheat_funcs_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 48.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cheat_funcs_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_cheat_funcs_14 pg_cheat_funcs_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 48.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cheat_funcs_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_cheat_funcs_14 pg_cheat_funcs_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 53.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cheat_funcs_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_cheat_funcs_14 pg_cheat_funcs_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 53.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cheat_funcs_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_cheat_funcs_14 pg_cheat_funcs_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 53.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cheat_funcs_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_cheat_funcs_14 pg_cheat_funcs_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 53.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cheat_funcs_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 93.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 92.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 93.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 92.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 124.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 123.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 111.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-cheat-funcs postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 110.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cheat-funcs/postgresql-14-pg-cheat-funcs_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_cheat_funcs` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_cheat_funcs         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_cheat_funcs` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_cheat_funcs;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_cheat_funcs -v 18  # PG 18
pig ext install -y pg_cheat_funcs -v 17  # PG 17
pig ext install -y pg_cheat_funcs -v 16  # PG 16
pig ext install -y pg_cheat_funcs -v 15  # PG 15
pig ext install -y pg_cheat_funcs -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_cheat_funcs_18       # PG 18
dnf install -y pg_cheat_funcs_17       # PG 17
dnf install -y pg_cheat_funcs_16       # PG 16
dnf install -y pg_cheat_funcs_15       # PG 15
dnf install -y pg_cheat_funcs_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-cheat-funcs   # PG 18
apt install -y postgresql-17-pg-cheat-funcs   # PG 17
apt install -y postgresql-16-pg-cheat-funcs   # PG 16
apt install -y postgresql-15-pg-cheat-funcs   # PG 15
apt install -y postgresql-14-pg-cheat-funcs   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_cheat_funcs;
```
