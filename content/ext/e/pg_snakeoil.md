---
title: "pg_snakeoil"
linkTitle: "pg_snakeoil"
description: "PostgreSQL动态链接库反病毒功能"
weight: 7380
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/credativ/pg_snakeoil">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">credativ/pg_snakeoil</div>
    <div class="ext-card__desc">https://github.com/credativ/pg_snakeoil</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_snakeoil-1.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_snakeoil-1.4.tar.gz</div>
    <div class="ext-card__desc">pg_snakeoil-1.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_snakeoil`**](/ext/e/pg_snakeoil) | `1.4` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7380  | [**`pg_snakeoil`**](/ext/e/pg_snakeoil) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_crash`](/ext/e/pg_crash) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pg_savior`](/ext/e/pg_savior) [`pg_surgery`](/ext/e/pg_surgery) [`pageinspect`](/ext/e/pageinspect) [`pg_catcheck`](/ext/e/pg_catcheck) [`amcheck`](/ext/e/amcheck) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require clamV libs


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_snakeoil` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_snakeoil_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-snakeoil` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el8.aarch64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el9.x86_64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el9.aarch64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el10.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el10.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| d12.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| d12.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| d13.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| d13.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| u22.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| u22.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| u24.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| u24.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
@ el8.x86_64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_snakeoil_18-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 15.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_snakeoil_18-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_snakeoil_18-1.4-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 15.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_snakeoil_18-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_snakeoil_18-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 15.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_snakeoil_18-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 16.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_snakeoil_18-1.4-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 15.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_snakeoil_18-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_snakeoil_18-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_snakeoil_18 pg_snakeoil_18-1.4-1PIGSTY.el10.aarch64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_snakeoil_18-1.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg12+2_amd64.deb pgdg 1.4 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg12+2_amd64.deb
@ d12.aarch64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg12+2_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg12+2_arm64.deb
@ d13.x86_64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg13+1_amd64.deb pgdg 1.4 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg13+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg22.04+1_amd64.deb pgdg 1.4 16.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg22.04+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg24.04+1_amd64.deb pgdg 1.4 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-snakeoil postgresql-18-snakeoil_1.4-3.pgdg24.04+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-18-snakeoil_1.4-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_snakeoil_17-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 15.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_snakeoil_17-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_snakeoil_17-1.4-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 15.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_snakeoil_17-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_snakeoil_17-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 15.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_snakeoil_17-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 16.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_snakeoil_17-1.4-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 15.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_snakeoil_17-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_snakeoil_17-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PGDG.rhel10.x86_64.rpm pgdg 1.4 15.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_snakeoil_17-1.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PIGSTY.el10.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_snakeoil_17-1.4-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_snakeoil_17 pg_snakeoil_17-1.4-1PGDG.rhel10.aarch64.rpm pgdg 1.4 15.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_snakeoil_17-1.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg12+2_amd64.deb pgdg 1.4 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg12+2_amd64.deb
@ d12.aarch64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg12+2_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg12+2_arm64.deb
@ d13.x86_64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg13+1_amd64.deb pgdg 1.4 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg13+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg22.04+1_amd64.deb pgdg 1.4 17.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg22.04+1_arm64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg24.04+1_amd64.deb pgdg 1.4 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-snakeoil postgresql-17-snakeoil_1.4-3.pgdg24.04+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-17-snakeoil_1.4-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_snakeoil_16-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 15.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_snakeoil_16-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_snakeoil_16-1.4-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 15.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_snakeoil_16-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_snakeoil_16-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 15.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_snakeoil_16-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 16.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_snakeoil_16-1.4-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 15.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_snakeoil_16-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 16.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_snakeoil_16-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PGDG.rhel10.x86_64.rpm pgdg 1.4 15.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_snakeoil_16-1.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PIGSTY.el10.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_snakeoil_16-1.4-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_snakeoil_16 pg_snakeoil_16-1.4-1PGDG.rhel10.aarch64.rpm pgdg 1.4 15.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_snakeoil_16-1.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg12+2_amd64.deb pgdg 1.4 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg12+2_amd64.deb
@ d12.aarch64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg12+2_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg12+2_arm64.deb
@ d13.x86_64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg13+1_amd64.deb pgdg 1.4 16.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg13+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg22.04+1_amd64.deb pgdg 1.4 17.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg22.04+1_arm64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg24.04+1_amd64.deb pgdg 1.4 16.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-snakeoil postgresql-16-snakeoil_1.4-3.pgdg24.04+1_arm64.deb pgdg 1.4 16.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-16-snakeoil_1.4-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_snakeoil_15-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 15.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_snakeoil_15-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_snakeoil_15-1.4-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 15.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_snakeoil_15-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_snakeoil_15-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 15.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_snakeoil_15-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_snakeoil_15-1.4-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 15.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_snakeoil_15-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_snakeoil_15-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PGDG.rhel10.x86_64.rpm pgdg 1.4 16.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_snakeoil_15-1.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PIGSTY.el10.aarch64.rpm pigsty 1.4 16.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_snakeoil_15-1.4-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_snakeoil_15 pg_snakeoil_15-1.4-1PGDG.rhel10.aarch64.rpm pgdg 1.4 16.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_snakeoil_15-1.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg12+2_amd64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg12+2_amd64.deb
@ d12.aarch64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg12+2_arm64.deb pgdg 1.4 16.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg12+2_arm64.deb
@ d13.x86_64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg13+1_amd64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg13+1_arm64.deb pgdg 1.4 16.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg22.04+1_amd64.deb pgdg 1.4 17.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg22.04+1_arm64.deb pgdg 1.4 17.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg24.04+1_amd64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-snakeoil postgresql-15-snakeoil_1.4-3.pgdg24.04+1_arm64.deb pgdg 1.4 16.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-15-snakeoil_1.4-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_snakeoil_14-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 15.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_snakeoil_14-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_snakeoil_14-1.4-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 15.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_snakeoil_14-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_snakeoil_14-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 15.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_snakeoil_14-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 16.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_snakeoil_14-1.4-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 15.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_snakeoil_14-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 16.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_snakeoil_14-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PGDG.rhel10.x86_64.rpm pgdg 1.4 16.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_snakeoil_14-1.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PIGSTY.el10.aarch64.rpm pigsty 1.4 16.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_snakeoil_14-1.4-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_snakeoil_14 pg_snakeoil_14-1.4-1PGDG.rhel10.aarch64.rpm pgdg 1.4 16.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_snakeoil_14-1.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg12+2_amd64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg12+2_amd64.deb
@ d12.aarch64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg12+2_arm64.deb pgdg 1.4 16.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg12+2_arm64.deb
@ d13.x86_64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg13+1_amd64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg13+1_arm64.deb pgdg 1.4 16.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg22.04+1_amd64.deb pgdg 1.4 17.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg22.04+1_arm64.deb pgdg 1.4 17.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg24.04+1_amd64.deb pgdg 1.4 17.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-snakeoil postgresql-14-snakeoil_1.4-3.pgdg24.04+1_arm64.deb pgdg 1.4 16.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-snakeoil/postgresql-14-snakeoil_1.4-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_snakeoil` 扩展的 RPM 包：

```bash
pig build pkg pg_snakeoil         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_snakeoil` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_snakeoil;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_snakeoil -v 18  # PG 18
pig ext install -y pg_snakeoil -v 17  # PG 17
pig ext install -y pg_snakeoil -v 16  # PG 16
pig ext install -y pg_snakeoil -v 15  # PG 15
pig ext install -y pg_snakeoil -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_snakeoil_18       # PG 18
dnf install -y pg_snakeoil_17       # PG 17
dnf install -y pg_snakeoil_16       # PG 16
dnf install -y pg_snakeoil_15       # PG 15
dnf install -y pg_snakeoil_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-snakeoil   # PG 18
apt install -y postgresql-17-snakeoil   # PG 17
apt install -y postgresql-16-snakeoil   # PG 16
apt install -y postgresql-15-snakeoil   # PG 15
apt install -y postgresql-14-snakeoil   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_snakeoil';
```

