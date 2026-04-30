---
title: "permuteseq"
linkTitle: "permuteseq"
description: "伪随机数ID置换生成器"
weight: 4530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dverite/permuteseq">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dverite/permuteseq</div>
    <div class="ext-card__desc">https://github.com/dverite/permuteseq</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/permuteseq-1.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">permuteseq-1.2.2.tar.gz</div>
    <div class="ext-card__desc">permuteseq-1.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`permuteseq`**](/ext/e/permuteseq) | `1.2.2` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4530  | [**`permuteseq`**](/ext/e/permuteseq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`random`](/ext/e/random) [`sequential_uuids`](/ext/e/sequential_uuids) [`pg_hashids`](/ext/e/pg_hashids) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`uuid-ossp`](/ext/e/uuid-ossp) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15,14" >}} | `permuteseq` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15,14" >}} | `permuteseq_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-permuteseq` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 | AVAIL PIGSTY 1.2.2 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 permuteseq_18 permuteseq_18-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/permuteseq_18-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 permuteseq_18 permuteseq_18-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/permuteseq_18-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 permuteseq_18 permuteseq_18-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/permuteseq_18-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 permuteseq_18 permuteseq_18-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/permuteseq_18-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 permuteseq_18 permuteseq_18-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/permuteseq_18-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 permuteseq_18 permuteseq_18-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 13.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/permuteseq_18-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 15.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 15.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-permuteseq postgresql-18-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-18-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 permuteseq_17 permuteseq_17-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/permuteseq_17-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 permuteseq_17 permuteseq_17-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/permuteseq_17-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 permuteseq_17 permuteseq_17-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/permuteseq_17-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 permuteseq_17 permuteseq_17-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/permuteseq_17-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 permuteseq_17 permuteseq_17-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/permuteseq_17-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 permuteseq_17 permuteseq_17-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 13.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/permuteseq_17-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 16.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 16.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-permuteseq postgresql-17-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-17-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 permuteseq_16 permuteseq_16-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/permuteseq_16-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 permuteseq_16 permuteseq_16-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/permuteseq_16-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 permuteseq_16 permuteseq_16-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/permuteseq_16-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 permuteseq_16 permuteseq_16-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/permuteseq_16-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 permuteseq_16 permuteseq_16-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/permuteseq_16-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 permuteseq_16 permuteseq_16-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 13.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/permuteseq_16-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 15.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 16.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 16.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-permuteseq postgresql-16-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 15.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-16-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 permuteseq_15 permuteseq_15-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/permuteseq_15-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 permuteseq_15 permuteseq_15-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/permuteseq_15-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 permuteseq_15 permuteseq_15-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 12.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/permuteseq_15-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 permuteseq_15 permuteseq_15-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 12.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/permuteseq_15-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 permuteseq_15 permuteseq_15-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 12.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/permuteseq_15-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 permuteseq_15 permuteseq_15-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/permuteseq_15-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 14.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 14.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 14.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 14.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 15.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 15.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-permuteseq postgresql-15-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 14.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-15-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 permuteseq_14 permuteseq_14-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/permuteseq_14-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 permuteseq_14 permuteseq_14-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/permuteseq_14-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 permuteseq_14 permuteseq_14-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 12.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/permuteseq_14-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 permuteseq_14 permuteseq_14-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 12.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/permuteseq_14-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 permuteseq_14 permuteseq_14-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 12.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/permuteseq_14-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 permuteseq_14 permuteseq_14-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/permuteseq_14-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 14.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 14.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 14.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 14.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 15.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 15.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 15.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-permuteseq postgresql-14-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 14.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/permuteseq/postgresql-14-permuteseq_1.2.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `permuteseq` 扩展的 RPM / DEB 包：

```bash
pig build pkg permuteseq         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `permuteseq` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install permuteseq;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y permuteseq -v 18  # PG 18
pig ext install -y permuteseq -v 17  # PG 17
pig ext install -y permuteseq -v 16  # PG 16
pig ext install -y permuteseq -v 15  # PG 15
pig ext install -y permuteseq -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y permuteseq_18       # PG 18
dnf install -y permuteseq_17       # PG 17
dnf install -y permuteseq_16       # PG 16
dnf install -y permuteseq_15       # PG 15
dnf install -y permuteseq_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-permuteseq   # PG 18
apt install -y postgresql-17-permuteseq   # PG 17
apt install -y postgresql-16-permuteseq   # PG 16
apt install -y postgresql-15-permuteseq   # PG 15
apt install -y postgresql-14-permuteseq   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION permuteseq;
```


## 用法

> [permuteseq: 序列的可扩展伪随机置换](https://github.com/dverite/permuteseq)

无需保存历史值，即可生成唯一、非连续、看似随机的数字序列。该扩展使用 Feistel 密码配合循环行走法，实现格式保持加密。

```sql
CREATE EXTENSION permuteseq;
```

### 函数

| 函数 | 描述 |
|---|---|
| `permute_nextval(seq_oid, crypt_key bigint)` | 推进序列并返回落在序列范围内的加密值 |
| `reverse_permute(seq_oid, value bigint, crypt_key bigint)` | 由置换后的元素反推出原始值 |
| `range_encrypt_element(clear_val bigint, min_val bigint, max_val bigint, crypt_key bigint)` | 在给定范围内加密一个 bigint |
| `range_decrypt_element(crypt_val bigint, min_val bigint, max_val bigint, crypt_key bigint)` | 解密此前加密的值 |

### 示例

```sql
CREATE SEQUENCE s MINVALUE -10000 MAXVALUE 15000;

-- 从序列中生成看似随机的唯一值
SELECT permute_nextval('s'::regclass, 123456789012345)
  FROM generate_series(1, 10);

-- 将置换后的值反向还原为原始值
SELECT reverse_permute('s'::regclass, -545, 123456789012345);
-- -10000

-- 在任意范围内进行加密/解密
SELECT range_encrypt_element(91919191919, 1e10::bigint, 1e11::bigint, 123456789012345);
-- 83028080992

SELECT range_decrypt_element(83028080992, 1e10::bigint, 1e11::bigint, 123456789012345);
-- 91919191919
```
