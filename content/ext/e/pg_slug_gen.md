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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_slug_gen-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_slug_gen-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_slug_gen-1.0.0.tar.gz</div>
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
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_slug_gen_18 pg_slug_gen_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-slug-gen postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-18-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_slug_gen_17 pg_slug_gen_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-slug-gen postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-17-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_slug_gen_16 pg_slug_gen_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-slug-gen postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-16-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_slug_gen_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_slug_gen_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_slug_gen_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_slug_gen_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_slug_gen_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_slug_gen_15 pg_slug_gen_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_slug_gen_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-slug-gen postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-slug-gen/postgresql-15-pg-slug-gen_1.0.0-2PIGSTY~noble_arm64.deb
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

来源: [official PGXN release page](https://pgxn.org/dist/pg_slug_gen/), [official release README](https://api.pgxn.org/src/pg_slug_gen/pg_slug_gen-1.0.0/README.md), [official release SQL](https://api.pgxn.org/src/pg_slug_gen/pg_slug_gen-1.0.0/sql/pg_slug_gen--1.0.sql), [official release metadata](https://api.pgxn.org/src/pg_slug_gen/pg_slug_gen-1.0.0/META.json)

`pg_slug_gen` 使用密码学随机性生成基于时间戳的 slug。官方 1.0.0 版本将其描述为安全、适合 URL 的短 ID 生成器，且请求的长度决定时间戳精度。

```sql
CREATE EXTENSION pg_slug_gen;

SELECT gen_random_slug();
SELECT gen_random_slug(13);
```

### 函数

- `gen_random_slug(slug_length int DEFAULT 16) returns text`

发布版 SQL 注释和 README 记录了这些受支持的取值：

- `10`: 秒
- `13`: 毫秒
- `16`: 微秒，也是默认值
- `19`: 纳秒

### 精度与格式

每种精度都对应一个时间戳宽度和固定的 slug 形状：

- `10` 位：`5-5` 格式，总长度 11 个字符
- `13` 位：`6-7` 格式，总长度 14 个字符
- `16` 位：`8-8` 格式，总长度 17 个字符
- `19` 位：`9-10` 格式，总长度 20 个字符

README 表示，无碰撞窗口受时间戳精度约束：对应秒、毫秒、微秒、纳秒四种精度时，最多分别每个时间单位插入 1 次。

### 示例

```sql
SELECT gen_random_slug();
SELECT gen_random_slug(10);
SELECT gen_random_slug(16);

CREATE TABLE products (
  id serial PRIMARY KEY,
  name text NOT NULL,
  slug text DEFAULT gen_random_slug() UNIQUE
);
```

### 工作原理

官方 README 将算法描述为：

- 取当前时间戳，并使用所选精度
- 将每一位数字映射到基于 QWERTY 的字符桶
- 使用 `pg_strong_random()` 从对应字符桶中随机选择一个字符
- 在中点插入连字符

### 注意事项

- 这是一个安全短 ID 生成器，不是文本转写器，也不是把标题转换为 URL 的 slugifier。
- 同一时间戳下仍然可能发生碰撞；上游只在插入速率不超过所选时间单位每单位 1 次时声称可保持唯一。
- 官方发布元数据仍指向 `https://github.com/fernandoolle/pg_slug_gen`，但该仓库 URL 当前返回 404。
