---
title: "pgbson"
linkTitle: "pgbson"
description: "为 PostgreSQL 提供 BSON 数据类型、比较与访问函数"
weight: 3910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/buzzm/postgresbson">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">buzzm/postgresbson</div>
    <div class="ext-card__desc">https://github.com/buzzm/postgresbson</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresbson-2.0.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresbson-2.0.4.tar.gz</div>
    <div class="ext-card__desc">postgresbson-2.0.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgbson`**](/ext/e/pgbson) | `2.0.4` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3910  | [**`pgbson`**](/ext/e/pgbson) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`mongo_fdw`](/ext/e/mongo_fdw) [`documentdb`](/ext/e/documentdb) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb_distributed`](/ext/e/documentdb_distributed) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN distribution name is bson; CREATE EXTENSION name is pgbson; package release 2.0.4 still installs extension SQL version 2.0; RPM package root is postgresbson and requires libbson.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pgbson` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresbson_$v` | `libbson` |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgbson` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 | AVAIL PIGSTY 2.0.4 1 |
@ el8.x86_64 18 postgresbson_18 postgresbson_18-2.0.4-1PIGSTY.el8.x86_64.rpm pigsty 2.0.4 30.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_18-2.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 postgresbson_18 postgresbson_18-2.0.4-1PIGSTY.el8.aarch64.rpm pigsty 2.0.4 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_18-2.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 postgresbson_18 postgresbson_18-2.0.4-1PIGSTY.el9.x86_64.rpm pigsty 2.0.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_18-2.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 postgresbson_18 postgresbson_18-2.0.4-1PIGSTY.el9.aarch64.rpm pigsty 2.0.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_18-2.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 postgresbson_18 postgresbson_18-2.0.4-1PIGSTY.el10.x86_64.rpm pigsty 2.0.4 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_18-2.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 postgresbson_18 postgresbson_18-2.0.4-1PIGSTY.el10.aarch64.rpm pigsty 2.0.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_18-2.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb pigsty 2.0.4 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb pigsty 2.0.4 37.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb pigsty 2.0.4 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb pigsty 2.0.4 37.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb pigsty 2.0.4 39.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb pigsty 2.0.4 39.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~noble_amd64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~noble_arm64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb pigsty 2.0.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb pigsty 2.0.4 38.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 postgresbson_17 postgresbson_17-2.0.4-1PIGSTY.el8.x86_64.rpm pigsty 2.0.4 30.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_17-2.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 postgresbson_17 postgresbson_17-2.0.4-1PIGSTY.el8.aarch64.rpm pigsty 2.0.4 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_17-2.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 postgresbson_17 postgresbson_17-2.0.4-1PIGSTY.el9.x86_64.rpm pigsty 2.0.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_17-2.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 postgresbson_17 postgresbson_17-2.0.4-1PIGSTY.el9.aarch64.rpm pigsty 2.0.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_17-2.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 postgresbson_17 postgresbson_17-2.0.4-1PIGSTY.el10.x86_64.rpm pigsty 2.0.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_17-2.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 postgresbson_17 postgresbson_17-2.0.4-1PIGSTY.el10.aarch64.rpm pigsty 2.0.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_17-2.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb pigsty 2.0.4 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb pigsty 2.0.4 37.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb pigsty 2.0.4 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb pigsty 2.0.4 37.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb pigsty 2.0.4 40.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb pigsty 2.0.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~noble_amd64.deb pigsty 2.0.4 38.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~noble_arm64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb pigsty 2.0.4 38.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb pigsty 2.0.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 postgresbson_16 postgresbson_16-2.0.4-1PIGSTY.el8.x86_64.rpm pigsty 2.0.4 30.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_16-2.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 postgresbson_16 postgresbson_16-2.0.4-1PIGSTY.el8.aarch64.rpm pigsty 2.0.4 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_16-2.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 postgresbson_16 postgresbson_16-2.0.4-1PIGSTY.el9.x86_64.rpm pigsty 2.0.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_16-2.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 postgresbson_16 postgresbson_16-2.0.4-1PIGSTY.el9.aarch64.rpm pigsty 2.0.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_16-2.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 postgresbson_16 postgresbson_16-2.0.4-1PIGSTY.el10.x86_64.rpm pigsty 2.0.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_16-2.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 postgresbson_16 postgresbson_16-2.0.4-1PIGSTY.el10.aarch64.rpm pigsty 2.0.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_16-2.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb pigsty 2.0.4 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb pigsty 2.0.4 37.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb pigsty 2.0.4 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb pigsty 2.0.4 37.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb pigsty 2.0.4 40.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb pigsty 2.0.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~noble_amd64.deb pigsty 2.0.4 38.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~noble_arm64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb pigsty 2.0.4 38.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb pigsty 2.0.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 postgresbson_15 postgresbson_15-2.0.4-1PIGSTY.el8.x86_64.rpm pigsty 2.0.4 30.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_15-2.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 postgresbson_15 postgresbson_15-2.0.4-1PIGSTY.el8.aarch64.rpm pigsty 2.0.4 30.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_15-2.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 postgresbson_15 postgresbson_15-2.0.4-1PIGSTY.el9.x86_64.rpm pigsty 2.0.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_15-2.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 postgresbson_15 postgresbson_15-2.0.4-1PIGSTY.el9.aarch64.rpm pigsty 2.0.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_15-2.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 postgresbson_15 postgresbson_15-2.0.4-1PIGSTY.el10.x86_64.rpm pigsty 2.0.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_15-2.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 postgresbson_15 postgresbson_15-2.0.4-1PIGSTY.el10.aarch64.rpm pigsty 2.0.4 29.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_15-2.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb pigsty 2.0.4 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb pigsty 2.0.4 37.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb pigsty 2.0.4 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb pigsty 2.0.4 37.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb pigsty 2.0.4 40.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb pigsty 2.0.4 39.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~noble_amd64.deb pigsty 2.0.4 38.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~noble_arm64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb pigsty 2.0.4 38.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 postgresbson_14 postgresbson_14-2.0.4-1PIGSTY.el8.x86_64.rpm pigsty 2.0.4 30.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_14-2.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 postgresbson_14 postgresbson_14-2.0.4-1PIGSTY.el8.aarch64.rpm pigsty 2.0.4 30.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_14-2.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 postgresbson_14 postgresbson_14-2.0.4-1PIGSTY.el9.x86_64.rpm pigsty 2.0.4 30.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_14-2.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 postgresbson_14 postgresbson_14-2.0.4-1PIGSTY.el9.aarch64.rpm pigsty 2.0.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_14-2.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 postgresbson_14 postgresbson_14-2.0.4-1PIGSTY.el10.x86_64.rpm pigsty 2.0.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_14-2.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 postgresbson_14 postgresbson_14-2.0.4-1PIGSTY.el10.aarch64.rpm pigsty 2.0.4 29.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_14-2.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb pigsty 2.0.4 37.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb pigsty 2.0.4 37.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb pigsty 2.0.4 37.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb pigsty 2.0.4 37.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb pigsty 2.0.4 40.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb pigsty 2.0.4 39.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~noble_amd64.deb pigsty 2.0.4 38.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~noble_arm64.deb pigsty 2.0.4 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb pigsty 2.0.4 38.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb pigsty 2.0.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.4-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgbson` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgbson         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgbson` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgbson;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgbson -v 18  # PG 18
pig ext install -y pgbson -v 17  # PG 17
pig ext install -y pgbson -v 16  # PG 16
pig ext install -y pgbson -v 15  # PG 15
pig ext install -y pgbson -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y postgresbson_18       # PG 18
dnf install -y postgresbson_17       # PG 17
dnf install -y postgresbson_16       # PG 16
dnf install -y postgresbson_15       # PG 15
dnf install -y postgresbson_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgbson   # PG 18
apt install -y postgresql-17-pgbson   # PG 17
apt install -y postgresql-16-pgbson   # PG 16
apt install -y postgresql-15-pgbson   # PG 15
apt install -y postgresql-14-pgbson   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgbson;
```

