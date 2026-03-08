---
title: "mobilitydb"
linkTitle: "mobilitydb"
description: "MobilityDB地理空间投影数据管理分析平台"
weight: 1650
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/MobilityDB/MobilityDB">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">MobilityDB/MobilityDB</div>
    <div class="ext-card__desc">https://github.com/MobilityDB/MobilityDB</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mobilitydb`**](/ext/e/mobilitydb) | `1.3.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1650  | [**`mobilitydb`**](/ext/e/mobilitydb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1651  | [**`mobilitydb_datagen`**](/ext/e/mobilitydb_datagen) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`pgrouting`](/ext/e/pgrouting) [`h3_postgis`](/ext/e/h3_postgis) [`timescaledb`](/ext/e/timescaledb) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) |
{.ext-table .ext-table--rel}


> need another schema


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `mobilitydb` | `postgis` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-mobilitydb` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| d12.aarch64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| d13.x86_64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| d13.aarch64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u24.x86_64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| u24.aarch64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 709.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 647.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 642.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 710.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 657.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 651.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 716.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 709.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 641.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 714.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 709.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 651.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 574.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 581.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 708.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 647.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 642.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 717.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 709.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 653.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 574.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 708.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 643.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 715.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 708.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 653.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 573.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 536.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ d12.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 716.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 708.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 641.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 709.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 657.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 652.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 573.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `mobilitydb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install mobilitydb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y mobilitydb -v 18  # PG 18
pig ext install -y mobilitydb -v 17  # PG 17
pig ext install -y mobilitydb -v 16  # PG 16
pig ext install -y mobilitydb -v 15  # PG 15
pig ext install -y mobilitydb -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-mobilitydb   # PG 18
apt install -y postgresql-17-mobilitydb   # PG 17
apt install -y postgresql-16-mobilitydb   # PG 16
apt install -y postgresql-15-mobilitydb   # PG 15
apt install -y postgresql-14-mobilitydb   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION mobilitydb CASCADE;  -- 依赖: postgis
```
