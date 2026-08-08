---
title: "pgbson"
linkTitle: "pgbson"
description: "为 PostgreSQL 提供 BSON 数据类型及访问函数"
weight: 3910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/buzzm/postgresbson">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">buzzm/postgresbson</div>
    <div class="ext-card__desc">https://github.com/buzzm/postgresbson</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresbson-2.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresbson-2.1.0.tar.gz</div>
    <div class="ext-card__desc">postgresbson-2.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgbson`**](/ext/e/pgbson) | `2.1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3910  | [**`pgbson`**](/ext/e/pgbson) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgjq`](/ext/e/pgjq) [`jsquery`](/ext/e/jsquery) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsonschema`](/ext/e/jsonschema) [`pg_projection`](/ext/e/pg_projection) [`hstore`](/ext/e/hstore) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`documentdb`](/ext/e/documentdb) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`jsonb_plperlu`](/ext/e/jsonb_plperlu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN distribution name is bson, CREATE EXTENSION name is pgbson, source archive and RPM root are postgresbson, and the control default_version is 2.1 while the package release is 2.1.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pgbson` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresbson_$v` | `libbson` |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgbson` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 | AVAIL PIGSTY 2.1.0 1 |
@ el8.x86_64 18 postgresbson_18 postgresbson_18-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_18-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 postgresbson_18 postgresbson_18-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_18-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 postgresbson_18 postgresbson_18-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 34.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_18-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 postgresbson_18 postgresbson_18-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_18-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 postgresbson_18 postgresbson_18-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_18-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 postgresbson_18 postgresbson_18-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_18-2.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 43.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 42.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 43.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 42.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 45.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 44.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 44.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 44.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 44.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgbson postgresql-18-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-18-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 postgresbson_17 postgresbson_17-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_17-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 postgresbson_17 postgresbson_17-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_17-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 postgresbson_17 postgresbson_17-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 34.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_17-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 postgresbson_17 postgresbson_17-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_17-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 postgresbson_17 postgresbson_17-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_17-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 postgresbson_17 postgresbson_17-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_17-2.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 43.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 43.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 42.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 46.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 45.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 44.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 44.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgbson postgresql-17-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-17-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 postgresbson_16 postgresbson_16-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_16-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 postgresbson_16 postgresbson_16-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_16-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 postgresbson_16 postgresbson_16-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 34.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_16-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 postgresbson_16 postgresbson_16-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_16-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 postgresbson_16 postgresbson_16-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_16-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 postgresbson_16 postgresbson_16-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_16-2.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 43.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 43.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 42.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 46.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 45.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 44.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgbson postgresql-16-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-16-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 postgresbson_15 postgresbson_15-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_15-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 postgresbson_15 postgresbson_15-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_15-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 postgresbson_15 postgresbson_15-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 34.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_15-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 postgresbson_15 postgresbson_15-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_15-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 postgresbson_15 postgresbson_15-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_15-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 postgresbson_15 postgresbson_15-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_15-2.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 43.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 43.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 42.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 46.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 45.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 44.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 44.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 44.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgbson postgresql-15-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-15-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 postgresbson_14 postgresbson_14-2.1.0-1PIGSTY.el8.x86_64.rpm pigsty 2.1.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgresbson_14-2.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 postgresbson_14 postgresbson_14-2.1.0-1PIGSTY.el8.aarch64.rpm pigsty 2.1.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgresbson_14-2.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 postgresbson_14 postgresbson_14-2.1.0-1PIGSTY.el9.x86_64.rpm pigsty 2.1.0 34.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgresbson_14-2.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 postgresbson_14 postgresbson_14-2.1.0-1PIGSTY.el9.aarch64.rpm pigsty 2.1.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgresbson_14-2.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 postgresbson_14 postgresbson_14-2.1.0-1PIGSTY.el10.x86_64.rpm pigsty 2.1.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgresbson_14-2.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 postgresbson_14 postgresbson_14-2.1.0-1PIGSTY.el10.aarch64.rpm pigsty 2.1.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgresbson_14-2.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb pigsty 2.1.0 43.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb pigsty 2.1.0 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb pigsty 2.1.0 43.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb pigsty 2.1.0 42.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb pigsty 2.1.0 46.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb pigsty 2.1.0 45.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~noble_amd64.deb pigsty 2.1.0 44.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~noble_arm64.deb pigsty 2.1.0 44.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb pigsty 2.1.0 44.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgbson postgresql-14-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb pigsty 2.1.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postgresbson/postgresql-14-pgbson_2.1.0-1PIGSTY~resolute_arm64.deb
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

- [pgbson 2.1.0 README](https://api.pgxn.org/src/bson/bson-2.1.0/README.md)
- [pgbson 2.1 控制文件](https://api.pgxn.org/src/bson/bson-2.1.0/pgbson.control)
- [pgbson 2.1 SQL API](https://api.pgxn.org/src/bson/bson-2.1.0/pgbson--2.1.sql)

`pgbson` 添加了 BSON 数据类型、带类型的点路径访问器、JSON 风格的导航、类型转换、比较操作符，以及 btree/hash 索引。当二进制往返保真度或 BSON 特有的标量类型至关重要时，请使用 BSON；如果主要需求是 PostgreSQL 原生 JSON 索引，请使用 `jsonb`。PGXN 发行版本为 `2.1.0`，而 SQL 扩展版本为 `2.1`。

### 安装并存储 BSON

```sql
CREATE EXTENSION pgbson;
SELECT pgbson_version();

CREATE TABLE events (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  payload bson NOT NULL
);

INSERT INTO events (payload)
VALUES ('{"user":{"name":"Ada"},"attempt":3}'::jsonb::bson);
```

本地模块依赖 `libbson`。隐式的 `bytea` 到 `bson` 转换会验证 BSON 输入，而反向转换会保留二进制表示。

### 提取值

带类型的访问器无需物化每一层中间文档：

```sql
SELECT bson_get_string(payload, 'user.name'),
       bson_get_int32(payload, 'attempt')
FROM events;
```

其他带类型的 getter 覆盖 64 位整数、双精度数、十进制数、日期时间、二进制值、布尔值、嵌套 BSON 文档和 JSONB 数组。路径缺失或类型不匹配时返回 `NULL`；如果必须区分这些情况，请在摄取数据时验证预期的 BSON 模式。

版本 2.1 新增了与类型无关的终端提取器：

```sql
SELECT bson_get_value(payload, 'user.name')
FROM events;
-- { "_" : "Ada" }
```

`bson_get_value` 始终将选中的标量、数组或文档包装在键 `_` 下。调用方应只移除这一层包装。该函数有意不提供可链式使用的 `->` 等价形式。

### 导航、比较与索引

```sql
SELECT payload->'user'->>'name'
FROM events;

CREATE INDEX events_user_name_idx
ON events (bson_get_string(payload, 'user.name'));

CREATE INDEX events_payload_btree_idx ON events (payload);
CREATE INDEX events_payload_hash_idx ON events USING hash (payload);
```

版本 2.1 提供逻辑比较操作符 `=`、`<>`、`<`、`<=`、`>` 和 `>=`；`==` 与 `<<>>` 分别执行二进制相等和不等比较。默认 btree 操作符类使用 BSON 逻辑比较，而 hash 操作符类使用二进制相等。字段顺序或字节完全一致性有影响时，应有意识地选择。

### 升级与注意事项

```sql
ALTER EXTENSION pgbson UPDATE TO '2.1';
```

- 安装 2.1 共享库不会更新已有 2.0 扩展的 SQL 对象；安装文件后应执行扩展更新。
- 2.1 共享库修复了 `bson_get_bson()` 或 `->` 解析到标量端点时导致后端崩溃的问题。即使应用尚未使用新增的 2.1 SQL 函数，也应替换早期二进制文件。
- BSON 到 JSON/JSONB 的转换使用 Extended JSON。BSON 与 JSONB 的类型、相等和排序语义不同，因此这种转换并非对所有工作流都无损。
- 在 2.1 中，BSON 日期时间上的 `->>` 会包含末尾的 `Z`；`bson_get_datetime()` 保持不变。请检查会比较旧文本格式的客户端。
- BSON 顶层值是文档，不能是裸数组或标量。`bson_get_value` 使用 `_` 包装，以便在该限制下返回任意嵌套形态。
