---
title: "plan_filter"
linkTitle: "plan_filter"
description: "基于计划估算成本的语句与事务负载保护"
weight: 2810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgexperts/pg_plan_filter">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgexperts/pg_plan_filter</div>
    <div class="ext-card__desc">https://github.com/pgexperts/pg_plan_filter</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_plan_filter-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_plan_filter-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_plan_filter-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_plan_filter`**](/ext/e/plan_filter) | `1.0.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2810  | [**`plan_filter`**](/ext/e/plan_filter) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pg_kpart`](/ext/e/pg_kpart) [`pg_command_fw`](/ext/e/pg_command_fw) [`hypopg`](/ext/e/hypopg) [`index_advisor`](/ext/e/index_advisor) [`pg_qualstats`](/ext/e/pg_qualstats) [`online_advisor`](/ext/e/online_advisor) [`block_copy_command`](/ext/e/block_copy_command) [`pg_stat_plans`](/ext/e/pg_stat_plans) [`pg_readonly`](/ext/e/pg_readonly) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Not a security boundary: planner costs are user-settable; limits default off; DEB indexed 0.0.1/recipe 1.0.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_plan_filter` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_plan_filter_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-plan-filter` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 |
| el8.aarch64 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 |
| el9.x86_64 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 |
| el9.aarch64 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 |
| el10.x86_64 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 | AVAIL PGDG 1.0.0 2 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-1.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.0 16.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_plan_filter_18-1.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-1.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_plan_filter_18-1.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-1.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_plan_filter_18-1.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-1.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 15.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_plan_filter_18-1.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-1.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_plan_filter_18-1.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_plan_filter_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_plan_filter_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 8.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-plan-filter postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 8.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-18-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-1.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.0 16.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_plan_filter_17-1.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-1.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_plan_filter_17-1.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-1.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_plan_filter_17-1.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-1.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 15.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_plan_filter_17-1.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-1.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_plan_filter_17-1.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_plan_filter_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 10.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_plan_filter_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 8.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-plan-filter postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 8.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-17-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-1.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.0 16.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_plan_filter_16-1.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-1.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_plan_filter_16-1.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-1.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_plan_filter_16-1.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-1.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 15.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_plan_filter_16-1.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-1.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_plan_filter_16-1.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_plan_filter_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 10.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_plan_filter_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 8.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-plan-filter postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 8.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-16-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-1.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.0 16.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_plan_filter_15-1.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-1.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_plan_filter_15-1.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-1.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_plan_filter_15-1.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-1.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 15.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_plan_filter_15-1.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-1.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_plan_filter_15-1.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_plan_filter_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 10.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_plan_filter_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 8.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-plan-filter postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 8.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-15-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-1.0.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.0 16.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_plan_filter_14-1.0.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-1.0.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_plan_filter_14-1.0.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-1.0.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_plan_filter_14-1.0.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-1.0.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 15.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_plan_filter_14-1.0.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-1.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 16.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_plan_filter_14-1.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_plan_filter_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 10.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_plan_filter_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 9.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 9.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 8.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-plan-filter postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 8.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-plan-filter/postgresql-14-pg-plan-filter_0.0.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_plan_filter` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_plan_filter         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_plan_filter` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_plan_filter;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_plan_filter -v 18  # PG 18
pig ext install -y pg_plan_filter -v 17  # PG 17
pig ext install -y pg_plan_filter -v 16  # PG 16
pig ext install -y pg_plan_filter -v 15  # PG 15
pig ext install -y pg_plan_filter -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_plan_filter_18       # PG 18
dnf install -y pg_plan_filter_17       # PG 17
dnf install -y pg_plan_filter_16       # PG 16
dnf install -y pg_plan_filter_15       # PG 15
dnf install -y pg_plan_filter_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-plan-filter   # PG 18
apt install -y postgresql-17-pg-plan-filter   # PG 17
apt install -y postgresql-16-pg-plan-filter   # PG 16
apt install -y postgresql-15-pg-plan-filter   # PG 15
apt install -y postgresql-14-pg-plan-filter   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'plan_filter';
```


## 用法

来源：

- [README.md](https://github.com/pgexperts/pg_plan_filter/blob/c1afc73dacae8688456bdeef72ed6a3030c500ba/README.md)
- [Makefile](https://github.com/pgexperts/pg_plan_filter/blob/c1afc73dacae8688456bdeef72ed6a3030c500ba/Makefile)
- [License](https://github.com/pgexperts/pg_plan_filter/blob/c1afc73dacae8688456bdeef72ed6a3030c500ba/License)

`plan_filter` 是 pg_plan_filter 1.0.0 的可加载库，根据配置的计划估算成本拒绝语句或事务。支持 PostgreSQL 14–18，没有需要创建的 SQL 扩展。

### 核心用法

```ini
shared_preload_libraries = 'plan_filter'
plan_filter.statement_cost_limit = 100000.0
plan_filter.transaction_cost_limit = 500000.0
plan_filter.filter_select_only = false
```

```sql
SELECT current_setting('plan_filter.module_loaded', true) IS NOT NULL AS active;
```

### 运行边界

将库追加到已有预加载列表并重启；开发和测试也可使用 `LOAD`。两个成本上限都默认为零，即不限制。`plan_filter.statement_cost_limit` 限制单条计划，也可能拒绝高成本的普通 EXPLAIN。`plan_filter.transaction_cost_limit` 对每次执行记账，包括反复执行预备语句；回滚到保存点不会返还预算。普通 EXPLAIN 不消耗事务预算，包含执行计划的工具命令则会计入。

`plan_filter.filter_select_only` 为真时两个上限只过滤 SELECT，但 SELECT 仍可能产生副作用。`plan_filter.module_loaded` 是只读的加载标志。修改上限需要超级用户或明确授予的参数设置权限，拒绝操作的 SQLSTATE 为 54001。成本是估算值而非运行时间，普通角色可以降低规划器成本设置绕过阈值。因此它适合防止意外负载，不能单独承担对抗恶意会话的安全边界。
