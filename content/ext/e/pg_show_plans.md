---
title: "pg_show_plans"
linkTitle: "pg_show_plans"
description: "打印所有当前正在运行查询的执行计划"
weight: 6210
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/pg_show_plans">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/pg_show_plans</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/pg_show_plans</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_show_plans-2.1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_show_plans-2.1.7.tar.gz</div>
    <div class="ext-card__desc">pg_show_plans-2.1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_show_plans`**](/ext/e/pg_show_plans) | `2.1.7` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6210  | [**`pg_show_plans`**](/ext/e/pg_show_plans) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_store_plans`](/ext/e/pg_store_plans) [`explain_ui`](/ext/e/explain_ui) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pre_prepare`](/ext/e/pre_prepare) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_show_plans` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_show_plans_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-show-plans` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 3 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 |
| el8.aarch64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 3 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 |
| el9.x86_64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 3 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 |
| el9.aarch64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 3 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 4 |
| el10.x86_64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 |
| el10.aarch64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 |
| d12.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| d12.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| d13.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| d13.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| u22.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| u22.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| u24.x86_64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
| u24.aarch64 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 | AVAIL PGDG 2.1.7 1 |
@ el8.x86_64 18 pg_show_plans_18 pg_show_plans_18-2.1.6-1PGDG.rhel8.x86_64.rpm pgdg 2.1.6 19.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_show_plans_18-2.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_show_plans_18 pg_show_plans_18-2.1.6-1PGDG.rhel8.aarch64.rpm pgdg 2.1.6 19.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_show_plans_18-2.1.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_show_plans_18 pg_show_plans_18-2.1.6-1PGDG.rhel9.x86_64.rpm pgdg 2.1.6 19.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_show_plans_18-2.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_show_plans_18 pg_show_plans_18-2.1.6-1PGDG.rhel9.aarch64.rpm pgdg 2.1.6 19.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_show_plans_18-2.1.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_show_plans_18 pg_show_plans_18-2.1.6-1PGDG.rhel10.x86_64.rpm pgdg 2.1.6 20.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_show_plans_18-2.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_show_plans_18 pg_show_plans_18-2.1.6-1PGDG.rhel10.aarch64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_show_plans_18-2.1.6-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg12+1_amd64.deb pgdg 2.1.7 23.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg12+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg13+1_amd64.deb pgdg 2.1.7 23.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg13+1_arm64.deb pgdg 2.1.7 23.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb pgdg 2.1.7 23.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-show-plans postgresql-18-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb pgdg 2.1.7 23.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-18-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.6-1PGDG.rhel8.x86_64.rpm pgdg 2.1.6 19.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_show_plans_17-2.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 19.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_show_plans_17-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.2-1PGDG.rhel8.x86_64.rpm pgdg 2.1.2 18.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_show_plans_17-2.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.6-1PGDG.rhel8.aarch64.rpm pgdg 2.1.6 19.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_show_plans_17-2.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 18.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_show_plans_17-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.2-1PGDG.rhel8.aarch64.rpm pgdg 2.1.2 18.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_show_plans_17-2.1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.6-1PGDG.rhel9.x86_64.rpm pgdg 2.1.6 19.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_show_plans_17-2.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 19.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_show_plans_17-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.2-1PGDG.rhel9.x86_64.rpm pgdg 2.1.2 19.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_show_plans_17-2.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.6-1PGDG.rhel9.aarch64.rpm pgdg 2.1.6 19.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_show_plans_17-2.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 19.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_show_plans_17-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.2-1PGDG.rhel9.aarch64.rpm pgdg 2.1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_show_plans_17-2.1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.6-1PGDG.rhel10.x86_64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_show_plans_17-2.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_show_plans_17 pg_show_plans_17-2.1.3-1PGDG.rhel10.x86_64.rpm pgdg 2.1.3 19.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_show_plans_17-2.1.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.6-1PGDG.rhel10.aarch64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_show_plans_17-2.1.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_show_plans_17 pg_show_plans_17-2.1.3-1PGDG.rhel10.aarch64.rpm pgdg 2.1.3 20.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_show_plans_17-2.1.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg12+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg12+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg13+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg13+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb pgdg 2.1.7 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb pgdg 2.1.7 26.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb pgdg 2.1.7 23.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-show-plans postgresql-17-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-17-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.6-1PGDG.rhel8.x86_64.rpm pgdg 2.1.6 19.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_show_plans_16-2.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 19.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_show_plans_16-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.2-1PGDG.rhel8.x86_64.rpm pgdg 2.1.2 18.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_show_plans_16-2.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 18.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_show_plans_16-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.6-1PGDG.rhel8.aarch64.rpm pgdg 2.1.6 19.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_show_plans_16-2.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 18.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_show_plans_16-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.2-1PGDG.rhel8.aarch64.rpm pgdg 2.1.2 18.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_show_plans_16-2.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 18.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_show_plans_16-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.6-1PGDG.rhel9.x86_64.rpm pgdg 2.1.6 19.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_show_plans_16-2.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 19.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_show_plans_16-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.2-1PGDG.rhel9.x86_64.rpm pgdg 2.1.2 19.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_show_plans_16-2.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 19.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_show_plans_16-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.6-1PGDG.rhel9.aarch64.rpm pgdg 2.1.6 19.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_show_plans_16-2.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 19.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_show_plans_16-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.2-1PGDG.rhel9.aarch64.rpm pgdg 2.1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_show_plans_16-2.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 19.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_show_plans_16-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.6-1PGDG.rhel10.x86_64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_show_plans_16-2.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_show_plans_16 pg_show_plans_16-2.1.3-1PGDG.rhel10.x86_64.rpm pgdg 2.1.3 19.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_show_plans_16-2.1.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.6-1PGDG.rhel10.aarch64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_show_plans_16-2.1.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_show_plans_16 pg_show_plans_16-2.1.3-1PGDG.rhel10.aarch64.rpm pgdg 2.1.3 19.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_show_plans_16-2.1.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg12+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg12+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg13+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg13+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb pgdg 2.1.7 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb pgdg 2.1.7 26.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb pgdg 2.1.7 23.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-show-plans postgresql-16-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-16-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.6-1PGDG.rhel8.x86_64.rpm pgdg 2.1.6 19.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_show_plans_15-2.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 19.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_show_plans_15-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.2-1PGDG.rhel8.x86_64.rpm pgdg 2.1.2 18.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_show_plans_15-2.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 18.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_show_plans_15-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.6-1PGDG.rhel8.aarch64.rpm pgdg 2.1.6 19.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_show_plans_15-2.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 18.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_show_plans_15-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.2-1PGDG.rhel8.aarch64.rpm pgdg 2.1.2 18.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_show_plans_15-2.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 18.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_show_plans_15-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.6-1PGDG.rhel9.x86_64.rpm pgdg 2.1.6 19.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_show_plans_15-2.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 19.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_show_plans_15-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.2-1PGDG.rhel9.x86_64.rpm pgdg 2.1.2 19.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_show_plans_15-2.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 19.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_show_plans_15-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.6-1PGDG.rhel9.aarch64.rpm pgdg 2.1.6 19.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_show_plans_15-2.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 19.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_show_plans_15-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.2-1PGDG.rhel9.aarch64.rpm pgdg 2.1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_show_plans_15-2.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 19.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_show_plans_15-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.6-1PGDG.rhel10.x86_64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_show_plans_15-2.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_show_plans_15 pg_show_plans_15-2.1.3-1PGDG.rhel10.x86_64.rpm pgdg 2.1.3 19.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_show_plans_15-2.1.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.6-1PGDG.rhel10.aarch64.rpm pgdg 2.1.6 20.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_show_plans_15-2.1.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_show_plans_15 pg_show_plans_15-2.1.3-1PGDG.rhel10.aarch64.rpm pgdg 2.1.3 19.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_show_plans_15-2.1.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg12+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg12+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg13+1_amd64.deb pgdg 2.1.7 23.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg13+1_arm64.deb pgdg 2.1.7 23.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb pgdg 2.1.7 27.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb pgdg 2.1.7 26.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb pgdg 2.1.7 23.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-show-plans postgresql-15-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb pgdg 2.1.7 23.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-15-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.6-1PGDG.rhel8.x86_64.rpm pgdg 2.1.6 19.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_show_plans_14-2.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 19.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_show_plans_14-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.2-1PGDG.rhel8.x86_64.rpm pgdg 2.1.2 18.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_show_plans_14-2.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 18.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_show_plans_14-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.6-1PGDG.rhel8.aarch64.rpm pgdg 2.1.6 19.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_show_plans_14-2.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 18.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_show_plans_14-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.2-1PGDG.rhel8.aarch64.rpm pgdg 2.1.2 18.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_show_plans_14-2.1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 18.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_show_plans_14-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.6-1PGDG.rhel9.x86_64.rpm pgdg 2.1.6 19.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_show_plans_14-2.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 19.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_show_plans_14-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.2-1PGDG.rhel9.x86_64.rpm pgdg 2.1.2 19.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_show_plans_14-2.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 19.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_show_plans_14-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.6-1PGDG.rhel9.aarch64.rpm pgdg 2.1.6 19.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_show_plans_14-2.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 19.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_show_plans_14-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.2-1PGDG.rhel9.aarch64.rpm pgdg 2.1.2 19.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_show_plans_14-2.1.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 18.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_show_plans_14-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.6-1PGDG.rhel10.x86_64.rpm pgdg 2.1.6 20.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_show_plans_14-2.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_show_plans_14 pg_show_plans_14-2.1.3-1PGDG.rhel10.x86_64.rpm pgdg 2.1.3 19.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_show_plans_14-2.1.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.6-1PGDG.rhel10.aarch64.rpm pgdg 2.1.6 20.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_show_plans_14-2.1.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_show_plans_14 pg_show_plans_14-2.1.3-1PGDG.rhel10.aarch64.rpm pgdg 2.1.3 19.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_show_plans_14-2.1.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg12+1_amd64.deb pgdg 2.1.7 23.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg12+1_arm64.deb pgdg 2.1.7 22.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg13+1_amd64.deb pgdg 2.1.7 23.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg13+1_arm64.deb pgdg 2.1.7 22.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb pgdg 2.1.7 26.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb pgdg 2.1.7 26.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb pgdg 2.1.7 23.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-show-plans postgresql-14-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb pgdg 2.1.7 22.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-show-plans/postgresql-14-show-plans_2.1.7-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_show_plans` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_show_plans;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_show_plans -v 18  # PG 18
pig ext install -y pg_show_plans -v 17  # PG 17
pig ext install -y pg_show_plans -v 16  # PG 16
pig ext install -y pg_show_plans -v 15  # PG 15
pig ext install -y pg_show_plans -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_show_plans_18       # PG 18
dnf install -y pg_show_plans_17       # PG 17
dnf install -y pg_show_plans_16       # PG 16
dnf install -y pg_show_plans_15       # PG 15
dnf install -y pg_show_plans_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-show-plans   # PG 18
apt install -y postgresql-17-show-plans   # PG 17
apt install -y postgresql-16-show-plans   # PG 16
apt install -y postgresql-15-show-plans   # PG 15
apt install -y postgresql-14-show-plans   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_show_plans;
```
