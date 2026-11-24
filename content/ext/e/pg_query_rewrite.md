---
title: "pg_query_rewrite"
linkTitle: "pg_query_rewrite"
description: "按预定义规则将指定 SQL 语句转换为另一条 SQL 语句"
weight: 5030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pierreforstmann/pg_query_rewrite">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pierreforstmann/pg_query_rewrite</div>
    <div class="ext-card__desc">https://github.com/pierreforstmann/pg_query_rewrite</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_query_rewrite-0.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_query_rewrite-0.0.5.tar.gz</div>
    <div class="ext-card__desc">pg_query_rewrite-0.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_query_rewrite`**](/ext/e/pg_query_rewrite) | `0.0.5` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5030  | [**`pg_query_rewrite`**](/ext/e/pg_query_rewrite) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_fsql`](/ext/e/pg_fsql) [`ddlx`](/ext/e/ddlx) [`pg_readme`](/ext/e/pg_readme) [`pglinter`](/ext/e/pglinter) [`omni_sql`](/ext/e/omni_sql) [`pg_variables`](/ext/e/pg_variables) [`pre_prepare`](/ext/e/pre_prepare) [`plan_filter`](/ext/e/plan_filter) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pgdd`](/ext/e/pgdd) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires shared_preload_libraries=pg_query_rewrite.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.5` | {{< pgvers "18,17,16,15" >}} | `pg_query_rewrite` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.5` | {{< pgvers "18,17,16,15" >}} | `pg_query_rewrite_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.5` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-query-rewrite` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d12.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d12.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d13.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| d13.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u22.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u22.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u24.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u24.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u26.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
