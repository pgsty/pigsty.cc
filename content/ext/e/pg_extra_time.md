---
title: "pg_extra_time"
linkTitle: "pg_extra_time"
description: "一些关于日期与时间的扩展函数"
weight: 4220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_extra_time">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_extra_time</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_extra_time</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_extra_time-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_extra_time-2.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_extra_time-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_extra_time`**](/ext/e/pg_extra_time) | `2.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4220  | [**`pg_extra_time`**](/ext/e/pg_extra_time) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgsql_tweaks`](/ext/e/pgsql_tweaks) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`pg_cron`](/ext/e/pg_cron) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_extra_time` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_extra_time_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-extra-time` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 2 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 |
| el8.aarch64 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 2 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 |
| el9.x86_64 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 2 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 |
| el9.aarch64 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 2 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 | AVAIL PGDG 2.0.0 3 |
| el10.x86_64 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 |
| el10.aarch64 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 | AVAIL PGDG 2.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 39.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 36.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_extra_time` 扩展的 DEB 包：

```bash
pig build pkg pg_extra_time         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_extra_time` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_extra_time;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_extra_time -v 18  # PG 18
pig ext install -y pg_extra_time -v 17  # PG 17
pig ext install -y pg_extra_time -v 16  # PG 16
pig ext install -y pg_extra_time -v 15  # PG 15
pig ext install -y pg_extra_time -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_extra_time_18       # PG 18
dnf install -y pg_extra_time_17       # PG 17
dnf install -y pg_extra_time_16       # PG 16
dnf install -y pg_extra_time_15       # PG 15
dnf install -y pg_extra_time_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-extra-time   # PG 18
apt install -y postgresql-17-pg-extra-time   # PG 17
apt install -y postgresql-16-pg-extra-time   # PG 16
apt install -y postgresql-15-pg-extra-time   # PG 15
apt install -y postgresql-14-pg-extra-time   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_extra_time;
```



## 用法

> [pg_extra_time: PostgreSQL 的额外日期/时间函数与运算符](https://github.com/bigsmoke/pg_extra_time)

### 转换为秒（浮点数）

```sql
SELECT to_float('1970-01-01 00:00:00+0'::timestamptz);  -- 0.0
SELECT to_float('1 day 1 sec'::interval);                -- 86401.0
SELECT to_float('[2024-06-06 05:58:00,2024-06-06 06:00:10]'::tstzrange);  -- 130.0
```

也支持类型转换语法：

```sql
SELECT '1970-01-01 01:03:01+00'::timestamptz::float;    -- 3181.00
SELECT '1 day 1 sec 200 ms'::interval::float;            -- 86401.2
```

### 转换为天数

```sql
SELECT days('[2024-06-06,2024-06-08 06:00]'::tstzrange);  -- 3.25（小数天数）
SELECT whole_days('[2024-06-06,2024-06-08 18:00]'::tstzrange);  -- 2（仅整天数）
SELECT days('10 days 12 hours'::interval);                -- 10.5
SELECT whole_days('10 days 20 hours'::interval);          -- 10
```

### 从范围中提取时间间隔

```sql
SELECT to_interval('[2024-01-01,2024-01-05]'::tstzrange);  -- 4 days
```

### Each 函数（从范围生成序列）

```sql
SELECT * FROM each_subperiod('[2024-01-01,2024-01-05]'::tstzrange, '1 day'::interval);
```

### 运算符

```sql
-- 范围持续时间转换为浮点数（秒）
SELECT '[epoch,1970-01-01T01:03:01+00]'::tstzrange::float;
-- 时间间隔转换为浮点数（秒）
SELECT '10 seconds 100 milliseconds'::interval::float;  -- 10.100
```
