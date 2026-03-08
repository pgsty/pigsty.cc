---
title: "pg_qualstats"
linkTitle: "pg_qualstats"
description: "收集有关 quals 的统计信息的扩展"
weight: 6240
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/powa-team/pg_qualstats">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">powa-team/pg_qualstats</div>
    <div class="ext-card__desc">https://github.com/powa-team/pg_qualstats</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_qualstats`**](/ext/e/pg_qualstats) | `2.1.3` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6240  | [**`pg_qualstats`**](/ext/e/pg_qualstats) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`hypopg`](/ext/e/hypopg) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`index_advisor`](/ext/e/index_advisor) [`pre_prepare`](/ext/e/pre_prepare) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_qualstats` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_qualstats_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-qualstats` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 4 |
| el8.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 |
| el9.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 |
| el9.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 | AVAIL PGDG 2.1.1 3 |
| el10.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 1 |
| el10.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 1 | AVAIL PGDG 2.1.1 1 |
| d12.x86_64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| d12.aarch64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| d13.x86_64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| d13.aarch64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| u22.x86_64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| u22.aarch64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| u24.x86_64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
| u24.aarch64 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 | AVAIL PGDG 2.1.3 1 |
@ el8.x86_64 18 pg_qualstats_18 pg_qualstats_18-2.1.2-1PGDG.rhel8.x86_64.rpm pgdg 2.1.2 38.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_qualstats_18-2.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_qualstats_18 pg_qualstats_18-2.1.2-1PGDG.rhel8.aarch64.rpm pgdg 2.1.2 37.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_qualstats_18-2.1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_qualstats_18 pg_qualstats_18-2.1.2-1PGDG.rhel9.x86_64.rpm pgdg 2.1.2 36.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_qualstats_18-2.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_qualstats_18 pg_qualstats_18-2.1.2-1PGDG.rhel9.aarch64.rpm pgdg 2.1.2 35.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_qualstats_18-2.1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_qualstats_18 pg_qualstats_18-2.1.2-1PGDG.rhel10.x86_64.rpm pgdg 2.1.2 36.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_qualstats_18-2.1.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_qualstats_18 pg_qualstats_18-2.1.2-1PGDG.rhel10.aarch64.rpm pgdg 2.1.2 36.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_qualstats_18-2.1.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb pgdg 2.1.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb pgdg 2.1.3 55.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb pgdg 2.1.3 56.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb pgdg 2.1.3 55.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb pgdg 2.1.3 56.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb pgdg 2.1.3 54.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb pgdg 2.1.3 54.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-qualstats postgresql-18-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb pgdg 2.1.3 53.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-18-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_qualstats_17 pg_qualstats_17-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 37.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_qualstats_17-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_qualstats_17 pg_qualstats_17-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 36.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_qualstats_17-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_qualstats_17 pg_qualstats_17-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 36.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_qualstats_17-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_qualstats_17 pg_qualstats_17-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 35.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_qualstats_17-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_qualstats_17 pg_qualstats_17-2.1.1-2PGDG.rhel10.x86_64.rpm pgdg 2.1.1 36.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_qualstats_17-2.1.1-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_qualstats_17 pg_qualstats_17-2.1.1-2PGDG.rhel10.aarch64.rpm pgdg 2.1.1 36.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_qualstats_17-2.1.1-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb pgdg 2.1.3 56.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb pgdg 2.1.3 55.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb pgdg 2.1.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb pgdg 2.1.3 56.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb pgdg 2.1.3 60.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb pgdg 2.1.3 58.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb pgdg 2.1.3 54.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-qualstats postgresql-17-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb pgdg 2.1.3 53.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-17-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 37.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_qualstats_16-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 36.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_qualstats_16-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.0.4-3PGDG.rhel8.x86_64.rpm pgdg 2.0.4 35.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_qualstats_16-2.0.4-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 36.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_qualstats_16-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 36.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_qualstats_16-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.0.4-3PGDG.rhel8.aarch64.rpm pgdg 2.0.4 34.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_qualstats_16-2.0.4-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 36.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_qualstats_16-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 35.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_qualstats_16-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.0.4-3PGDG.rhel9.x86_64.rpm pgdg 2.0.4 34.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_qualstats_16-2.0.4-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 35.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_qualstats_16-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 34.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_qualstats_16-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.0.4-3PGDG.rhel9.aarch64.rpm pgdg 2.0.4 33.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_qualstats_16-2.0.4-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_qualstats_16 pg_qualstats_16-2.1.1-2PGDG.rhel10.x86_64.rpm pgdg 2.1.1 36.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_qualstats_16-2.1.1-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_qualstats_16 pg_qualstats_16-2.1.1-2PGDG.rhel10.aarch64.rpm pgdg 2.1.1 36.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_qualstats_16-2.1.1-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb pgdg 2.1.3 56.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb pgdg 2.1.3 55.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb pgdg 2.1.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb pgdg 2.1.3 56.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb pgdg 2.1.3 60.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb pgdg 2.1.3 58.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb pgdg 2.1.3 54.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-qualstats postgresql-16-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb pgdg 2.1.3 53.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-16-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 37.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_qualstats_15-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 37.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_qualstats_15-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.0.4-1.rhel8.x86_64.rpm pgdg 2.0.4 68.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_qualstats_15-2.0.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 36.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_qualstats_15-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 36.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_qualstats_15-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.0.4-1.rhel8.aarch64.rpm pgdg 2.0.4 66.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_qualstats_15-2.0.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 36.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_qualstats_15-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 35.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_qualstats_15-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.0.4-1.rhel9.x86_64.rpm pgdg 2.0.4 68.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_qualstats_15-2.0.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 35.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_qualstats_15-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 34.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_qualstats_15-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.0.4-1.rhel9.aarch64.rpm pgdg 2.0.4 67.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_qualstats_15-2.0.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_qualstats_15 pg_qualstats_15-2.1.1-2PGDG.rhel10.x86_64.rpm pgdg 2.1.1 36.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_qualstats_15-2.1.1-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_qualstats_15 pg_qualstats_15-2.1.1-2PGDG.rhel10.aarch64.rpm pgdg 2.1.1 36.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_qualstats_15-2.1.1-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb pgdg 2.1.3 56.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb pgdg 2.1.3 55.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb pgdg 2.1.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb pgdg 2.1.3 56.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb pgdg 2.1.3 60.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb pgdg 2.1.3 58.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb pgdg 2.1.3 54.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-qualstats postgresql-15-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb pgdg 2.1.3 53.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-15-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 37.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_qualstats_14-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 37.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_qualstats_14-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.0.4-1.rhel8.x86_64.rpm pgdg 2.0.4 68.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_qualstats_14-2.0.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.0.3-1.rhel8.x86_64.rpm pgdg 2.0.3 67.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_qualstats_14-2.0.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 36.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_qualstats_14-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 36.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_qualstats_14-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.0.4-1.rhel8.aarch64.rpm pgdg 2.0.4 67.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_qualstats_14-2.0.4-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 36.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_qualstats_14-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 35.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_qualstats_14-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.0.4-1.rhel9.x86_64.rpm pgdg 2.0.4 68.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_qualstats_14-2.0.4-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 35.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_qualstats_14-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 34.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_qualstats_14-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.0.4-1.rhel9.aarch64.rpm pgdg 2.0.4 67.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_qualstats_14-2.0.4-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_qualstats_14 pg_qualstats_14-2.1.1-2PGDG.rhel10.x86_64.rpm pgdg 2.1.1 36.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_qualstats_14-2.1.1-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_qualstats_14 pg_qualstats_14-2.1.1-2PGDG.rhel10.aarch64.rpm pgdg 2.1.1 36.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_qualstats_14-2.1.1-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb pgdg 2.1.3 57.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb pgdg 2.1.3 56.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb pgdg 2.1.3 57.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb pgdg 2.1.3 56.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb pgdg 2.1.3 61.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb pgdg 2.1.3 59.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb pgdg 2.1.3 54.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-qualstats postgresql-14-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb pgdg 2.1.3 53.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-qualstats/postgresql-14-pg-qualstats_2.1.3-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_qualstats` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_qualstats;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_qualstats -v 18  # PG 18
pig ext install -y pg_qualstats -v 17  # PG 17
pig ext install -y pg_qualstats -v 16  # PG 16
pig ext install -y pg_qualstats -v 15  # PG 15
pig ext install -y pg_qualstats -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_qualstats_18       # PG 18
dnf install -y pg_qualstats_17       # PG 17
dnf install -y pg_qualstats_16       # PG 16
dnf install -y pg_qualstats_15       # PG 15
dnf install -y pg_qualstats_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-qualstats   # PG 18
apt install -y postgresql-17-pg-qualstats   # PG 17
apt install -y postgresql-16-pg-qualstats   # PG 16
apt install -y postgresql-15-pg-qualstats   # PG 15
apt install -y postgresql-14-pg-qualstats   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_qualstats';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_qualstats;
```
