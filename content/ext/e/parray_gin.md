---
title: "parray_gin"
linkTitle: "parray_gin"
description: "为 text[] 提供部分匹配运算符与 GIN 索引支持"
weight: 4860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/theirix/parray_gin">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">theirix/parray_gin</div>
    <div class="ext-card__desc">https://github.com/theirix/parray_gin</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/parray_gin-1.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">parray_gin-1.5.0.tar.gz</div>
    <div class="ext-card__desc">parray_gin-1.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`parray_gin`**](/ext/e/parray_gin) | `1.5.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4860  | [**`parray_gin`**](/ext/e/parray_gin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`intarray`](/ext/e/intarray) [`btree_gin`](/ext/e/btree_gin) [`btree_gist`](/ext/e/btree_gist) [`pg_trgm`](/ext/e/pg_trgm) [`smlar`](/ext/e/smlar) [`aggs_for_arrays`](/ext/e/aggs_for_arrays) [`aggs_for_vecs`](/ext/e/aggs_for_vecs) [`arraymath`](/ext/e/arraymath) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN dist name and PostgreSQL extension name are both parray_gin; Pigsty packages are built for PG 14-18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.0` | {{< pgvers "18,17,16,15,14" >}} | `parray_gin` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.0` | {{< pgvers "18,17,16,15,14" >}} | `parray_gin_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-parray-gin` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 parray_gin_18 parray_gin_18-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/parray_gin_18-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 parray_gin_18 parray_gin_18-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 22.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/parray_gin_18-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 parray_gin_18 parray_gin_18-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/parray_gin_18-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 parray_gin_18 parray_gin_18-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/parray_gin_18-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 parray_gin_18 parray_gin_18-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/parray_gin_18-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 parray_gin_18 parray_gin_18-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 22.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/parray_gin_18-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 30.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 30.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 30.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 31.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-parray-gin postgresql-18-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 31.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-18-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 parray_gin_17 parray_gin_17-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/parray_gin_17-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 parray_gin_17 parray_gin_17-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 22.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/parray_gin_17-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 parray_gin_17 parray_gin_17-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/parray_gin_17-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 parray_gin_17 parray_gin_17-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/parray_gin_17-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 parray_gin_17 parray_gin_17-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/parray_gin_17-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 parray_gin_17 parray_gin_17-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/parray_gin_17-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 30.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 30.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 32.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 32.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-parray-gin postgresql-17-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 31.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-17-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 parray_gin_16 parray_gin_16-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/parray_gin_16-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 parray_gin_16 parray_gin_16-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 22.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/parray_gin_16-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 parray_gin_16 parray_gin_16-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/parray_gin_16-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 parray_gin_16 parray_gin_16-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/parray_gin_16-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 parray_gin_16 parray_gin_16-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/parray_gin_16-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 parray_gin_16 parray_gin_16-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/parray_gin_16-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 30.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 30.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 32.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 32.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-parray-gin postgresql-16-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 31.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-16-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 parray_gin_15 parray_gin_15-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/parray_gin_15-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 parray_gin_15 parray_gin_15-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 22.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/parray_gin_15-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 parray_gin_15 parray_gin_15-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/parray_gin_15-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 parray_gin_15 parray_gin_15-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/parray_gin_15-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 parray_gin_15 parray_gin_15-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/parray_gin_15-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 parray_gin_15 parray_gin_15-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/parray_gin_15-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 29.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 30.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 32.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 32.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 31.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-parray-gin postgresql-15-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 31.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-15-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 parray_gin_14 parray_gin_14-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/parray_gin_14-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 parray_gin_14 parray_gin_14-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 22.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/parray_gin_14-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 parray_gin_14 parray_gin_14-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/parray_gin_14-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 parray_gin_14 parray_gin_14-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/parray_gin_14-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 parray_gin_14 parray_gin_14-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/parray_gin_14-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 parray_gin_14 parray_gin_14-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/parray_gin_14-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 30.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 29.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 30.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 32.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 32.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-parray-gin postgresql-14-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 31.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/parray-gin/postgresql-14-parray-gin_1.4.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `parray_gin` 扩展的 RPM / DEB 包：

```bash
pig build pkg parray_gin         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `parray_gin` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install parray_gin;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y parray_gin -v 18  # PG 18
pig ext install -y parray_gin -v 17  # PG 17
pig ext install -y parray_gin -v 16  # PG 16
pig ext install -y parray_gin -v 15  # PG 15
pig ext install -y parray_gin -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y parray_gin_18       # PG 18
dnf install -y parray_gin_17       # PG 17
dnf install -y parray_gin_16       # PG 16
dnf install -y parray_gin_15       # PG 15
dnf install -y parray_gin_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-parray-gin   # PG 18
apt install -y postgresql-17-parray-gin   # PG 17
apt install -y postgresql-16-parray-gin   # PG 16
apt install -y postgresql-15-parray-gin   # PG 15
apt install -y postgresql-14-parray-gin   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION parray_gin;
```

## 用法

- 来源：[README](https://github.com/theirix/parray_gin/blob/master/README.md)，[reference doc](https://github.com/theirix/parray_gin/blob/master/doc/parray_gin.md)

`parray_gin` 为 `text[]` 增加一个 GIN operator class，并提供严格匹配与部分匹配操作符。上游把它描述为基于 `pg_trgm` trigram 分解的数组索引。

### 创建扩展与索引

```sql
CREATE EXTENSION parray_gin;

CREATE TABLE test_table (
  id  bigserial,
  val text[]
);

CREATE INDEX test_tags_idx
ON test_table
USING gin (val parray_gin_ops);
```

### 可索引操作符

reference doc 说明 `parray_gin_ops` 支持下列操作符：

- `@>`：严格包含。
- `<@`：严格被包含。
- `@@>`：部分包含，数组元素可以使用 `LIKE` 模式。
- `<@@`：部分被包含。

示例：

```sql
SELECT * FROM test_table WHERE val @> ARRAY['must','contain'];
SELECT * FROM test_table WHERE val @@> ARRAY['what%like%'];
SELECT * FROM test_table WHERE val <@ ARRAY['galaxy','ago','vader'];
SELECT * FROM test_table WHERE val <@@ ARRAY['%ar%','vader'];
```

### 匹配行为

严格匹配要求数组元素完全相等。部分匹配允许 `'foo%'` 或 `'%oo%'` 这类模式。由于 trigram 索引可能返回误命中，文档说明索引查找之后还会做 recheck。

### 注意事项

README 表示支持范围一直到 PostgreSQL 18，而 reference doc 仍写成 9.1-14。两份文档对操作符和 opclass 行为的描述是一致的，但版本说明在上游尚未完全同步。
