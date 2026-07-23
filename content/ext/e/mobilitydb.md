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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/mobilitydb-1.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">mobilitydb-1.3.0.tar.gz</div>
    <div class="ext-card__desc">mobilitydb-1.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mobilitydb`**](/ext/e/mobilitydb) | `1.3.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1650  | [**`mobilitydb`**](/ext/e/mobilitydb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1651  | [**`mobilitydb_datagen`**](/ext/e/mobilitydb_datagen) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`pgrouting`](/ext/e/pgrouting) [`h3_postgis`](/ext/e/h3_postgis) [`timescaledb`](/ext/e/timescaledb) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `mobilitydb` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `mobilitydb_$v` | `postgis36_$v` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-mobilitydb` | `postgresql-$v-postgis-3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| d12.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| d12.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| d13.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| d13.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u22.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u24.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u24.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u26.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u26.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
@ el8.x86_64 18 mobilitydb_18 mobilitydb_18-1.3.0-1PIGSTY.el8.x86_64.rpm pigsty 1.3.0 807.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_18-1.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 mobilitydb_18 mobilitydb_18-1.3.0-1PIGSTY.el8.aarch64.rpm pigsty 1.3.0 751.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_18-1.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 mobilitydb_18 mobilitydb_18-1.3.0-1PIGSTY.el9.x86_64.rpm pigsty 1.3.0 809.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_18-1.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 mobilitydb_18 mobilitydb_18-1.3.0-1PIGSTY.el9.aarch64.rpm pigsty 1.3.0 771.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_18-1.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 mobilitydb_18 mobilitydb_18-1.3.0-1PIGSTY.el10.x86_64.rpm pigsty 1.3.0 734.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_18-1.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 mobilitydb_18 mobilitydb_18-1.3.0-1PIGSTY.el10.aarch64.rpm pigsty 1.3.0 708.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_18-1.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 709.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 647.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 642.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 710.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 657.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 651.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-2PIGSTY~jammy_amd64.deb pigsty 1.3.0 666.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-2PIGSTY~jammy_arm64.deb pigsty 1.3.0 655.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 581.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb pgdg 1.3.0 613.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb pgdg 1.3.0 572.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 mobilitydb_17 mobilitydb_17-1.3.0-1PIGSTY.el8.x86_64.rpm pigsty 1.3.0 807.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_17-1.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 mobilitydb_17 mobilitydb_17-1.3.0-1PIGSTY.el8.aarch64.rpm pigsty 1.3.0 751.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_17-1.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 mobilitydb_17 mobilitydb_17-1.3.0-1PIGSTY.el9.x86_64.rpm pigsty 1.3.0 809.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_17-1.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 mobilitydb_17 mobilitydb_17-1.3.0-1PIGSTY.el9.aarch64.rpm pigsty 1.3.0 772.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_17-1.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 mobilitydb_17 mobilitydb_17-1.3.0-1PIGSTY.el10.x86_64.rpm pigsty 1.3.0 733.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_17-1.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 mobilitydb_17 mobilitydb_17-1.3.0-1PIGSTY.el10.aarch64.rpm pigsty 1.3.0 708.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_17-1.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 716.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 709.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 641.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 714.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 709.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 651.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 574.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 581.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb pgdg 1.3.0 613.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb pgdg 1.3.0 572.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 mobilitydb_16 mobilitydb_16-1.3.0-1PIGSTY.el8.x86_64.rpm pigsty 1.3.0 807.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_16-1.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 mobilitydb_16 mobilitydb_16-1.3.0-1PIGSTY.el8.aarch64.rpm pigsty 1.3.0 751.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_16-1.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 mobilitydb_16 mobilitydb_16-1.3.0-1PIGSTY.el9.x86_64.rpm pigsty 1.3.0 809.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_16-1.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 mobilitydb_16 mobilitydb_16-1.3.0-1PIGSTY.el9.aarch64.rpm pigsty 1.3.0 771.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_16-1.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 mobilitydb_16 mobilitydb_16-1.3.0-1PIGSTY.el10.x86_64.rpm pigsty 1.3.0 734.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_16-1.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 mobilitydb_16 mobilitydb_16-1.3.0-1PIGSTY.el10.aarch64.rpm pigsty 1.3.0 708.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_16-1.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 708.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb pgdg 1.3.0 647.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 647.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 642.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 717.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 709.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 653.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 574.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 619.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb pgdg 1.3.0 613.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb pgdg 1.3.0 572.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 mobilitydb_15 mobilitydb_15-1.3.0-1PIGSTY.el8.x86_64.rpm pigsty 1.3.0 806.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_15-1.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 mobilitydb_15 mobilitydb_15-1.3.0-1PIGSTY.el8.aarch64.rpm pigsty 1.3.0 750.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_15-1.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 mobilitydb_15 mobilitydb_15-1.3.0-1PIGSTY.el9.x86_64.rpm pigsty 1.3.0 808.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_15-1.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 mobilitydb_15 mobilitydb_15-1.3.0-1PIGSTY.el9.aarch64.rpm pigsty 1.3.0 771.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_15-1.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 mobilitydb_15 mobilitydb_15-1.3.0-1PIGSTY.el10.x86_64.rpm pigsty 1.3.0 733.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_15-1.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 mobilitydb_15 mobilitydb_15-1.3.0-1PIGSTY.el10.aarch64.rpm pigsty 1.3.0 707.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_15-1.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 715.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 708.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb pgdg 1.3.0 647.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 643.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 715.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 708.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 653.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 573.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 536.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 621.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb pgdg 1.3.0 612.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb pgdg 1.3.0 572.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 mobilitydb_14 mobilitydb_14-1.3.0-1PIGSTY.el8.x86_64.rpm pigsty 1.3.0 806.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_14-1.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 mobilitydb_14 mobilitydb_14-1.3.0-1PIGSTY.el8.aarch64.rpm pigsty 1.3.0 751.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_14-1.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 mobilitydb_14 mobilitydb_14-1.3.0-1PIGSTY.el9.x86_64.rpm pigsty 1.3.0 809.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_14-1.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 mobilitydb_14 mobilitydb_14-1.3.0-1PIGSTY.el9.aarch64.rpm pigsty 1.3.0 772.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_14-1.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 mobilitydb_14 mobilitydb_14-1.3.0-1PIGSTY.el10.x86_64.rpm pigsty 1.3.0 733.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_14-1.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 mobilitydb_14 mobilitydb_14-1.3.0-1PIGSTY.el10.aarch64.rpm pigsty 1.3.0 708.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_14-1.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb pgdg 1.3.0 716.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb pgdg 1.3.0 716.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb pgdg 1.3.0 708.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb pgdg 1.3.0 648.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb pgdg 1.3.0 641.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb pgdg 1.3.0 716.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb pgdg 1.3.0 709.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb pgdg 1.3.0 658.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb pgdg 1.3.0 657.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb pgdg 1.3.0 652.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 573.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb pgdg 1.3.0 618.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb pgdg 1.3.0 609.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb pgdg 1.3.0 580.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb pgdg 1.3.0 572.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb pgdg 1.3.0 622.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb pgdg 1.3.0 613.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb pgdg 1.3.0 580.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~rc1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-mobilitydb postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb pgdg 1.3.0 572.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-14-mobilitydb_1.3.0~alpha-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `mobilitydb` 扩展的 RPM 包：

