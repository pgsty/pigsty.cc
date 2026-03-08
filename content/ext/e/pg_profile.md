---
title: "pg_profile"
linkTitle: "pg_profile"
description: "PostgreSQL 数据库负载记录与AWR报表工具"
weight: 6000
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/zubkov-andrei/pg_profile">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">zubkov-andrei/pg_profile</div>
    <div class="ext-card__desc">https://github.com/zubkov-andrei/pg_profile</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_profile-4.11.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_profile-4.11.tar.gz</div>
    <div class="ext-card__desc">pg_profile-4.11.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_profile`**](/ext/e/pg_profile) | `4.11` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6000  | [**`pg_profile`**](/ext/e/pg_profile) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dblink`](/ext/e/dblink) [`plpgsql`](/ext/e/plpgsql) [`plprofiler`](/ext/e/plprofiler) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `4.11` | {{< pgvers "18,17,16,15,14" >}} | `pg_profile` | `dblink`, `plpgsql` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.11` | {{< pgvers "18,17,16,15,14" >}} | `pg_profile_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.11` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-profile` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.11 2 | AVAIL PGDG 4.11 4 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 |
| el8.aarch64 | AVAIL PGDG 4.11 2 | AVAIL PGDG 4.11 4 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 |
| el9.x86_64 | AVAIL PGDG 4.11 2 | AVAIL PGDG 4.11 4 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 |
| el9.aarch64 | AVAIL PGDG 4.11 2 | AVAIL PGDG 4.11 4 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 | AVAIL PGDG 4.11 6 |
| el10.x86_64 | AVAIL PGDG 4.11 2 | AVAIL PGDG 4.11 3 | AVAIL PGDG 4.11 3 | AVAIL PGDG 4.11 3 | AVAIL PGDG 4.11 3 |
| el10.aarch64 | AVAIL PGDG 4.11 2 | AVAIL PGDG 4.11 3 | AVAIL PGDG 4.11 3 | AVAIL PGDG 4.11 3 | AVAIL PGDG 4.11 3 |
| d12.x86_64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| d12.aarch64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| d13.x86_64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| d13.aarch64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| u22.x86_64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| u22.aarch64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| u24.x86_64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
| u24.aarch64 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 | AVAIL PIGSTY 4.11 1 |
@ el8.x86_64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_profile` 扩展的 DEB 包：

```bash
pig build pkg pg_profile         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_profile` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_profile;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_profile -v 18  # PG 18
pig ext install -y pg_profile -v 17  # PG 17
pig ext install -y pg_profile -v 16  # PG 16
pig ext install -y pg_profile -v 15  # PG 15
pig ext install -y pg_profile -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_profile_18       # PG 18
dnf install -y pg_profile_17       # PG 17
dnf install -y pg_profile_16       # PG 16
dnf install -y pg_profile_15       # PG 15
dnf install -y pg_profile_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-profile   # PG 18
apt install -y postgresql-17-pg-profile   # PG 17
apt install -y postgresql-16-pg-profile   # PG 16
apt install -y postgresql-15-pg-profile   # PG 15
apt install -y postgresql-14-pg-profile   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_profile CASCADE;  -- 依赖: dblink, plpgsql
```
