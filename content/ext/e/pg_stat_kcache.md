---
title: "pg_stat_kcache"
linkTitle: "pg_stat_kcache"
description: "内核统计信息收集"
weight: 6220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/powa-team/pg_stat_kcache">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">powa-team/pg_stat_kcache</div>
    <div class="ext-card__desc">https://github.com/powa-team/pg_stat_kcache</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_kcache`**](/ext/e/pg_stat_kcache) | `2.3.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6220  | [**`pg_stat_kcache`**](/ext/e/pg_stat_kcache) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_profile`](/ext/e/pg_profile) [`powa`](/ext/e/powa) [`plprofiler`](/ext/e/plprofiler) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_track_settings`](/ext/e/pg_track_settings) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) [`system_stats`](/ext/e/system_stats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_kcache` | `pg_stat_statements` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_kcache_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-stat-kcache` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 4 | AVAIL PGDG 2.3.1 5 | AVAIL PGDG 2.3.1 6 |
| el8.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 4 | AVAIL PGDG 2.3.1 5 | AVAIL PGDG 2.3.1 5 |
| el9.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 4 | AVAIL PGDG 2.3.1 5 | AVAIL PGDG 2.3.1 5 |
| el9.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 4 | AVAIL PGDG 2.3.1 5 | AVAIL PGDG 2.3.1 5 |
| el10.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 2 |
| el10.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 2 | AVAIL PGDG 2.3.1 2 |
| d12.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| d12.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| d13.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| d13.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| u22.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| u22.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| u24.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| u24.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| u26.x86_64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
| u26.aarch64 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 | AVAIL PGDG 2.3.1 1 |
@ el8.x86_64 18 pg_stat_kcache_18 pg_stat_kcache_18-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_kcache_18-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_stat_kcache_18 pg_stat_kcache_18-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_kcache_18-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_stat_kcache_18 pg_stat_kcache_18-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_kcache_18-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_stat_kcache_18 pg_stat_kcache_18-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_kcache_18-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_stat_kcache_18 pg_stat_kcache_18-2.3.1-1PGDG.rhel10.x86_64.rpm pgdg 2.3.1 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_kcache_18-2.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_stat_kcache_18 pg_stat_kcache_18-2.3.1-1PGDG.rhel10.aarch64.rpm pgdg 2.3.1 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_kcache_18-2.3.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb pgdg 2.3.1 36.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb pgdg 2.3.1 36.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb pgdg 2.3.1 36.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb pgdg 2.3.1 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb pgdg 2.3.1 35.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb pgdg 2.3.1 35.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb pgdg 2.3.1 35.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb pgdg 2.3.1 34.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb pgdg 2.3.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-kcache postgresql-18-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb pgdg 2.3.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-18-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_kcache_17-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.0-1PGDG.rhel8.x86_64.rpm pgdg 2.3.0 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_kcache_17-2.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_kcache_17-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.0-1PGDG.rhel8.aarch64.rpm pgdg 2.3.0 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_kcache_17-2.3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_kcache_17-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.0-1PGDG.rhel9.x86_64.rpm pgdg 2.3.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_kcache_17-2.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_kcache_17-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.0-1PGDG.rhel9.aarch64.rpm pgdg 2.3.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_kcache_17-2.3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.1-1PGDG.rhel10.x86_64.rpm pgdg 2.3.1 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_kcache_17-2.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.0-2PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_kcache_17-2.3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.1-1PGDG.rhel10.aarch64.rpm pgdg 2.3.1 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_kcache_17-2.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_stat_kcache_17 pg_stat_kcache_17-2.3.0-2PGDG.rhel10.aarch64.rpm pgdg 2.3.0 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_kcache_17-2.3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb pgdg 2.3.1 37.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb pgdg 2.3.1 36.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb pgdg 2.3.1 36.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb pgdg 2.3.1 36.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb pgdg 2.3.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb pgdg 2.3.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb pgdg 2.3.1 35.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb pgdg 2.3.1 34.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb pgdg 2.3.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-stat-kcache postgresql-17-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb pgdg 2.3.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-17-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_kcache_16-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.0-1PGDG.rhel8.x86_64.rpm pgdg 2.3.0 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_kcache_16-2.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.3-1PGDG.rhel8.x86_64.rpm pgdg 2.2.3 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_kcache_16-2.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2.2 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_kcache_16-2.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_kcache_16-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.0-1PGDG.rhel8.aarch64.rpm pgdg 2.3.0 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_kcache_16-2.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.3-1PGDG.rhel8.aarch64.rpm pgdg 2.2.3 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_kcache_16-2.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2.2 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_kcache_16-2.2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_kcache_16-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.0-1PGDG.rhel9.x86_64.rpm pgdg 2.3.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_kcache_16-2.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.3-1PGDG.rhel9.x86_64.rpm pgdg 2.2.3 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_kcache_16-2.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2.2 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_kcache_16-2.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_kcache_16-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.0-1PGDG.rhel9.aarch64.rpm pgdg 2.3.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_kcache_16-2.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.3-1PGDG.rhel9.aarch64.rpm pgdg 2.2.3 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_kcache_16-2.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2.2 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_kcache_16-2.2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.1-1PGDG.rhel10.x86_64.rpm pgdg 2.3.1 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_kcache_16-2.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.0-2PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_kcache_16-2.3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.1-1PGDG.rhel10.aarch64.rpm pgdg 2.3.1 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_kcache_16-2.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_stat_kcache_16 pg_stat_kcache_16-2.3.0-2PGDG.rhel10.aarch64.rpm pgdg 2.3.0 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_kcache_16-2.3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb pgdg 2.3.1 37.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb pgdg 2.3.1 36.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb pgdg 2.3.1 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb pgdg 2.3.1 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb pgdg 2.3.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb pgdg 2.3.1 38.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb pgdg 2.3.1 35.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb pgdg 2.3.1 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb pgdg 2.3.1 35.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-stat-kcache postgresql-16-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb pgdg 2.3.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-16-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_kcache_15-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.0-1PGDG.rhel8.x86_64.rpm pgdg 2.3.0 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_kcache_15-2.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.3-1PGDG.rhel8.x86_64.rpm pgdg 2.2.3 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_kcache_15-2.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2.2 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_kcache_15-2.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.1-2.rhel8.x86_64.rpm pgdg 2.2.1 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_kcache_15-2.2.1-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_kcache_15-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.0-1PGDG.rhel8.aarch64.rpm pgdg 2.3.0 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_kcache_15-2.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.3-1PGDG.rhel8.aarch64.rpm pgdg 2.2.3 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_kcache_15-2.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2.2 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_kcache_15-2.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.1-2.rhel8.aarch64.rpm pgdg 2.2.1 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_kcache_15-2.2.1-2.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_kcache_15-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.0-1PGDG.rhel9.x86_64.rpm pgdg 2.3.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_kcache_15-2.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.3-1PGDG.rhel9.x86_64.rpm pgdg 2.2.3 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_kcache_15-2.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2.2 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_kcache_15-2.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.1-2.rhel9.x86_64.rpm pgdg 2.2.1 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_kcache_15-2.2.1-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_kcache_15-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.0-1PGDG.rhel9.aarch64.rpm pgdg 2.3.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_kcache_15-2.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.3-1PGDG.rhel9.aarch64.rpm pgdg 2.2.3 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_kcache_15-2.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2.2 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_kcache_15-2.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.2.1-2.rhel9.aarch64.rpm pgdg 2.2.1 46.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_kcache_15-2.2.1-2.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.1-1PGDG.rhel10.x86_64.rpm pgdg 2.3.1 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_stat_kcache_15-2.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.0-2PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_stat_kcache_15-2.3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.1-1PGDG.rhel10.aarch64.rpm pgdg 2.3.1 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_kcache_15-2.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_stat_kcache_15 pg_stat_kcache_15-2.3.0-2PGDG.rhel10.aarch64.rpm pgdg 2.3.0 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_kcache_15-2.3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb pgdg 2.3.1 37.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb pgdg 2.3.1 36.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb pgdg 2.3.1 36.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb pgdg 2.3.1 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb pgdg 2.3.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb pgdg 2.3.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb pgdg 2.3.1 35.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb pgdg 2.3.1 34.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb pgdg 2.3.1 35.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-stat-kcache postgresql-15-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb pgdg 2.3.1 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-15-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_kcache_14-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.0-1PGDG.rhel8.x86_64.rpm pgdg 2.3.0 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_kcache_14-2.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.3-1PGDG.rhel8.x86_64.rpm pgdg 2.2.3 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_kcache_14-2.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2.2 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_kcache_14-2.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.1-2.rhel8.x86_64.rpm pgdg 2.2.1 47.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_kcache_14-2.2.1-2.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.0-2.rhel8.x86_64.rpm pgdg 2.2.0 46.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_kcache_14-2.2.0-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_kcache_14-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.0-1PGDG.rhel8.aarch64.rpm pgdg 2.3.0 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_kcache_14-2.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.3-1PGDG.rhel8.aarch64.rpm pgdg 2.2.3 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_kcache_14-2.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2.2 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_kcache_14-2.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.1-2.rhel8.aarch64.rpm pgdg 2.2.1 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_kcache_14-2.2.1-2.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_kcache_14-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.0-1PGDG.rhel9.x86_64.rpm pgdg 2.3.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_kcache_14-2.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.3-1PGDG.rhel9.x86_64.rpm pgdg 2.2.3 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_kcache_14-2.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2.2 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_kcache_14-2.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.1-2.rhel9.x86_64.rpm pgdg 2.2.1 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_kcache_14-2.2.1-2.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_kcache_14-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.0-1PGDG.rhel9.aarch64.rpm pgdg 2.3.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_kcache_14-2.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.3-1PGDG.rhel9.aarch64.rpm pgdg 2.2.3 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_kcache_14-2.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2.2 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_kcache_14-2.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.2.1-2.rhel9.aarch64.rpm pgdg 2.2.1 46.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_kcache_14-2.2.1-2.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.1-1PGDG.rhel10.x86_64.rpm pgdg 2.3.1 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_stat_kcache_14-2.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.0-2PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_stat_kcache_14-2.3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.1-1PGDG.rhel10.aarch64.rpm pgdg 2.3.1 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_kcache_14-2.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_stat_kcache_14 pg_stat_kcache_14-2.3.0-2PGDG.rhel10.aarch64.rpm pgdg 2.3.0 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_kcache_14-2.3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb pgdg 2.3.1 36.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb pgdg 2.3.1 36.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb pgdg 2.3.1 36.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb pgdg 2.3.1 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb pgdg 2.3.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb pgdg 2.3.1 38.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb pgdg 2.3.1 35.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb pgdg 2.3.1 34.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb pgdg 2.3.1 35.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-stat-kcache postgresql-14-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb pgdg 2.3.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-kcache/postgresql-14-pg-stat-kcache_2.3.1-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_stat_kcache` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stat_kcache;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stat_kcache -v 18  # PG 18
pig ext install -y pg_stat_kcache -v 17  # PG 17
pig ext install -y pg_stat_kcache -v 16  # PG 16
pig ext install -y pg_stat_kcache -v 15  # PG 15
pig ext install -y pg_stat_kcache -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stat_kcache_18       # PG 18
dnf install -y pg_stat_kcache_17       # PG 17
dnf install -y pg_stat_kcache_16       # PG 16
dnf install -y pg_stat_kcache_15       # PG 15
dnf install -y pg_stat_kcache_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-stat-kcache   # PG 18
apt install -y postgresql-17-pg-stat-kcache   # PG 17
apt install -y postgresql-16-pg-stat-kcache   # PG 16
apt install -y postgresql-15-pg-stat-kcache   # PG 15
apt install -y postgresql-14-pg-stat-kcache   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_stat_statements, pg_stat_kcache';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_kcache CASCADE;  -- 依赖: pg_stat_statements
```




