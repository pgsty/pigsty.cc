---
title: "pgautofailover"
linkTitle: "pgautofailover"
description: "PG 自动故障迁移"
weight: 5150
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hapostgres/pg_auto_failover">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hapostgres/pg_auto_failover</div>
    <div class="ext-card__desc">https://github.com/hapostgres/pg_auto_failover</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgautofailover`**](/ext/e/pgautofailover) | `2.2` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5150  | [**`pgautofailover`**](/ext/e/pgautofailover) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`btree_gist`](/ext/e/btree_gist) [`pglogical`](/ext/e/pglogical) [`pglogical_origin`](/ext/e/pglogical_origin) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgpool_recovery`](/ext/e/pgpool_recovery) [`repmgr`](/ext/e/repmgr) [`pg_checksums`](/ext/e/pg_checksums) [`pgpool_adm`](/ext/e/pgpool_adm) [`bgw_replstatus`](/ext/e/bgw_replstatus) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2` | {{< pgvers "18,17,16,15,14" >}} | `pgautofailover` | `btree_gist` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2` | {{< pgvers "17,16,15,14" >}} | `pg_auto_failover_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-auto-failover` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 3 | AVAIL PGDG 2.2 5 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 3 | AVAIL PGDG 2.2 3 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 3 | AVAIL PGDG 2.2 4 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 3 | AVAIL PGDG 2.2 3 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| d12.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| d12.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| d13.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| d13.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| u22.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| u22.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| u24.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| u24.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| u26.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| u26.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
@ d12.x86_64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg12+1_amd64.deb pgdg 2.2 377.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg12+1_arm64.deb pgdg 2.2 373.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg13+1_amd64.deb pgdg 2.2 379.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg13+1_arm64.deb pgdg 2.2 374.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg22.04+1_amd64.deb pgdg 2.2 378.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg22.04+1_arm64.deb pgdg 2.2 374.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg24.04+1_amd64.deb pgdg 2.2 369.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg24.04+1_arm64.deb pgdg 2.2 364.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg26.04+1_amd64.deb pgdg 2.2 368.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-auto-failover postgresql-18-auto-failover_2.2-3.pgdg26.04+1_arm64.deb pgdg 2.2 364.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-18-auto-failover_2.2-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_auto_failover_17 pg_auto_failover_17-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 812.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_auto_failover_17-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_auto_failover_17 pg_auto_failover_17-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 809.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_auto_failover_17-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_auto_failover_17 pg_auto_failover_17-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 786.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_auto_failover_17-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_auto_failover_17 pg_auto_failover_17-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 789.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_auto_failover_17-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_auto_failover_17 pg_auto_failover_17-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 788.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_auto_failover_17-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_auto_failover_17 pg_auto_failover_17-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 785.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_auto_failover_17-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg12+1_amd64.deb pgdg 2.2 374.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg12+1_arm64.deb pgdg 2.2 370.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg13+1_amd64.deb pgdg 2.2 375.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg13+1_arm64.deb pgdg 2.2 372.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg22.04+1_amd64.deb pgdg 2.2 393.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg22.04+1_arm64.deb pgdg 2.2 388.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg24.04+1_amd64.deb pgdg 2.2 364.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg24.04+1_arm64.deb pgdg 2.2 362.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg26.04+1_amd64.deb pgdg 2.2 366.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-auto-failover postgresql-17-auto-failover_2.2-3.pgdg26.04+1_arm64.deb pgdg 2.2 361.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-17-auto-failover_2.2-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_auto_failover_16 pg_auto_failover_16-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 812.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_auto_failover_16-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_auto_failover_16 pg_auto_failover_16-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 844.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_auto_failover_16-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_auto_failover_16 pg_auto_failover_16-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 809.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_auto_failover_16-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_auto_failover_16 pg_auto_failover_16-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 843.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_auto_failover_16-2.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_auto_failover_16 pg_auto_failover_16-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 786.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_auto_failover_16-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_auto_failover_16 pg_auto_failover_16-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 807.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_auto_failover_16-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_auto_failover_16 pg_auto_failover_16-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 789.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_auto_failover_16-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_auto_failover_16 pg_auto_failover_16-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 817.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_auto_failover_16-2.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_auto_failover_16 pg_auto_failover_16-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 788.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_auto_failover_16-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_auto_failover_16 pg_auto_failover_16-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 785.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_auto_failover_16-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg12+1_amd64.deb pgdg 2.2 368.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg12+1_arm64.deb pgdg 2.2 365.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg13+1_amd64.deb pgdg 2.2 369.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg13+1_arm64.deb pgdg 2.2 366.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg22.04+1_amd64.deb pgdg 2.2 387.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg22.04+1_arm64.deb pgdg 2.2 383.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg24.04+1_amd64.deb pgdg 2.2 358.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg24.04+1_arm64.deb pgdg 2.2 356.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg26.04+1_amd64.deb pgdg 2.2 360.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-auto-failover postgresql-16-auto-failover_2.2-3.pgdg26.04+1_arm64.deb pgdg 2.2 357.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-16-auto-failover_2.2-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 812.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_auto_failover_15-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 843.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_auto_failover_15-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 842.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_auto_failover_15-2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 809.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_auto_failover_15-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 843.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_auto_failover_15-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 841.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_auto_failover_15-2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 789.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_auto_failover_15-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 811.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_auto_failover_15-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.0-1.rhel9.x86_64.rpm pgdg 2.0 812.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_auto_failover_15-2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 792.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_auto_failover_15-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 820.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_auto_failover_15-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.0-1.rhel9.aarch64.rpm pgdg 2.0 821.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_auto_failover_15-2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_auto_failover_15 pg_auto_failover_15-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 791.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_auto_failover_15-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_auto_failover_15 pg_auto_failover_15-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 788.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_auto_failover_15-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg12+1_amd64.deb pgdg 2.2 368.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg12+1_arm64.deb pgdg 2.2 365.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg13+1_amd64.deb pgdg 2.2 370.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg13+1_arm64.deb pgdg 2.2 366.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg22.04+1_amd64.deb pgdg 2.2 391.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg22.04+1_arm64.deb pgdg 2.2 388.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg24.04+1_amd64.deb pgdg 2.2 360.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg24.04+1_arm64.deb pgdg 2.2 357.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg26.04+1_amd64.deb pgdg 2.2 363.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-auto-failover postgresql-15-auto-failover_2.2-3.pgdg26.04+1_arm64.deb pgdg 2.2 357.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-15-auto-failover_2.2-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 810.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auto_failover_14-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 841.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auto_failover_14-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.0-1.rhel8.x86_64.rpm pgdg 2.0 840.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auto_failover_14-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-1.6.4-1.rhel8.x86_64.rpm pgdg 1.6.4 994.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auto_failover_14-1.6.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-1.6.2-1.rhel8.x86_64.rpm pgdg 1.6.2 929.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_auto_failover_14-1.6.2-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 808.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_auto_failover_14-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 841.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_auto_failover_14-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.0-1.rhel8.aarch64.rpm pgdg 2.0 840.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_auto_failover_14-2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 789.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_auto_failover_14-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 811.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_auto_failover_14-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.0-1.rhel9.x86_64.rpm pgdg 2.0 811.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_auto_failover_14-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-1.6.4-1.rhel9.x86_64.rpm pgdg 1.6.4 966.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_auto_failover_14-1.6.4-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 792.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_auto_failover_14-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 820.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_auto_failover_14-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.0-1.rhel9.aarch64.rpm pgdg 2.0 821.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_auto_failover_14-2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_auto_failover_14 pg_auto_failover_14-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 792.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_auto_failover_14-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_auto_failover_14 pg_auto_failover_14-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 789.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_auto_failover_14-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg12+1_amd64.deb pgdg 2.2 362.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg12+1_arm64.deb pgdg 2.2 359.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg13+1_amd64.deb pgdg 2.2 364.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg13+1_arm64.deb pgdg 2.2 360.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg22.04+1_amd64.deb pgdg 2.2 386.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg22.04+1_arm64.deb pgdg 2.2 382.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg24.04+1_amd64.deb pgdg 2.2 354.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg24.04+1_arm64.deb pgdg 2.2 350.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg26.04+1_amd64.deb pgdg 2.2 357.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-auto-failover postgresql-14-auto-failover_2.2-3.pgdg26.04+1_arm64.deb pgdg 2.2 353.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-auto-failover/postgresql-14-auto-failover_2.2-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgautofailover` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgautofailover;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgautofailover -v 18  # PG 18
pig ext install -y pgautofailover -v 17  # PG 17
pig ext install -y pgautofailover -v 16  # PG 16
pig ext install -y pgautofailover -v 15  # PG 15
pig ext install -y pgautofailover -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_auto_failover_18       # PG 18
dnf install -y pg_auto_failover_17       # PG 17
dnf install -y pg_auto_failover_16       # PG 16
dnf install -y pg_auto_failover_15       # PG 15
dnf install -y pg_auto_failover_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-auto-failover   # PG 18
apt install -y postgresql-17-auto-failover   # PG 17
apt install -y postgresql-16-auto-failover   # PG 16
apt install -y postgresql-15-auto-failover   # PG 15
apt install -y postgresql-14-auto-failover   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgautofailover';
```


