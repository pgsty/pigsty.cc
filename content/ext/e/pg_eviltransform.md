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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_eviltransform-0.0.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_eviltransform-0.0.7.tar.gz</div>
    <div class="ext-card__desc">pg_eviltransform-0.0.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_eviltransform`**](/ext/e/pg_eviltransform) | `0.0.7` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1580  | [**`pg_eviltransform`**](/ext/e/pg_eviltransform) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | `eviltransform_internal` |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`postgis`](/ext/e/postgis) [`h3`](/ext/e/h3) [`pg_geohash`](/ext/e/pg_geohash) [`pg_polyline`](/ext/e/pg_polyline) [`earthdistance`](/ext/e/earthdistance) [`qdgc`](/ext/e/qdgc) [`convert`](/ext/e/convert) [`pgrouting`](/ext/e/pgrouting) [`nominatim_fdw`](/ext/e/nominatim_fdw) [`q3c`](/ext/e/q3c) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_eviltransform` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_eviltransform_$v` | `postgis36_$v` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-eviltransform` | `postgresql-$v-postgis` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
@ el8.x86_64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.7-1PGSTY.el8.x86_64.rpm pigsty 0.0.7 895.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_18-0.0.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.7-1PGSTY.el8.aarch64.rpm pigsty 0.0.7 767.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_18-0.0.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.7-1PGSTY.el9.x86_64.rpm pigsty 0.0.7 912.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_18-0.0.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.7-1PGSTY.el9.aarch64.rpm pigsty 0.0.7 824.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_18-0.0.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.7-1PGSTY.el10.x86_64.rpm pigsty 0.0.7 912.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_18-0.0.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_eviltransform_18 pg_eviltransform_18-0.0.7-1PGSTY.el10.aarch64.rpm pigsty 0.0.7 799.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_18-0.0.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb pigsty 0.0.7 745.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb pigsty 0.0.7 617.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb pigsty 0.0.7 744.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb pigsty 0.0.7 617.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb pigsty 0.0.7 827.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb pigsty 0.0.7 730.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~noble_amd64.deb pigsty 0.0.7 820.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~noble_arm64.deb pigsty 0.0.7 721.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb pigsty 0.0.7 814.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-eviltransform postgresql-18-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb pigsty 0.0.7 719.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-18-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.7-1PGSTY.el8.x86_64.rpm pigsty 0.0.7 891.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_17-0.0.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.7-1PGSTY.el8.aarch64.rpm pigsty 0.0.7 763.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_17-0.0.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.7-1PGSTY.el9.x86_64.rpm pigsty 0.0.7 909.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_17-0.0.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.7-1PGSTY.el9.aarch64.rpm pigsty 0.0.7 820.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_17-0.0.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.7-1PGSTY.el10.x86_64.rpm pigsty 0.0.7 905.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_17-0.0.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_eviltransform_17 pg_eviltransform_17-0.0.7-1PGSTY.el10.aarch64.rpm pigsty 0.0.7 798.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_17-0.0.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb pigsty 0.0.7 742.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb pigsty 0.0.7 614.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb pigsty 0.0.7 742.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb pigsty 0.0.7 614.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb pigsty 0.0.7 825.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb pigsty 0.0.7 727.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~noble_amd64.deb pigsty 0.0.7 818.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~noble_arm64.deb pigsty 0.0.7 717.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb pigsty 0.0.7 812.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-eviltransform postgresql-17-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb pigsty 0.0.7 715.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-17-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.7-1PGSTY.el8.x86_64.rpm pigsty 0.0.7 890.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_16-0.0.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.7-1PGSTY.el8.aarch64.rpm pigsty 0.0.7 762.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_16-0.0.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.7-1PGSTY.el9.x86_64.rpm pigsty 0.0.7 907.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_16-0.0.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.7-1PGSTY.el9.aarch64.rpm pigsty 0.0.7 817.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_16-0.0.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.7-1PGSTY.el10.x86_64.rpm pigsty 0.0.7 907.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_16-0.0.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_eviltransform_16 pg_eviltransform_16-0.0.7-1PGSTY.el10.aarch64.rpm pigsty 0.0.7 798.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_16-0.0.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb pigsty 0.0.7 742.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb pigsty 0.0.7 612.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb pigsty 0.0.7 742.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb pigsty 0.0.7 614.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb pigsty 0.0.7 823.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb pigsty 0.0.7 725.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~noble_amd64.deb pigsty 0.0.7 817.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~noble_arm64.deb pigsty 0.0.7 717.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb pigsty 0.0.7 813.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-eviltransform postgresql-16-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb pigsty 0.0.7 715.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-16-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.7-1PGSTY.el8.x86_64.rpm pigsty 0.0.7 881.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_15-0.0.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.7-1PGSTY.el8.aarch64.rpm pigsty 0.0.7 753.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_15-0.0.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.7-1PGSTY.el9.x86_64.rpm pigsty 0.0.7 897.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_15-0.0.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.7-1PGSTY.el9.aarch64.rpm pigsty 0.0.7 807.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_15-0.0.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.7-1PGSTY.el10.x86_64.rpm pigsty 0.0.7 898.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_15-0.0.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_eviltransform_15 pg_eviltransform_15-0.0.7-1PGSTY.el10.aarch64.rpm pigsty 0.0.7 796.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_15-0.0.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb pigsty 0.0.7 736.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb pigsty 0.0.7 609.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb pigsty 0.0.7 736.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb pigsty 0.0.7 609.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb pigsty 0.0.7 816.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb pigsty 0.0.7 718.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~noble_amd64.deb pigsty 0.0.7 809.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~noble_arm64.deb pigsty 0.0.7 709.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb pigsty 0.0.7 803.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-eviltransform postgresql-15-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb pigsty 0.0.7 708.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-15-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.7-1PGSTY.el8.x86_64.rpm pigsty 0.0.7 879.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_eviltransform_14-0.0.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.7-1PGSTY.el8.aarch64.rpm pigsty 0.0.7 752.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_eviltransform_14-0.0.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.7-1PGSTY.el9.x86_64.rpm pigsty 0.0.7 895.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_eviltransform_14-0.0.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.7-1PGSTY.el9.aarch64.rpm pigsty 0.0.7 805.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_eviltransform_14-0.0.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.7-1PGSTY.el10.x86_64.rpm pigsty 0.0.7 893.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_eviltransform_14-0.0.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_eviltransform_14 pg_eviltransform_14-0.0.7-1PGSTY.el10.aarch64.rpm pigsty 0.0.7 793.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_eviltransform_14-0.0.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb pigsty 0.0.7 733.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb pigsty 0.0.7 607.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb pigsty 0.0.7 734.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb pigsty 0.0.7 607.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb pigsty 0.0.7 812.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb pigsty 0.0.7 715.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~noble_amd64.deb pigsty 0.0.7 807.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~noble_arm64.deb pigsty 0.0.7 708.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb pigsty 0.0.7 804.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-eviltransform postgresql-14-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb pigsty 0.0.7 706.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-eviltransform/postgresql-14-eviltransform_0.0.7-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_eviltransform;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_eviltransform -v 18  # PG 18
pig ext install -y pg_eviltransform -v 17  # PG 17
pig ext install -y pg_eviltransform -v 16  # PG 16
pig ext install -y pg_eviltransform -v 15  # PG 15
pig ext install -y pg_eviltransform -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_eviltransform_18       # PG 18
dnf install -y pg_eviltransform_17       # PG 17
dnf install -y pg_eviltransform_16       # PG 16
dnf install -y pg_eviltransform_15       # PG 15
dnf install -y pg_eviltransform_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-eviltransform   # PG 18
apt install -y postgresql-17-eviltransform   # PG 17
apt install -y postgresql-16-eviltransform   # PG 16
apt install -y postgresql-15-eviltransform   # PG 15
apt install -y postgresql-14-eviltransform   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_eviltransform CASCADE;  -- 依赖: postgis
```

## 用法

来源：

- [Official v0.0.7 README](https://github.com/aiyou178/pg_eviltransform/blob/v0.0.7/README.md)
- [v0.0.7 release notes](https://github.com/aiyou178/pg_eviltransform/releases/tag/v0.0.7)
- [v0.0.7 control file](https://github.com/aiyou178/pg_eviltransform/blob/v0.0.7/pg_eviltransform.control)
- [v0.0.7 upgrade SQL](https://github.com/aiyou178/pg_eviltransform/blob/v0.0.7/pg_eviltransform--0.0.6--0.0.7.sql)

`pg_eviltransform` 扩展了 PostGIS，增加了涉及中国 GCJ-02 和 BD-09 系统的坐标转换。版本 `0.0.4` 还通过 `ST_JenksBins` 数组和聚合重载添加了精确的 Jenks 自然断点分类。

### 坐标转换

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION pg_eviltransform;

-- WGS84 to GCJ-02 using a readable coordinate-system name.
SELECT ST_EvilTransform(
    ST_SetSRID('POINT(120 30)'::geometry, 4326),
    'GCJ02'
);

-- BD-09 to Web Mercator.
SELECT ST_EvilTransform(
    ST_SetSRID('POINT(120.011070620552 30.0038830555128)'::geometry, 990002),
    3857
);
```

