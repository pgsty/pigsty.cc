---
title: "pg_auth_mon"
linkTitle: "pg_auth_mon"
description: "监控每个用户的连接尝试"
weight: 7150
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RafiaSabih/pg_auth_mon">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RafiaSabih/pg_auth_mon</div>
    <div class="ext-card__desc">https://github.com/RafiaSabih/pg_auth_mon</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_auth_mon-3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_auth_mon-3.0.tar.gz</div>
    <div class="ext-card__desc">pg_auth_mon-3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_auth_mon`**](/ext/e/pg_auth_mon) | `3.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7150  | [**`pg_auth_mon`**](/ext/e/pg_auth_mon) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`pgaudit`](/ext/e/pgaudit) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`login_hook`](/ext/e/login_hook) [`auth_delay`](/ext/e/auth_delay) [`credcheck`](/ext/e/credcheck) [`logerrors`](/ext/e/logerrors) [`set_user`](/ext/e/set_user) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `3.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_auth_mon` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_auth_mon_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-auth-mon` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 2.0 1 | AVAIL PGDG 2.0 2 | AVAIL PGDG 2.0 2 |
| el8.aarch64 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 2.0 1 | AVAIL PGDG 2.0 2 | AVAIL PGDG 2.0 2 |
| el9.x86_64 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 2.0 1 | AVAIL PGDG 2.0 2 | AVAIL PGDG 2.0 1 |
| el9.aarch64 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 2.0 1 | AVAIL PGDG 2.0 2 | AVAIL PGDG 2.0 2 |
| el10.x86_64 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 |
| el10.aarch64 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 | AVAIL PGDG 3.0 1 |
| d12.x86_64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| d12.aarch64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| d13.x86_64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| d13.aarch64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| u22.x86_64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| u22.aarch64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| u24.x86_64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| u24.aarch64 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 | AVAIL PIGSTY 3.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_auth_mon_18 pg_auth_mon_18-3.0-3PGDG.rhel8.x86_64.rpm pgdg 3.0 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_auth_mon_18-3.0-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_auth_mon_18 pg_auth_mon_18-3.0-3PGDG.rhel8.aarch64.rpm pgdg 3.0 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_auth_mon_18-3.0-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_auth_mon_18 pg_auth_mon_18-3.0-3PGDG.rhel9.x86_64.rpm pgdg 3.0 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_auth_mon_18-3.0-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_auth_mon_18 pg_auth_mon_18-3.0-3PGDG.rhel9.aarch64.rpm pgdg 3.0 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_auth_mon_18-3.0-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_auth_mon_18 pg_auth_mon_18-3.0-3PGDG.rhel10.x86_64.rpm pgdg 3.0 17.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_auth_mon_18-3.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_auth_mon_18 pg_auth_mon_18-3.0-3PGDG.rhel10.aarch64.rpm pgdg 3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_auth_mon_18-3.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb pigsty 3.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb pigsty 3.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb pigsty 3.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb pigsty 3.0 17.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb pigsty 3.0 17.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-auth-mon postgresql-18-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb pigsty 3.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-18-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_auth_mon_17 pg_auth_mon_17-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_auth_mon_17-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_auth_mon_17 pg_auth_mon_17-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_auth_mon_17-3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_auth_mon_17 pg_auth_mon_17-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_auth_mon_17-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_auth_mon_17 pg_auth_mon_17-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_auth_mon_17-3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_auth_mon_17 pg_auth_mon_17-3.0-3PGDG.rhel10.x86_64.rpm pgdg 3.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_auth_mon_17-3.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_auth_mon_17 pg_auth_mon_17-3.0-3PGDG.rhel10.aarch64.rpm pgdg 3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_auth_mon_17-3.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb pigsty 3.0 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb pigsty 3.0 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb pigsty 3.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb pigsty 3.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb pigsty 3.0 17.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-auth-mon postgresql-17-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb pigsty 3.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-17-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_auth_mon_16 pg_auth_mon_16-2.0-1.rhel8.x86_64.rpm pgdg 2.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_auth_mon_16-2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_auth_mon_16 pg_auth_mon_16-2.0-1.rhel8.aarch64.rpm pgdg 2.0 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_auth_mon_16-2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_auth_mon_16 pg_auth_mon_16-2.0-1.rhel9.x86_64.rpm pgdg 2.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_auth_mon_16-2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_auth_mon_16 pg_auth_mon_16-2.0-1.rhel9.aarch64.rpm pgdg 2.0 16.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_auth_mon_16-2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_auth_mon_16 pg_auth_mon_16-3.0-3PGDG.rhel10.x86_64.rpm pgdg 3.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_auth_mon_16-3.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_auth_mon_16 pg_auth_mon_16-3.0-3PGDG.rhel10.aarch64.rpm pgdg 3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_auth_mon_16-3.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb pigsty 3.0 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb pigsty 3.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb pigsty 3.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb pigsty 3.0 20.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb pigsty 3.0 17.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-auth-mon postgresql-16-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb pigsty 3.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-16-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_auth_mon_15 pg_auth_mon_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_auth_mon_15-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_auth_mon_15 pg_auth_mon_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_auth_mon_15-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_auth_mon_15 pg_auth_mon_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_auth_mon_15-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_auth_mon_15 pg_auth_mon_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_auth_mon_15-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_auth_mon_15 pg_auth_mon_15-2.0-1.rhel9.x86_64.rpm pgdg 2.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_auth_mon_15-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_auth_mon_15 pg_auth_mon_15-1.0-1.rhel9.x86_64.rpm pgdg 1.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_auth_mon_15-1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_auth_mon_15 pg_auth_mon_15-2.0-1.rhel9.aarch64.rpm pgdg 2.0 16.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_auth_mon_15-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_auth_mon_15 pg_auth_mon_15-1.0-1.rhel9.aarch64.rpm pgdg 1.0 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_auth_mon_15-1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_auth_mon_15 pg_auth_mon_15-3.0-3PGDG.rhel10.x86_64.rpm pgdg 3.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_auth_mon_15-3.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_auth_mon_15 pg_auth_mon_15-3.0-3PGDG.rhel10.aarch64.rpm pgdg 3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_auth_mon_15-3.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb pigsty 3.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb pigsty 3.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb pigsty 3.0 16.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb pigsty 3.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb pigsty 3.0 20.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb pigsty 3.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-auth-mon postgresql-15-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb pigsty 3.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-15-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_auth_mon_14 pg_auth_mon_14-2.0-1.rhel8.x86_64.rpm pgdg 2.0 16.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auth_mon_14-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_auth_mon_14 pg_auth_mon_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auth_mon_14-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_auth_mon_14 pg_auth_mon_14-2.0-1.rhel8.aarch64.rpm pgdg 2.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_auth_mon_14-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_auth_mon_14 pg_auth_mon_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_auth_mon_14-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_auth_mon_14 pg_auth_mon_14-2.0-1.rhel9.x86_64.rpm pgdg 2.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_auth_mon_14-2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_auth_mon_14 pg_auth_mon_14-2.0-1.rhel9.aarch64.rpm pgdg 2.0 16.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_auth_mon_14-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_auth_mon_14 pg_auth_mon_14-1.0-1.rhel9.aarch64.rpm pgdg 1.0 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_auth_mon_14-1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_auth_mon_14 pg_auth_mon_14-3.0-3PGDG.rhel10.x86_64.rpm pgdg 3.0 17.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_auth_mon_14-3.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_auth_mon_14 pg_auth_mon_14-3.0-3PGDG.rhel10.aarch64.rpm pgdg 3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_auth_mon_14-3.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb pigsty 3.0 16.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb pigsty 3.0 16.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb pigsty 3.0 16.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb pigsty 3.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb pigsty 3.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb pigsty 3.0 17.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-auth-mon postgresql-14-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb pigsty 3.0 17.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-auth-mon/postgresql-14-pg-auth-mon_3.0-3PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_auth_mon` 扩展的 DEB 包：

