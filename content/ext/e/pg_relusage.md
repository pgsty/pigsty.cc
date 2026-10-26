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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_relusage-1.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_relusage-1.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_relusage-1.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_relusage`**](/ext/e/pg_relusage) | `1.0.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6850  | [**`pg_relusage`**](/ext/e/pg_relusage) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_qualstats`](/ext/e/pg_qualstats) [`online_advisor`](/ext/e/online_advisor) [`hypopg`](/ext/e/hypopg) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`index_advisor`](/ext/e/index_advisor) [`pg_stat_plans`](/ext/e/pg_stat_plans) [`pg_upless`](/ext/e/pg_upless) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pg_track_optimizer`](/ext/e/pg_track_optimizer) [`plan_filter`](/ext/e/plan_filter) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> LOAD/preload enables logging; CREATE EXTENSION only records installation.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_relusage` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_relusage_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-relusage` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
@ el8.x86_64 18 pg_relusage_18 pg_relusage_18-1.0.2-1PGSTY.el8.x86_64.rpm pigsty 1.0.2 39.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relusage_18-1.0.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_relusage_18 pg_relusage_18-1.0.2-1PGSTY.el8.aarch64.rpm pigsty 1.0.2 39.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relusage_18-1.0.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_relusage_18 pg_relusage_18-1.0.2-1PGSTY.el9.x86_64.rpm pigsty 1.0.2 39.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relusage_18-1.0.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_relusage_18 pg_relusage_18-1.0.2-1PGSTY.el9.aarch64.rpm pigsty 1.0.2 39.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relusage_18-1.0.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_relusage_18 pg_relusage_18-1.0.2-1PGSTY.el10.x86_64.rpm pigsty 1.0.2 40.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relusage_18-1.0.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_relusage_18 pg_relusage_18-1.0.2-1PGSTY.el10.aarch64.rpm pigsty 1.0.2 39.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relusage_18-1.0.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb pigsty 1.0.2 30.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb pigsty 1.0.2 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb pigsty 1.0.2 30.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb pigsty 1.0.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb pigsty 1.0.2 32.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb pigsty 1.0.2 32.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb pigsty 1.0.2 31.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb pigsty 1.0.2 30.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb pigsty 1.0.2 31.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-relusage postgresql-18-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb pigsty 1.0.2 31.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-18-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_relusage_17 pg_relusage_17-1.0.2-1PGSTY.el8.x86_64.rpm pigsty 1.0.2 39.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relusage_17-1.0.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_relusage_17 pg_relusage_17-1.0.2-1PGSTY.el8.aarch64.rpm pigsty 1.0.2 39.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relusage_17-1.0.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_relusage_17 pg_relusage_17-1.0.2-1PGSTY.el9.x86_64.rpm pigsty 1.0.2 39.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relusage_17-1.0.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_relusage_17 pg_relusage_17-1.0.2-1PGSTY.el9.aarch64.rpm pigsty 1.0.2 39.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relusage_17-1.0.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_relusage_17 pg_relusage_17-1.0.2-1PGSTY.el10.x86_64.rpm pigsty 1.0.2 40.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relusage_17-1.0.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_relusage_17 pg_relusage_17-1.0.2-1PGSTY.el10.aarch64.rpm pigsty 1.0.2 39.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relusage_17-1.0.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb pigsty 1.0.2 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb pigsty 1.0.2 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb pigsty 1.0.2 30.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb pigsty 1.0.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb pigsty 1.0.2 36.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb pigsty 1.0.2 36.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb pigsty 1.0.2 31.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb pigsty 1.0.2 31.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb pigsty 1.0.2 31.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-relusage postgresql-17-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb pigsty 1.0.2 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-17-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_relusage_16 pg_relusage_16-1.0.2-1PGSTY.el8.x86_64.rpm pigsty 1.0.2 39.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relusage_16-1.0.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_relusage_16 pg_relusage_16-1.0.2-1PGSTY.el8.aarch64.rpm pigsty 1.0.2 39.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relusage_16-1.0.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_relusage_16 pg_relusage_16-1.0.2-1PGSTY.el9.x86_64.rpm pigsty 1.0.2 39.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relusage_16-1.0.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_relusage_16 pg_relusage_16-1.0.2-1PGSTY.el9.aarch64.rpm pigsty 1.0.2 39.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relusage_16-1.0.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_relusage_16 pg_relusage_16-1.0.2-1PGSTY.el10.x86_64.rpm pigsty 1.0.2 40.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relusage_16-1.0.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_relusage_16 pg_relusage_16-1.0.2-1PGSTY.el10.aarch64.rpm pigsty 1.0.2 39.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relusage_16-1.0.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb pigsty 1.0.2 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb pigsty 1.0.2 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb pigsty 1.0.2 30.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb pigsty 1.0.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb pigsty 1.0.2 35.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb pigsty 1.0.2 35.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb pigsty 1.0.2 31.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb pigsty 1.0.2 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb pigsty 1.0.2 31.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-relusage postgresql-16-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb pigsty 1.0.2 31.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-16-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_relusage_15 pg_relusage_15-1.0.2-1PGSTY.el8.x86_64.rpm pigsty 1.0.2 39.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relusage_15-1.0.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_relusage_15 pg_relusage_15-1.0.2-1PGSTY.el8.aarch64.rpm pigsty 1.0.2 39.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relusage_15-1.0.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_relusage_15 pg_relusage_15-1.0.2-1PGSTY.el9.x86_64.rpm pigsty 1.0.2 39.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relusage_15-1.0.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_relusage_15 pg_relusage_15-1.0.2-1PGSTY.el9.aarch64.rpm pigsty 1.0.2 39.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relusage_15-1.0.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_relusage_15 pg_relusage_15-1.0.2-1PGSTY.el10.x86_64.rpm pigsty 1.0.2 39.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relusage_15-1.0.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_relusage_15 pg_relusage_15-1.0.2-1PGSTY.el10.aarch64.rpm pigsty 1.0.2 39.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relusage_15-1.0.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb pigsty 1.0.2 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb pigsty 1.0.2 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb pigsty 1.0.2 30.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb pigsty 1.0.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb pigsty 1.0.2 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb pigsty 1.0.2 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb pigsty 1.0.2 31.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb pigsty 1.0.2 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb pigsty 1.0.2 31.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-relusage postgresql-15-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb pigsty 1.0.2 31.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-15-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_relusage_14 pg_relusage_14-1.0.2-1PGSTY.el8.x86_64.rpm pigsty 1.0.2 39.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relusage_14-1.0.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_relusage_14 pg_relusage_14-1.0.2-1PGSTY.el8.aarch64.rpm pigsty 1.0.2 39.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relusage_14-1.0.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_relusage_14 pg_relusage_14-1.0.2-1PGSTY.el9.x86_64.rpm pigsty 1.0.2 39.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relusage_14-1.0.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_relusage_14 pg_relusage_14-1.0.2-1PGSTY.el9.aarch64.rpm pigsty 1.0.2 39.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relusage_14-1.0.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_relusage_14 pg_relusage_14-1.0.2-1PGSTY.el10.x86_64.rpm pigsty 1.0.2 39.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relusage_14-1.0.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_relusage_14 pg_relusage_14-1.0.2-1PGSTY.el10.aarch64.rpm pigsty 1.0.2 39.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relusage_14-1.0.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb pigsty 1.0.2 30.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb pigsty 1.0.2 29.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb pigsty 1.0.2 30.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb pigsty 1.0.2 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb pigsty 1.0.2 35.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb pigsty 1.0.2 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb pigsty 1.0.2 31.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb pigsty 1.0.2 30.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb pigsty 1.0.2 31.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-relusage postgresql-14-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb pigsty 1.0.2 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relusage/postgresql-14-pg-relusage_1.0.2-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_relusage;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_relusage -v 18  # PG 18
pig ext install -y pg_relusage -v 17  # PG 17
pig ext install -y pg_relusage -v 16  # PG 16
pig ext install -y pg_relusage -v 15  # PG 15
pig ext install -y pg_relusage -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_relusage_18       # PG 18
dnf install -y pg_relusage_17       # PG 17
dnf install -y pg_relusage_16       # PG 16
dnf install -y pg_relusage_15       # PG 15
dnf install -y pg_relusage_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-relusage   # PG 18
apt install -y postgresql-17-pg-relusage   # PG 17
apt install -y postgresql-16-pg-relusage   # PG 16
apt install -y postgresql-15-pg-relusage   # PG 15
apt install -y postgresql-14-pg-relusage   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_relusage';
```


## 用法

来源：

- [README.md](https://github.com/adept/pg_relusage/blob/017ca90bc08aa131d074017511ea9ed6ab89d6d3/README.md)
- [Control file](https://github.com/adept/pg_relusage/blob/017ca90bc08aa131d074017511ea9ed6ab89d6d3/pg_relusage.control)
- [Implementation](https://github.com/adept/pg_relusage/blob/017ca90bc08aa131d074017511ea9ed6ab89d6d3/pg_relusage.c)

`pg_relusage` 1.0.2 记录执行计划简化后语句使用的关系，支持 PostgreSQL 10–18，不定义 SQL 对象。加载共享库才会启用功能；可选的 CREATE EXTENSION 仅登记安装状态。

### 核心用法

```sql
LOAD 'pg_relusage';
SET pg_relusage.nested_statements = 'fold';
SET pg_relusage.log_level = 'notice';
CREATE TABLE relusage_demo (id integer);
SELECT * FROM relusage_demo;
```

### 运行边界

全部设置都需要超级用户：`pg_relusage.enabled` 默认 on，`pg_relusage.log_level` 默认 log，`pg_relusage.rel_kinds` 默认 riSvmfp。`pg_relusage.nested_statements` 可选 `all`（默认，每条语句单独记录）、`top`（忽略嵌套语句）或 `fold`（将嵌套关系合并到外层日志）。1.0.1 修复子事务失败后 fold 模式的处理。

用 `session_preload_libraries` 可在新会话中加载，无需重启；用 `shared_preload_libraries` 覆盖全部会话则需要重启，应保留已有预加载项。LOAD 通常要求超级用户。日志不包含 SQL 文本，可配置 `log_line_prefix` 标识客户端。

系统目录不记录。规划或执行器启动时被排除的关系不记录，但执行过程中跳过的分区仍可能出现。向分区表 INSERT 时只记录父表。COMMIT 时的延迟触发器、COPY FROM 触发器及规划器调用的函数按顶层语句处理。DDL 与维护命令不记录。日志中暂未出现某对象，并不足以证明可以删除它。

### 1.0.2 与分区表

1.0.2 降低了涉及大量分区时的关系集合检查与分区匹配开销，日志格式和配置不变。替换共享库后，使用共享预加载的实例需要重启，使用会话预加载或 LOAD 的连接需要重新连接。若曾用 CREATE EXTENSION 登记安装，还应执行 `ALTER EXTENSION pg_relusage UPDATE`。
