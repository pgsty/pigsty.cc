---
title: "pg_sorted_heap"
linkTitle: "pg_sorted_heap"
description: "带 zone map 剪枝和内置向量搜索的有序堆表访问方法"
weight: 2550
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/skuznetsov/pg_sorted_heap">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">skuznetsov/pg_sorted_heap</div>
    <div class="ext-card__desc">https://github.com/skuznetsov/pg_sorted_heap</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_sorted_heap-0.14.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_sorted_heap-0.14.0.tar.gz</div>
    <div class="ext-card__desc">pg_sorted_heap-0.14.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_sorted_heap`**](/ext/e/pg_sorted_heap) | `0.14.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2550  | [**`pg_sorted_heap`**](/ext/e/pg_sorted_heap) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`storage_engine`](/ext/e/storage_engine) [`pg_ivm`](/ext/e/pg_ivm) [`pgvector`](/ext/e/pgvector) [`vchord`](/ext/e/vchord) [`pg_search`](/ext/e/pg_search) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> sorted_hnsw.shared_cache requires shared_preload_libraries=pg_sorted_heap.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.14.0` | {{< pgvers "16,17,18" >}} | `pg_sorted_heap` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.14.0` | {{< pgvers "16,17,18" >}} | `pg_sorted_heap_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.14.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-sorted-heap` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | AVAIL PIGSTY 0.14.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_sorted_heap_18 pg_sorted_heap_18-0.14.0-1PIGSTY.el8.x86_64.rpm pigsty 0.14.0 216.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_sorted_heap_18-0.14.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_sorted_heap_18 pg_sorted_heap_18-0.14.0-1PIGSTY.el8.aarch64.rpm pigsty 0.14.0 200.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_sorted_heap_18-0.14.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_sorted_heap_18 pg_sorted_heap_18-0.14.0-1PIGSTY.el9.x86_64.rpm pigsty 0.14.0 208.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_sorted_heap_18-0.14.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_sorted_heap_18 pg_sorted_heap_18-0.14.0-1PIGSTY.el9.aarch64.rpm pigsty 0.14.0 199.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_sorted_heap_18-0.14.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_sorted_heap_18 pg_sorted_heap_18-0.14.0-1PIGSTY.el10.x86_64.rpm pigsty 0.14.0 213.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_sorted_heap_18-0.14.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_sorted_heap_18 pg_sorted_heap_18-0.14.0-1PIGSTY.el10.aarch64.rpm pigsty 0.14.0 206.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_sorted_heap_18-0.14.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_amd64.deb pigsty 0.14.0 724.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_arm64.deb pigsty 0.14.0 711.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~trixie_amd64.deb pigsty 0.14.0 726.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~trixie_arm64.deb pigsty 0.14.0 715.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~jammy_amd64.deb pigsty 0.14.0 758.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~jammy_arm64.deb pigsty 0.14.0 754.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~noble_amd64.deb pigsty 0.14.0 744.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~noble_arm64.deb pigsty 0.14.0 741.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~resolute_amd64.deb pigsty 0.14.0 746.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-sorted-heap postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~resolute_arm64.deb pigsty 0.14.0 736.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-sorted-heap/postgresql-18-pg-sorted-heap_0.14.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_sorted_heap_17 pg_sorted_heap_17-0.14.0-1PIGSTY.el8.x86_64.rpm pigsty 0.14.0 216.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_sorted_heap_17-0.14.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_sorted_heap_17 pg_sorted_heap_17-0.14.0-1PIGSTY.el8.aarch64.rpm pigsty 0.14.0 200.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_sorted_heap_17-0.14.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_sorted_heap_17 pg_sorted_heap_17-0.14.0-1PIGSTY.el9.x86_64.rpm pigsty 0.14.0 208.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_sorted_heap_17-0.14.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_sorted_heap_17 pg_sorted_heap_17-0.14.0-1PIGSTY.el9.aarch64.rpm pigsty 0.14.0 199.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_sorted_heap_17-0.14.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_sorted_heap_17 pg_sorted_heap_17-0.14.0-1PIGSTY.el10.x86_64.rpm pigsty 0.14.0 213.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_sorted_heap_17-0.14.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_sorted_heap_17 pg_sorted_heap_17-0.14.0-1PIGSTY.el10.aarch64.rpm pigsty 0.14.0 206.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_sorted_heap_17-0.14.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_amd64.deb pigsty 0.14.0 723.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_arm64.deb pigsty 0.14.0 710.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~trixie_amd64.deb pigsty 0.14.0 725.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~trixie_arm64.deb pigsty 0.14.0 714.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~jammy_amd64.deb pigsty 0.14.0 805.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~jammy_arm64.deb pigsty 0.14.0 802.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~noble_amd64.deb pigsty 0.14.0 743.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~noble_arm64.deb pigsty 0.14.0 741.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~resolute_amd64.deb pigsty 0.14.0 745.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-sorted-heap postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~resolute_arm64.deb pigsty 0.14.0 736.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-sorted-heap/postgresql-17-pg-sorted-heap_0.14.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_sorted_heap_16 pg_sorted_heap_16-0.14.0-1PIGSTY.el8.x86_64.rpm pigsty 0.14.0 217.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_sorted_heap_16-0.14.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_sorted_heap_16 pg_sorted_heap_16-0.14.0-1PIGSTY.el8.aarch64.rpm pigsty 0.14.0 200.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_sorted_heap_16-0.14.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_sorted_heap_16 pg_sorted_heap_16-0.14.0-1PIGSTY.el9.x86_64.rpm pigsty 0.14.0 208.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_sorted_heap_16-0.14.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_sorted_heap_16 pg_sorted_heap_16-0.14.0-1PIGSTY.el9.aarch64.rpm pigsty 0.14.0 199.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_sorted_heap_16-0.14.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_sorted_heap_16 pg_sorted_heap_16-0.14.0-1PIGSTY.el10.x86_64.rpm pigsty 0.14.0 213.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_sorted_heap_16-0.14.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_sorted_heap_16 pg_sorted_heap_16-0.14.0-1PIGSTY.el10.aarch64.rpm pigsty 0.14.0 206.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_sorted_heap_16-0.14.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_amd64.deb pigsty 0.14.0 723.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_arm64.deb pigsty 0.14.0 711.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~trixie_amd64.deb pigsty 0.14.0 725.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~trixie_arm64.deb pigsty 0.14.0 714.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~jammy_amd64.deb pigsty 0.14.0 802.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~jammy_arm64.deb pigsty 0.14.0 798.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~noble_amd64.deb pigsty 0.14.0 743.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~noble_arm64.deb pigsty 0.14.0 741.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~resolute_amd64.deb pigsty 0.14.0 745.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-sorted-heap postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~resolute_arm64.deb pigsty 0.14.0 735.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-sorted-heap/postgresql-16-pg-sorted-heap_0.14.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_sorted_heap` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_sorted_heap         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_sorted_heap` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_sorted_heap;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_sorted_heap -v 18  # PG 18