**创建扩展**：

```sql
CREATE EXTENSION pgautofailover CASCADE;  -- 依赖: btree_gist
```



## 用法

> [pgautofailover: PostgreSQL 自动故障转移](https://github.com/hapostgres/pg_auto_failover)

pg_auto_failover 是一个用于 PostgreSQL 自动故障转移的扩展和服务。它由一个监控节点（运行 `pgautofailover` 扩展）和每个数据节点上由 `pg_autoctl` CLI 管理的 keeper 进程组成。

### 架构

- **监控节点**：安装了 `pgautofailover` 扩展的 PostgreSQL 实例，实现了用于故障转移决策的状态机
- **Keeper**（`pg_autoctl run`）：运行在每个数据节点上，向监控节点报告健康状态并执行状态转换
- 支持 2 个以上节点的设置，默认使用同步复制
- 支持 Citus HA（v2.0 起）

### 关键 CLI 命令

```bash
# 创建监控节点
pg_autoctl create monitor --pgdata /path/to/monitor --pgport 5000

# 创建数据节点（自动分配为主节点或从节点）
pg_autoctl create postgres --pgdata /path/to/data --pgport 5001 --monitor postgres://monitor:5000/pg_auto_failover

# 运行 keeper（前台模式）
pg_autoctl run --pgdata /path/to/data

# 检查集群状态
pg_autoctl show state --pgdata /path/to/monitor

# 执行手动切换
pg_autoctl perform switchover --pgdata /path/to/monitor

# 执行手动故障转移
pg_autoctl perform failover --pgdata /path/to/monitor
```

### 故障转移行为

监控节点跟踪节点健康状态。当从节点不可用或其延迟过高时，会从主节点的 `synchronous_standby_names` 中移除。在从节点恢复健康之前，故障转移/切换操作会被阻止，以防止数据丢失。

### 文档

完整文档：[pg-auto-failover.readthedocs.io](https://pg-auto-failover.readthedocs.io/en/main/)