| u26.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 | AVAIL PIGSTY 0.0.5 1 |
@ el8.x86_64 18 pg_query_rewrite_18 pg_query_rewrite_18-0.0.5-1PGSTY.el8.x86_64.rpm pigsty 0.0.5 32.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_query_rewrite_18-0.0.5-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_query_rewrite_18 pg_query_rewrite_18-0.0.5-1PGSTY.el8.aarch64.rpm pigsty 0.0.5 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_query_rewrite_18-0.0.5-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_query_rewrite_18 pg_query_rewrite_18-0.0.5-1PGSTY.el9.x86_64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_query_rewrite_18-0.0.5-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_query_rewrite_18 pg_query_rewrite_18-0.0.5-1PGSTY.el9.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_query_rewrite_18-0.0.5-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_query_rewrite_18 pg_query_rewrite_18-0.0.5-1PGSTY.el10.x86_64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_query_rewrite_18-0.0.5-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_query_rewrite_18 pg_query_rewrite_18-0.0.5-1PGSTY.el10.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_query_rewrite_18-0.0.5-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb pigsty 0.0.5 24.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb pigsty 0.0.5 25.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb pigsty 0.0.5 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb pigsty 0.0.5 25.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-query-rewrite postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-18-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_query_rewrite_17 pg_query_rewrite_17-0.0.5-1PGSTY.el8.x86_64.rpm pigsty 0.0.5 32.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_query_rewrite_17-0.0.5-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_query_rewrite_17 pg_query_rewrite_17-0.0.5-1PGSTY.el8.aarch64.rpm pigsty 0.0.5 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_query_rewrite_17-0.0.5-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_query_rewrite_17 pg_query_rewrite_17-0.0.5-1PGSTY.el9.x86_64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_query_rewrite_17-0.0.5-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_query_rewrite_17 pg_query_rewrite_17-0.0.5-1PGSTY.el9.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_query_rewrite_17-0.0.5-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_query_rewrite_17 pg_query_rewrite_17-0.0.5-1PGSTY.el10.x86_64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_query_rewrite_17-0.0.5-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_query_rewrite_17 pg_query_rewrite_17-0.0.5-1PGSTY.el10.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_query_rewrite_17-0.0.5-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb pigsty 0.0.5 24.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb pigsty 0.0.5 24.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb pigsty 0.0.5 31.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb pigsty 0.0.5 31.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb pigsty 0.0.5 25.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-query-rewrite postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-17-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_query_rewrite_16 pg_query_rewrite_16-0.0.5-1PGSTY.el8.x86_64.rpm pigsty 0.0.5 32.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_query_rewrite_16-0.0.5-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_query_rewrite_16 pg_query_rewrite_16-0.0.5-1PGSTY.el8.aarch64.rpm pigsty 0.0.5 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_query_rewrite_16-0.0.5-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_query_rewrite_16 pg_query_rewrite_16-0.0.5-1PGSTY.el9.x86_64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_query_rewrite_16-0.0.5-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_query_rewrite_16 pg_query_rewrite_16-0.0.5-1PGSTY.el9.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_query_rewrite_16-0.0.5-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_query_rewrite_16 pg_query_rewrite_16-0.0.5-1PGSTY.el10.x86_64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_query_rewrite_16-0.0.5-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_query_rewrite_16 pg_query_rewrite_16-0.0.5-1PGSTY.el10.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_query_rewrite_16-0.0.5-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb pigsty 0.0.5 24.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb pigsty 0.0.5 24.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb pigsty 0.0.5 30.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb pigsty 0.0.5 30.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb pigsty 0.0.5 25.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-query-rewrite postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-16-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_query_rewrite_15 pg_query_rewrite_15-0.0.5-1PGSTY.el8.x86_64.rpm pigsty 0.0.5 32.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_query_rewrite_15-0.0.5-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_query_rewrite_15 pg_query_rewrite_15-0.0.5-1PGSTY.el8.aarch64.rpm pigsty 0.0.5 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_query_rewrite_15-0.0.5-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_query_rewrite_15 pg_query_rewrite_15-0.0.5-1PGSTY.el9.x86_64.rpm pigsty 0.0.5 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_query_rewrite_15-0.0.5-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_query_rewrite_15 pg_query_rewrite_15-0.0.5-1PGSTY.el9.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_query_rewrite_15-0.0.5-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_query_rewrite_15 pg_query_rewrite_15-0.0.5-1PGSTY.el10.x86_64.rpm pigsty 0.0.5 33.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_query_rewrite_15-0.0.5-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_query_rewrite_15 pg_query_rewrite_15-0.0.5-1PGSTY.el10.aarch64.rpm pigsty 0.0.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_query_rewrite_15-0.0.5-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb pigsty 0.0.5 24.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb pigsty 0.0.5 24.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb pigsty 0.0.5 24.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb pigsty 0.0.5 30.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb pigsty 0.0.5 30.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb pigsty 0.0.5 25.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb pigsty 0.0.5 25.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-query-rewrite postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb pigsty 0.0.5 25.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-query-rewrite/postgresql-15-pg-query-rewrite_0.0.5-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_query_rewrite` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_query_rewrite         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_query_rewrite` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_query_rewrite;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_query_rewrite -v 18  # PG 18
pig ext install -y pg_query_rewrite -v 17  # PG 17
pig ext install -y pg_query_rewrite -v 16  # PG 16
pig ext install -y pg_query_rewrite -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_query_rewrite_18       # PG 18
dnf install -y pg_query_rewrite_17       # PG 17
dnf install -y pg_query_rewrite_16       # PG 16
dnf install -y pg_query_rewrite_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-query-rewrite   # PG 18
apt install -y postgresql-17-pg-query-rewrite   # PG 17
apt install -y postgresql-16-pg-query-rewrite   # PG 16
apt install -y postgresql-15-pg-query-rewrite   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_query_rewrite';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_query_rewrite;
```




## 用法

来源：[README](https://github.com/pierreforstmann/pg_query_rewrite/blob/master/README.md)

`pg_query_rewrite` 会把一个完全匹配的源 SQL 语句重写为预定义的目标语句，规则存储在共享内存中。

### 所需设置

```sql
-- postgresql.conf
shared_preload_libraries = 'pg_query_rewrite'
pg_query_rewrite.max_rules = 10

CREATE EXTENSION pg_query_rewrite;
```

### 规则管理

```sql
SELECT pgqr_add_rule('select 10;', 'select 11;');
SELECT pgqr_rules();
SELECT pgqr_remove_rule('select 10;');
SELECT pgqr_truncate();
```

- `pgqr_add_rule(source, target)`：添加一条重写规则。
- `pgqr_remove_rule(source)`：删除一条规则。
- `pgqr_truncate()`：删除全部规则。
- `pgqr_rules()`：查看当前共享内存中的规则和重写计数。

### 注意事项

- 匹配是精确的：大小写、空白和分号都必须逐字符一致。
- 不支持参数化 SQL。
- 最大语句长度硬编码为 32 KB。
- 规则不会持久化；重启后会消失，除非你重新应用。
