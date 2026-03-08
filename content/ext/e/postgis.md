---
title: "postgis"
linkTitle: "postgis"
description: "PostGIS 几何和地理空间扩展"
weight: 1500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://git.osgeo.org/gitea/postgis/postgis">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://git.osgeo.org/gitea/postgis/postgis</div>
    <div class="ext-card__desc">https://git.osgeo.org/gitea/postgis/postgis</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`postgis`**](/ext/e/postgis) | `3.6.2` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1500  | [**`postgis`**](/ext/e/postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1501  | [**`postgis_topology`**](/ext/e/postgis_topology) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `topology` |
| 1502  | [**`postgis_raster`**](/ext/e/postgis_raster) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1503  | [**`postgis_sfcgal`**](/ext/e/postgis_sfcgal) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1504  | [**`postgis_tiger_geocoder`**](/ext/e/postgis_tiger_geocoder) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `tiger` |
| 1505  | [**`address_standardizer`**](/ext/e/address_standardizer) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1506  | [**`address_standardizer_data_us`**](/ext/e/address_standardizer_data_us) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pointcloud`](/ext/e/pointcloud) [`h3`](/ext/e/h3) [`pg_geohash`](/ext/e/pg_geohash) [`geoip`](/ext/e/geoip) [`pg_polyline`](/ext/e/pg_polyline) [`earthdistance`](/ext/e/earthdistance) [`ogr_fdw`](/ext/e/ogr_fdw) [`tzf`](/ext/e/tzf) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) [`h3_postgis`](/ext/e/h3_postgis) [`mobilitydb`](/ext/e/mobilitydb) [`pgrouting`](/ext/e/pgrouting) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`postgis_topology`](/ext/e/postgis_topology) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgis` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgis36_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postgis-3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 |
| el8.aarch64 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 |
| el9.x86_64 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 |
| el9.aarch64 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 |
| el10.x86_64 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 |
| el10.aarch64 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 |
| d12.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| d12.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| d13.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| d13.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u22.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u22.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u24.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u24.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
@ el8.x86_64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/postgis36_18-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel8.1.x86_64.rpm pgdg 3.6.0 5.1MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/postgis36_18-3.6.0-1PGDG.rhel8.1.x86_64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel8.1.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.0-1PGDG.rhel8.1.aarch64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel9.1.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.0-1PGDG.rhel9.1.x86_64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel9.1.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.0-1PGDG.rhel9.1.aarch64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.5MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.5MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.7MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgis36_17-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgis36_17-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.5MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.7MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgis36_16-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgis36_16-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.7MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgis36_15-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgis36_15-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.2MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.5MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgis36_14-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgis36_14-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.2MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.2MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.6MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.5MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.3MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.4MiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `postgis` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install postgis;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y postgis -v 18  # PG 18
pig ext install -y postgis -v 17  # PG 17
pig ext install -y postgis -v 16  # PG 16
pig ext install -y postgis -v 15  # PG 15
pig ext install -y postgis -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y postgis36_18       # PG 18
dnf install -y postgis36_17       # PG 17
dnf install -y postgis36_16       # PG 16
dnf install -y postgis36_15       # PG 15
dnf install -y postgis36_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-postgis-3   # PG 18
apt install -y postgresql-17-postgis-3   # PG 17
apt install -y postgresql-16-postgis-3   # PG 16
apt install -y postgresql-15-postgis-3   # PG 15
apt install -y postgresql-14-postgis-3   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION postgis;
```
