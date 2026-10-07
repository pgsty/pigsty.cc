---
title: "pgtelemetry"
linkTitle: "pgtelemetry"
description: "监控数据库活动、WAL、复制与存储的 SQL 视图"
weight: 6080
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/pg-telemetry">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/pg-telemetry</div>
    <div class="ext-card__desc">https://github.com/adjust/pg-telemetry</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgtelemetry-1.7-cac3d192a119.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgtelemetry-1.7-cac3d192a119.tar.gz</div>
    <div class="ext-card__desc">pgtelemetry-1.7-cac3d192a119.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgtelemetry`**](/ext/e/pgtelemetry) | `1.7` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6080  | [**`pgtelemetry`**](/ext/e/pgtelemetry) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgtelemetry` |
{.ext-table}

| **相关扩展** | [`pg_stat_statements`](/ext/e/pg_stat_statements) [`plpgsql`](/ext/e/plpgsql) [`pgmonitor`](/ext/e/pgmonitor) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_profile`](/ext/e/pg_profile) [`powa`](/ext/e/powa) [`pgexporter_ext`](/ext/e/pgexporter_ext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Pure SQL in the fixed pgtelemetry schema; requires pg_stat_statements and plpgsql. Preload pg_stat_statements, not pgtelemetry. Control/SQL are 1.7 while META.json still says 1.6.0; upstream CI stops at PG17, and PG14-18 are verified in PGSTY builds.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgtelemetry` | `pg_stat_statements`, `plpgsql` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgtelemetry_$v` | `postgresql$v-contrib` |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgtelemetry` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| el8.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| el9.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| el9.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| el10.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| el10.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d12.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d12.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d13.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d13.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u22.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u22.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u24.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u24.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u26.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u26.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
@ el8.x86_64 18 pgtelemetry_18 pgtelemetry_18-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgtelemetry_18-1.7-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pgtelemetry_18 pgtelemetry_18-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgtelemetry_18-1.7-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 pgtelemetry_18 pgtelemetry_18-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgtelemetry_18-1.7-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pgtelemetry_18 pgtelemetry_18-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgtelemetry_18-1.7-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pgtelemetry_18 pgtelemetry_18-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgtelemetry_18-1.7-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pgtelemetry_18 pgtelemetry_18-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgtelemetry_18-1.7-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pgtelemetry postgresql-18-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-18-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pgtelemetry_17 pgtelemetry_17-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgtelemetry_17-1.7-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pgtelemetry_17 pgtelemetry_17-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgtelemetry_17-1.7-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 pgtelemetry_17 pgtelemetry_17-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgtelemetry_17-1.7-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pgtelemetry_17 pgtelemetry_17-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgtelemetry_17-1.7-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pgtelemetry_17 pgtelemetry_17-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgtelemetry_17-1.7-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pgtelemetry_17 pgtelemetry_17-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgtelemetry_17-1.7-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pgtelemetry postgresql-17-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-17-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pgtelemetry_16 pgtelemetry_16-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgtelemetry_16-1.7-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pgtelemetry_16 pgtelemetry_16-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgtelemetry_16-1.7-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 pgtelemetry_16 pgtelemetry_16-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgtelemetry_16-1.7-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pgtelemetry_16 pgtelemetry_16-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgtelemetry_16-1.7-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pgtelemetry_16 pgtelemetry_16-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgtelemetry_16-1.7-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pgtelemetry_16 pgtelemetry_16-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgtelemetry_16-1.7-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pgtelemetry postgresql-16-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-16-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ el8.x86_64 15 pgtelemetry_15 pgtelemetry_15-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgtelemetry_15-1.7-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pgtelemetry_15 pgtelemetry_15-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgtelemetry_15-1.7-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 pgtelemetry_15 pgtelemetry_15-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgtelemetry_15-1.7-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pgtelemetry_15 pgtelemetry_15-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgtelemetry_15-1.7-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 pgtelemetry_15 pgtelemetry_15-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgtelemetry_15-1.7-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pgtelemetry_15 pgtelemetry_15-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgtelemetry_15-1.7-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 9.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pgtelemetry postgresql-15-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 9.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-15-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ el8.x86_64 14 pgtelemetry_14 pgtelemetry_14-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgtelemetry_14-1.7-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 pgtelemetry_14 pgtelemetry_14-1.7-1PGSTY.el8.noarch.rpm pigsty 1.7 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgtelemetry_14-1.7-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 pgtelemetry_14 pgtelemetry_14-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgtelemetry_14-1.7-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 pgtelemetry_14 pgtelemetry_14-1.7-1PGSTY.el9.noarch.rpm pigsty 1.7 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgtelemetry_14-1.7-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 pgtelemetry_14 pgtelemetry_14-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgtelemetry_14-1.7-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 pgtelemetry_14 pgtelemetry_14-1.7-1PGSTY.el10.noarch.rpm pigsty 1.7 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgtelemetry_14-1.7-1PGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~bookworm_all.deb pigsty 1.7 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~trixie_all.deb pigsty 1.7 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 10.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~jammy_all.deb pigsty 1.7 10.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 10.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~noble_all.deb pigsty 1.7 10.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 10.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pgtelemetry postgresql-14-pgtelemetry_1.7-1PGSTY~resolute_all.deb pigsty 1.7 10.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgtelemetry/postgresql-14-pgtelemetry_1.7-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgtelemetry` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgtelemetry         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgtelemetry` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgtelemetry;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgtelemetry -v 18  # PG 18
pig ext install -y pgtelemetry -v 17  # PG 17
pig ext install -y pgtelemetry -v 16  # PG 16
pig ext install -y pgtelemetry -v 15  # PG 15
pig ext install -y pgtelemetry -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgtelemetry_18       # PG 18
dnf install -y pgtelemetry_17       # PG 17
dnf install -y pgtelemetry_16       # PG 16
dnf install -y pgtelemetry_15       # PG 15
dnf install -y pgtelemetry_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgtelemetry   # PG 18
apt install -y postgresql-17-pgtelemetry   # PG 17
apt install -y postgresql-16-pgtelemetry   # PG 16
apt install -y postgresql-15-pgtelemetry   # PG 15
apt install -y postgresql-14-pgtelemetry   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgtelemetry CASCADE;  -- 依赖: pg_stat_statements, plpgsql
```

## 用法

来源：

- [上游 README](https://github.com/adjust/pg-telemetry/blob/cac3d192a119f25dc1964b13624e49b5a5a6a27c/README.md)
- [扩展 control 文件](https://github.com/adjust/pg-telemetry/blob/cac3d192a119f25dc1964b13624e49b5a5a6a27c/pgtelemetry.control)
- [1.7 版 SQL](https://github.com/adjust/pg-telemetry/blob/cac3d192a119f25dc1964b13624e49b5a5a6a27c/extension/pgtelemetry--1.7.sql)
- [生成的对象文档](https://github.com/adjust/pg-telemetry/blob/cac3d192a119f25dc1964b13624e49b5a5a6a27c/doc/pgtelemetry.html)

`pgtelemetry` `1.7` 版是纯 SQL 监控集合。视图和函数汇总关系/数据库/表空间大小、连接和等待、锁、表访问和自动清理、`pg_stat_statements` 计时与缓冲区、WAL 速率、复制槽及备库延迟。

### 示例

先预加载并安装 `pg_stat_statements`，再把该扩展安装到固定的 `pgtelemetry` 模式：

```sql
CREATE EXTENSION pg_stat_statements;
CREATE EXTENSION pgtelemetry;
SELECT * FROM pgtelemetry.database_size;
SELECT * FROM pgtelemetry.connections_by_state;
SELECT * FROM pgtelemetry.longest_running_active_queries LIMIT 10;
```

安装仅限超级用户。若干对象会暴露集群范围的查询文本、客户端地址、大小、锁、复制状态和其他运维元数据；`wal_telemetry()` 还会维护历史表。只应向监控角色授予所需的具体视图/函数，保护导出的指标，为 WAL 样本设置保留策略，并考虑轮询成本和 PostgreSQL 版本间统计目录变化。
