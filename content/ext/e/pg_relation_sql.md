---
title: "pg_relation_sql"
linkTitle: "pg_relation_sql"
description: "根据 PostgreSQL 外键生成可内联的关系导航 SQL 函数"
weight: 4210
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/asmgit/pg_relation_sql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">asmgit/pg_relation_sql</div>
    <div class="ext-card__desc">https://github.com/asmgit/pg_relation_sql</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_relation_sql-0.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_relation_sql-0.2.2.tar.gz</div>
    <div class="ext-card__desc">pg_relation_sql-0.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_relation_sql`**](/ext/e/pg_relation_sql) | `0.2.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang plpgsql" href="/ext/language#plpgsql">PLpgSQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4210  | [**`pg_relation_sql`**](/ext/e/pg_relation_sql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_readme`](/ext/e/pg_readme) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_get_functiondef`](/ext/e/pg_get_functiondef) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_query_rewrite`](/ext/e/pg_query_rewrite) [`ddl_historization`](/ext/e/ddl_historization) [`data_historization`](/ext/e/data_historization) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream intentionally ships no control file or CREATE EXTENSION path; execute the packaged relation_sql.sql in each database; relation_sql('install') requires superuser only for its optional event trigger.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_relation_sql` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_relation_sql_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-relation-sql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 | AVAIL PIGSTY 0.2.2 1 |
@ el8.x86_64 18 pg_relation_sql_18 pg_relation_sql_18-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relation_sql_18-0.2.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_relation_sql_18 pg_relation_sql_18-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relation_sql_18-0.2.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_relation_sql_18 pg_relation_sql_18-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relation_sql_18-0.2.2-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_relation_sql_18 pg_relation_sql_18-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relation_sql_18-0.2.2-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_relation_sql_18 pg_relation_sql_18-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relation_sql_18-0.2.2-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_relation_sql_18 pg_relation_sql_18-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relation_sql_18-0.2.2-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-relation-sql postgresql-18-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-18-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pg_relation_sql_17 pg_relation_sql_17-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relation_sql_17-0.2.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_relation_sql_17 pg_relation_sql_17-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relation_sql_17-0.2.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_relation_sql_17 pg_relation_sql_17-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relation_sql_17-0.2.2-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_relation_sql_17 pg_relation_sql_17-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relation_sql_17-0.2.2-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_relation_sql_17 pg_relation_sql_17-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relation_sql_17-0.2.2-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_relation_sql_17 pg_relation_sql_17-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relation_sql_17-0.2.2-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-relation-sql postgresql-17-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-17-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pg_relation_sql_16 pg_relation_sql_16-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relation_sql_16-0.2.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_relation_sql_16 pg_relation_sql_16-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relation_sql_16-0.2.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_relation_sql_16 pg_relation_sql_16-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relation_sql_16-0.2.2-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_relation_sql_16 pg_relation_sql_16-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relation_sql_16-0.2.2-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_relation_sql_16 pg_relation_sql_16-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relation_sql_16-0.2.2-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_relation_sql_16 pg_relation_sql_16-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relation_sql_16-0.2.2-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-relation-sql postgresql-16-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-16-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ el8.x86_64 15 pg_relation_sql_15 pg_relation_sql_15-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relation_sql_15-0.2.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_relation_sql_15 pg_relation_sql_15-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relation_sql_15-0.2.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_relation_sql_15 pg_relation_sql_15-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relation_sql_15-0.2.2-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_relation_sql_15 pg_relation_sql_15-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relation_sql_15-0.2.2-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_relation_sql_15 pg_relation_sql_15-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relation_sql_15-0.2.2-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_relation_sql_15 pg_relation_sql_15-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relation_sql_15-0.2.2-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-relation-sql postgresql-15-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-15-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ el8.x86_64 14 pg_relation_sql_14 pg_relation_sql_14-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_relation_sql_14-0.2.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_relation_sql_14 pg_relation_sql_14-0.2.2-1PGSTY.el8.noarch.rpm pigsty 0.2.2 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_relation_sql_14-0.2.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_relation_sql_14 pg_relation_sql_14-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_relation_sql_14-0.2.2-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_relation_sql_14 pg_relation_sql_14-0.2.2-1PGSTY.el9.noarch.rpm pigsty 0.2.2 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_relation_sql_14-0.2.2-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_relation_sql_14 pg_relation_sql_14-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_relation_sql_14-0.2.2-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_relation_sql_14 pg_relation_sql_14-0.2.2-1PGSTY.el10.noarch.rpm pigsty 0.2.2 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_relation_sql_14-0.2.2-1PGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb pigsty 0.2.2 14.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-relation-sql postgresql-14-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb pigsty 0.2.2 14.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-relation-sql/postgresql-14-pg-relation-sql_0.2.2-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_relation_sql` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_relation_sql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_relation_sql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_relation_sql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_relation_sql -v 18  # PG 18
pig ext install -y pg_relation_sql -v 17  # PG 17
pig ext install -y pg_relation_sql -v 16  # PG 16
pig ext install -y pg_relation_sql -v 15  # PG 15
pig ext install -y pg_relation_sql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_relation_sql_18       # PG 18
dnf install -y pg_relation_sql_17       # PG 17
dnf install -y pg_relation_sql_16       # PG 16
dnf install -y pg_relation_sql_15       # PG 15
dnf install -y pg_relation_sql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-relation-sql   # PG 18
apt install -y postgresql-17-pg-relation-sql   # PG 17
apt install -y postgresql-16-pg-relation-sql   # PG 16
apt install -y postgresql-15-pg-relation-sql   # PG 15
apt install -y postgresql-14-pg-relation-sql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}

> 此扩展不需要执行 `CREATE EXTENSION` 语句

## 用法

来源：

- [PGXN 上的 pg_relation_sql 0.2.2](https://pgxn.org/dist/pg_relation_sql/0.2.2/)
- [pg_relation_sql 0.2.2 README](https://api.pgxn.org/src/pg_relation_sql/pg_relation_sql-0.2.2/README.md)
- [pg_relation_sql 0.2.2 SQL 脚本](https://api.pgxn.org/src/pg_relation_sql/pg_relation_sql-0.2.2/relation_sql.sql)
- [pg_relation_sql 0.2.2 执行计划对比](https://api.pgxn.org/src/pg_relation_sql/pg_relation_sql-0.2.2/EXPLAIN.md)

`pg_relation_sql` 0.2.2 根据 PostgreSQL 外键生成成对的 SQL 函数：lookup 函数沿外键找到被引用行，list 函数则返回反向引用当前行的记录。生成的 `LANGUAGE sql` 函数被设计为可由优化器内联，使查询可以沿已声明的关系导航，而无需反复书写连接条件。

上游有意只发布一个独立的 `relation_sql.sql` 文件，没有 control 文件。因此不存在 `CREATE EXTENSION pg_relation_sql`；需要在每个使用这些函数的数据库中执行软件包提供的脚本。

```bash
psql app -f /usr/pgsql-17/share/pg_relation_sql/relation_sql.sql
psql app -f /usr/share/postgresql/17/pg_relation_sql/relation_sql.sql
```

脚本会在当前模式中创建 `relation_sql(text)`，最后请求执行 `relation_sql('install')`。

### 生成并使用关系函数

```sql
CREATE TABLE profile (
  id bigint PRIMARY KEY,
  name text
);

