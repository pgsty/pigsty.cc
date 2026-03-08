---
title: "dblink"
linkTitle: "dblink"
description: "从数据库内连接到其他 PostgreSQL 数据库"
weight: 8970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/dblink.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/dblink.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/dblink.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`dblink`**](/ext/e/dblink) | `1.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8970  | [**`dblink`**](/ext/e/dblink) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plproxy`](/ext/e/plproxy) [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`citus`](/ext/e/citus) [`wrappers`](/ext/e/wrappers) [`pgspider_ext`](/ext/e/pgspider_ext) [`pglogical`](/ext/e/pglogical) [`repmgr`](/ext/e/repmgr) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`emaj`](/ext/e/emaj) [`mimeo`](/ext/e/mimeo) [`omni_schema`](/ext/e/omni_schema) [`omni_test`](/ext/e/omni_test) [`omni_vfs`](/ext/e/omni_vfs) [`pg_jobmon`](/ext/e/pg_jobmon) [`pg_profile`](/ext/e/pg_profile) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION dblink;
```
