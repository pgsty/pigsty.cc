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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/parray_gin-1.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">parray_gin-1.4.0.tar.gz</div>
    <div class="ext-card__desc">parray_gin-1.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`parray_gin`**](/ext/e/parray_gin) | `1.4.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `parray_gin` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `parray_gin_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-parray-gin` | - |
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

> 语法：
>
> ```sql
> CREATE EXTENSION parray_gin;
> CREATE INDEX test_tags_idx ON test_table USING gin (val parray_gin_ops);
> SELECT * FROM test_table WHERE val @> ARRAY['must','contain'];
> SELECT * FROM test_table WHERE val @@> ARRAY['what%like%'];
> ```
>
> 来源：[README](https://github.com/theirix/parray_gin)，[参考文档](https://github.com/theirix/parray_gin/blob/master/doc/parray_gin.md)

`parray_gin` 为 `text[]` 数组提供 GIN 索引和操作符支持，既支持严格匹配，也支持部分匹配。上游文档将其描述为基于 `pg_trgm` 三元组实现的数组索引方案。

## 数组索引

该扩展提供 `parray_gin_ops` 操作符类，可用于 `text[]` 上的 GIN 索引：

```sql
CREATE TABLE test_table(id bigserial, val text[]);
CREATE INDEX test_tags_idx ON test_table USING gin (val parray_gin_ops);
```

参考文档指出，被索引的值和查询都会拆分为 trigrams。由于 GIN 可能返回误命中，操作符匹配后还会进行复核。

## 操作符

### 严格匹配

`@> (text[], text[]) -> bool`

当左侧数组包含右侧数组中的所有元素时返回 `true`。

```sql
SELECT * FROM test_table WHERE val @> ARRAY['far'];
```

`<@ (text[], text[]) -> bool`

当左侧数组被右侧数组包含时返回 `true`。

```sql
SELECT * FROM test_table WHERE val <@ ARRAY['galaxy','ago','vader'];
```

### 部分匹配

`@@> (text[], text[]) -> bool`

当左侧数组以部分匹配方式包含右侧所有项时返回 `true`，例如 `'foobar' ~~ 'foo%'` 或 `'foobar' ~~ '%oo%'`。

```sql
SELECT * FROM test_table WHERE val @@> ARRAY['%ar%'];
```

`<@@ (text[], text[]) -> bool`

当左侧数组被右侧所有模式部分匹配包含时返回 `true`。

```sql
SELECT * FROM test_table WHERE val <@@ ARRAY['%ar%','vader'];
```

## 说明

上游文档指出，GIN 可用于 `@>`, `<@`, `@@>` 和 `<@@`。文档还提到，该扩展可用于从 JSON 文本字段中提取出的 JSON 数组，相关场景中曾与 `json_accessors` 扩展配合使用。