## 用法

来源：

- [postgresbson README at the 2.0.4 revision](https://github.com/buzzm/postgresbson/blob/ec71d314511d484a99ed510f480919dd0509fbe9/README.md)
- [META.json version 2.0.4](https://github.com/buzzm/postgresbson/blob/ec71d314511d484a99ed510f480919dd0509fbe9/META.json)
- [pgbson control file](https://github.com/buzzm/postgresbson/blob/ec71d314511d484a99ed510f480919dd0509fbe9/pgbson.control)
- [Version 2.0 SQL API](https://github.com/buzzm/postgresbson/blob/ec71d314511d484a99ed510f480919dd0509fbe9/pgbson--2.0.sql)

pgbson 添加了 BSON 数据类型、带类型的路径访问器、JSON 风格的操作符、转换以及表达式索引支持。当需要存储二进制 BSON 而不先将其每个值转换为 JSONB 时，请使用此扩展，特别是在保持 BSON 类型精度或进行字节级往返传输时。

分发版本是 2.0.4，而扩展控制和 SQL API 版本仍为 2.0。

### 创建扩展

    CREATE EXTENSION pgbson;

该本地模块依赖于 libbson。请安装一个针对兼容 PostgreSQL 和 libbson 版本构建的包。

### 存储和验证 BSON

当写入值时，bytea 到 bson 的转换会验证输入。版本 2.0.4 文档指出，在读取时可以假设存储的 BSON 是有效的。不要通过不安全的低级写操作绕过类型或转换路径。

### 提取值

带类型的点路径访问器可避免生成每个中间对象：

    SELECT bson_get_datetime(payload, 'msg.header.event.ts'),
           bson_get_string(payload, 'data.customer.name')
    FROM events;

使用 bson_get_bson 获取子文档：

    SELECT bson_get_bson(payload, 'msg.header.event')
    FROM events;

JSON 风格的导航也适用：

    SELECT payload->'msg'->'header'->'event'->>'ts'
    FROM events;

### 函数和操作符索引

- bson_get_string, bson_get_int32, bson_get_int64, bson_get_double, bson_get_decimal：带类型的标量访问器。
- bson_get_datetime, bson_get_binary, bson_get_boolean：用于其他 BSON 类型的访问器。
- bson_get_bson：返回嵌入的 BSON 文档。
- bson_get_jsonb_array：将数组端点转换为 PostgreSQL jsonb 数组。
- -> 和 ->>：使用 JSON 风格语法导航值。
- bson 转换到 json 和 jsonb：暴露扩展的 JSON 用于 PostgreSQL 的 JSON 处理。
- bson 和 bytea 转换：保留 BSON 的二进制表示形式。

### 索引和互操作

在频繁查询路径上创建表达式索引：

    CREATE INDEX events_customer_id_idx
    ON events (bson_get_string(payload, 'data.customer.id'));

将子文档转换为 jsonb 以利用 PostgreSQL 的 JSON 操作符：

    SELECT bson_get_bson(payload, 'msg.header')::jsonb ? 'event'
    FROM events;

### 注意事项

- 带类型的获取器仅在端点具有预期的 BSON 类型时才返回有用的数据。在数据摄取代码中明确表示类型期望。
- bson_get_bson 对于标量端点会返回 NULL，因为标量不是一个 BSON 文档。
- 点路径访问器通常比重复提取中的长操作符链更优，因为它避免了中间的 BSON 值。
- BSON 和 JSONB 在类型和排序语义上有所不同。转换可能有用但不是每个 BSON 工作流程的无损替代品。
