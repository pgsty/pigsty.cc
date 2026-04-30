---
title: "pg_eviltransform"
linkTitle: "pg_eviltransform"
description: "基于PostGIS ST_Transform 的 BD09/GCJ02 坐标转换扩展"
weight: 1580
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aiyou178/pg_eviltransform">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aiyou178/pg_eviltransform</div>
    <div class="ext-card__desc">https://github.com/aiyou178/pg_eviltransform</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_eviltransform-0.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_eviltransform-0.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_eviltransform-0.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_eviltransform`**](/ext/e/pg_eviltransform) | `0.0.2` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1580  | [**`pg_eviltransform`**](/ext/e/pg_eviltransform) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | `eviltransform_internal` |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`postgis`](/ext/e/postgis) [`pgrouting`](/ext/e/pgrouting) [`pg_geohash`](/ext/e/pg_geohash) [`h3`](/ext/e/h3) [`q3c`](/ext/e/q3c) [`earthdistance`](/ext/e/earthdistance) [`tzf`](/ext/e/tzf) [`geoip`](/ext/e/geoip) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_eviltransform` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_eviltransform_$v` | `postgis36_$v` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-eviltransform` | `postgresql-$v-postgis` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 300.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_18-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 194.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_18-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 315.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_18-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 207.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_18-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 316.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_18-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 208.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_18-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 249.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 150.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 248.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 150.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 280.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 174.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 277.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 173.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 300.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_17-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 194.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_17-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 315.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_17-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 207.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_17-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 315.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_17-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 208.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_17-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 248.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 150.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 248.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 150.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 280.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 174.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 277.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 173.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 300.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_16-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 194.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_16-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 315.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_16-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 207.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_16-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 315.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_16-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 208.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_16-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 248.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 150.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 247.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 150.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 280.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 174.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 277.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 173.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 300.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_15-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 194.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_15-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 315.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_15-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 207.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_15-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 315.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_15-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 208.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_15-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 249.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 150.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 248.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 150.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 280.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 174.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 277.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 173.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 300.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_14-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 194.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_14-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 315.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_14-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 207.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_14-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 315.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_14-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 208.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_14-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.0.2 248.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.0.2 150.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb pigsty 0.0.2 248.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb pigsty 0.0.2 150.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb pigsty 0.0.2 280.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb pigsty 0.0.2 174.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb pigsty 0.0.2 277.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb pigsty 0.0.2 173.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_eviltransform` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_eviltransform         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_eviltransform` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_eviltransform;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_eviltransform -v 18  # PG 18
pig ext install -y pg_eviltransform -v 17  # PG 17
pig ext install -y pg_eviltransform -v 16  # PG 16
pig ext install -y pg_eviltransform -v 15  # PG 15
pig ext install -y pg_eviltransform -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_eviltransform_18       # PG 18
dnf install -y pg_eviltransform_17       # PG 17
dnf install -y pg_eviltransform_16       # PG 16
dnf install -y pg_eviltransform_15       # PG 15
dnf install -y pg_eviltransform_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-eviltransform   # PG 18
apt install -y postgresql-17-eviltransform   # PG 17
apt install -y postgresql-16-eviltransform   # PG 16
apt install -y postgresql-15-eviltransform   # PG 15
apt install -y postgresql-14-eviltransform   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_eviltransform CASCADE;  -- 依赖: postgis
```



## 用法

> [pg_eviltransform: WGS84、GCJ02 和 BD09 之间的坐标转换](https://github.com/aiyou178/pg_eviltransform)

`pg_eviltransform` 为 PostGIS 的 `ST_Transform` 扩展了 BD09/GCJ02 中国坐标系支持。它暴露了 `ST_EvilTransform` 函数，与 `ST_Transform` 具有相同的重载接口。

自定义 SRID：
- `990001`：GCJ02（火星坐标系）
- `990002`：BD09（百度坐标系）

### 函数

```sql
ST_EvilTransform(geometry, to_srid integer)
ST_EvilTransform(geometry, to_proj text)
ST_EvilTransform(geometry, from_proj text, to_srid integer)
ST_EvilTransform(geometry, from_proj text, to_proj text)
```

如果双方都不涉及自定义坐标系，则直接委托给 `ST_Transform`。如果涉及 BD09/GCJ02，会在需要时通过 WGS84（`4326`）进行中转。

### 示例

```sql
-- WGS84 转 GCJ02（使用文本字面量）
SELECT ST_EvilTransform(ST_SetSRID('POINT(120 30)'::geometry, 4326), 'GCJ02');

-- WGS84 转 BD09（使用文本字面量）
SELECT ST_EvilTransform(ST_SetSRID('POINT(120 30)'::geometry, 4326), 'BD09');

-- WGS84 转 GCJ02（使用数字 SRID）
SELECT ST_EvilTransform(ST_SetSRID('POINT(120 30)'::geometry, 4326), 990001);

-- BD09 转 Web Mercator
SELECT ST_EvilTransform(
  ST_SetSRID('POINT(120.011070620552 30.0038830555128)'::geometry, 990002), 3857
);

-- from_proj / to_proj 重载
SELECT ST_EvilTransform('POINT(120 30)'::geometry, 'EPSG:4326', 'GCJ02');
```

### 性能

在 PG18 上处理 200,000 行数据时，`ST_EvilTransform` 比基于正则表达式的 SQL 方法快约 30-45 倍。
