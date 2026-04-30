---
title: "pg_jobmon"
linkTitle: "pg_jobmon"
description: "记录和监控函数"
weight: 7160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/omniti-labs/pg_jobmon">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">omniti-labs/pg_jobmon</div>
    <div class="ext-card__desc">https://github.com/omniti-labs/pg_jobmon</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_jobmon-1.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_jobmon-1.4.1.tar.gz</div>
    <div class="ext-card__desc">pg_jobmon-1.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_jobmon`**](/ext/e/pg_jobmon) | `1.4.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7160  | [**`pg_jobmon`**](/ext/e/pg_jobmon) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dblink`](/ext/e/dblink) [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pgagent`](/ext/e/pgagent) [`pg_background`](/ext/e/pg_background) [`logerrors`](/ext/e/logerrors) [`bgw_replstatus`](/ext/e/bgw_replstatus) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`pg_auth_mon`](/ext/e/pg_auth_mon) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_jobmon` | `dblink` |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_jobmon_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-jobmon` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| el8.aarch64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| el9.x86_64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| el9.aarch64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| el10.x86_64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| el10.aarch64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_jobmon_18 pg_jobmon_18-1.4.1-5PGDG.rhel8.noarch.rpm pgdg 1.4.1 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_jobmon_18-1.4.1-5PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_jobmon_18 pg_jobmon_18-1.4.1-5PGDG.rhel8.noarch.rpm pgdg 1.4.1 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_jobmon_18-1.4.1-5PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_jobmon_18 pg_jobmon_18-1.4.1-5PGDG.rhel9.noarch.rpm pgdg 1.4.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_jobmon_18-1.4.1-5PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_jobmon_18 pg_jobmon_18-1.4.1-5PGDG.rhel9.noarch.rpm pgdg 1.4.1 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_jobmon_18-1.4.1-5PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_jobmon_18 pg_jobmon_18-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_jobmon_18-1.4.1-5PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_jobmon_18 pg_jobmon_18-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_jobmon_18-1.4.1-5PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-jobmon postgresql-18-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-18-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_jobmon_17 pg_jobmon_17-1.4.1-4PGDG.rhel8.noarch.rpm pgdg 1.4.1 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_jobmon_17-1.4.1-4PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_jobmon_17 pg_jobmon_17-1.4.1-4PGDG.rhel8.noarch.rpm pgdg 1.4.1 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_jobmon_17-1.4.1-4PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_jobmon_17 pg_jobmon_17-1.4.1-4PGDG.rhel9.noarch.rpm pgdg 1.4.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_jobmon_17-1.4.1-4PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_jobmon_17 pg_jobmon_17-1.4.1-4PGDG.rhel9.noarch.rpm pgdg 1.4.1 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_jobmon_17-1.4.1-4PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_jobmon_17 pg_jobmon_17-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_jobmon_17-1.4.1-5PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_jobmon_17 pg_jobmon_17-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_jobmon_17-1.4.1-5PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-jobmon postgresql-17-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-17-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_jobmon_16 pg_jobmon_16-1.4.1-2.rhel8.noarch.rpm pgdg 1.4.1 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_jobmon_16-1.4.1-2.rhel8.noarch.rpm
