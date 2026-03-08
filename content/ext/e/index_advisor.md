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
  <a class="ext-card ext-card--source" href="index_advisor-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">index_advisor-0.2.0.tar.gz</div>
    <div class="ext-card__desc">index_advisor-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`index_advisor`**](/ext/e/index_advisor) | `0.2.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2800  | [**`index_advisor`**](/ext/e/index_advisor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hypopg`](/ext/e/hypopg) [`pg_qualstats`](/ext/e/pg_qualstats) [`powa`](/ext/e/powa) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`auto_explain`](/ext/e/auto_explain) [`pg_profile`](/ext/e/pg_profile) [`pg_show_plans`](/ext/e/pg_show_plans) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `index_advisor` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `index_advisor_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-index-advisor` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
@ el8.x86_64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/index_advisor_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/index_advisor_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/index_advisor_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/index_advisor_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/index_advisor_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 index_advisor_18 index_advisor_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/index_advisor_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-index-advisor postgresql-18-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-18-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/index_advisor_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/index_advisor_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/index_advisor_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/index_advisor_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/index_advisor_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 index_advisor_17 index_advisor_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/index_advisor_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-index-advisor postgresql-17-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-17-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/index_advisor_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/index_advisor_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/index_advisor_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/index_advisor_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/index_advisor_16-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 index_advisor_16 index_advisor_16-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/index_advisor_16-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-index-advisor postgresql-16-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-16-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/index_advisor_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/index_advisor_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/index_advisor_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/index_advisor_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/index_advisor_15-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 index_advisor_15 index_advisor_15-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/index_advisor_15-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-index-advisor postgresql-15-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-15-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/index_advisor_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/index_advisor_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/index_advisor_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 10.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/index_advisor_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/index_advisor_14-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 index_advisor_14 index_advisor_14-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 10.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/index_advisor_14-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-index-advisor postgresql-14-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 5.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/index-advisor/postgresql-14-index-advisor_0.2.0-1PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install index_advisor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y index_advisor -v 18  # PG 18
pig ext install -y index_advisor -v 17  # PG 17
pig ext install -y index_advisor -v 16  # PG 16
pig ext install -y index_advisor -v 15  # PG 15
pig ext install -y index_advisor -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y index_advisor_18       # PG 18
dnf install -y index_advisor_17       # PG 17
dnf install -y index_advisor_16       # PG 16
dnf install -y index_advisor_15       # PG 15
dnf install -y index_advisor_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-index-advisor   # PG 18
apt install -y postgresql-17-index-advisor   # PG 17
apt install -y postgresql-16-index-advisor   # PG 16
apt install -y postgresql-15-index-advisor   # PG 15
apt install -y postgresql-14-index-advisor   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION index_advisor;
```
