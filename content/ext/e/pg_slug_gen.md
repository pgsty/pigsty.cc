---
title: "pg_slug_gen"
linkTitle: "pg_slug_gen"
description: "生成带时间戳的加密安全短标识"
weight: 4550
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fernandoolle/pg_slug_gen">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fernandoolle/pg_slug_gen</div>
    <div class="ext-card__desc">https://github.com/fernandoolle/pg_slug_gen</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_slug_gen-1.0.0.zip">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_slug_gen-1.0.0.zip</div>
    <div class="ext-card__desc">pg_slug_gen-1.0.0.zip</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_slug_gen`**](/ext/e/pg_slug_gen) | `1.0.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4550  | [**`pg_slug_gen`**](/ext/e/pg_slug_gen) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`uuid-ossp`](/ext/e/uuid-ossp) [`pg_uuidv7`](/ext/e/pg_uuidv7) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_slug_gen` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_slug_gen_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-slug-gen` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_slug_gen` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_slug_gen         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_slug_gen` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_slug_gen;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_slug_gen -v 18  # PG 18
pig ext install -y pg_slug_gen -v 17  # PG 17
pig ext install -y pg_slug_gen -v 16  # PG 16
pig ext install -y pg_slug_gen -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_slug_gen_18       # PG 18
dnf install -y pg_slug_gen_17       # PG 17
dnf install -y pg_slug_gen_16       # PG 16
dnf install -y pg_slug_gen_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-slug-gen   # PG 18
apt install -y postgresql-17-pg-slug-gen   # PG 17
apt install -y postgresql-16-pg-slug-gen   # PG 16
apt install -y postgresql-15-pg-slug-gen   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_slug_gen;
```


## 用法

> 语法：
>
> ```sql
> CREATE EXTENSION pg_slug_gen;
> SELECT gen_random_slug();
> SELECT gen_random_slug(13);
> ```
>
> 来源：[PGXN 发布 README](https://pgxn.org/dist/pg_slug_gen/1.0.0/)

`pg_slug_gen` 使用密码学随机性生成基于时间戳的 slug。PGXN 发布页将其描述为一个 PostgreSQL 扩展，会把时间戳中的数字映射到字母桶，并在中间插入连字符，从而生成适合 URL 使用的 slug。

## 函数

上游文档给出的 SQL 函数是：

```sql
gen_random_slug(slug_length int DEFAULT 16) RETURNS text
```

README 展示了以下调用方式：

```sql
gen_random_slug()      -- 默认：16（微秒）
gen_random_slug(10)    -- 秒
gen_random_slug(13)    -- 毫秒
gen_random_slug(16)    -- 微秒
gen_random_slug(19)    -- 纳秒
```

## 精度与长度

发布页把精度与时间戳位数、以及可无碰撞吞吐量对应起来：

- `10` 位表示秒级，最多每秒 1 条
- `13` 位表示毫秒级，最多每秒 1,000 条
- `16` 位表示微秒级，最多每秒 1,000,000 条
- `19` 位表示纳秒级，最多每秒 10 亿条

slug 中间会插入一个连字符：

- 秒级：`5-5` 模式，总长度 11
- 毫秒级：`6-7` 模式，总长度 14
- 微秒级：`8-8` 模式，总长度 17
- 纳秒级：`9-10` 模式，总长度 20

## 示例

```sql
SELECT gen_random_slug();
SELECT gen_random_slug(10);
SELECT gen_random_slug(13);
SELECT gen_random_slug(16);
SELECT gen_random_slug(19);
```

作为表默认值：

```sql
CREATE TABLE products (
    id serial PRIMARY KEY,
    name text NOT NULL,
    slug text DEFAULT gen_random_slug() UNIQUE
);
```

## 工作原理

发布页将算法描述为：

1. 取出当前时间戳并按指定精度截断
2. 将每一位数字映射到基于 QWERTY 的字符桶
3. 使用 `pg_strong_random()` 从对应字符桶中随机取一个字符
4. 在中间位置插入连字符

README 还指出，同一时间戳下仍可能出现碰撞，但在微秒级精度下，碰撞概率约为一千万分之一。
