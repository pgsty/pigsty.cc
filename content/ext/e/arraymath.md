---
title: "arraymath"
linkTitle: "arraymath"
description: "数组逐元素数学运算符包"
weight: 4770
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pramsey/pgsql-arraymath">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pramsey/pgsql-arraymath</div>
    <div class="ext-card__desc">https://github.com/pramsey/pgsql-arraymath</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsql-arraymath-1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsql-arraymath-1.1.tar.gz</div>
    <div class="ext-card__desc">pgsql-arraymath-1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_arraymath`**](/ext/e/arraymath) | `1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4770  | [**`arraymath`**](/ext/e/arraymath) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`aggs_for_arrays`](/ext/e/aggs_for_arrays) [`aggs_for_vecs`](/ext/e/aggs_for_vecs) [`intarray`](/ext/e/intarray) [`first_last_agg`](/ext/e/first_last_agg) [`floatvec`](/ext/e/floatvec) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_arraymath` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_arraymath_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-arraymath` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_arraymath_18 pg_arraymath_18-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_arraymath_18-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_arraymath_18 pg_arraymath_18-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_arraymath_18-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_arraymath_18 pg_arraymath_18-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_arraymath_18-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_arraymath_18 pg_arraymath_18-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_arraymath_18-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_arraymath_18 pg_arraymath_18-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_arraymath_18-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_arraymath_18 pg_arraymath_18-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_arraymath_18-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 25.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 26.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 26.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 26.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-arraymath postgresql-18-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-18-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_arraymath_17 pg_arraymath_17-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_arraymath_17-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_arraymath_17 pg_arraymath_17-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_arraymath_17-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_arraymath_17 pg_arraymath_17-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_arraymath_17-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_arraymath_17 pg_arraymath_17-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_arraymath_17-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_arraymath_17 pg_arraymath_17-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_arraymath_17-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_arraymath_17 pg_arraymath_17-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_arraymath_17-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 25.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 25.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 27.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 27.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 26.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-arraymath postgresql-17-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 26.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-17-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_arraymath_16 pg_arraymath_16-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_arraymath_16-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_arraymath_16 pg_arraymath_16-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_arraymath_16-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_arraymath_16 pg_arraymath_16-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_arraymath_16-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_arraymath_16 pg_arraymath_16-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_arraymath_16-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_arraymath_16 pg_arraymath_16-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_arraymath_16-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_arraymath_16 pg_arraymath_16-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_arraymath_16-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 24.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 25.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 27.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 27.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 26.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-arraymath postgresql-16-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 26.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-16-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_arraymath_15 pg_arraymath_15-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_arraymath_15-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_arraymath_15 pg_arraymath_15-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 19.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_arraymath_15-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_arraymath_15 pg_arraymath_15-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_arraymath_15-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_arraymath_15 pg_arraymath_15-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_arraymath_15-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_arraymath_15 pg_arraymath_15-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_arraymath_15-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_arraymath_15 pg_arraymath_15-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_arraymath_15-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 24.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 27.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 27.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 26.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-arraymath postgresql-15-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-15-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_arraymath_14 pg_arraymath_14-1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_arraymath_14-1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_arraymath_14 pg_arraymath_14-1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1 19.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_arraymath_14-1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_arraymath_14 pg_arraymath_14-1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_arraymath_14-1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_arraymath_14 pg_arraymath_14-1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_arraymath_14-1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_arraymath_14 pg_arraymath_14-1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_arraymath_14-1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_arraymath_14 pg_arraymath_14-1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_arraymath_14-1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1 24.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1 27.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1 27.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb pigsty 1.1 25.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-arraymath postgresql-14-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb pigsty 1.1 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-arraymath/postgresql-14-pg-arraymath_1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_arraymath` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_arraymath         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_arraymath` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_arraymath;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_arraymath -v 18  # PG 18
pig ext install -y pg_arraymath -v 17  # PG 17
pig ext install -y pg_arraymath -v 16  # PG 16
pig ext install -y pg_arraymath -v 15  # PG 15
pig ext install -y pg_arraymath -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_arraymath_18       # PG 18
dnf install -y pg_arraymath_17       # PG 17
dnf install -y pg_arraymath_16       # PG 16
dnf install -y pg_arraymath_15       # PG 15
dnf install -y pg_arraymath_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-arraymath   # PG 18
apt install -y postgresql-17-pg-arraymath   # PG 17
apt install -y postgresql-16-pg-arraymath   # PG 16
apt install -y postgresql-15-pg-arraymath   # PG 15
apt install -y postgresql-14-pg-arraymath   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION arraymath;
```



## 用法

> [arraymath: PostgreSQL 的逐元素数组运算](https://github.com/pramsey/pgsql-arraymath)

提供整数、浮点数和数值数组的逐元素运算符和工具函数。

```sql
CREATE EXTENSION arraymath;
```

### 运算符

所有运算符以 `@` 为前缀，表示逐元素操作。支持数组对数组（相同长度或循环扩展）以及数组对标量。

| 运算符 | 说明 | 返回类型 |
|---|---|---|
| `@=` | 逐元素相等 | `boolean[]` |
| `@<` | 逐元素小于 | `boolean[]` |
| `@>` | 逐元素大于 | `boolean[]` |
| `@<=` | 逐元素小于等于 | `boolean[]` |
| `@>=` | 逐元素大于等于 | `boolean[]` |
| `@+` | 逐元素加法 | 同类型 |
| `@-` | 逐元素减法 | 同类型 |
| `@*` | 逐元素乘法 | 同类型 |
| `@/` | 逐元素除法 | 同类型 |

### 函数

| 函数 | 说明 |
|---|---|
| `array_sum(anyarray)` | 所有元素之和 |
| `array_avg(anyarray)` | 所有元素的平均值 |
| `array_min(anyarray)` | 最小元素 |
| `array_max(anyarray)` | 最大元素 |
| `array_median(anyarray)` | 中位数元素 |
| `array_sort(anyarray)` | 升序排序 |
| `array_rsort(anyarray)` | 降序排序 |

### 示例

```sql
-- 数组与标量
SELECT ARRAY[1,2,3,4] @< 4;             -- {t,t,t,f}
SELECT ARRAY[3.4,5.6,7.6] @* 8.1;       -- {27.54,45.36,61.56}

-- 数组与数组（较短数组循环扩展）
SELECT ARRAY[1,2,3,4,5,6] @* ARRAY[1,2]; -- {1,4,3,8,5,12}
SELECT ARRAY[1,2,3] @= ARRAY[3,2,1];     -- {f,t,f}

-- 工具函数
SELECT array_sort(ARRAY[9,1,8,2,7]);     -- {1,2,7,8,9}
SELECT array_sum(ARRAY[1,2,3,4,5]);      -- 15
SELECT array_median(ARRAY[1,2,3,4,5]);   -- 3
```