自定义 SRID 为：`990001` 对应 GCJ-02，`990002` 对应 BD-09。当两端均未使用自定义系统时，`ST_EvilTransform` 将委托给 PostGIS 的 `ST_Transform`；否则在必要时通过 WGS84 (`4326`) 转换。

0.0.7 在文本重载中新增地理坐标系 CGCS2000 的别名 `CGCS2000`、`CGCS-2000`、`4490` 和 `EPSG:4490`，由 PostGIS/PROJ 选择基准转换。使用 CGCS2000 高斯克吕格投影分带时，应传入该分带明确的整数 EPSG SRID。

```sql
SELECT ST_EvilTransform(
    ST_SetSRID('POINT(120 30)'::geometry, 4326), 'CGCS2000'
);
```

### Jenks 自然断点

```sql
-- Array form; NULL elements are ignored.
SELECT ST_JenksBins(ARRAY[1, 2, NULL, 10, 11]::numeric[], 2);

-- Streaming aggregate form for a large table.
SELECT ST_JenksBins(value, 7)
FROM measurements;

-- Return lower rather than upper bin edges.
SELECT ST_JenksBins(value, 7, true)
FROM measurements;
```

数组输入支持 `numeric`, `double precision`, `real`, `bigint`, `integer`, 和 `smallint`。聚合输入为 `numeric` 或 `double precision`；当需要时请将其他数值列转换为这些类型。

### API 索引和注意事项

- `ST_EvilTransform(geometry, integer|text)` 和 `ST_EvilTransform(geometry, text, integer|text)`：四个重载对应于 PostGIS 的 `ST_Transform` 接口。
- `ST_JenksBins(values[], breaks [, invert])`：对数组进行分类并返回 `double precision[]` 边界值。
- `ST_JenksBins(value, breaks [, invert])`：流式聚合，避免生成 `array_agg`。
- PostGIS 是运行时先决条件，在安装 `pg_eviltransform` 之前必须已安装。
- Jenks 输入必须是有限的且 `breaks` 至少为一。`numeric` 值会被转换为有限的 `f64`，因此返回的边界值为浮点数。
- 当唯一值的数量不超过 `breaks` 时，结果将是排序后的唯一值集合；没有有效输入行将返回 `NULL`。

### 0.0.7 兼容性

0.0.6 到 0.0.7 的升级 SQL 更新坐标系名称解析函数。上游使用 pgrx 0.19.3，支持 PostgreSQL 14-18 和 PostgreSQL 19 beta4。`ST_JenksBins` 接口不变；软件包与构建元数据同上游发行版分别维护。
