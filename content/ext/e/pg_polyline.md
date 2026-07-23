---
title: "pg_polyline"
linkTitle: "pg_polyline"
description: "Google快速Polyline编码解码扩展"
weight: 1570
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/yihong0618/pg_polyline">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">yihong0618/pg_polyline</div>
    <div class="ext-card__desc">https://github.com/yihong0618/pg_polyline</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_polyline-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_polyline-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_polyline-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_polyline`**](/ext/e/pg_polyline) | `0.0.1` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1570  | [**`pg_polyline`**](/ext/e/pg_polyline) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`pgrouting`](/ext/e/pgrouting) [`pg_geohash`](/ext/e/pg_geohash) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_polyline` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_polyline_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-polyline` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_polyline_18 pg_polyline_18-0.0.1-4PIGSTY.el8.x86_64.rpm pigsty 0.0.1 855.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_polyline_18-0.0.1-4PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_polyline_18 pg_polyline_18-0.0.1-4PIGSTY.el8.aarch64.rpm pigsty 0.0.1 768.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_polyline_18-0.0.1-4PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_polyline_18 pg_polyline_18-0.0.1-4PIGSTY.el9.x86_64.rpm pigsty 0.0.1 865.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_polyline_18-0.0.1-4PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_polyline_18 pg_polyline_18-0.0.1-4PIGSTY.el9.aarch64.rpm pigsty 0.0.1 814.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_polyline_18-0.0.1-4PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_polyline_18 pg_polyline_18-0.0.1-4PIGSTY.el10.x86_64.rpm pigsty 0.0.1 865.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_polyline_18-0.0.1-4PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_polyline_18 pg_polyline_18-0.0.1-4PIGSTY.el10.aarch64.rpm pigsty 0.0.1 793.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_polyline_18-0.0.1-4PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 685.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 571.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 684.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 571.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 761.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 672.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 752.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 666.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb pigsty 0.0.1 751.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-polyline postgresql-18-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb pigsty 0.0.1 664.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-18-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_polyline_17 pg_polyline_17-0.0.1-4PIGSTY.el8.x86_64.rpm pigsty 0.0.1 853.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_polyline_17-0.0.1-4PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_polyline_17 pg_polyline_17-0.0.1-4PIGSTY.el8.aarch64.rpm pigsty 0.0.1 765.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_polyline_17-0.0.1-4PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_polyline_17 pg_polyline_17-0.0.1-4PIGSTY.el9.x86_64.rpm pigsty 0.0.1 862.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_polyline_17-0.0.1-4PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_polyline_17 pg_polyline_17-0.0.1-4PIGSTY.el9.aarch64.rpm pigsty 0.0.1 811.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_polyline_17-0.0.1-4PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_polyline_17 pg_polyline_17-0.0.1-4PIGSTY.el10.x86_64.rpm pigsty 0.0.1 863.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_polyline_17-0.0.1-4PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_polyline_17 pg_polyline_17-0.0.1-4PIGSTY.el10.aarch64.rpm pigsty 0.0.1 791.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_polyline_17-0.0.1-4PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 683.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 570.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 684.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 570.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 759.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 672.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 752.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 663.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb pigsty 0.0.1 748.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-polyline postgresql-17-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb pigsty 0.0.1 662.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-17-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_polyline_16 pg_polyline_16-0.0.1-4PIGSTY.el8.x86_64.rpm pigsty 0.0.1 851.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_polyline_16-0.0.1-4PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_polyline_16 pg_polyline_16-0.0.1-4PIGSTY.el8.aarch64.rpm pigsty 0.0.1 763.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_polyline_16-0.0.1-4PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_polyline_16 pg_polyline_16-0.0.1-4PIGSTY.el9.x86_64.rpm pigsty 0.0.1 860.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_polyline_16-0.0.1-4PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_polyline_16 pg_polyline_16-0.0.1-4PIGSTY.el9.aarch64.rpm pigsty 0.0.1 809.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_polyline_16-0.0.1-4PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_polyline_16 pg_polyline_16-0.0.1-4PIGSTY.el10.x86_64.rpm pigsty 0.0.1 861.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_polyline_16-0.0.1-4PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_polyline_16 pg_polyline_16-0.0.1-4PIGSTY.el10.aarch64.rpm pigsty 0.0.1 789.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_polyline_16-0.0.1-4PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 682.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 569.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 683.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 570.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 758.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 671.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 751.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 662.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb pigsty 0.0.1 747.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-polyline postgresql-16-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb pigsty 0.0.1 661.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-16-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_polyline_15 pg_polyline_15-0.0.1-4PIGSTY.el8.x86_64.rpm pigsty 0.0.1 841.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_polyline_15-0.0.1-4PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_polyline_15 pg_polyline_15-0.0.1-4PIGSTY.el8.aarch64.rpm pigsty 0.0.1 755.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_polyline_15-0.0.1-4PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_polyline_15 pg_polyline_15-0.0.1-4PIGSTY.el9.x86_64.rpm pigsty 0.0.1 850.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_polyline_15-0.0.1-4PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_polyline_15 pg_polyline_15-0.0.1-4PIGSTY.el9.aarch64.rpm pigsty 0.0.1 799.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_polyline_15-0.0.1-4PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_polyline_15 pg_polyline_15-0.0.1-4PIGSTY.el10.x86_64.rpm pigsty 0.0.1 850.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_polyline_15-0.0.1-4PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_polyline_15 pg_polyline_15-0.0.1-4PIGSTY.el10.aarch64.rpm pigsty 0.0.1 786.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_polyline_15-0.0.1-4PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 676.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 565.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 677.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 565.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 752.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 666.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 744.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 657.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb pigsty 0.0.1 740.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-polyline postgresql-15-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb pigsty 0.0.1 655.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-15-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_polyline_14 pg_polyline_14-0.0.1-4PIGSTY.el8.x86_64.rpm pigsty 0.0.1 839.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_polyline_14-0.0.1-4PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_polyline_14 pg_polyline_14-0.0.1-4PIGSTY.el8.aarch64.rpm pigsty 0.0.1 752.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_polyline_14-0.0.1-4PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_polyline_14 pg_polyline_14-0.0.1-4PIGSTY.el9.x86_64.rpm pigsty 0.0.1 848.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_polyline_14-0.0.1-4PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_polyline_14 pg_polyline_14-0.0.1-4PIGSTY.el9.aarch64.rpm pigsty 0.0.1 795.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_polyline_14-0.0.1-4PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_polyline_14 pg_polyline_14-0.0.1-4PIGSTY.el10.x86_64.rpm pigsty 0.0.1 849.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_polyline_14-0.0.1-4PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_polyline_14 pg_polyline_14-0.0.1-4PIGSTY.el10.aarch64.rpm pigsty 0.0.1 786.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_polyline_14-0.0.1-4PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb pigsty 0.0.1 674.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb pigsty 0.0.1 564.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb pigsty 0.0.1 674.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb pigsty 0.0.1 564.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb pigsty 0.0.1 751.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb pigsty 0.0.1 664.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb pigsty 0.0.1 742.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb pigsty 0.0.1 654.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb pigsty 0.0.1 738.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-polyline postgresql-14-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb pigsty 0.0.1 653.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-polyline/postgresql-14-pg-polyline_0.0.1-3PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_polyline` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_polyline         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_polyline` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_polyline;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_polyline -v 18  # PG 18
