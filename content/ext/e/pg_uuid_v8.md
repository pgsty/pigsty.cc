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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_uuid_v8-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_uuid_v8-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_uuid_v8-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_uuid_v8`**](/ext/e/pg_uuid_v8) | `1.1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4530  | [**`pg_uuid_v8`**](/ext/e/pg_uuid_v8) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`pg_uuidv7`](/ext/e/pg_uuidv7) [`sequential_uuids`](/ext/e/sequential_uuids) [`snowflake`](/ext/e/snowflake) [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`uuid-ossp`](/ext/e/uuid-ossp) [`typeid`](/ext/e/typeid) [`permuteseq`](/ext/e/permuteseq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream 1.1.0 ships on PGXN only; pinned to public so uuid operator commutators resolve on PostgreSQL 17 and 18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_uuid_v8` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_uuid_v8_$v` | `openssl` |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-uuid-v8` | `libssl3 | libssl3t64` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el8.x86_64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_uuid_v8_18 pg_uuid_v8_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 20.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 20.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-uuid-v8 postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-18-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_uuid_v8_17 pg_uuid_v8_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-uuid-v8 postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-17-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_uuid_v8_16 pg_uuid_v8_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-uuid-v8 postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-16-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_uuid_v8_15 pg_uuid_v8_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-uuid-v8 postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-15-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uuid_v8_14-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uuid_v8_14-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uuid_v8_14-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 20.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uuid_v8_14-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uuid_v8_14-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_uuid_v8_14 pg_uuid_v8_14-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uuid_v8_14-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 20.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 20.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-uuid-v8 postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uuid-v8/postgresql-14-pg-uuid-v8_1.1.0-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

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

来源：

- [PGXN 上的 pg_uuid_v8 1.1.0](https://pgxn.org/dist/pg_uuid_v8/1.1.0/)
- [pg_uuid_v8 1.1.0 README](https://api.pgxn.org/src/pg_uuid_v8/pg_uuid_v8-1.1.0/README.md)
- [pg_uuid_v8 1.1.0 控制文件](https://api.pgxn.org/src/pg_uuid_v8/pg_uuid_v8-1.1.0/pg_uuid_v8.control)
- [pg_uuid_v8 1.0 基础 SQL](https://api.pgxn.org/src/pg_uuid_v8/pg_uuid_v8-1.1.0/pg_uuid_v8--1.0.sql)
- [pg_uuid_v8 1.0 至 1.1 升级 SQL](https://api.pgxn.org/src/pg_uuid_v8/pg_uuid_v8-1.1.0/pg_uuid_v8--1.0--1.1.sql)
- [Pigsty pg_uuid_v8 软件包矩阵](https://pgext.cloud/ext/pg_uuid_v8)

`pg_uuid_v8` 1.1.0 生成带有 UUID-v4 版本位与变体位的 UUID，同时在随机载荷中嵌入经过混淆的创建时间。它的 `uuid_v8_*` 便捷函数与底层 `uuid_stego_*` API 对应。适合需要提取隐藏时间并建立时间范围索引的场景，但不要把嵌入值当成认证令牌，也不要用它替代独立、可信的创建时间列。

### 生成值

```sql
CREATE EXTENSION pg_uuid_v8;

SELECT uuid_v8_set_seed('replace-with-a-unique-secret');
SELECT uuid_v8_set_encryption_mode('AES128');

CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT uuid_v8_generate(),
  data jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO events(data) VALUES ('{"type":"login"}');
```

上游实现默认使用公开的内置 seed 与 `XOR` 模式。生成值之前，应设置当前部署独有的秘密。也可选择 `AES128` 和 `AES256`，但提取值时必须选用相同的 seed 与模式。

### 提取隐藏时间并建立索引

```sql
SELECT
  uuid_v8_extract_timestamp(id) AS epoch_microseconds,
  stego_time_to_timestamp(uuid_v8_extract_timestamp(id)) AS created_time
FROM events;

CREATE INDEX events_uuid_time_idx
ON events USING btree (uuid_v8_extract_timestamp(id));

SELECT *
FROM events
WHERE uuid_v8_extract_timestamp(id)
      BETWEEN timestamp_to_stego_time('2026-01-01'::timestamptz)
          AND timestamp_to_stego_time(now())
ORDER BY uuid_v8_extract_timestamp(id);
```

`uuid_v8_extract_timestamp(uuid)` 返回按微秒缩放的 `bigint`，从而继续兼容 `timestamp_to_stego_time()` 与 `stego_time_to_timestamp()`。在 1.1 版本中，内部 48 位字段存储毫秒，因此返回值只有毫秒分辨率，最后三位十进制数字始终为零。

`uuid_stego_in_range()` 提供布尔型时间戳范围辅助函数。对提取函数建立 B-tree 函数索引，是时间谓词走索引时明确且可预期的路径。

### 比较隐藏时间

`uuid_v8_compare(uuid, uuid)` 与 `uuid_stego_compare(uuid, uuid)` 按提取出的隐藏时间返回顺序。扩展还为 UUID 参数定义了 `<`、`<=`、`>` 与 `>=` 操作符。

Pigsty 软件包把这些新增操作符安装到 `public`，并限定其 commutator 与 negator 引用，以兼容 PostgreSQL 17 和 18。PostgreSQL 已有内置 UUID 排序操作符；必须明确使用隐藏时间语义时，应使用比较函数或带模式限定的 `OPERATOR(public.<)` 表达式。

### Seed 与模式控制

```sql
SELECT uuid_v8_set_seed('replace-with-a-unique-secret');
SELECT uuid_v8_get_seed();

SELECT uuid_v8_set_encryption_mode('XOR');
SELECT uuid_v8_set_encryption_mode('AES128');
SELECT uuid_v8_set_encryption_mode('AES256');
SELECT uuid_v8_get_encryption_mode();

ALTER SYSTEM SET uuid_v8.encryption_mode = 'AES128';
SELECT pg_reload_conf();
```

seed 由 `uuid_v8.stego_seed` 暴露，模式由 `uuid_v8.encryption_mode` 暴露。设置函数改变当前会话，配置参数可以为后续会话建立默认值。`uuid_v8_get_seed()` 会返回当前 seed，因此应相应限制数据库访问，并且绝不能记录其返回值。

### 升级与兼容性边界

```sql
ALTER EXTENSION pg_uuid_v8 UPDATE TO '1.1';
```

1.1 版本把时间戳存储从微秒改为毫秒。旧的 48 位微秒字段大约每 8.9 年回绕一次，无法可靠恢复当前绝对日期；48 位毫秒字段约可持续 8,925 年。1.1 之前的值，其相对顺序不受影响；但升级不会重写既有编码，因此这些旧值的绝对时间提取与范围谓词仍不可靠。

PGXN 元数据面向 PostgreSQL 12 或以上版本；当前 Pigsty 软件包覆盖 PostgreSQL 14–18。Pigsty 软件包把扩展固定在 `public` 并设为不可重定位，以便新增操作符一致解析。当数据来源审计、亚毫秒精度或跨 seed、跨模式迁移很重要时，应保留普通的 `created_at` 列。
