---
title: "cat_tools"
linkTitle: "cat_tools"
description: "用于操作 PostgreSQL 系统目录的工具集"
weight: 5290
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Postgres-Extensions/cat_tools">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Postgres-Extensions/cat_tools</div>
    <div class="ext-card__desc">https://github.com/Postgres-Extensions/cat_tools</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/cat_tools-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">cat_tools-0.3.0.tar.gz</div>
    <div class="ext-card__desc">cat_tools-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`cat_tools`**](/ext/e/cat_tools) | `0.3.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5290  | [**`cat_tools`**](/ext/e/cat_tools) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `cat_tools` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) `pg_catalog_get_defs` `pg_global_catalog` `meta_triggers` [`pg_catcheck`](/ext/e/pg_catcheck) [`pgdd`](/ext/e/pgdd) [`ddlx`](/ext/e/ddlx) [`meta`](/ext/e/meta) `object_reference` |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | `extension_drop` `object_reference` |
{.ext-table .ext-table--rel}


> Promoted from a source-only universe row to PIGSTY RPM and DEB packages at 0.3.0; control fixes schema cat_tools and META declares the plpgsql runtime dependency.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "14,15,16,17,18" >}} | `cat_tools` | `plpgsql` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `cat_tools_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cat-tools` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
@ el8.x86_64 18 cat_tools_18 cat_tools_18-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cat_tools_18-0.3.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 cat_tools_18 cat_tools_18-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cat_tools_18-0.3.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 cat_tools_18 cat_tools_18-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cat_tools_18-0.3.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 cat_tools_18 cat_tools_18-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cat_tools_18-0.3.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 cat_tools_18 cat_tools_18-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cat_tools_18-0.3.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 cat_tools_18 cat_tools_18-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cat_tools_18-0.3.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-cat-tools postgresql-18-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-18-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 cat_tools_17 cat_tools_17-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cat_tools_17-0.3.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 cat_tools_17 cat_tools_17-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cat_tools_17-0.3.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 cat_tools_17 cat_tools_17-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cat_tools_17-0.3.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 cat_tools_17 cat_tools_17-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cat_tools_17-0.3.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 cat_tools_17 cat_tools_17-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cat_tools_17-0.3.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 cat_tools_17 cat_tools_17-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cat_tools_17-0.3.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-cat-tools postgresql-17-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-17-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 cat_tools_16 cat_tools_16-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cat_tools_16-0.3.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 cat_tools_16 cat_tools_16-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cat_tools_16-0.3.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 cat_tools_16 cat_tools_16-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cat_tools_16-0.3.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 cat_tools_16 cat_tools_16-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cat_tools_16-0.3.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 cat_tools_16 cat_tools_16-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cat_tools_16-0.3.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 cat_tools_16 cat_tools_16-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cat_tools_16-0.3.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-cat-tools postgresql-16-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-16-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 cat_tools_15 cat_tools_15-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cat_tools_15-0.3.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 cat_tools_15 cat_tools_15-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cat_tools_15-0.3.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 cat_tools_15 cat_tools_15-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cat_tools_15-0.3.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 cat_tools_15 cat_tools_15-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cat_tools_15-0.3.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 cat_tools_15 cat_tools_15-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cat_tools_15-0.3.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 cat_tools_15 cat_tools_15-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cat_tools_15-0.3.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-cat-tools postgresql-15-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-15-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 cat_tools_14 cat_tools_14-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cat_tools_14-0.3.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 cat_tools_14 cat_tools_14-0.3.0-1PIGSTY.el8.noarch.rpm pigsty 0.3.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cat_tools_14-0.3.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 cat_tools_14 cat_tools_14-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cat_tools_14-0.3.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 cat_tools_14 cat_tools_14-0.3.0-1PIGSTY.el9.noarch.rpm pigsty 0.3.0 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cat_tools_14-0.3.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 cat_tools_14 cat_tools_14-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cat_tools_14-0.3.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 cat_tools_14 cat_tools_14-0.3.0-1PIGSTY.el10.noarch.rpm pigsty 0.3.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cat_tools_14-0.3.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~trixie_all.deb pigsty 0.3.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~jammy_all.deb pigsty 0.3.0 27.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~noble_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-cat-tools postgresql-14-cat-tools_0.3.0-1PIGSTY~resolute_all.deb pigsty 0.3.0 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cat-tools/postgresql-14-cat-tools_0.3.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `cat_tools` 扩展的 RPM / DEB 包：

```bash
pig build pkg cat_tools         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `cat_tools` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install cat_tools;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y cat_tools -v 18  # PG 18
pig ext install -y cat_tools -v 17  # PG 17
pig ext install -y cat_tools -v 16  # PG 16
pig ext install -y cat_tools -v 15  # PG 15
pig ext install -y cat_tools -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y cat_tools_18       # PG 18
dnf install -y cat_tools_17       # PG 17
dnf install -y cat_tools_16       # PG 16
dnf install -y cat_tools_15       # PG 15
dnf install -y cat_tools_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-cat-tools   # PG 18
apt install -y postgresql-17-cat-tools   # PG 17
apt install -y postgresql-16-cat-tools   # PG 16
apt install -y postgresql-15-cat-tools   # PG 15
apt install -y postgresql-14-cat-tools   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION cat_tools CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：

