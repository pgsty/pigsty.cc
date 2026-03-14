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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_store_plans-1.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_store_plans-1.9.tar.gz</div>
    <div class="ext-card__desc">pg_store_plans-1.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_store_plans`**](/ext/e/pg_store_plans) | `1.9` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6250  | [**`pg_store_plans`**](/ext/e/pg_store_plans) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_show_plans`](/ext/e/pg_show_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pre_prepare`](/ext/e/pre_prepare) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`explain_ui`](/ext/e/explain_ui) [`plprofiler`](/ext/e/plprofiler) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg18 breaks, fixed by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.9` | {{< pgvers "18,17,16,15,14" >}} | `pg_store_plans` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.9` | {{< pgvers "18,17,16,15,14" >}} | `pg_store_plans_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-store-plan` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 2 | AVAIL PIGSTY 1.8 3 | AVAIL PIGSTY 1.8 1 |
| el8.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 2 | AVAIL PIGSTY 1.8 3 | AVAIL PIGSTY 1.8 1 |
| el9.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 2 | AVAIL PIGSTY 1.8 3 | AVAIL PIGSTY 1.8 1 |
| el9.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.8 1 | AVAIL PIGSTY 1.8 2 | AVAIL PIGSTY 1.8 3 | AVAIL PIGSTY 1.8 1 |
| el10.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PGDG 1.8 1 | AVAIL PGDG 1.8 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| d12.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| d13.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| d13.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| u22.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| u22.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| u24.x86_64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
| u24.aarch64 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 | AVAIL PIGSTY 1.9 1 |
@ el8.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.9-1PIGSTY.el8.x86_64.rpm pigsty 1.9 44.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_18-1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.9-1PIGSTY.el8.aarch64.rpm pigsty 1.9 43.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_18-1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.9-1PIGSTY.el9.x86_64.rpm pigsty 1.9 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_18-1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.9-1PIGSTY.el9.aarch64.rpm pigsty 1.9 42.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_18-1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_store_plans_18 pg_store_plans_18-1.9-1PIGSTY.el10.x86_64.rpm pigsty 1.9 44.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_18-1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_store_plans_18 pg_store_plans_18-1.9-1PIGSTY.el10.aarch64.rpm pigsty 1.9 43.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_18-1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb pigsty 1.9 108.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb pigsty 1.9 105.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb pigsty 1.9 108.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb pigsty 1.9 105.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb pigsty 1.9 118.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb pigsty 1.9 116.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb pigsty 1.9 113.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-store-plan postgresql-18-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb pigsty 1.9 112.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-18-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.8-2PIGSTY.el8.x86_64.rpm pigsty 1.8 40.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_17-1.8-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.8-2PIGSTY.el8.aarch64.rpm pigsty 1.8 39.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_17-1.8-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.8-2PIGSTY.el9.x86_64.rpm pigsty 1.8 42.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_17-1.8-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.8-2PIGSTY.el9.aarch64.rpm pigsty 1.8 41.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_17-1.8-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_store_plans_17 pg_store_plans_17-1.9-1PIGSTY.el10.x86_64.rpm pigsty 1.9 43.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_store_plans_17-1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_store_plans_17 pg_store_plans_17-1.9-1PIGSTY.el10.aarch64.rpm pigsty 1.9 42.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_store_plans_17-1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb pigsty 1.9 107.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb pigsty 1.9 105.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb pigsty 1.9 108.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb pigsty 1.9 105.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb pigsty 1.9 129.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb pigsty 1.9 127.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb pigsty 1.9 113.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-store-plan postgresql-17-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb pigsty 1.9 112.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-17-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-2PIGSTY.el8.x86_64.rpm pigsty 1.8 40.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_16-1.8-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_store_plans_16-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-2PIGSTY.el8.aarch64.rpm pigsty 1.8 39.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_16-1.8-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_store_plans_16-1.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-2PIGSTY.el9.x86_64.rpm pigsty 1.8 42.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_16-1.8-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_store_plans_16-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-2PIGSTY.el9.aarch64.rpm pigsty 1.8 41.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_16-1.8-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_store_plans_16-1.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_store_plans_16 pg_store_plans_16-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_store_plans_16-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_store_plans_16 pg_store_plans_16-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_store_plans_16-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb pigsty 1.9 108.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb pigsty 1.9 105.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb pigsty 1.9 108.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb pigsty 1.9 105.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb pigsty 1.9 129.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb pigsty 1.9 127.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb pigsty 1.9 113.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-store-plan postgresql-16-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb pigsty 1.9 112.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-16-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-2PIGSTY.el8.x86_64.rpm pigsty 1.8 41.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_15-1.8-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_store_plans_15-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_store_plans_15-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-2PIGSTY.el8.aarch64.rpm pigsty 1.8 40.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_15-1.8-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_store_plans_15-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_store_plans_15-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-2PIGSTY.el9.x86_64.rpm pigsty 1.8 43.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_15-1.8-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_store_plans_15-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_store_plans_15-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-2PIGSTY.el9.aarch64.rpm pigsty 1.8 43.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_15-1.8-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_store_plans_15-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_store_plans_15-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_store_plans_15 pg_store_plans_15-1.8-3PGDG.rhel10.x86_64.rpm pgdg 1.8 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_store_plans_15-1.8-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_store_plans_15 pg_store_plans_15-1.8-3PGDG.rhel10.aarch64.rpm pgdg 1.8 47.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_store_plans_15-1.8-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb pigsty 1.9 109.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb pigsty 1.9 106.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb pigsty 1.9 110.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb pigsty 1.9 106.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb pigsty 1.9 131.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb pigsty 1.9 129.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb pigsty 1.9 116.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-store-plan postgresql-15-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb pigsty 1.9 114.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-15-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_store_plans_14 pg_store_plans_14-1.8-2PIGSTY.el8.x86_64.rpm pigsty 1.8 41.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_store_plans_14-1.8-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_store_plans_14 pg_store_plans_14-1.8-2PIGSTY.el8.aarch64.rpm pigsty 1.8 40.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_store_plans_14-1.8-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_store_plans_14 pg_store_plans_14-1.8-2PIGSTY.el9.x86_64.rpm pigsty 1.8 43.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_store_plans_14-1.8-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_store_plans_14 pg_store_plans_14-1.8-2PIGSTY.el9.aarch64.rpm pigsty 1.8 43.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_store_plans_14-1.8-2PIGSTY.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb pigsty 1.9 109.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb pigsty 1.9 106.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb pigsty 1.9 109.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb pigsty 1.9 106.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb pigsty 1.9 130.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb pigsty 1.9 128.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb pigsty 1.9 115.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-store-plan postgresql-14-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb pigsty 1.9 114.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-store-plan/postgresql-14-pg-store-plan_1.9-1PIGSTY~noble_arm64.deb
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

> [pg_store_plans: 执行计划存储与统计](https://github.com/ossc-db/pg_store_plans)

pg_store_plans 追踪所有 SQL 语句的执行计划统计信息，为 `pg_stat_statements` 提供计划级别的补充。在 PostgreSQL 14+ 上可通过 `queryid` 进行关联。

### 查看计划统计

```sql
-- 查看追踪的计划及统计信息
SELECT queryid, planid, plan, calls, total_time, rows
FROM pg_store_plans
ORDER BY total_time DESC;

-- 检查模块状态
SELECT * FROM pg_store_plans_info;
```

### 关键视图列

| 列名 | 类型 | 描述 |
|--------|------|-------------|
| `queryid` | bigint | 查询 ID（可与 pg_stat_statements 关联） |
| `planid` | bigint | 计划哈希码 |
| `plan` | text | 代表性计划文本 |
| `calls` | bigint | 执行次数 |
| `total_time` | double precision | 总执行时间（毫秒） |
| `rows` | bigint | 检索/影响的总行数 |
| `shared_blks_hit` | bigint | 共享缓冲区命中数 |
| `shared_blks_read` | bigint | 共享块读取数 |
| `first_call` | timestamptz | 首次执行时间 |
| `last_call` | timestamptz | 最后执行时间 |

### 函数

```sql
-- 重置所有统计信息（仅超级用户）
SELECT pg_store_plans_reset();

-- 转换计划格式
SELECT pg_store_plans_textplan(plan);   -- 转为文本
SELECT pg_store_plans_jsonplan(plan);   -- 转为 JSON
SELECT pg_store_plans_xmlplan(plan);    -- 转为 XML
SELECT pg_store_plans_yamlplan(plan);   -- 转为 YAML

-- 计算查询哈希
SELECT pg_store_hash_query('SELECT 1');
```

### 配置

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pg_store_plans.max` | 1000 | 最大追踪计划数（仅在服务器启动时） |
| `pg_store_plans.track` | `top` | `top`、`all`、`verbose`、`none` |
| `pg_store_plans.plan_format` | `text` | `text`、`json`、`xml`、`yaml`、`raw` |
| `pg_store_plans.min_duration` | 0 | 最小追踪执行时间（毫秒） |
| `pg_store_plans.log_analyze` | `off` | 包含 EXPLAIN ANALYZE 输出 |
| `pg_store_plans.log_buffers` | `off` | 包含缓冲区统计 |
| `pg_store_plans.log_timing` | `true` | 记录实际耗时 |
| `pg_store_plans.plan_storage` | `file` | 存储方式：`file` 或 `shmem` |
| `pg_store_plans.max_plan_length` | 5000 | 计划文本最大字节数 |
| `pg_store_plans.save` | `on` | 跨重启持久化统计 |
