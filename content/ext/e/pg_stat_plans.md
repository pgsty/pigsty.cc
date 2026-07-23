---
title: "pg_stat_plans"
linkTitle: "pg_stat_plans"
description: "跟踪查询计划级别的调用次数、执行时间与示例 EXPLAIN 文本。"
weight: 6050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pganalyze/pg_stat_plans">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pganalyze/pg_stat_plans</div>
    <div class="ext-card__desc">https://github.com/pganalyze/pg_stat_plans</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_plans`**](/ext/e/pg_stat_plans) | `2.1.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6050  | [**`pg_stat_plans`**](/ext/e/pg_stat_plans) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.0` | {{< pgvers "18,17,16" >}} | `pg_stat_plans` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.0` | {{< pgvers "18,17,16" >}} | `pg_stat_plans_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-stat-plans` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el8.aarch64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.aarch64 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | N/A PGDG - 0 | N/A PGDG - 0 |
@ el8.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.1.0 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 2.1.0 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.1.0 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 2.1.0 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.1.0 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 2.1.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_plans_18-2.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.0 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_stat_plans_18 pg_stat_plans_18-2.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.1.0 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_plans_18-2.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 85.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg12+1_amd64.deb pgdg 2.0.0 81.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 83.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg12+1_arm64.deb pgdg 2.0.0 79.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 85.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg13+1_amd64.deb pgdg 2.0.0 81.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 83.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg13+1_arm64.deb pgdg 2.0.0 79.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 89.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg22.04+1_amd64.deb pgdg 2.0.0 84.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 86.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg22.04+1_arm64.deb pgdg 2.0.0 82.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 83.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg24.04+1_amd64.deb pgdg 2.0.0 80.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 81.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg24.04+1_arm64.deb pgdg 2.0.0 78.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 82.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg26.04+1_amd64.deb pgdg 2.0.0 80.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 80.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.1.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-plans postgresql-18-pg-stat-plans_2.0.0-1.pgdg26.04+1_arm64.deb pgdg 2.0.0 77.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-18-pg-stat-plans_2.0.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.1.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 2.1.0 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.1.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 2.1.0 43.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.1.0 45.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 45.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 2.1.0 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_plans_17-2.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_stat_plans_17 pg_stat_plans_17-2.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.1.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_plans_17-2.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 97.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 101.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 98.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 109.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 106.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 98.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 95.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 98.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-stat-plans postgresql-17-pg-stat-plans_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 95.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-17-pg-stat-plans_2.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 46.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.1.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 2.1.0 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.1.0 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 2.1.0 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.1.0 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 2.1.0 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_plans_16-2.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_stat_plans_16 pg_stat_plans_16-2.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.1.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_plans_16-2.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 100.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 97.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 97.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 107.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 104.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 98.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 97.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-stat-plans postgresql-16-pg-stat-plans_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-plans/postgresql-16-pg-stat-plans_2.1.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_stat_plans` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stat_plans;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stat_plans -v 18  # PG 18
pig ext install -y pg_stat_plans -v 17  # PG 17
pig ext install -y pg_stat_plans -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stat_plans_18       # PG 18
dnf install -y pg_stat_plans_17       # PG 17
dnf install -y pg_stat_plans_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-stat-plans   # PG 18
apt install -y postgresql-17-pg-stat-plans   # PG 17
apt install -y postgresql-16-pg-stat-plans   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/pg_stat_plans';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_plans;
```




## 用法

来源：[README](https://github.com/pganalyze/pg_stat_plans/blob/main/README.md)，[v2.1.0 release](https://github.com/pganalyze/pg_stat_plans/releases/tag/v2.1.0)，[SQL objects](https://github.com/pganalyze/pg_stat_plans/blob/main/pg_stat_plans--2.0.sql)

`pg_stat_plans` 用于跟踪 PostgreSQL 执行计划形状的聚合统计。它把计划树哈希为 plan ID，把示例 `EXPLAIN` 文本存放在共享内存中，并帮助识别同一个 query ID 是否出现了不同计划。

### 启用

`pg_stat_plans` 需要 PostgreSQL 16 或更新版本，并且必须在服务器启动时加载：

```conf
shared_preload_libraries = 'pg_stat_plans'
pg_stat_plans.compress = 'zstd'
```

```sql
CREATE EXTENSION pg_stat_plans;
```

通常建议和 `pg_stat_statements` 一起使用，便于把 plan ID 与查询文本关联起来。

### 查询计划

```sql
SELECT *
FROM pg_stat_plans;
```

视图包含 `userid`、`dbid`、`toplevel`、`queryid`、`planid`、`calls`、`total_exec_time`、`plan`。如果只需要统计而不需要计划文本：

```sql
SELECT *
FROM pg_stat_plans(false);
```

按 `queryid` 汇总可以查看同一个归一化查询选择过哪些计划形状：

```sql
SELECT queryid, planid, calls, total_exec_time / NULLIF(calls, 0) AS avg_exec_time
FROM pg_stat_plans(false)
ORDER BY queryid, avg_exec_time DESC;
```

### 运行中查询

在 PostgreSQL 18 及更新版本上，`pg_stat_plans_activity` 可以显示当前运行中查询的 plan ID 和示例计划：

```sql
SELECT *
FROM pg_stat_plans_activity;
```

### 重置与配置

```sql
SELECT pg_stat_plans_reset();
```

重要设置包括 `pg_stat_plans.max`、`pg_stat_plans.max_size`、`pg_stat_plans.max_plan_memory`、`pg_stat_plans.track`、`pg_stat_plans.compress`、`pg_stat_plans.plan_advice`。

### 注意事项

统计基于 PostgreSQL cumulative statistics 系统，因此计数器会在事务结束时刷新，并可能有延迟。Plan ID 描述的是计划形状，分区、类型转换或表达式细节变化都可能导致 plan ID 变化。