- [cat_tools 0.3.0 README](https://github.com/Postgres-Extensions/cat_tools/blob/0.3.0/README.asc)
- [cat_tools 0.3.0 历史记录](https://github.com/Postgres-Extensions/cat_tools/blob/0.3.0/HISTORY.asc)
- [cat_tools 0.3.0 控制文件](https://github.com/Postgres-Extensions/cat_tools/blob/0.3.0/cat_tools.control)
- [cat_tools 0.3.0 安装 SQL](https://github.com/Postgres-Extensions/cat_tools/blob/0.3.0/sql/cat_tools--0.3.0.sql.in)

`cat_tools` 提供用于 PostgreSQL 目录自省的带类型视图、枚举和辅助函数。它面向需要比反复解析原始 `pg_catalog` 字段更稳定、更易读接口的数据库代码；这些视图仍会跟随 PostgreSQL 目录变化，因此每次跨大版本升级时都必须审查。

### 安装并授予访问权限

```sql
CREATE EXTENSION cat_tools;
GRANT cat_tools__usage TO app_introspection;
```

扩展安装在固定的 `cat_tools` 模式中，要求 `plpgsql`，且不可重定位。应授予 `cat_tools__usage` 角色，而不是直接暴露内部 `_cat_tools` 辅助对象。

### 检查关系与列

```sql
SELECT cat_tools.relation__kind(c.relkind::text)
FROM pg_catalog.pg_class AS c
WHERE c.oid = 'public.orders'::regclass;

SELECT cat_tools.relation__column_names('public.orders'::regclass);
SELECT cat_tools.pg_attribute__get('public.orders'::regclass, 'id');
```

常用的关系辅助函数包括 `pg_class(regclass)`、`relation__is_catalog`、`relation__is_temp`、`relation__kind` 和 `relation__relkind`。带类型的映射函数能明确表示目录中的单字符代码。

### 检查例程

版本 0.3 新增了同时覆盖函数和过程的函数与类型：

```sql
SELECT cat_tools.routine__arg_types(
  'public.calculate_total(integer, numeric)'::regprocedure
);

SELECT cat_tools.routine__parse_arg_names(
  'IN account_id integer, INOUT total numeric'
);
```

例程接口包括 `routine__parse_arg_types`、`routine__parse_arg_names`、`routine__arg_types`、`routine__arg_names`、它们的文本变体，以及用于例程种类、参数模式、易变性和并行安全性的映射。`function__arg_types` 与 `function__arg_types_text` 已弃用；请改用例程解析器。

### 版本 0.3.0 与注意事项

- 上游版本 0.3.0 支持 PostgreSQL 12-18+；当前 Pigsty 软件包覆盖 PostgreSQL 14-18。
- 该版本修正了复合类型、外部表和物化视图对应的 `c`、`f`、`m` 映射。任何曾绕过旧映射问题的代码都应重新测试。
- 内部 `_cat_tools` 辅助对象现在会撤销 `PUBLIC` 的 `EXECUTE`；调用者应继承 `cat_tools__usage` 并使用受支持的接口。
- 从 0.2.3 更新至 0.3.0 会新增枚举值，因此无法在 PostgreSQL 11 或更早版本上运行。请按照上游文档规定的顺序升级数据库大版本和扩展。
- PostgreSQL 不承诺跨大版本的目录兼容性。即使使用这些包装器，也应针对每个受支持的 PostgreSQL 大版本固定测试。
