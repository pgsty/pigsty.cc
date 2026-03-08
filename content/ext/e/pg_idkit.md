---
title: "pg_idkit"
linkTitle: "pg_idkit"
description: "生成各式各样的唯一标识符：UUIDv6, ULID, KSUID"
weight: 4500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/VADOSWARE/pg_idkit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">VADOSWARE/pg_idkit</div>
    <div class="ext-card__desc">https://github.com/VADOSWARE/pg_idkit</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_idkit-0.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_idkit-0.4.0.tar.gz</div>
    <div class="ext-card__desc">pg_idkit-0.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_idkit`**](/ext/e/pg_idkit) | `0.4.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4500  | [**`pg_idkit`**](/ext/e/pg_idkit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`uuid-ossp`](/ext/e/uuid-ossp) [`permuteseq`](/ext/e/permuteseq) [`pg_cardano`](/ext/e/pg_cardano) [`pg_base58`](/ext/e/pg_base58) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_idkit` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_idkit_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-idkit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
@ el8.x86_64 18 pg_idkit_18 pg_idkit_18-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 459.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_idkit_18-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_idkit_18 pg_idkit_18-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 355.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_idkit_18-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_idkit_18 pg_idkit_18-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 475.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_idkit_18-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_idkit_18 pg_idkit_18-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 377.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_idkit_18-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_idkit_18 pg_idkit_18-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 474.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_idkit_18-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_idkit_18 pg_idkit_18-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 376.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_idkit_18-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 385.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 285.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 386.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 285.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 428.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 328.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 424.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-idkit postgresql-18-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 324.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-18-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_idkit_17 pg_idkit_17-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 459.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_idkit_17-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_idkit_17 pg_idkit_17-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 355.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_idkit_17-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_idkit_17 pg_idkit_17-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 474.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_idkit_17-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_idkit_17 pg_idkit_17-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 377.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_idkit_17-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_idkit_17 pg_idkit_17-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 475.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_idkit_17-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_idkit_17 pg_idkit_17-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 376.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_idkit_17-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 385.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 285.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 386.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 285.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 428.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 328.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 423.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-idkit postgresql-17-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 324.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-17-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_idkit_16 pg_idkit_16-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 459.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_idkit_16-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_idkit_16 pg_idkit_16-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 355.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_idkit_16-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_idkit_16 pg_idkit_16-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 474.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_idkit_16-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_idkit_16 pg_idkit_16-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 377.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_idkit_16-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_idkit_16 pg_idkit_16-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 474.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_idkit_16-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_idkit_16 pg_idkit_16-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 376.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_idkit_16-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 385.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 285.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 386.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 285.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 428.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 328.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 424.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-idkit postgresql-16-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 323.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-16-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_idkit_15 pg_idkit_15-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 459.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_idkit_15-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_idkit_15 pg_idkit_15-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 355.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_idkit_15-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_idkit_15 pg_idkit_15-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 474.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_idkit_15-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_idkit_15 pg_idkit_15-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 377.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_idkit_15-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_idkit_15 pg_idkit_15-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 475.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_idkit_15-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_idkit_15 pg_idkit_15-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 376.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_idkit_15-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 385.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 285.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 386.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 285.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 428.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 328.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 424.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-idkit postgresql-15-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 324.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-15-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_idkit_14 pg_idkit_14-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 458.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_idkit_14-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_idkit_14 pg_idkit_14-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 355.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_idkit_14-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_idkit_14 pg_idkit_14-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 474.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_idkit_14-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_idkit_14 pg_idkit_14-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 377.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_idkit_14-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_idkit_14 pg_idkit_14-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 474.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_idkit_14-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_idkit_14 pg_idkit_14-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 376.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_idkit_14-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 385.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 285.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 385.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 285.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 428.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 328.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 424.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-idkit postgresql-14-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 324.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-idkit/postgresql-14-pg-idkit_0.4.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_idkit` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_idkit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_idkit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_idkit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_idkit -v 18  # PG 18
pig ext install -y pg_idkit -v 17  # PG 17
pig ext install -y pg_idkit -v 16  # PG 16
pig ext install -y pg_idkit -v 15  # PG 15
pig ext install -y pg_idkit -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_idkit_18       # PG 18
dnf install -y pg_idkit_17       # PG 17
dnf install -y pg_idkit_16       # PG 16
dnf install -y pg_idkit_15       # PG 15
dnf install -y pg_idkit_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-idkit   # PG 18
apt install -y postgresql-17-pg-idkit   # PG 17
apt install -y postgresql-16-pg-idkit   # PG 16
apt install -y postgresql-15-pg-idkit   # PG 15
apt install -y postgresql-14-pg-idkit   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_idkit;
```
