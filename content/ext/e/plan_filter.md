---
title: "plan_filter"
linkTitle: "plan_filter"
description: "使用执行计划代价过滤阻止特定查询语句"
weight: 2810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgexperts/pg_plan_filter">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgexperts/pg_plan_filter</div>
    <div class="ext-card__desc">https://github.com/pgexperts/pg_plan_filter</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_plan_filter.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_plan_filter.tar.gz</div>
    <div class="ext-card__desc">pg_plan_filter.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_plan_filter`**](/ext/e/plan_filter) | `0.0.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2810  | [**`plan_filter`**](/ext/e/plan_filter) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_plan_filter` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_plan_filter_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-plan-filter` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_plan_filter_18 pg_plan_filter_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_18-0.0.1-1PIGSTY.el9.aarch64.rpm
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
@ el8.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_plan_filter_17 pg_plan_filter_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_17-0.0.1-1PIGSTY.el9.aarch64.rpm
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
@ el8.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_plan_filter_16 pg_plan_filter_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_16-0.0.1-1PIGSTY.el9.aarch64.rpm
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
@ el8.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_plan_filter_15 pg_plan_filter_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_15-0.0.1-1PIGSTY.el9.aarch64.rpm
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
@ el8.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 10.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_plan_filter_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 11.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_plan_filter_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_plan_filter_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_plan_filter_14 pg_plan_filter_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 10.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_plan_filter_14-0.0.1-1PIGSTY.el9.aarch64.rpm
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_plan_filter;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_plan_filter -v 18  # PG 18
pig ext install -y pg_plan_filter -v 17  # PG 17
pig ext install -y pg_plan_filter -v 16  # PG 16
pig ext install -y pg_plan_filter -v 15  # PG 15
pig ext install -y pg_plan_filter -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_plan_filter_18       # PG 18
dnf install -y pg_plan_filter_17       # PG 17
dnf install -y pg_plan_filter_16       # PG 16
dnf install -y pg_plan_filter_15       # PG 15
dnf install -y pg_plan_filter_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-plan-filter   # PG 18
apt install -y postgresql-17-pg-plan-filter   # PG 17
apt install -y postgresql-16-pg-plan-filter   # PG 16
apt install -y postgresql-15-pg-plan-filter   # PG 15
apt install -y postgresql-14-pg-plan-filter   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'plan_filter';
```





## 用法

> [plan_filter: 根据执行计划过滤语句](https://github.com/pgexperts/pg_plan_filter)

`pg_plan_filter` 模块在执行前根据配置的条件检查语句，如果违反条件则抛出错误。这允许管理员阻止在生产数据库上执行某些查询。

目前支持的唯一条件是语句计划的最大允许估算成本。

### 配置

在 `postgresql.conf` 中添加：

```ini
shared_preload_libraries = 'plan_filter'
plan_filter.statement_cost_limit = 100000.0
```

`statement_cost_limit` 必须设置为非零值才能启用过滤。默认值为 `0`（不过滤）。

### GUC 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `plan_filter.statement_cost_limit` | float | `0` | 最大允许估算计划成本。`0` 表示禁用过滤 |
| `plan_filter.limit_select_only` | bool | `false` | 为 true 时仅过滤 `SELECT` 语句 |

### 示例

全局阻止高成本查询：

```ini
plan_filter.statement_cost_limit = 100000.0
```

仅限制 SELECT 语句（注意：SELECT != READONLY，因为 SELECT 也可以修改数据）：

```ini
plan_filter.limit_select_only = true
```

当模块以非零 `statement_cost_limit` 运行时，也会阻止对高成本查询执行 `EXPLAIN`。临时绕过过滤：

```sql
BEGIN;
SET LOCAL plan_filter.statement_cost_limit = 0;
EXPLAIN SELECT ...;
COMMIT;
```

按用户覆盖限制：

```sql
ALTER USER can_run_expensive SET plan_filter.statement_cost_limit = 0;
ALTER USER only_cheap_queries SET plan_filter.statement_cost_limit = 10000;
```

### 注意事项

`statement_cost_limit` 基于**估算成本**取消计划。PostgreSQL 规划器返回的成本估算可能与实际查询执行时间无关。请准备好应对误报取消的情况，并将限制值设置得宽裕一些。
