---
title: "qdgc"
linkTitle: "qdgc"
description: "用纯 SQL 编码、解码、遍历和填充扩展四分之一度网格单元（QDGC）编码。"
weight: 1700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgxn.org/dist/qdgc/0.1.0/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgxn.org/dist/qdgc/0.1.0/</div>
    <div class="ext-card__desc">https://pgxn.org/dist/qdgc/0.1.0/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/qdgc-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">qdgc-0.1.0.tar.gz</div>
    <div class="ext-card__desc">qdgc-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`qdgc`**](/ext/e/qdgc) | `0.1.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1700  | [**`qdgc`**](/ext/e/qdgc) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1710  | [**`qdgc_postgis`**](/ext/e/qdgc_postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`h3`](/ext/e/h3) [`pgrouting`](/ext/e/pgrouting) [`pg_geohash`](/ext/e/pg_geohash) [`q3c`](/ext/e/q3c) [`postgis_topology`](/ext/e/postgis_topology) [`pg_polyline`](/ext/e/pg_polyline) [`pg_eviltransform`](/ext/e/pg_eviltransform) [`mobilitydb`](/ext/e/mobilitydb) [`earthdistance`](/ext/e/earthdistance) [`pointcloud`](/ext/e/pointcloud) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`qdgc_postgis`](/ext/e/qdgc_postgis) |
{.ext-table .ext-table--rel}


> PGXN distribution qdgc also ships qdgc_postgis; the GitHub v0.1.0 tag belongs to qdgc-py and is not this PGXN release.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `qdgc` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `qdgc_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-qdgc` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 qdgc_18 qdgc_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 25.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/qdgc_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 qdgc_18 qdgc_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 24.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/qdgc_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 qdgc_18 qdgc_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/qdgc_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 qdgc_18 qdgc_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/qdgc_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 qdgc_18 qdgc_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/qdgc_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 qdgc_18 qdgc_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/qdgc_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-qdgc postgresql-18-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-18-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 qdgc_17 qdgc_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 25.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/qdgc_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 qdgc_17 qdgc_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 24.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/qdgc_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 qdgc_17 qdgc_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/qdgc_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 qdgc_17 qdgc_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/qdgc_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 qdgc_17 qdgc_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/qdgc_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 qdgc_17 qdgc_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/qdgc_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-qdgc postgresql-17-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-17-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 qdgc_16 qdgc_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 25.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/qdgc_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 qdgc_16 qdgc_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 24.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/qdgc_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 qdgc_16 qdgc_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/qdgc_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 qdgc_16 qdgc_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/qdgc_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 qdgc_16 qdgc_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/qdgc_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 qdgc_16 qdgc_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/qdgc_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-qdgc postgresql-16-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-16-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 qdgc_15 qdgc_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 25.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/qdgc_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 qdgc_15 qdgc_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 24.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/qdgc_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 qdgc_15 qdgc_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/qdgc_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 qdgc_15 qdgc_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/qdgc_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 qdgc_15 qdgc_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/qdgc_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 qdgc_15 qdgc_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/qdgc_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-qdgc postgresql-15-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-15-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 qdgc_14 qdgc_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 25.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/qdgc_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 qdgc_14 qdgc_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 24.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/qdgc_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 qdgc_14 qdgc_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/qdgc_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 qdgc_14 qdgc_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/qdgc_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 qdgc_14 qdgc_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/qdgc_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 qdgc_14 qdgc_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/qdgc_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-qdgc postgresql-14-qdgc_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 16.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qdgc/postgresql-14-qdgc_0.1.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `qdgc` 扩展的 RPM / DEB 包：

```bash
pig build pkg qdgc         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `qdgc` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install qdgc;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y qdgc -v 18  # PG 18
pig ext install -y qdgc -v 17  # PG 17
pig ext install -y qdgc -v 16  # PG 16
pig ext install -y qdgc -v 15  # PG 15
pig ext install -y qdgc -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y qdgc_18       # PG 18
dnf install -y qdgc_17       # PG 17
dnf install -y qdgc_16       # PG 16
dnf install -y qdgc_15       # PG 15
dnf install -y qdgc_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-qdgc   # PG 18
apt install -y postgresql-17-qdgc   # PG 17
apt install -y postgresql-16-qdgc   # PG 16
apt install -y postgresql-15-qdgc   # PG 15
apt install -y postgresql-14-qdgc   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION qdgc;
```

## 用法

来源：

- [PGXN qdgc 0.1.0 发布页](https://pgxn.org/dist/qdgc/0.1.0/)
- [官方 0.1.0 README](https://api.pgxn.org/src/qdgc/qdgc-0.1.0/README.md)
- [官方 qdgc 控制文件](https://api.pgxn.org/src/qdgc/qdgc-0.1.0/qdgc.control)
- [官方 qdgc 0.1.0 扩展 SQL](https://api.pgxn.org/src/qdgc/qdgc-0.1.0/qdgc--0.1.0.sql)

`qdgc` 0.1.0 是 QDGC 扩展家族中可信、可迁移、完全由 SQL 实现的核心扩展。它可以把经纬度编码为扩展四分之一度网格单元编码，解码单元边界，沿前缀层级导航，查询层级指标，并按经纬度包围盒生成网格。它不依赖 PostGIS 或本地动态库；geometry、geography 与多边形填充能力由伴生扩展 `qdgc_postgis` 提供。

### 核心流程

```sql
CREATE EXTENSION qdgc;

