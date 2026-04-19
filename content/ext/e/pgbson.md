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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresbson-2.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresbson-2.0.2.tar.gz</div>
    <div class="ext-card__desc">postgresbson-2.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgbson`**](/ext/e/pgbson) | `2.0.2` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3910  | [**`pgbson`**](/ext/e/pgbson) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`mongo_fdw`](/ext/e/mongo_fdw) [`documentdb`](/ext/e/documentdb) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb_distributed`](/ext/e/documentdb_distributed) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release tag 2.0.2 still ships extension SQL version 2.0; PGXN dist name is bson, CREATE EXTENSION name is pgbson, RPM package root is postgresbson, and the runtime dependency is libbson.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pgbson` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresbson_$v` | `libbson` |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgbson` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 | AVAIL PIGSTY 2.0.2 1 |
@ el8.x86_64 18 postgresbson_18 postgresbson_18-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 30.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_18-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 postgresbson_18 postgresbson_18-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_18-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 postgresbson_18 postgresbson_18-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_18-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 postgresbson_18 postgresbson_18-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_18-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 postgresbson_18 postgresbson_18-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_18-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 postgresbson_18 postgresbson_18-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_18-2.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb pigsty 2.0.2 37.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb pigsty 2.0.2 37.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb pigsty 2.0.2 37.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb pigsty 2.0.2 37.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb pigsty 2.0.2 39.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb pigsty 2.0.2 38.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~noble_amd64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.0.2-1PIGSTY~noble_arm64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-18-pgbson_2.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 postgresbson_17 postgresbson_17-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 30.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_17-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 postgresbson_17 postgresbson_17-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_17-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 postgresbson_17 postgresbson_17-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_17-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 postgresbson_17 postgresbson_17-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_17-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 postgresbson_17 postgresbson_17-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_17-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 postgresbson_17 postgresbson_17-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_17-2.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb pigsty 2.0.2 37.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb pigsty 2.0.2 37.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb pigsty 2.0.2 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb pigsty 2.0.2 37.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb pigsty 2.0.2 40.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb pigsty 2.0.2 39.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~noble_amd64.deb pigsty 2.0.2 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.0.2-1PIGSTY~noble_arm64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-17-pgbson_2.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 postgresbson_16 postgresbson_16-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 30.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_16-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 postgresbson_16 postgresbson_16-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_16-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 postgresbson_16 postgresbson_16-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_16-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 postgresbson_16 postgresbson_16-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_16-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 postgresbson_16 postgresbson_16-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_16-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 postgresbson_16 postgresbson_16-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_16-2.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb pigsty 2.0.2 37.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb pigsty 2.0.2 37.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb pigsty 2.0.2 37.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb pigsty 2.0.2 37.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb pigsty 2.0.2 40.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb pigsty 2.0.2 39.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~noble_amd64.deb pigsty 2.0.2 38.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.0.2-1PIGSTY~noble_arm64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-16-pgbson_2.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 postgresbson_15 postgresbson_15-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 30.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_15-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 postgresbson_15 postgresbson_15-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_15-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 postgresbson_15 postgresbson_15-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_15-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 postgresbson_15 postgresbson_15-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_15-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 postgresbson_15 postgresbson_15-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_15-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 postgresbson_15 postgresbson_15-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_15-2.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb pigsty 2.0.2 37.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb pigsty 2.0.2 37.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb pigsty 2.0.2 37.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb pigsty 2.0.2 37.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb pigsty 2.0.2 40.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb pigsty 2.0.2 39.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~noble_amd64.deb pigsty 2.0.2 38.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.0.2-1PIGSTY~noble_arm64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-15-pgbson_2.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 postgresbson_14 postgresbson_14-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 30.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_14-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 postgresbson_14 postgresbson_14-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_14-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 postgresbson_14 postgresbson_14-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_14-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 postgresbson_14 postgresbson_14-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_14-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 postgresbson_14 postgresbson_14-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_14-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 postgresbson_14 postgresbson_14-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_14-2.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb pigsty 2.0.2 37.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb pigsty 2.0.2 37.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb pigsty 2.0.2 37.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb pigsty 2.0.2 37.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb pigsty 2.0.2 40.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb pigsty 2.0.2 39.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~noble_amd64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.0.2-1PIGSTY~noble_arm64.deb pigsty 2.0.2 38.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-14-pgbson_2.0.2-1PIGSTY~noble_arm64.deb
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

来源：[README](https://github.com/buzzm/postgresbson/blob/master/README.md), [META.json 2.0.2](https://github.com/buzzm/postgresbson/blob/master/META.json), [pgbson.control](https://github.com/buzzm/postgresbson/blob/master/pgbson.control)

`pgbson` 增加了 BSON 数据类型，以及感知 BSON 的访问器与操作符。上游文档将包版本标为 `2.0.2`，而扩展 control 文件暴露的 SQL 默认版本仍是 `2.0`；这与其打包说明一致，即发行包版本领先于扩展 SQL 版本。

```sql
CREATE EXTENSION pgbson;
```

### 核心访问模式

#### 类型化 dotpath 访问器

类型化 dotpath 访问器会直接遍历 BSON 结构，是上游推荐的快速路径：

```sql
SELECT bson_get_datetime(bson_column, 'msg.header.event.ts') FROM my_table;
SELECT bson_get_bson(bson_column, 'msg.header.event') FROM my_table;
SELECT bson_get_string(bson_column, 'data.payload.product.definition.id') FROM my_table;
```

#### JSON 风格操作符

也支持 JSON 风格的操作符：

```sql
SELECT (bson_column->'msg'->'header'->'event'->>'ts')::timestamp
FROM my_table;
```

### 主要函数与操作符

- 类型化 getter，例如 `bson_get_string`、`bson_get_int32`、`bson_get_int64`、`bson_get_double`、`bson_get_decimal`、`bson_get_datetime`、`bson_get_binary` 与 `bson_get_boolean`。
- `bson_get_bson` 用于返回 BSON 子文档。
- `bson_get_jsonb_array` 适合在路径解析到数组后继续使用原生 `jsonb` 数组操作符。
- 箭头操作符 `->` 与 `->>`，用法接近 PostgreSQL JSON 类型。
- 通过 Extended JSON 转成 `json`/`jsonb`，以保留类型精度。

### 互操作与索引

需要 PostgreSQL JSON 操作符时，可先将 BSON 转成 `jsonb`：

```sql
SELECT (bson_get_bson(bson_column, 'msg.header.event')::jsonb) ?& ARRAY['id', 'type']
FROM my_table;
```

也可以在提取路径上建立表达式索引：

```sql
CREATE INDEX ON data_collection (bson_get_string(data, 'd.recordId'));
```

README 还说明 BSON 值可通过 `bytea` cast 实现字节级 round-trip。

### 注意事项

- dotpath 访问器通常比长链式 `->` 访问更快、更省内存，因为它不会物化中间子结构。
- `bson_get_bson()` 在路径终点是 scalar 时会返回 `NULL`，因为简单标量不是 BSON 文档。
- 上游明确指出，数组处理与错误类型访问器行为的人机工学仍有待改进。
