---
title: "index_advisor"
linkTitle: "index_advisor"
description: "查询索引建议器"
weight: 2800
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/index_advisor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/index_advisor</div>
    <div class="ext-card__desc">https://github.com/supabase/index_advisor</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/index_advisor-0.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">index_advisor-0.2.1.tar.gz</div>
    <div class="ext-card__desc">index_advisor-0.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`index_advisor`**](/ext/e/index_advisor) | `0.2.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2800  | [**`index_advisor`**](/ext/e/index_advisor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hypopg`](/ext/e/hypopg) [`hypopg`](/ext/e/hypopg) [`online_advisor`](/ext/e/online_advisor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pg_stat_plans`](/ext/e/pg_stat_plans) [`plan_filter`](/ext/e/plan_filter) [`pg_track_optimizer`](/ext/e/pg_track_optimizer) [`pg_strom`](/ext/e/pg_strom) [`pg_orca`](/ext/e/pg_orca) [`pg_relusage`](/ext/e/pg_relusage) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package and SQL version 0.2.1; requires HypoPG; planner estimates only.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "18,17,16,15,14" >}} | `index_advisor` | `hypopg` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "18,17,16,15,14" >}} | `index_advisor_$v` | `hypopg_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-index-advisor` | `postgresql-$v-hypopg` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 |
| el8.aarch64 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 |
| el9.x86_64 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 |
| el9.aarch64 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 |
| el10.x86_64 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 |
| el10.aarch64 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 | AVAIL PIGSTY 0.2.1 2 |
| d12.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
@ el8.x86_64 18 index_advisor_18 index_advisor_18-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_18-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 index_advisor_18 index_advisor_18-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_18-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 index_advisor_18 index_advisor_18-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_18-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.x86_64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 index_advisor_18 index_advisor_18-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_18-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 index_advisor_18 index_advisor_18-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_18-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.x86_64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 index_advisor_18 index_advisor_18-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_18-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ el8.x86_64 17 index_advisor_17 index_advisor_17-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_17-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 index_advisor_17 index_advisor_17-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_17-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 index_advisor_17 index_advisor_17-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_17-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.x86_64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 index_advisor_17 index_advisor_17-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_17-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 index_advisor_17 index_advisor_17-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_17-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.x86_64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 index_advisor_17 index_advisor_17-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_17-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ el8.x86_64 16 index_advisor_16 index_advisor_16-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_16-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 index_advisor_16 index_advisor_16-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_16-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 index_advisor_16 index_advisor_16-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_16-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.x86_64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 index_advisor_16 index_advisor_16-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_16-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 index_advisor_16 index_advisor_16-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_16-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.x86_64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_16-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 index_advisor_16 index_advisor_16-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_16-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_16-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ el8.x86_64 15 index_advisor_15 index_advisor_15-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_15-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 index_advisor_15 index_advisor_15-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_15-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 index_advisor_15 index_advisor_15-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_15-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.x86_64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 index_advisor_15 index_advisor_15-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_15-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 index_advisor_15 index_advisor_15-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_15-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.x86_64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_15-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 index_advisor_15 index_advisor_15-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_15-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_15-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ el8.x86_64 14 index_advisor_14 index_advisor_14-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_14-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/index_advisor_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 index_advisor_14 index_advisor_14-0.2.1-1PGSTY.el8.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_14-0.2.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/index_advisor_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 index_advisor_14 index_advisor_14-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_14-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.x86_64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/index_advisor_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 index_advisor_14 index_advisor_14-0.2.1-1PGSTY.el9.noarch.rpm pigsty 0.2.1 10.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_14-0.2.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/index_advisor_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 index_advisor_14 index_advisor_14-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_14-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.x86_64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/index_advisor_14-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 index_advisor_14 index_advisor_14-0.2.1-1PGSTY.el10.noarch.rpm pigsty 0.2.1 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_14-0.2.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/index_advisor_14-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~bookworm_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~trixie_all.deb pigsty 0.2.1 6.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~jammy_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~noble_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.1-1PGSTY~resolute_all.deb pigsty 0.2.1 6.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.1-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `index_advisor` 扩展的 RPM / DEB 包：

```bash
pig build pkg index_advisor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `index_advisor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install index_advisor;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y index_advisor -v 18  # PG 18
pig ext install -y index_advisor -v 17  # PG 17
pig ext install -y index_advisor -v 16  # PG 16
pig ext install -y index_advisor -v 15  # PG 15
pig ext install -y index_advisor -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y index_advisor_18       # PG 18
dnf install -y index_advisor_17       # PG 17
dnf install -y index_advisor_16       # PG 16
dnf install -y index_advisor_15       # PG 15
dnf install -y index_advisor_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-index-advisor   # PG 18
apt install -y postgresql-17-index-advisor   # PG 17
apt install -y postgresql-16-index-advisor   # PG 16
apt install -y postgresql-15-index-advisor   # PG 15
apt install -y postgresql-14-index-advisor   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION index_advisor CASCADE;  -- 依赖: hypopg
```

## 用法

来源：

- [Official source](https://github.com/supabase/index_advisor/blob/b41d1f5f42f8909091edd6752d1f5006d6535db3/README.md)
- [Official source](https://github.com/supabase/index_advisor/blob/b41d1f5f42f8909091edd6752d1f5006d6535db3/index_advisor.control)
- [Official source](https://github.com/supabase/index_advisor/blob/b41d1f5f42f8909091edd6752d1f5006d6535db3/index_advisor--0.2.0--0.2.1.sql)

`index_advisor` 0.2.1 使用 HypoPG 比较假想索引建立前后的规划器成本。它返回建议，不保证实际执行时间，也不会创建建议的物理索引。

### 基本流程

先以所需权限安装依赖 `hypopg`。该 SQL 扩展不需要预加载或重启。

```sql
CREATE EXTENSION hypopg;
CREATE EXTENSION index_advisor;
CREATE TABLE book (id bigint PRIMARY KEY, title text NOT NULL);
SELECT * FROM index_advisor('SELECT id FROM book WHERE title = $1');
```

`index_advisor(query text)` 接受带参数的查询，返回建立索引前后的启动成本、总成本、`index_statements` 和 `errors`。创建索引前应检查建议 DDL 和实际负载。视图及物化视图支持取决于顾问能否解析到底层表。

### 0.2.1 修复与边界

0.2.1 修复 HypoPG 安装在其他模式时的函数限定、注释移除的非贪婪匹配，以及仅清理顾问自身预备语句的行为。安装新 SQL 文件后，执行 `ALTER EXTENSION index_advisor UPDATE TO '0.2.1'` 更新已有数据库。

应以明确的表访问权限和有代表性的统计信息进行分析。规划成本不能覆盖全部运维代价；额外索引消耗磁盘并增加写入开销，上线前应针对实际查询形式验证。
