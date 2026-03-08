---
title: "explain_ui"
linkTitle: "explain_ui"
description: "快速跳转至PEV查阅可视化执行计划"
weight: 6540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/davidgomes/pg-explain-ui">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">davidgomes/pg-explain-ui</div>
    <div class="ext-card__desc">https://github.com/davidgomes/pg-explain-ui</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_explain_ui-0.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_explain_ui-0.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_explain_ui-0.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_explain_ui`**](/ext/e/explain_ui) | `0.0.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6540  | [**`explain_ui`**](/ext/e/explain_ui) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_show_plans`](/ext/e/pg_show_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_profile`](/ext/e/pg_profile) [`powa`](/ext/e/powa) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_explain_ui` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_explain_ui_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-explain-ui` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
@ el8.x86_64 18 pg_explain_ui_18 pg_explain_ui_18-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_explain_ui_18-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_explain_ui_18 pg_explain_ui_18-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 935.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_explain_ui_18-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_explain_ui_18 pg_explain_ui_18-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_explain_ui_18-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_explain_ui_18 pg_explain_ui_18-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 988.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_explain_ui_18-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_explain_ui_18 pg_explain_ui_18-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_explain_ui_18-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_explain_ui_18 pg_explain_ui_18-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 987.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_explain_ui_18-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 880.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 717.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 879.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 716.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 981.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 846.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 968.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-explain-ui postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 836.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-18-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_explain_ui_17 pg_explain_ui_17-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_explain_ui_17-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_explain_ui_17 pg_explain_ui_17-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 935.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_explain_ui_17-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_explain_ui_17 pg_explain_ui_17-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_explain_ui_17-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_explain_ui_17 pg_explain_ui_17-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 989.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_explain_ui_17-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_explain_ui_17 pg_explain_ui_17-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_explain_ui_17-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_explain_ui_17 pg_explain_ui_17-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 988.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_explain_ui_17-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 879.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 716.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 880.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 716.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 981.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 846.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 970.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-explain-ui postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 836.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-17-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_explain_ui_16 pg_explain_ui_16-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_explain_ui_16-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_explain_ui_16 pg_explain_ui_16-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 935.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_explain_ui_16-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_explain_ui_16 pg_explain_ui_16-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_explain_ui_16-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_explain_ui_16 pg_explain_ui_16-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 988.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_explain_ui_16-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_explain_ui_16 pg_explain_ui_16-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_explain_ui_16-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_explain_ui_16 pg_explain_ui_16-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 988.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_explain_ui_16-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 880.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 716.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 880.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 716.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 979.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 846.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 970.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-explain-ui postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 837.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-16-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_explain_ui_15 pg_explain_ui_15-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_explain_ui_15-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_explain_ui_15 pg_explain_ui_15-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 935.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_explain_ui_15-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_explain_ui_15 pg_explain_ui_15-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_explain_ui_15-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_explain_ui_15 pg_explain_ui_15-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 987.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_explain_ui_15-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_explain_ui_15 pg_explain_ui_15-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_explain_ui_15-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_explain_ui_15 pg_explain_ui_15-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 987.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_explain_ui_15-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 880.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 716.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 880.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 717.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 979.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 847.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 969.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-explain-ui postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 837.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-15-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_explain_ui_14 pg_explain_ui_14-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_explain_ui_14-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_explain_ui_14 pg_explain_ui_14-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 935.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_explain_ui_14-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_explain_ui_14 pg_explain_ui_14-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_explain_ui_14-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_explain_ui_14 pg_explain_ui_14-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 987.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_explain_ui_14-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_explain_ui_14 pg_explain_ui_14-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 1.1MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_explain_ui_14-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_explain_ui_14 pg_explain_ui_14-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 987.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_explain_ui_14-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 879.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 717.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 879.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 716.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 978.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 847.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 969.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-explain-ui postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 837.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-explain-ui/postgresql-14-pg-explain-ui_0.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_explain_ui` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_explain_ui         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_explain_ui` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_explain_ui;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_explain_ui -v 18  # PG 18
pig ext install -y pg_explain_ui -v 17  # PG 17
pig ext install -y pg_explain_ui -v 16  # PG 16
pig ext install -y pg_explain_ui -v 15  # PG 15
pig ext install -y pg_explain_ui -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_explain_ui_18       # PG 18
dnf install -y pg_explain_ui_17       # PG 17
dnf install -y pg_explain_ui_16       # PG 16
dnf install -y pg_explain_ui_15       # PG 15
dnf install -y pg_explain_ui_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-explain-ui   # PG 18
apt install -y postgresql-17-pg-explain-ui   # PG 17
apt install -y postgresql-16-pg-explain-ui   # PG 16
apt install -y postgresql-15-pg-explain-ui   # PG 15
apt install -y postgresql-14-pg-explain-ui   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION explain_ui;
```