pig ext install -y pg_sorted_heap -v 17  # PG 17
pig ext install -y pg_sorted_heap -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_sorted_heap_18       # PG 18
dnf install -y pg_sorted_heap_17       # PG 17
dnf install -y pg_sorted_heap_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-sorted-heap   # PG 18
apt install -y postgresql-17-pg-sorted-heap   # PG 17
apt install -y postgresql-16-pg-sorted-heap   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_sorted_heap';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_sorted_heap;
```




## 用法

- 来源：[pg_sorted_heap README](https://github.com/skuznetsov/pg_sorted_heap)，[stable API](https://github.com/skuznetsov/pg_sorted_heap/blob/main/docs/api-stable.md)，[SQL API](https://github.com/skuznetsov/pg_sorted_heap/blob/main/docs/api.md)，[control file](https://github.com/skuznetsov/pg_sorted_heap/blob/main/pg_sorted_heap.control)

`pg_sorted_heap` 增加了 `sorted_heap` 表访问方法、按页 zone-map 裁剪、维护辅助函数、内置 `svec`/`hsvec` 向量类型、集成进 planner 的 `sorted_hnsw` 索引访问方法，以及稳定版 GraphRAG 封装。上游文档说明当前发布接口支持 PostgreSQL 16、17 和 18。

### Sorted Heap 表

在带有主键的表上使用 `USING sorted_heap`。通过 COPY 路径批量导入时会按主键排序；compaction 会对已有行做全局排序，并重建 zone map：

```sql
CREATE EXTENSION pg_sorted_heap;

CREATE TABLE events (
  ts timestamptz,
  src text,
  data jsonb,
  PRIMARY KEY (ts, src)
) USING sorted_heap;

COPY events FROM '/path/to/events.csv';

SELECT sorted_heap_compact('events'::regclass);

EXPLAIN (ANALYZE, BUFFERS)
SELECT *
FROM events
WHERE ts BETWEEN '2026-01-01' AND '2026-01-02'
  AND src = 'sensor-42';
```

README 描述了针对主键谓词由 planner 注入的 `SortedHeapScan` 路径，以及在 heap block 粒度上的 zone-map 裁剪。

### 维护与观测

稳定维护函数包括：

```sql
SELECT sorted_heap_compact('events'::regclass);
CALL sorted_heap_compact_online('events'::regclass);

SELECT sorted_heap_merge('events'::regclass);
CALL sorted_heap_merge_online('events'::regclass);