@ el8.aarch64 16 pg_jobmon_16 pg_jobmon_16-1.4.1-2.rhel8.noarch.rpm pgdg 1.4.1 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_jobmon_16-1.4.1-2.rhel8.noarch.rpm
@ el9.x86_64 16 pg_jobmon_16 pg_jobmon_16-1.4.1-2.rhel9.noarch.rpm pgdg 1.4.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_jobmon_16-1.4.1-2.rhel9.noarch.rpm
@ el9.aarch64 16 pg_jobmon_16 pg_jobmon_16-1.4.1-2.rhel9.noarch.rpm pgdg 1.4.1 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_jobmon_16-1.4.1-2.rhel9.noarch.rpm
@ el10.x86_64 16 pg_jobmon_16 pg_jobmon_16-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_jobmon_16-1.4.1-5PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_jobmon_16 pg_jobmon_16-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_jobmon_16-1.4.1-5PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-jobmon postgresql-16-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-16-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_jobmon_15 pg_jobmon_15-1.4.1-1.rhel8.noarch.rpm pgdg 1.4.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_jobmon_15-1.4.1-1.rhel8.noarch.rpm
@ el8.aarch64 15 pg_jobmon_15 pg_jobmon_15-1.4.1-1.rhel8.noarch.rpm pgdg 1.4.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_jobmon_15-1.4.1-1.rhel8.noarch.rpm
@ el9.x86_64 15 pg_jobmon_15 pg_jobmon_15-1.4.1-1.rhel9.noarch.rpm pgdg 1.4.1 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_jobmon_15-1.4.1-1.rhel9.noarch.rpm
@ el9.aarch64 15 pg_jobmon_15 pg_jobmon_15-1.4.1-1.rhel9.noarch.rpm pgdg 1.4.1 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_jobmon_15-1.4.1-1.rhel9.noarch.rpm
@ el10.x86_64 15 pg_jobmon_15 pg_jobmon_15-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_jobmon_15-1.4.1-5PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_jobmon_15 pg_jobmon_15-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_jobmon_15-1.4.1-5PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-jobmon postgresql-15-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-15-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_jobmon_14 pg_jobmon_14-1.4.1-1.rhel8.noarch.rpm pgdg 1.4.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_jobmon_14-1.4.1-1.rhel8.noarch.rpm
@ el8.aarch64 14 pg_jobmon_14 pg_jobmon_14-1.4.1-1.rhel8.noarch.rpm pgdg 1.4.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_jobmon_14-1.4.1-1.rhel8.noarch.rpm
@ el9.x86_64 14 pg_jobmon_14 pg_jobmon_14-1.4.1-1.rhel9.noarch.rpm pgdg 1.4.1 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_jobmon_14-1.4.1-1.rhel9.noarch.rpm
@ el9.aarch64 14 pg_jobmon_14 pg_jobmon_14-1.4.1-1.rhel9.noarch.rpm pgdg 1.4.1 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_jobmon_14-1.4.1-1.rhel9.noarch.rpm
@ el10.x86_64 14 pg_jobmon_14 pg_jobmon_14-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_jobmon_14-1.4.1-5PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_jobmon_14 pg_jobmon_14-1.4.1-5PGDG.rhel10.noarch.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_jobmon_14-1.4.1-5PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 23.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-jobmon postgresql-14-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jobmon/postgresql-14-pg-jobmon_1.4.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_jobmon` 扩展的 DEB 包：

```bash
pig build pkg pg_jobmon         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_jobmon` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_jobmon;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_jobmon -v 18  # PG 18
pig ext install -y pg_jobmon -v 17  # PG 17
pig ext install -y pg_jobmon -v 16  # PG 16
pig ext install -y pg_jobmon -v 15  # PG 15
pig ext install -y pg_jobmon -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_jobmon_18       # PG 18
dnf install -y pg_jobmon_17       # PG 17
dnf install -y pg_jobmon_16       # PG 16
dnf install -y pg_jobmon_15       # PG 15
dnf install -y pg_jobmon_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-jobmon   # PG 18
apt install -y postgresql-17-pg-jobmon   # PG 17
apt install -y postgresql-16-pg-jobmon   # PG 16
apt install -y postgresql-15-pg-jobmon   # PG 15
apt install -y postgresql-14-pg-jobmon   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_jobmon CASCADE;  -- 依赖: dblink
```




## 用法

> [pg_jobmon: PostgreSQL 自主作业日志和监控](https://github.com/omniti-labs/pg_jobmon)

`pg_jobmon` 为 PostgreSQL 事务和函数提供自主（非事务性）日志记录。如果函数失败，到该时间点为止写入的所有日志信息都会被保留，而不会被回滚。

```sql
CREATE SCHEMA jobmon;
CREATE EXTENSION pg_jobmon SCHEMA jobmon;
```

### 初始化

该扩展使用 dblink 回连到同一数据库（用于非事务性日志记录）。添加凭证：

```sql
INSERT INTO jobmon.dblink_mapping_jobmon (username, pwd) VALUES ('rolename', 'rolepassword');
```

非标准端口：

```sql
INSERT INTO jobmon.dblink_mapping_jobmon (host, username, pwd, port)
VALUES ('localhost', 'rolename', 'rolepassword', '5999');
```

### 核心日志函数

```sql
-- 开始新作业
SELECT jobmon.add_job('My Job Name');

-- 向作业添加步骤
SELECT jobmon.add_step(job_id, 'Step description');

-- 更新步骤状态
SELECT jobmon.update_step(step_id, 'OK', 'Step completed successfully');
SELECT jobmon.update_step(step_id, 'WARNING', 'Something unexpected');

-- 关闭作业
SELECT jobmon.close_job(job_id);

-- 或标记作业失败
SELECT jobmon.fail_job(job_id);
```

### 监控函数

```sql
-- 检查失败的作业
SELECT * FROM jobmon.check_job_status();

-- 查看作业历史
SELECT * FROM jobmon.job_log ORDER BY start_time DESC;

-- 查看步骤详情
SELECT * FROM jobmon.job_detail WHERE job_id = 123;
```

自主日志记录确保即使父事务回滚，作业日志条目也会被保留以便排障。
