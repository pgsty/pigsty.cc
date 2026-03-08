---
title: "pg_relusage"
linkTitle: "pg_relusage"
description: "打印查询引用的表与列"
weight: 6850
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adept/pg_relusage">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adept/pg_relusage</div>
    <div class="ext-card__desc">https://github.com/adept/pg_relusage</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_relusage-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_relusage-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_relusage-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_relusage`**](/ext/e/pg_relusage) | `0.0.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6850  | [**`pg_relusage`**](/ext/e/pg_relusage) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_freespacemap`](/ext/e/pg_freespacemap) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`toastinfo`](/ext/e/toastinfo) [`pageinspect`](/ext/e/pageinspect) [`pg_buffercache`](/ext/e/pg_buffercache) [`pgfincore`](/ext/e/pgfincore) [`old_snapshot`](/ext/e/old_snapshot) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_relusage` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_relusage_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-relusage` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_relusage_18 pg_relusage_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_relusage_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_relusage_18 pg_relusage_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_relusage_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_relusage_18 pg_relusage_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_relusage_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_relusage_18 pg_relusage_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_relusage_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_relusage_18 pg_relusage_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_relusage_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_relusage_18 pg_relusage_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_relusage_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 12.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 12.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-18-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_relusage_17 pg_relusage_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_relusage_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_relusage_17 pg_relusage_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_relusage_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_relusage_17 pg_relusage_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_relusage_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_relusage_17 pg_relusage_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_relusage_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_relusage_17 pg_relusage_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_relusage_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_relusage_17 pg_relusage_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_relusage_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 14.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 14.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-17-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_relusage_16 pg_relusage_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_relusage_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_relusage_16 pg_relusage_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_relusage_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_relusage_16 pg_relusage_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_relusage_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_relusage_16 pg_relusage_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_relusage_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_relusage_16 pg_relusage_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_relusage_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_relusage_16 pg_relusage_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_relusage_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 14.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 14.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-16-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_relusage_15 pg_relusage_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_relusage_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_relusage_15 pg_relusage_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_relusage_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_relusage_15 pg_relusage_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_relusage_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_relusage_15 pg_relusage_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_relusage_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_relusage_15 pg_relusage_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_relusage_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_relusage_15 pg_relusage_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_relusage_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 14.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 14.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-15-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_relusage_14 pg_relusage_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_relusage_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_relusage_14 pg_relusage_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_relusage_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_relusage_14 pg_relusage_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_relusage_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_relusage_14 pg_relusage_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_relusage_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_relusage_14 pg_relusage_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_relusage_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_relusage_14 pg_relusage_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_relusage_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 14.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 14.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-14-pg-relusage_0.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_relusage` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_relusage         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_relusage` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_relusage;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_relusage -v 18  # PG 18
pig ext install -y pg_relusage -v 17  # PG 17
pig ext install -y pg_relusage -v 16  # PG 16
pig ext install -y pg_relusage -v 15  # PG 15
pig ext install -y pg_relusage -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_relusage_18       # PG 18
dnf install -y pg_relusage_17       # PG 17
dnf install -y pg_relusage_16       # PG 16
dnf install -y pg_relusage_15       # PG 15
dnf install -y pg_relusage_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-relusage   # PG 18
apt install -y postgresql-17-pg-relusage   # PG 17
apt install -y postgresql-16-pg-relusage   # PG 16
apt install -y postgresql-15-pg-relusage   # PG 15
apt install -y postgresql-14-pg-relusage   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_relusage';
```

