---
title: "aggs_for_vecs"
linkTitle: "aggs_for_vecs"
description: "针对数组类型的聚合函数集合扩展"
weight: 4740
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pjungwir/aggs_for_vecs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pjungwir/aggs_for_vecs</div>
    <div class="ext-card__desc">https://github.com/pjungwir/aggs_for_vecs</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/aggs_for_vecs-1.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">aggs_for_vecs-1.4.1.tar.gz</div>
    <div class="ext-card__desc">aggs_for_vecs-1.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`aggs_for_vecs`**](/ext/e/aggs_for_vecs) | `1.4.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4740  | [**`aggs_for_vecs`**](/ext/e/aggs_for_vecs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`aggs_for_arrays`](/ext/e/aggs_for_arrays) [`first_last_agg`](/ext/e/first_last_agg) [`arraymath`](/ext/e/arraymath) [`floatvec`](/ext/e/floatvec) [`vector`](/ext/e/vector) [`topn`](/ext/e/topn) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `aggs_for_vecs` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `aggs_for_vecs_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-aggs-for-vecs` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 aggs_for_vecs_18 aggs_for_vecs_18-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aggs_for_vecs_18-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 aggs_for_vecs_18 aggs_for_vecs_18-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aggs_for_vecs_18-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 aggs_for_vecs_18 aggs_for_vecs_18-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 42.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aggs_for_vecs_18-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 aggs_for_vecs_18 aggs_for_vecs_18-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 43.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aggs_for_vecs_18-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 aggs_for_vecs_18 aggs_for_vecs_18-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 42.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aggs_for_vecs_18-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 aggs_for_vecs_18 aggs_for_vecs_18-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 43.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aggs_for_vecs_18-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 82.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 81.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 88.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 89.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 84.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-aggs-for-vecs postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 86.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-18-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 aggs_for_vecs_17 aggs_for_vecs_17-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aggs_for_vecs_17-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 aggs_for_vecs_17 aggs_for_vecs_17-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aggs_for_vecs_17-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 aggs_for_vecs_17 aggs_for_vecs_17-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 42.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aggs_for_vecs_17-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 aggs_for_vecs_17 aggs_for_vecs_17-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aggs_for_vecs_17-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 aggs_for_vecs_17 aggs_for_vecs_17-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 42.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aggs_for_vecs_17-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 aggs_for_vecs_17 aggs_for_vecs_17-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aggs_for_vecs_17-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 82.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 81.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 82.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 93.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 93.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 84.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-aggs-for-vecs postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 86.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-17-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 aggs_for_vecs_16 aggs_for_vecs_16-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 43.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aggs_for_vecs_16-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 aggs_for_vecs_16 aggs_for_vecs_16-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 43.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aggs_for_vecs_16-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 aggs_for_vecs_16 aggs_for_vecs_16-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 42.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aggs_for_vecs_16-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 aggs_for_vecs_16 aggs_for_vecs_16-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aggs_for_vecs_16-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 aggs_for_vecs_16 aggs_for_vecs_16-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 42.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aggs_for_vecs_16-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 aggs_for_vecs_16 aggs_for_vecs_16-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aggs_for_vecs_16-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 82.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 81.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 93.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 93.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 85.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-aggs-for-vecs postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 86.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-16-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 aggs_for_vecs_15 aggs_for_vecs_15-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 44.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aggs_for_vecs_15-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 aggs_for_vecs_15 aggs_for_vecs_15-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aggs_for_vecs_15-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 aggs_for_vecs_15 aggs_for_vecs_15-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 42.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aggs_for_vecs_15-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 aggs_for_vecs_15 aggs_for_vecs_15-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aggs_for_vecs_15-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 aggs_for_vecs_15 aggs_for_vecs_15-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 42.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aggs_for_vecs_15-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 aggs_for_vecs_15 aggs_for_vecs_15-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aggs_for_vecs_15-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 82.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 82.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 82.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 93.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 93.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 85.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-aggs-for-vecs postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 86.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-15-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 aggs_for_vecs_14 aggs_for_vecs_14-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 44.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aggs_for_vecs_14-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 aggs_for_vecs_14 aggs_for_vecs_14-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aggs_for_vecs_14-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 aggs_for_vecs_14 aggs_for_vecs_14-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 42.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aggs_for_vecs_14-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 aggs_for_vecs_14 aggs_for_vecs_14-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aggs_for_vecs_14-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 aggs_for_vecs_14 aggs_for_vecs_14-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 42.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aggs_for_vecs_14-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 aggs_for_vecs_14 aggs_for_vecs_14-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aggs_for_vecs_14-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 82.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 82.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 81.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 82.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 93.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 93.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 85.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-aggs-for-vecs postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 86.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aggs-for-vecs/postgresql-14-aggs-for-vecs_1.4.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `aggs_for_vecs` 扩展的 RPM / DEB 包：

```bash
pig build pkg aggs_for_vecs         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `aggs_for_vecs` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install aggs_for_vecs;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y aggs_for_vecs -v 18  # PG 18
pig ext install -y aggs_for_vecs -v 17  # PG 17
pig ext install -y aggs_for_vecs -v 16  # PG 16
pig ext install -y aggs_for_vecs -v 15  # PG 15
pig ext install -y aggs_for_vecs -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y aggs_for_vecs_18       # PG 18
dnf install -y aggs_for_vecs_17       # PG 17
dnf install -y aggs_for_vecs_16       # PG 16
dnf install -y aggs_for_vecs_15       # PG 15
dnf install -y aggs_for_vecs_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-aggs-for-vecs   # PG 18
apt install -y postgresql-17-aggs-for-vecs   # PG 17
apt install -y postgresql-16-aggs-for-vecs   # PG 16
apt install -y postgresql-15-aggs-for-vecs   # PG 15
apt install -y postgresql-14-aggs-for-vecs   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION aggs_for_vecs;
```



## 用法

> [aggs_for_vecs: 数组的聚合函数（向量/逐行模式）](https://github.com/pjungwir/aggs_for_vecs)

提供将数组视为向量的聚合函数，跨多行计算按位置的统计量。支持 `SMALLINT`、`INTEGER`、`BIGINT`、`REAL` 和 `DOUBLE PRECISION` 类型。

```sql
CREATE EXTENSION aggs_for_vecs;
```

### 聚合函数

| 函数 | 说明 |
|---|---|
| `vec_to_count(anyarray)` | 每个位置的非空计数 |
| `vec_to_sum(anyarray)` | 每个位置的求和 |
| `vec_to_min(anyarray)` | 每个位置的最小值 |
| `vec_to_max(anyarray)` | 每个位置的最大值 |
| `vec_to_mean(anyarray)` | 每个位置的平均值（返回 `FLOAT[]`） |
| `vec_to_weighted_mean(values, weights)` | 每个位置的加权平均值 |
| `vec_to_var_samp(anyarray)` | 每个位置的样本方差 |
| `vec_to_first(anyarray)` | 每个位置的第一个非空值（配合 ORDER BY 使用） |
| `vec_to_last(anyarray)` | 每个位置的最后一个非空值（配合 ORDER BY 使用） |
| `hist_2d(x, y, ...)` | 二维直方图 |
| `hist_md(vals, indexes, ...)` | N 维直方图 |

### 非聚合函数

| 函数 | 说明 |
|---|---|
| `vec_add(l, r)` | 逐元素加法 |
| `vec_sub(l, r)` | 逐元素减法 |
| `vec_mul(l, r)` | 逐元素乘法 |
| `vec_div(l, r)` | 逐元素除法 |
| `vec_elements(array, indexes)` | 按指定索引选取元素 |
| `pad_vec(array, length)` | 用 NULL 扩展数组至指定长度 |
| `vec_coalesce(array, default)` | 将 NULL 替换为默认值 |
| `vec_trim_scale(numeric[])` | 去除 NUMERIC 元素的尾部零 |
| `vec_without_outliers(vals, mins, maxs)` | 将异常值替换为 NULL |

### 示例

```sql
-- 跨行按位置取最小值
SELECT vec_to_min(vals) FROM (VALUES
  (ARRAY[1,2,3,4]),
  (ARRAY[5,0,-5,0]),
  (ARRAY[3,6,0,9])
) AS t(vals);
-- {1,0,-5,0}

-- 按位置求平均值
SELECT vec_to_mean(vals) FROM my_table;
```