```bash
pig build pkg pg_auth_mon         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_auth_mon` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_auth_mon;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_auth_mon -v 18  # PG 18
pig ext install -y pg_auth_mon -v 17  # PG 17
pig ext install -y pg_auth_mon -v 16  # PG 16
pig ext install -y pg_auth_mon -v 15  # PG 15
pig ext install -y pg_auth_mon -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_auth_mon_18       # PG 18
dnf install -y pg_auth_mon_17       # PG 17
dnf install -y pg_auth_mon_16       # PG 16
dnf install -y pg_auth_mon_15       # PG 15
dnf install -y pg_auth_mon_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-auth-mon   # PG 18
apt install -y postgresql-17-pg-auth-mon   # PG 17
apt install -y postgresql-16-pg-auth-mon   # PG 16
apt install -y postgresql-15-pg-auth-mon   # PG 15
apt install -y postgresql-14-pg-auth-mon   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_auth_mon';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_auth_mon;
```




## 用法

> [pg_auth_mon: 监控认证尝试](https://github.com/RafiaSabih/pg_auth_mon)

`pg_auth_mon` 按用户存储认证尝试统计信息，跟踪成功和失败的登录及其时间戳。

```sql
CREATE EXTENSION pg_auth_mon;
```

### 配置

在 `postgresql.conf` 中添加：

```ini
shared_preload_libraries = 'pg_auth_mon'
```

可选 GUC 参数：

| 参数 | 默认值 | 描述 |
|------|--------|------|
| `pg_auth_mon.log_period` | `0` | 每 N 分钟将统计信息转储到 Postgres 日志（0=关闭） |

### 查询认证统计

```sql
SELECT * FROM pg_auth_mon;
```

`pg_auth_mon` 视图提供每用户信息：

| 列 | 描述 |
|----|------|
| `uid` | 用户 OID（0 表示无效/不存在的用户名） |
| `successful_auth_count` | 成功登录总次数 |
| `last_successful_auth` | 最近一次成功登录的时间戳 |
| `failed_auth_count` | 失败认证总次数 |
| `last_failed_auth` | 最近一次失败登录的时间戳 |
| `hba_conflicts_count` | HBA 文件冲突次数 |

所有使用无效用户名的登录尝试被聚合到一个 OID 为 0 的行中。
