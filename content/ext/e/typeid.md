---
title: "typeid"
linkTitle: "typeid"
description: "PG原生TypeID类型与函数"
weight: 4580
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/blitss/typeid-postgres">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">blitss/typeid-postgres</div>
    <div class="ext-card__desc">https://github.com/blitss/typeid-postgres</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/typeid-postgres-0.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">typeid-postgres-0.4.1.tar.gz</div>
    <div class="ext-card__desc">typeid-postgres-0.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_typeid`**](/ext/e/typeid) | `0.4.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4580  | [**`typeid`**](/ext/e/typeid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_uuidv7`](/ext/e/pg_uuidv7) [`sequential_uuids`](/ext/e/sequential_uuids) [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`snowflake`](/ext/e/snowflake) [`pg_uuid_v8`](/ext/e/pg_uuid_v8) [`uuid-ossp`](/ext/e/uuid-ossp) [`pg_hashids`](/ext/e/pg_hashids) [`pg_slug_gen`](/ext/e/pg_slug_gen) [`base36`](/ext/e/base36) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_typeid` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_typeid_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-typeid` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
@ el8.x86_64 18 pg_typeid_18 pg_typeid_18-0.4.1-1PGSTY.el8.x86_64.rpm pigsty 0.4.1 892.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_typeid_18-0.4.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_typeid_18 pg_typeid_18-0.4.1-1PGSTY.el8.aarch64.rpm pigsty 0.4.1 775.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_typeid_18-0.4.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_typeid_18 pg_typeid_18-0.4.1-1PGSTY.el9.x86_64.rpm pigsty 0.4.1 913.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_typeid_18-0.4.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_typeid_18 pg_typeid_18-0.4.1-1PGSTY.el9.aarch64.rpm pigsty 0.4.1 827.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_typeid_18-0.4.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_typeid_18 pg_typeid_18-0.4.1-1PGSTY.el10.x86_64.rpm pigsty 0.4.1 907.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_typeid_18-0.4.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_typeid_18 pg_typeid_18-0.4.1-1PGSTY.el10.aarch64.rpm pigsty 0.4.1 807.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_typeid_18-0.4.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~bookworm_amd64.deb pigsty 0.4.1 741.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~bookworm_arm64.deb pigsty 0.4.1 621.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~trixie_amd64.deb pigsty 0.4.1 742.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~trixie_arm64.deb pigsty 0.4.1 621.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~jammy_amd64.deb pigsty 0.4.1 826.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~jammy_arm64.deb pigsty 0.4.1 736.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~noble_amd64.deb pigsty 0.4.1 824.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~noble_arm64.deb pigsty 0.4.1 726.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~resolute_amd64.deb pigsty 0.4.1 815.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-typeid postgresql-18-typeid_0.4.1-1PGSTY~resolute_arm64.deb pigsty 0.4.1 725.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-18-typeid_0.4.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_typeid_17 pg_typeid_17-0.4.1-1PGSTY.el8.x86_64.rpm pigsty 0.4.1 889.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_typeid_17-0.4.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_typeid_17 pg_typeid_17-0.4.1-1PGSTY.el8.aarch64.rpm pigsty 0.4.1 771.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_typeid_17-0.4.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_typeid_17 pg_typeid_17-0.4.1-1PGSTY.el9.x86_64.rpm pigsty 0.4.1 906.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_typeid_17-0.4.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_typeid_17 pg_typeid_17-0.4.1-1PGSTY.el9.aarch64.rpm pigsty 0.4.1 825.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_typeid_17-0.4.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_typeid_17 pg_typeid_17-0.4.1-1PGSTY.el10.x86_64.rpm pigsty 0.4.1 910.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_typeid_17-0.4.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_typeid_17 pg_typeid_17-0.4.1-1PGSTY.el10.aarch64.rpm pigsty 0.4.1 806.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_typeid_17-0.4.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~bookworm_amd64.deb pigsty 0.4.1 739.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~bookworm_arm64.deb pigsty 0.4.1 620.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~trixie_amd64.deb pigsty 0.4.1 740.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~trixie_arm64.deb pigsty 0.4.1 620.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~jammy_amd64.deb pigsty 0.4.1 823.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~jammy_arm64.deb pigsty 0.4.1 734.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~noble_amd64.deb pigsty 0.4.1 820.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~noble_arm64.deb pigsty 0.4.1 723.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~resolute_amd64.deb pigsty 0.4.1 812.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-typeid postgresql-17-typeid_0.4.1-1PGSTY~resolute_arm64.deb pigsty 0.4.1 723.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-17-typeid_0.4.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_typeid_16 pg_typeid_16-0.4.1-1PGSTY.el8.x86_64.rpm pigsty 0.4.1 888.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_typeid_16-0.4.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_typeid_16 pg_typeid_16-0.4.1-1PGSTY.el8.aarch64.rpm pigsty 0.4.1 768.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_typeid_16-0.4.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_typeid_16 pg_typeid_16-0.4.1-1PGSTY.el9.x86_64.rpm pigsty 0.4.1 902.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_typeid_16-0.4.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_typeid_16 pg_typeid_16-0.4.1-1PGSTY.el9.aarch64.rpm pigsty 0.4.1 823.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_typeid_16-0.4.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_typeid_16 pg_typeid_16-0.4.1-1PGSTY.el10.x86_64.rpm pigsty 0.4.1 902.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_typeid_16-0.4.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_typeid_16 pg_typeid_16-0.4.1-1PGSTY.el10.aarch64.rpm pigsty 0.4.1 806.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_typeid_16-0.4.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~bookworm_amd64.deb pigsty 0.4.1 737.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~bookworm_arm64.deb pigsty 0.4.1 618.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~trixie_amd64.deb pigsty 0.4.1 739.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~trixie_arm64.deb pigsty 0.4.1 618.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~jammy_amd64.deb pigsty 0.4.1 824.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~jammy_arm64.deb pigsty 0.4.1 733.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~noble_amd64.deb pigsty 0.4.1 812.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~noble_arm64.deb pigsty 0.4.1 722.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~resolute_amd64.deb pigsty 0.4.1 809.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-typeid postgresql-16-typeid_0.4.1-1PGSTY~resolute_arm64.deb pigsty 0.4.1 721.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-16-typeid_0.4.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_typeid_15 pg_typeid_15-0.4.1-1PGSTY.el8.x86_64.rpm pigsty 0.4.1 879.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_typeid_15-0.4.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_typeid_15 pg_typeid_15-0.4.1-1PGSTY.el8.aarch64.rpm pigsty 0.4.1 760.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_typeid_15-0.4.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_typeid_15 pg_typeid_15-0.4.1-1PGSTY.el9.x86_64.rpm pigsty 0.4.1 896.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_typeid_15-0.4.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_typeid_15 pg_typeid_15-0.4.1-1PGSTY.el9.aarch64.rpm pigsty 0.4.1 814.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_typeid_15-0.4.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_typeid_15 pg_typeid_15-0.4.1-1PGSTY.el10.x86_64.rpm pigsty 0.4.1 897.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_typeid_15-0.4.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_typeid_15 pg_typeid_15-0.4.1-1PGSTY.el10.aarch64.rpm pigsty 0.4.1 804.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_typeid_15-0.4.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~bookworm_amd64.deb pigsty 0.4.1 734.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~bookworm_arm64.deb pigsty 0.4.1 613.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~trixie_amd64.deb pigsty 0.4.1 733.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~trixie_arm64.deb pigsty 0.4.1 615.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~jammy_amd64.deb pigsty 0.4.1 817.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~jammy_arm64.deb pigsty 0.4.1 726.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~noble_amd64.deb pigsty 0.4.1 808.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~noble_arm64.deb pigsty 0.4.1 717.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~resolute_amd64.deb pigsty 0.4.1 804.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-typeid postgresql-15-typeid_0.4.1-1PGSTY~resolute_arm64.deb pigsty 0.4.1 715.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-15-typeid_0.4.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_typeid_14 pg_typeid_14-0.4.1-1PGSTY.el8.x86_64.rpm pigsty 0.4.1 875.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_typeid_14-0.4.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_typeid_14 pg_typeid_14-0.4.1-1PGSTY.el8.aarch64.rpm pigsty 0.4.1 759.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_typeid_14-0.4.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_typeid_14 pg_typeid_14-0.4.1-1PGSTY.el9.x86_64.rpm pigsty 0.4.1 891.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_typeid_14-0.4.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_typeid_14 pg_typeid_14-0.4.1-1PGSTY.el9.aarch64.rpm pigsty 0.4.1 812.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_typeid_14-0.4.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_typeid_14 pg_typeid_14-0.4.1-1PGSTY.el10.x86_64.rpm pigsty 0.4.1 893.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_typeid_14-0.4.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_typeid_14 pg_typeid_14-0.4.1-1PGSTY.el10.aarch64.rpm pigsty 0.4.1 801.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_typeid_14-0.4.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~bookworm_amd64.deb pigsty 0.4.1 731.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~bookworm_arm64.deb pigsty 0.4.1 612.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~trixie_amd64.deb pigsty 0.4.1 732.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~trixie_arm64.deb pigsty 0.4.1 612.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~jammy_amd64.deb pigsty 0.4.1 813.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~jammy_arm64.deb pigsty 0.4.1 724.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~noble_amd64.deb pigsty 0.4.1 807.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~noble_arm64.deb pigsty 0.4.1 715.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~resolute_amd64.deb pigsty 0.4.1 800.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-typeid postgresql-14-typeid_0.4.1-1PGSTY~resolute_arm64.deb pigsty 0.4.1 712.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-typeid/postgresql-14-typeid_0.4.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_typeid` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_typeid         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_typeid` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_typeid;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_typeid -v 18  # PG 18
pig ext install -y pg_typeid -v 17  # PG 17
pig ext install -y pg_typeid -v 16  # PG 16
pig ext install -y pg_typeid -v 15  # PG 15
pig ext install -y pg_typeid -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_typeid_18       # PG 18
dnf install -y pg_typeid_17       # PG 17
dnf install -y pg_typeid_16       # PG 16
dnf install -y pg_typeid_15       # PG 15
dnf install -y pg_typeid_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-typeid   # PG 18
apt install -y postgresql-17-typeid   # PG 17
apt install -y postgresql-16-typeid   # PG 16
apt install -y postgresql-15-typeid   # PG 15
apt install -y postgresql-14-typeid   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION typeid;
```




## 用法

> [typeid: PostgreSQL 的 TypeID 支持——带前缀的类型安全、可排序 UUID](https://github.com/blitss/typeid-postgres)

TypeID 是 UUIDv7 的扩展，带有类型前缀，内部存储为前缀加二进制 UUID。

```sql
CREATE EXTENSION typeid;
```

### 函数

| 函数 | 返回类型 | 描述 |
|---|---|---|
| `typeid_generate(prefix TEXT)` | `typeid` | 使用给定前缀生成新的 TypeID |
| `typeid_generate_nil()` | `typeid` | 生成空前缀的 TypeID |
| `typeid_is_valid(input TEXT)` | `BOOLEAN` | 检查 TypeID 字符串是否有效 |
| `typeid_prefix(typeid)` | `TEXT` | 从 TypeID 中提取前缀 |
| `typeid_to_uuid(typeid)` | `UUID` | 将 TypeID 转换为 UUID |
| `uuid_to_typeid(prefix TEXT, uuid UUID)` | `typeid` | 将 UUID 转换为 TypeID |
| `typeid_uuid_generate_v7()` | `UUID` | 生成 UUID v7 |
| `typeid_has_prefix(typeid, prefix TEXT)` | `BOOLEAN` | 检查 TypeID 是否具有指定前缀 |
| `typeid_is_nil_prefix(typeid)` | `BOOLEAN` | 检查 TypeID 是否具有空前缀 |
| `typeid_generate_batch(prefix TEXT, count INTEGER)` | `SETOF typeid` | 批量生成 TypeID |
{.wide .expand}

### 运算符

- `<`, `<=`, `=`, `>=`, `>`, `<>` 用于比较 TypeID
- `@>` 用于检查 TypeID 是否具有特定前缀（例如 `id @> 'user'`）
- B-tree 运算符类用于索引

### 示例

```sql
-- 创建使用 TypeID 主键的表
CREATE TABLE users (
  id typeid DEFAULT typeid_generate('user') NOT NULL PRIMARY KEY,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 插入数据
INSERT INTO users (id) SELECT typeid_generate('user') FROM generate_series(1, 100);

-- 提取前缀
SELECT typeid_prefix(id) FROM users LIMIT 1;  -- 'user'

-- 使用运算符检查前缀
SELECT * FROM users WHERE id @> 'user';

-- 转换为 UUID
SELECT typeid_to_uuid(id) FROM users LIMIT 1;
```
