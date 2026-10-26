---
title: "pg_synonym"
linkTitle: "pg_synonym"
description: "随目标 DDL 同步的表与视图别名。"
weight: 9220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Mazuco/pg_synonym">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Mazuco/pg_synonym</div>
    <div class="ext-card__desc">https://github.com/Mazuco/pg_synonym</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_synonym-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_synonym-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_synonym-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_synonym`**](/ext/e/pg_synonym) | `1.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9220  | [**`pg_synonym`**](/ext/e/pg_synonym) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `synonym` |
{.ext-table}


> Release 1.0.0 installs SQL 1.0. Requires PG15+ and superuser installation for event triggers; no preload. Invoker-security views retain target privileges/RLS; manual synonym view edits can break synchronization.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "15,16,17,18" >}} | `pg_synonym` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "15,16,17,18" >}} | `pg_synonym_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "15,16,17,18" >}} | `postgresql-$v-pg-synonym` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_synonym_18 pg_synonym_18-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 29.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_synonym_18-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_synonym_18 pg_synonym_18-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_synonym_18-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_synonym_18 pg_synonym_18-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_synonym_18-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_synonym_18 pg_synonym_18-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_synonym_18-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_synonym_18 pg_synonym_18-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_synonym_18-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_synonym_18 pg_synonym_18-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_synonym_18-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 22.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 22.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 22.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 22.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-synonym postgresql-18-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 22.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-18-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_synonym_17 pg_synonym_17-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_synonym_17-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_synonym_17 pg_synonym_17-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_synonym_17-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_synonym_17 pg_synonym_17-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_synonym_17-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_synonym_17 pg_synonym_17-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_synonym_17-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_synonym_17 pg_synonym_17-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_synonym_17-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_synonym_17 pg_synonym_17-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_synonym_17-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-synonym postgresql-17-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 22.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-17-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_synonym_16 pg_synonym_16-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_synonym_16-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_synonym_16 pg_synonym_16-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_synonym_16-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_synonym_16 pg_synonym_16-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_synonym_16-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_synonym_16 pg_synonym_16-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_synonym_16-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_synonym_16 pg_synonym_16-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_synonym_16-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_synonym_16 pg_synonym_16-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_synonym_16-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 22.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-synonym postgresql-16-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 22.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-16-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_synonym_15 pg_synonym_15-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_synonym_15-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_synonym_15 pg_synonym_15-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_synonym_15-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_synonym_15 pg_synonym_15-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_synonym_15-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_synonym_15 pg_synonym_15-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_synonym_15-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_synonym_15 pg_synonym_15-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_synonym_15-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_synonym_15 pg_synonym_15-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_synonym_15-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 22.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 22.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-synonym postgresql-15-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 22.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-synonym/postgresql-15-pg-synonym_1.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_synonym` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_synonym         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_synonym` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_synonym;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_synonym -v 18  # PG 18
pig ext install -y pg_synonym -v 17  # PG 17
pig ext install -y pg_synonym -v 16  # PG 16
pig ext install -y pg_synonym -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_synonym_18       # PG 18
dnf install -y pg_synonym_17       # PG 17
dnf install -y pg_synonym_16       # PG 16
dnf install -y pg_synonym_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-synonym   # PG 18
apt install -y postgresql-17-pg-synonym   # PG 17
apt install -y postgresql-16-pg-synonym   # PG 16
apt install -y postgresql-15-pg-synonym   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_synonym;
```

## 用法

来源：

- [官方资料](https://github.com/Mazuco/pg_synonym/blob/77fa1f92327d2c26f21000293b623941f946dd2f/README.md)
- [官方资料](https://github.com/Mazuco/pg_synonym/blob/77fa1f92327d2c26f21000293b623941f946dd2f/pg_synonym.control)
- [官方资料](https://github.com/Mazuco/pg_synonym/blob/77fa1f92327d2c26f21000293b623941f946dd2f/pg_synonym--1.0.sql)

`pg_synonym` 使用按调用者权限执行的视图维护表与视图别名。发行版 1.0.0 安装的扩展版本为 1.0；要求 PostgreSQL 15 或更高版本，安装需要超级用户。不需要预加载或重启服务器。

### 核心流程

```sql
CREATE EXTENSION pg_synonym;
CREATE SCHEMA app;
CREATE SCHEMA erp;
CREATE TABLE erp.customers (id bigint PRIMARY KEY, name text);
SELECT synonym.create('app.customer', 'erp.customers');
INSERT INTO app.customer VALUES (1, 'Ada');
SELECT * FROM app.customer;
SELECT * FROM synonym.list;
```

全部辅助接口位于 `synonym` 模式中。

### 操作与权限

`synonym.create` 可以在目标尚不存在时登记别名，随后由事件触发器完成绑定。目标重命名时按对象身份跟随，受支持的列变更会重建别名。`synonym.refresh()` 用于手工协调状态。`synonym.drop` 删除单个别名，可指定 `if_exists => true`。

通过别名访问仍受目标权限和行级安全策略约束。创建别名需要在别名所在模式中创建对象的权限，以及目标模式的使用权限。删除别名需要所有权、相应角色成员身份或超级用户权限。

### 使用边界

目标可以是普通表、分区表、外部表、视图与物化视图。不支持别名指向别名、跨数据库对象、函数或序列。导出数据应通过查询进行；别名不能替代目标对象的 DDL 或截断操作。通过视图执行合并需要 PostgreSQL 17 或更高版本。

手工修改别名视图可能破坏同步。依赖该别名的其他视图可能阻止破坏性的目标变更，重建别名也可能重置直接授予它的权限。删除扩展会保留普通别名视图，需另行安排清理。
