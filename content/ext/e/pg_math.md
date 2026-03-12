---
title: "pg_math"
linkTitle: "pg_math"
description: "使用GSL库的数学统计函数"
weight: 4780
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/chanukyasds/pg_math">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">chanukyasds/pg_math</div>
    <div class="ext-card__desc">https://github.com/chanukyasds/pg_math</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_math-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_math-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_math-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_math`**](/ext/e/pg_math) | `1.1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4780  | [**`pg_math`**](/ext/e/pg_math) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`permuteseq`](/ext/e/permuteseq) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_math` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_math_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-math` | - |
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
@ el8.x86_64 18 pg_math_18 pg_math_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_math_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_math_18 pg_math_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 31.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_math_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_math_18 pg_math_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 31.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_math_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_math_18 pg_math_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_math_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_math_18 pg_math_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_math_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_math_18 pg_math_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_math_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 60.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 59.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 60.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 60.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 68.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 67.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 64.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-math postgresql-18-pg-math_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 63.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-18-pg-math_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_math_17 pg_math_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_math_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_math_17 pg_math_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 31.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_math_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_math_17 pg_math_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 31.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_math_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_math_17 pg_math_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_math_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_math_17 pg_math_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_math_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_math_17 pg_math_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_math_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 60.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 59.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 60.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 60.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 68.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 67.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 64.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-math postgresql-17-pg-math_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 63.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-17-pg-math_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_math_16 pg_math_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_math_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_math_16 pg_math_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 31.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_math_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_math_16 pg_math_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_math_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_math_16 pg_math_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_math_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_math_16 pg_math_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_math_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_math_16 pg_math_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_math_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 60.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 59.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 60.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 60.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 68.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 67.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 64.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-math postgresql-16-pg-math_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 63.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-16-pg-math_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_math_15 pg_math_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_math_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_math_15 pg_math_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 31.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_math_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_math_15 pg_math_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 31.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_math_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_math_15 pg_math_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_math_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_math_15 pg_math_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_math_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_math_15 pg_math_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_math_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 60.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 59.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 60.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 60.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 68.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 67.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 64.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-math postgresql-15-pg-math_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 63.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-15-pg-math_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_math_14 pg_math_14-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_math_14-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_math_14 pg_math_14-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 31.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_math_14-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_math_14 pg_math_14-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_math_14-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_math_14 pg_math_14-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_math_14-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_math_14 pg_math_14-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 31.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_math_14-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_math_14 pg_math_14-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_math_14-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 60.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 59.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 60.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 60.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 68.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 67.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 64.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-math postgresql-14-pg-math_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 63.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-math/postgresql-14-pg-math_1.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_math` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_math         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_math` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_math;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_math -v 18  # PG 18
pig ext install -y pg_math -v 17  # PG 17
pig ext install -y pg_math -v 16  # PG 16
pig ext install -y pg_math -v 15  # PG 15
pig ext install -y pg_math -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_math_18       # PG 18
dnf install -y pg_math_17       # PG 17
dnf install -y pg_math_16       # PG 16
dnf install -y pg_math_15       # PG 15
dnf install -y pg_math_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-math   # PG 18
apt install -y postgresql-17-pg-math   # PG 17
apt install -y postgresql-16-pg-math   # PG 16
apt install -y postgresql-15-pg-math   # PG 15
apt install -y postgresql-14-pg-math   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_math;
```



## 用法

> [pg_math: 使用 GSL 的 PostgreSQL 统计分布函数](https://github.com/chanukyasds/pg_math)

基于 GNU 科学计算库（GSL）提供 31 种统计分布的 CDF（累积分布函数）和 RDF（随机分布函数）。

```sql
CREATE EXTENSION pg_math;
```

### 支持的分布

高斯分布、单位高斯分布、高斯尾分布、二元高斯分布、F 分布、指数分布、拉普拉斯分布、指数幂分布、柯西分布、瑞利分布、瑞利尾分布、朗道分布、伽马分布、均匀分布、对数正态分布、卡方分布、t 分布、贝塔分布、逻辑斯蒂分布、帕累托分布、韦伯分布、第一类 Gumbel 分布、第二类 Gumbel 分布、泊松分布、伯努利分布、二项分布、负二项分布、帕斯卡分布、几何分布、超几何分布、对数分布。

### 函数命名约定

- `rdf_<distribution>(...)` -- 随机分布函数（概率密度值）
- `cdf_<distribution>_p(...)` -- 累积分布 P 值
- `cdf_<distribution>_q(...)` -- 累积分布 Q 值（1-P）
- `cdf_<distribution>_pinv(...)` -- 逆 CDF P
- `cdf_<distribution>_qinv(...)` -- 逆 CDF Q

### 示例

```sql
-- 高斯分布
SELECT rdf_gaussian(1.5, 2.0);            -- x=1.5, sigma=2.0 处的概率密度
SELECT cdf_gaussian_p(1.5, 2.0);          -- CDF P 值

-- 单位高斯分布（标准正态）
SELECT cdf_unit_gaussian_p(1.96);          -- ~0.975

-- 卡方分布
SELECT cdf_chisq_p(3.84, 1.0);            -- ~0.95

-- t 分布
SELECT cdf_tdist_pinv(0.975, 10.0);       -- df=10 时 95% 置信区间的临界值

-- 泊松分布
SELECT rdf_poisson(5, 3.0);               -- lambda=3 时 P(X=5)

-- 贝塔分布
SELECT rdf_beta(0.5, 2.0, 5.0);           -- x=0.5, a=2, b=5 处的概率密度
```