pig ext install -y pg_polyline -v 17  # PG 17
pig ext install -y pg_polyline -v 16  # PG 16
pig ext install -y pg_polyline -v 15  # PG 15
pig ext install -y pg_polyline -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_polyline_18       # PG 18
dnf install -y pg_polyline_17       # PG 17
dnf install -y pg_polyline_16       # PG 16
dnf install -y pg_polyline_15       # PG 15
dnf install -y pg_polyline_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-polyline   # PG 18
apt install -y postgresql-17-pg-polyline   # PG 17
apt install -y postgresql-16-pg-polyline   # PG 16
apt install -y postgresql-15-pg-polyline   # PG 15
apt install -y postgresql-14-pg-polyline   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_polyline;
```




## 用法

> [pg_polyline: PostgreSQL 的 Google 编码折线编解码](https://github.com/yihong0618/pg_polyline)

快速的 Google 编码折线编码与解码 PostgreSQL 扩展。基于 `pgrx` 构建。

```sql
CREATE EXTENSION pg_polyline;

-- 将点数组编码为折线字符串
SELECT polyline_encode(
  ARRAY[point(-120.2, 38.5), point(-120.95, 40.7), point(-126.453, 43.252)], 6
);
--          polyline_encode
-- ----------------------------------
--  _izlhA~rlgdF_{geC~ywl@_kwzCn`{nI

-- 将折线字符串解码回点数组
SELECT polyline_decode('_ibE_seK_seK_seK', 6);
--       polyline_decode
-- ---------------------------
--  {"(0.2,0.1)","(0.4,0.3)"}
```

第二个参数是精度（小数位数）。