```bash
pig build pkg mobilitydb         # 构建 RPM 包
```


## 安装

您可以直接安装 `mobilitydb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
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
{{% tab header="dnf" %}}
```bash
dnf install -y mobilitydb_18       # PG 18
dnf install -y mobilitydb_17       # PG 17
dnf install -y mobilitydb_16       # PG 16
dnf install -y mobilitydb_15       # PG 15
dnf install -y mobilitydb_14       # PG 14
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


**预加载配置**：

```bash
shared_preload_libraries = 'postgis-3';
```


**创建扩展**：

```sql
CREATE EXTENSION mobilitydb CASCADE;  -- 依赖: postgis
```




## 用法

来源：[仓库 README](https://github.com/MobilityDB/MobilityDB)、[MobilityDB 1.3 手册](https://mobilitydb.github.io/MobilityDB/master/)、[v1.3.0 版本](https://github.com/MobilityDB/MobilityDB/releases/tag/v1.3.0)

MobilityDB 使用时态和时空数据类型扩展 PostgreSQL 与 PostGIS，使车辆轨迹、传感器读数和随时间变化属性等移动对象数据能够高效存储、索引和查询。

**关键文档：**

- [MobilityDB 手册](https://mobilitydb.github.io/MobilityDB/master/)
- [时态类型](https://mobilitydb.github.io/MobilityDB/master/ch04.html)
- [时空类型](https://mobilitydb.github.io/MobilityDB/master/ch07.html)
- [时态姿态](https://mobilitydb.github.io/MobilityDB/master/ch11.html)
- [时态圆形缓冲区](https://mobilitydb.github.io/MobilityDB/master/ch13.html)
- [索引](https://mobilitydb.github.io/MobilityDB/master/ch10s02.html)
- [MobilityDB 教程](https://mobilitydb.com/documentation/)
- [API 参考](https://mobilitydb.github.io/MobilityDB/master/)

### 入门

MobilityDB 要求 PostGIS。启用两个扩展：

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION mobilitydb;
```

### 时态类型

MobilityDB 为基础类型提供对应的时态变体：

| 时态类型 | 基础类型 | 说明 |
|---------------|-----------|-------------|
| `tbool`       | `boolean` | 随时间变化的布尔值 |
| `tint`        | `integer` | 随时间变化的整数 |
| `tfloat`      | `float`   | 随时间变化的浮点数 |
| `ttext`       | `text`    | 随时间变化的文本 |
| `tgeometry`   | `geometry` | 随时间变化的任意几何对象 |
| `tgeography`  | `geography` | 随时间变化的任意地理对象 |
| `tgeompoint`  | `geometry(Point)` | 随时间变化的几何点 |
| `tgeogpoint`  | `geography(Point)` | 随时间变化的地理点 |
| `tnpoint`     | 网络点 | 随时间变化的网络点 |
| `tcbuffer`    | 圆形缓冲区 | 随时间变化的圆形缓冲区 |
| `tpose`       | 姿态 | 随时间变化的点位置和方向 |
| `trgeometry`  | 刚性几何对象 | 随时间变化的刚性几何对象 |

MobilityDB 1.3 增加了 `tgeometry`、`tgeography`、`tcbuffer`、`tpose` 和 `trgeometry`。`tgeometry` 与 `tgeography` 支持离散插值或阶梯插值，不支持任意几何对象的线性插值。1.3 版本说明将 `tcbuffer`、`tpose` 和 `trgeometry` 标记为实验性功能。

### 时态子类型

每种时态类型都可根据值随时间变化的方式表示为不同子类型：

| 子类型 | 说明 | 示例 |
|---------|-------------|---------|
| **Instant** | 单个时间戳上的单个值 | `'25.5@2025-01-01 08:00'` |
| **Sequence** | 一个时间区间上的连续值 | `'[25.5@08:00, 28.1@09:00, 30.0@10:00]'` |
| **SequenceSet** | 一组互不重叠的序列 | `'{[25.5@08:00, 28.1@09:00], [30.0@11:00, 31.2@12:00]}'` |

序列使用方括号表示包含边界 `[`，使用圆括号表示排除边界 `(`，与 PostgreSQL 范围类型相同。

### 创建时态值

**瞬时值：**

```sql
SELECT tfloat '25.5@2025-06-01 08:00:00+00';
SELECT tgeompoint 'SRID=4326;Point(2.3522 48.8566)@2025-06-01 08:00:00+00';
```

**序列值（连续插值）：**

```sql
SELECT tfloat '[20.0@2025-06-01 08:00, 25.5@2025-06-01 09:00, 22.0@2025-06-01 10:00]';
```

**离散序列（阶梯插值）：**

```sql
SELECT tint 'Interp=Step;[10@2025-06-01 08:00, 20@2025-06-01 09:00, 15@2025-06-01 10:00]';
```

**序列集值：**

```sql
SELECT tfloat '{[20.0@08:00, 25.5@09:00], [22.0@11:00, 28.0@12:00]}';
```

**从组件构造：**

```sql
SELECT tgeompoint_inst(ST_Point(2.3522, 48.8566, 4326), '2025-06-01 08:00+00');
SELECT tgeompoint_seq(ARRAY[
    tgeompoint_inst(ST_Point(2.3522, 48.8566, 4326), '2025-06-01 08:00+00'),
    tgeompoint_inst(ST_Point(2.2945, 48.8584, 4326), '2025-06-01 08:30+00'),
    tgeompoint_inst(ST_Point(2.3364, 48.8606, 4326), '2025-06-01 09:00+00')
]);
```

### 时态操作

**提取指定时间的值：**

```sql
SELECT valueAtTimestamp(temp, '2025-06-01 08:30:00+00')
FROM (SELECT tfloat '[20.0@08:00, 30.0@09:00]' AS temp) t;
-- Returns 25.0 (linear interpolation)
```

**限制到某个时间段：**

```sql
SELECT atTime(trip, tstzspan '[2025-06-01 08:00, 2025-06-01 09:00]')
FROM trips;
```

**获取时态值的时间跨度：**

```sql
SELECT duration(trip), startTimestamp(trip), endTimestamp(trip)
FROM trips;
```

**时态比较：**

```sql
-- Time periods when temperature exceeded 30 degrees
SELECT atValue(temperature, true)
FROM (SELECT tfloat '[20@08:00, 35@09:00, 25@10:00]' #> 30.0 AS temperature) t;
```

### 时空操作

**轨迹：将空间路径提取为几何对象：**

```sql
SELECT ST_AsText(trajectory(trip))
FROM trips
WHERE vehicle_id = 42;
```

**速度计算：**

```sql
-- Speed in units per second (m/s for geographic points)
SELECT speed(trip)
FROM trips
WHERE vehicle_id = 42;
```

**轨迹长度：**

```sql
SELECT length(trip)
FROM trips
WHERE vehicle_id = 42;
```

**时空边界框（stbox）：**

```sql
-- Get the space-time bounding box
SELECT stbox(trip)
FROM trips;

-- Construct an stbox for querying
SELECT stbox(
    ST_MakeEnvelope(2.2, 48.8, 2.4, 48.9, 4326),
    tstzspan '[2025-06-01, 2025-06-02]'
);
```

**空间限制：区域内的值：**

```sql
-- Portions of a trip within a polygon
SELECT atGeometry(trip, ST_Buffer(ST_Point(2.35, 48.86, 4326), 0.01))
FROM trips;
```

**两个时态点之间的距离：**

```sql
SELECT distance(t1.trip, t2.trip)
FROM trips t1, trips t2
WHERE t1.vehicle_id = 1 AND t2.vehicle_id = 2;
```

**最近接近距离和时间：**

```sql
SELECT nearestApproachDistance(t1.trip, t2.trip),
       nearestApproachInstant(t1.trip, t2.trip)
FROM trips t1, trips t2
WHERE t1.vehicle_id = 1 AND t2.vehicle_id = 2;
```

### 索引

MobilityDB 支持 GiST 和 SP-GiST 索引，用于高效执行时态与时空查询。

**时态类型（时间维度）的 SP-GiST 索引：**

```sql
CREATE INDEX ON measurements USING spgist(temperature);
```

**时空类型（空间与时间）的 GiST 索引：**

```sql
CREATE INDEX ON trips USING gist(trip);
```

这些索引可加速边界框查询、时态重叠检查和时空相交查询：

```sql
-- Uses GiST index for space-time filtering
SELECT vehicle_id
FROM trips
WHERE trip && stbox(
    ST_MakeEnvelope(2.2, 48.8, 2.4, 48.9, 4326),
    tstzspan '[2025-06-01, 2025-06-02]'
);
```

### 示例：车辆跟踪

存储和查询车辆 GPS 轨迹的完整示例：

```sql
CREATE TABLE vehicles (
    vehicle_id  INT PRIMARY KEY,
    plate       TEXT,
    type        TEXT
);

CREATE TABLE trips (
    trip_id     BIGSERIAL PRIMARY KEY,
    vehicle_id  INT REFERENCES vehicles(vehicle_id),
    trip        tgeompoint,
    trip_date   DATE
);

CREATE INDEX ON trips USING gist(trip);

-- Insert a trip as a sequence of GPS points
INSERT INTO trips (vehicle_id, trip, trip_date) VALUES (
    1,
    tgeompoint_seq(ARRAY[
        tgeompoint_inst(ST_Point(2.3522, 48.8566, 4326), '2025-06-01 08:00+00'),
        tgeompoint_inst(ST_Point(2.2945, 48.8584, 4326), '2025-06-01 08:15+00'),
        tgeompoint_inst(ST_Point(2.3364, 48.8606, 4326), '2025-06-01 08:30+00'),
        tgeompoint_inst(ST_Point(2.3488, 48.8534, 4326), '2025-06-01 08:45+00')
    ]),
    '2025-06-01'
);

-- Where was vehicle 1 at 08:20?
SELECT valueAtTimestamp(trip, '2025-06-01 08:20+00')
FROM trips WHERE vehicle_id = 1 AND trip_date = '2025-06-01';

-- What was the average speed?
SELECT twAvg(speed(trip))
FROM trips WHERE vehicle_id = 1 AND trip_date = '2025-06-01';

-- Total distance traveled
SELECT length(trip)
FROM trips WHERE vehicle_id = 1 AND trip_date = '2025-06-01';

-- Get the full trajectory as a LineString
SELECT ST_AsGeoJSON(trajectory(trip))
FROM trips WHERE vehicle_id = 1 AND trip_date = '2025-06-01';
```

### 示例：时空相交查询

查找在给定时间窗口内经过特定区域的所有行程：

```sql
-- Define area of interest: a circle around the Eiffel Tower
WITH area AS (
    SELECT ST_Buffer(ST_Point(2.2945, 48.8584, 4326)::geography, 500)::geometry AS geom
)
SELECT t.vehicle_id,
       t.trip_date,
       atGeometry(t.trip, a.geom) AS trip_in_area,
       length(atGeometry(t.trip, a.geom)) AS distance_in_area
FROM trips t, area a
WHERE t.trip && stbox(
    a.geom,
    tstzspan '[2025-06-01 07:00+00, 2025-06-01 10:00+00]'
)
  AND eIntersects(t.trip, a.geom)
ORDER BY t.trip_date;
```

### 聚合函数

MobilityDB 提供时态聚合函数：

```sql
-- Time-weighted average of a temporal float
SELECT twAvg(temperature) FROM sensor_data WHERE sensor_id = 1;

-- Merge multiple temporal points into one
SELECT tUnion(trip) FROM trips WHERE vehicle_id = 1 AND trip_date = '2025-06-01';

-- Centroid of a set of temporal points at each timestamp
SELECT tCentroid(trip) FROM trips WHERE trip_date = '2025-06-01';
```

### 注意事项

- 目录中的软件包名和扩展名都是 `mobilitydb`，版本为 `1.3.0`；打包矩阵面向 PostgreSQL 14 到 18，并要求 `postgis`。
- v1.3.0 增加 PostgreSQL 18 和 PostGIS 3.6 支持，但迁移说明指出二进制格式相较 MobilityDB 1.2 已改变，因此从 1.2 升级需要备份并恢复。
- 上游源码构建说明展示了在加载 MobilityDB 前设置 `shared_preload_libraries = 'postgis-3'` 和 `max_locks_per_transaction = 128`。对于未使用打包默认值的集群，请验证这些设置。
- 本地软件包元数据仍带有整理备注 `need another schema`；上游文档未确认必须使用单独模式，因此在该备注解决前应避免给出特定模式的指导。