-- qdgc_encode uses (longitude, latitude, level).
SELECT qdgc_encode(31.4, 2.7, 5);
-- E031N02ADBAC

-- The h3-style alias reverses the coordinate arguments.
SELECT qdgc_latlng_to_cell(2.7, 31.4, 5);

SELECT *
FROM qdgc_cell_to_bounds('E031N02ADBAC');

SELECT qdgc_cell_to_parent('E031N02ADBAC', 3);
SELECT * FROM qdgc_cell_to_children('E031N02AD', 5);
```

QDGC 的层级直接编码在文本中：子单元编码以前缀形式包含父单元编码，因此可以直接进行汇总和后代单元查询：

```sql
CREATE TABLE observations (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    qdgc_code text NOT NULL
);

CREATE INDEX observations_qdgc_idx ON observations (qdgc_code);

SELECT qdgc_cell_to_parent(qdgc_code, 3) AS level_3_cell,
       count(*)
FROM observations
GROUP BY 1;

SELECT *
FROM observations
WHERE qdgc_code LIKE 'E031N02AB%';
```

### 包围盒与层级指标

核心扩展不依赖 PostGIS 即可枚举矩形区域。跨越反子午线时，令 `min_lon > max_lon`。

```sql
SELECT qdgc_bbox_cell_count(30.0, 1.0, 32.0, 3.0, 7);

SELECT *
FROM qdgc_bbox_to_cells(30.0, 1.0, 32.0, 3.0, 7);

SELECT qdgc_level_degrees(7);
SELECT qdgc_get_num_cells(7);
SELECT qdgc_average_cell_area(7, 2.0, 'km^2');
SELECT qdgc_version();
```

`qdgc_average_cell_area` 给出球面近似值。若需要针对具体单元按 WGS84 椭球计算面积，应使用 `qdgc_postgis` 提供的 `qdgc_cell_area_km2`。

### 重要对象

- `qdgc_encode(lon, lat, level)` 与 `qdgc_latlng_to_cell(lat, lng, level)` 用于生成编码；两者的坐标参数顺序有意保持不同。
- `qdgc_is_valid_cell`、`qdgc_get_level`、`qdgc_cell_to_bounds`、`qdgc_cell_to_lonlat` 与 `qdgc_cell_to_latlng` 用于校验和解码。
- `qdgc_cell_to_parent` 与 `qdgc_cell_to_children` 用于沿四叉前缀层级导航。
- `qdgc_bbox_to_cells` 枚举与包围盒相交的单元；`qdgc_bbox_cell_count` 只计算数量，不生成结果集。
- `qdgc_level_degrees`、`qdgc_get_num_cells` 与 `qdgc_average_cell_area` 返回网格层级指标。

### 运维说明

- 上游要求 PostgreSQL 13 或更高版本，并测试了 PostgreSQL 13–17；PostgreSQL 18 不在 0.1.0 已发布的测试矩阵内。
- 控制文件设置了 `trusted = true` 与 `relocatable = true`，不需要 `shared_preload_libraries`、`LOAD`、重启服务或本地动态库。
- 可迁移函数之间使用未限定名称互相调用，因此应把 `qdgc` 安装到当前 `search_path` 包含的模式中；默认的 `public` 模式满足这一条件。
- 坐标单位是经纬度角度。`qdgc_encode` 先接收经度，`qdgc_latlng_to_cell` 则先接收纬度。
- 每增加一级，后代结果数量会扩大四倍。生成包围盒网格前先计算数量，不要在没有明确结果规模上限时请求很深的后代层级。
