---
title: "pgx_ulid"
linkTitle: "pgx_ulid"
description: "ULID数据类型与函数"
weight: 4510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pksunkara/pgx_ulid">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pksunkara/pgx_ulid</div>
    <div class="ext-card__desc">https://github.com/pksunkara/pgx_ulid</div>
  </a>
  <a class="ext-card ext-card--source" href="pgx_ulid-0.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgx_ulid-0.2.2.tar.gz</div>
    <div class="ext-card__desc">pgx_ulid-0.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgx_ulid`**](/ext/e/pgx_ulid) | `0.2.2` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4510  | [**`pgx_ulid`**](/ext/e/pgx_ulid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`sequential_uuids`](/ext/e/sequential_uuids) [`uuid-ossp`](/ext/e/uuid-ossp) [`pg_hashids`](/ext/e/pg_hashids) [`permuteseq`](/ext/e/permuteseq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "18,17,16,15,14" >}} | `pgx_ulid` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "18,17,16,15,14" >}} | `pgx_ulid_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgx-ulid` | - |
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
@ el8.x86_64 18 pgx_ulid_18 pgx_ulid_18-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 382.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgx_ulid_18-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgx_ulid_18 pgx_ulid_18-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 268.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgx_ulid_18-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgx_ulid_18 pgx_ulid_18-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 399.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgx_ulid_18-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgx_ulid_18 pgx_ulid_18-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 286.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgx_ulid_18-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgx_ulid_18 pgx_ulid_18-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 399.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgx_ulid_18-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgx_ulid_18 pgx_ulid_18-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 287.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgx_ulid_18-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 315.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 207.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 315.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 207.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 354.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 241.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 351.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 239.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgx_ulid_17 pgx_ulid_17-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 383.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgx_ulid_17-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgx_ulid_17 pgx_ulid_17-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 268.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgx_ulid_17-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgx_ulid_17 pgx_ulid_17-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 398.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgx_ulid_17-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgx_ulid_17 pgx_ulid_17-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 287.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgx_ulid_17-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgx_ulid_17 pgx_ulid_17-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 398.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgx_ulid_17-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgx_ulid_17 pgx_ulid_17-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 286.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgx_ulid_17-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 315.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 206.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 315.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 207.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 354.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 240.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 351.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 239.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgx_ulid_16 pgx_ulid_16-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 383.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgx_ulid_16-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgx_ulid_16 pgx_ulid_16-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 268.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgx_ulid_16-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgx_ulid_16 pgx_ulid_16-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 399.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgx_ulid_16-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgx_ulid_16 pgx_ulid_16-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 287.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgx_ulid_16-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgx_ulid_16 pgx_ulid_16-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 399.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgx_ulid_16-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgx_ulid_16 pgx_ulid_16-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 287.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgx_ulid_16-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 315.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 207.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 315.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 207.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 354.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 241.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 351.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 239.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgx_ulid_15 pgx_ulid_15-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 382.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgx_ulid_15-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgx_ulid_15 pgx_ulid_15-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 268.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgx_ulid_15-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgx_ulid_15 pgx_ulid_15-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 398.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgx_ulid_15-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgx_ulid_15 pgx_ulid_15-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 286.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgx_ulid_15-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgx_ulid_15 pgx_ulid_15-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 398.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgx_ulid_15-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgx_ulid_15 pgx_ulid_15-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 286.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgx_ulid_15-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 315.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 206.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 315.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 207.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 354.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 240.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 350.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 238.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgx_ulid_14 pgx_ulid_14-0.2.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2.2 381.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgx_ulid_14-0.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgx_ulid_14 pgx_ulid_14-0.2.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2.2 267.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgx_ulid_14-0.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgx_ulid_14 pgx_ulid_14-0.2.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2.2 397.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgx_ulid_14-0.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgx_ulid_14 pgx_ulid_14-0.2.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2.2 286.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgx_ulid_14-0.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgx_ulid_14 pgx_ulid_14-0.2.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2.2 397.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgx_ulid_14-0.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgx_ulid_14 pgx_ulid_14-0.2.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2.2 286.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgx_ulid_14-0.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2.2 314.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2.2 206.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb pigsty 0.2.2 315.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb pigsty 0.2.2 206.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb pigsty 0.2.2 353.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb pigsty 0.2.2 240.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb pigsty 0.2.2 350.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb pigsty 0.2.2 238.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgx_ulid` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgx_ulid         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgx_ulid` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgx_ulid;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgx_ulid -v 18  # PG 18
pig ext install -y pgx_ulid -v 17  # PG 17
pig ext install -y pgx_ulid -v 16  # PG 16
pig ext install -y pgx_ulid -v 15  # PG 15
pig ext install -y pgx_ulid -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgx_ulid_18       # PG 18
dnf install -y pgx_ulid_17       # PG 17
dnf install -y pgx_ulid_16       # PG 16
dnf install -y pgx_ulid_15       # PG 15
dnf install -y pgx_ulid_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgx-ulid   # PG 18
apt install -y postgresql-17-pgx-ulid   # PG 17
apt install -y postgresql-16-pgx-ulid   # PG 16
apt install -y postgresql-15-pgx-ulid   # PG 15
apt install -y postgresql-14-pgx-ulid   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgx_ulid';
```


**创建扩展**：

```sql
CREATE EXTENSION pgx_ulid;
```



## 用法

> [pgx_ulid: PostgreSQL 的 ULID 类型与方法](https://github.com/pksunkara/pgx_ulid)

```sql
CREATE EXTENSION pgx_ulid;
```

### ULID 类型

该扩展提供了原生的 `ulid` 类型——一种 26 个字符、按字典序可排序的标识符，以二进制形式存储。

### 函数

| 函数 | 描述 |
|---|---|
| `gen_ulid()` | 生成一个新的 ULID |
| `gen_monotonic_ulid()` | 生成单调递增的 ULID（需要 `shared_preload_libraries`） |

### 类型转换

- `ulid::timestamp` -- 从 ULID 中提取创建时间
- `timestamp::ulid` -- 从时间戳生成 ULID（随机部分为零）
- `ulid::uuid` / `uuid::ulid` -- 在 ULID 和 UUID 之间互相转换

### 示例

```sql
-- 将 ULID 用作主键
CREATE TABLE users (
  id ulid NOT NULL DEFAULT gen_ulid() PRIMARY KEY,
  name text NOT NULL
);

-- 通过文本表示进行查询
SELECT * FROM users WHERE id = '01ARZ3NDEKTSV4RRFFQ69G5FAV';

-- 从 ULID 中提取时间戳
ALTER TABLE users
ADD COLUMN created_at timestamp GENERATED ALWAYS AS (id::timestamp) STORED;

-- 按日期范围查询
SELECT * FROM users
WHERE id BETWEEN '2023-09-15'::timestamp::ulid AND '2023-09-16'::timestamp::ulid;
```
