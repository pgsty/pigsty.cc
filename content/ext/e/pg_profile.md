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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_profile-4.11.tar.gz">
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
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_profile_18-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_profile_18-4.10-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_profile_18-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_profile_18-4.10-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_profile_18 pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_profile_18-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_profile_18 pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_profile_18-4.10-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-profile postgresql-18-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-18-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_profile_17-4.7-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_profile_17 pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_profile_17-4.7-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_profile_17 pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_profile_17-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_profile_17 pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_profile_17-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_profile_17 pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_profile_17-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-profile postgresql-17-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-17-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_profile_16-4.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_profile_16 pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_profile_16-4.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_profile_16 pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_profile_16-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_profile_16 pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_profile_16-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_profile_16 pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_profile_16-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-profile postgresql-16-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-16-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_profile_15-4.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_profile_15 pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_profile_15-4.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_profile_15 pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_profile_15-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_profile_15 pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_profile_15-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_profile_15 pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_profile_15-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-profile postgresql-15-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-15-pg-profile_4.11-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm pgdg 4.11 214.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.11-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm pgdg 4.10 214.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.10-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm pgdg 4.8 130.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.8-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm pgdg 4.7 130.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm pgdg 4.6 119.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm pgdg 4.4 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_profile_14-4.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm pgdg 4.11 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.11-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm pgdg 4.10 196.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.10-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm pgdg 4.8 117.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.8-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm pgdg 4.7 115.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm pgdg 4.6 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_profile_14 pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm pgdg 4.4 99.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_profile_14-4.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_profile_14 pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm pgdg 4.11 197.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_profile_14-4.11-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_profile_14 pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm pgdg 4.10 197.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_profile_14-4.10-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_profile_14 pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm pgdg 4.8 117.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_profile_14-4.8-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~trixie_amd64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~trixie_arm64.deb pigsty 4.11 192.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~jammy_amd64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~jammy_arm64.deb pigsty 4.11 193.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~noble_amd64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-profile postgresql-14-pg-profile_4.11-1PIGSTY~noble_arm64.deb pigsty 4.11 191.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-profile/postgresql-14-pg-profile_4.11-1PIGSTY~noble_arm64.deb
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




## 用法

> [pg_profile: PostgreSQL 历史性能分析工具](https://github.com/zubkov-andrei/pg_profile)

pg_profile 定期采集 PostgreSQL 统计信息快照，并生成详细的历史性能报告。它依赖 `pg_stat_statements`，可选使用 `pg_stat_kcache` 和 `pg_wait_sampling` 获取额外指标。

### 采集快照

需要定期采集快照（例如通过 cron）。每次快照会捕获当前的统计信息状态：

```sql
SELECT profile.take_sample();
```

### 生成报告

通过指定两个快照 ID 来生成区间性能分析报告：

```sql
-- 生成快照 1 到 2 之间的常规报告
SELECT profile.get_report(1, 2);

-- 生成比较两个区间的差异报告
SELECT profile.get_diffreport(1, 2, 3, 4);
```

### 管理服务器

pg_profile 可以从远程集群采集统计信息：

```sql
-- 定义远程服务器
SELECT profile.create_server('remote', 'host=remote_host dbname=postgres');

-- 列出已定义的服务器
SELECT * FROM profile.show_servers();

-- 启用/禁用服务器
SELECT profile.enable_server('remote');
SELECT profile.disable_server('remote');
```

### 基线

基线可以保护快照范围不被自动清理：

```sql
-- 创建基线，保留快照 10 到 20
SELECT profile.create_baseline('incident_2024', 10, 20);

-- 列出基线
SELECT * FROM profile.show_baselines();

-- 删除基线
SELECT profile.drop_baseline('incident_2024');
```

### 保留策略

控制快照的保留时长：

```sql
-- 将本地服务器的保留期设置为 7 天
SELECT profile.set_server_max_sample_age('local', 7);
```

### 快照信息

```sql
-- 查看可用快照
SELECT * FROM profile.show_samples();

-- 查看快照采集耗时（需要 pg_profile.track_sample_timings = on）
SELECT * FROM v_sample_timings;
```

### 推荐配置

```
track_activities = on
track_counts = on
track_io_timing = on
track_wal_io_timing = on      # PG 14+
track_functions = all
```