SELECT sorted_heap_rebuild_zonemap('events'::regclass);
SELECT sorted_heap_zonemap_stats('events'::regclass);
```

分区辅助函数作用于父表下具体的 sorted-heap 叶子分区：

```sql
SELECT * FROM sorted_heap_partition_status('events_parent'::regclass);
SELECT * FROM sorted_heap_partition_maintenance_plan('events_parent'::regclass, 'compact');
SELECT * FROM sorted_heap_compact_partitions('events_parent'::regclass);
```

### 向量搜索

稳定向量 API 包括 float32 向量 `svec(dim)`、float16 向量 `hsvec(dim)`，以及 `sorted_hnsw` 索引访问方法：

```sql
CREATE TABLE documents (
  id bigserial PRIMARY KEY,
  embedding svec(384),
  content text
);

CREATE INDEX documents_embedding_idx
ON documents USING sorted_hnsw (embedding)
WITH (m = 16, ef_construction = 200);

SET sorted_hnsw.ef_search = 96;

SELECT id, content
FROM documents
ORDER BY embedding <=> '[0.1,0.2,0.3]'::svec
LIMIT 10;
```

如果希望基表存储更紧凑，可以使用 `hsvec` 和对应的 operator class：

```sql
CREATE TABLE documents_compact (
  id bigserial PRIMARY KEY,
  embedding hsvec(384),
  content text
);

CREATE INDEX documents_compact_embedding_idx
ON documents_compact USING sorted_hnsw (embedding hsvec_cosine_ops)
WITH (m = 16, ef_construction = 200);
```

共享解码图缓存由 `sorted_hnsw.shared_cache` 控制。上游示例特别说明，使用它需要预加载该扩展：

```conf
shared_preload_libraries = 'pg_sorted_heap'
```

```sql
SET sorted_hnsw.shared_cache = on;
```

### GraphRAG

稳定版 fact-shaped GraphRAG 入口要求事实数据按 `(entity_id, relation_id, target_id)` 聚簇，或先注册一组别名映射：

```sql
CREATE TABLE facts (
  entity_id int4,
  relation_id int2,
  target_id int4,
  embedding svec(384),
  payload text,
  PRIMARY KEY (entity_id, relation_id, target_id)
) USING sorted_heap;

CREATE INDEX facts_embedding_idx
ON facts USING sorted_hnsw (embedding)
WITH (m = 24, ef_construction = 200);

SET sorted_hnsw.ef_search = 128;

SELECT *
FROM sorted_heap_graph_rag(
  'facts'::regclass,
  '[0.1,0.2,0.3]'::svec,
  relation_path := ARRAY[1, 2],
  ann_k := 64,
  top_k := 10,
  score_mode := 'path'
);
```

如果事实表使用了不同的列名，可以注册一次替代映射：

```sql
SELECT sorted_heap_graph_register(
  'facts_alias'::regclass,
  entity_column := 'src_id',
  relation_column := 'edge_type',
  target_column := 'dst_id',
  embedding_column := 'vec',
  payload_column := 'body'
);
```

对于按路由或租户分片的事实表，可使用 `sorted_heap_graph_route(...)`，并通过 `sorted_heap_graph_route_plan(...)` 查看路由计划。

### 稳定 GUC

- `sorted_heap.enable_scan_pruning`：启用 sorted-heap custom scan 裁剪；默认 `on`。
- `sorted_heap.vacuum_rebuild_zonemap`：在 `VACUUM` 期间重建 zone map；默认 `off`。
- `sorted_heap.lazy_update`：推迟即时 zone-map 更新维护；默认 `off`。
- `sorted_hnsw.ef_search`：运行时 HNSW 搜索宽度；默认 `64`。
- `sorted_hnsw.shared_cache`：预加载后使用的共享解码图缓存；默认 `on`。
- `sorted_hnsw.sq8`：SQ8 解码缓存表示；默认 `on`。
- `sorted_hnsw.build_sq8`：低内存索引构建模式；默认 `off`。

### 注意事项

- `sorted_heap.lazy_update = on` 会牺牲 scan pruning，换取 update-heavy 工作负载下更快的更新，直到 compaction 或 merge 恢复裁剪效果。
- `sorted_hnsw.shared_cache` 应与 `shared_preload_libraries = 'pg_sorted_heap'` 配合使用。
- planner 集成的 `sorted_hnsw` 有序扫描需要 `LIMIT`；SQL API 说明，在没有 limit 或 `LIMIT > sorted_hnsw.ef_search` 时不会选择它们。
- 底层 GraphRAG 与旧式/手工 ANN 辅助函数仍有文档，但稳定的应用侧 API 是 `docs/api-stable.md` 中的精简接口。