## 用法

> [pg_stat_kcache: PostgreSQL 内核缓存统计](https://github.com/powa-team/pg_stat_kcache)

pg_stat_kcache 收集文件系统层实际读写的统计信息，以及每个查询的 CPU 使用情况。它依赖 `pg_stat_statements`。

### 视图

**`pg_stat_kcache`** -- 按数据库汇总的统计信息：

| 列名 | 类型 | 描述 |
|--------|------|-------------|
| `datname` | name | 数据库名称 |
| `exec_user_time` | double precision | 执行语句的用户 CPU 时间（秒） |
| `exec_system_time` | double precision | 执行语句的系统 CPU 时间（秒） |
| `exec_reads` | bigint | 文件系统层读取的字节数 |
| `exec_reads_blks` | bigint | 文件系统层读取的 8K 块数 |
| `exec_writes` | bigint | 文件系统层写入的字节数 |
| `exec_writes_blks` | bigint | 文件系统层写入的 8K 块数 |
| `plan_user_time` | double precision | 规划阶段的用户 CPU 时间（启用追踪时） |
| `plan_system_time` | double precision | 规划阶段的系统 CPU 时间（启用追踪时） |

**`pg_stat_kcache_detail`** -- 按查询的统计信息，包含查询文本、角色和数据库。

### 函数

```sql
-- 重置所有已收集的统计信息
SELECT pg_stat_kcache_reset();
```

### 配置

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pg_stat_kcache.linux_hz` | -1 | Linux CONFIG_HZ（自动检测） |
| `pg_stat_kcache.track` | `top` | 追踪级别：`top`、`all` 或 `none` |
| `pg_stat_kcache.track_planning` | `off` | 追踪规划统计信息（PG 13+） |

### 示例

```sql
SELECT datname, exec_user_time, exec_system_time, exec_reads, exec_writes
FROM pg_stat_kcache;

SELECT query, exec_user_time, exec_system_time, exec_reads
FROM pg_stat_kcache_detail
ORDER BY exec_user_time DESC
LIMIT 10;
```
