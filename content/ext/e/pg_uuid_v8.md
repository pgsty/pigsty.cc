---
title: "pg_uuid_v8"
linkTitle: "pg_uuid_v8"
description: "带隐藏时间戳的 PostgreSQL UUID v8 生成器"
weight: 4530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ineron/pg_uuid_v8">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ineron/pg_uuid_v8</div>
    <div class="ext-card__desc">https://github.com/ineron/pg_uuid_v8</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_uuid_v8-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_uuid_v8-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_uuid_v8-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_uuid_v8`**](/ext/e/pg_uuid_v8) | `1.0.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4530  | [**`pg_uuid_v8`**](/ext/e/pg_uuid_v8) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`uuid-ossp`](/ext/e/uuid-ossp) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`sequential_uuids`](/ext/e/sequential_uuids) [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Pinned to public so uuid operator commutators resolve on PostgreSQL 17 and 18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_uuid_v8` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_uuid_v8_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-uuid-v8` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 19.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 19.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 19.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_uuid_v8` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_uuid_v8         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_uuid_v8` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_uuid_v8;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_uuid_v8 -v 18  # PG 18
pig ext install -y pg_uuid_v8 -v 17  # PG 17
pig ext install -y pg_uuid_v8 -v 16  # PG 16
pig ext install -y pg_uuid_v8 -v 15  # PG 15
pig ext install -y pg_uuid_v8 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_uuid_v8_18       # PG 18
dnf install -y pg_uuid_v8_17       # PG 17
dnf install -y pg_uuid_v8_16       # PG 16
dnf install -y pg_uuid_v8_15       # PG 15
dnf install -y pg_uuid_v8_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-uuid-v8   # PG 18
apt install -y postgresql-17-pg-uuid-v8   # PG 17
apt install -y postgresql-16-pg-uuid-v8   # PG 16
apt install -y postgresql-15-pg-uuid-v8   # PG 15
apt install -y postgresql-14-pg-uuid-v8   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_uuid_v8;
```

## 用法

- 来源：[pg_uuid_v8 README](https://github.com/ineron/pg_uuid_v8)，[SQL definitions](https://github.com/ineron/pg_uuid_v8/blob/main/pg_uuid_v8--1.0.sql)，[control file](https://github.com/ineron/pg_uuid_v8/blob/main/pg_uuid_v8.control)

`pg_uuid_v8` 生成外观类似 UUID v4 的 UUID，同时在其中嵌入加密后的微秒级时间戳，便于提取、排序和范围谓词查询。SQL 文件同时暴露了 `uuid_stego_*` 名称和 `uuid_v8_*` 便捷别名。

### 生成 UUID

```sql
CREATE EXTENSION pg_uuid_v8;

SELECT uuid_v8_set_seed('replace-with-a-secret-seed');
SELECT uuid_v8_generate();
```

等价的底层生成函数是：

```sql
SELECT uuid_stego_generate();
```

插入事件时，可以把它用作默认表达式：

```sql
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT uuid_v8_generate(),
  data jsonb,
  created_at timestamptz DEFAULT now()
);
```

### 提取并查询隐藏时间戳

提取嵌入的时间戳，返回 Unix epoch 以来的微秒数：

```sql
SELECT uuid_v8_extract_timestamp(id)
FROM events
ORDER BY uuid_v8_extract_timestamp(id)
LIMIT 10;
```

README 建议为基于时间的查询创建函数索引：

```sql
CREATE INDEX events_uuid_v8_time_idx
ON events USING btree (uuid_v8_extract_timestamp(id));

SELECT *
FROM events
WHERE uuid_v8_extract_timestamp(id)
      BETWEEN timestamp_to_stego_time('2026-01-01'::timestamptz)
          AND timestamp_to_stego_time(now())
ORDER BY uuid_v8_extract_timestamp(id);
```

辅助函数可在时间戳和整数时间戳格式之间转换：

```sql
SELECT timestamp_to_stego_time(now());
SELECT stego_time_to_timestamp(uuid_v8_extract_timestamp(id))
FROM events;
```

### 范围辅助函数与操作符

SQL 定义包含直接的范围辅助函数：

```sql
SELECT *
FROM events
WHERE uuid_stego_in_range(
  id,
  now() - interval '24 hours',
  now()
);
```

它还为 `uuid` 定义了感知时间戳的比较函数和操作符：

- `uuid_stego_compare(uuid, uuid)` 和 `uuid_v8_compare(uuid, uuid)`。
- `uuid_stego_lt`、`uuid_stego_le`、`uuid_stego_gt`、`uuid_stego_ge`。
- 操作符 `<`、`<=`、`>` 和 `>=` 会按隐藏时间戳比较 UUID。

### Seed 与加密模式

设置并查看 seed：

```sql
SELECT uuid_v8_set_seed('replace-with-a-secret-seed');
SELECT uuid_v8_get_seed();
```

可用加密模式为 `XOR`、`AES128` 和 `AES256`：

```sql
SELECT uuid_v8_get_encryption_mode();
SELECT uuid_v8_set_encryption_mode('AES128');
SELECT uuid_v8_set_encryption_mode('XOR');
```

如需持久化默认值，README 记录了 `uuid_v8.encryption_mode` GUC：

```sql
ALTER SYSTEM SET uuid_v8.encryption_mode = 'AES128';
SELECT pg_reload_conf();
```

### 注意事项

- seed 必须保密；解释隐藏时间戳时需要用到它。
- 使用某个 seed 和加密模式生成的 UUID，必须用相同设置解码。
- 基于提取时间戳的函数索引会增加存储和更新开销，但这是高效时间范围谓词的预期路径。
- 本地 Pigsty 元数据将该扩展固定在 `public` schema，使 UUID 比较操作符的 commutator 能在 PostgreSQL 17 和 18 上解析；如果在非 Pigsty 构建中使用其他 schema，应显式测试这些操作符。