CREATE TABLE address (
  id bigint PRIMARY KEY,
  profile_id bigint REFERENCES profile(id),
  city text
);

SELECT status, command FROM relation_sql('sync');

SELECT a.city, p.name
FROM address AS a, profile(a) AS p;

SELECT p.name, a.city
FROM profile AS p, address_list(p) AS a;
```

每个外键都会得到一个沿引用方向查询的 lookup 函数，以及一个通常带 `_list` 后缀的反向函数；一对一外键除外。复合外键、跨模式外键均受支持，指向同一目标的多个外键会获得带角色前缀的名称。

### 生成器模式

- `relation_sql()` 返回状态面板。
- `relation_sql('show')` 显示计算出的函数及可直接执行的同步命令，但不修改对象。
- `relation_sql('sync')` 根据当前外键创建、替换或删除带标记的关系函数。
- `relation_sql('install')` 添加 `ddl_command_end` 事件触发器并立即同步。
- `relation_sql('uninstall')` 删除事件触发器；`relation_sql('drop')` 删除生成的函数。

### 运维边界

- 创建事件触发器需要超级用户权限。权限不足时会产生警告，但一次性同步仍会使用调用者已有的对象权限执行。
- 应把生成器安装在 `search_path` 受控的可信模式中：自动模式会创建一个保留安装时搜索路径的 `SECURITY DEFINER` 事件触发器辅助函数。
- 生成的函数依赖表的行类型。删除被这些函数用作行类型的表时可能需要 `CASCADE`；执行破坏性 DDL 前应检查依赖关系。
- 生成的函数体使用 `SELECT *`，因此不能很好地配合列级 `SELECT` 授权；行级安全仍会生效。
- 对执行计划敏感的查询应把关系函数写在 `FROM` 中。选择列表中的属性记法会变成 `ProjectSet`，而 `NOT EXISTS (SELECT FROM relation_function(row))` 可能仍是逐行执行的相关子计划，而不是等价的反连接。
- 查询对生成函数的依赖与对视图的依赖相同。不使用事件触发器时，应在迁移流程中运行 `relation_sql('sync')`。
- 上游要求 PostgreSQL 11 或更高版本；Pigsty 软件包覆盖 PostgreSQL 14–18。
