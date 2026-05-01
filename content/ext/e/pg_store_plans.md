---
title: "pg_store_plans"
linkTitle: "pg_store_plans"
description: "跟踪所有执行的 SQL 语句的计划统计信息"
weight: 6250
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ossc-db/pg_store_plans">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ossc-db/pg_store_plans</div>
    <div class="ext-card__desc">https://github.com/ossc-db/pg_store_plans</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_store_plans-1.10.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_store_plans-1.10.tar.gz</div>
    <div class="ext-card__desc">pg_store_plans-1.10.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_store_plans`**](/ext/e/pg_store_plans) | `1.10` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6250  | [**`pg_store_plans`**](/ext/e/pg_store_plans) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_show_plans`](/ext/e/pg_show_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pre_prepare`](/ext/e/pre_prepare) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`explain_ui`](/ext/e/explain_ui) [`plprofiler`](/ext/e/plprofiler) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_store_plans` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_store_plans_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-store-plan` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 4 | AVAIL PIGSTY 1.10 1 |
| el8.aarch64 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 4 | AVAIL PIGSTY 1.10 1 |
| el9.x86_64 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 4 | AVAIL PIGSTY 1.10 1 |
| el9.aarch64 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 4 | AVAIL PIGSTY 1.10 1 |
| el10.x86_64 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 1 |
| el10.aarch64 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 2 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 3 | AVAIL PIGSTY 1.10 1 |
| d12.x86_64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| d12.aarch64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| d13.x86_64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| d13.aarch64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| u22.x86_64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| u22.aarch64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| u24.x86_64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| u24.aarch64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| u26.x86_64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
| u26.aarch64 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 | AVAIL PIGSTY 1.10 1 |
@ el8.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PIGSTY.el8.x86_64.rpm pigsty 1.10 44.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_18-1.10-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PGDG.rhel8.10.x86_64.rpm pgdg 1.10 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_store_plans_18-1.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PIGSTY.el8.aarch64.rpm pigsty 1.10 43.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_18-1.10-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PGDG.rhel8.10.aarch64.rpm pgdg 1.10 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_store_plans_18-1.10-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PIGSTY.el9.x86_64.rpm pigsty 1.10 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_18-1.10-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PGDG.rhel9.7.x86_64.rpm pgdg 1.10 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_store_plans_18-1.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PIGSTY.el9.aarch64.rpm pigsty 1.10 43.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_18-1.10-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PGDG.rhel9.7.aarch64.rpm pgdg 1.10 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_store_plans_18-1.10-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PIGSTY.el10.x86_64.rpm pigsty 1.10 44.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_18-1.10-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PGDG.rhel10.1.x86_64.rpm pgdg 1.10 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_store_plans_18-1.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PIGSTY.el10.aarch64.rpm pigsty 1.10 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_18-1.10-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.10-1PGDG.rhel10.1.aarch64.rpm pgdg 1.10 45.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_store_plans_18-1.10-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb pigsty 1.10 108.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb pigsty 1.10 105.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb pigsty 1.10 108.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb pigsty 1.10 105.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb pigsty 1.10 118.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb pigsty 1.10 116.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb pigsty 1.10 113.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb pigsty 1.10 112.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb pigsty 1.10 115.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb pigsty 1.10 113.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PIGSTY.el8.x86_64.rpm pigsty 1.10 44.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_17-1.10-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PGDG.rhel8.10.x86_64.rpm pgdg 1.10 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_store_plans_17-1.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PIGSTY.el8.aarch64.rpm pigsty 1.10 43.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_17-1.10-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PGDG.rhel8.10.aarch64.rpm pgdg 1.10 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_store_plans_17-1.10-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PIGSTY.el9.x86_64.rpm pigsty 1.10 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_17-1.10-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PGDG.rhel9.7.x86_64.rpm pgdg 1.10 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_store_plans_17-1.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PIGSTY.el9.aarch64.rpm pigsty 1.10 43.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_17-1.10-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PGDG.rhel9.7.aarch64.rpm pgdg 1.10 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_store_plans_17-1.10-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PIGSTY.el10.x86_64.rpm pigsty 1.10 44.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_17-1.10-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PGDG.rhel10.1.x86_64.rpm pgdg 1.10 47.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_store_plans_17-1.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PIGSTY.el10.aarch64.rpm pigsty 1.10 43.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_17-1.10-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.10-1PGDG.rhel10.1.aarch64.rpm pgdg 1.10 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_store_plans_17-1.10-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb pigsty 1.10 108.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb pigsty 1.10 105.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb pigsty 1.10 108.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb pigsty 1.10 105.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb pigsty 1.10 129.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb pigsty 1.10 127.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb pigsty 1.10 113.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb pigsty 1.10 112.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb pigsty 1.10 115.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb pigsty 1.10 113.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PIGSTY.el8.x86_64.rpm pigsty 1.10 44.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_16-1.10-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PGDG.rhel8.10.x86_64.rpm pgdg 1.10 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_store_plans_16-1.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_store_plans_16-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PIGSTY.el8.aarch64.rpm pigsty 1.10 43.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_16-1.10-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PGDG.rhel8.10.aarch64.rpm pgdg 1.10 44.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_store_plans_16-1.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_store_plans_16-1.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PIGSTY.el9.x86_64.rpm pigsty 1.10 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_16-1.10-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PGDG.rhel9.7.x86_64.rpm pgdg 1.10 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_store_plans_16-1.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_store_plans_16-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PIGSTY.el9.aarch64.rpm pigsty 1.10 43.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_16-1.10-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PGDG.rhel9.7.aarch64.rpm pgdg 1.10 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_store_plans_16-1.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_store_plans_16-1.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PIGSTY.el10.x86_64.rpm pigsty 1.10 44.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_16-1.10-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PGDG.rhel10.1.x86_64.rpm pgdg 1.10 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_store_plans_16-1.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_store_plans_16-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PIGSTY.el10.aarch64.rpm pigsty 1.10 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_16-1.10-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.10-1PGDG.rhel10.1.aarch64.rpm pgdg 1.10 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_store_plans_16-1.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_store_plans_16-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb pigsty 1.10 108.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb pigsty 1.10 105.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb pigsty 1.10 109.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb pigsty 1.10 105.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb pigsty 1.10 129.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb pigsty 1.10 127.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb pigsty 1.10 114.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb pigsty 1.10 113.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb pigsty 1.10 115.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb pigsty 1.10 113.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PIGSTY.el8.x86_64.rpm pigsty 1.10 46.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_15-1.10-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PGDG.rhel8.10.x86_64.rpm pgdg 1.10 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_store_plans_15-1.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_store_plans_15-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_store_plans_15-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PIGSTY.el8.aarch64.rpm pigsty 1.10 44.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_15-1.10-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PGDG.rhel8.10.aarch64.rpm pgdg 1.10 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_store_plans_15-1.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_store_plans_15-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_store_plans_15-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PIGSTY.el9.x86_64.rpm pigsty 1.10 45.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_15-1.10-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PGDG.rhel9.7.x86_64.rpm pgdg 1.10 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_store_plans_15-1.10-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_store_plans_15-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_store_plans_15-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PIGSTY.el9.aarch64.rpm pigsty 1.10 45.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_15-1.10-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PGDG.rhel9.7.aarch64.rpm pgdg 1.10 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_store_plans_15-1.10-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_store_plans_15-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_store_plans_15-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PIGSTY.el10.x86_64.rpm pigsty 1.10 46.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_15-1.10-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PGDG.rhel10.1.x86_64.rpm pgdg 1.10 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_store_plans_15-1.10-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_store_plans_15-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PIGSTY.el10.aarch64.rpm pigsty 1.10 45.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_15-1.10-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.10-1PGDG.rhel10.1.aarch64.rpm pgdg 1.10 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_store_plans_15-1.10-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_store_plans_15-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb pigsty 1.10 109.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb pigsty 1.10 106.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb pigsty 1.10 110.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb pigsty 1.10 106.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb pigsty 1.10 131.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb pigsty 1.10 129.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb pigsty 1.10 116.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb pigsty 1.10 114.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb pigsty 1.10 116.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb pigsty 1.10 114.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_store_plans_14 pg_store_plans_14-1.10-1PIGSTY.el8.x86_64.rpm pigsty 1.10 46.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_14-1.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_store_plans_14 pg_store_plans_14-1.10-1PIGSTY.el8.aarch64.rpm pigsty 1.10 44.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_14-1.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_store_plans_14 pg_store_plans_14-1.10-1PIGSTY.el9.x86_64.rpm pigsty 1.10 45.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_14-1.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_store_plans_14 pg_store_plans_14-1.10-1PIGSTY.el9.aarch64.rpm pigsty 1.10 45.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_14-1.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_store_plans_14 pg_store_plans_14-1.10-1PIGSTY.el10.x86_64.rpm pigsty 1.10 46.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_14-1.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_store_plans_14 pg_store_plans_14-1.10-1PIGSTY.el10.aarch64.rpm pigsty 1.10 45.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_14-1.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb pigsty 1.10 109.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb pigsty 1.10 106.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb pigsty 1.10 109.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb pigsty 1.10 106.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb pigsty 1.10 130.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb pigsty 1.10 128.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb pigsty 1.10 116.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb pigsty 1.10 114.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb pigsty 1.10 116.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb pigsty 1.10 114.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.10-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_store_plans` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_store_plans         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_store_plans` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_store_plans;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_store_plans -v 18  # PG 18
pig ext install -y pg_store_plans -v 17  # PG 17
pig ext install -y pg_store_plans -v 16  # PG 16
pig ext install -y pg_store_plans -v 15  # PG 15
pig ext install -y pg_store_plans -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_store_plans_18       # PG 18
dnf install -y pg_store_plans_17       # PG 17
dnf install -y pg_store_plans_16       # PG 16
dnf install -y pg_store_plans_15       # PG 15
dnf install -y pg_store_plans_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-store-plan   # PG 18
apt install -y postgresql-17-pg-store-plan   # PG 17
apt install -y postgresql-16-pg-store-plan   # PG 16
apt install -y postgresql-15-pg-store-plan   # PG 15
apt install -y postgresql-14-pg-store-plan   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_store_plans';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_store_plans;
```

## 用法

来源：[official docs](https://ossc-db.github.io/pg_store_plans/)，[repo](https://github.com/ossc-db/pg_store_plans)，[1.10 release notes](https://github.com/ossc-db/pg_store_plans/releases/tag/1.10)

`pg_store_plans` 用于跟踪 SQL 语句的执行计划统计信息，作用类似于 `pg_stat_statements` 对语句统计的补充。上游 `1.10` 发布说明指出该版本新增 PostgreSQL 18 支持，其余 SQL 接口与当前文档保持一致。

### 必要服务器设置

```ini
shared_preload_libraries = 'pg_store_plans'
compute_query_id = 'on'
```

`pg_store_plans` 需要共享内存，因此增删该扩展都需要重启。文档还说明如果 `compute_query_id = 'no'`，模块会被静默禁用。

### 查看已存储计划

```sql
SELECT queryid, planid, plan, calls, total_time, rows
FROM pg_store_plans
ORDER BY total_time DESC;

SELECT * FROM pg_store_plans_info;
```

文档将 `queryid` 作为与 `pg_stat_statements` 的关联键，并将 `pg_store_plans_info` 描述为单行视图，用于暴露 `dealloc`、`stats_reset` 等模块级统计。

### 辅助函数

```sql
SELECT pg_store_plans_reset();
SELECT pg_store_hash_query('SELECT 1');
SELECT pg_store_plans_textplan(plan);
SELECT pg_store_plans_jsonplan(plan);
SELECT pg_store_plans_xmlplan(plan);
SELECT pg_store_plans_yamlplan(plan);
```

当 `pg_store_plans.plan_format = 'raw'` 时，`pg_store_plans_*plan()` 尤其实用。

### 关键 GUC

- `pg_store_plans.max`
- `pg_store_plans.track`
- `pg_store_plans.max_plan_length`
- `pg_store_plans.plan_storage`
- `pg_store_plans.plan_format`
- `pg_store_plans.min_duration`
- `pg_store_plans.log_analyze`
- `pg_store_plans.log_buffers`
- `pg_store_plans.log_timing`
- `pg_store_plans.save`

文档说明 `plan_storage` 取值为 `file` 或 `shmem`，`plan_format` 取值为 `text`、`json`、`xml`、`yaml` 或 `raw`。

### 注意事项

- 非超级用户不能查看其他用户执行语句对应的 `plan`、`queryid` 或 `planid`。
- `pg_store_plans` 与 `pg_stat_statements` 独立维护条目，因此低频记录不一定总能在另一侧找到对应行。
