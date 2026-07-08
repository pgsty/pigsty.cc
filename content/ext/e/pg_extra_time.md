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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_extra_time-2.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_extra_time-2.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_extra_time-2.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_extra_time`**](/ext/e/pg_extra_time) | `2.1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
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
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_extra_time` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_extra_time_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-extra-time` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.1.0 2 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 4 | AVAIL PIGSTY 2.1.0 4 | AVAIL PIGSTY 2.1.0 4 |
| el8.aarch64 | AVAIL PIGSTY 2.1.0 2 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 4 | AVAIL PIGSTY 2.1.0 4 | AVAIL PIGSTY 2.1.0 4 |
| el9.x86_64 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 4 | AVAIL PIGSTY 2.1.0 5 | AVAIL PIGSTY 2.1.0 5 | AVAIL PIGSTY 2.1.0 5 |
| el9.aarch64 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 4 | AVAIL PIGSTY 2.1.0 5 | AVAIL PIGSTY 2.1.0 5 | AVAIL PIGSTY 2.1.0 5 |
| el10.x86_64 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 |
| el10.aarch64 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 3 | AVAIL PIGSTY 2.1.0 2 |
| d12.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
@ el8.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_extra_time_18-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_extra_time_18-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_extra_time_18-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_extra_time_18-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_extra_time_18-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_extra_time_18-2.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_extra_time_18 pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_extra_time_18-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-extra-time postgresql-18-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-18-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_extra_time_17-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_extra_time_17-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_extra_time_17-1.1.3-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_extra_time_17-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_extra_time_17-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_extra_time_17 pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_extra_time_17-1.1.3-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_extra_time_17-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_extra_time_17-2.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_extra_time_17 pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_extra_time_17-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-extra-time postgresql-17-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-17-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_extra_time_16-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_extra_time_16-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_extra_time_16-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_extra_time_16-1.1.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_extra_time_16-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_extra_time_16-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_extra_time_16 pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_extra_time_16-1.1.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_extra_time_16-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_extra_time_16-2.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_extra_time_16 pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_extra_time_16-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-extra-time postgresql-16-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-16-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_extra_time_15-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_extra_time_15-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_extra_time_15-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_extra_time_15-1.1.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_extra_time_15-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_extra_time_15-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_extra_time_15 pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_extra_time_15-1.1.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_extra_time_15-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_extra_time_15-2.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_extra_time_15 pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_extra_time_15-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 37.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 37.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-extra-time postgresql-15-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-15-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_extra_time_14-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 35.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_extra_time_14-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm pgdg 2.0.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm pgdg 1.1.3 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_extra_time_14-1.1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm pgdg 1.1.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_extra_time_14-1.1.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_extra_time_14-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_extra_time_14-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm pgdg 2.0.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm pgdg 1.1.3 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-1.1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_extra_time_14 pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm pgdg 1.1.2 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_extra_time_14-1.1.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_extra_time_14-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 2.0.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_extra_time_14-2.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_extra_time_14 pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm pgdg 2.0.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_extra_time_14-2.0.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 40.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-extra-time postgresql-14-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-extra-time/postgresql-14-pg-extra-time_2.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_extra_time` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_extra_time         # 构建 RPM / DEB 包
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

> 来源：[pg_extra_time upstream README](https://github.com/bigsmoke/pg_extra_time)、[PGXN pg_extra_time](https://pgxn.org/dist/pg_extra_time/)、[local metadata](../db/extension.csv)。

`pg_extra_time` 提供一组小型 SQL 函数和类型转换，用于处理 PostgreSQL 核心函数本身不太方便表达的日期/时间、interval 和 range 计算。

```sql
CREATE EXTENSION pg_extra_time;
```

### 转换为秒（浮点数）

对时间戳、时间戳范围和 interval，可以使用 `to_float(...)` 或显式转换到 `float`/`double precision`。时间戳按 Unix epoch 起算；范围和 interval 按持续时间秒数计算。

```sql
SELECT to_float('1970-01-01 00:00:00+0'::timestamptz);  -- 0.0
SELECT to_float('1970-01-01 00:00:00+0'::timestamp);    -- 0.0
SELECT to_float('1 day 1 sec'::interval);                -- 86401.0
SELECT to_float('[2024-06-06 05:58:00,2024-06-06 06:00:10]'::tstzrange);  -- 130.0
SELECT to_float('[2024-06-06 05:58:00,2024-06-06 06:00:10]'::tsrange);    -- 130.0
```

也支持类型转换语法：

```sql
SELECT '1970-01-01 01:03:01+00'::timestamptz::float;    -- 3181.00
SELECT '1 day 1 sec 200 ms'::interval::float;            -- 86401.2
SELECT '[epoch,1970-01-01T01:03:01+00]'::tstzrange::float;  -- 3181.00
```

### 转换为天数

需要保留小数时使用 `days(...)`；需要完整天数的整数结果时使用 `whole_days(...)`。

```sql
SELECT days('[2024-06-06,2024-06-09)'::daterange);       -- 2
SELECT days('[2024-06-06,2024-06-08 06:00]'::tstzrange);  -- 3.25 (fractional days)
SELECT whole_days('[2024-06-06,2024-06-08 18:00]'::tstzrange);  -- 2
SELECT days('10 days 12 hours'::interval);                -- 10.5
SELECT whole_days('10 days 20 hours'::interval);          -- 10
```

`whole_days(interval)` 处理负 interval 时，会先对绝对天数向下取整，再应用符号。

### 统计日期部件

`date_part_parts(part, subpart, timestamp with time zone, timezone)` 返回给定时间戳和时区下，一个较大的日期部件包含多少个较小的日期部件。这对处理夏令时等导致“一天不总是 24 小时”的计算很有用。

```sql
SELECT date_part_parts('month', 'days', '2024-02-12'::timestamptz, 'UTC');  -- 29
SELECT date_part_parts('year', 'days', '2024-08-23'::timestamptz, 'UTC');   -- 366
```

### 构造并拆分范围

使用 `make_tstzrange` 或 `make_tsrange` 从时间戳和 interval 构造范围，也支持负 interval。

```sql
SELECT make_tstzrange('2024-01-05 00:00+00'::timestamptz, '-4 days'::interval);
SELECT make_tsrange('2024-01-01 00:00'::timestamp, '4 days'::interval, '[)');
```

`each_subperiod(tstzrange, interval, round_remainder integer DEFAULT 0)` 将时间戳范围拆分成按 interval 大小切分的片段。余数策略为：`1` 向上补齐到完整片段，`0` 保留最后一个不完整片段，`-1` 丢弃余数。

```sql
SELECT *
FROM each_subperiod(
  '[2023-01-01,2023-04-02)'::tstzrange,
  '1 month'::interval,
  0
);
```

### 提取 interval 与求余

`to_interval(tstzrange)` 使用月、日和微秒单位从时间戳范围中提取 interval。`to_interval(tstzrange, interval[])` 接受按从大到小顺序排列的显式单位，并通过丢弃余数向下取整。

```sql
SELECT to_interval('[2024-01-01,2024-01-05]'::tstzrange);  -- 4 days
SELECT to_interval(
  '[2024-01-01,2024-04-13 01:10]'::tstzrange,
  ARRAY['1 mon'::interval, '1 day'::interval, '1 hour'::interval]
);
```

当需要余数时，使用 `%` 或 `modulo(...)`。

```sql
SELECT '10 seconds 100 milliseconds'::interval % '3 seconds'::interval;
SELECT '[2024-01-01,2024-01-10)'::tstzrange % '4 days'::interval;
```

### 注意事项

对于无界范围，`to_float(tstzrange)` 和 `to_float(tsrange)` 返回正无穷或负无穷；对于空范围返回 `0`。扩展有意不提供整数转换；需要整数天数时请使用 `whole_days(...)`。`extract_days(interval)` 和 `extract_interval(tstzrange, interval[])` 等已弃用别名仍为兼容性保留，但上游推荐改用 `whole_days(...)` 和 `to_interval(...)`。

### 参考

常用公开函数：

| 函数 | 用途 |
|----------|-----|
| `current_timezone()` | 返回当前活跃的 `pg_timezone_names` 行 |
| `date_part_parts(...)` | 统计较大日期部件中包含的较小日期部件数量 |
| `days(...)` | 根据输入类型返回小数或整数天数 |
| `whole_days(...)` | 从 interval 或时间戳范围中取完整天数 |
| `to_float(...)` | 从时间戳、时间戳范围或 interval 得到秒数 |
| `to_interval(...)` | 从 `tstzrange` 提取 interval |
| `make_tsrange(...)` / `make_tstzrange(...)` | 从时间戳加 interval 构造范围 |
| `each_subperiod(...)` | 将 `tstzrange` 拆分为子范围 |
| `modulo(...)` / `%` | interval 或范围相除后的余数 |
