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

> 语法：
>
> ```sql
> CREATE EXTENSION pgbson;
> SELECT bson_get_datetime(bson_column, 'msg.header.event.ts') FROM my_table;
> SELECT (bson_column->'msg'->'header'->'event'->>'ts')::timestamp FROM my_table;
> ```
>
> 来源：[README](https://github.com/buzzm/postgresbson)

`pgbson` 为 PostgreSQL 增加了 BSON 数据类型，以及用于创建、检查和查询 BSON 文档的函数与操作符。上游 README 将其定位为 JSON/JSONB 的二进制、富类型替代方案，具备精确 round-trip、对日期时间和数值子类型的原生支持，以及原始字节支持。

## BSON 的优势

README 强调 BSON 相比 JSON 的几项优势：

- 日期时间是第一类值
- 数值类型保持区分（`int32`、`int64`、`float`、`decimal`）
- 原始字节数组是第一类值
- 往返转换可保留完全一致的二进制表示
- 多种语言的原生 SDK 支持

## 访问方式

扩展提供两种访问风格：

### Dotpath 访问器

这是上游文档中的高性能类型安全访问器：

```sql
SELECT bson_get_datetime(bson_column, 'msg.header.event.ts') FROM my_table;
SELECT bson_get_bson(bson_column, 'msg.header.event') FROM my_table;
```

README 认为它们比反复使用箭头解引用更省内存，因为它们会直接遍历 BSON 结构，只在终点处分配材料化结果。

### 箭头操作符

它也支持类似 JSON 的操作符：

```sql
SELECT (bson_column->'msg'->'header'->'event'->>'ts')::timestamp
FROM my_table;
```

## JSON 互操作

BSON 类型可以通过 Extended JSON（EJSON）转换为 JSON，从而保留类型精度。这使得 BSON 值可以在需要时交给 JSON/JSONB 函数和操作符处理：

```sql
SELECT (bson_get_bson(bson_column, 'msg.header.event')::jsonb) ?& ARRAY['id','type']
FROM my_table;
```

## 说明

README 中给出了跨 Java、Kafka、Python 和 PostgreSQL 的 BSON 往返示例，强调将存储的 BSON 载荷重新转成 `bytea` 后可以做到字节级一致。
