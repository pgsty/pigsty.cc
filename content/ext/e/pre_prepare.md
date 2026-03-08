---
title: "pre_prepare"
linkTitle: "pre_prepare"
description: "在服务端预先准备好PreparedStatement备用"
weight: 5170
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dimitri/preprepare">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dimitri/preprepare</div>
    <div class="ext-card__desc">https://github.com/dimitri/preprepare</div>
  </a>
  <a class="ext-card ext-card--source" href="preprepare-0.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">preprepare-0.9.tar.gz</div>
    <div class="ext-card__desc">preprepare-0.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`preprepare`**](/ext/e/pre_prepare) | `0.9` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5170  | [**`pre_prepare`**](/ext/e/pre_prepare) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_store_plans`](/ext/e/pg_store_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`plpgsql_check`](/ext/e/plpgsql_check) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pgaudit`](/ext/e/pgaudit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.9` | {{< pgvers "18,17,16,15,14" >}} | `preprepare` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9` | {{< pgvers "18,17,16,15,14" >}} | `preprepare_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-preprepare` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 |
| el8.aarch64 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 |
| el9.x86_64 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 |
| el9.aarch64 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 |
| el10.x86_64 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 |
| el10.aarch64 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 | AVAIL PIGSTY 0.9 1 |
| d12.x86_64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| d12.aarch64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| d13.x86_64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| d13.aarch64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| u22.x86_64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| u22.aarch64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| u24.x86_64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
| u24.aarch64 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 | AVAIL PGDG 0.9 1 |
@ el8.x86_64 18 preprepare_18 preprepare_18-0.9-1PIGSTY.el8.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/preprepare_18-0.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 preprepare_18 preprepare_18-0.9-1PIGSTY.el8.aarch64.rpm pigsty 0.9 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/preprepare_18-0.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 preprepare_18 preprepare_18-0.9-1PIGSTY.el9.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/preprepare_18-0.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 preprepare_18 preprepare_18-0.9-1PIGSTY.el9.aarch64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/preprepare_18-0.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 preprepare_18 preprepare_18-0.9-1PIGSTY.el10.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/preprepare_18-0.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 preprepare_18 preprepare_18-0.9-1PIGSTY.el10.aarch64.rpm pigsty 0.9 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/preprepare_18-0.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg12+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg12+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg13+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg13+1_arm64.deb pgdg 0.9 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg22.04+1_amd64.deb pgdg 0.9 17.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg22.04+1_arm64.deb pgdg 0.9 17.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg24.04+1_amd64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-preprepare postgresql-18-preprepare_0.9-10.pgdg24.04+1_arm64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-18-preprepare_0.9-10.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 preprepare_17 preprepare_17-0.9-1PIGSTY.el8.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/preprepare_17-0.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 preprepare_17 preprepare_17-0.9-1PIGSTY.el8.aarch64.rpm pigsty 0.9 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/preprepare_17-0.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 preprepare_17 preprepare_17-0.9-1PIGSTY.el9.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/preprepare_17-0.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 preprepare_17 preprepare_17-0.9-1PIGSTY.el9.aarch64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/preprepare_17-0.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 preprepare_17 preprepare_17-0.9-1PIGSTY.el10.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/preprepare_17-0.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 preprepare_17 preprepare_17-0.9-1PIGSTY.el10.aarch64.rpm pigsty 0.9 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/preprepare_17-0.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg12+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg12+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg13+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg13+1_arm64.deb pgdg 0.9 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg22.04+1_amd64.deb pgdg 0.9 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg22.04+1_arm64.deb pgdg 0.9 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg24.04+1_amd64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-preprepare postgresql-17-preprepare_0.9-10.pgdg24.04+1_arm64.deb pgdg 0.9 16.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-17-preprepare_0.9-10.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 preprepare_16 preprepare_16-0.9-1PIGSTY.el8.x86_64.rpm pigsty 0.9 13.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/preprepare_16-0.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 preprepare_16 preprepare_16-0.9-1PIGSTY.el8.aarch64.rpm pigsty 0.9 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/preprepare_16-0.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 preprepare_16 preprepare_16-0.9-1PIGSTY.el9.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/preprepare_16-0.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 preprepare_16 preprepare_16-0.9-1PIGSTY.el9.aarch64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/preprepare_16-0.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 preprepare_16 preprepare_16-0.9-1PIGSTY.el10.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/preprepare_16-0.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 preprepare_16 preprepare_16-0.9-1PIGSTY.el10.aarch64.rpm pigsty 0.9 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/preprepare_16-0.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg12+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg12+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg13+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg13+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg22.04+1_amd64.deb pgdg 0.9 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg22.04+1_arm64.deb pgdg 0.9 18.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg24.04+1_amd64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-preprepare postgresql-16-preprepare_0.9-10.pgdg24.04+1_arm64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-16-preprepare_0.9-10.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 preprepare_15 preprepare_15-0.9-1PIGSTY.el8.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/preprepare_15-0.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 preprepare_15 preprepare_15-0.9-1PIGSTY.el8.aarch64.rpm pigsty 0.9 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/preprepare_15-0.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 preprepare_15 preprepare_15-0.9-1PIGSTY.el9.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/preprepare_15-0.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 preprepare_15 preprepare_15-0.9-1PIGSTY.el9.aarch64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/preprepare_15-0.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 preprepare_15 preprepare_15-0.9-1PIGSTY.el10.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/preprepare_15-0.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 preprepare_15 preprepare_15-0.9-1PIGSTY.el10.aarch64.rpm pigsty 0.9 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/preprepare_15-0.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg12+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg12+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg13+1_amd64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg13+1_arm64.deb pgdg 0.9 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg22.04+1_amd64.deb pgdg 0.9 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg22.04+1_arm64.deb pgdg 0.9 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg24.04+1_amd64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-preprepare postgresql-15-preprepare_0.9-10.pgdg24.04+1_arm64.deb pgdg 0.9 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-15-preprepare_0.9-10.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 preprepare_14 preprepare_14-0.9-1PIGSTY.el8.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/preprepare_14-0.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 preprepare_14 preprepare_14-0.9-1PIGSTY.el8.aarch64.rpm pigsty 0.9 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/preprepare_14-0.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 preprepare_14 preprepare_14-0.9-1PIGSTY.el9.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/preprepare_14-0.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 preprepare_14 preprepare_14-0.9-1PIGSTY.el9.aarch64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/preprepare_14-0.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 preprepare_14 preprepare_14-0.9-1PIGSTY.el10.x86_64.rpm pigsty 0.9 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/preprepare_14-0.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 preprepare_14 preprepare_14-0.9-1PIGSTY.el10.aarch64.rpm pigsty 0.9 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/preprepare_14-0.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg12+1_amd64.deb pgdg 0.9 16.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg12+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg13+1_amd64.deb pgdg 0.9 16.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg13+1_arm64.deb pgdg 0.9 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg22.04+1_amd64.deb pgdg 0.9 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg22.04+1_arm64.deb pgdg 0.9 18.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg24.04+1_amd64.deb pgdg 0.9 16.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-preprepare postgresql-14-preprepare_0.9-10.pgdg24.04+1_arm64.deb pgdg 0.9 16.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/preprepare/postgresql-14-preprepare_0.9-10.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `preprepare` 扩展的 RPM 包：

```bash
pig build pkg preprepare         # 构建 RPM 包
```


## 安装

您可以直接安装 `preprepare` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install preprepare;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y preprepare -v 18  # PG 18
pig ext install -y preprepare -v 17  # PG 17
pig ext install -y preprepare -v 16  # PG 16
pig ext install -y preprepare -v 15  # PG 15
pig ext install -y preprepare -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y preprepare_18       # PG 18
dnf install -y preprepare_17       # PG 17
dnf install -y preprepare_16       # PG 16
dnf install -y preprepare_15       # PG 15
dnf install -y preprepare_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-preprepare   # PG 18
apt install -y postgresql-17-preprepare   # PG 17
apt install -y postgresql-16-preprepare   # PG 16
apt install -y postgresql-15-preprepare   # PG 15
apt install -y postgresql-14-preprepare   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pre_prepare;
```
